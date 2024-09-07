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
  <link rel="stylesheet" type="text/css" href="css1/header-common.css" />
  <link rel="stylesheet" type="text/css" href="css1/footer-common.css" />
  <script src="js1/ranking.js"></script>
</head>

<body>
  <container>
    <%@ include file="header-common.jsp" %>

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
    <%@include file="footer-common.jsp"%>
  </container>
</body>

</html>