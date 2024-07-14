import axios from "axios";
require('dotenv').config();

export default async function handleRecaptcha(token: string): Promise<void | boolean> {
    await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_KEY}&response${token}`)
        .then(res => {
            if (!res.data.success)
                return false;

            return true;
        })
        .catch(error => {
            console.log(error);

            return false;
        });
}