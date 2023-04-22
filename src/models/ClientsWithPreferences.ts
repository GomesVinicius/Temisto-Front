import { Client } from "./Client";
import { Preferences } from "./Preferences";

export interface ClientWithPreferences {
    client: Client
    pref: [Preferences]
}