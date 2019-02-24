#!/usr/bin/python3

#sudo pigpiod 시작하기전 활성화가 필요합니다.

from flask import Flask
import pigpio
import DHT22

app = Flask(__name__)

#Initiate GPIO for pigpio
pi = pigpio.pi()

#Setup the sensor
dht22 = DHT22.sensor(pi, 23) # use the actual GPIO pin name
dht22.trigger()

#동적 html페이지의 소스코드입니다, format을 사용하여 데이터를 넣어주었습니다.
htmlCode = ''' 
<!DOCTYPE HTML>

<html>
<head><meta http-equiv="refresh" content="3" /></head>

<body>

<h1>RaspberryPi - Temperature and Humidity</h1>

<dl id="data">

<dt class="Celsius">
<h2>Temperature in Celsius : {cel} *C</h2>
</dt>

<dt class='Fahrenheit'>
<h2>Temperature in Fahrenheit : {fah} *F</h2>
</dt>

<dt class='Humidity'>
<h2>Humidity : {humi} %</h2>
</dt>
</dl>
</body>

</html>'''

def readDHT22():
    # Get a new reading
    dht22.trigger()
    # Save our values
    humidity = '%.2f' % (dht22.humidity()) #humidity
    temp = '%.2f' % (dht22.temperature()) #Celsius
    fahr = '%.2f' % (dht22.temperature() * 1.8 + 32) #Fahrenheit
    return (humidity, temp, fahr)

@app.route('/')
def dht_22():
	humidity, temperature, fahr = readDHT22()
	
	return htmlCode.format(cel=temperature, fah=fahr, humi=humidity)
	
if __name__ == '__main__':
	app.run()
