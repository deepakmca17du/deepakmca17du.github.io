import StudentReport from "./StudentWiseReport.vue";
import Home from "./Home.vue";
export const routes = [
  { path: "", component: Home },
  { path: "/student-wise-report/:id", component: StudentReport }
];
