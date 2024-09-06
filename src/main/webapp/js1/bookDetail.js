

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
    //getHeaderList();

    //getBookDetail();


    var loadingMask = document.getElementById('loadingDiv');
    loadingMask.parentNode.removeChild(loadingMask);

	getBooksByCategory = function(categoryId){
		window.location.href="http://localhost:8080/Book-System/discovery?categoryId="
		+ categoryId + "&tag=0";
	}

	getHome = function(){
		window.location.href = "http://localhost:8080/Book-System/book"
	}

	getRanking = function(){
		window.location.href = "http://localhost:8080/Book-System/ranking"
	}
	
	getBookDetail = function(bookId){
		window.location.href = "http://localhost:8080/Book-System/bookDetail?bookId="
		+ bookId;
	}

  }

}


function getBookDetail() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/bookDetail", false);
  xhttp.send();
  if (xhttp.status == 200 && xhttp.readyState == 4) {
    var xhttpResp = JSON.parse(xhttp.response)[0];
    //タイトル
    var title = document.querySelectorAll(".bookDetail-title > span")[0];
    title.innerText = xhttpResp["title"];
    //在庫数
    var inventory = document.querySelectorAll(".bookDetail-title > .inventory")[0];
    inventory.innerText = "在庫数: " + xhttpResp["inventory"];
    //評価
    var points = document.getElementsByClassName("right-point-point")[0];
    points.innerText = xhttpResp["likes"];
    //ビューアー数
    var viewer = document.querySelectorAll(".right-view > p")[0];
    viewer.innerText = "ビューアー" + xhttpResp["watched"];
    //書籍写真
    var img = document.querySelectorAll(".right-pic > img")[0];
    img.setAttribute("src", xhttpResp["pic"]);
    //書籍詳細
    var detail = xhttpResp["detail"];
    var detailSpan = document.querySelectorAll(".bookDetail-info-left > p >span");
    for(var i=0; i< detailSpan.length; i++){
      var cls = detailSpan[i].getAttribute("class")
      detailSpan[i].innerText = detail[cls];

    }
  }
}

function getComment() {

}

function saveBook() {

}

function likeBook() {

}

function getHeaderList() {
  var xhttp = new XMLHttpRequest();
  var xhttpResp = null;
  var ul = document.getElementsByClassName("header-navi-ul")[0];
  xhttp.open("GET", "http://localhost:3000/headerDataList", false);
  xhttp.send();
  if (xhttp.status == 200 && xhttp.readyState == 4) {
    xhttpResp = JSON.parse(xhttp.response);
    for (var i = 0; i < xhttpResp.length; i++) {
      li = document.createElement("li");
      a = document.createElement("a");
      img = document.createElement("img");
      img.setAttribute("src", xhttpResp[i]["pic"]);
      a.setAttribute("href", "");
      a.innerText = xhttpResp[i]["title"];
      li.appendChild(img);
      li.appendChild(a);
      ul.appendChild(li);
    }
    var xhttpResp = JSON.parse(xhttp.responseText);

  }

}


function doOpenRegisterDialog() {
  console.log("ss");
}

function doOpenLoginDialog() {

}

function doCheckSearchKeyWords() {
  console.log(123);
}