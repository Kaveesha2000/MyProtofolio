function Orders(orderId, customerId, date, discount, fullTotal) {
    this.__oId = orderId;
    this.__cId = customerId;
    this.__date = date;
    this.__discount = discount;
    this.__fullTotal = fullTotal;

    this.setOrderId = function (orderId) {
        this.__oId = orderId;
    }
    this.getOrderId = function () {
        return this.__oId;
    }
    this.setCustomerID = function (customerId) {
        this.__cId = customerId;
    }
    this.getCustomerID = function () {
        return this.__cId;
    }
    this.setDate = function (date) {
        this.__date = date;
    }
    this.getDate = function () {
        return this.__date;
    }
    this.setDiscount = function (discount) {
        this.__discount = discount;
    }
    this.getDiscount = function () {
        return this.__discount;
    }
    this.setTotal = function (fullTotal) {
        this.__fullTotal = fullTotal;
    }
    this.getTotal = function () {
        return this.__fullTotal;
    }
}