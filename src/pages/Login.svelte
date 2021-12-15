<script>
import { signUserIn } from "../firebase";
import { redirectHome } from "../utils";


function login() {
    signUserIn(thisUser, thisPass).then((user) => {
        if (user != null) {
            successLog = true;
            redirectHome(1000);
        }
    });
}

</script>