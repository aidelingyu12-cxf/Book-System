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
  <link rel="stylesheet" type="text/css" href="css1/bookDetail.css" />
  <link rel="stylesheet" type="text/css" href="css1/header-common.css" />
  <link rel="stylesheet" type="text/css" href="css1/footer-common.css" />
  <script src="js1/bookDetail.js"></script>
</head>

<body>
  <container>
    <%@ include file="header-common.jsp" %>
    <main>
      <div class="main-wrap">
        <div class="bookDetail-wrap">
          <div class="bookDetail-title bookDetail-child">
            <span>${requestScope.bookDetail.getBookName()}</span>
            <span class="inventory"></span>
          </div>
          <div class="bookDetail-header bookDetail-child">
            <div class="bookDetail-div">
              <span>書籍情報</span>
            </div>
          </div>
          <div class="bookDetail-info bookDetail-child">
            <div class="bookDetail-info-left">
              <p>
                <strong>出版社:</strong>
                <span class="publisher">${requestScope.bookDetail.getPress()}</span>
              </p>
              <p>
                <strong>ISBN:</strong>
                <span class="isbn">${requestScope.bookDetail.getISBN()}</span>
              </p>
              <p>
                <strong>ASIN:</strong>
                <span class="isbn">${requestScope.bookDetail.getASIN()}</span>
              </p>
              <p>
                <strong>判型:</strong>
                <span class="Dimensions">${requestScope.bookDetail.getPress()}</span>
              </p>
              <p>
                <strong>バージョン:</strong>
                <span class="version">${requestScope.bookDetail.getVersion()}</span>
              </p>
              <p>
                <strong>ページ数:</strong>
                <span class="pages">${requestScope.bookDetail.getPage()}</span>
              </p>
              <p>
                <strong>定価:</strong>
                <span class="price">${requestScope.bookDetail.getPrice()}</span>
              </p>
<%--               <p>
                <strong>発行年月日:</strong>
                <span class="publishDay">${requestScope.bookDetail.getPublishDate()}</span>
              </p>
              <p>
                <strong>入庫日:</strong>
                <span class="arriveDay">${requestScope.bookDetail.getPublishDate}</span>
              </p> --%>
              <p>
                <strong>著者:</strong>
                <span class="author">${requestScope.bookDetail.getAuthor()}</span>
              </p>
              
              <p>
                <strong>コメント:</strong>
                <span class="comments">${requestScope.bookDetail.getComment()}</span>
              </p>
              <div class="div-btn">
                <button class="collect-btn saveAndLikebtn">保存</button>
                <button class="like-btn saveAndLikebtn">いいね！</button>
              </div>
            </div>
            <div class="bookDetail-info-right">
              <div class="right-point">

                <div class="right-point-star">
                  <span>総合評価：</span>

                </div>
                <div class="right-point-point"></div>
              </div>
              <div class="right-like">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
              </div>
              <div class="right-pic">
                <img src="${requestScope.bookDetail.getPicture()}">
              </div>
              <div class="right-view">
                <img src="../pic/view.png">
                <p src="../pic/view.png"></p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div class="main-wrap">
      <div class="otherDetail-wrap">
        <div class="other-title other-child">
          <span>ハリーポッター</span>
          <span class="inventory">在庫数: 100</span>
        </div>

      </div>

     </div>

      <div class="main-wrap">
        <div class="otherDetail-wrap relatedBooks-wrap">
          <div class="other-title other-child">
            <span>おすすめ</span>
          </div>

          <div class="related-books">
          	<c:forEach items="${requestScope.bookList}" var="book">
          		<div class="related-book">
          			<a href="javascript:;" onclick="getBookDetail(${book.getBookId()})">
          				<img src="${book.getPicture()}">
              			<span>${book.getBookName()}</span>
          			</a>
            	</div>
          	</c:forEach>
            
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