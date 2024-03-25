// coded by aiston of https://aiston.scungled.gay free to use and modify for non commercial purposes
// usage: <script src="/path/to/this/script.js" rss="/path/to/rss.xml"></script>
// place the script in your html where you want the rss element to be :3
//
//
// element classes available for styling: rssFeed (the entire feed), rssItem (each rss item), rssHeading (the title and date heading), rssLink (if the rss item has a link), rssTitle, rssDate, rssContent. go crazy!!!
var rss = document.currentScript.getAttribute('rss');
var container = document.createElement("div");
container.className = "rssFeed";
container.innerHTML = "";
var xhr = new XMLHttpRequest();
xhr.open("GET", rss, true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
    var xml = xhr.responseXML;
    var items = xml.getElementsByTagName("item");
    for (var i = 0; i < items.length; i++) {
        var title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var link = (items[i].getElementsByTagName("link")[0].childNodes[0]) ? items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue : '' ;
        var description = items[i].getElementsByTagName("description")[0].childNodes.toString();
        var pubDate = (items[i].getElementsByTagName("pubDate")[0].childNodes[0]) ? items[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue : '' ;
        if (pubDate != ''){
            var date = new Date(pubDate);
            pubDate = ' - ' + date.toLocaleDateString();
        }
        
        if (link != ''){
            container.innerHTML += "<div class='rssItem'><h2 class='rssHeading'><a class='rssLink' href='" + link + "'><span class='rssTitle'>" + title + "</span></a><span class='rssDate'>" + pubDate + "</span></h2><p class='rssContent'>" + description + "</p></div>";
        } else {
            container.innerHTML += "<div class='rssItem'><h2 class='rssHeading'><span class='rssTitle'>" + title + "</span><span class='rssDate'>" + pubDate + "</span></h2><p class='rssContent'>" + description + "</p></div>";
        };
    }
    }
    script = document.scripts[document.scripts.length - 1];
    script.parentElement.insertBefore(container, script)
}
xhr.send();
