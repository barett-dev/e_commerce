const {Router} = require('express');
const userService = require('../services/users_services');
const UserDto = require('../dto/user.dto')
const router = Router();

router.get('/paginate', async (req, res) => { 
    try {
        const { limit, page } = parseInt(req.query)
        console.log(limit)
        const response = userService.usersSort( limit, page)
        res.json({status: 'succes', message : response})
      } catch (error) {
        res.status(400).json({ status: 'error', error})
      }
})

router.get('/', async (req, res) => { 
    try {
        const response = await userService.get()

        res.json({ message: response})
        res.json({ message: 'Users found succesfully!'})
    } catch (error){
        res.status(400).json({ status: 'error', error})
    }
})

router.get('/find_user', async (req, res) => {
    try {
        const item = req.query
        const response = userService.get

        res.json({ message: response})
        res.json({ message: ' User found succesfully!'})
    } catch (error) {
        res.status(400).json({ status: 'error', error})

    }
})
router.post('/', async (req, res) => {
    try {
        const newUserInfo = new UserDto(req.body)

        const response = await userService.create(newUserInfo) 
    
        res.json({ message: response })
        res.json({ message:'User created succesfully!' })  
    } catch {
        res.status(400).json({ status: 'error'})
    }
    
})

router.patch('/:id', async (req, res) => {
    try {
        const response = await userService.updateUser(req.params.id, req.body)
        res.json({ response })
    } catch (error) {
        res.send('User not found')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        res.send('User deleted')
    } catch (error) {
        res.status(404).send('User not found ');
    }
})


module.exports = router;
