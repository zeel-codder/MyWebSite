
// require('dotenv').config();
import nodemailer from 'nodemailer'
import CheckMail from 'server/mail/checkemailhash';

export default async function handler(req, res) {

    const {email,subject,message}=req.body;

    const isUserEmailHash=CheckMail(email);
    console.log(isUserEmailHash)

    if(!isUserEmailHash){
        res.status(400).end(JSON.stringify({
            message:"User Email not Valid"
        }))
    }
    // console.log(req.body);

    const mymail=process.env.mail;
    const password=process.env.password

    // console.log(mymail,password)
    
   const transporter = await nodemailer.createTransport({
    service: 'gmail',
    secure:true,
    
        auth: {
          user: mymail,
          pass: password
        }
      });
      
     const mailOptions = {
        from: mymail,
        to: mymail,
        subject: subject,
        text: `Email from: ${email} \n Message: ${message}`
      
            
      };

     const UserOptions = {
        from: mymail,
        to: email,
        
        subject: 'From zeel codder',
    
          html:'Thank you from Contact me. <br>Contact me:<ul ><li><a href="https://www.facebook.com/zeel.prajapati.397/" title="Facebook">Facebook</a></li><li><a href="https://github.com/zeel-codder" title="Github">Github</a></li><li><a href="https://www.linkedin.com/in/zeel-prajapati-4832971a3/" title="Linkedin">LinkedIn</a></li><li><a href="https://twitter.com/ZeelCodder" title="Twitter">Twitter</a></li></ul>'
      };

    //   console.log(transporter)

      try{
         await  transporter.sendMail(mailOptions);
      }catch(e){
          console.log(e)
          
          res.status(404).end(JSON.stringify({
              message:"Error in sending mail to me",

          }))
      }
      try{
         await transporter.sendMail(UserOptions);
         
      }catch{
          res.status(404).end(JSON.stringify({
              message:"Error in sending mail to User"
          }))
      }
      
      res.end(JSON.stringify({
          message:"Both Mail send"
      }))
     
};