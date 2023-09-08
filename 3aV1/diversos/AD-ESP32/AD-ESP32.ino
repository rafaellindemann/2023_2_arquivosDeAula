const int potPin = 34;
int potValue = 0;
float miliVolt;
float temperatura;

void setup() {
  Serial.begin(115200);
  delay(1000);
}
void loop() {
  potValue = analogRead(potPin);
  Serial.print("Valor AD: ");
  Serial.println(potValue);
  miliVolt = potValue;
  miliVolt = miliVolt * 0.806;
  Serial.print("miliVolt: ");
  Serial.println(miliVolt);
  temperatura = miliVolt / 10;
    Serial.print("Temperatura: ");
  Serial.println(temperatura);
  delay(2000);
}