### index.js
* cheerio 와 request 모듈로 동적 html페이지의 데이터를 긁어와 socket을 사용하여 클라이언트 페이지에 데이터를 뿌려줍니다.
* (데이터가 들어온 날짜,시간/섭씨/화씨/습도) 이러한 순서의 데이터를 배열에 담아 socket을 사용해 전송합니다.
* setInterval 함수를 사용하여 데이터를 3초마다 한번씩 긁어와서 socket으로 전송할 수 있게 설정하였습니다.
* socket 서버는 3000번 포트로 running 됩니다.

### 참고 이미지
![scrape](/socket/scrape.png)
