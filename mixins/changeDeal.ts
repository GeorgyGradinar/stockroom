import {ItemInterface} from "~/types/item";
import {Pages, StatusDeal} from "~/types/pages";
import {mainStore} from "~/store/store";
import requestsServer from "~/mixins/requestsServer";
import changePage from "~/mixins/changePage";

export default function changeDeal() {
    const store = mainStore();
    const {updateItems} = requestsServer();
    const {updateCurrentPage} = changePage();
    let id: number;

    function updateDealType(idItem: number): void {

        if (store.filters.page === Pages.Deal) {
            id = store.deals.findIndex((item: ItemInterface) => item.id === idItem);
            store.deals[id].statusDeal = StatusDeal.Paid;
        } else {
            store.notificationDeal = true;
            id = store.items.findIndex((item: ItemInterface) => item.id === idItem);
            store.deals.push({
                ...store.items[id],
                parentId: store.items[id].id,
                id: Math.floor(Math.random() * 1000),
                statusDeal: StatusDeal.Pay
            });
        }

        setTimeout(() => {
            store.notificationDeal = false;
        }, 500)

        updateItems(store.items, store.deals);
    }

    function deleteAllDeals(): void {
        store.deals = [];
        updateItems(store.items, store.deals);
        updateCurrentPage();
    }

    return {updateDealType, deleteAllDeals};
}
