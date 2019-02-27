# Raspberry Pi_DHT22_Weather_Station

### weMos를 사용하여 진행 하였던 기존 프로젝트를 라즈베리파이를 사용해서 구축하였습니다.
  * 이번 프로젝트는 하나의 라즈베리파이안에서 모든것을 할 수 있는 통합개발환경을 구축하는 것을 목표로 하였습니다.
  
  * 각 부분부분마다 폴더로 나뉘어서 설명이 되어있습니다.
  * 모든 address는 포트포워딩을 통해 외부에서 여러기기가 동시에 접속 할수 있게 하였습니다.
  * flask(5000), socket.io(3000), express(3030) 총 3개의 서버를 사용하였고 동시에 running됩니다.
  
### 모듈의 버전
  * 버전문제로 인해 각종 모듈의 버전을 아래와 같이 고정하였습니다. 
  * "cheerio": "^1.0.0-rc.2",
    "cors": "^2.8.4",
    "express": "^4.15.2",
    "request": "^2.88.0",
    "socket.io": "^1.7.3"
    
### 전체적인 흐름
  * Flask folder
    1. 라즈베리파이 GPIO핀과 파이썬을 이용하여 DHT22센서 데이터를 받았습니다.
    2. 파이썬의 Flask를 사용하여 동적 html웹 페이지(2초마다 데이터 갱신)를 생성하였습니다.
    
  * socket folder(해당 폴더 안의 index.js는 mongoDB를 적용하기 전이므로 사용하지않고 mongoDB 폴더안의 index.js를 사용합니다.)
    1. 동적으로 생성한 html페이지에서 cheerio 모듈을 사용하여 데이터(섭씨,화씨,습도) 부분만 Web Scraping 하였습니다.
    2. Scraping한 데이터를 socket.io를 사용하여 express 서버로 돌고있는 클라이언트 페이지로 뿌려줍니다.
    
  * express folder
    1. 클라이언트 페이지에서 socket.io로 보낸 데이터를 받아 실시간으로 데이터를 볼 수 있게 하였습니다.
    2. CORS(Cross-Origin Resource Sharing)설정을 하여 도메인이 달라 socket.io에서 데이터가 넘어오지 못하는 부분을 해결하였습니다.
    
  * mongoDB folder
    1. NoSQL인 mongoDB를 사용하여 데이터를 저장 관리 하였습니다.
    2. 라즈베리파이에서 apt-get으로 받은 mongoDB는 하위 버전(2.4.6)(요구버전(2.6이상)) 문제상 작동이 되지않아 2.6이상 버전은 설치가 불가능하여 Jessie version(3.0.9)으로 설치 하였습니다.
    3. mongoDB에 저장한 데이터를 export하여 생성된 csv파일을 사용하여 파이썬 라이브러리를 통해서 데이터를 분석하고 mining하였습니다.
    
  * Raspberry Pi setting & install.txt
    - 라즈베리파이에 대한 초기설정과 각종 언어 및 기술의 설치 방법등이 적혀있습니다.

### 참고 이미지 
  ![DHT22 Pin](/dht22.png)
  
  ![GPIO Pin Map](/GPIO.png)
