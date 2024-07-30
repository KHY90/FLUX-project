package com.flux.fluxDomainManager.model;

import java.util.List;

public class ApiResponse {
    private String message;
    private ArticleDTO article;
    private List<ArticleDTO> articles;

    public ApiResponse(String message, ArticleDTO article) {
        this.message = message;
        this.article = article;
    }

    public ApiResponse(String message, List<ArticleDTO> articles) {
        this.message = message;
        this.articles = articles;
    }

    public ApiResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ArticleDTO getArticle() {
        return article;
    }

    public void setArticle(ArticleDTO article) {
        this.article = article;
    }

    public List<ArticleDTO> getArticles() {
        return articles;
    }

    public void setArticles(List<ArticleDTO> articles) {
        this.articles = articles;
    }
}

