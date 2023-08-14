import axios from "axios";

export default new class Produto{

    bearerToken(){
        return {
            headers: { Authorization: `Bearer ${localStorage.getItem('Bearer')}` }
        };
    }

    async saveProduto(data:any){
        try{
            const res = await axios.post('https://mateus2731.c34.integrator.host/service/api/estoque/produto/', data, this.bearerToken());
            return res.data;
        }catch(e:any){
            return e.response.data
        }
    }

    async getCategoria(){
        try{
            const res = await axios.get('https://mateus2731.c34.integrator.host/service/api/estoque/categoria/0', this.bearerToken());
            return res.data;
        }catch(e:any){
            return e.response.data;
        }
    }

    async getFornecedor(){
        try{
            const res = await axios.get('https://mateus2731.c34.integrator.host/service/api/estoque/fornecedor/0', this.bearerToken());
            return res.data;
        }catch(e:any){
            return e.response.data;
        }
    }

    async getProdutos(){
        try{
            const res = await axios.get('https://mateus2731.c34.integrator.host/service/api/estoque/produto/0', this.bearerToken());
            return res.data;
        }catch(e:any){
            return e.response.data;
        }
    }

    async saveCategoria(data:any){
        try{
            const res = await axios.post('https://mateus2731.c34.integrator.host/service/api/estoque/categoria/', data, this.bearerToken());
            return res.data;
        }catch(e:any){
            return e.response.data;
        }
    }
}