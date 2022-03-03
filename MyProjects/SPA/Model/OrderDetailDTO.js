function OrderDetailDTO(orderId, itemId, orderQty, total) {
    this.__oId = orderId;
    this.__itemId = itemId;
    this.__qty = orderQty;
    this.__total = total;

    this.setOrderid = function (orderId) {
        this.__oId = orderId;
    }
    this.getOrderid = function () {
        return this.__oId;
    }
    this.setItemCode = function (itemCode) {
        this.__itemId = itemCode;
    }
    this.getItemCode = function () {
        return this.__itemId;
    }
    this.setItemQty = function (orderQty) {
        this.__qty = orderQty;
    }
    this.getItemQty = function () {
        return this.__qty;
    }
    this.setTotAmount = function (totAmount) {
        this.__total = totAmount;
    }
    this.getTotAmount = function () {
        return this.__total;
    }
}