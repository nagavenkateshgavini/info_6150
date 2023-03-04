$(document).ready(() => {
  $("#loginform").submit((e) => {
    e.preventDefault();
    let name = $("#uname").val();
    let email = $("#emailid").val();
    let password = $("#password").val();
    let regex = new RegExp("[a-z0-9\.]+@northeastern.edu");
    let user_name_regex = new RegExp("^[A-Za-z0-9]");

    if (name.length < 5 || !user_name_regex.test(name) || !regex.test(email) || password.length < 9) {
      if (name.length < 5 || !user_name_regex.test(name)) {
        if (!$("#uname").hasClass("invalid"))
        {
          $("#uname").addClass("invalid");
          if (name.length < 5) {
            $("#uname").after(
              "<span id='name_error' class='error'>Please enter atleast 4 characters for the username</span>"
            );
          } else if (!user_name_regex.test(name)) {
            $("#uname").after(
              "<span id='name_error' class='error'>Please enter a valid user name</span>"
            );
          }
        }
      }
      else {
        $("#uname").removeClass("invalid");
        $("#name_error").remove();
      }

      if (!regex.test(email)) {
        if (!$("#emailid").hasClass("invalid"))
        {
          $("#emailid").addClass("invalid");
          $("#emailid").after(
            "<span id='email_error' class='error'>Please enter a valid emailid ending with school.edu</span>"
          );
        }
      }
      else {
        $("#emailid").removeClass("invalid");
        $("#email_error").remove();
      }

      if (password.length < 9) {
        if (!$("#password").hasClass("invalid"))
        {
          $("#password").addClass("invalid");
          $("#password").after(
            "<span id='password_error' class='error'>Password must be minimum of 8 characters length</span>"
          );
        }
      }
      else {
        $("#password").removeClass("invalid");
        $("#password_error").remove();
      }
    }

    else {
      localStorage.setItem("uname", name);
      window.location = "calci.html";
    }
  });
});
