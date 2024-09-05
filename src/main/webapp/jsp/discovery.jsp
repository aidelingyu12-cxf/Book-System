<%@page import="com.exapmle.service.BookServlet"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%  
String path = request.getContextPath();  
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";  
request.setAttribute("path", basePath);  
%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html style="height: 100%;">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>図書管理システム</title>
  <link rel="stylesheet" type="text/css" href="css1/discovery.css" />
  <script src="js1/discovery.js"></script>
</head>

<body>
  <container>
    <header>
      <header-navi>
        <div class="header-navi-titleUl">
          <a class="header-navi-title" href="/" title="図書管理システム">
            <img class="header-navi-pic" src="../pic/headerList/header-navi-pic.png" alt="図書管理システム · BookSystem">
          </a>
          <ul class="header-navi-ul">
          	<li>
          		<img src="pic/headerList/category.png">
          		<a href="http://localhost:8080/Book-System/book">カテゴリー</a>
          	</li>
         	<li>
         		<img src="pic/headerList/header-list2.png">
         		<a href="discovery.html">ディスカバリー</a>
         	</li>
         	<li>
         		<img src="pic/headerList/header-list3.png">
         		<a href="ranking.html">ランキング</a>
         	</li>
         	<li>
         		<img src="pic/headerList/header-list4.png">
         		<a href="javascript:;">書籍管理システム</a>
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
          <img src="../pic/register-icon.png">
          <a href="javascript:;">レジスター</a>
        </div>
        <div class="header-navi-login header-login-child" onclick="doOpenLoginDialog()">
          <img src="../pic/login-icon.png">
          <a href="javascript:;">ログイン</a>
        </div>
      </header-login>
    </header>
    <middle>
      <div class="middle-category">
        <span>カテゴリー:</span>
        <c:forEach items="${requestScope.categoryList}" var="category">
        	<a href="">${category.getName()}</a>
        </c:forEach>
      </div>
      <ul class="middle-nav">
        <li onclick="doGetBooksByTag(this)">
          <a href="javascript:;">新着順</a>
        </li>
        <li onclick="doGetBooksByTag(this)">
          <a href="javascript:;">人気書籍</a>
        </li>
        <li onclick="doGetBooksByTag(this)">
          <a href="javascript:;">おすすめ</a>
        </li>
      </ul>
    </middle>
    <main>
      <div class="main-content">
       	<div class="bookList">
       		<c:forEach items="${requestScope.bookList}" var="bk">
       			<div class="book">
       				<a class="pic-a" href="http://localhost:8080/Book-System/bookDetail?bookId=${bk.getBookId()}">
       					<img src="${bk.getPicture()}">
       				</a>
       				<a class="text-a" href="">
       				${bk.getBookName()}
       				</a>
       			</div>
       		</c:forEach>
        </div>
      </div>
      <div class="pagination">
        <div class="pages">
          <div>
            <button class="pages-start pages-fixed"><</button>
          </div>
          <ul>
            <li class="pages-fixed">1</li>
            <li class="pages-fixed">2</li>
          </ul>
          <div>
            <button class="pages-start pages-fixed">></button>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <p>この検索サイトは日本語のみ対応しています。</p>
      <p>©2024 テスト出版社 Test Publishing Organization</p>
    </footer>
  </container>
</body>

</html>