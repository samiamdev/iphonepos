import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/HomeView.vue';
import UserRegisterVue from '@/views/UserRegister.vue';
import TestVue from '@/views/test.vue';
import Admin from '@/views/Admin.vue';
import Stock from '@/views/Stock/Stocks.vue';
import ReOrder from '@/views/Stock/ReOrders.vue';
import RecieveOrder from '@/views/Stock/RecieveOreder.vue';
import Customer from '@/views/Customers/Customers.vue';
import Reports from '@/views/Reports/Reports.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: Admin,
    children: [
      { path: 'stock', name: 'StockPage', component: Stock },
      { path: 'register', name: 'RegisterPage', component: UserRegisterVue },
      { path: 'reorder', name: 'ReOrderPage', component: ReOrder },
      {
        path: 'recieveorder',
        name: 'RecieveOrderPage',
        component: RecieveOrder
      },
      {
        path: 'customer',
        name: 'CustomerPage',
        component: Customer
      },
      {
        path: 'reports',
        name: 'ReportPage',
        component: Reports
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: TestVue
  },
  {
    path: '/register',
    name: 'register',
    component: UserRegisterVue
  }

  // {
  //   path: '/admin/stock',
  //   name: 'Stocks',
  //   component: Stock
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
