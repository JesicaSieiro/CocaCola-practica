const{Router}= require('express');
const nodemailer=require('nodemailer');
const router=Router();

router.post('/send-email',async (req,res)=>{
    //guardo los datos del req.body en cada constante
    const {name, email,  message}=req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User email: ${email}</li>
           
            
        </ul>
        <p>${message}</p>

        <h3>Recibimos su mensaje correctamente ,  en breve nos estaremos comunicando con usted.</h3>
        <h2 color="red">Gracias con ponerse en contacto con nosotros</h2>
        <h3>Saludos Jesica Sieiro</h3>
        
    `;
    const transporter=nodemailer.createTransport({
       
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'jrominasieiro@gmail.com',
            pass:'cuentaDePrueba1'
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    const info= await transporter.sendMail({
        from:"Pagina de Jesica Sieiro",
        to:['jesica.sieiro@gmail.com', email],
        subject:'Formularo de contacto de pagina realizada por Jesica Sieiro',
        html:contentHTML
    });

    console.log('Message sent', info.messageId);
    
    res.redirect('/success.html');

    
});

module.exports=router;