//generate order id
function generateOrderId() {

}

//load customer data to text field
$('#customerComboBox').click(function () {
    var customerId = $('#customerComboBox').val();
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == customerId) {
            $('#customerName').val(customerDB[i].name);
            $('#exampleInputTelephoneNo2').val(customerDB[i].telNo);
            $('#exampleInputAddress2').val(customerDB[i].address);
        }
    }
})

//load item data to text field
$('#itemComboBox').click(function () {
    var itemId = $('#itemComboBox').val();
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].itemId == itemId) {
            $('#exampleInputName2').val(itemDB[i].itemName);
            $('#exampleInputUnitPrice2').val(itemDB[i].itemUnitPrice);
            $('#exampleInputQtyOnHand2').val(itemDB[i].itemQTYOnHand);
        }
    }
})

//add to cart
$('#addBtn').click(function () {
    loadCart();
    clearTextFields();
})

//purchase
$('#purchaseBtn').click(function () {
    var cash = $('#exampleInputCash').val();
    var total = $('#exampleInputTotal').val();
    var discount = $('#discountComboBox').val();

    //calculating balance of the cash
    var balance = cash - (total - (total * discount / 100));

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

    var total = orderqty * price;
    qtyOnHand = qtyOnHand - orderqty;

    for (let i = 0; i < itemDB.length; i++) {
        if ($('#itemComboBox').val()==itemDB[i].itemId){
            itemDB[i].itemQTYOnHand = qtyOnHand;
            console.log(qtyOnHand);
        }
    }

    fullTotal = fullTotal + total;

    var row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${price}</td><td>${orderqty}</td><td>${total}</td></tr>`;
    console.log(row);
    $("#tblPlaceOrder").append(row);

    $('#exampleInputTotal').val(fullTotal);
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
})
