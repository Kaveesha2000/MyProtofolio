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