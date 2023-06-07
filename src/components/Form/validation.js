const validation = (userData,errors,setErrors) => {
    if(!userData.userName){
        setErrors({...errors, userName:"ingrese su email"});
    }else if(userData.userName.length>35){
        setErrors({...errors,userName:"no debe superar 35 caracteres"});
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.userName)){
        setErrors({...errors,userName:"email invalido"});
    }else{
        setErrors({...errors, userName:""});
    }


    if (userData.Password.length<6 || userData.Password.length>10){
        setErrors({...errors, Password:"longitud incorrecta"});
    }else if(!/\d/.test(userData.Password)){
        setErrors({...errors, Password:"password must fit at least 1num and 6 to 10 char"});
    }else{
        setErrors({...errors, Password:""});
    }
};

export default validation;