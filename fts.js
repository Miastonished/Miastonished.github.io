let silver = document.createElement("div");
let FTSscore = 0;
let height = 0;
let width = 0;

function fts(){
    FTSheight = document.documentElement.getBoundingClientRect().height;
    FTSwidth = document.documentElement.getBoundingClientRect().width;


    silver.style.height = "44.734693877551020408163265306122px"; 
    silver.style.width = "32px"; 
    silver.style.position = "absolute";
    silver.style.top = Math.floor(Math.random() * FTSheight+1);
    silver.style.left = Math.floor(Math.random() * FTSwidth+1);
    silver.style.backgroundImage = "url('https://miastonished.github.io/assets/silver.png')";
    silver.style.backgroundSize = "32px";
    silver.style.cursor = "pointer";
    silver.style.transition = "top 0.1s, left 0.1s";
    silver.onclick = function(){find()};
    document.body.appendChild(silver); 
}

function find(){
    FTSscore += 1;
    console.log('silver '+FTSscore);
    silver.style.top = Math.floor(Math.random() * FTSheight+1);
    silver.style.left = Math.floor(Math.random() * FTSwidth+1);
}