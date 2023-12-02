let silver = [];
let FTSscore = 0;
let height = 0;
let width = 0;

function fts(numberofsilvers){
    
    document.body.minHeight = "100%";
//    FTSheight = document.documentElement.getBoundingClientRect().height;
//    FTSwidth = document.documentElement.getBoundingClientRect().width;
    FTSheight = document.documentElement.offsetHeight;
    FTSwidth = document.documentElement.offsetWidth;
    console.log(numberofsilvers);
    if(!Number.isInteger(numberofsilvers))
    {
        numberofsilvers = 1;
    }
    for (let n = 0; n < numberofsilvers; n++)
    {
        silver.push(document.createElement("div"));
        silver[n].style.height = "44.734693877551020408163265306122px"; 
        silver[n].style.width = "32px"; 
        silver[n].style.position = "absolute";
        silver[n].style.top = Math.floor(Math.random() * FTSheight-31);
        silver[n].style.left = Math.floor(Math.random() * FTSwidth-31);
        silver[n].style.backgroundImage = "url('https://miastonished.github.io/assets/silver.png')";
        silver[n].style.backgroundSize = "32px";
        silver[n].style.cursor = "pointer";
        silver[n].style.transition = "top 0.1s, left 0.1s";
        silver[n].onclick = function(){find(this)};
        document.body.appendChild(silver[n]);
    }    
}

function find(who){
    FTSscore += 1;
    console.log('silver '+FTSscore);
    console.log(who);
    console.log(FTSheight, FTSwidth);
    
    
    FTSheight = document.documentElement.offsetHeight;
    FTSwidth = document.documentElement.offsetWidth;
    
    who.style.top = Math.floor(Math.random() * FTSheight-31);
    who.style.left = Math.floor(Math.random() * FTSwidth-31);
}