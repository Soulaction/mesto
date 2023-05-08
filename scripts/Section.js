export class Section {
    constructor({items, renderer}, selectorSection) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selectorSection);
        console.log('Section');
    }

    clear() {
        this._container.innerHTML = '';
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this.clear();
        this._items.forEach(item => {
            this.addItem(this._renderer(item));
        });
    }
}