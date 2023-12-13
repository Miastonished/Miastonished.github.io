// "anyway im going to reduce everything down to an unholy amount of iterations of a += 1" - mia, 2023
function funnyadd(x, y){
    for(let i = x; i > 0; i--){
        y+=1;
    }
    return y;
}

function funnymultiply(x, y){
    let z = 0;
    for(let i = x; i > 0; i--){
        z = funnyadd(z,y);
    }
    return z;
}

function funnypower(x,y){
    let z = 1;
    for(let i = y; i > 0; i--){
        z = funnymultiply(z,x);
    }
    return z;
}

function converd(){
    base = 2;
    input666 = document.querySelector('input').value;
    numberlist = [];
    finalnumber = 0;
    number = 0;
    for(let i = input666.length; i > 0; i--){
        //console.log(input666.split('')[i-1]);
        numberlist[number] = funnymultiply(input666.split('')[i-1],funnypower(base,number));
        
        number++;
    }
    for(let i = numberlist.length; i > 0; i--){
        finalnumber= funnyadd(finalnumber,numberlist[i-1]);
        
    }
    document.getElementById('dec').innerHTML = finalnumber;
    
}



document.getElementById('bin').addEventListener('input', () => {
    converd();
});        