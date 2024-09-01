package com.exapmle.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.exapmle.bean.Category;
import com.exapmle.util.DBUtil;

public class CategoryDao {

	public List<Category> getCategorys(){
		
		List<Category> categoryList = new ArrayList<Category>();
		Connection conn = DBUtil.getConnection();
		String sql = "select * from category";
		PreparedStatement ps = null;
		try {
			ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				Category category = new Category();
				category.setId(rs.getInt("id"));
				category.setName(rs.getString("name"));
				categoryList.add(category);
			}
		}catch(SQLException exception) {
			exception.printStackTrace();
		}
		return categoryList;
	}
}
