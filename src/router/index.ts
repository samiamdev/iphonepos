import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/HomeView.vue";
import Admin from "@/views/Admin/Admin.vue";
import AddUser from "@/views/test/AddUser.vue";
import EditUser from "@/views/test/EditUser.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: Admin,
    children: [
      {
        path: "stock",
        name: "StockPage",
        component: () => import("@/views/Stock/Stocks.vue"),
      },
      {
        path: "reorder",
        name: "ReOrderPage",
        component: () => import("@/views/Stock/ReOrders.vue"),
      },
      {
        path: "recieveorder",
        name: "RecieveOrderPage",
        component: () => import("@/views/Stock/RecieveOreder.vue"),
      },
      {
        path: "customer",
        name: "CustomerPage",
        component: () => import("@/views/Customers/Customers.vue"),
      },
      {
        path: "register",
        name: "RegisterPage",
        component: () => import("@/views/UserRegister.vue"),
      },
      {
        path: "reports",
        name: "ReportPage",
        component: () => import("@/views/Reports/Reports.vue"),
      },
      {
        path: "supplier",
        name: "SupplierPage",
        component: () => import("@/views/manager/Supplier.vue"),
      },
      {
        path: "employee",
        name: "EmployeePage",
        component: () => import("@/views/manager/Employee.vue"),
      },
      {
        path: "credit",
        name: "CustomerCreditPage",
        component: () => import("@/views/manager/Customer.vue"),
      },
    ],
  },
  {
    path: "/users",
    name: "AddUser",
    component: AddUser,
  },
  {
    path: "/users/edit",
    name: "EditUser",
    component: () => import("@/views/test/EditUser.vue"),
  },
  {
    path: "/users/dashboard",
    name: "DashboardUser",
    component: () => import("@/views/test/DashboardUser.vue"),
  },
  {
    path: "/users/detail",
    name: "UserDetail",
    component: () => import("@/views/test/UserDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
