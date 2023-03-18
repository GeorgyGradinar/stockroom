import { ItemInterface} from "~/types/item";
import {FilterPage, FilterType} from "~/types/filters";

import {mainStore} from "~/store/store";
import updateLocalStorage from "~/mixins/updateLocalStorage";

export default function updateFilters(){
    const store = mainStore();
    const {saveToLocalStorage} = updateLocalStorage();

    function changeFilters(key: keyof FilterPage, data: string): void {
        store.filters[key] = data;
        saveToLocalStorage();
        updateFilteredData();
    }

    function updateFilteredData(): void {
        store.filteredItems = store.currentItems.filter((item: ItemInterface) => {
            const hasSelectedType: boolean = store.filters.type === FilterType.AllType ? true :
                item.typeDeal === store.filters.type;
            const isIncludesSearchString: boolean = item.title.toLowerCase().includes(store.filters.search.trim().toLowerCase());
            return hasSelectedType && isIncludesSearchString;
        })
    }

    return{changeFilters, updateFilteredData }
}
