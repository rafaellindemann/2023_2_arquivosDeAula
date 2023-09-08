
int luz;
void setup() {
  // put your setup code here, to run once:
  pinMode(14, INPUT);
  Serial.begin(9600);
}
void loop() {
  luz = analogRead(14);
  Serial.println(luz);
  
  // Serial.println(digitalRead(14));
  delay(100);
}
