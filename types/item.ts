export interface ItemInterface {
    id: number;
    parentId?: number;
    status: string;
    title: string;
    location: string;
    seller: string;
    typeOfGoods: string;
    description: string;
    quantity: number;
    price: number;
    isFavorite: boolean;
    statusDeal: string;
    typeDeal: string;
    urlImage:string;
}
