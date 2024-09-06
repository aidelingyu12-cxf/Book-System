

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
    //左側本のカタログを取得する
    //getCatalog();
    //カレンダーを設定する
    getCalenda();
    //
    //getBookList();

    //
    doCarousel();

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
        lft = 0;
      }

      bookWrap.style.left = lft + "px";
    }, 20);
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

function doOpenRegisterDialog(){
  console.log("ss");
}

function doOpenLoginDialog(){
  
}

function doCheckSearchKeyWords(){
  console.log(123);
}


