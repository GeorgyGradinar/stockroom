import {defineStore} from 'pinia'
import {ref, Ref} from "vue";
import {ItemInterface} from "~/types/item";
import { FilterPage} from "~/types/filters";

export const mainStore = defineStore('store', () => {

    const items: Ref<ItemInterface[]> = ref([]);
    const deals: Ref<ItemInterface[]> = ref([]);
    const currentItems: Ref<ItemInterface[]> = ref([]);
    const filteredItems: Ref<ItemInterface[]> = ref([]);
    const filters: Ref<FilterPage> = ref({page: '', type: '', search: ''});
    const inProgress: Ref<boolean> = ref(true);

    return {
        items,
        filters,
        currentItems,
        filteredItems,
        deals,
        inProgress
    }
})
