const { Router } = require('express')
const cartService = require('../services/cart_services')

const router = Router()

router.post('/add/:id', async (req, res) => {
    try {
        const product = await cartService.add(req.params.id)
        res.json({ 'message': product})
    } catch (error) {
        res.send('product not found')
    }

    

})

module.exports = router