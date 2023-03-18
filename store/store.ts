import {defineStore} from 'pinia'
import {ref, Ref} from "vue";
import {ItemInterface} from "~/types/item";
import {FilterPage} from "~/types/filters";

export const mainStore = defineStore('store', () => {
    const items: Ref<ItemInterface[]> = ref([]);
    const deals: Ref<ItemInterface[]> = ref([]);
    const pageItems: Ref<ItemInterface[]> = ref([]);
    const filteredItems: Ref<ItemInterface[]> = ref([]);
    const filters: Ref<FilterPage> = ref({page: '', type: '', search: ''});
    const inProgress: Ref<boolean> = ref(true);
    const notificationDeal:Ref<boolean> = ref(false);
    const notificationLike:Ref<boolean> = ref(false);

    return {
        items,
        filters,
        pageItems,
        filteredItems,
        deals,
        inProgress,
        notificationDeal,
        notificationLike
    }
})
