package com.exapmle.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.exapmle.bean.Category;
import com.exapmle.util.DBUtil;

/**
 * @aidelingyu12-cxf
 * @カテゴリー関連
 * */
public class CategoryDao {

	/**
	 * @カテゴリー情報抽出
	 * @戻り値　List<Category>　カテゴリーリスト
	 * */
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
