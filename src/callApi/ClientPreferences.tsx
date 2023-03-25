import { AxiosResponse } from "axios";
import { ClientPreference } from "../models/ClientsPreferences";
import api from '../services/api';

class ClientPreferencesService {
    private baseURI: string = 'client_pref'

    store(clientPref: ClientPreference[]){
        return api.post(`${this.baseURI}`, clientPref)
    }

}

export default new ClientPreferencesService();
