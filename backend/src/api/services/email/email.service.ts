import { transporter } from "../../config/email-transporter";

interface IEmail {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

class EmailService { 

    async send(emailData: IEmail) {
        
        return await transporter.sendMail(emailData);
    }

}

export default new EmailService();