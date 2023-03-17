export interface ItemInterface {
    id: number
    parentId?: number
    status: string
    title: string
    location: string
    seller: string
    typeOfGoods: string
    description: string
    quantity: number
    price: number
    isFavorite: boolean
    statusDeal: string
    typeDeal: string
}

export interface Filters {
    page: string
    type: string
    search: string
}

export enum Pages {
    Store = 'Склад',
    Favorite = 'Избранное',
    Deal = 'Сделки'
}

