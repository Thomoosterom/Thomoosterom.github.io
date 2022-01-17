import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers';
const {Router} = window.Vaadin;
import { store } from '../../service/AppService';
import { Cursus } from '../../model/Cursus';
import { CursusService } from '../../service/CursusService';

export class CursusItem extends connect(store)(LitElement) {
  static styles = css`


  * {box-sizing: border-box;}

body { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #008B8B;
  padding: 20px 10px;
    border-style: solid;
  border-color: black;
  display:flex;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

  /* The Modal (background) */
  .modal {
     /* Hidden by default */

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
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;

  }`;

  static get properties() {
    return {
      value: {
        type: String,
        reflect: true
      },
      code: {
          type:String,
          reflect :true
      },
      naam: {
          type:String,
          reflect:true
      },
      ec: {
      type:Number,
      reflect:true
      },
      id: { type: String },
      cursussen: { type: Array },
      cursus: { type: Object },
      noShow: {type: Boolean,
      reflect:true}
    }
  }

  constructor() {
    super();
    this.cursusService = new CursusService();
    this.id = '';
    this.noShow = true;
  }

  stateChanged(state) {
    this.cursussen = state.cursusReducer.cursussen;
    console.log(this.cursussen);
  }

  async onBeforeEnter(locatie) {
    this.id = locatie.params.id;
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.id != '') {
      this.noShow = false;
      this.cursus = this.cursussen.filter((cursus) => cursus.id === this.id)[0]; 
    }
  }

  render() {
    this.value = this.cursus ? this.cursus.cursus : '';
    return html`
    
  <div class="header">
    <button id="myBtn" @click=${this.showModelBox}>Voeg cursus toe</button>
    <toets-item></toets-item>
    <nav>
    <button id="myBtn"><a href="/">Loguit</a></button>
    <excel-button></excel-button>

    </nav>
  </div>

    <!-- The Modal -->
    <div id="myModal" class="modal" ?hidden=${this.noShow}>

    <!-- Modal content -->
    <div class="modal-content">
    <span class="close" @click=${this.hideModel} >&times;</span>

    <br>
         <mwc-textfield 
      name="cursus"  
      id="name" 
      label="Opleiding" 
      type="text" 
      value="${this.value}"
      @keyup=${(e) => this.keyUpHandler(e)} 
      required>
      </mwc-textfield>
    </br>

    <br>
      <mwc-textfield 
      name="code"  
      id="code" 
      label="code" 
      type="text" 
      value="${this.code}"
      @keyup=${(e) => this.keyUpHandler(e)} 
      required>
      </mwc-textfield>
    </br>

    <br>
      <mwc-textfield 
      name="naam"  
      id="naam" 
      label="naam" 
      type="text"
      value="${this.naam}"
      @keyup=${(e) => this.keyUpHandler(e)} 
      required>
      </mwc-textfield>
    </br>

    <br>
    <mwc-textfield 
    name="ec"  
    id="ec" 
    label="EC" 
    type="text"
    value="${this.ec}"
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
    this.noShow = false;
}

hideModel() {
  this.noShow = true;
}


  keyUpHandler(e) {
    if (e.key === 'Enter') {
      this.addTask(e.target.value);
    }
  }

    postInfoToTable(){
      const value = this.shadowRoot.querySelector('#name').value;
      const code = this.shadowRoot.querySelector('#code').value;
      const naam = this.shadowRoot.querySelector('#naam').value;
      const ec = this.shadowRoot.querySelector('#ec').value;

      this.addTask(value,code,naam,ec);

  }


  addTask(value,code, naam, ec ) {
    this.hideModel();
    if (value && value!=='') {
      // the user has entered a value within the textfield
      if (!this.cursus) {
        const newCursus = new Cursus(value,code, naam,ec,false);
        
        this.cursusService.addCursus(newCursus);
      } else {
        this.cursus.cursus = value;
        this.cursus.code = code;
        this.cursus.naam = naam;
        this.cursus.ec = ec;
        // this.taskService.updateTask(taskId,) @$# kan de tekst nog niet updaten ...
        
      }
      
      // clearing the textfield again.
      this.value='';
      this.code = '';
      this.naam = '';
      this.ec = '';

      this.shadowRoot.querySelector('mwc-textfield').value='';
   

      if (this.cursus) {
        Router.go('/examencommissie');
      }
    }
  }

}

customElements.define('cursus-item', CursusItem);