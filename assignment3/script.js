var myTable = document.getElementById("myTable");
var globalRowsCount = myTable.rows.length;
var addNewBtn = document.getElementById("addNewBtn");

function showInitialTable() {
    for (var i=1; i < myTable.rows.length; i += 2){
        myTable.rows[i].innerHTML += "<td></td>"
    }

    for (var i=2; i < myTable.rows.length; i += 2){
        myTable.rows[i].style.display = "none";
    }

    myTable.rows[0].innerHTML += "<th>EDIT</th>";
}

showInitialTable();

function updateTable() {
    var count = 0;
    for (let i = 1; i < myTable.rows.length; i += 2){
        if (myTable.rows[i].cells[0].children[0].checked){
            myTable.rows[i].style.backgroundColor = "yellow";
            myTable.rows[i].cells[8].innerHTML = "<button>Delete</button>";
            myTable.rows[i].cells[9].innerHTML = "<button>Edit</button>";
            count++;
        }
        else{
            myTable.rows[i].style.backgroundColor = "white";
            myTable.rows[i].cells[8].innerHTML = "";
            myTable.rows[i].cells[9].innerHTML = "";
        }
    }

    if (count > 0){
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").style.backgroundColor = "orange";
        document.getElementById("submitBtn").style.color = "black";
        for (var i = 0; i < myTable.rows.length; i++) {
            for (var j = 0; j < myTable.rows[i].cells.length; j++) {
              myTable.rows[i].cells[j].style.display = "";
            }
          }
    }
    else{
        document.getElementById("submitBtn").disabled = true;
        document.getElementById("submitBtn").style.backgroundColor = "grey";
        document.getElementById("submitBtn").style.color = "white";
        for (var i = 0; i < myTable.rows.length; i++) {
            for (var j = 0; j < myTable.rows[i].cells.length; j++) {
              myTable.rows[i].cells[j].style.display = "";
              if (j == 8 || j == 9) myTable.rows[i].cells[j].style.display = "none";
            }
        }
    }
}

updateTable();

function showNextCol(colNum) {
    if (myTable.rows[colNum + 1].style.display == "none"){
        myTable.rows[colNum + 1].style.display = "";
    }
    else{
        myTable.rows[colNum + 1].style.display = "none";
    }
}

function addEventListeners() {
    console.log("addEventListeners", myTable.rows.length);
    for (let i = 1; i < myTable.rows.length; i += 2) {
      myTable.rows[i].cells[0].children[0].addEventListener("click", updateTable);
      myTable.rows[i].cells[0].children[3].addEventListener("click", () => {
        showNextCol(i);
      });
      myTable.rows[i].cells[8].addEventListener("click", () => {
        myTable.rows[i].remove();
        myTable.rows[i].remove();
        updateTable();
      });
      myTable.rows[i].cells[9].addEventListener("click", () => {
        prompt("Edit Details");
      });
    }
}

for (let i = 1; i < myTable.rows.length; i += 2){
    myTable.rows[i].cells[0].children[0].addEventListener("click", updateTable);

    myTable.rows[i].cells[0].children[3].addEventListener("click", () => {
        showNextCol(i);
    });

    myTable.rows[i].cells[8].addEventListener("click", () => {
        myTable.rows[i].remove();
        myTable.rows[i].remove();
        updateTable();
    })

    myTable.rows[i].cells[9].addEventListener("click", () => {
        prompt("Update the details");
    })
}

addNewBtn.addEventListener("click", () => {
    myTable.innerHTML += `
        <tr>
          <td>
            <input type="checkbox"><br><br>
            <img src="images/down.png" width="25px">
          </td>
          <td>Student ${Math.floor(++globalRowsCount / 2)}</td>
          <td>Teacher ${Math.floor(globalRowsCount++ / 2)}</td>
          <td>Approved</td>
          <td>Fall</td>
          <td>TA</td>
          <td>${Math.floor(Math.random() * 10000) + 10000}</td>
          <td>100%</td>
          <td></td>
          <td></td>
        </tr>
        <tr style="display:none" class="dropDownTextArea">
          <td colspan="8">
            Advisor:<br><br>
            Award Details<br>
            Summer 1-2014(TA)<br>
            Budget Number: <br>
            Tuition Number: <br>
            Comments:<br><br><br>
            Award Status:<br><br><br>
          </td>
        </tr>`;
    updateTable();
    addEventListeners();
    alert("Record Added Successfully");
});
  