var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
    _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f3f8ff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; background: #fff url(Image/loading.gif) no-repeat scroll 5px 10px; border: 2px solid #95B8E7; color: #696969; font-family:\'Microsoft YaHei\';">页面加载中，请等待...</div></div>';
document.write(_LoadingHtml);

document.onreadystatechange = completeLoading;    

//ホームページローディング後
function completeLoading() {
  //先ずはステータスを取得する
    if (document.readyState == "complete") {
      //左側本のカタログを取得する
      getHomeCatalogs();
      //カレンダーを設定する
      getCalenda();
      //ローディング画面を削除する
      var loadingMask = document.getElementById('loadingDiv');
      loadingMask.parentNode.removeChild(loadingMask);
    }
}

//左側本のカタログ
function getHomeCatalogs(){
  var xhttp = new XMLHttpRequest();
      var a = document.querySelectorAll("ul > li > a");
      xhttp.open("GET", "https://9983ffde-3b63-4c07-a53a-63fbefd14af5.mock.pstmn.io/home-catalog", false);
      xhttp.send();
      var xhttpResp = JSON.parse(xhttp.responseText).Komponentelist;
      for (var i = 0; i < a.length; i++) {
        var aTag = a[i];
        aTag.innerText = xhttpResp[i]["title"];
        aTag.onclick = function () {
          console.log(this.innerText);
        }
      } 
}

//カレンダー
function getCalenda(){
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

function clickHeaderButton() {
  console.log("1rewr")
}

function getBooksByDate() {
  console.log("ssss");
}
