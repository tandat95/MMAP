import { action, observable } from 'mobx';

export class DrawerStore {
    @observable isOpen = false;

    @action toggleOpen = () => {
        this.isOpen = true;
    }

    @action toggleClose = () => {
        this.isOpen = false;
    }
}
export default new DrawerStore()