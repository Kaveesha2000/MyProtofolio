//=========================================================================
//calling border colors
customerBorderColor();
//=========================================================================

//=========================================================================
// clearing text fields
function clearCustomerTextFields() {
    $("#id").val('');
    $("#name").val('');
    $("#address").val('');
    $("#telNo").val('');
}

//=========================================================================
// border colors
function customerBorderColor() {
    $("#id").css('border', '2px solid black');
    $("#name").css('border', '2px solid black');
    $("#address").css('border', '2px solid black');
    $("#telNo").css('border', '2px solid black');
}

//=========================================================================

//=========================================================================
//enter key press function of customer
$("#id").keydown(function (event) {
    if ((event.keyCode == 13)) {
        $("#name").focus();
    }
});
$("#name").keydown(function (event) {
    if ((event.keyCode == 13)) {
        $("#address").focus();
    }
});
$("#address").keydown(function (event) {
    if ((event.keyCode == 13)) {
        $("#telNo").focus();
    }
});

//enter key press function of item
$("#id").keydown(function (event) {
    if ((event.keyCode == 13)) {
        $("#name").focus();
    }
});
$("#name").keydown(function (event) {
    if ((event.keyCode == 13)) {
        $("#address").focus();
    }
});
$("#address").keydown(function (event) {
    if ((event.keyCode == 13)) {
        $("#telNo").focus();
    }
});
//=========================================================================
/*Tab focus off*/
$('#id,#name,#address,#telNo').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault(); // stop execution of the button
    }
});
//=========================================================================

// Customer
/*selecting the button*/
//validation of customer
const cusIDRegEx = /^(C00-)[0-9]{3,4}$/;
const cusNameRegEx = /^[A-z ]{3,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusTelNoRegEx = /^[0-9]{10}$/;

$("#id").keyup(function () {

    let input = $("#id").val();

    if (cusIDRegEx.test(input)) {

        $("#id").css('border', '2px solid green');
        $("#errorid").text("");

    } else {

        $("#id").css('border', '2px solid red');
        $("#errorid").text("Wrong format : C00-001");
    }
});

$("#name").keyup(function () {

    let input = $("#name").val();

    if (cusNameRegEx.test(input)) {

        $("#name").css('border', '2px solid green');
        $("#errorname").text("");

    } else {

        $("#name").css('border', '2px solid red');
        $("#errorname").text("Wrong format");
    }
});

$("#address").keyup(function () {

    let input = $("#address").val();

    if (cusAddressRegEx.test(input)) {

        $("#address").css('border', '2px solid green');
        $("#erroraddress").text("");

    } else {

        $("#address").css('border', '2px solid red');
        $("#erroraddress").text("Wrong format");
    }
});

$("#telNo").keyup(function () {

    let input = $("#telNo").val();

    if (cusTelNoRegEx.test(input)) {

        $("#telNo").css('border', '2px solid green');
        $("#errortelNo").text("");

    } else {

        $("#telNo").css('border', '2px solid red');
        $("#errortelNo").text("Wrong format");
    }
});
//========================================================================
/*Row Click*/
function rowClick() {
    //selecting the table row
    $("#tblCustomer > tr").click(function () {

        let cusId = $(this).children(":eq(0)").text();
        let cusName = $(this).children(":eq(1)").text();
        let cusAddress = $(this).children(":eq(2)").text();
        let cusTelNo = $(this).children(":eq(3)").text();

        console.log(cusId, cusName, cusAddress, cusTelNo);

        $("#id").val(cusId);
        $("#name").val(cusName);
        $("#address").val(cusAddress);
        $("#telNo").val(cusTelNo);

    });
}
//=====================================================================
/*Save On Action*/
$("#saveBtn").click(function () {

    //gather customer information
    let customerId = $("#id").val();
    let customerName = $("#name").val();
    let customerAddress = $("#address").val();
    let customerTp = $("#telNo").val();

    //making the customer object
    var customer = {
        id:customerId,
        name:customerName,
        address:customerAddress,
        telNo:customerTp
    }

    customerDB.push(customer);
    console.log(customer);

    var row;

    for (var i = 0; i < customerDB.length; i++) {
        row = `<tr><td>${customerDB[i].id}</td><td>${customerDB[i].name}</td><td>${customerDB[i].address}</td><td>${customerDB[i].telNo}</td></tr>`;
        console.log(row);
    }

    $("#tblCustomer").append(row);

    customerBorderColor();

    // clearing the text fields
    clearCustomerTextFields();

    //rowClick();

    //disabling the row addings
    $("#tblCustomer > tr").off('click');

    $("#tblCustomer > tr").click(function () {

        let cusId = $(this).children(":eq(0)").text();
        let cusName = $(this).children(":eq(1)").text();
        let cusAddress = $(this).children(":eq(2)").text();
        let cusTelNo = $(this).children(":eq(3)").text();

        console.log(cusId, cusName, cusAddress, cusTelNo);

        $("#id").val(cusId);
        $("#name").val(cusName);
        $("#address").val(cusAddress);
        $("#telNo").val(cusTelNo);

    });

    $("#tblCustomer > tr").off('dblclick');

    $("#tblCustomer > tr").dblclick(function () {
        $(this).remove();

        // clearing the text fields
        clearCustomerTextFields();

    });

});

/*Update On Action*/
$("#updateBtn").click(function () {
    rowClick();

})
