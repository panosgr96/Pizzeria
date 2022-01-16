////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////<!-------------js.js------------->///////////////////////
///////////////////////////////////////////////////////////////////////////////////////

//Google Maps
function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(37.9894006, 23.741321),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

google.maps.event.addDomListener(window, 'dblclick', initialize);

//<!--Delivery,Pizza Generator-->
var total = 0;
var sale = 0;
var checkSale = 0;

function delivery() {

    total = parseInt(0);

    document.Form1.ttld.value = 3;

    var Divele = document.getElementById("ManualPizza").children;
    if (Divele != null){
        for (var i = 0; i < Divele.length; i++) {
            if (Divele[i].tagName === "INPUT" && Divele[i].type === "checkbox") {

                if (Divele[i].name === "Cheese"){
                    img = document.getElementById("cheese-layer");
                    img.style.visibility = "hidden";
                    if (Divele[i].checked) {
                        img.style.visibility = "visible";
                    }

                }

                if (Divele[i].name === "Salami") {
                    img = document.getElementById("top-layers3");
                    img.style.visibility = "hidden";
                    if (Divele[i].checked) {
                        img.style.visibility = "visible";
                    }

                }

                if (Divele[i].name === "Bacon") {
                    img = document.getElementById("top-layers5");
                    img.style.visibility = "hidden";
                    if (Divele[i].checked) {
                        img.style.visibility = "visible";
                    }

                }
                if (Divele[i].name === "Shrooms") {
                    img = document.getElementById("top-layers2");
                    img.style.visibility = "hidden";
                    if (Divele[i].checked) {
                        img.style.visibility = "visible";
                    }

                }
                if (Divele[i].name === "Peppers") {
                    img = document.getElementById("top-layers4");
                    img.style.visibility = "hidden";
                    if (Divele[i].checked) {
                        img.style.visibility = "visible";
                    }

                }

                if (Divele[i].name === "Tomatoes") {
                    img = document.getElementById("top-layers1");
                    img.style.visibility = "hidden";
                    if (Divele[i].checked) {
                        img.style.visibility = "visible";
                    }

                }

                if (Divele[i].name === "Cheese") {
                    img = document.getElementById("cheese-layer");
                    img.style.visibility = "hidden";
                    if (Divele[i].checked) {
                        img.style.visibility = "visible";
                    }

                }
                if (Divele[i].name === "Cheese") {
                    img = document.getElementById("cheese-layer");
                    img.style.visibility = "hidden";
                    if (Divele[i].checked) {
                        img.style.visibility = "visible";
                    }

                }
                if (Divele[i].checked) {
                    total += parseInt( Divele[i].value);
                }
            }
        }
    }

    var x = document.getElementById("mySelect").value;
    total = total * parseInt(x);
    
    if (total > 10)  {
        document.Form1.ttld.value = 2;
     }

    var y = document.getElementById("express");
    if (y != null) {
        if (y.checked) {
            document.Form1.ttld.value = parseInt(document.Form1.ttld.value) + 5;
        }
    }

    document.Form1.ttl.value = total;

}

//<!--Start with phase 1-->
function Intpage() {
    DisableForm("Form1", false);
    DisableForm("Form2", true);
    DisableForm("Form3", true);
    document.getElementById("Form2").style.display = "none";
    document.getElementById("Form3").style.display = "none";
}

function NextPage(elem){
    
    if (elem === "Form2"){
        DisableForm("Form1", true);
        DisableForm("Form2", false);
        DisableForm("Form3", true);
        document.getElementById("Form2").style.display = "block";
        
    }
    if (elem === "Form3") {
        DisableForm("Form1", true);
        DisableForm("Form2", true);
        DisableForm("Form3", false);
        document.getElementById("Form3").style.display = "block";
    }

}

function PreviousPage(elem) {

    if (elem === "Form1") {
        DisableForm("Form1", false);
        DisableForm("Form2", true);
        DisableForm("Form3", true);
    }
    if (elem === "Form2") {
        DisableForm("Form1", true);
        DisableForm("Form2", false);
        DisableForm("Form3", true);
    }
}

function DisableForm(Felemen, isDisabled) {
    var frm = document.forms[Felemen];
    for (var i = 0; i < frm.elements.length; i++) {
        frm.elements[i].disabled = isDisabled
    }
}

//<!--Validate and NextPage-->
function Formvalidate(Felemen , NextP){
    var frm = document.forms[Felemen];
    for (var i = 0; i < frm.elements.length; i++) {
        if (frm.elements[i].checkValidity() == false)
        {
            frm.elements[i].focus();
            frm.elements[i].select();
            return false;
        }
    }

    LastTotalWithoutSale();
    NextPage(NextP);
}

//<!--Validate and Confirm Form 3-->
function ValidateForm3(Felemen) {
    var frm = document.forms[Felemen];
    for (var i = 0; i < frm.elements.length; i++) {
        if (frm.elements[i].checkValidity() == false) {
            frm.elements[i].focus();
            frm.elements[i].select();
            return false;
        }
    }

    ConfirmPage();
}


//<!--Numbers Only-->
function numbersonly(myfield, e, dec) { 
    var key; 
    var keychar; 
    if (window.event) key = window.event.keyCode;
    else if (e) key = e.which;
    else return true;
    keychar = String.fromCharCode(key);
     if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) ) return true;
     else if ((("0123456789").indexOf(keychar) > -1)) return true;
     else if (dec && (keychar == ".")) {
         myfield.form.elements[dec].focus();
         return false;
     }
     else
         return false;
}

//<!--Random Pizza-->
function RandomPizza() {

    var checkboxList = document.getElementsByClassName("checkBox");
    var rands = [];

    var total = 4;

    for (var j = 0; j < checkboxList.length; j++) { checkboxList[j].checked = false; }

    for (var i = 0; i < total; i++) {
        var myRandom = getRand(rands, checkboxList.length);
        rands.push(myRandom);
    }

    for (var x = 0; x < rands.length; x++) {
        checkboxList[rands[x]].checked = true;
        delivery();
    }

}

//<!--Get random number-->
function getRand(exclude, max) {
    var dupe = true;
    var myRandom;

    while (dupe) {
        myRandom = Math.floor(Math.random() * max);

        var found = false;
        for (var i = 0; i < exclude.length; i++) {
            if (myRandom == exclude[i]) {
                found = true;
            }
        }

        if (!found) dupe = false;
    }

    return myRandom;
}

//<!--Sale and Total to Pay-->
function LastTotal(elemX) {
    if (checkSale === 1) {
        return ;
    }
    var table = document.getElementById("lotteryTable");
    checkSale = 1;
    
    //<!--Debugger OP--><!--Disable all Lottery buttons-->
    for (i = 0; i < table.rows.length; i++) {
        for (j = 0; j < table.rows[i].cells.length; j++) {
            for (k = 0; k < table.rows[i].cells[j].children.length; k++) {
                table.rows[i].cells[j].children[k].disabled = true;
                table.rows[i].cells[j].children[k].className = "LotteryDisable";
            }           
        }
    }

    var checkout = document.getElementById("lttl");

    sale = Math.floor(Math.random() * 5);
    
    if (sale > total) {
        sale = total;
    }

    var result = total + parseInt(document.Form1.ttld.value) - sale;
    checkout.value = result;

    elemX.children[0].innerText = sale + elemX.children[0].innerText;
}

function ConfirmPage() {

    alert(document.getElementById("confirmMessage").value);
    window.location.href = "page1.html";
}
    
function LastTotalWithoutSale() {
    var checkout = document.getElementById("lttl");
    var result = total + parseInt(document.Form1.ttld.value);
    checkout.value = result;
}