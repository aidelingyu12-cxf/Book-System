package com.exapmle.util;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBUtil {
    private static final String driver="com.mysql.cj.jdbc.Driver";
    private static final String url="jdbc:mysql://localhost:3306/booksystem?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT&useSSL=false";
    private static final String username="root";
    private static final String password="123456";

    public static Connection getConnection() {
        Connection conn=null;
        try {
            Class.forName(driver);				//ドライバーの注入
            conn = DriverManager.getConnection(url,username,password);//コネクションを取得する
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }

    public static void close(Connection conn) {
        if(conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    public static void close(PreparedStatement stmt) {
        if(stmt != null) {
            try {
                stmt.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    public static void close(ResultSet rs) {
        if(rs != null) {
            try {
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
