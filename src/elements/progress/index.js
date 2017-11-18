const DsElement = require('../DsElement');
const _tagName = 'ds-progress';
const _template = document.createElement('template')

_template.innerHTML = `
    <style>${require('./DsProgress.less')}</style>
    <div id="fill"></div>
`;

module.exports = class DsProgress extends DsElement {
    static $define () {
        customElements.define(_tagName, this);
    }

    static get observedAttributes () {
        return ['value'];
    }

    constructor () {
        super(_tagName, _template);

        this.$fill = this.shadowRoot.getElementById('fill');
        this.value = Number(this.getAttribute('value')) || 0;
    }

    connectedCallback () {
        this.$upgradeProperty('indeterminate');
        this.$upgradeProperty('value');
    }

    attributeChangedCallback (attrName, oldVal, newVal) {
        this.value = Number(newVal);

        this.$setAttribute('role', 'progressbar');
        this.$setAttribute('aria-valuemin', 0);
        this.$setAttribute('aria-valuemax', 100);
    }

    get value () {
        return this._value;
    }

    set value (newVal) {
        if (typeof newVal !== 'number') {
            return;
        }

        let normVal = Number(newVal) || 0;
        normVal = normVal > 100 ? 100 : normVal;
        normVal = normVal < 0 ? 0 : normVal;
        normVal = Math.round(normVal);

        this.$fill.style.width = `${normVal}%`;
        this.setAttribute('aria-valuenow', normVal);
        this._value = normVal;
    }

    get indeterminate () {
        return this.hasAttribute('indeterminate');
    }

    set indeterminate (newVal) {
        if (Boolean(newVal)) {
            this.setAttribute('indeterminate', true);
        } else {
            this.removeAttribute('indeterminate');
        }
    }
};