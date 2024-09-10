

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