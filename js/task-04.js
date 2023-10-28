// функция-конструктор

const СounterPlugin = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);
  this._bindEvents();
  this.updateResultUI();
};

СounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};

  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
  refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
  refs.resultButtons = refs.container.querySelector('#value');

  return refs;
};

СounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

СounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

СounterPlugin.prototype.updateResultUI = function () {
  this._refs.resultButtons.textContent = this._value;
};

СounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    this.increment();
    this.updateResultUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    this.decrement();
    this.updateResultUI();
  });
};

new СounterPlugin({
  rootSelector: '#counter-1',
  initialValue: 100,
  step: 1,
});

new СounterPlugin({
  rootSelector: '#counter-2',
  initialValue: 0,
  step: 2,
});
