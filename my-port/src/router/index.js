import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Certificate from "../views/Certificate.vue";
import ProjectDetail from "../views/ProjectDetail.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/certificate", name: "Certificate", component: Certificate },
  { path: "/project/:slug", name: "ProjectDetail", component: ProjectDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
