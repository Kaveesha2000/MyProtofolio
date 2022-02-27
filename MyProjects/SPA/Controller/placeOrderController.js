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