import { AxiosResponse } from 'axios';
import { Client } from '../models/Client';
import api from '../services/api';

class ClientService {
    private baseURI: string = 'client';

    show(query?: string): Promise<AxiosResponse<Client[]>> {
        return api.get(`${this.baseURI}`, { params: { 'search': query }});
    }

    index(id: number): Promise<AxiosResponse<Client>> {
        return api.get(`${this.baseURI}/${id}`);
    }

    alter(id: number, client: any): Promise<AxiosResponse<Client>> {
        return api.put(`${this.baseURI}/${id}`, client);
    }

    store(client: any): Promise<AxiosResponse<Client>> {
        return api.post(`${this.baseURI}`, client);
    }

    delete(id: number): Promise<AxiosResponse<Client>> {
        return api.delete(`${this.baseURI}/${id}`);
    }
}

export default new ClientService();
