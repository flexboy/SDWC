/*
 * SuperDock
 *
 * Version: v0.12
 * Date: 2017.11.3
 *
 */

int stop = 2;

String comchar;

struct Action {
  String  cmd;
  int  button;
  boolean button_status;
  boolean cw_status;
  int  en;
  int  cw;
  int  clk;
  int  speed;
};

/*
*命令，限位开关接口，限位开关状态， cw方向， en, cw, clk
*/

struct Action action_lib[] = {
  {"door_up", A0, HIGH, LOW, 13, 12, 11, 50},
  {"door_down", A0, HIGH, HIGH, 13, 12, 11, 50},
  {"plet_up", A0, HIGH, LOW, 22, 24, 26, 20},
  {"plet_down", A0, HIGH, HIGH, 22, 24, 26, 20},
  {"fix_up", A0, HIGH, HIGH, 23, 25, 27, 50},
  {"fix_down", A0, HIGH, LOW, 23, 25, 27, 50},
  {"lock_up", A0, HIGH, HIGH, 29, 31, 33, 50},
  {"lock_down", A0, HIGH, LOW, 29, 31, 33, 50},
  {"push_up", A0, HIGH, HIGH, 40, 42, 44, 10},
  {"push_down", A0, HIGH, LOW, 40, 42, 44, 10},
  {"b_up", A0, HIGH, HIGH, 41, 43, 45, 20},
  {"b_down", A0, HIGH, LOW, 41, 43, 45, 20},
  {"roate_up", A0, HIGH, HIGH, 35, 37, 39, 50},
  {"roate_down", A0, HIGH, LOW, 35, 37, 39, 50},
  {"test", A0, HIGH, HIGH, 13, 12, 11, 50}
};


int init(struct Action *action) {

  pinMode(action->button, INPUT_PULLUP);

  pinMode(action->en, OUTPUT);
  pinMode(action->cw, OUTPUT);
  pinMode(action->clk, OUTPUT);
  return 0;
}

void setup() {
  Serial.begin(9600);

  pinMode(stop, INPUT_PULLUP);

  for( int a = 0; a < sizeof(action_lib)/sizeof(action_lib[0]); a++ ) {
    init(&action_lib[a]);
  }
}

/////////////////////////////////
String msg() {
  int ret = 0;
  char line[500] = "";
  if (Serial.available() > 0) {
    // 读取传入的数据:  读到 \n 为止，或者最多 500 个字符
    ret = Serial.readBytesUntil('\n', line, 500);

    //打印你得到的：
    Serial.print("I received: ");
    Serial.println(line);
  }
  return line;
}


int action(struct Action *action) {

  digitalWrite(action->en, LOW);                // enable the motor
  digitalWrite(action->cw, action->cw_status);               // motor dir : Open the door

  // loop until the button is pressed
  while(digitalRead(action->button) == action->button_status && digitalRead(stop) == HIGH) {
    digitalWrite(action->clk, HIGH);
    delayMicroseconds(action->speed);                    // motor speed
    digitalWrite(action->clk, LOW);
    delayMicroseconds(action->speed);                    // motor speed
  }
  digitalWrite(action->en, HIGH);                // disable the motor
  return 0;
}
/////////////////////////////////

void loop() {

  comchar = msg();
  //for( int a = 0; a < ACTION_MAX_SIZE; a++ ) {
  for( int a = 0; a < sizeof(action_lib)/sizeof(action_lib[0]); a++ ) {
    //Serial.println(a);
    if (comchar == action_lib[a].cmd) {
      action(&action_lib[a]);
    }
  }

}