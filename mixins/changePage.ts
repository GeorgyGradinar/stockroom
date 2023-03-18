import {ItemInterface} from "~/types/item";
import {FilterPage} from "~/types/filters";
import {Pages} from "~/types/pages";
import {mainStore} from "~/store/store";
import updateLocalStorage from "~/mixins/updateLocalStorage";
import updateFilters from "~/mixins/updateFilters";

export default function changePage(){
    const store = mainStore();
    const {saveToLocalStorage} = updateLocalStorage();
    const {updateFilteredData} = updateFilters();

    function changeCurrentPage(key?: keyof FilterPage, data?: string): void {
        if (key && data) {
            store.filters[key] = data;
        }

        if (store.filters.page === Pages.Store) {
            store.currentItems = store.items;
        } else if (store.filters.page === Pages.Favorite) {
            store.currentItems = store.items.filter((item: ItemInterface) => {
                return item.isFavorite ? item : false;
            })
        } else if (store.filters.page === Pages.Deal) {
            store.currentItems = store.deals;
        }
        saveToLocalStorage();
        updateFilteredData();
    }

    return{changeCurrentPage}
}
