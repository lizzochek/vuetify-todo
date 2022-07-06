import VueRouter from 'vue-router';

import DashBoard from '../components/DashBoard.vue';
import ProjectComp from '../components/ProjectComp.vue';
import TeamComp from '../components/TeamComp.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashBoard,
  },
  {
    path: '/team',
    name: 'team',

    component: TeamComp,
  },
  {
    path: '/projects',
    name: 'projects',

    component: ProjectComp,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
