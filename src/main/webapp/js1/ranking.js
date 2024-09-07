

var _PageHeight = document.documentElement.clientHeight,
  _PageWidth = document.documentElement.clientWidth;
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
  _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f3f8ff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; border: 2px solid #95B8E7; color: #696969; font-family:\'Microsoft YaHei\';">页面加载中，请等待...</div></div>';
document.write(_LoadingHtml);

document.onreadystatechange = loadData;

function loadData() {
  if (document.readyState == "complete") {
    //

    var loadingMask = document.getElementById('loadingDiv');
    loadingMask.parentNode.removeChild(loadingMask);

	getBooksByCategory = function(categoryId){
		window.location.href="http://localhost:8080/Book-System/discovery?categoryId="
		+ categoryId + "&tag=0&curPage=1&pageSize=16";
	}

	getHome = function(){
		window.location.href = "http://localhost:8080/Book-System/book"
	}

	getRanking = function(){
		window.location.href = "http://localhost:8080/Book-System/ranking"
	}
  }

}

function getRanking() {
  var xhttp = new XMLHttpRequest();
  var xhttpResp = null;
  var ul = document.getElementsByClassName("header-navi-ul")[0];
  xhttp.open("GET", "http://localhost:3000/rankingList", false);
  xhttp.send();
  if (xhttp.status == 200 && xhttp.readyState == 4) {

    for (var i = 1; i <= 10; i++) {
      var xhttpResp = JSON.parse(xhttp.responseText)[0];
      console.log(xhttpResp);
      var ul = document.getElementsByClassName("ranking-detail")[0];
      var li = document.createElement("li");
      var a = document.createElement("a");
      var spanLevel = document.createElement("span");
      spanLevel.classList.add("level");
      var spanTitle = document.createElement("span");
      spanTitle.classList.add("title");
      var spanDescribe = document.createElement("span");
      spanDescribe.classList.add("describe");

      //
      spanLevel.innerText = xhttpResp["ranking"];
      spanTitle.innerText = xhttpResp["title"];
      spanDescribe.innerText = xhttpResp["detail"];
      a.setAttribute("href", xhttpResp["url"]);

      //
      a.appendChild(spanLevel);
      a.appendChild(spanTitle);
      a.appendChild(spanDescribe);
      li.appendChild(a);
      ul.appendChild(li);
    }

    

  }
}

function hidefooter() {
  var pagination = document.getElementsByClassName(".pagination")[0];
  pagination.style.display = "";
}

