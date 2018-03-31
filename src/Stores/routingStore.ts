import { RouterStore } from 'mobx-react-router';

class RouterStoreBase extends RouterStore {
    public pushBase(url: string, state?: {}) {
        this.push(`${process.env.PUBLIC_URL}${url}`, state);
    }
}

export const routingStore = new RouterStoreBase();