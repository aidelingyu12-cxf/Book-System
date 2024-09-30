package com.exapmle.dao;

import com.exapmle.bean.Book;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.exapmle.util.DBUtil;

/**
 * @aidelingyu12-cxf
 * @書籍情報関連
 * */
public class BookDao {

	/**
	 * @IDで書籍情報を抽出する
	 * @param bookId 書籍Id
	 * @戻り値　Book　書籍情報
	 * */
    public Book getBookDetail(String bookId){
        Connection conn = DBUtil.getConnection();
        String sql = "select book_name,book_id,comment,ASIN,ISBN,press,"
        		+ "version,page,price,publish_date,sale_date,"
        		+ "author,subtitle,picture,category from book where book_id=?";
        PreparedStatement ps = null;
        Book book = new Book();
        try{
            ps = conn.prepareStatement(sql);
            ps.setString(1, bookId);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
            	book.setBookId(rs.getString("book_id"));
            	book.setBookName(rs.getString("book_name"));
            	book.setComment(rs.getString("comment"));
            	book.setASIN(rs.getString("ASIN"));
            	book.setISBN(rs.getString("ISBN"));
            	book.setPress(rs.getString("press"));
            	book.setVersion(rs.getString("version"));
            	book.setPage(rs.getInt("page"));
            	book.setPrice(rs.getFloat("price"));
            	book.setPublishDate(rs.getDate("publish_date"));
            	book.setSaleDate(rs.getDate("sale_date"));
            	book.setAuthor(rs.getString("author"));
            	book.setSubtitle(rs.getString("subtitle"));
            	book.setPicture(rs.getString("picture"));
            	book.setCategory(rs.getString("category"));
            }
        }catch(SQLException exception){
            exception.printStackTrace();
        }
        return book;
    }
    
	/**
	 * @ホームペーのジカルーセル書籍リスト
	 * @戻り値　List<Book>　書籍リスト
	 * */
    public List<Book> getHeaderBooks(){
    	
        Connection conn = DBUtil.getConnection();
        String sql = "select book_name,book_id,comment,ASIN,ISBN,press,"
        		+ "version,page,price,publish_date,sale_date,"
        		+ "author,subtitle,picture,category from book limit 20";
        PreparedStatement ps = null;
        List<Book> bookList = new ArrayList<Book>();
        try{
            ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
            	Book book = new Book();
            	book.setBookId(rs.getString("book_id"));
            	book.setBookName(rs.getString("book_name"));
            	book.setAuthor(rs.getString("author"));
            	book.setPicture(rs.getString("picture"));
            	bookList.add(book);
            }
        }catch(SQLException exception){
            exception.printStackTrace();
        }
        return bookList;
    }
    
	/**
	 * @書籍総数抽出
	 * @戻り値　count　書籍総数
	 * */
    public Integer getTotalBooksByBookName(String BookName){
    	
        Connection conn = DBUtil.getConnection();
        String sql = "select count(book_id) from book where bookName=?";
        Integer count = 0;
        PreparedStatement ps = null;
        try{
            ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            ps.setString(1, BookName);
            while(rs.next()){
            	count = rs.getInt(1);
            }
        }catch(SQLException exception){
            exception.printStackTrace();
        }
        return count;
    }
    
	/**
	 * @書籍総数抽出
	 * @戻り値　count　書籍総数
	 * */
    public Integer getTotalBooks(){
    	
        Connection conn = DBUtil.getConnection();
        String sql = "select count(book_id) from book";
        Integer count = 0;
        PreparedStatement ps = null;
        try{
            ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
            	count = rs.getInt(1);
            }
        }catch(SQLException exception){
            exception.printStackTrace();
        }
        return count;
    }
    
	/**
	 * @書籍総数抽出
	 * @戻り値　count　書籍総数
	 * */
    public Integer getTotalBooksByName(String bookName){
    	
        Connection conn = DBUtil.getConnection();
        String sql = "select count(book_id) from book where book_name=?";
        Integer count = 0;
        PreparedStatement ps = null;
        try{
            ps = conn.prepareStatement(sql);
            ps.setString(0, bookName);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
            	count = rs.getInt(1);
            }
        }catch(SQLException exception){
            exception.printStackTrace();
        }
        return count;
    }
    
	/**
	 * @ページネーションから書籍情報を抽出する
	 * @param categoryId カテゴリーId
	 * @param tag 抽出条件
	 * @param curPage 入力ページ数
	 * @param pageSize ページサイズ
	 * @戻り値　List<Book>　書籍情報リスト
	 * */
    public List<Book> getBooksByCategoryAndPagination(String categoryId,String tag,
		String curPage,String pageSize){
    	
    	StringBuilder sql = new StringBuilder();
    	Connection conn = DBUtil.getConnection();
    	sql.append("select book_name,book_id,picture,sale_date from book");
    	//抽出書籍数
    	//抽出条件/ソート順
    	if(!"0".equals(categoryId)) {
    		sql.append(" where category=?");
    	}else if("1".equals(tag)) {
    		sql.append(" order by sale_date desc");
    	}
    	sql.append(" limit ").append(curPage).append(",").append(pageSize);
    	PreparedStatement ps = null;
    	List<Book> bookList = new ArrayList<Book>();
    	try {
    		ps = conn.prepareStatement(sql.toString());
    		if(!"0".equals(categoryId)) {
    			ps.setString(1, categoryId);
    		}
    		
    		ResultSet rs = ps.executeQuery();
    		
    		while(rs.next()) {
    			Book book = new Book();
    			book.setBookId(rs.getString("book_id"));
    			book.setBookName(rs.getString("book_name"));
    			book.setPicture(rs.getString("picture"));
    			bookList.add(book);
    		}
    	}catch(SQLException exception){
            exception.printStackTrace();
        }
    	return bookList;
    }
    
	/**
	 * @ページネーションから書籍情報を抽出する
	 * @param bookName 書籍名
	 * @param curPage 入力ページ数
	 * @param pageSize ページサイズ
	 * @戻り値　List<Book>　書籍情報リスト
	 * */
    public List<Book> getBooksByName(String bookName,
		String curPage,String pageSize){
    	
    	StringBuilder sql = new StringBuilder();
    	Connection conn = DBUtil.getConnection();
    	sql.append("select book_name,book_id,picture,sale_date from book");
    	//抽出書籍数
    	//抽出条件/ソート順
    	sql.append(" where book_name like ? limit ").append(curPage).append(",").append(pageSize);
    	PreparedStatement ps = null;
    	List<Book> bookList = new ArrayList<Book>();
    	try {
    		ps = conn.prepareStatement(sql.toString());
    		ps.setString(1, "%" + bookName + "%");
    		
    		ResultSet rs = ps.executeQuery();
    		
    		while(rs.next()) {
    			Book book = new Book();
    			book.setBookId(rs.getString("book_id"));
    			book.setBookName(rs.getString("book_name"));
    			book.setPicture(rs.getString("picture"));
    			bookList.add(book);
    		}
    	}catch(SQLException exception){
            exception.printStackTrace();
        }
    	return bookList;
    }
    
	/**
	 * @ページネーションから書籍情報を抽出する
	 * @param categoryId カテゴリーId
	 * @param tag 抽出条件
	 * @param curPage 入力ページ数
	 * @param pageSize ページサイズ
	 * @戻り値　List<Book>　書籍情報リスト
	 * */
    public List<Book> getBooksByName(String bookName){
    	
    	String sql = "select book_name,book_id,picture,sale_date from book "
    			+ "where book_name like '%" + bookName + "%' limit 1000";
    	Connection conn = DBUtil.getConnection();
    	PreparedStatement ps = null;
    	List<Book> bookList = new ArrayList<Book>();
    	try {
    		ps = conn.prepareStatement(sql);
    		ResultSet rs = ps.executeQuery();
    		
    		while(rs.next()) {
    			Book book = new Book();
    			book.setBookId(rs.getString("book_id"));
    			book.setBookName(rs.getString("book_name"));
    			book.setPicture(rs.getString("picture"));
    			bookList.add(book);
    		}
    	}catch(SQLException exception){
            exception.printStackTrace();
        }
    	return bookList;
    }
    
    
//	/**
//	 * @書籍情報抽出
//	 * @param bookId 書籍Id
//	 * @戻り値　Book　書籍情報
//	 * */
//    public List<Book> getBooksByTag(String categoryId,String tag){
//    	
//    	String sql = "select book_name,book_id,picture,sale_date from book";
//    	Connection conn = DBUtil.getConnection();
//    	String suffix = " limit 0,50";
//    	String middleSql = "";
//    	if(!"0".equals(categoryId)) {
//    		middleSql = " where category=?";
//    	}else if("1".equals(tag)) {
//    		middleSql += " order by sale_date desc";
//    	}
//    	sql = sql + middleSql + suffix;
//    	PreparedStatement ps = null;
//    	List<Book> bookList = new ArrayList<Book>();
//    	try {
//    		ps = conn.prepareStatement(sql);
//    		if(!"0".equals(categoryId)) {
//    			ps.setString(1, categoryId);
//    		}
//    		
//    		ResultSet rs = ps.executeQuery();
//    		
//    		while(rs.next()) {
//    			Book book = new Book();
//    			book.setBookId(rs.getString("book_id"));
//    			book.setBookName(rs.getString("book_name"));
//    			book.setPicture(rs.getString("picture"));
//    			bookList.add(book);
//    		}
//    	}catch(SQLException exception){
//            exception.printStackTrace();
//        }
//    	return bookList;
//    }
    
    public List<Book> getRecommendBooks(){
        Connection conn = DBUtil.getConnection();
        String sql = "select book_name,book_id,comment,ASIN,ISBN,press,"
        		+ "version,page,price,publish_date,sale_date,"
        		+ "author,subtitle,picture,category from book limit 12";
        PreparedStatement ps = null;
        List<Book> bookList = new ArrayList<Book>();
        try{
            ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
            	Book book = new Book();
            	book.setBookId(rs.getString("book_id"));
            	book.setBookName(rs.getString("book_name"));
            	book.setAuthor(rs.getString("author"));
            	book.setPicture(rs.getString("picture"));
            	bookList.add(book);
            }
        }catch(SQLException exception){
            exception.printStackTrace();
        }
        return bookList;
    }

}
