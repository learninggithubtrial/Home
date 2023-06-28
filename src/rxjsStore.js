import { BehaviorSubject } from "rxjs";

const countGlobalStore = new BehaviorSubject(11);

const setStoreCounter = (newValue) => {
    countGlobalStore.next(newValue);
}

const getStoreCounter = () => {
    return countGlobalStore;
}

export const rxjsStore = {setStoreCounter, getStoreCounter};
