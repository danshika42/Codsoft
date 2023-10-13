var num=0;
var ans=0;
var op='+';
function handleClick(val) {
    var output = document.getElementById("result");
    switch(val){
        case 1:
            output.value+=val;
            num=num*10+val;
            break;
        case 2:
            output.value+=val;
            num=num*10+val;
            break;
        case 3:
            output.value+=val;
            num=num*10+val;
            break;
        case 4:
            output.value+=val;
            num=num*10+val;
            break;
        case 5:
            output.value+=val;
            num=num*10+val;
            break;
        case 6:
            output.value+=val;
            num=num*10+val;
            break;
        case 7:
            output.value+=val;
            num=num*10+val;
            break;
        case 8:
            output.value+=val;
            num=num*10+val;
            break;
        case 9:
            output.value+=val;
            num=num*10+val;
            break;
        case 0:
            output.value+=val;
            num=num*10+val;
            break;
        case '=':
            if(op==='+'){
                ans=ans+num;
            }
            if(op==='-'){
                ans=ans-num;
            }
            if(op==='*'){
                ans=ans*num;
            }
            if(op==='/'){
                ans=ans/num;
            }
            output.value=ans;
            num=0;
            op='+';
            break;
        case '+':
            output.value+=val;
            if(op==='+'){
                ans=ans+num;
            }
            if(op==='-'){
                ans=ans-num;
            }
            if(op==='*'){
                ans=ans*num;
            }
            if(op==='/'){
                ans=ans/num;
            }
            op='+';
            num=0;
            break;
        case '*':
            output.value+=val;
            if(op==='+'){
                ans=ans+num;
            }
            if(op==='-'){
                ans=ans-num;
            }
            if(op==='*'){
                ans=ans*num;
            }
            if(op==='/'){
                ans=ans/num;
            }
            op="*";
            num=0;
            break;
        case '/':
            output.value+=val;
            if(op==='+'){
                ans=ans+num;
            }
            if(op==='-'){
                ans=ans-num;
            }
            if(op==='*'){
                ans=ans*num;
            }
            if(op==='/'){
                ans=ans/num;
            }
            op='/';
            num=0;
            break;
        case '-':
            output.value+=val;
            if(op==='+'){
                ans=ans+num;
            }
            if(op==='-'){
                ans=ans-num;
            }
            if(op==='*'){
                ans=ans*num;
            }
            if(op==='/'){
                ans=ans/num;
            }
            op='-'
            num=0;
            break;
        case 'c':
            output.value='';
            ans=0;
            num=0;
            op='+';
            break;
    }
}