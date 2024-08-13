package com.exapmle.dao;

import com.exapmle.bean.User;
import com.exapmle.util.DBUtil;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDao {

    public User getUserInfo(String username, String password){
        Connection conn = DBUtil.getConnection();
        String sql = "select user_id,user_name,user_type from user where " +
                "user_name=? and user_pass=?";
        PreparedStatement ps = null;
        User user = new User();
        try{
            ps = conn.prepareStatement(sql);
            ps.setString(1,username);
            ps.setString(2,password);
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
                user.setUserId(rs.getString("user_id"));
                user.setUserName(rs.getString("user_name"));
                user.setUserType(rs.getInt("user_type"));
            }
        }catch(SQLException exception){
            exception.printStackTrace();
        }
        return user;
    }
}
