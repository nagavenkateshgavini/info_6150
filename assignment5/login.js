$(document).ready(function(){
    $(".login").click(function(){
      $(".signup-form").hide();
      $(".login-form").fadeIn();
    });
    $(".signup").click(function(){
        $(".login-form").hide();
        $(".signup-form").fadeIn();
    });
  });