import { AxiosResponse } from 'axios';
import { Client } from '../models/Client';
import api from '../services/api';
import { ClientWithPreferences } from '../models/ClientsWithPreferences';

interface ClientStored {
    client_id_created: number,
    msg: string
}

class ClientService {
    private baseURI: string = 'client';

    async show(query?: string): Promise<AxiosResponse<ClientWithPreferences[]>> {
        return api.get(`${this.baseURI}`, { params: { 'search': query }});
    }

    index(id: number): Promise<AxiosResponse<ClientWithPreferences>> {
        return api.get(`${this.baseURI}/${id}`);
    }

    alter(id: number, client: any): Promise<AxiosResponse<Client>> {
        return api.put(`${this.baseURI}/${id}`, client);
    }

    store(client: any): Promise<AxiosResponse<ClientStored>> {
        return api.post(`${this.baseURI}`, client);
    }

    delete(id: number): Promise<AxiosResponse<Client>> {
        return api.delete(`${this.baseURI}/${id}`);
    }
}

export default new ClientService();
