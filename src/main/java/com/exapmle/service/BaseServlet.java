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
        String methodName = url.substring(url.lastIndexOf("/")+1, url.length());
        
        String params = methodName.substring(0, url.lastIndexOf("?")+1);

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
