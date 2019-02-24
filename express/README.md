### 클라이언트 페이지
* 실시간으로 변동하는 데이터를  real-time streaming 으로 게이지와 그래프로 볼 수 있게 구현하였습니다.

### routes folder
* 포트포워딩된 외부 아이피의 루트('/')로 들어가면 설정 해놓은 텍스트를 볼 수 있습니다
* 위 루트에서 경로를 /plotly.html 로 설정하면 public 폴더안의 클라이언트 페이지를 볼 수 있습니다

### app.js
* CORS문제를 해결하기위해 해당 설정을 했주었습니다.
* 각종 경로 설정을 해주었습니다.

### public folder(plotly.html)
* 게이지를 구현하는데 사용될 gauge.min.js 파일을 같은 폴더에 위치 시켰습니다.
* 소켓으로 데이터를 받아올때 포트포워딩된 address로 값을 받아오게 하였습니다.
* 그래프에서 전 데이터 값 과 같은 데이터 값 이면 갱신하지 않게 하였습니다.
* 그래프 상에서 그래프 우측 상단의 autoscale 버튼을 누르면 데이터가 조금더 민감하게 보여집니다
* 그래프 상에서 marker에 커서를 위치시키면 해당 데이터를 볼 수 있습니다.

### 참고 이미지
![route](/express/route.png)
![express](/express/express.png)
![plotly](/express/plotly.png)
