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