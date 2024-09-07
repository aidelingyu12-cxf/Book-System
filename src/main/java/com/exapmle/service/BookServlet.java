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
	
	List<Category> categoryList = null;
	
	List<Book> bookListWithPagination = null;
	
	List<Book> bookList = null;
	
	Integer TotalBooks = 0;
	
	private List<Category> getCatalog() {
		if(categoryList == null) {
			CategoryDao categoryDao = new CategoryDao();
			categoryList = categoryDao.getCategorys();
		}
		return categoryList;
	}
	
	private Integer getTotalBooks() {
		if(TotalBooks == 0) {
			BookDao bookDao = new BookDao();
			TotalBooks = bookDao.getTotalBooks();
		}
		return TotalBooks;
	}
	
	protected void book(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		BookDao bookDao = new BookDao();
		List<Book> bookList = bookDao.getHeaderBooks();
		List<Category> categoryList = getCatalog();
		req.setAttribute("bookList", bookList);
		req.setAttribute("categoryList", categoryList);
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/home.jsp");
		dispatcher.forward(req, resp);
		//super.doGet(req, resp);
	}
	
	protected void bookDetail(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		String bookId = req.getParameter("bookId");
		BookDao bookDao = new BookDao();
		Book book = new Book();
		book = bookDao.getBookDetail(bookId);
		req.setAttribute("bookDetail", book);
		
		List<Book> bookList = bookDao.getTest();
		for(Book bk : bookList) {
			String bookName = bk.getBookName();
			if(bookName != null && bookName.matches("[a-zA-Z]+") && bookName.length()>30) {
				bk.setBookName(bk.getBookName().subSequence(0, 26) + "...");
			}else if(bookName != null && bookName.length()>16){
				bk.setBookName(bk.getBookName().subSequence(0, 14) + "...");
			}
		}
		req.setAttribute("bookList", bookList);
		
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/bookDetail.jsp");
		dispatcher.forward(req, resp);
		//super.doGet(req, resp);
	}
	
	
	protected void discovery(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		String categoryId = req.getParameter("categoryId");
		String tag = req.getParameter("tag");
		String curPage = req.getParameter("curPage");
		String pageSize = req.getParameter("pageSize");
		List<Category> categoryList = getCatalog();
		Integer totalBooks = getTotalBooks();
		BookDao bookDao = new BookDao();
		//List<Book> bookList = bookDao.getBooksByTag(categoryId,tag);
		List<Book> bookList = bookDao.getBooksByCategoryAndPagination(
				categoryId,
				tag,
				String.valueOf((Integer.parseInt(curPage)-1)*Integer.parseInt(pageSize)),
				pageSize);
		req.setAttribute("totalBooks", totalBooks);
		req.setAttribute("bookList", bookList);
		req.setAttribute("categoryList", categoryList);
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/discovery.jsp");
		dispatcher.forward(req, resp);
		//super.doGet(req, resp);
	}
	
	protected void ranking(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/ranking.jsp");
		dispatcher.forward(req, resp);
		//super.doGet(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}
	
	
	

}
