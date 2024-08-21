

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
    getCatalog();

    var loadingMask = document.getElementById('loadingDiv');
    loadingMask.parentNode.removeChild(loadingMask);


  }

}

function hidefooter(){
  var pagination = document.getElementsByClassName(".pagination")[0];
  pagination.style.display = "";
}

function doCarousel() {
  var bookWrap = document.querySelectorAll(".booklist-inner")[0];
  var booklist = document.querySelectorAll(".booklist-inner > a");
  var mainLen = document.getElementsByTagName("main")[0].offsetWidth;
  var bookWidth = booklist[0].offsetWidth;
  var bookLenth = booklist.length;
  var totalLen = bookWidth * bookLenth;
  var lft = 10;
  let timer;
  
  play();
  bookWrap.onmouseenter = function () {
    clearInterval(timer);
  }

  bookWrap.onmouseleave = function () {
    play();
  }

  function play() {
    timer = setInterval(() => {
      lft -= 1;
      if (totalLen + bookWrap.offsetLeft - bookLenth <= mainLen) {
        lft = 0;

      }
      if (-lft >= bookWidth) {
        var tempNode = bookWrap.children[0].cloneNode(true);
        bookWrap.appendChild(tempNode);
        bookWrap.removeChild(bookWrap.children[0]);
        console.log(lft);
        lft = 0;
      }

      bookWrap.style.left = lft + "px";
    }, 20);
  }

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

function getCatalog() {
  var xhttp = new XMLHttpRequest();
  var xhttpResp = null;
  xhttp.open("GET", "http://localhost:3000/catalogList", false);
  xhttp.send();
  if (xhttp.status == 200 && xhttp.readyState == 4) {
    xhttpResp = JSON.parse(xhttp.responseText);
    catalist = document.getElementsByClassName("middle-category")[0];
    for (var i = 0; i < xhttpResp.length; i++) {
      cata = document.createElement("a");
      cata.setAttribute("href", xhttpResp[i]["url"]);
      cata.innerText = xhttpResp[i]["cata"];
      catalist.appendChild(cata);
    }

  }
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



function doOpenRegisterDialog(){
  console.log("ss");
}

function doOpenLoginDialog(){
  
}

function doCheckSearchKeyWords(){
  console.log(123);
}