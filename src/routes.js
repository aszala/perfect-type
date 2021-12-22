import Play from "./pages/Play.svelte";
import Login from "./pages/Login.svelte";
import Signup from "./pages/Signup.svelte";
import Profile from "./pages/Profile.svelte";
import Leaderboard from "./pages/Leaderboard.svelte";
import NotFound from "./pages/404.svelte";
import Logout from "./pages/Logout.svelte";
import ResendVerification from "./pages/ResendVerification.svelte";

import { getUser, isLoggedIn } from "./firebase";

function guard() {
    return !isLoggedIn();
}

function emailUnVerified() {
    return !getUser().emailVerified;
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
    },
    {
        name: "profile",
        component: Profile,
        onlyIf: { guard: isLoggedIn, redirect: "/" }
    },
    {
        name: "leaderboard",
        component: Leaderboard,
    },
    {
        name: "logout",
        component: Logout,
        onlyIf: { guard: isLoggedIn, redirect: "/" }
    },
    {
        name: "404",
        component: NotFound
    },
    {
        name: "resendverification",
        component: ResendVerification,
        onlyIf: { guard: emailUnVerified, redirect: "/" }
    }
];

export { routes };