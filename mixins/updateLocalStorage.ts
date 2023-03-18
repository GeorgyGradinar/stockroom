import {mainStore} from "~/store/store";

export default function updateLocalStorage(){
    const store = mainStore();
    const KEY_LOCAL_STORAGE: string = 'filters';

    function saveToLocalStorage() {
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(store.filters));
    }

    return{saveToLocalStorage}
}
