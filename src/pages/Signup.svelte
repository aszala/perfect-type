<script>
import { createUser } from "../firebase";
import { validateEmail, redirectHome } from "../utils";

let success = false;

function signup() {
    if (!validateEmail(thisUser)) {
      alert("Invalid email!")
      return
    }

    if (confPass !== thisPass) {
      alert("Passwords do not match!")
      return
    } 

    if (thisPass.length <= 8) {
      alert("Passwords too short!") // make better
      return
    }

    createUser(thisUser, thisPass).then((user) => {
        if (user != null) {
            success = true;
            redirectHome(1000);
        }
    });
}

</script>