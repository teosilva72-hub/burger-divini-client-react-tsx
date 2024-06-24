import axios from "axios";
let config: any;
(async () => {
    config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('Bearer')}` }
    };
})()
export default new class UserApi {

    async registerUser(data: any) {
        try {
            const result = await axios.post('https://mateus2731.c34.integrator.host/service/api/user/register', data, config);
            return result.data;
        } catch (e: any) {
            return e.response.data;
        }
    }

    async listUser() {
        try {
            const result = await axios.get('https://mateus2731.c34.integrator.host/service/api/user/all', config);
            return result.data;
        } catch (e: any) {
            return e.response.data;
        }
    }

    async editUser(data: any) {
        try {
            const result = await axios.put(`https://mateus2731.c34.integrator.host/service/api/user/edit/`,data, config);
            return result.data;
        } catch (e: any) {
            return e.response.data;
        }
    }

    async deleteUser(id: number) {
        try {
            const result = await axios.delete(`https://mateus2731.c34.integrator.host/service/api/user/${id}`, config)
            return result.data;
        } catch (e: any) {
            return e.response.data;
        }
    }
} 