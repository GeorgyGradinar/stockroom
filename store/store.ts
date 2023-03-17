import {defineStore} from 'pinia'
import {ref, Ref} from "vue";
import {ItemInterface, Filters, Pages} from "~/types";
import requestsServer from '~/mixins/requests-server'

export const mainStore = defineStore('store', () => {
    const {updateItems, getItems} = requestsServer();

    // const items: Ref<ItemInterface[]> = ref([
    //     {
    //         "id": 34235234523,
    //         "status": "Склад",
    //         "title": "Пиломатериалы брус доска",
    //         "location": "Санкт-Петербург, Красное Село",
    //         "seller": "Торговый Дом ГОСТ",
    //         "typeOfGoods": "Стройматериалы",
    //         "description": "Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!" +
    //             "Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !" +
    //             "Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет." +
    //             "Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.",
    //         "quantity": 3,
    //         "price": 16000,
    //         "isFavorite": true,
    //         "statusDeal": "Добавить в сделку",
    //         "typeDeal": "Аукцион",
    //     },
    //     {
    //         id: 324235687769,
    //         status: 'Склад',
    //         title: 'Пиломатериалы брус доска',
    //         location: 'Санкт-Петербург, Красное Село',
    //         seller: 'Торговый Дом ГОСТ',
    //         typeOfGoods: 'Стройматериалы',
    //         description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
    //             'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
    //             'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
    //             'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    //         quantity: 3,
    //         price: 11000,
    //         isFavorite: false,
    //         statusDeal: 'Добавить в сделку',
    //         typeDeal: 'Прямые продажи',
    //     },
    //     {
    //         id: 24355,
    //         status: 'Склад',
    //         title: 'Пиломатериалы бревно доска',
    //         location: 'Санкт-Петербург, Красное Село',
    //         seller: 'Торговый Дом ГОСТ',
    //         typeOfGoods: 'Стройматериалы',
    //         description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
    //             'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
    //             'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
    //             'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    //         quantity: 3,
    //         price: 18000,
    //         isFavorite: false,
    //         statusDeal: 'Добавить в сделку',
    //         typeDeal: 'Аукцион',
    //     },
    //     {
    //         id: 7744444,
    //         status: 'Склад',
    //         title: 'Пиломатериалы брус доска',
    //         location: 'Санкт-Петербург, Красное Село',
    //         seller: 'Торговый Дом ГОСТ',
    //         typeOfGoods: 'Стройматериалы',
    //         description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
    //             'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
    //             'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
    //             'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    //         quantity: 5,
    //         price: 11000,
    //         isFavorite: false,
    //         statusDeal: 'Добавить в сделку',
    //         typeDeal: 'Прямые продажи',
    //     },
    //     {
    //         id: 888888,
    //         status: 'Склад',
    //         title: 'Пиломатериалы брус доска',
    //         location: 'Санкт-Петербург, Красное Село',
    //         seller: 'Торговый Дом ГОСТ',
    //         typeOfGoods: 'Стройматериалы',
    //         description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
    //             'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
    //             'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
    //             'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    //         quantity: 3,
    //         price: 11000,
    //         isFavorite: false,
    //         statusDeal: 'Добавить в сделку',
    //         typeDeal: 'Аукцион',
    //     },
    //     {
    //         id: 663333,
    //         status: 'Склад',
    //         title: 'Пиломатериалы брус доска',
    //         location: 'Санкт-Петербург, Красное Село',
    //         seller: 'Торговый Дом ГОСТ',
    //         typeOfGoods: 'Стройматериалы',
    //         description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
    //             'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
    //             'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
    //             'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    //         quantity: 3,
    //         price: 10000,
    //         isFavorite: false,
    //         statusDeal: 'Добавить в сделку',
    //         typeDeal: 'Прямые продажи',
    //     },
    //     {
    //         id: 95231,
    //         status: 'Склад',
    //         title: 'Пиломатериалы доска доска',
    //         location: 'Санкт-Петербург, Красное Село',
    //         seller: 'Торговый Дом ГОСТ',
    //         typeOfGoods: 'Стройматериалы',
    //         description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
    //             'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
    //             'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
    //             'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    //         quantity: 3,
    //         price: 11000,
    //         isFavorite: true,
    //         statusDeal: 'Добавить в сделку',
    //         typeDeal: 'Аукцион',
    //     },
    //     {
    //         id: 77777765554444,
    //         status: 'Склад',
    //         title: 'Пиломатериалы брус доска',
    //         location: 'Санкт-Петербург, Красное Село',
    //         seller: 'Торговый Дом ГОСТ',
    //         typeOfGoods: 'Стройматериалы',
    //         description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
    //             'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
    //             'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
    //             'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    //         quantity: 3,
    //         price: 11000,
    //         isFavorite: false,
    //         statusDeal: 'Добавить в сделку',
    //         typeDeal: 'Прямые продажи',
    //     },
    //     {
    //         id: 8562147,
    //         status: 'Склад',
    //         title: 'Пиломатериалы брус доска',
    //         location: 'Санкт-Петербург, Красное Село',
    //         seller: 'Торговый Дом ГОСТ',
    //         typeOfGoods: 'Стройматериалы',
    //         description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
    //             'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
    //             'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
    //             'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    //         quantity: 3,
    //         price: 11000,
    //         isFavorite: false,
    //         statusDeal: 'Добавить в сделку',
    //         typeDeal: 'Аукцион',
    //     },
    //     {
    //         id: 765453432,
    //         status: 'Склад',
    //         title: 'Пиломатериалы сруб',
    //         location: 'Санкт-Петербург, Красное Село',
    //         seller: 'Торговый Дом ГОСТ',
    //         typeOfGoods: 'Стройматериалы',
    //         description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
    //             'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
    //             'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
    //             'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    //         quantity: 3,
    //         price: 11000,
    //         isFavorite: false,
    //         statusDeal: 'Добавить в сделку',
    //         typeDeal: 'Прямые продажи',
    //     },
    // ]);
    const items: Ref<ItemInterface[]> = ref([]);
    const deals: Ref<ItemInterface[]> = ref([]);
    const currentItems: Ref<ItemInterface[]> = ref([]);
    const filteredItems: Ref<ItemInterface[]> = ref([]);
    const filters: Ref<Filters> = ref({page: '', type: '', search: ''});
    const inProgress: Ref<boolean> = ref(true);

    function changeCurrentPage(key?: keyof Filters, data?: string): void {
        if (key && data) {
            filters.value[key] = data;
        }

        if (filters.value.page === Pages.Store) {
            currentItems.value = items.value;
        } else if (filters.value.page === Pages.Favorite) {
            currentItems.value = items.value.filter((item: ItemInterface) => {
                return item.isFavorite ? item : false;
            })
        } else if (filters.value.page === Pages.Deal) {
            currentItems.value = deals.value;
        }
        saveToLocalStorage();
        updateFilteredData();
    }

    function changeFilters(key: keyof Filters, data: string): void {
        filters.value[key] = data;
        saveToLocalStorage();
        updateFilteredData();
    }

    function updateFilteredData(): void {
        filteredItems.value = currentItems.value.filter((item: ItemInterface) => {
            const hasSelectedType: boolean = filters.value.type === 'Все типы' ? true :
                item.typeDeal === filters.value.type;
            const isIncludesSearchString: boolean = item.title.toLowerCase().includes(filters.value.search.trim().toLowerCase());
            return hasSelectedType && isIncludesSearchString;
        })
    }

    function updateDealType(idItem: number): void {

        let id: number;
        if (filters.value.page === 'Сделки') {
            id = deals.value.findIndex((item: ItemInterface) => item.id === idItem);
            deals.value.forEach((item: ItemInterface) => {
                if (item.parentId === deals.value[id].parentId) {
                    item.statusDeal = 'Оплачено';
                }
            })
        } else {
            id = items.value.findIndex((item: ItemInterface) => item.id === idItem);
            deals.value.push({
                ...items.value[id],
                parentId: items.value[id].id,
                id: Math.floor(Math.random() * 1000),
                statusDeal: 'Оплатить'
            })
        }
        updateItems(items.value, deals.value);
    }

    function updateFavorite(idItem: number): void {
        items.value.forEach((item: ItemInterface) => {
            if (item.id === idItem) {
                item.isFavorite = !item.isFavorite;
            }
        })
        deals.value.forEach((item: ItemInterface) => {
            if (item.parentId === idItem) {
                item.isFavorite = !item.isFavorite;
            }
        })
        updateItems(items.value, deals.value);
    }

    function saveToLocalStorage() {
        localStorage.setItem('filters', JSON.stringify(filters.value));
    }

    return {
        items,
        filters,
        currentItems,
        filteredItems,
        deals,
        changeFilters,
        updateDealType,
        changeCurrentPage,
        updateFavorite,
        inProgress
    }
})
