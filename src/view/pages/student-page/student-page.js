import { LitElement, html, css } from 'lit-element';

export class StudentPage extends LitElement {
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
    <table-page></table-page> 
    `;
  }
}

customElements.define('student-page', StudentPage);