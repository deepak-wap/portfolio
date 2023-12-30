import nodemailer from 'nodemailer';

const sendEmail = async (req,res) => {
    const {name, email, message} = (req.body)
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            requireTLS: true,
            auth: {
                user: 'wapdk.09@gmail.com',
                pass: 'hpqbmwphmorrsplr',
            },
        });
        const mailOptions = {
            from: 'wapdk.09@gmail.com',
            to: 'wapdk.09@gmail.com',
            subject: 'Web Developer job',
            html : `<div class="container">
            <h1>New Hiring Inquiry</h1>
            <p>Hello' Deepak</p>
    
            <p>You have received a new inquiry from a potential client interested in hiring you as a web developer. Below are the details:</p>
    
            <div class="inquiry">
                <p><strong>Name: </strong> ${name}</p>
                <p><strong>Email: </strong>${email}</p>
                <p><strong>Message: </strong>${message}</p>
            </div>
    
            <div class="contact-info">
                <p>For more information or to respond to this inquiry, please click the button below.</p>
                <a class="button" href="mailto:${email}">Respond to Inquiry</a>
            </div>
        </div>`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
     
    }
    catch(error) {
        console.error('Error sending email:', error);
    }
    finally {
        res.end()
    }
};

export default sendEmail