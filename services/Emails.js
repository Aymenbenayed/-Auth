const nodemailer= require("nodemailer")
const nodemailerSendgrid = require("nodemailer-sendgrid")
const jwt = require("jsonwebtoken")



const transport=nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey:process.env.SENDGRID_API_KEY
    })
);



exports.sendConfirmationEmail= async (user)=> {
    const token = await jwt.sign(
        {id: user._id},
        process.env.SECRET_KEY,
        { expiresIn: 60 * 60 }
      );
    const url=`http://localhost:3000/confirmation/${token}`

    transport.sendMail({
        from : 'laymen.bnmohamed@gmail.com',
    to : `${user.name}<${user.email}>`,
    subject:'Confirmation Email',
    html:`Confirmation Email <a href=${url}> ${url}</a>`
        
    }).then( ()=>{
        console.log("Email sent")

    }).catch(()=> {
        console.log("Email was not sent")
    })
}
