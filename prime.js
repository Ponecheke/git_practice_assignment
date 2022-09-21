function prime(num){
    let remainder=0;
    for(let i=2;i<=num;i++){
        if(num%i==0){
            remainder++;
        }
    }
    if(remainder==1){
        return "true";
    }else{
        return "false";
    }
}
console.log(prime(13));
