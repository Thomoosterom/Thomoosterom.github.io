import {
    LitElement,
    html,
    css
} from "lit";
 

import {TablePage} from '../Table/table';

export class SearchBar extends LitElement {

    static styles = css `

    `;

    static properties = {};

    constructor() {
      super();
    }
    


    render() {
        return html ` 

        
        `;
    }
}


customElements.define('search-bar', SearchBar);









// const input = this.shadowRoot.querySelector(".searchTerm").value;
// input = input.toLowerCase();
// const x = this.tablePage.querySelectorAll(".Code");

// for (i = 0; i < x.length; i++) { 
//   if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display="none";
//   }
//   else {
//       x[i].style.display="list-item";                 
//   }
// }
// .split(' ')