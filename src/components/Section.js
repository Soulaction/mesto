export class Section {
    constructor({ items, renderer }, selectorSection) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selectorSection);
    }

    clear() {
        this._container.innerHTML = '';
    }

    addItem(item) {
        this._container.prepend(this._renderer(item));
    }

    renderItems() {
        this.clear();
        this._items.reverse().forEach(item => {
            this.addItem(item);
        });
    }
}