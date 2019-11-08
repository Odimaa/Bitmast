import Home from "./components/pages/Home.vue";
import Developers from "./components/pages/Developers.vue";
import Support from "./components/pages/Support.vue";
import SignIn from "./components/auth/SignIn.vue";
import LearnMore from "./components/pages/LearnMore.vue";
import Congratulations from "./components/dashboard/Congratulations.vue";
import Signupcode from "./components/auth/Signupcode.vue";
import EnterEmail from "./components/auth/EnterEmail.vue";
import Register from "./components/auth/Register.vue";
import Dashboard from "./components/dashboard/Dashboard.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/Home", component: Home },
  { path: "/Developers", component: Developers },
  { path: "/Support", component: Support },
  { path: "/SignIn", component: SignIn },
  { path: "/Congratulations", component: Congratulations },
  { path: "/Signupcode", component: Signupcode },
  { path: "/LearnMore", component: LearnMore },
  { path: "/Register", component: Register },
  { path: "/Dashboard", component: Dashboard },

  { path: "/EnterEmail", component: EnterEmail }
];
