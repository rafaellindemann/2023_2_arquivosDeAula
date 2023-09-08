#include "DHT.h"
#define DHTPIN 14     // Digital pin connected to the DHT sensor
#define DHTTYPE DHT11   // DHT 11
DHT dht(DHTPIN, DHTTYPE);
float tempMax=25;
char recebido;
void setup() {
  pinMode(25, OUTPUT);
  Serial.begin(9600);
  Serial.println(F("DHTxx test!"));
  dht.begin();
}

void loop() {

  delay(2000);
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }
  float hic = dht.computeHeatIndex(t, h, false);

  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.print(F("°C "));
  Serial.print(F(" Heat index: "));
  Serial.print(hic);
  Serial.print(F("°C Temp.Max: "));
  Serial.println(tempMax);
  if(t >= tempMax){
    digitalWrite(25,1);
  }
    if(t <= tempMax-2){
    digitalWrite(25,0);
  }

  if(Serial.available()){
    recebido = Serial.read();
    if(recebido == 'A'){
      tempMax += 1; 
    } 
    if(recebido == 'a'){
      tempMax -= 1;
    } 
    Serial.println(recebido);
  }

}