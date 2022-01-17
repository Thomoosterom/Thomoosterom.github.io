import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  initRouter();
});

const initRouter = () => {

// setup a Router instance
const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'inlog-page'},
  {path: '/docent', component: 'docent-page'},
  {path: '/student', component: 'student-page'},
  {path: '/examencommissie', component: 'examencommissie-page'},
  {
    path: '/cursussen/:id',
    component: 'cursus-item',
    action: (context, command) => {
        console.log(context, command);
    }
  }
  // {path: '(.*)', component:'page-not-found'}
]);
}


