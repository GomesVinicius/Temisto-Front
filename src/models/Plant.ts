export interface Plant {
    id: number;
    name: string;
    amount: number;
    price_sell: number;
    price_buy: number;
    height: number;
    created_at?: string;
    updated_at?: string;
}
