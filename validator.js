var psw = "J!nK1ll3r";//"bloogle";
var pswtst = ""
 
function check1(){
    if (psw!=""){
        pswtst = true;
    }else{
        pswtst = false;
    }
    return pswtst;
}
function check2(){
    var  msg ='';
    //  var regexp = /{8,}/;
     if (psw.length>=8){
      msg= true;
    } else {
        msg = false;
    }
    return msg;
}
function check3(){
    const regexp = /[A-Z]/;

    return regexp.test(psw);

}
function check4(){
    const regexp = /[a-z]/;

    return regexp.test(psw);

}
function check5(){
    const regexp = /[0-9]/;

    return regexp.test(psw);
}
function check6(){
    const regexp = /g*[ \ ^ $ . ! @ % & | ? * + ( ) + = - _  ; :]/;

    return regexp.test(psw); 
}
module.exports ={
    check1,
    check2, 
    check3,
    check4,
    check5,
    check6
}