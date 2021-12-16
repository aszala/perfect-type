export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function redirectHome(delay) {
    if (delay) {
        setTimeout(() => {
            window.location.href = '/';
        }, delay);
    } else {
        window.location.href = '/';
    }
}

export const emptyUser = {
    'email': "",
    'numGames': 0,
    'avgWPM': 0,
    'matchHistory': [],
    'matchHistoryTime': [],
    'uid': ""
}

export function inputType(e, handler) {
    if (e.keyCode === 13) {
        handler();
    }

    let label = e.target.parentNode.querySelector('label');

    if (e.target.value.length > 0) {
        label.style.top = "-10px";
        label.style.fontSize = "1em";
    } else {
        label.style.top = "10px";
        label.style.fontSize = "1.5em";
    }
}