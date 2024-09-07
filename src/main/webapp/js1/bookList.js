

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

    //getBookList();

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

function hidefooter(){
  var pagination = document.getElementsByClassName(".pagination")[0];
  pagination.style.display = "";
}



function getBookList() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/bookDataList", false);
  xhttp.send();
  if( xhttp.status == 200 && xhttp.readyState == 4){
    xhttpResp = JSON.parse(xhttp.responseText);
    var ul = document.getElementsByClassName("right-main-bookList-ul")[0];
    for(var i=0; i< 5; i++){
      //
      var li = document.createElement("li");

      //書籍写真
      var picDiv = document.createElement("div");
      var img = document.createElement("img");
      picDiv.classList.add("li-pic");
      picDiv.classList.add("li-child");
      li.classList.add("right-main-bookList-li");
      img.setAttribute("src", xhttpResp[i]["pic"]);
      img.setAttribute("style", "height:100%");
      picDiv.appendChild(img);
      li.appendChild(picDiv);
      ul.appendChild(li);
      //書籍情報
      var infoDiv = document.createElement("div");
      infoDiv.classList.add("infoDiv");
      var infoh3 = document.createElement("h3");
      var infop1 = document.createElement("p");
      var infop2 = document.createElement("p");
      var infop3 = document.createElement("p");
      infoh3.textContent = xhttpResp[i]["title"];
      infop1.textContent = "著：" + xhttpResp[i]["author"];
      infop2.textContent = "出版社：" + xhttpResp[i]["publisher"];
      infop3.textContent = "到着日：" + xhttpResp[i]["arriveDay"];
      infoDiv.appendChild(infoh3);
      infoDiv.appendChild(infop1);
      infoDiv.appendChild(infop2);
      infoDiv.appendChild(infop3);
      li.appendChild(infoDiv);
      //書籍詳細
      var detailDiv = document.createElement("div");
      var lidetail = document.createElement("div");
      lidetail.classList.add("li-detail");
      detailDiv.classList.add("div-detail");
      detailDiv.textContent = "書籍詳細";
      lidetail.appendChild(detailDiv);
      li.appendChild(lidetail);
      
    }

  }
}



function doOpenRegisterDialog(){
  console.log("ss");
}

function doOpenLoginDialog(){
  
}

function doCheckSearchKeyWords(){
  console.log(123);
}