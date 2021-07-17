

// import { SMTPClient } from 'emailjs';

// require('dotenv').config();
// import nodemailer from 'nodemailer';
import { SMTPClient } from 'emailjs';
// import CheckMail from 'server/helpers/mail/checkemailhash';

export default async function handler(req, res) {
  
  const {email,subject,message}=req.body;


    const mymail=process.env.mail;
    const password=process.env.password

   
      try{
      const client = new SMTPClient({
        user: mymail,
        password: password,
        host: 'smtp.gmail.com',
        ssl: true,
      });

    client.send(
      {
        from: mymail,
        to: mymail,
        subject: subject,
        text: `Email from: ${email} \n Message: ${message}`
    
      }
    );
    client.send(
      {
        from: mymail,
            to: email,
            
            subject: 'From zeel codder',
        
              text:'Thank you from Contact me.'
    
      }
    );
  } 
  catch (e)
  {
    console.log(e)

    return res.status(404).end(JSON.stringify({
      message: "Error in sending mail",

    }))
  }
         
      
      res.end(JSON.stringify({
          message:"Both Mail send"
      }))
     
};