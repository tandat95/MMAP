import { action, observable } from 'mobx';

export class SearchFieldStore {
    @observable suggestions = [];
    @observable value = '';
    @action setSuggestions = (value) => {
        this.suggestions = value;
    }

    @action clearSuggestion = () => {
        this.suggestions = [];
    }
}

export default new SearchFieldStore()