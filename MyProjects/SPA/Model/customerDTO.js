function CustomerDTO(id,name,address,telNo){
    var __id=id;
    var __name=name;
    var __address=address;
    var __telNo=telNo;

    this.setCustomerId = function (id) {
        this.__id = id;
    }
    this.getCustomerId = function () {
        return this.__id;
    }
    this.setCustomerName = function (name) {
        this.__name = name;
    }
    this.getCustomerName = function () {
        return this.__name;
    }
    this.setCustomerAddress = function (address) {
        this.__address = address;
    }
    this.getCustomerAddress = function () {
        return this.__address;
    }
    this.setCustomerTelNo = function (telNo) {
        this.__contact = telNo;
    }
    this.getCustomerTelNo = function () {
        return this.__contact;
    }
}
