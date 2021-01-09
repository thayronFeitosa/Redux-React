export interface Iproduct {
    id: string;
    title: string;
    price: number;
}

export interface IcartItem {
    product: Iproduct;
    quantity: number;
}

export interface IcartState{
    items: IcartItem[];
}