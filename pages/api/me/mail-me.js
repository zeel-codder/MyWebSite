

// import { SMTPClient } from 'emailjs';

// require('dotenv').config();
import nodemailer from 'nodemailer';
import { SMTPClient } from 'emailjs';
// import CheckMail from 'server/helpers/mail/checkemailhash';

export default async function handler(req, res) {
  
  const {email,subject,message}=req.body;


    const mymail=process.env.mail;
    const password=process.env.password

    // console.log(mymail,password)
    
  //  const transporter = await nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   secure:true,
    
  //       auth: {
  //         user: mymail,
  //         pass: password
  //       }
  //     });
      
    //  const mailOptions = {
        // from: mymail,
        // to: mymail,
        // subject: subject,
        // text: `Email from: ${email} \n Message: ${message}`
      
            
    //   };

    //  const UserOptions = {
    //     from: mymail,
    //     to: email,
        
    //     subject: 'From zeel codder',
    
    //       html:'Thank you from Contact me. <br>Contact me:<ul ><li><a href="https://www.facebook.com/zeel.prajapati.397/" title="Facebook">Facebook</a></li><li><a href="https://github.com/zeel-codder" title="Github">Github</a></li><li><a href="https://www.linkedin.com/in/zeel-prajapati-4832971a3/" title="Linkedin">LinkedIn</a></li><li><a href="https://twitter.com/ZeelCodder" title="Twitter">Twitter</a></li></ul>'
      // };

    //   console.log(transporter)

      // try{
      //    await  transporter.sendMail(mailOptions);
      // }catch(e){
      //     console.log(e)
          
      //     res.status(404).end(JSON.stringify({
      //         message:"Error in sending mail to me",

      //     }))
      // }
      //  await transporter.sendMail(UserOptions);
      try{
      const client = new SMTPClient({
        user: mymail,
        password: password,
        host: 'smtp.gmail.com',
        ssl: true,
      });

    client.send(
      {
        from: email,
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

    res.status(404).end(JSON.stringify({
      message: "Error in sending mail",

    }))
  }
         
      
      res.end(JSON.stringify({
          message:"Both Mail send"
      }))
     
};