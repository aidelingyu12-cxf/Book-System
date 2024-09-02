package com.exapmle.service;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BaseServlet extends HttpServlet{
	
    private static final long serialVersionUID = 1L;

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) {
        // 
        String url = request.getRequestURI();
        //
        String suffix = url.substring(url.lastIndexOf(".") + 1, url.length());
        // 
        System.out.print(url.lastIndexOf("/"));
        System.out.print(url.lastIndexOf("."));
        String methodName = url.substring(url.lastIndexOf("/")+1, url.lastIndexOf("."));
        

        Method method = null;
        
        try {
            // 使用反射机制获取在本类中声明了的方法
            method = getClass().getDeclaredMethod(methodName, HttpServletRequest.class, HttpServletResponse.class);
            method.setAccessible(true);
            // 执行方法
            method.invoke(this, request, response);
        } catch (Exception e) {
            throw new RuntimeException("error！");
        } 
    }
}
