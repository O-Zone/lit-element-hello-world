---
layout: page.11ty.cjs
title: <counter-button> ⌲ Home
---

# &lt;counter-button>

`<counter-button>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<counter-button>` is just an HTML element. You can it anywhere you can use HTML!

```html
<counter-button></counter-button>
```

  </div>
  <div>

<counter-button></counter-button>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<counter-button>` can be configured with attributed in plain HTML.

```html
<counter-button name="HTML"></counter-button>
```

  </div>
  <div>

<counter-button name="HTML"></counter-button>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<counter-button>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;counter-button&gt;</h2>
  <counter-button .name=${name}></counter-button>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;counter-button&gt;</h2>
<counter-button name="lit-html"></counter-button>

  </div>
</section>
