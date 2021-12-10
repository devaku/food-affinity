export function GetLocalStorage() {
    let temp = JSON.parse(window.localStorage.getItem('z_cookie'));
    return temp ? temp : {};
}

export function SaveLocalStorage(z_cookie) {
    window.localStorage.setItem('z_cookie', JSON.stringify(z_cookie));
}
