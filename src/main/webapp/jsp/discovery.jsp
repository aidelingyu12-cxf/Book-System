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
  <link rel="stylesheet" type="text/css" href="css1/header-common.css" />
  <link rel="stylesheet" type="text/css" href="css1/footer-common.css" />
  <script src="js1/discovery.js"></script>
  <script src="js1/common.js"></script>
</head>

<body>
  <container>
    <%@ include file="header-common.jsp" %>
    <middle>
      <div class="middle-category">
        <span>カテゴリー:</span>
        <c:forEach items="${requestScope.categoryList}" var="category">
        	<a href="javascript:;" onclick="getBooksByCategory(${category.getId()})">${category.getName()}</a>
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
          <%
          	int pg = (Integer)request.getAttribute("totalpages");
          	for(int i=1; i<=pg; i++){
          		request.setAttribute("page", i);
          %>

            <li class="pages-fixed" onclick="nextPage(${page},
            ${requestScope.categoryId}, ${requestScope.tag})">${page}</li>  	
          	
          <% } %>
          </ul>
          <div>
            <button class="pages-start pages-fixed">></button>
          </div>
        </div>
      </div>
    </main>
    <%@include file="footer-common.jsp"%>
  </container>
</body>

</html>