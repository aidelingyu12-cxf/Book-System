package com.exapmle.dao;

import com.exapmle.bean.Book;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.exapmle.util.DBUtil;

public class BookDao {

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
    
    public List<Book> getTest(){
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
