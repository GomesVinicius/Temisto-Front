import { AxiosResponse } from 'axios';
import React from 'react';
import { Client } from '../models/Client';
import api from '../services/api';

class ClientService {
    private baseURI: string = 'client';

    show(): Promise<AxiosResponse<Client[]>> {
        return api.get(`${this.baseURI}`);
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
}

export default new ClientService();
