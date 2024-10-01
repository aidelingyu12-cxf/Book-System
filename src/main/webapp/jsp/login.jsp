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
  <link rel="stylesheet" type="text/css" href="css1/login.css" />
  <link rel="stylesheet" type="text/css" href="css1/footer-common.css" />
  <script src="js1/login.js"></script>
  <script src="js1/login.js"></script>
</head>

<body>
  <container>
    <header>
     <header-navi>
       <div class="header-navi-titleUl">
         <a class="header-navi-title" href="javascript:;" onclick="getHome()" title="図書管理システム">
           <img class="header-navi-pic" src="pic/headerList/header-navi-pic.jpg" alt="図書管理システム · BookSystem">
         </a>
         <ul class="header-navi-ul">
         	<li class="header-navi-ul-category">
         		<h2 href="javascript:;" onclick="getHome()">図書管理システム</h2>
         	</li>

         </ul>
       </div>
     </header-navi>
     <header-login>
       <div class="header-navi-login header-login-child" onclick="doOpenLoginDialog()">
         <img src="pic/login-icon.png">
         <a href="javascript:;">ログイン</a>
       </div>
     </header-login>
    </header>
    <div class="header-info"></div>
    <main>
    	<div class="main-title">ログイン</div>
    	<div class="main-form-wrap">
    		<form class="main-form" action="${requestScope.path}login" method="post">
    			<input class="main-form-child" type="text" name="username" placeholder="ユーザネーム" >
    			<input class="main-form-child" type="text" name="password" placeholder="パスワード" >
    			<button style="cursor: pointer;" class="main-form-child" type="submit">確認</button>
    		</form>
    	</div>
    </main>
    <bottom>
    	<div class="bottom-info"></div>
    	<%@include file="footer-common.jsp"%>
    </bottom>
  </container>
</body>

</html>