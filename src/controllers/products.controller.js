const { Router } = require('express')
const productService = require('../services/products_services')
const productDto = require('../dto/products.dto')
const router = Router()

router.get('/paginate', async (req, res) => { 
    try {
        const { limit, page } = parseInt(req.query)
        console.log(limit)
        const response = productService.productsSort( limit, page)
        res.json({status: 'succes', message : response})
      } catch (error) {
        res.status(400).json({ status: 'error', error})
      }
})

router.get('/', async (req, res) => { 
    try {
        const response = await productService.get()

        res.json({ message: response})
        res.json({ message: 'Products found succesfully!'})
    } catch (error){
        res.status(400).json({ status: 'error', error})
    }
})

router.get('/find_product', async (req, res) => { // modificar nombre y item
    try {
        const item = req.query
        const response = productService.get

        res.json({ message: response})
        res.json({ message: ' Product found succesfully!'})
    } catch (error) {
        res.status(400).json({ status: 'error', error})

    }
})
router.post('/', async (req, res) => {
    try {
        const newProductInfo = new productDto(req.body)

        const response = await productService.create(newProductInfo) 
    
        res.json({ message: response })
        res.json({ message:'Product created succesfully!' })  
    } catch {
        res.status(400).json({ status: 'error'})
    }
    
})

router.patch('/:id', async (req, res) => {
    try {
        const response = await productService.update(req.params.id, req.body)
        res.json({ response })
    } catch (error) {
        res.send('Product not found')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await productService.remove(req.params.id);
        res.send('Product deleted')
    } catch (error) {
        res.status(404).send('User not found ');
    }
})
module.exports = router;