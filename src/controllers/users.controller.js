const {Router} = require('express');
const userService = require('../services/users_services');
const router = Router();

router.get('/users_paginate', async (req, res) => { 
    try {
        const { limit, page } = req.query
        const response = userService.usersSort( limit, page)
        res.json({status: 'succes', message : response})
      } catch (error) {
        res.status(400).json({ status: 'error', error})
      }
})

router.get('/', async (req, res) => { 
    try {
        const response = userService.get()

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
    const { f_name, l_name, email, password } = req.body;

    const userInfo = {
        f_name,
        l_name,
        email,
        password,
    }

    const response = createUser.create(userInfo) 
    
    res.json({ message: response })
    res.json({ message:'User created succesfully!' })
})


module.exports = router;
