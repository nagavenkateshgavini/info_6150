let firstname = document.getElementById("firstName");
let lastname = document.getElementById("lastName");
let email = document.getElementById("emailId");
let phonenumber = document.getElementById("phoneNumber");
let streetaddress1 = document.getElementById("streetAddress1");
let streetAddress2 = document.getElementById("streetAddress2");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zipcode = document.getElementById("zipcode");
let comments = document.getElementById("comments");

title = document.getElementsByName("title");
source = document.getElementsByName("source");
mylist = document.getElementById("mylist");
insert_later = document.getElementById("insert_later");
drinkselect = document.getElementById("drinkselect");
comments_drinksize = document.getElementById("comments_drinksize");
submit = document.getElementById("submit");
list_data = document.getElementById("list_data");

firstname.addEventListener("input", validate);
lastname.addEventListener("input", validate);
email.addEventListener("input", validate);
phonenumber.addEventListener("input", validate);
streetaddress1.addEventListener("input", validate);
streetAddress2.addEventListener("input", validate);
city.addEventListener("input", validate);
state.addEventListener("input", validate);
zipcode.addEventListener("input", validate);
comments.addEventListener("input", validate);
comments_drinksize.addEventListener("input", validate);

mylist.addEventListener("change", () => {
    value = mylist.value;
    insert_later.innerHTML = value;
    list_data.style.display = "block";
})

drinkselect.addEventListener("change", () => {
    let add_comms_ele = document.getElementById("additional_comm_sec");
    if(drinkselect.checked){
        add_comms_ele.style.display = "block";
    }
    else{
        add_comms_ele.style.display = "none";
    }
})

form = document.getElementById("details_form");
form.addEventListener('submit', check_on_submit);
form.addEventListener('reset', do_reset);

table = document.getElementById("table");

function do_reset() {
    form.reset();
    table_div = document.getElementById("table_div")
    table_div.style.display = "none";
    document.getElementById("list_data").style.display = "none";
}

let table_obj;
let table_data;
const show_table_in_page = (data="") => {
    if(!data){
        var ele = document.getElementsByName('title'); 
        let radio_inp;
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked) {
                radio_inp = ele[i].value;
                break;
            }
        }
    
        var ele = document.getElementsByName('source'); 
        let source_inp = "";
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked) {
                source_inp += ele[i].value + " ";
            }
        }
    
        const selectElement = document.querySelector('#mylist');
        let select_op = selectElement.value;
    
    
        table_obj = {
            "title": radio_inp,
            "firstName": document.getElementById("firstName").value,
            "lastName": document.getElementById("lastName").value,
            "emailId": document.getElementById("emailId").value,
            "phoneNumber": document.getElementById("phoneNumber").value,
            "streetAddress1": document.getElementById("streetAddress1").value,
            "streetAddress2": document.getElementById("streetAddress2").value,
            "city": document.getElementById("city").value,
            "state": document.getElementById("state").value,
            "zipcode": document.getElementById("zipcode").value,
            "comments": document.getElementById("comments").value,
            "hear": source_inp,
            "drinks": select_op,
            "drinks_comment": document.getElementById("comments_drinksize").value
        }
    }
    else{
        table_obj = data;
    }

    tbody = document.querySelector("#table tbody");
    tbody.children[0].children[1].innerHTML = table_obj.title;
    tbody.children[1].children[1].innerHTML = table_obj.firstName;
    tbody.children[2].children[1].innerHTML = table_obj.lastName;
    tbody.children[3].children[1].innerHTML = table_obj.emailId;
    tbody.children[4].children[1].innerHTML = table_obj.phoneNumber;
    tbody.children[5].children[1].innerHTML = table_obj.streetAddress1;
    tbody.children[6].children[1].innerHTML = table_obj.streetAddress2;
    tbody.children[7].children[1].innerHTML = table_obj.city;
    tbody.children[8].children[1].innerHTML = table_obj.state;
    tbody.children[9].children[1].innerHTML = table_obj.zipcode;
    tbody.children[10].children[1].innerHTML = table_obj.drinks + " - Large" + ", " + table_obj.drinks_comment;
    tbody.children[11].children[1].innerHTML = table_obj.hear;
    tbody.children[12].children[1].innerHTML = table_obj.comments;
    document.getElementById("table_div").style.display = "block";
    return table_obj;
}

function validateForm()
{
    var fields = [
        "firstName",
        "lastName",
        "emailId",
        "phoneNumber",
        "streetAddress1",
        "city",
        "state",
        "zipcode",
        "mylist",
        "comments"
    ]


    let show_table = true;
    for (let i = 0; i < fields.length; i++){
        element = fields[i];
        value = document.getElementById(fields[i]).value;
        if (value == "selectcard"){
            value = "";
        }
        
        type = "error_" + element;
        err_msg_ele = document.getElementById(type);
        if (!value){
            err_msg_ele.style.display = "block";
            show_table = false;
        }
        else{
            err_msg_ele.style.display = "none";
        }
    }

    return show_table;
}

function check_on_submit(event) {
    event.preventDefault();
    radio_elements = document.getElementsByName("title");
    radio_checked = false;

    for (let i = 0; i < radio_elements.length; i++){
        if(radio_elements[i].checked){
            radio_checked = true;
            break;
        }
    }

    let show_table = true;
    error_msg_ele = document.getElementById("error_title");
    if(!radio_checked){
        error_msg_ele.style.display = "block";
        show_table = false;
    }
    else{
        error_msg_ele.style.display = "none";
    }

    checkbox_elements = document.getElementsByName("source");
    checkbox_checked = false;

    for (let i = 0; i < checkbox_elements.length; i++){
        if(checkbox_elements[i].checked){
            checkbox_checked = true;
            break;
        }
    }

    error_msg_ele = document.getElementById("error_source");
    if(!checkbox_checked){
        error_msg_ele.style.display = "block";
        show_table = false;
    }
    else {
        error_msg_ele.style.display = "none";
    }

    show_table = validateForm();
    console.log(show_table);
    if (show_table){
        table_data = show_table_in_page();
        form.reset();
        show_table_in_page(table_data);
    }
    else {
        table_div = document.getElementById("table_div")
        table_div.style.display = "none";
    }
}

let regexName = /^[a-zA-Z]+$/;
let regexEmail = /([\w\.]+)@([\w\.])/;
let regexPhone = /\d{3}-\d{3}-\d{4}/;
let regexCity = /^[a-zA-Z]+$/;
let regexState = /^[a-zA-Z]+$/;
let regexZipcode = /^[0-9]{5}$/;


function validate(e) {
    let value = e.target.value;
    let type = this.id;
    let element = "error_" + type;

    switch(type){
        case "firstName":
            if(!value.trim().match(regexName)){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "none";
            }
            break;

        case "lastName":
            if(!value.trim().match(regexName)){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "none";
            }
            break;

        case "emailId":
            if(!value.trim().match(regexEmail)){
                document.getElementById(element).style.display = "block";
            }
            else{
                if(!value.trim().endsWith("northeastern.edu")){
                    document.getElementById(element).style.display = "block";
                }
                else{
                    document.getElementById(element).style.display = "none";
                } 
            }
            break;

        case "phoneNumber":
            if(!value.trim().match(regexPhone)){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "none";
            }
            break;
        
        case "phoneNumber":
            if(!value.trim().match(regexPhone)){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "none";
            }
            break;

        case "streetAddress1":
            if(!value.trim()){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "none";
            }
            break;

        case "city":
            if(!value.trim().match(regexCity)){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "none";
            }
            break;

        case "state":
            if(!value.trim().match(regexState)){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "none";
            }
            break;

        case "zipcode":
            if(!value.trim().match(regexZipcode)){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "none";
            }
            break;

        case "comments":
            if(!value.trim()){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "none";
            }
            break;

        case "comments_drinksize":
            if(!value.trim()){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "none";
            }
            break;
    }

}

