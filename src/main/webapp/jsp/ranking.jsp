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
  <link rel="stylesheet" type="text/css" href="css1/ranking.css" />
  <script src="js1/ranking.js"></script>
</head>

<body>
  <container>
    <header>
      <header-navi>
        <div class="header-navi-titleUl">
          <a class="header-navi-title" href="/" title="図書管理システム">
            <img class="header-navi-pic" src="pic/headerList/header-navi-pic.png" alt="図書管理システム · BookSystem">
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

    <main>
      <div class="main-content">
        <div class="ranking-wrap">
          <div class="ranking">
            <div class="ranking-header">
              評価ランキング
            </div>
            <div class="ranking-content">
              <ul class="ranking-detail">
              </ul>
            </div>
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