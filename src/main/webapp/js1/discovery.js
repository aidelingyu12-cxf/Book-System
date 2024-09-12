//デスカバリー画面

function doOpenRegisterDialog(){
  console.log("ss");
}

function doOpenLoginDialog(){
  
}

function doCheckSearchKeyWords(){
  console.log(123);
}


function nextPage(curPage, categoryId, tag){
	window.location.href="http://localhost:8080/Book-System/discovery?categoryId="
		+ categoryId + "&tag=0&curPage=" + curPage + "&pageSize=16";
}
