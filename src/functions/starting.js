import store from "../store";

export default function starting(){
    console.log(store.getState().user);
    if (!store.getState().user){
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            store.dispatch({type: 'login', data: foundUser});
        }
    }
    switch (window.location.pathname){
        case '/login':
            if (store.getState().user) window.location.pathname = '/'
            break
        case '/register':
            if (store.getState().user) window.location.pathname = '/'
            break
        default:
            if (!store.getState().user) window.location.pathname = '/login'
            break        
    }
}