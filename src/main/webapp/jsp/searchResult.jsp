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
  <link rel="stylesheet" type="text/css" href="css1/searchResult.css" />
  <link rel="stylesheet" type="text/css" href="css1/header-common.css" />
  <link rel="stylesheet" type="text/css" href="css1/footer-common.css" />
  <script src="js1/common.js"></script>
  <script src="js1/searchResult.js"></script>
</head>

<body>
  <container>
    <%@ include file="header-common.jsp" %>
    <middle>
      <span class="middle-nav">今回の検索時間は 0.006 秒， 74　関連結果.</span>
    </middle>
    <main>
      <ul>
        <c:forEach items="${requestScope.bookList}" var="books">
	        <li>
	          <div class="book-pic-wrap">
	            <a class="book-img-link" href="http://localhost:8080/Book-System/bookDetail?bookId=${books.getBookId()}">
	              <img class="book-img" src="${books.getPicture()}">
	            </a>
	          </div>
	          <div class="book-info">
	            <a href="http://localhost:8080/Book-System/bookDetail?bookId=${books.getBookId()}">${books.getBookName()}</a>
	            <div></div>
	            <div class="book-info-desc">${books.getComment()}</div>
	          </div>
	        </li>
        </c:forEach>
      </ul>
      <div class="pagination">
        <div class="pages">
          <div>
            <button class="pages-prev pages-fixed" onclick="jumpToPage(${page},
            ${requestScope.bookName})"><</button>
          </div>
          <ul>
          <%
          	int pg = (Integer)request.getAttribute("totalpages");
          	for(int i=1; i<=pg; i++){
          		request.setAttribute("page", i);
          %>

            <li class="pages-fixed" onclick="jumpToPage(${page},
            '${requestScope.bookName}')">${page}</li>  	
          	
          <% } %>
          </ul>
          <div>
            <button class="pages-next pages-fixed" onclick="jumpToPage(${page},
            ${requestScope.bookName})">></button>
          </div>
        </div>
      </div>
    </main>
    <bottom>
    </bottom>
    <%@include file="footer-common.jsp"%>
  </container>
</body>

</html>