import { AxiosResponse } from 'axios';
import React from 'react';
import { Client } from '../models/Client';
import api from '../services/api';

class ClientService {
    private baseURI: string = 'client';

    show(): Promise<AxiosResponse<Client[]>> {
        return api.get(`${this.baseURI}`);
    }
}

export default new ClientService();
