//デスカバリー画面

function prevPage(){
	
}

function nextPage(){
	
}

function doOpenRegisterDialog(){
  console.log("ss");
}

function doOpenLoginDialog(){
  
}

function doCheckSearchKeyWords(){
  console.log(123);
}


function jumpToPage(curPage, categoryId, tag, obj){
	alert(obj.classList);
	window.location.href="http://localhost:8080/Book-System/discovery?categoryId="
		+ categoryId + "&tag=0&curPage=" + curPage + "&pageSize=16";
}
