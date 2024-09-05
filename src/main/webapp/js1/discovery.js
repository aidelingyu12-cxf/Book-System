

var _PageHeight = document.documentElement.clientHeight,
  _PageWidth = document.documentElement.clientWidth;
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
  _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f3f8ff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; border: 2px solid #95B8E7; color: #696969; font-family:\'Microsoft YaHei\';">页面加载中，请等待...</div></div>';
document.write(_LoadingHtml);

document.onreadystatechange = loadData;

function loadData() {
  if (document.readyState == "complete") {

    //getCatalog();

    //getBookList();

    getNewArrivalClicked();

    getHeaderList();

    var loadingMask = document.getElementById('loadingDiv');
    loadingMask.parentNode.removeChild(loadingMask);
    

  }

}

function hidefooter(){
  var pagination = document.getElementsByClassName(".pagination")[0];
  pagination.style.display = "";
}

function getNewArrivalClicked(){
  var li0 = document.querySelectorAll(".middle-nav > li")[0];
  li0.classList.add("li-checked");
  li0.setAttribute("style", "border: solid 1px #ddd;border-bottom: none; border-bottom-color: transparent; background-color: #ddd");
  console.log(li0);
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

function getBookList() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/bookDataList", false);
  xhttp.send();
  if( xhttp.status == 200 && xhttp.readyState == 4){
    xhttpResp = JSON.parse(xhttp.responseText);
    var bookList = document.getElementsByClassName("bookList")[0];
    for(var i=0; i< xhttpResp.length; i++){
      //
      var book = document.createElement("div");
      book.classList.add("book");

      var a1 = document.createElement("a");
      a1.classList.add("pic-a");
      a1.setAttribute("href", xhttpResp[i]["url"]);
      //書籍写真
      var img = document.createElement("img");
      img.setAttribute("src", xhttpResp[i]["pic"]);
      //link
      var a2 = document.createElement("a");
      a2.classList.add("text-a");
      a2.setAttribute("href", xhttpResp[i]["url"]);
      a2.innerText = xhttpResp[i]["title"];

      a1.appendChild(img);
      book.appendChild(a1);
      book.appendChild(a2);
      bookList.appendChild(book);

      
    }

  }
}



function getCatalog() {
  var xhttp = new XMLHttpRequest();
  var xhttpResp = null;
  var data = 0;
  xhttp.open("GET", "http://localhost:3000/catalogList", false);
  xhttp.send();
  if (xhttp.status == 200 && xhttp.readyState == 4) {
    xhttpResp = JSON.parse(xhttp.responseText);
    catalist = document.getElementsByClassName("middle-category")[0];
    if(xhttpResp.length > 15){
      data = 15
    }else{
      data = xhttpResp;
    }
    for (var i = 0; i < data; i++) {
      cata = document.createElement("a");
      cata.innerText = xhttpResp[i]["cata"];
      cata.setAttribute("href", xhttpResp[i]["url"]);
      catalist.appendChild(cata);
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

function doGetBooksByTag(thisNode){
  var newChecked = thisNode;
  var checked = document.getElementsByClassName("li-checked")[0];
  checked.setAttribute("style", "border: transparent; border-bottom-color: #ddd");
  checked.classList.remove("li-checked");
  newChecked.classList.add("li-checked");
  newChecked.setAttribute("style", "border: solid 1px #ddd; border-bottom: none; border-bottom-color: transparent");
  newChecked.setAttribute("style", "background-color: #ddd");
}
