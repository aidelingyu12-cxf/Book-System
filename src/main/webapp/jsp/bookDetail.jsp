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
  <script src="js1/bookDetail.js"></script>
</head>

<body>
  <container>
    <header>
      <header-navi>
        <div class="header-navi-titleUl">
          <a class="header-navi-title" href="/" title="図書管理システム">
            <img class="header-navi-pic" src="pic/headerList/header-navi-pic.jpg" alt="図書管理システム · BookSystem">
          </a>
          <ul class="header-navi-ul">
          	<li class="header-navi-ul-category">
          		<img src="pic/headerList/category.png">
          		<a href="http://localhost:8080/Book-System/book">カテゴリー</a>
          	</li>
         	<li>
         		<img src="pic/headerList/header-list2.png">
         		<a href="jsp/discovery.html">ディスカバリー</a>
         	</li>
         	<li>
         		<img src="pic/headerList/header-list3.png">
         		<a href="jsp/ranking.html">ランキング</a>
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
          <img src="pic/register-icon.png">
          <a href="javascript:;">レジスター</a>
        </div>
        <div class="header-navi-login header-login-child" onclick="doOpenLoginDialog()">
          <img src="pic/login-icon.png">
          <a href="javascript:;">ログイン</a>
        </div>
      </header-login>
    </header>
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
              		<img src="${book.getPicture()}">
              		<span>${book.getBookName()}</span>
            	</div>
          	</c:forEach>
            
          </div>

        </div>

      </div>

    </main>
    <bottom>
    </bottom>
    <footer class="footer">
      <p>この検索サイトは日本語のみ対応しています。</p>
      <p>©2024 テスト出版社 Test Publishing Organization</p>
    </footer>
  </container>
</body>

</html>