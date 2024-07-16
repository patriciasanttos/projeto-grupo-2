import axios from "axios";
require('dotenv').config();

const handleRecaptcha = async (token: string) => {
    const authorization = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_KEY}&response=${token}`)
        .then(res => {
            return res.data.success
        })
        .catch(error => console.log(error));
    
    return authorization;
}

export default handleRecaptcha;