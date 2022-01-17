import {
    LitElement,
    html,
    css
} from "lit";

// import {PostModelBox} from '../view/CursusForm/postInfo';

// import {UpdateModelBox} from '../view/CursusForm/updateInfo';
import { CursusService as cursusService } from '../../service/CursusService';
import { connect } from 'pwa-helpers';
import { store } from '../../service/AppService';
const {Router} = window.Vaadin;

export class TablePage extends connect(store)(LitElement){
    static styles = css `

    #cursussen {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        border: 2px solid #555555;
      }
      
      #cursussen td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      
      #cursussen tr:nth-child(even){background-color: #f2f2f2;}
      
      #cursussen tr:hover {background-color: #ddd;}
      
      #cursussen th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #888888;
        color: black;
      }
`

    static get properties() {
        return {
          cursussen: { type: Array 
          },
          value: { 
            type: String,
            reflect: true
          },

          noShow: {type: Boolean}
        }
        
    }

    constructor() {
        super();
        this.cursusService = new cursusService();
        this.cursussen = [];
   
        this.value = "none";
        this.noShow = false;
       
        
    }

    connectedCallback(){
        super.connectedCallback();
        this.checkRole();
      

    }
    stateChanged(state) {
        this.cursussen = state.cursusReducer.cursussen;
    
    }

    checkRole() {
        var role = sessionStorage.getItem("role");
        if(role == "examencommissie") {
            this.value = "block"
        }else {
            console.log("u bent geen examen-commissie");
        }
    }


    render() {
        return html ` 
        <input type="text" id="myInput" @keyup=${(e) => this.searchBar(e)} placeholder="Search for names.." title="Type in a name">
     
        
        <table id="cursussen">
        <thead>
        <tr>
            <th scope="col">opleiding</th>
            <th scope="col">code</th>
            <th scope="col">naam</th>
            <th scope="col">EC-cursus</th>
            <th scope="col">toets</th>
            <th scope="col">toetsvorm</th>
            <th scope="col">weging</th>
            <th scope="col">EC-toets</th>
            <th scope="col">periode</th>
            <th scope="col">programmaleider</th>
            <th scope="col" style="display:${this.value} ;">cursus settings</th>
        </tr>
    </thead>
        <tbody>
          ${
            this.cursussen.map((cu) => html`
                <tr id ="rij">
                  <td>${cu.cursus}</td>
                  <td>${cu.code}</td>
                  <td>${cu.naam}</td>
                  <td>${cu.ec}</td>

                  <td><mwc-icon  @click=${(event) => this.edit(cu.id)}>edit</mwc-icon>
                  <mwc-icon  @click=${(event) => this.delete(cu.id)}>delete</mwc-icon></td
                  ${
                    cu.toetsen.map((toets) => html`
                          <td>${toets.toets}</td>
                          <td>${toets.toetsvorm}</td>
                          <td>${toets.weging}</td>
                          <td>${toets.ectoets}</td>
                          <td>${toets.periode}</td>
                          <td>${toets.programmaleider}</td>
                    `)
                  }
                
                </tr>
            `)
          }
        </tbody>
      </table>
  

    

        `;
}

searchBar(e) {
  var rij = this.shadowRoot.querySelector("#rij");
  var search = e.target.value.toLowerCase();
  if(search == "") {
    this.requestUpdate();
  }
  var matches = this.cursussen.filter(character => {
    if(character.cursus.charAt(0) == search) {
      console.log("kaas");
      rij.style.display = "none";
    }
    else {
      
    }
});

return (matches.length > 0) ? matches : search;
}

  // var search = e.target.value.toLowerCase();
  // var rij = this.shadowRoot.querySelector("#rij");
  // console.log(search);
  // const searchsplit = search.split("");
  // console.log(searchsplit);

  // const filteredCharacters = this.cursussen.filter(character => {
  //   if(character.cursus.includes(searchsplit)) {
  //     console.log("true")
  //     this.noshow = false;
  //   }else {
  //     this.noshow = true
  //   }
    
   

      // return (character.cursus.includes(search)
      // );

      
      // ||
      // character.house.includes(searchString)
    





edit(id) {
    Router.go(`/cursussen/${id}`);
    this.requestUpdate();
  }
    
      delete(id) {
        console.log('delete', id);
        this.cursusService.deleteCursus(id);
        // this.cursussen = this.cursussen.filter((curs) => curs.id !== id)
        this.requestUpdate();
      }

    }

customElements.define('table-page', TablePage);

