import { AxiosResponse } from 'axios';
import api from '../services/api';
import { Plant } from '../models/Plant';

interface PlantStore {
    name: string,
    amount: number,
    price_buy: number,
    price_sell: number,
    height: number
}

class PlantService {
    private baseURI: string = 'plant';

    show(id: number, query?: string): Promise<AxiosResponse<Plant[]>> {
        return api.get(`${this.baseURI}/${id}`, { params: { 'search': query }});
    }

    index(): Promise<AxiosResponse<Plant[]>> {
        return api.get(`${this.baseURI}`);
    }

    store(plant: PlantStore): Promise<AxiosResponse<Plant>> {
        return api.post(`${this.baseURI}`, plant);
    }

    alter(id: number, plant: PlantStore): Promise<AxiosResponse<Plant>> {
        return api.put(`${this.baseURI}/${id}`, plant);
    }
    
    delete(id: number): Promise<AxiosResponse<Plant>> {
        return api.delete(`${this.baseURI}/${id}`);
    }
}

export default new PlantService();
