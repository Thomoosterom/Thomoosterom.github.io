
import {
  LitElement,
  html,
  css
} from "lit";

export class InlogPage extends LitElement {

  static styles = css `
          :host{}
                  *,
                  *:after,
                  *:before {
                          -webkit-box-sizing: border-box;
                          -moz-box-sizing: border-box;
                          box-sizing: border-box;
                  }
                  
                  body,
                  html {
                          font-size: 100%;
                          padding: 0;
                          margin: 0;
                          height: 100%;
                  }
                  
                  body {
                          font-family: Arial, sans-serif;
                          background: #0e939d;
                  }
                  
                  a {
                          color: #999;
                          text-decoration: none;
                  }
                  
                  a:hover,
                  a:active {
                           color: #555;
                  }
                  
                  .container {
                          height: 100%;
                          position: relative;
                  }
                  
                  .container > section {
                          margin: 0 auto;
                          padding: 3em;
                          text-align: center;
                          color: #fff;
                  }
                  
                  h2 {
                          color: #fff;
                          margin: 20px;
                          text-align: center;
                          text-transform: uppercase;
                  }
                  /* General button styles */
                  
                  .btn {
                          border: none;
                          position: relative;
                          background: none;
                          cursor: pointer;
                          padding: 28px 90px;
                          display: inline-block;
                          text-transform: uppercase;
                          margin: 15px 30px;
                          color: inherit;
                          letter-spacing: 2px;
                          font-size: 1em;
                          outline: none;
                          -moz-transition: all 0.4s;
                          -webkit-transition: all 0.4s;
                          transition: all 0.4s;
                  }
                  
                  .btn:after {
                          content: '';
                          position: absolute;
                          z-index: -1;
                          -webkit-transition: all 0.4s;
                          -moz-transition: all 0.4s;
                          transition: all 0.4s;
                  }
                  
                  .btn_perspective {
                          -webkit-perspective: 800px;
                          -moz-perspective: 800px;
                          perspective: 800px;
                          display: inline-block;
                  }
                  
                  .btn-3d {
                          display: block;
                          background: #5cbcf6;
                          outline: 1px solid transparent;
                          -webkit-transform-style: preserve-3d;
                          -moz-transform-style: preserve-3d;
                          transform-style: preserve-3d;
                  }
                  
                  .btn-3d:active {
                           background: #55b7f3;
                  }
                  
                  .btn-3da:after {
                          width: 100%;
                          height: 42%;
                          left: 0;
                          top: -40%;
                          background: #53a6d7;
                          -webkit-transform-origin: 0% 100%;
                          -webkit-transform: rotateX(90deg);
                          -moz-transform-origin: 0% 100%;
                          -moz-transform: rotateX(90deg);
                          transform-origin: 0% 100%;
                          transform: rotateX(90deg);
                  }
                  
                  .btn-3da:hover {
                          -webkit-transform: rotateX(-360deg);
                          -moz-transform: rotateX(-360deg);
                          -ms-transform: rotateX(-360deg);
                          transform: rotateX(-360eg);
                  }
                  
                  .btn-3db:after {
                          width: 100%;
                          height: 40%;
                          left: 0;
                          top: 100%;
                          background: #53a6d7;
                          -webkit-transform-origin: 0% 0%;
                          -webkit-transform: rotateX(-90deg);
                          -moz-transform-origin: 0% 0%;
                          -moz-transform: rotateX(-90deg);
                          -ms-transform-origin: 0% 0%;
                          -ms-transform: rotateX(-90deg);
                          transform-origin: 0% 0%;
                          transform: rotateX(-90deg);
                  }
                  
                  .btn-3db:hover {
                          -webkit-transform: rotateX(35deg);
                          -moz-transform: rotateX(35deg);
                          -ms-transform: rotateX(35deg);
                          transform: rotateX(35deg);
                  }
                  
                  .btn-3dc:after {
                          width: 20%;
                          height: 100%;
                          left: -20%;
                          top: 0;
                          background: #53a6d7;
                          -webkit-transform-origin: 100% 0%;
                          -webkit-transform: rotateY(-90deg);
                          -moz-transform-origin: 100% 0%;
                          -moz-transform: rotateY(-90deg);
                          -ms-transform-origin: 100% 0%;
                          -ms-transform: rotateY(-90deg);
                          transform-origin: 100% 0%;
                          transform: rotateY(-90deg);
                  }
                  
                  .btn-3dc:hover {
                          -webkit-transform: rotateY(25deg);
                          -moz-transform: rotateY(25deg);
                          -ms-transform: rotateY(25deg);
                          transform: rotateY(25deg);
                  }
                  
                  .btn-3dd:after {
                          width: 20%;
                          height: 100%;
                          left: 100%;
                          top: 0;
                          background: #53a6d7;
                          -webkit-transform-origin: 0% 0%;
                          -webkit-transform: rotateY(90deg);
                          -moz-transform-origin: 0% 0%;
                          -moz-transform: rotateY(90deg);
                          -ms-transform-origin: 0% 0%;
                          -ms-transform: rotateY(90deg);
                          transform-origin: 0% 0%;
                          transform: rotateY(90deg);
                  }
                  
                  .btn-3dd:hover {
                          -webkit-transform: rotateY(-15deg);
                          -moz-transform: rotateY(-15deg);
                          -ms-transform: rotateY(-15deg);
                           transform: rotateY(-15deg);
                  }
                  
                  @media screen and (max-width:480px) {
                       .container {
                           font-size: 1.2em;
                        }
                  }
                                    
                  .bg {
                          animation:slide 3s ease-in-out infinite alternate;
                          background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
                          bottom:0;
                          left:-50%;
                          opacity:.5;
                          position:fixed;
                          right:-50%;
                          top:0;
                          z-index:-1;
                  }
                  
                  .bg2 {
                          animation-direction:alternate-reverse;
                          animation-duration:4s;
                  }
                  
                  .bg3 {
                          animation-duration:5s;
                  }
                  @keyframes slide {
                          0% {
                            transform:translateX(-25%);
                          }
                          100% {
                            transform:translateX(25%);
                          }
                  }
                  
                  .HuImage{
                          margin:auto;
                          display:block;
                          width:60%;
                  }
               
  `;

  static properties = {};

  constructor() {
          super();
  }

  StudentPagina(event) {
        sessionStorage.setItem("role", "student");
  }

  DocentPagina(event) {
        sessionStorage.setItem("role", "docent");
  }
  ExamencommissiePagina(event) {
        sessionStorage.setItem("role", "examencommissie");
  }

  DefaultPagina(event) {
        sessionStorage.setItem("role", "");
  }

  render() {
          return html `   
      <section>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
           
          <div class="rt-container">
          <div class="col-rt-12">
            <div class="Scriptcontent">
            <img class="HuImage" src="src/media/HU-logo.png">
                
             <!-- Start Buttons container -->
             <div class="container">
                  
                  <section class="3d-buttons">
                    <nav>
                    <a @click=${this.DocentPagina} href="/docent">Docent</a>
                    <a @click=${this.StudentPagina} href="/student">Student</a>
                    <a @click=${this.ExamencommissiePagina} href="/examencommissie">Examencommissie</a>
                    </nav>
                  </section>
             </div>
             <!-- END Buttons container -->
             
            </div>
          </div>
          </div>
      </section>
          `;
  }
}


customElements.define('inlog-page', InlogPage);