import axios from 'axios';

export default new class Auth{

    async login(email:string, pass:string){
        const data = {
            email: email,
            password: pass
        }

        try{
            const result = await axios.post('https://mateus2731.c34.integrator.host/service/api/auth/login', data);
            return result.data;
        }catch(error:any){
            return error.response.data;
        }

    }
}