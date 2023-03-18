import {mainStore} from "~/store/store";
import {FilterPage} from "~/types/filters";

export default function updateLocalStorage() {
    const store = mainStore();
    const KEY_LOCAL_STORAGE: string = 'filters';

    function saveToLocalStorage():void {
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(store.filters));
    }

    function getLocalStorageFilters():FilterPage {
        return JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE) || '{"page":"Склад","type":"Все типы","search":""}');
    }

    return {saveToLocalStorage, getLocalStorageFilters}
}
