import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers';
const {Router} = window.Vaadin;
import { store } from '../../service/AppService';
import { Cursus } from '../../model/Cursus';
import { CursusService } from '../../service/CursusService';
import exportFromJSON from 'export-from-json'


export class ExcelButton extends connect(store)(LitElement) {

    static styles = css `
    #myBtn {
        background-color: white;
        color: black;
        border: 2px solid #555555;
      }
      
      #myBtn:hover {
        background-color: #555555;
        color: black;
      }
    
      #myBtn {
        background-color: #888888; 
        border: none;
        color: black;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
      }
    
    `;

    static get properties() {
        return {
            cursussen: { type: Array }
        }
    };

    constructor() {
        super();
        // this.cursussen = [];
        this.cursusService = new CursusService();
    }

    
  stateChanged(state) {
    this.cursussen = state.cursusReducer.cursussen;
    console.log(this.cursussen);
    //this.toetsen = state.cursusReducer.toetsen;
  }

    render() {
        return html ` 
        <button type="submit" id="myBtn"  @click="${this.exportReportToExcel}">Export</button>
        `;
    }

    exportReportToExcel() {
        this.requestUpdate();
        // const fileName = 'download'
        // const exportType =  exportFromJSON.types.csv
        const data = this.cursussen;
        console.log(data);

        // exportFromJSON({ data, fileName, exportType })


        const fileName = 'download'
        const exportType = 'csv'   //exported type could be text, json, csv, xls, xml
        
        exportFromJSON({ data, fileName, exportType })
    
    }

}

customElements.define('excel-button', ExcelButton);
