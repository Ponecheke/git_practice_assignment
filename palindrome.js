let s=num+"";
let N=s.length;
for (let i=0;i<N/2;i++){
    if(s[i] != s[N-1-i]){
        console.log("No");
        break;
    }else{
        console.log("Yes");
        break;
    }
    }