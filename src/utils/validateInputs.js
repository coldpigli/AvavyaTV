const validateInputs = (email, password) => {
    if(email.includes('@')&&password.length>=8){
        return true;
    }
    else{
        return false;
    }
}

export default validateInputs;