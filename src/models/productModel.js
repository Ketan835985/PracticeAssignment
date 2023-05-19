/* - Your product document should look like this
```
{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	name:"Catcher in the Rye",
	category:"book",
	price:70 //mandatory property
}
``` */

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
    },
    Price : {
        type : Number,
        required : true
    }
},{timestamps : true})

module.exports = mongoose.model("AssignProduct", productSchema);