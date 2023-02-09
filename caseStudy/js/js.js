let it3 = [0,0,0,0,0,0]
function doSth1(numbers1){
    return 15000 * numbers1;
}
function checkOne(){
    let input1 = document.getElementById('number1').value;
    it3[0]=input1;
    document.getElementById('price1').innerHTML = doSth1(input1)+" VNĐ";
    let input3 = document.getElementById('number3').value;
    it3[2]=input3;
    document.getElementById('price3').innerHTML = doSth1(input3) + ' VNĐ';
    let input4 = document.getElementById('number4').value;
    it3[3]=input4;
    document.getElementById('price4').innerHTML = doSth1(input4) + ' VNĐ';
}
function doSth2(numbers2){
    return 20000 * numbers2;
}
function checkTwo(){
    let input2 = document.getElementById('number2').value;
    it3[1]=input2;
    document.getElementById('price2').innerHTML = doSth2(input2) + ' VNĐ';
    let input6 = document.getElementById('number6').value;
    it3[5]=input6;
    document.getElementById('price6').innerHTML = doSth2(input6) + ' VNĐ';
}
function doSth3(numbers3){
    return 10000 * numbers3;
}
function checkThree(){
    let input5 = document.getElementById('number5').value;
    it3[4]=input5;
    document.getElementById('price5').innerHTML = doSth3(input5) + ' VNĐ';
}
function checkFour(){
    document.getElementById('result').innerHTML = doSth1(it3[0])+ doSth1(it3[2])+doSth1(it3[3]) + doSth2(it3[1])+doSth2(it3[5]) + doSth3(it3[4]);
    // result.toString();
    // result.join();
}
function Reset(){
  let value =  document.getElementById('myform').reset();
}
