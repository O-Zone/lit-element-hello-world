import {counterButton} from '../counter-button.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('counter-button', () => {
  test('is defined', () => {
    const el = document.createElement('counter-button');
    assert.instanceOf(el, counterButton);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<counter-button></counter-button>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<counter-button name="Test"></counter-button>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<counter-button></counter-button>`)) as counterButton;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
