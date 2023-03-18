import {ItemInterface} from "~/types/item";
import {mainStore} from "~/store/store";
import requestsServer from "~/mixins/requestsServer";

export default function toggleFavorite(){
    const store = mainStore();
    const {updateItems} = requestsServer();

    function updateFavorite(idItem: number): void {
        store.items.find((item: ItemInterface) => {
            if (item.id === idItem) {
                item.isFavorite = !item.isFavorite;
                return true
            }
        })
        store.deals.forEach((item: ItemInterface) => {
            if (item.parentId === idItem) {
                item.isFavorite = !item.isFavorite;
            }
        })
        updateItems(store.items, store.deals);
    }

    return {updateFavorite};
}
