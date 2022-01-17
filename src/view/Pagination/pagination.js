import {
    LitElement,
    html,
    css
} from "lit";

import { TablePage } from "../Table/table";

export class PaginationTable extends LitElement {

    static styles = css `
        :host{}
        .visuallyhidden {
            border: 0;
            clip: rect(0 0 0 0);
            height: auto;
            margin: 0;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
            white-space: nowrap;
        }
        nav {
            display: flex;
            justify-content: center;
            border-top: 1px solid #eee;
            margin-top: 1em;
            padding-top: .5em;
            position: absolute;
            top: 570px;
            left: 900px;
            background: #324960;
        }
        .pagination {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            background: #324960;
        }
        .pagination li {
            margin: 0 1px;
            
        }
        .pagination a {
            display: block;
            padding: .5em 1em;
            border: 1px solid #999;
            border-radius: .2em;
            text-decoration: none;
            background: #4CAF50;
        }
        .pagination a[aria-current="page"] {
            background-color: #333;
            color: #fff;
        }
    `;

    static properties = {};

    constructor() {
            super();
            this.tablePage = new TablePage();
    }
    
    connectedCallback(){
        super.connectedCallback();
        const current_page = 1;
        const records_per_page = 3;
        this.numPages();
        this.changePage(current_page);
    }

    numPages(){

        const l = this.tablePage.querySelector("#myTa").rows.length;
        return Math.ceil((l - 1) / this.records_per_page);
    }

    prevPage(){
        if (current_page > 1) {
            current_page--;
            changePage(current_page);
        }
    }

    nextPage(){
        if (current_page < numPages()) {
            current_page++;
            changePage(current_page);
        }
    }

    changePage(page){
        
        const btn_next = this.shadowRoot.querySelector("btn_next");
        const btn_prev = this.shadowRoot.querySelector("btn_next");
        const table = this.tablePage.querySelector('#myTa');
        const page_span = this.shadowRoot.querySelector("#page");

        // Validate page
        if (page < 1) page = 1;
        if (page > this.shadowRoot.numPages()) page = this.shadowRoot.numPages();


        [...table.querySelectorAll('tr')].forEach((tr)=>{
            tr.style.display='none'; // reset all to not display
        });
        table.rows[0].style.display = ""; // display the title row
    
        for (var i = (page-1) * this.records_per_page + 1; i < (page * this.records_per_page) + 1; i++) {
            if (table.rows[i]) {
                table.rows[i].style.display = ""
            } else {
                continue;
            }
        }

        page_span.innerHTML = page + "/" + numPages();

        if (page == 1) {
            btn_prev.style.visibility = "hidden";
        } else {
            btn_prev.style.visibility = "visible";
        }
    
        if (page == numPages()) {
            btn_next.style.visibility = "hidden";
        } else {
            btn_next.style.visibility = "visible";
        }
    }

    render() {
        return html `   
        <head>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans">
        
        </head>
      
        <nav aria-label="pagination">
            <ul class="pagination">
                <li><a @click=${this.prevPage}  href=""><span aria-hidden="true">«</span><span class="visuallyhidden">previous set of pages</span></a></li>
                    <li><a><span id="page" class="visuallyhidden">page</span></a></li>
                <li><a @click=${this.nextPage} href=""><span class="visuallyhidden">next set of pages</span><span aria-hidden="true">»</span></a></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('pagination-table', PaginationTable);



// <li><a href=""><span class="visuallyhidden">page </span>1</a></li>
// <li><a href="" aria-current="page"><span class="visuallyhidden">page </span>2</a></li>
// <li><a href=""><span class="visuallyhidden">page </span>3</a></li>
// <li><a href=""><span class="visuallyhidden">page </span>4</a></li>