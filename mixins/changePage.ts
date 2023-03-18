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

    function updateCurrentPage(key?: keyof FilterPage, data?: string): void {
        if (key && data) {
            store.filters[key] = data;
        }

        switch (store.filters.page) {
            case Pages.Store:
                store.pageItems = store.items;
                break;
            case Pages.Favorite:
                store.pageItems = store.items.filter((item: ItemInterface) => {
                    return item.isFavorite ? item : false;
                });
                break;
            case Pages.Deal:
                store.pageItems = store.deals;
                break;
        }
        saveToLocalStorage();
        updateFilteredData();
    }

    return{ updateCurrentPage};
}
