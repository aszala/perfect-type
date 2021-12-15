import Play from "./pages/Play.svelte";
import Login from "./pages/Login.svelte";
import Signup from "./pages/Signup.svelte";

import { isLoggedIn } from "./firebase"

function guard() {
    return !isLoggedIn();
}

const routes = [
    {
        name: "/",
        component: Play
    },
    {
        name: "login",
        component: Login,
        onlyIf: { guard: guard, redirect: "/" }
    },
    {
        name: "signup",
        component: Signup,
        onlyIf: { guard: guard, redirect: "/" }
    }
];

export { routes };