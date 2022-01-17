import { LitElement, html, css } from 'lit';

export class CursusPage extends LitElement {
  static styles = css``;
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
        <cursus-item></cursus-item>
        <cursus-list></cursus-list>
    `;
  }
}

customElements.define('cursus-page', CursusPage);
