var addBal = function(num) {
  if(num > 0) {
    var current = parseFloat(window.localStorage.getItem("bal"));
    current+=num;
    window.localStorage.setItem("bal", parseFloat(String(current)).toFixed(2));
  }else{
    alert("Enter a Valid Number");
  }
}


$(document).ready(function() {
  if(window.localStorage.getItem("bal") === null || window.localStorage.getItem("bal") === "NaN") {
    window.localStorage.setItem("bal", "5.50");
  }
});
$('#bal').text("$" + window.localStorage.getItem("bal"));
