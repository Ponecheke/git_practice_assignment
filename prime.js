function prime(number){
    let remainder=0;
    for(let i=2;i<=number;i++){
        if(number%i==0){
            remainder++;
        }
    }
    if(remainder==1){
        return "prime";
    }else{
        return "not prime";
    }
}
console.log(prime(13));
