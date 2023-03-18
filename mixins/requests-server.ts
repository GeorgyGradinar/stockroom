import axios from "axios";
import {mainStore} from '~/store/store'
import {ItemInterface} from "~/types/item";
import changePage from "~/mixins/changePage";

export default function requestsServer() {
    const API_KEY: string = 'd151f1b6-deaa-4b6a-9b44-a5c722984798';
    const URL_SERVER = "https://api.jsonstorage.net/v1/json/d5cef75d-3c43-4bd9-9360-3af9e77d2ee7/18438971-d7f8-427e-80db-81abc9502812?apiKey=";
    const store = mainStore();
    const {changeCurrentPage} = changePage();

    function updateItems(items: ItemInterface[], deals: ItemInterface[]) {
        axios.put(URL_SERVER + API_KEY, {items, deals}, {
            responseType: "json",
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
                changeCurrentPage()
            })
    }

    return {updateItems, getItems}
}
