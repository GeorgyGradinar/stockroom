export interface FilterPage {
    [FilterKey.Page]: string;
    [FilterKey.Type]: string;
    [FilterKey.Search]: string;
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
