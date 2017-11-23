const DsElement = require('../DsElement');

module.exports = class DsReveal extends DsElement {
    static get is () {
        return 'ds-reveal';
    }

    static $define () {
        customElements.define(this.is, this);
    }

    static get observedAttributes () {
        return ['open'];
    }

    connectedCallback () {
        this.$upgradeProperty('open');
        this.setAttribute('aria-expanded', this.open);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        this.setAttribute('aria-expanded', newVal === '')
    }

    set open (value) {
        if (!!value) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
    }

    get open () {
        return this.hasAttribute('open');
    }
};
