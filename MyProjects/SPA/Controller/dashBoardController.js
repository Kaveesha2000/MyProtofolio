$("#homeSection").css('display', 'block');
$("#customerSection").css('display', 'none');
$("#itemSection").css('display', 'none');
$("#placeOrderSection").css('display', 'none');

$("#homeBtn").click(function () {
    $("#homeSection").css('display', 'block');
    $("#customerSection").css('display', 'none');
    $("#itemSection").css('display', 'none');
    $("#placeOrderSection").css('display', 'none');
})

$("#customerBtn").click(function () {
    $("#homeSection").css('display', 'none');
    $("#customerSection").css('display', 'block');
    $("#itemSection").css('display', 'none');
    $("#placeOrderSection").css('display', 'none');
})

$("#itemBtn").click(function () {
    $("#homeSection").css('display', 'none');
    $("#customerSection").css('display', 'none');
    $("#itemSection").css('display', 'block');
    $("#placeOrderSection").css('display', 'none');

    $("#tblItem").empty();
    for (let i = 0; i < itemDB.length; i++) {
        var row = `<tr><td>${itemDB[i].itemId}</td><td>${itemDB[i].itemName}</td><td>${itemDB[i].itemUnitPrice}</td><td>${itemDB[i].itemQTYOnHand}</td></tr>`;
        console.log(row);
        $("#tblItem").append(row);
    }
})

$("#placeOrderBtn").click(function () {
    $("#homeSection").css('display', 'none');
    $("#customerSection").css('display', 'none');
    $("#itemSection").css('display', 'none');
    $("#placeOrderSection").css('display', 'block');
})

/*picture buttons*/

$("#customerpicBtn").click(function () {
    $("#homeSection").css('display', 'none');
    $("#customerSection").css('display', 'block');
    $("#itemSection").css('display', 'none');
    $("#placeOrderSection").css('display', 'none');
})

$("#itempicBtn").click(function () {
    $("#homeSection").css('display', 'none');
    $("#customerSection").css('display', 'none');
    $("#itemSection").css('display', 'block');
    $("#placeOrderSection").css('display', 'none');
})

$("#placeOrderpicBtn").click(function () {
    $("#homeSection").css('display', 'none');
    $("#customerSection").css('display', 'none');
    $("#itemSection").css('display', 'none');
    $("#placeOrderSection").css('display', 'block');
})
