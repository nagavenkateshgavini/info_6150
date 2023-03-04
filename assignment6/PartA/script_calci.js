$(document).ready(() => {
  let name = window.localStorage.getItem("uname");

  $("#header").append(" " + name +" ," + " How are you !!");

  $("#num1").keyup((e) => {
    if ($.isNumeric($("#num1").val()) == false) {
      alert("Please enter a valid number in the textbox");
      $("#num1").val("");
    }
  });

  $("#num2").keyup((e) => {
    if ($.isNumeric($("#num2").val()) == false) {
      alert("Please enter a valid number in the textbox");
      $("#num2").val("");
    }
  });

  $("#add").click((e) => {
    if ($("#num1").val() == "" || $("#num2").val() == "") {
      alert("Please enter the numbers before adding them");
      return;
    }

    let num1 = parseInt($("#num1").val());
    let num2 = parseInt($("#num2").val());
    let result = num1 + num2;
    $("#result").val(result);
  });

  $("#subtract").click((e) => {
    if ($("#num1").val() == "" || $("#num2").val() == "") {
      alert("Please enter a valid number in the textbox");
      return;
    }
    let num1 = parseInt($("#num1").val());
    let num2 = parseInt($("#num2").val());
    let result = num1 - num2;
    $("#result").val(result);
  });

  $("#multiply").click((e) => {
    if ($("#num1").val() == "" || $("#num2").val() == "") {
      alert("Please enter a valid number in the textbox");
      return;
    }
    let num1 = parseInt($("#num1").val());
    let num2 = parseInt($("#num2").val());
    let result = num1 * num2;
    $("#result").val(result);
  });

  $("#divide").click((e) => {
    if ($("#num1").val() == "" || $("#num2").val() == "") {
      alert("Please enter a valid number in the textbox");
      return;
    }

    let num1 = parseInt($("#num1").val());
    let num2 = parseInt($("#num2").val());
    let result = num1 / num2;
    $("#result").val(result);
  });
});
