import axios from "axios";
import {mainStore} from '~/store/store'
import {ItemInterface} from "~/types/item";
import changePage from "~/mixins/changePage";
import updateLocalStorage from "~/mixins/updateLocalStorage";
import {API_KEY, URL_SERVER} from "~/config";

export default function requestsServer() {
    const store = mainStore();
    const {updateCurrentPage} = changePage();
    const {getLocalStorageFilters} = updateLocalStorage();

    function updateItems(items: ItemInterface[], deals: ItemInterface[]): void {
        axios.put(URL_SERVER + API_KEY, {items, deals}, {
            responseType: "json",
        });
    }

    function getItems(): void {
        axios.get(URL_SERVER + API_KEY)
            .then(result => {
                store.inProgress = false;
                store.items = result.data.items;
                store.deals = result.data.deals;
                store.filters = getLocalStorageFilters();
                updateCurrentPage();
            });
    }

    return {updateItems, getItems};
}
