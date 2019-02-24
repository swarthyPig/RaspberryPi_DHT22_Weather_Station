### DHT22.py

* Python에서 사용할 dht22 센서 라이브러리 파일입니다.
* app.py와 항상 같은 폴더내에 위치하고 있어야 됩니다.

### app.py

* 실행하기전 #sudo pigpiod Command로 GPIO핀 활성화가 필요합니다.
* GPIO.4번핀 즉 BCM(python에서) 23번 핀을 사용하여 데이터를 받았습니다.
* Flask를 사용하여 127.0.0.1:5000 주소의 root('/')로 들어갔을때 웹 상으로 데이터를 볼 수 있도록 하였습니다
* html코드에 meta http-equiv="refresh" content="3" 를 삽입해 3초마다 한번씩 데이터가 refresh되도록 하였습니다.

### 참고 이미지
![Flask](/flask/Flask.png)

![htmlPage](/flask/html_page.png)
