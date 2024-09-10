

function getRanking() {
  var xhttp = new XMLHttpRequest();
  var xhttpResp = null;
  var ul = document.getElementsByClassName("header-navi-ul")[0];
  xhttp.open("GET", "http://localhost:3000/rankingList", false);
  xhttp.send();
  if (xhttp.status == 200 && xhttp.readyState == 4) {

    for (var i = 1; i <= 10; i++) {
      var xhttpResp = JSON.parse(xhttp.responseText)[0];
      console.log(xhttpResp);
      var ul = document.getElementsByClassName("ranking-detail")[0];
      var li = document.createElement("li");
      var a = document.createElement("a");
      var spanLevel = document.createElement("span");
      spanLevel.classList.add("level");
      var spanTitle = document.createElement("span");
      spanTitle.classList.add("title");
      var spanDescribe = document.createElement("span");
      spanDescribe.classList.add("describe");

      //
      spanLevel.innerText = xhttpResp["ranking"];
      spanTitle.innerText = xhttpResp["title"];
      spanDescribe.innerText = xhttpResp["detail"];
      a.setAttribute("href", xhttpResp["url"]);

      //
      a.appendChild(spanLevel);
      a.appendChild(spanTitle);
      a.appendChild(spanDescribe);
      li.appendChild(a);
      ul.appendChild(li);
    }

    

  }
}

function hidefooter() {
  var pagination = document.getElementsByClassName(".pagination")[0];
  pagination.style.display = "";
}

