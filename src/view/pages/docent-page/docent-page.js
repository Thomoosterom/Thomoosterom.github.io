import { LitElement, html, css } from 'lit-element';

export class DocentPage extends LitElement {
  static styles = css`
    :host {
      text-align: center;
    }
  `; 

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
    <cursus-item></cursus-item> 
    `;
  }
}

customElements.define('docent-page', DocentPage);