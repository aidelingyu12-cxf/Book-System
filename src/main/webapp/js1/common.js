/***
 * 共通JS
 * */

//ローディング画面
var _PageHeight = document.documentElement.clientHeight,
  _PageWidth = document.documentElement.clientWidth;
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
  _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f3f8ff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; border: 2px solid #95B8E7; color: #696969; font-family:\'Microsoft YaHei\';">页面加载中，请等待...</div></div>';
document.write(_LoadingHtml);

//ローディング完了後
document.onreadystatechange = loadData;

function loadData() {
  if (document.readyState == "complete") {

    var loadingMask = document.getElementById('loadingDiv');
    loadingMask.parentNode.removeChild(loadingMask);
	
  }

}

//入力キーワードから書籍リストを抽出する
function doCheckSearchKeyWords(){
  //inputを選択する
  var input = document.getElementsByClassName("header-navi-input")[0];
  //入力書籍名
  var bookName = input.value;
  window.location.href = "http://localhost:8080/Book-System/searchResult?bookName=" + bookName;
}

//ホームページ画面へ進む
function getHome(){
	window.location.href = "http://localhost:8080/Book-System/book"
}

//ランキング画面へ進む
function getRanking(){
	window.location.href = "http://localhost:8080/Book-System/ranking"
}

//書籍詳細画面へ進む
function getBookDetail(bookId){
	window.location.href = "http://localhost:8080/Book-System/bookDetail?bookId="
	+ bookId;
}

//デスカバリー画面へ進む
function getBooksByCategory(categoryId){
	window.location.href="http://localhost:8080/Book-System/discovery?categoryId="
	+ categoryId + "&tag=0&curPage=1&pageSize=16";
}
