const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')
const user2Model = require('../models/user2Model')


/* For every purchase we save an order document in the orders collection. isFreeAppUser property in an Order document depends on the header **isFreeAppUser**. If the **isFreeAppUser** header is true then the balance of the user is not deducted and the amount in order is set to 0 as well the attribute in order **isFreeAppUser** is set to true. If this header has a false value then the product’s price is checked. This value is deducted from the user’s balance and the order amount is set to the product’s price as well as the attrbiute **isFreeAppUser** is set to false in order document*/
const createOrder = async (req,res) =>{
    try {
        if(!req.body) return res.status(400).send({ message: 'please provide a order details' })
        else { 
            const isFreeAppUser = req.headers["isfreeappuser"]
            const {userId, productId} = req.body
            let userBalance = (await user2Model.findById(userId)).balance
            let productPrice = (await productModel.findById(productId)).Price
            const orderDetails = {
                userId,
                productId,
                amount : 0, 
            }
            if(isFreeAppUser == "true"){
                orderDetails.amount = 0
            }
            else{
                if(userBalance < productPrice) return res.status(400).send({ message: "insufficient balance"})
                orderDetails.amount = productPrice
                userBalance = userBalance - productPrice
                await user2Model.findByIdAndUpdate(userId,{$set : {balance: userBalance}},{new : true})
            }
            const order = await orderModel.create(orderDetails)
            res.status(201).send({message : order})
        }
    } catch (error) {
        res.status(500).send({ message: error})
    }
}

module.exports = {createOrder}