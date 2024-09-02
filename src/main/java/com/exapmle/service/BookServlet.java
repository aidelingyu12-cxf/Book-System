/**
 * 
 */
package com.exapmle.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.exapmle.bean.Book;
import com.exapmle.bean.Category;
import com.exapmle.dao.BookDao;
import com.exapmle.dao.CategoryDao;

/**
 * 
 */

public class BookServlet extends BaseServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		BookDao bookDao = new BookDao();
		CategoryDao categoryDao = new CategoryDao();
		List<Book> bookList = bookDao.getHeaderBooks();
		List<Category> categoryList = categoryDao.getCategorys();
		req.setAttribute("bookList", bookList);
		req.setAttribute("categoryList", categoryList);
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/home.jsp");
		dispatcher.forward(req, resp);
		//super.doGet(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}
	
	
	

}
