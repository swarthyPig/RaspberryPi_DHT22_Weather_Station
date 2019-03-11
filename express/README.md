### 클라이언트 페이지
* 실시간으로 변동하는 데이터를  real-time streaming 으로 게이지와 그래프로 볼 수 있게 구현하였습니다.

### routes folder
* 포트포워딩된 외부 아이피의 루트('/')로 들어가면 설정 해놓은 텍스트를 볼 수 있습니다.
* 위 루트에서 경로를 /plotly.html 로 설정하면 public 폴더안의 클라이언트 페이지를 볼 수 있습니다.

### app.js
* CORS문제를 해결하기위해 해당 설정을 했주었습니다.
* ('/')로 들어갔을때의 router 설정을 해주었습니다. 

### routes folder(index.js)
* ('/')로 들어갔을때의 페이지 설정을 해주었습니다
* ('/iot')로 들어갔을때 mongoDB로 접속하여 데이터를 꺼내서 json 형태로 전송하여 clinet_DB.html 에서 볼 수 있게 하였습니다.

### public folder(plotly.html)
* 게이지를 구현하는데 사용될 gauge.min.js 파일을 같은 폴더에 위치 시켰습니다.
* 소켓으로 데이터를 받아올때 포트포워딩된 address로 값을 받아오게 하였습니다.
* 그래프에서 전 데이터 값 과 같은 데이터 값 이면 갱신하지 않게 하였습니다.
* 그래프 상에서 그래프 우측 상단의 autoscale 버튼을 누르면 데이터가 조금더 민감하게 보여집니다.
* 그래프 상에서 marker에 커서를 위치시키면 해당 데이터를 볼 수 있습니다.

### public folder(client_DB.html)
* mongoDB에 저장된 데이터를 그래프로 볼 수 있는 페이지입니다.
* 시간간격을 달리하여 데이터를 볼 수 있게 버튼을 만들었습니다.
* rangeslider를 사용하여 구간별로 볼 수 있게 하였습니다.

### 참고 이미지
![route](/express/root.png)
![express](/express/express.png)
![plotly](/express/plotly.png)
![client_DB](/express/client_DB.png)
