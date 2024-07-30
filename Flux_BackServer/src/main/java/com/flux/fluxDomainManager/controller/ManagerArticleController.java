package com.flux.fluxDomainManager.controller;

import com.flux.fluxDomainManager.model.ArticleDTO;
import com.flux.fluxDomainManager.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.flux.fluxDomainManager.model.ApiResponse;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/manager/article")
@CrossOrigin(origins = "http://localhost:8080") // 프론트엔드 주소에 맞게 변경
public class ManagerArticleController {

    @Autowired
    private ArticleService articleService;

    // 아티클 등록
    @PostMapping("/articlepost")
    public ResponseEntity<ApiResponse> postArticle(@RequestParam("articleImgFile") MultipartFile articleImgFile,
                                                   @RequestParam("articleTitle") String articleTitle,
                                                   @RequestParam("articleAuthor") String articleAuthor,
                                                   @RequestParam("articleContent") String articleContent) {
        try {
            ArticleDTO articleDTO = articleService.createArticle(articleImgFile, articleTitle, articleAuthor, articleContent);
            return ResponseEntity.ok(new ApiResponse("Article이 등록되었습니다.", articleDTO));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("Article 등록에 실패했습니다. 다시 시도해 주세요."));
        }
    }

    // 특정 아티클 세부 조회
    @GetMapping("/article/{id}")
    public ResponseEntity<ApiResponse> getArticleById(@PathVariable Integer id) {
        try {
            ArticleDTO articleDTO = articleService.getArticleById(id);
            return ResponseEntity.ok(new ApiResponse("Article 조회 성공", articleDTO));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse("Article 조회 실패: " + e.getMessage()));
        }
    }

    // 모든 아티클 조회
    @GetMapping("/articles")
    public ResponseEntity<ApiResponse> getAllArticles() {
        List<ArticleDTO> articles = articleService.getAllArticles();
        return ResponseEntity.ok(new ApiResponse("Articles 조회 성공", articles));
    }

    // 특정 아티클 수정
    @PutMapping("/article/{id}")
    public ResponseEntity<ApiResponse> updateArticle(@PathVariable Integer id,
                                                     @RequestParam(value = "articleImgFile", required = false) MultipartFile articleImgFile,
                                                     @RequestParam("articleTitle") String articleTitle,
                                                     @RequestParam("articleAuthor") String articleAuthor,
                                                     @RequestParam("articleContent") String articleContent) {
        try {
            ArticleDTO articleDTO = articleService.updateArticle(id, articleImgFile, articleTitle, articleAuthor, articleContent);
            return ResponseEntity.ok(new ApiResponse("Article이 수정되었습니다.", articleDTO));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("Article 수정에 실패했습니다. 다시 시도해 주세요."));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse("Article 수정 실패: " + e.getMessage()));
        }
    }

    // 아티클 삭제 (status 값을 false로 설정)
    @DeleteMapping("/article/{id}")
    public ResponseEntity<ApiResponse> deleteArticle(@PathVariable Integer id) {
        try {
            articleService.deleteArticle(id);
            return ResponseEntity.ok(new ApiResponse("Article이 삭제되었습니다."));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse("Article 삭제 실패: " + e.getMessage()));
        }
    }
}
