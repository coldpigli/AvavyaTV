import toast from "./toast";

const checkLogin = (isLoggedIn) => {
    if(isLoggedIn){
        return true;
    }
    else{
        toast({
            type: "error",
            message: "You need to login to continue"
        });
        return false
    }
}

export default checkLogin;