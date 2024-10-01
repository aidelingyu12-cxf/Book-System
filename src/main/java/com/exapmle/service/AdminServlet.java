package com.exapmle.service;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.exapmle.bean.Book;
import com.exapmle.bean.Category;
import com.exapmle.bean.User;
import com.exapmle.dao.BookDao;
import com.exapmle.dao.CategoryDao;
import com.exapmle.dao.UserDao;
import java.io.IOException;
import java.util.List;

//@WebServlet("/login")
public class AdminServlet extends BaseServlet {

    UserDao adminDao = new UserDao();
    
	/**
	 * @リダイレクト画面：書籍詳細画面（login.jsp）
	 * */
    public void toLogin(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=UTF-8");
		//次の画面：ホームページ画面（login.jsp）
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/login.jsp");
		dispatcher.forward(req, resp);
    }
    
	/**
	 * @リダイレクト画面：書籍詳細画面（login.jsp）
	 * */
    public void login(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=UTF-8");
        //ユーザー名前
        String username = req.getParameter("username").trim();
        //パスワード
        String password = req.getParameter("password").trim();

//        UserDao dao = new UserDao();
//        User user = new User();
//        user = dao.getUserInfo(username,password);
//        if("".equals(username) || username.length()>10 || user.getUserName()== null){
//            resp.sendRedirect("loginfailure.jsp");
//        }else if("".equals(password) || password.length()>10){
//            resp.sendRedirect("homepage.jsp");
//        }
		//次の画面：ホームページ画面（book.jsp）
		req.setCharacterEncoding("utf-8");
		//書籍情報
		BookDao bookDao = new BookDao();
		//書籍リスト
		List<Book> bookList = bookDao.getHeaderBooks();
		//カテゴリーリスト
		CategoryDao categoryDao = new CategoryDao();
		List<Category> categoryList = categoryDao.getCategorys();
		//カテゴリーリストと書籍リストを次の画面へセットする
		req.setAttribute("bookList", bookList);
		req.setAttribute("categoryList", categoryList);
		//次の画面：ホームページ画面（book.jsp）
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/home.jsp");
		dispatcher.forward(req, resp);
    }
}
