var calc = function(){

  var firstNumber = parseInt($("#noone").val());
  var secondNumber = parseInt($("#notwo").val());
  var operator = $("#operator").val();

  if(operator == "+"){
    var result = firstNumber + secondNumber;

  }else if(operator == "-"){
    var result = firstNumber - secondNumber;

  }else if(operator == "*"){
    var result = firstNumber * secondNumber;

  }else if(operator == "/"){
    var result = firstNumber / secondNumber;

  }else{
    var result = "Invalid";
};

var final = $("#final");
  final.html(result);
}
