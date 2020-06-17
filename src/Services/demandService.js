import axios from 'axios';
import env from "../environment";

class demandService {

    static getDemands = () => {
        return axios.get(`${env.API}activeDemands`);
    }

    static createDemands = (data) => {
        return axios.post(`${env.API}createDemand`, data);
    }

}

export default demandService;