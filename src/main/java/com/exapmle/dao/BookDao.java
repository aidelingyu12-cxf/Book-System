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

    public List<Book> getBookInfo(String username, String password){
        Connection conn = DBUtil.getConnection();
        String sql = "select book_name,book_id,comment,ISBN,press,"
        		+ "version,page,price,publish_date,sale_date,"
        		+ "author,subtitle,picture,series from book limit 10";
        PreparedStatement ps = null;
        List<Book> bookList = new ArrayList<Book>();
        try{
            ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
            	Book book = new Book();
            	book.setBookName(sql);
            	book.setAuthor(sql);
            	book.setPicture(sql);
            	bookList.add(book);
            }
        }catch(SQLException exception){
            exception.printStackTrace();
        }
        return bookList;
    }
    
    public List<Book> getHeaderBooks(){
        Connection conn = DBUtil.getConnection();
        String sql = "select book_name,book_id,comment,ISBN,press,"
        		+ "version,page,price,publish_date,sale_date,"
        		+ "author,subtitle,picture,series from book limit 20";
        PreparedStatement ps = null;
        List<Book> bookList = new ArrayList<Book>();
        try{
            ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
            	Book book = new Book();
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
