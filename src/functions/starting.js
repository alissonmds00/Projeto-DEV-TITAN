import store from "../store";

export default async function starting(){
    if (!store.getState().user){
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            store.dispatch({type: 'login', data: foundUser});
        }
    }
    console.log(store.getState().user);
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