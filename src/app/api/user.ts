import axios from "axios";
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('Bearer')}` }
};

export default new class UserApi{

    async registerUser(data:any){
        try{
            const result = await axios.post('https://mateus2731.c34.integrator.host/service/api/user/register', data, config);
            return result.data;
        }catch(e:any){ 
            return e.response.data;
        }
    }
} 