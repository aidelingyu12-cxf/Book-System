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
  
  <link rel="stylesheet" type="text/css" href="css1/home.css" />
  <link rel="stylesheet" type="text/css" href="css1/header-common.css" />
  <link rel="stylesheet" type="text/css" href="css1/footer-common.css" />
  <script src="js1/home.js"></script>
</head>

<body>
  <container>
    <%@ include file="header-common.jsp" %>
    <main>
      <div class="booklist-wrap">
        <div class="booklist-inner">
        	<c:forEach items="${requestScope.bookList}" var="book">
        		<a href="javascript:;" onclick="getBookDetail(${book.getBookId()})">
        			<img src="${book.getPicture()}">
        		</a>
        	</c:forEach>
        </div>
      </div>
      <div class="main-split">
      </div>
      <div class="main-main">
        <div class="main-left">
          <div class="main-left-header">
            カタログ
          </div>
          <c:forEach var="category" items="${requestScope.categoryList}">
          	<a href="javascript:;" onclick="getBooksByCategory(${category.getId()})">
          		<p>${category.getName()}</p>
          	</a>
          </c:forEach>
        </div>
        <div class="main-right">
          <div class="right-main-header">
            <h2>新着情報カレンダー</h2>
            <h2 class="todayMonth"></h2>
          </div>
          <div class="right-main-calender">
            <table>
              <thead>
                <tr>
                  <td>
                    日
                  </td>
                  <td>
                    月
                  </td>
                  <td>
                    火
                  </td>
                  <td>
                    水
                  </td>
                  <td>
                    木
                  </td>
                  <td>
                    金
                  </td>
                  <td>
                    土
                  </td>
                </tr>
              </thead>
  
              <tbody>
              </tbody>
            </table>
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