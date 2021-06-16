//Task# 1
Boolean(Number("10")) + 1; //Number("10")=10, Boolean(10)=1 вернетcя: 2
"sub " + Number(false); //Number(false) = 0 вернется: sub 0
16 * "      91    "; // Вернется произведение 16*91
true - 70; // 1-69 Вернется -69
Number(1 + String(1)) + 1; //String(1) = "1", 1+"1"=11, Number(11) + 1 Вернется 12

//Task# 2
let hours = +prompt("Введите количество часов");
let sec = hours * 60 * 60;
alert(`В ${hours} часах - ${sec} секунд`);

//Task #3
var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);
