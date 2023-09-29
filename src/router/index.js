import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomePageLayout from "@/layouts/HomePageLayout.vue";
import UserDashboardLayout from "@/layouts/UserDashboardLayout.vue";
import AdminHome from "@/views/admin/HomeView.vue";
import UserDomainVerifier from "@/views/user/dashboard/DomainValidator.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePageLayout,
    children: [
      {
        path: "/",
        name: "home-page",
        component: () => import("@/views/user/HomePage.vue"),
      },
      {
        meta: {
          title: "DomainVerifier",
        },
        path: "/domain-checker",
        name: "domain-checker",
        component: () => import("@/views/user/products/DomainVerifier.vue"),
      },
      {
        meta: {
          title: "EmailVerifier",
        },
        path: "/email-checker",
        name: "email-checker",
        component: () => import("@/views/user/products/EmailVerifier.vue"),
      },
      {
        meta: {
          title: "BulkEmailVerifier",
        },
        path: "/bulk-email-checker",
        name: "bulk-email-checker",
        component: () => import("@/views/user/products/BulkEmailVerifier.vue"),
      },
      {
        meta: {
          title: "Integration",
        },
        path: "/integration",
        name: "integration",
        component: () => import("@/views/user/products/Integration.vue"),
      },
      {
        path: "integration/mailchimp",
        name: "mailchimp",
        component: () => import("@/views/user/integrations/ServiceDetails.vue"),
      },
      {
        path: "integration/mailchimp/setup",
        name: "mailchimp-setup",
        component: () => import("@/views/user/integrations/MailChimp.vue"),
      },
      {
        meta: {
          title: "Conatct",
        },
        path: "/contact",
        name: "contact",
        component: () => import("@/views/user/ContactPage.vue"),
      },
      {
        meta: {
          title: "Faq",
        },
        path: "/faq",
        name: "Faq",
        component: () => import("@/views/user/FaqPage.vue"),
      },
      {
        meta: {
          title: "Policy",
        },
        path: "/policy",
        name: "policy",
        component: () => import("@/views/user/Policy.vue"),
      },
      {
        meta: {
          title: "Gdpr",
        },
        path: "/gdpr",
        name: "gdpr",
        component: () => import("@/views/user/Gdpr.vue"),
      },
    ],
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/admin",
    name: "dashboard",
    component: AdminHome,
  },
  {
    meta: {
      title: "Tables",
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/admin/TablesView.vue"),
  },
  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/admin/FormsView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/admin/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui",
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/admin/UiView.vue"),
  },
  // {
  //   meta: {
  //     title: "Responsive layout",
  //   },
  //   path: "/responsive",
  //   name: "responsive",
  //   component: () => import("@/views/admin/auth/ResponsiveView.vue"),
  // },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/admin/auth/LoginPage.vue"),
  },
  {
    meta: {
      title: "Register",
    },
    path: "/register",
    name: "register",
    component: () => import("@/views/admin/auth/RegisterPage.vue"),
  },
  {
    meta: {
      title: "Forgot Password",
    },
    path: "/fogot-password",
    name: "fogot-password",
    component: () => import("@/views/admin/auth/ForgotPassword.vue"),
  },
  {
    meta: {
      title: "Check Email",
    },
    path: "/check-email",
    name: "check-email",
    component: () => import("@/views/admin/auth/CheckEmail.vue"),
  },
  {
    meta: {
      title: "Set New Password",
    },
    path: "/set-new-password",
    name: "set-new-password",
    component: () => import("@/views/admin/auth/SetNewPassword.vue"),
  },
  {
    meta: {
      title: "PasswordReset",
    },
    path: "/reset-password",
    name: "reset-password",
    component: () => import("@/views/admin/auth/PasswordReset.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: UserDashboardLayout,
    children: [
      {
        path: "",
        name: "profile",
        component: () => import("@/views/user/dashboard/UserProfile.vue"),
      },
      {
        path: "domain-verifier",
        name: "Domain-Verifier",
        component: UserDomainVerifier
      },
      {
        path: "email-verifier",
        name: "Email-Verifier",
        component: () => import('@/views/user/dashboard/EmailVerifier.vue')
      },
      {
        path: "credit-balance",
        name: "Credit-Balance",
        component: () => import('@/views/user/dashboard/CreditBalance.vue')
      },
      {
        path: "buy-credits",
        name: "Buy-Credit",
        component: () => import('@/views/user/dashboard/BuyCredit.vue')
      },
      {
        path: "buy-credits-detail",
        name: "Buy-detail",
        component: () => import('@/views/user/dashboard/BuyCreditDetails.vue')
      },
      {
        path: "shopping-card",
        name: "Shopping-Card",
        component: () => import('@/views/user/dashboard/ShoppingCard.vue')
      },
      {
        path: "shopping-card-pay",
        name: "Shopping-pay",
        component: () => import('@/views/user/dashboard/ShoppingPay.vue')
      },
      {
        path: "orders",
        name: "Orders",
        component: () => import('@/views/user/dashboard/Orders.vue')
      },
      {
        path: "reports",
        name: "Reports",
        component: () => import('@/views/user/dashboard/Reports.vue')
      },
      {
        path: "subscription",
        name: "SubScription",
        component: () => import('@/views/user/dashboard/SubScription.vue')
      },
    ],


  },
  // {
  //   path: "/user-profile",
  //   component: () => import("@/views/user/dashboard/UserProfile.vue"),
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/admin/ErrorView.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/admin/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
