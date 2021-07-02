export default function isLogin() {
    if(localStorage.getItem("user")){
        return true
    };
    return false
}
