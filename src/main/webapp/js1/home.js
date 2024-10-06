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
	getTodayMonth();
	
    //カレンダーを設定する
    getCalenda();

    //カルーセル
    doCarousel();
	
	var loadingMask = document.getElementById('loadingDiv');
	loadingMask.parentNode.removeChild(loadingMask);
	
	}
}

//
function getTodayMonth(){
	//  Date 
	const currentDate = new Date();
	// 年
	const year = currentDate.getFullYear();
	// 月
	const month = currentDate.getMonth() + 1;
	// 日
	const date = currentDate.getDate();
	
	var today = document.getElementsByClassName("todayMonth")[0];
	today.textContent = year + "年" + month + "月" + date + "日";

}
//入力キーワードから書籍リストを抽出する
function doCheckSearchKeyWords(){
  //inputを選択する
  var input = document.getElementsByClassName("header-navi-input")[0];
  //入力書籍名
  var bookName = input.value;
  window.location.href = "http://localhost:8080/Book-System/searchResult?bookName=" + bookName;
}

//カルーセル
function doCarousel(){
	//書籍
	var bookWrap = document.querySelectorAll(".booklist-inner")[0];
	var booklist = document.querySelectorAll(".booklist-inner > a");
	//第一本の書籍の横幅
	var bookWidth = booklist[0].offsetWidth;
	//書籍リストとスクリーン最左側の距離
	var lft = 10;
	//タイマー
	let timer;

	play();
	//マウスが置く
	bookWrap.onmouseenter = function () {
	  clearInterval(timer);
	}
	//マウスが離れ
	bookWrap.onmouseleave = function () {
	  play();
	}
	//カルーセル実行する
	function play() {
	  timer = setInterval(() => {
		//書籍リストを20ミリ秒毎に1単位左に移動させる
	    lft -= 1;
		//書籍リストは、左に移動した距離が書籍の横幅より大きい場合
	    if (-lft >= bookWidth) {
		  //左に移動した書籍をクローンし
	      var tempNode = bookWrap.children[0].cloneNode(true);
		  //書籍リストの最後に追加する
	      bookWrap.appendChild(tempNode);
		  //左に移動した書籍を書籍リストから削除する
	      bookWrap.removeChild(bookWrap.children[0]);
		  //書籍リストとスクリーン最左側の距離をリセットする
	      lft = 0;
	    }

	    bookWrap.style.left = lft + "px";
	  }, 20);
	}
}




//カレンダー
function getCalenda() {
  //システム時間を取得
  var date = new Date();
  //年
  var year = date.getFullYear();
  //月
  var month = date.getMonth();
  //前月
  var lastMonth = (month == -1) ? 11 : month - 1;
  //今日1日の日付
  var firstDay = new Date(year, month, 1);
  //今月の最後の日の日付
  var lastDay = new Date(year, month + 1, 0).getDate();
  //前月最後の日の日付
  var lastMonthLastDay = new Date(year, lastMonth + 1, 0).getDate();
  //前月最後の日の日付
  //var thisMonthLastDay = new Date(year, lastMonth, 0);
  var array = new Array();
  var dateMap = {
    "日曜日": 0, "月曜日": 1, "火曜日": 2, "水曜日": 3,
    "木曜日": 4, "金曜日": 5, "土曜日": 6
  }
  
  //
  const formatter = new Intl.DateTimeFormat('ja-JP', { weekday: 'long' });
  const dayOfWeek = formatter.format(firstDay);
  var j = dateMap[dayOfWeek];
  
  var innerArray = new Array();

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
      newRow.appendChild(newCell);
      tbd.appendChild(newRow);
      newCell.innerHTML += "<a class='innerA' onclick=getBooksByDate(" + inner[j] + ")>" + inner[j] + "</a>";

    }
  }
}

function doOpenRegisterDialog(){
  console.log("ss");
}

function doOpenLoginDialog(){
  
}
function getHome(){
	window.location.href = "http://localhost:8080/Book-System/book"
}

function getRanking(){
	window.location.href = "http://localhost:8080/Book-System/ranking"
}

function getBookDetail(bookId){
	window.location.href = "http://localhost:8080/Book-System/bookDetail?bookId="
	+ bookId;
}

function getBooksByCategory(categoryId){
	window.location.href="http://localhost:8080/Book-System/discovery?categoryId="
	+ categoryId + "&tag=0&curPage=1&pageSize=16";
}

function getBooks(bookId){
	window.location.href = "http://localhost:8080/Book-System/bookDetail?bookId="
	+ bookId;
}

function doOpenLoginDialog(){
	window.location.href="http://localhost:8080/Book-System/toLogin";
}

function getBooksByDate(date){
	//  Date 
	const currentDate = new Date();
	// 年
	const year = currentDate.getFullYear();
	// 月
	const month = currentDate.getMonth() + 1;
	//
	var finalDate = year + "-" + month + "-" + date
	window.location.href="http://localhost:8080/Book-System/getNewArrival?date=" + 
	finalDate + "&tag=0&curPage=1&pageSize=16";
}

