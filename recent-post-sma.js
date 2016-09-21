//<![CDATA[
var homePage = "http://www.openkerja.com",
numPosts = 10;
function recentPosts(a){if(document.getElementById("recent-posts-sma")){var e=a.feed.entry,title,link,content="",ct=document.getElementById("recent-posts-sma");for(var i=0;i<numPosts;i++){for(var j=0;j<numPosts;j++){if(e[i].link[j].rel=="alternate"){link=e[i].link[j].href;break}}var title=e[i].title.$t;content+='<li class="recent-posts-sma"><b><a href="'+link+'" title="'+title+'" target="_blank">'+title+'</a></b></li>'}ct.innerHTML=content}}var rcp=document.createElement('script');rcp.src=homePage+'/feeds/posts/summary/-/SMA?alt=json-in-script&orderby=published&max-results='+numPosts+'&callback=recentPosts';document.getElementsByTagName('head')[0].appendChild(rcp);
//]]>
