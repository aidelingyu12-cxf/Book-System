<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
request.setAttribute("path", basePath);
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>菜鸟教程</title>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
	<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
</head>
<body>
  <div>
    <form action="<%=basePath%>login" method="post">
      <div class="inputText">
        <i class="fa fa-user-circle" style="color: whitesmoke;"></i>
        <input type="text" placeholder="手机号或邮箱" name="username"/>
      </div>
      <div class="inputText">
        <i class="fa fa-key" style="color: whitesmoke;"></i>
        <input type="password" placeholder="密码" name="password"/>
      </div>
      <input type="submit" class="inputButton" value="LOGIN" />
    </form>
  </div>
</body>
</html>