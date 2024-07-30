package com.flux.fluxDomainManager.model;

import java.time.LocalDateTime;

public class ArticleDTO {

    // 이미지 등록용 dto
    private String articleImgName; // 파일의 이름
    private String saveImgName; // 확장자 이름
    private String articleImgPath;
    private String articleImgDescription;

    private Integer articleId;

    private String articleTitle;

    private String articleAuthor;

    private String articleContent;

    private LocalDateTime articleCreate;

    private LocalDateTime articleUpdate;

    private boolean articleStatus;

    public ArticleDTO() {
    }

    public ArticleDTO(String articleImgName, String saveImgName, String articleImgPath, String articleImgDescription, Integer articleId, String articleTitle, String articleAuthor, String articleContent, LocalDateTime articleCreate, LocalDateTime articleUpdate, boolean articleStatus) {
        this.articleImgName = articleImgName;
        this.saveImgName = saveImgName;
        this.articleImgPath = articleImgPath;
        this.articleImgDescription = articleImgDescription;
        this.articleId = articleId;
        this.articleTitle = articleTitle;
        this.articleAuthor = articleAuthor;
        this.articleContent = articleContent;
        this.articleCreate = articleCreate;
        this.articleUpdate = articleUpdate;
        this.articleStatus = articleStatus;
    }

    public String getArticleImgName() {
        return articleImgName;
    }

    public void setArticleImgName(String articleImgName) {
        this.articleImgName = articleImgName;
    }

    public String getSaveImgName() {
        return saveImgName;
    }

    public void setSaveImgName(String saveImgName) {
        this.saveImgName = saveImgName;
    }

    public String getArticleImgPath() {
        return articleImgPath;
    }

    public void setArticleImgPath(String articleImgPath) {
        this.articleImgPath = articleImgPath;
    }

    public String getArticleImgDescription() {
        return articleImgDescription;
    }

    public void setArticleImgDescription(String articleImgDescription) {
        this.articleImgDescription = articleImgDescription;
    }

    public Integer getArticleId() {
        return articleId;
    }

    public void setArticleId(Integer articleId) {
        this.articleId = articleId;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public String getArticleAuthor() {
        return articleAuthor;
    }

    public void setArticleAuthor(String articleAuthor) {
        this.articleAuthor = articleAuthor;
    }

    public String getArticleContent() {
        return articleContent;
    }

    public void setArticleContent(String articleContent) {
        this.articleContent = articleContent;
    }

    public LocalDateTime getArticleCreate() {
        return articleCreate;
    }

    public void setArticleCreate(LocalDateTime articleCreate) {
        this.articleCreate = articleCreate;
    }

    public LocalDateTime getArticleUpdate() {
        return articleUpdate;
    }

    public void setArticleUpdate(LocalDateTime articleUpdate) {
        this.articleUpdate = articleUpdate;
    }

    public boolean isArticleStatus() {
        return articleStatus;
    }

    public void setArticleStatus(boolean articleStatus) {
        this.articleStatus = articleStatus;
    }

    @Override
    public String toString() {
        return "ArticleDTO{" +
                "articleImgName='" + articleImgName + '\'' +
                ", saveImgName='" + saveImgName + '\'' +
                ", articleImgPath='" + articleImgPath + '\'' +
                ", articleImgDescription='" + articleImgDescription + '\'' +
                ", articleId=" + articleId +
                ", articleTitle='" + articleTitle + '\'' +
                ", articleAuthor='" + articleAuthor + '\'' +
                ", articleContent='" + articleContent + '\'' +
                ", articleCreate=" + articleCreate +
                ", articleUpdate=" + articleUpdate +
                ", articleStatus=" + articleStatus +
                '}';
    }
}
