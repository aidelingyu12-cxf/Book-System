<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<header>
     <header-navi>
       <div class="header-navi-titleUl">
         <a class="header-navi-title" href="javascript:;" onclick="getHome()" title="図書管理システム">
           <img class="header-navi-pic" src="pic/headerList/header-navi-pic.jpg" alt="図書管理システム · BookSystem">
         </a>
         <ul class="header-navi-ul">
         	<li class="header-navi-ul-category">
         		<img src="pic/headerList/category.png">
         		<a href="javascript:;" onclick="getHome()">カテゴリー</a>
         	</li>
        	<li>
        		<img src="pic/headerList/header-list2.png">
        		<a href="javascript:;" onclick="getBooksByCategory(0)">ディスカバリー</a>
        	</li>
        	<li>
        		<img src="pic/headerList/header-list3.png">
        		<a href="javascript:;" onclick="getRanking()">ランキング</a>
        	</li>
        	<li>
        		<img src="pic/headerList/header-list4.png">
        		<a href="javascript:;" onclick="getRanking()">書籍管理システム</a>
        	</li>
         </ul>
       </div>
       <div class="header-navi-formWrap">
         <div class="header-navi-form">
           <input type="search" class="header-navi-input header-navi-form-child" placeholder="書籍検索...">
           <button class="header-navi-btn header-navi-form-child" onclick="doCheckSearchKeyWords()">
             &nbsp;検索
           </button>
           </input>
         </div>
       </div>
     </header-navi>
     <header-login>
       <div class="header-navi-register header-login-child" onclick="doOpenRegisterDialog()">
         <img src="pic/register-icon.png">
         <a href="javascript:;">レジスター</a>
       </div>
       <div class="header-navi-login header-login-child" onclick="doOpenLoginDialog()">
         <img src="pic/login-icon.png">
         <a href="javascript:;">ログイン</a>
       </div>
     </header-login>
</header>