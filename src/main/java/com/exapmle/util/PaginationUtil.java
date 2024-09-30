package com.exapmle.util;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.exapmle.bean.Book;
import com.exapmle.bean.Category;
import com.exapmle.dao.BookDao;

public class PaginationUtil {
	
	/**
	 * @リダイレクト画面：書籍詳細画面（bookDetail.jsp）
	 * @param bookId 書籍Id
	 * @リターン値　List<Book>　勧めの書籍リスト
	 * @リターン値　Book 書籍詳細
	 * */
	protected void getPaginationByBookName(String bookName, Integer pageSize) throws ServletException, IOException {
		
		Integer totalpages = 0;
		//書籍
		Book book = new Book();
		BookDao bookDao = new BookDao();
		
		//書籍総数を取得
		Integer totalBooks = bookDao.getTotalBooksByBookName(bookName);
		
		//ページ数を設定する
		if((totalBooks%pageSize) == 0) {
			totalpages = totalBooks/pageSize;
		}else
			totalpages = totalBooks/pageSize + 1;
	}
	
	

}
