import { AxiosResponse } from 'axios';
import api from '../services/api';
import { Plant } from '../models/Plant';

class PlantService {
    private baseURI: string = 'plant';

    show(query?: string): Promise<AxiosResponse<Plant[]>> {
        return api.get(`${this.baseURI}`, { params: { 'search': query }});
    }
}

export default new PlantService();
