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
 * @aidelingyu12-cxf
 * @リクエスト事前処理
 * */
public class BookServlet extends BaseServlet {
	
	List<Category> categoryList = null;
	
	List<Book> bookListWithPagination = null;
	
	List<Book> bookList = null;
	
	Integer TotalBooks = 0;
	
	/**
	 * @カテゴリー情報を抽出する
	 * @戻り値　List<Category>　カテゴリーリスト
	 * */
	private List<Category> getCatalog() {
		if(categoryList == null) {
			CategoryDao categoryDao = new CategoryDao();
			categoryList = categoryDao.getCategorys();
		}
		return categoryList;
	}
	
	/**
	 * @書籍総数
	 * @戻り値　Integer　書籍総数
	 * */
	private Integer getTotalBooks() {
		if(TotalBooks == 0) {
			BookDao bookDao = new BookDao();
			TotalBooks = bookDao.getTotalBooks();
		}
		return TotalBooks;
	}
	
	/**
	 * @リダイレクト画面：ホームページ画面（book.jsp）
	 * @リターン値　List<Category>　カテゴリーリスト
	 * @リターン値　List<Book>　書籍リスト
	 * */
	protected void book(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		//書籍情報
		BookDao bookDao = new BookDao();
		//書籍リスト
		List<Book> bookList = bookDao.getHeaderBooks();
		//カテゴリーリスト
		List<Category> categoryList = getCatalog();
		//カテゴリーリストと書籍リストを次の画面へセットする
		req.setAttribute("bookList", bookList);
		req.setAttribute("categoryList", categoryList);
		//次の画面：ホームページ画面（book.jsp）
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/home.jsp");
		dispatcher.forward(req, resp);
	}
	
	/**
	 * @リダイレクト画面：書籍詳細画面（bookDetail.jsp）
	 * @param bookId 書籍Id
	 * @リターン値　List<Book>　勧めの書籍リスト
	 * @リターン値　Book 書籍詳細
	 * */
	protected void bookDetail(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		//書籍Idを取得
		String bookId = req.getParameter("bookId");
		//書籍
		Book book = new Book();
		BookDao bookDao = new BookDao();
		//書籍詳細を抽出
		book = bookDao.getBookDetail(bookId);
		//勧めの書籍リストを抽出
		List<Book> bookList = bookDao.getRecommendBooks();
		//書籍詳細名をループし、書籍名の桁数を制限する
		for(Book bk : bookList) {
			//書籍名をゲットする
			String bookName = bk.getBookName();
			//書籍名の各文字は英字の場合
			if(bookName != null && bookName.matches("[a-zA-Z]+") && bookName.length()>30) {
				//25桁+"..."をセットする
				bk.setBookName(bk.getBookName().subSequence(0, 26) + "...");
			}else if(bookName != null && bookName.length()>16){
				//書籍名の各文字は英字ではないの場合、13桁+"..."をセットする
				bk.setBookName(bk.getBookName().subSequence(0, 14) + "...");
			}
		}
		//書籍詳細と勧めの書籍リストを次の画面へセットする
		req.setAttribute("bookDetail", book);
		req.setAttribute("bookList", bookList);
		//次の画面：書籍詳細画面（bookDetail.jsp）
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/bookDetail.jsp");
		dispatcher.forward(req, resp);
	}
	
	/**
	 * @デスカバリー画面：画面（discovery.jsp）
	 * @param categoryId カテゴリーId
	 * @param tag 抽出条件
	 * @param curPage 入力ページ数
	 * @param pageSize ページサイズ
	 * @リターン値　Integer 書籍総数
	 * @リターン値　List<Book>　書籍リスト
	 * @リターン値　List<Category> カテゴリーリスト
	 * */
	protected void discovery(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		//リクエストからパラメータを抽出する
		String categoryId = req.getParameter("categoryId");
		String tag = req.getParameter("tag");
		String curPage = req.getParameter("curPage");
		String pageSize = req.getParameter("pageSize");
		//カテゴリーリストを抽出
		List<Category> categoryList = getCatalog();
		//書籍総数を取得
		Integer totalBooks = getTotalBooks();
		BookDao bookDao = new BookDao();
		//書籍リスト
		List<Book> bookList = bookDao.getBooksByCategoryAndPagination(
				categoryId,
				tag,
				String.valueOf((Integer.parseInt(curPage)-1)*Integer.parseInt(pageSize)),
				pageSize);
		//書籍総数、書籍リストとカテゴリーリストを次の画面へセットする
		req.setAttribute("totalBooks", totalBooks);
		req.setAttribute("bookList", bookList);
		req.setAttribute("categoryList", categoryList);
		//次の画面：デスカバリー画面（discovery.jsp）
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/discovery.jsp");
		dispatcher.forward(req, resp);
	}
	
	/**
	 * @ランキング画面：画面（ranking.jsp）
	 * @param categoryId カテゴリーId
	 * @param tag 抽出条件
	 * @param curPage 入力ページ数
	 * @param pageSize ページサイズ
	 * @リターン値　Integer 書籍総数
	 * @リターン値　List<Book>　書籍リスト
	 * @リターン値　List<Category> カテゴリーリスト
	 * */
	protected void ranking(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/ranking.jsp");
		dispatcher.forward(req, resp);
		//super.doGet(req, resp);
	}
	
	/**
	 * @デスカバリー画面：画面（discovery.jsp）
	 * @param bookName 書籍名
	 * @リターン値　Integer 書籍総数
	 * @リターン値　List<Book>　書籍リスト
	 * @リターン値　List<Category> カテゴリーリスト
	 * */
	protected void getBooksByName(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		//リクエストからパラメータを抽出する
		String bookName = req.getParameter("bookName");
		//カテゴリーリストを抽出
		List<Category> categoryList = getCatalog();
		//書籍総数を取得
		Integer totalBooks = getTotalBooks();
		BookDao bookDao = new BookDao();
		//書籍リスト
		List<Book> bookList = bookDao.getBooksByName(bookName);
		//書籍総数、書籍リストとカテゴリーリストを次の画面へセットする
		req.setAttribute("totalBooks", totalBooks);
		req.setAttribute("bookList", bookList);
		req.setAttribute("categoryList", categoryList);
		//次の画面：デスカバリー画面（discovery.jsp）
		ServletContext servletContext = getServletContext();
		RequestDispatcher dispatcher = servletContext.
					getRequestDispatcher("/jsp/discovery.jsp");
		dispatcher.forward(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}
	
	
	

}
