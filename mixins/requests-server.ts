import axios from "axios";
import {mainStore} from '~/store/store'
import {ref, Ref} from 'vue'
import {ItemInterface} from "~/types";

export default function requestsServer() {
    const API_KEY: string = 'd151f1b6-deaa-4b6a-9b44-a5c722984798';
    const URL_SERVER = "https://api.jsonstorage.net/v1/json/d5cef75d-3c43-4bd9-9360-3af9e77d2ee7/18438971-d7f8-427e-80db-81abc9502812?apiKey=";
    const store = mainStore();
    const data = [
        {
            "id": 34235234523,
            "status": "Склад",
            "title": "Пиломатериалы брус доска",
            "location": "Санкт-Петербург, Красное Село",
            "seller": "Торговый Дом ГОСТ",
            "typeOfGoods": "Стройматериалы",
            "description": "Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!" +
                "Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !" +
                "Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет." +
                "Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.",
            "quantity": 3,
            "price": 16000,
            "isFavorite": true,
            "statusDeal": "Добавить в сделку",
            "typeDeal": "Аукцион",
        },
        {
            id: 324235687769,
            status: 'Склад',
            title: 'Пиломатериалы брус доска',
            location: 'Санкт-Петербург, Красное Село',
            seller: 'Торговый Дом ГОСТ',
            typeOfGoods: 'Стройматериалы',
            description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
                'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
                'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
                'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
            quantity: 3,
            price: 11000,
            isFavorite: false,
            statusDeal: 'Добавить в сделку',
            typeDeal: 'Прямые продажи',
        },
        {
            id: 24355,
            status: 'Склад',
            title: 'Пиломатериалы бревно доска',
            location: 'Санкт-Петербург, Красное Село',
            seller: 'Торговый Дом ГОСТ',
            typeOfGoods: 'Стройматериалы',
            description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
                'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
                'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
                'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
            quantity: 3,
            price: 18000,
            isFavorite: false,
            statusDeal: 'Добавить в сделку',
            typeDeal: 'Аукцион',
        },
        {
            id: 7744444,
            status: 'Склад',
            title: 'Пиломатериалы брус доска',
            location: 'Санкт-Петербург, Красное Село',
            seller: 'Торговый Дом ГОСТ',
            typeOfGoods: 'Стройматериалы',
            description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
                'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
                'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
                'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
            quantity: 5,
            price: 11000,
            isFavorite: false,
            statusDeal: 'Добавить в сделку',
            typeDeal: 'Прямые продажи',
        },
        {
            id: 888888,
            status: 'Склад',
            title: 'Пиломатериалы брус доска',
            location: 'Санкт-Петербург, Красное Село',
            seller: 'Торговый Дом ГОСТ',
            typeOfGoods: 'Стройматериалы',
            description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
                'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
                'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
                'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
            quantity: 3,
            price: 11000,
            isFavorite: false,
            statusDeal: 'Добавить в сделку',
            typeDeal: 'Аукцион',
        },
        {
            id: 663333,
            status: 'Склад',
            title: 'Пиломатериалы брус доска',
            location: 'Санкт-Петербург, Красное Село',
            seller: 'Торговый Дом ГОСТ',
            typeOfGoods: 'Стройматериалы',
            description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
                'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
                'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
                'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
            quantity: 3,
            price: 10000,
            isFavorite: false,
            statusDeal: 'Добавить в сделку',
            typeDeal: 'Прямые продажи',
        },
        {
            id: 95231,
            status: 'Склад',
            title: 'Пиломатериалы доска доска',
            location: 'Санкт-Петербург, Красное Село',
            seller: 'Торговый Дом ГОСТ',
            typeOfGoods: 'Стройматериалы',
            description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
                'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
                'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
                'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
            quantity: 3,
            price: 11000,
            isFavorite: true,
            statusDeal: 'Добавить в сделку',
            typeDeal: 'Аукцион',
        },
        {
            id: 77777765554444,
            status: 'Склад',
            title: 'Пиломатериалы брус доска',
            location: 'Санкт-Петербург, Красное Село',
            seller: 'Торговый Дом ГОСТ',
            typeOfGoods: 'Стройматериалы',
            description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
                'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
                'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
                'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
            quantity: 3,
            price: 11000,
            isFavorite: false,
            statusDeal: 'Добавить в сделку',
            typeDeal: 'Прямые продажи',
        },
        {
            id: 8562147,
            status: 'Склад',
            title: 'Пиломатериалы брус доска',
            location: 'Санкт-Петербург, Красное Село',
            seller: 'Торговый Дом ГОСТ',
            typeOfGoods: 'Стройматериалы',
            description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
                'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
                'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
                'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
            quantity: 3,
            price: 11000,
            isFavorite: false,
            statusDeal: 'Добавить в сделку',
            typeDeal: 'Аукцион',
        },
        {
            id: 765453432,
            status: 'Склад',
            title: 'Пиломатериалы сруб',
            location: 'Санкт-Петербург, Красное Село',
            seller: 'Торговый Дом ГОСТ',
            typeOfGoods: 'Стройматериалы',
            description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!' +
                'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !' +
                'Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.' +
                'Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
            quantity: 3,
            price: 11000,
            isFavorite: false,
            statusDeal: 'Добавить в сделку',
            typeDeal: 'Прямые продажи',
        },
    ];

    function updateItems(items: ItemInterface[], deals: ItemInterface[]) {
        axios.put(URL_SERVER + API_KEY, {items, deals}, {
            responseType: "json",
        }).then(resolve => {
            console.log(resolve)
        })
    }

    function getItems() {
        let currentFilters = JSON.parse(localStorage.getItem('filters') || "{page:'Склад', type: 'Все типы', search: }");
        axios.get(URL_SERVER + API_KEY)
            .then(result => {
                store.inProgress = false;
                store.items = result.data.items;
                store.deals = result.data.deals;
                store.filters = currentFilters;
                store.changeCurrentPage()
            })
    }

    return {updateItems, getItems}

}
