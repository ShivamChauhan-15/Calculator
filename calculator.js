// num=input;
num=document.getElementById("input");
function numkey(x){
    if(!isNaN(x)|| x=='+' || x=='-' || x=='×' || x=='÷' || x=='.'){
        if(x=='×')
            x='*';
        else if(x=='÷')
            x='/';
        num.value+=x;
    }
    else if(x=='C')
        num.value='';
    else if(x=='%'){
        num.value+=x;
        let s=num.value,s1='';
        let i=s.length-2;
        for(;i>=0;i--){
            if(isNaN(s[i]) && s[i]!='.') {
                s1=s.slice(i+1);
                break;
            }
            if(i==0) 
                 s1=s;
        }
        num.value=s.replace(s1,(i==-1?1:eval(s.slice(0,i)))*parseInt(s1)/100);
    }
    else if(x=='=')
        num.value=eval(num.value).toFixed(4);
    else if(x=='←')
        num.value=num.value.slice(0,-1);
}

const button=document.querySelectorAll("button");
for(let i of button)
{
    i.addEventListener('click',()=>{numkey(i.innerText)});
    if(isNaN(i.innerText) && i.innerText!='.') {
        i.style.backgroundColor="yellow";
    } 
    if (i.innerText=='=') {
        i.style.backgroundColor='red';
    }
}

