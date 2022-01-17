import { LitElement, html, css } from 'lit-element';

export class ExamencommissiePage extends LitElement {
  static styles = css`
  :host {
    * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    
  }
  
  /* Style the header */
  .header {
    background-color: #f1f1f1;
    padding: 20px;
    text-align: center;
  }
  
  /* Create three equal columns that floats next to each other */
  .column {
    float: left;
    width: 100%;
    padding: 15px;
    
  }
  
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
  @media screen and (max-width:600px) {
    .column {
      width: 100%;
    }
  }
}
  `; 

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
    
<div class="header">
<cursus-item></cursus-item>
</div>


<div class="column">
  <table-page></table-page>
</div>


     
    `;
  }
}

customElements.define('examencommissie-page', ExamencommissiePage);