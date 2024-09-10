

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
