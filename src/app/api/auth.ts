import axios from 'axios';

export default new class Auth {

    async login(email: string, pass: string) {
        const data = { email: email, password: pass };
        try {
            const result: any = await axios.post('https://mateus2731.c34.integrator.host/service/api/auth/login', data);
            return result.data;
        } catch (error: any) {
            return error.response.data || false;
        }
    }

    async activeProfileUser(email: string, token: number) {
        const data = { email: email, token: token };
        try {
            const result: any = await axios.post('https://mateus2731.c34.integrator.host/service/api/auth/user/active/profile', data);
            return result.data;
        } catch (error: any) {
            return error.response.data;
        }
    }

    async recoveryPass(email: string) {
        if(email == undefined) return null;
        try {
            
            const result = await axios.post('https://mateus2731.c34.integrator.host/service/api/user/account/recovery', { email: email });
            return result.data;
        } catch (error: any) {
            return error.response.data;
        }
    }
}