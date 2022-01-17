// import {
//     LitElement,
//     html,
//     css
// } from "lit";

// // import {PostModelBox} from '../view/CursusForm/postInfo';

// // import {UpdateModelBox} from '../view/CursusForm/updateInfo';
// import { ToetsService as toetsService } from '../../service/ToetsService';
// import { connect } from 'pwa-helpers';
// import { store } from '../../service/AppService';
// import { Router } from '@vaadin/router';

// export class ToetsView extends connect(store)(LitElement){
//     static styles = css `

// `

//     static get properties() {
//         return {
//           cursussen: { type: Array 
//           },
//           value: { 
//             type: String,
//             reflect: true
//           },
//           toetsen: { type: Array 
//           }
//         }
//     }

//     constructor() {
//         super();
//         this.toetsService = new toetsService();
//         this.toetsen = [];
//         this.value = "none";
  
//     }

//     connectedCallback(){
//         super.connectedCallback();
//         this.checkRole();

//     }
//     stateChanged(state) {
//         this.toetsen = state.toetsReducer.toetsen;
//     }

//     checkRole() {
//         var role = sessionStorage.getItem("role");
//         if(role == "examencommissie") {
//             this.value = "block"
//         }else {
//             console.log("u bent geen examen-commissie");
//         }
//     }

//     render() {
//         this.value = this.toets ? this.toets.toets : '';
//         return html`
        
    
    
      
//         <button id="myBtn" @click=${this.showModelBox}>zie toetsen</button>
    
//         <!-- The Modal -->
//         <div id="myModal" class="modal">
    
//         <!-- Modal content -->
//         <div class="modal-content">
//         <span class="close" @click=${this.hideModel} >&times;</span>

//         ${
//             this.toetsen.map((t) => html`
//                 <tr>
//                   <td>${t.id}</td>
//                   <td>${t.toets}</td>
//                   <td>${t.toetsvorm}</td>
//                   <td>${t.weging}</td>
//                   <td>${t.ectoets}</td>
//                   <td>${t.periode}</td>
//                   <td>${t.programmaleider}</td>


//                   <td><toets-item></toets-item></td>
//                   <td><mwc-icon  @click=${(event) => this.edit(cu.id)}>edit</mwc-icon>
//                   <mwc-icon  @click=${(event) => this.delete(cu.id)}>delete</mwc-icon></td
                  
//                 </tr>
//             `)
//           }
    
   
    
      
        
//         `;
//       }

//     render() {
        
//         return html ` 


//         <table id="cursussen">
//         <thead>
//         <tr>
//             <th scope="col">#</th>
//             <th scope="col">opleiding</th>
//             <th scope="col">code</th>
//             <th scope="col">naam</th>
//             <th scope="col">EC-cursus</th>
//             <th scope="col" style="display:${this.value} ;">cursus settings</th>
//         </tr>
//     </thead>
//         <tbody>
//           ${
//             this.cursussen.map((cu) => html`
//                 <tr>
//                   <td>${cu.id}</td>
//                   <td>${cu.cursus}</td>
//                   <td>${cu.code}</td>
//                   <td>${cu.naam}</td>
//                   <td>${cu.ec}</td>

//                   <td><toets-item></toets-item></td>
//                   <td><mwc-icon  @click=${(event) => this.edit(cu.id)}>edit</mwc-icon>
//                   <mwc-icon  @click=${(event) => this.delete(cu.id)}>delete</mwc-icon></td
                  
//                 </tr>
//             `)
//           }
//         </tbody>
//       </table>
  

    

//         `;
    
// }
// edit(id) {
//     Router.go(`/cursussen/${id}`);
//     this.requestUpdate();
//   }
    
//       delete(id) {
//         console.log('delete', id);
//         this.cursusService.deleteCursus(id);
//         // this.cursussen = this.cursussen.filter((curs) => curs.id !== id)
//         this.requestUpdate();
//       }
//     }



// customElements.define('table-page', TablePage);

// // ${ this.cursussen.map((cursus) => { return html`
// // <tr class = "CuInfo" id="hoi" cursusId=${cursus.id}>
// //     <td class ="Code">${cursus.cursus}</td>
// //     <td>${cursus.begindatum}</td>
// //     <td>${cursus.einddatum}</td>
// //     <td> <mwc-icon @click=${this.edit}>create</mwc-icon>
// //     <mwc-icon @click=${this.delete}>delete</mwc-icon></td>
// //     <td> <mwc-checkbox ?checked=${cursus.done} @change=${this.toggle}></mwc-checkbox></td>
// // </tr>                                  
// // `
// // })
// // }