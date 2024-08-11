#include <Arduino.h>
#include <WiFi.h>
#include <FirebaseESP32.h>

const int sensorPin1 = 5;
const int sensorPin2 = 4;
const int sensorPin3 = 16;
const int phSensorPin = 34;


const float targetMinPH = 7.2;
const float targetMaxPH = 7.8;
const float sensorMinValue = 2.5;
const float sensorMaxValue = 3.0; 

volatile long pulse1 = 0;
volatile long pulse2 = 0;
volatile long pulse3 = 0;

unsigned long lastTime;
const float threshold = 2.5; 

float volume1, volume2, volume3;
float phValue;

const char* ssid = "Jayakanth"; 
const char* password = "12341234";

#define FIREBASE_HOST "https://water-flow-54850-default-rtdb.asia-southeast1.firebasedatabase.app/" 
#define FIREBASE_AUTH "AIzaSyBpn4rB1DDacu86jC-UmBXbK49Fkq6Doz0"  

FirebaseData firebaseData;
FirebaseAuth firebaseAuth;
FirebaseConfig firebaseConfig;

const unsigned long debounceDelay = 200;
volatile unsigned long lastPulseTime1 = 0;
volatile unsigned long lastPulseTime2 = 0;
volatile unsigned long lastPulseTime3 = 0;

void IRAM_ATTR increase1() {
unsigned long currentTime = micros();
if (currentTime - lastPulseTime1 > debounceDelay) {
pulse1++;
lastPulseTime1 = currentTime;
}
}

void IRAM_ATTR increase2() {
unsigned long currentTime = micros();
if (currentTime - lastPulseTime2 > debounceDelay) {
pulse2++;
lastPulseTime2 = currentTime;
}
}

void IRAM_ATTR increase3() {
unsigned long currentTime = micros();
if (currentTime - lastPulseTime3 > debounceDelay) {
pulse3++;
lastPulseTime3 = currentTime;
}
}

void setup() {
pinMode(sensorPin1, INPUT_PULLUP);
pinMode(sensorPin2, INPUT_PULLUP);
pinMode(sensorPin3, INPUT_PULLUP);
pinMode(phSensorPin, INPUT);

Serial.begin(115200);

attachInterrupt(digitalPinToInterrupt(sensorPin1), increase1, RISING);
attachInterrupt(digitalPinToInterrupt(sensorPin2), increase2, RISING);
attachInterrupt(digitalPinToInterrupt(sensorPin3), increase3, RISING);

WiFi.begin(ssid, password);
while (WiFi.status() != WL_CONNECTED) {
delay(500);
Serial.print(".");
}
Serial.println("Connected to Wi-Fi");

firebaseConfig.host = FIREBASE_HOST;
firebaseConfig.signer.tokens.legacy_token = FIREBASE_AUTH;

Firebase.begin(&firebaseConfig, &firebaseAuth);
Firebase.reconnectWiFi(true);
}

void loop() {
volume1 = 2.663 * pulse1 / 1000 * 30;
volume2 = 2.663 * pulse2 / 1000 * 30;
volume3 = 2.663 * pulse3 / 1000 * 30;

int phSensorValue = analogRead(phSensorPin);

float voltage = (phSensorValue * 3.3 / 4095.0);

phValue = map(voltage * 100, sensorMinValue * 100, sensorMaxValue * 100, targetMinPH * 100, targetMaxPH * 100) / 100.0;

unsigned long currentMillis = millis();

if (currentMillis - lastTime > 2000) {
String leakageStatus = "No leakage detected";

if (volume1 > threshold && volume2 < threshold) {
  Serial.println("Leakage detected between Sensor 1 and Sensor 2");
  leakageStatus = "Leakage between FM1 and FM2";
}

if (volume2 > threshold && volume3 < threshold) {
  Serial.println("Leakage detected between Sensor 2 and Sensor 3");
  leakageStatus = "Leakage between FM2 and FM3";
}

Serial.print("Sensor 1: ");
Serial.print(volume1);
Serial.println(" L/m");

Serial.print("Sensor 2: ");
Serial.print(volume2);
Serial.println(" L/m");

Serial.print("Sensor 3: ");
Serial.print(volume3);
Serial.println(" L/m");

Serial.print("pH Value: ");
Serial.println(phValue);

Firebase.setFloat(firebaseData, "/sensor1/volume", volume1);
Firebase.setFloat(firebaseData, "/sensor2/volume", volume2);
Firebase.setFloat(firebaseData, "/sensor3/volume", volume3);
Firebase.setFloat(firebaseData, "/phValue", phValue);
Firebase.setString(firebaseData, "/leakageStatus", leakageStatus);


pulse1 = 0;
pulse2 = 0;
pulse3 = 0;
lastTime = currentMillis;
}

delay(3000);
}