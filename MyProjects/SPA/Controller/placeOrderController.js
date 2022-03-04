//generate order id
function generateOrderId() {
    $("#exampleInputId2").val("O00-0001");
    var orderId = orderDB[orderDB.length - 1].getOrderId();
    var tempId = parseInt(orderId.split("-")[1]);
    tempId = tempId + 1;
    if (tempId <= 9) {
        $("#exampleInputId2").val("O00-000" + tempId);
    } else if (tempId <= 99) {
        $("#exampleInputId2").val("O00-00" + tempId);
    } else if (tempId <= 999) {
        $("#exampleInputId2").val("O00-0" + tempId);
    } else {
        $("#exampleInputId2").val("O00-" + tempId);
    }
}

//load customer data to text field
$('#customerComboBox').click(function () {
    var customerId = $('#customerComboBox').val();
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerId() == customerId) {
            $('#customerName').val(customerDB[i].getCustomerName());
            $('#exampleInputTelephoneNo2').val(customerDB[i].getCustomerTelNo());
            $('#exampleInputAddress2').val(customerDB[i].getCustomerAddress());
        }
    }
})

//load item data to text field
$('#itemComboBox').click(function () {
    var itemId = $('#itemComboBox').val();
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemId() == itemId) {
            $('#exampleInputName2').val(itemDB[i].getItemName());
            $('#exampleInputUnitPrice2').val(itemDB[i].getItemUnitPrice());
            $('#exampleInputQtyOnHand2').val(itemDB[i].getQtyOnHand);
        }
    }
})

//add to cart
$('#addBtn').click(function () {
    checkOrderQtyAndAddToCart();
})

//purchase
$('#purchaseBtn').click(function () {
    var oId = $('#exampleInputId2').val();
    var cId = $('#customerComboBox').val();
    var date = $('#exampleInputDate').val();
    var cash = $('#exampleInputCash').val();
    var total = $('#exampleInputTotal').val();
    var discount = $('#discountComboBox').val();

    var tblItemId;
    var tblItemName;
    var tblItemPrice;
    var tblItemQty;
    var tblItemTotal;

    //calculating balance of the cash
    var balance = cash - (total - (total * discount / 100));

    for (let i = 0; i < $('#tblPlaceOrder tr').length; i++) {
        tblItemId = $("#tblPlaceOrder tr").children(':nth-child(1)')[i].innerText;
        tblItemName = $('#tblPlaceOrder tr').children(':nth-child(2)')[i].innerText;
        tblItemPrice = $('#tblPlaceOrder tr').children(':nth-child(3)')[i].innerText;
        tblItemQty = $('#tblPlaceOrder tr').children(':nth-child(4)')[i].innerText;
        tblItemTotal = $('#tblPlaceOrder tr').children(':nth-child(5)')[i].innerText;

        var orderDetailDTO = new OrderDetailDTO(oId, tblItemId, tblItemQty, tblItemTotal);
        orderDetailsDB.push(orderDetailDTO);
    }

    var orderDTO = new OrderDTO(oId, cId, date, discount, fullTotal);
    orderDB.push(orderDTO);

    $('#exampleInputBalance').val(balance);
    clearTextFields();
})

//load cart
var fullTotal = 0;

function loadCart() {
    var itemCode = $('#itemComboBox').val();
    var itemName = $('#exampleInputName2').val();
    var price = $('#exampleInputUnitPrice2').val();
    var orderqty = $('#exampleInputOrderQty').val();
    var qtyOnHand = $('#exampleInputQtyOnHand2').val();

    var total = 0;
    qtyOnHand = qtyOnHand - orderqty;

    //updating qty
    for (let i = 0; i < itemDB.length; i++) {
        if ($('#itemComboBox').val() == itemDB[i].getItemId()) {
            itemDB[i].setQtyOnHand(qtyOnHand);
            console.log(qtyOnHand);
        }
    }
    //checking duplicates
    var newQty = 0;
    var newTotal = 0;

    //first check duplicates
    if (!checkDuplicates(itemCode)) {
        total = orderqty * price;
        fullTotal = fullTotal + total;
        var row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${price}</td><td>${orderqty}</td><td>${total}</td></tr>`;
        $("#tblPlaceOrder").append(row);
        $('#exampleInputTotal').val(fullTotal);
    } else {
        var rowNo = checkDuplicates(itemCode).rowNumber;
        newQty = parseInt($('#exampleInputOrderQty').val());
        var oldQty = parseInt($($('#tblPlaceOrder tr').eq(rowNo).children(":eq(3)")).text());
        console.log(oldQty);
        var newQty1 = newQty + oldQty;
        newTotal = newQty * price;
        var newTotal1 = newQty1 * price;
        fullTotal = fullTotal + newTotal;
        //update the row
        $('#tblPlaceOrder tr').eq(rowNo).children(":eq(0)").text(itemCode);
        $('#tblPlaceOrder tr').eq(rowNo).children(":eq(1)").text(itemName);
        $('#tblPlaceOrder tr').eq(rowNo).children(":eq(2)").text(price);
        $('#tblPlaceOrder tr').eq(rowNo).children(":eq(3)").text(newQty1);
        $('#tblPlaceOrder tr').eq(rowNo).children(":eq(4)").text(newTotal1);
        $('#exampleInputTotal').val(fullTotal);
    }
    //$('#exampleInputTotal').val(fullTotal);
}

//clearing the text fields
function clearTextFields() {
    $('#exampleInputName2,#exampleInputUnitPrice2,#exampleInputQtyOnHand2,#exampleInputOrderQty').val('');
    $('#itemComboBox').val('None');
}

//clearing the text fields
function clearTableAndFinalTotals() {
    $('#exampleInputTotal,#exampleInputCash,#exampleInputBalance,#exampleInputId2,#exampleInputDate,#customerName,#exampleInputTelephoneNo2,#exampleInputAddress2').val('');
    $('#discountComboBox').val('0.00');
    $('#customerComboBox').val('None');
    $('#tblPlaceOrder').empty();
}

//clearing whole order
$('#clearBtn').click(function () {
    clearTextFields();
    clearTableAndFinalTotals();
    generateOrderId();
})

//checking duplicates
function checkDuplicates(itemCode) {
    for (let i = 0; i < $('#tblPlaceOrder tr').length; i++) {
        // get the first row
        //not working at the first time
        if (itemCode == $('#tblPlaceOrder').children().eq(i).children().eq(0).text()) {
            return {
                "rowNumber": i
            };
            break;
        }
    }
    return false;
}

//checking order qty
function checkOrderQtyAndAddToCart() {
    var qtyOnHand = $('#exampleInputQtyOnHand2').val();
    var orderQty =$('#exampleInputOrderQty').val();
    if (orderQty > qtyOnHand) {
        alert(orderQty+' order quantity is exceed than quantity on hand...! Try Again...');
        $('#exampleInputOrderQty').val('');
    }else {
        loadCart();
        clearTextFields();
    }
}