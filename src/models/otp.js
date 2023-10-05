const mongoose = require('mongoose')
const otpSchema =  new mongoose.Schema({
email:String,
code:String,
expireIn:Number
},{
    timestamps:true
})

export const Task =
  mongoose.models.otp || mongoose.model("otp", otpSchema);