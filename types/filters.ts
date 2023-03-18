export interface FilterPage {
    page: string
    type: string
    search: string
}

export enum FilterType {
    AllType = 'Все типы',
    DirectSales = 'Прямые продажи',
    Auction = 'Аукцион'
}

export enum FilterKey {
    Page = 'page',
    Type = 'type',
    Search = 'search'
}
