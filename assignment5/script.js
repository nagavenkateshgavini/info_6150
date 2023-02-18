const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Congratulations you have reserved a seat", "success");
  });
}

function showValues(button) {
  console.log("printing..Id", button.id);
  if (button.id == "date") {
    console.log("entering");
    var test = document.querySelector("#renderDate");
    var check = document.querySelector(".display");

    test.classList.remove("initialdisplayDate");
    test.classList.add("displayDate");

    check.classList.remove("display");
    check.classList.add("collapseDisplay");
  }

  if (button.id == "filter") {
    console.log("entering...filter");
    var test = document.querySelector("#renderDate");
    var check = document.querySelector(".collapseDisplay");
    test.classList.remove("displayDate");
    test.classList.add("initialdisplayDate");
    check.classList.remove("collapseDisplay");
    check.classList.add("display");
  }
}

function changeThestatus(button) {
  if (button.id == "modal1") {
      let bookbutton = document.querySelector(".book1");
      
  }
}
