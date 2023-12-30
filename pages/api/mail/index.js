import sendEmail from "@/controller/mail.controller";
const mail = (req, res)=>{
    if(req.method === 'POST') return sendEmail(req, res)
}

export default mail