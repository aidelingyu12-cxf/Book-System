

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
    getHeaderList();
    //左側本のカタログを取得する
    getCatalog();
    //カレンダーを設定する
    getCalenda();
    //
    getBookList();

    //
    //doCarousel();

    var loadingMask = document.getElementById('loadingDiv');
    loadingMask.parentNode.removeChild(loadingMask);

    
  }

}


function doCarousel(){
  var bookWrap = document.querySelectorAll(".booklist-wrap")[0];
  var booklist = document.querySelectorAll(".booklist-wrap > a");
  var mainLen = document.getElementsByTagName("main")[0].offsetWidth;
  var bookWidth = booklist[0].offsetWidth;
  var bookLenth = booklist.length;
  var totalLen = bookWidth*bookLenth;
  var lft = 0;
  let timer;

  bookWrap.onmouseenter = function(){
    clearInterval(timer);
  }

  bookWrap.onmouseleave = function(){
    play();
  }

  function play(){
    timer = setInterval(() => {
      if(totalLen + bookWrap.offsetLeft <= mainLen){
        lft = 0;
        console.log(bookWrap.style.left);
      }
      lft -= 5;
      bookWrap.style.left = lft + "px";
      
    }, 20);
  }

}



function changePic(books, left, width){
  for(var i=0; i<=books.length-1; i++){
    if(books.length-i-1 <=12 ){
      console.log(books.length-i-1);
      clearInterval(changePic);
    }
    books[i].setAttribute("style","left:" + left + "px");
  }
  //console.log(left);
}



window.onscroll=function(){
  var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
  var bignav  = document.getElementsByClassName("main-right")[0];//获取到导航栏id
  if(topScroll > 150){  //当滚动距离大于250px时执行下面的东西
    var top = document.getElementsByTagName("header")[0].offsetHeight + "px";
    var left = document.getElementsByClassName("main-left")[0].clientWidth + "px";
      bignav.style.position = 'fixed';
      bignav.style.top = top;
      bignav.style.left = left;
      bignav.style.right = 0;
      bignav.style.bottom = 0;
      bignav.style.zIndex = '9999';
      bignav.style.flex = '1';
  }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
      bignav.style.position = 'static';
  }
}

// function sleep2(ms) {
//   return new Promise(function(resolve, reject) {
//       setTimeout(resolve, ms)
//   })
// }


function getBookList() {
  var xhttp = new XMLHttpRequest();
  var xhttpResp = null;
  xhttp.open("GET", "http://localhost:3000/bookDataList/", false);
  xhttp.send();
  if (xhttp.status == 200 && xhttp.readyState == 4) {
    xhttpResp = JSON.parse(xhttp.responseText);
    catalist = document.getElementsByClassName("booklist-wrap")[0];
    for (var i = 0; i < xhttpResp.length; i++) {
      a = document.createElement("a");
      a.setAttribute("href", "/");
      img = document.createElement("img");
      img.setAttribute("src", xhttpResp[i]["pic"]);
      a.appendChild(img);
      catalist.appendChild(a);
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
    catalist = document.getElementsByClassName("main-left")[0];
    for (var i = 0; i < xhttpResp.length; i++) {
      p = document.createElement("p");
      cata = document.createElement("a");
      cata.innerText = xhttpResp[i]["cata"];
      p.appendChild(cata);
      catalist.appendChild(p);
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
      a.setAttribute("href","/");
      a.innerText = xhttpResp[i]["title"];
      li.appendChild(img);
      li.appendChild(a);
      ul.appendChild(li);
    }
    var xhttpResp = JSON.parse(xhttp.responseText);

  }

}


//カレンダー
function getCalenda() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var lastMonth = (month == -1) ? 11 : month - 1;
  //今日の日付
  var firstDay = new Date(year, month, 1);
  //今月の最後の日の日付
  var lastDay = new Date(year, month + 1, 0).getDate();
  //前月最後の日の日付
  var lastMonthLastDay = new Date(year, lastMonth + 1, 0).getDate();
  //前月最後の日の日付
  var thisMonthLastDay = new Date(year, lastMonth, 0);
  var array = new Array();
  var dateMap = {
    "日曜日": 0, "月曜日": 1, "火曜日": 2, "水曜日": 3,
    "木曜日": 4, "金曜日": 5, "土曜日": 6
  }

  const formatter = new Intl.DateTimeFormat('ja-JP', { weekday: 'long' });
  const dayOfWeek = formatter.format(firstDay);
  var innerArray = new Array();
  var j = dateMap[dayOfWeek];

  //header
  for (var i = j - 1; i >= 0; i--) {
    innerArray[i] = lastMonthLastDay;
    lastMonthLastDay = lastMonthLastDay - 1;
  }
  //middle
  for (var i = 1; i <= lastDay; i++) {
    if (j > 6) {
      j = 0;
      array.push(innerArray);
      innerArray = new Array();
    }
    innerArray[j] = i;
    j = j + 1;
  }
  //trailer
  for (var i = 0, j = 1; i <= 6; i++) {
    if (innerArray[i] == null) {
      innerArray[i] = j;
      j = j + 1;
    }
  }

  if (innerArray.length != 0) {
    array.push(innerArray);
  }

  var tbd = document.getElementsByTagName('tbody')[0];
  for (var i = 0; i < array.length; i++) {
    var inner = array[i];
    var newRow = document.createElement("tr");
    for (var j = 0; j < inner.length; j++) {
      var newCell = document.createElement("td");
      var newA = document.createElement("a");
      newRow.appendChild(newCell);
      newCell.appendChild(newA);
      tbd.appendChild(newRow);
      newCell.innerHTML += "<a class='innerA' onclick=getBooksByDate()>" + inner[j] + "</a>";

    }
  }
}