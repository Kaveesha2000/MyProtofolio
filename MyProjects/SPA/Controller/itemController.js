//=========================================================================
//calling border colors
itemBorderColor();
//=========================================================================

//=========================================================================
// clearing text fields

function clearItemTextFields() {
    $("#itemId").val('');
    $("#itemName").val('');
    $("#itemUnitPrice").val('');
    $("#itemQTYOnHand").val('');
}

//=========================================================================
// border colors

function itemBorderColor() {
    $("#itemId").css('border', '2px solid black');
    $("#itemName").css('border', '2px solid black');
    $("#itemUnitPrice").css('border', '2px solid black');
    $("#itemQTYOnHand").css('border', '2px solid black');
}
//=========================================================================

//=========================================================================
//enter key press function of item
$("#itemId").keydown(function (event) {
    if ((event.keyCode == 13)) {
        $("#itemName").focus();
    }
});
$("#itemName").keydown(function (event) {
    if ((event.keyCode == 13)) {
        $("#itemUnitPrice").focus();
    }
});
$("#itemUnitPrice").keydown(function (event) {
    if ((event.keyCode == 13)) {
        $("#itemQTYOnHand").focus();
    }
});
//=========================================================================
/*Tab focus off*/
$('#itemId,#itemName,#itemUnitPrice,#itemQTYOnHand').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault(); // stop execution of the button
    }
});
//=========================================================================

// Item
/*selecting the button*/
//validation of item
const itemIDRegEx = /^(I00-)[0-9]{3,4}$/;
const itemNameRegEx = /^[A-z]{1,20}$/;
const itemUnitPriceRegEx = /^[0-9]{2,8}$/;
const itemQTYOnHand = /^[0-9]{1,10}$/;

$("#itemId").keyup(function () {

    let input = $("#itemId").val();

    if (itemIDRegEx.test(input)) {

        $("#itemId").css('border', '2px solid green');
        $("#errorItemid").text("");

    } else {

        $("#itemId").css('border', '2px solid red');
        $("#errorItemid").text("Wrong format : I00-001");
    }
});

$("#itemName").keyup(function () {

    let input = $("#itemName").val();

    if (itemNameRegEx.test(input)) {

        $("#itemName").css('border', '2px solid green');
        $("#errorItemname").text("");

    } else {

        $("#itemName").css('border', '2px solid red');
        $("#errorItemname").text("Wrong format");
    }
});

$("#itemUnitPrice").keyup(function () {

    let input = $("#itemUnitPrice").val();

    if (itemUnitPriceRegEx.test(input)) {

        $("#itemUnitPrice").css('border', '2px solid green');
        $("#errorItemUnitPrice").text("");

    } else {

        $("#itemUnitPrice").css('border', '2px solid red');
        $("#errorItemUnitPrice").text("Wrong format");
    }
});

$("#itemQTYOnHand").keyup(function () {

    let input = $("#itemQTYOnHand").val();

    if (itemQTYOnHand.test(input)) {

        $("#itemQTYOnHand").css('border', '2px solid green');
        $("#errorItemQTYOnHand").text("");

    } else {

        $("#itemQTYOnHand").css('border', '2px solid red');
        $("#errorItemQTYOnHand").text("Wrong format");
    }
});

//========================================================================
/* Row Click */
function rowClick() {
    //selecting the table row
    $("#tblItem > tr").click(function () {

        let itId = $(this).children(":eq(0)").text();
        let itName = $(this).children(":eq(1)").text();
        let itUnitPrice = $(this).children(":eq(2)").text();
        let itQtyOnHand = $(this).children(":eq(3)").text();

        console.log(itId, itName, itUnitPrice, itQtyOnHand);

        $("#itemId").val(itId);
        $("#itemName").val(itName);
        $("#itemUnitPrice").val(itUnitPrice);
        $("#itemQTYOnHand").val(itQtyOnHand);

    });
}
//========================================================================

/*Save On Action*/
$("#saveBtnItem").click(function () {

    saveItem();

    loadAllItems();

    itemBorderColor();

    // clearing the text fields
    clearItemTextFields();

});

/*Update On Action*/
$("#updateItem").click(function () {

})

/*Delete On Action*/
$("#deleteBtnItem").click(function () {
    deleteItem();
    loadAllItems();
})

/*Search On Action*/
$("#searchBtnItem").click(function () {
    var searchID = $("#exampleInputSearch1").val();

    var response = searchItem(searchID);
    if (response) {
        $("#itemId").val(response.itemId);
        $("#itemName").val(response.itemName);
        $("#itemUnitPrice").val(response.itemUnitPrice);
        $("#itemQTYOnHand").val(response.itemQTYOnHand);
    }else{
        clearItemTextFields();
        alert("No Such a Item");
    }
});

// Item CRUD Operation
function saveItem() {
    //gather customer information
    let itemId = $("#itemId").val();
    let itemName = $("#itemName").val();
    let itemUnitPrice = $("#itemUnitPrice").val();
    let itemQTYOnHand = $("#itemQTYOnHand").val();

    //making the item object
    var item = {
        itemId:itemId,
        itemName:itemName,
        itemUnitPrice:itemUnitPrice,
        itemQTYOnHand:itemQTYOnHand
    }

    itemDB.push(item);
    console.log(item);
}

function deleteItem() {
    var index = -1;

    for (var j = 0; j < itemDB.length; j++) {
        if ($('#tblItem>tr').itemId==(itemDB[j].itemId)){
            console.log(itemDB[j].itemId);
            index = j;
        }
    }

    itemDB.splice(index,1);

    // clearing the text fields
    clearItemTextFields();
}

function searchItem(id) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].itemId == id) {
            return itemDB[i];
        }
    }
}

function loadAllItems() {
    $("#tblItem").empty();
    for (let i = 0; i < itemDB.length; i++) {
        var row = `<tr><td>${itemDB[i].itemId}</td><td>${itemDB[i].itemName}</td><td>${itemDB[i].itemUnitPrice}</td><td>${itemDB[i].itemQTYOnHand}</td></tr>`;
        console.log(row);
        $("#tblItem").append(row);
    }

    //disabling the row addings
    $("#tblItem > tr").off('click');

    rowClick();

    $("#tblItem > tr").off('dblclick');

    $("#tblItem > tr").dblclick(function () {
        var index = -1;

        for (var j = 0; j < itemDB.length; j++) {
            if ($('#tblItem>tr').itemId==(itemDB[j].itemId)){
                console.log(itemDB[j].itemId);
                index = j;
            }
        }

        itemDB.splice(index,1);

        $(this).remove();

        // clearing the text fields
        clearItemTextFields();
    });
}