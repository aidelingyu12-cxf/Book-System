package com.exapmle.service;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @aidelingyu12-cxf
 * @リクエスト事前処理
 * */
public class BaseServlet extends HttpServlet{
	
    private static final long serialVersionUID = 1L;

    @Override
	/**
	 * @HttpServletから継承するserviceメソッドを上書き
	 * */
    protected void service(HttpServletRequest request, HttpServletResponse response) {
        //リクエストurlを抽出
        String url = request.getRequestURI();
        //リクエスト名
        String methodName = url.substring(url.lastIndexOf("/")+1, url.length());

        Method method = null;
        
        try {
            // 
            method = getClass().getDeclaredMethod(methodName, HttpServletRequest.class, HttpServletResponse.class);
            method.setAccessible(true);
            //
            method.invoke(this, request, response);
        } catch (Exception e) {
            throw new RuntimeException("error！");
        } 
    }
}
