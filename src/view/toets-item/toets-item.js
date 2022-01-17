import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers';
const {Router} = window.Vaadin;
import { store } from '../../service/AppService';
import { Toets } from '../../model/Toets';
import { CursusService } from '../../service/CursusService';

export class ToetsItem extends connect(store)(LitElement) {
  static styles = css`


  * {box-sizing: border-box;}

body { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}


  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 40%; /* Could be more or less, depending on screen size */
  }
  
  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

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
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }




  .dropbtn {
    background-color: #3498DB;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  
  .dropbtn:hover, .dropbtn:focus {
    background-color: #2980B9;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown a:hover {background-color: #ddd;}
  
  .show {display: block;}

  `;

  static get properties() {
    return {
      value: {
        type: String,
        reflect: true
      },
      toetsvorm: {
          type:String,
          reflect :true
      },
      weging: {
          type:Number,
          reflect:true
      },
      ectoets: {
      type:Number,
      reflect:true
      },
      periode: {
        type:String,
        reflect :true
    },
    programmaleider: {
            type:String,
            reflect :true
        },


      id: { type: String },
      // toetsen: { type: Array },
      toets: { type: Object },
      cursussen:{type:Array}
      // noShow: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.cursusService = new CursusService();
    this.id = '';
    // this.toetsen = [];
    this.cursussen=[];
  
    // this.noShow = false;
  }

  stateChanged(state) {
    // this.toetsen = state.cursusReducer.toetsen;
    this.cursussen = state.cursusReducer.cursussen;
  }

  async onBeforeEnter(locatie) {
    this.id = locatie.params.id;
  }

  connectedCallback() {
    super.connectedCallback();
    // this.id = location.pathname;
    // this.id = this.id.slice(this.id.lastIndexOf('/')+1);
    // console.log(this.id);
    if (this.id) {
      // this.noShow = true;
      this.cursus = this.cursussen.filter((cursus) => cursus.id === this.id)[0]; 
     
    }
  
    
  }
  myFunction() {
    
    this.shadowRoot.querySelector("#myDropdown").classList.toggle("show");
  }

  render() {
    this.value = this.toets ? this.toets.toets : '';
    return html`
  
    <button id="myBtn" @click=${this.showModelBox}>Voeg toets toe</button>

    <!-- The Modal -->
    <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
    <span class="close" @click=${this.hideModel} >&times;</span>

    <form action="/action_page.php">
    <label for="cars">Choose a cursus:</label>
    <select name="cars" id="cursus">
    ${
      this.cursussen.map((cu) => html`

      <option value=${cu.cursus}>${cu.cursus}</option>
      `)
    }
    </select>
    <br><br>
  </form>


    <br>
         <mwc-textfield 
      name="value"  
      id="value" 
      label="value" 
      type="text" 
      value="${this.value}"
      @keyup=${(e) => this.keyUpHandler(e)} 
      required>
      </mwc-textfield>
    </br>

    <br>
      <mwc-textfield 
      name="toetsvorm"  
      id="toetsvorm" 
      label="toetsvorm" 
      type="text" 
      value="${this.toetsvorm}"
      @keyup=${(e) => this.keyUpHandler(e)} 
      required>
      </mwc-textfield>
    </br>

    <br>
      <mwc-textfield 
      name="weging"  
      id="weging" 
      label="weging" 
      type="text"
      value="${this.weging}"
      @keyup=${(e) => this.keyUpHandler(e)} 
      required>
      </mwc-textfield>
    </br>

    <br>
    <mwc-textfield 
    name="ectoets"  
    id="ectoets" 
    label="EC-Toets" 
    type="text"
    value="${this.ectoets}"
    @keyup=${(e) => this.keyUpHandler(e)} 
    required>
    </mwc-textfield>
    </br>

    <br>
    <mwc-textfield 
    name="periode"  
    id="periode" 
    label="Periode" 
    type="text"
    value="${this.periode}"
    @keyup=${(e) => this.keyUpHandler(e)} 
    required>
    </mwc-textfield>
    </br>

    <br>
    <mwc-textfield 
    name="programmaleider"  
    id="programmaleider" 
    label="Programmaleider" 
    type="text"
    value="${this.programmaleider}"
    @keyup=${(e) => this.keyUpHandler(e)} 
    required>
    </mwc-textfield>
    </br>
  
      ${this.cursus 
          ? html`<mwc-button @click="${this.postInfoToTable}" raised>UPDATE</mwc-button>`
          : html`<mwc-button id="postInfo" @click="${this.postInfoToTable}" raised label="Submit"></mwc-button>`
        }
    </div>
    </div>
    `;
  }


  showModelBox(){
    var modal = this.shadowRoot.querySelector("#myModal");
    modal.style.display = "block";
    // console.log(this)
    // console.log(this.shadowRoot)
    // const modal = this.shadowRoot.querySelector("#MyModel");
    // modal.style.display = "block";
    // this.noShow = true;
    // console.log(this.noShow)
}

hideModel() {
  var modal = this.shadowRoot.querySelector("#myModal");
  modal.style.display = "none";
    // const modal =  this.shadowRoot.querySelector("#MyModel");
    // modal.style.display = "none";
    // this.noShow = false;
    
}

  // In case the user hits enter instead of clicking the add button.
  keyUpHandler(e) {
    if (e.key === 'Enter') {
      this.addTask(e.target.value);
    }
  }

    postInfoToTable(){
      const cursus = this.shadowRoot.querySelector('#cursus').value;
      const value = this.shadowRoot.querySelector('#value').value;
      const toetsvorm = this.shadowRoot.querySelector('#toetsvorm').value;
      const weging = this.shadowRoot.querySelector('#weging').value;
      const ectoets = this.shadowRoot.querySelector('#ectoets').value;
      const periode = this.shadowRoot.querySelector('#periode').value;
      const programmaleider = this.shadowRoot.querySelector('#programmaleider').value;

      this.addTask(value,toetsvorm, weging, ectoets, periode, programmaleider, cursus);
  }


  addTask(value,toetsvorm, weging, ectoets, periode, programmaleider, cursus) {
    this.hideModel();
    if (value && value!=='') {
      // the user has entered a value within the textfield
      if (!this.toets) {
        const newToets = new Toets(value,toetsvorm, weging, ectoets, periode, programmaleider);
        this.cursusService.addToets(cursus, newToets)
      } else {
        this.toets.toets = value;
        this.toets.toetsvorm = toetsvorm;
        this.toets.weging = weging;
        this.toets.ectoets = ectoets;
        this.toets.periode = periode;
        this.toets.programmaleider = programmaleider;
        // this.taskService.updateTask(taskId,) @$# kan de tekst nog niet updaten ...
        console.log(this.toets);
        
        
      }
      
      // clearing the textfield again.
      this.value='';
      this.toetsvorm = '';
      this.weging = '';
      this.ectoets = '';
      this.periode = '';
      this.programmaleider = '';
      this.shadowRoot.querySelector('mwc-textfield').value='';
   

      if (this.toets) {
        Router.go('/');
      }
    }
  }

}

customElements.define('toets-item', ToetsItem);


// ${
//     this.toetsen.map((t) => html`
//         <tr>
//           <td>${t.id}</td>
//           <td>${t.toets}</td>
//           <td>${t.toetsvorm}</td>
//           <td>${t.weging}</td>
//           <td>${t.ectoets}</td>
//           <td>${t.periode}</td>
//           <td>${t.programmaleider}</td>
//           <td><mwc-icon  @click=${(event) => this.edit(t.id)}>edit</mwc-icon>
//           <mwc-icon  @click=${(event) => this.delete(t.id)}>delete</mwc-icon></td
          
//         </tr>
//     `)
//   }