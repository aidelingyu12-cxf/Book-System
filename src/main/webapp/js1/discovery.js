

var _PageHeight = document.documentElement.clientHeight,
  _PageWidth = document.documentElement.clientWidth;
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
  _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f3f8ff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; border: 2px solid #95B8E7; color: #696969; font-family:\'Microsoft YaHei\';">页面加载中，请等待...</div></div>';
document.write(_LoadingHtml);

document.onreadystatechange = loadData;

function loadData() {
  if (document.readyState == "complete") {


    getNewArrivalClicked();


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
