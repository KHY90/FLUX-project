# flux_json_test_server

> 테스트용 json 서버입니다 :p

npm istall -> npm start | server-port : 8001

## 필요한 데이터 정리

### 유저 | user

- 유저 ID : user_id
- 이름 : user_name
- 이메일 : user_mail
- 성별 : user_gender
- 생일 : user_birth
- 권한 : user_role
- 소셜로그인토큰 : user_token

### 마켓 | market

- 판매 ID : market_id
- 유저 ID : user_id
- 상품 이름 : market_name
- 상품 사진 : market_imgs
- 최초 가격 : market_price
- 즉시구매가격 : market_maxprice
- 상품 카테고리 : market_category
- 상품 설명 : market_contents
- 상품 판매상태 : market_orderablestatus
- 상품 등록일자 : market_createat
- 상품 수정일자 : market_updateat
- 상품 판매일자 : market_selldate
- 상품 판매기간 : market_period
- 상품 조회수 : market_view

### 아티클 | article

- 아티클 ID : article_id
- 유저 ID : user_id
- 아티클 사진 : article_imgs
- 아티클 제목 : article_title
- 아티클 컨텐츠 : article_contents
- 아티클 등록일자 : article_createat
- 아티클 수정일자 : article_updateat
- 아티클 조회수 : article_view

### 입찰 | bid

- 입찰 ID : bid_id
- 유저 ID : user_id
- 판매 ID : market_id
- 입찰시간 : bid_createat
- 입찰가격 : bid_price
- 입찰상태 : bid_status
- 최고입찰여부 : bid_highest

### 댓글 | comments

- 댓글 ID : comment_id
- 유저 ID : user_id
- 아티클 ID : article_id
- 댓글내용 : comment_contents
- 댓글등록일자 : comment_createat
- 댓글수정일자 : comment_updateat

### 찜목록 | wishlist

- 위시리스트 ID : wish_id
- 유저 ID : user_id
- 판매 ID : market_id
- 위시리스트등록일자 : wish_createat

### 신고 | report

- 신고 ID : report_id
- 유저 ID : user_id
- 대상유저 : report_subject
- 신고내용 : report_contents

### 공지 | notification

- 공지 ID : noti_id
- 유저 ID : user_id
- 공지내용 : noti_contents
- 공지생성일자 : noti_createat
- 공지수정일자 : noti_updateat

---
