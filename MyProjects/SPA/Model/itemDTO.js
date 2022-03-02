function ItemDTO(id,name,unitPrice,qtyOnHand){
    var __id=id;
    var __name=name;
    var __unitPrice=unitPrice;
    var __qtyOnHand=qtyOnHand;

    this.setetItemId = function (id) {
        this.__id = id;
    }
    this.getItemId = function () {
        return this.__id;
    }
    this.setItemName = function (name) {
        this.__name = name;
    }
    this.getItemName = function () {
        return this.__name;
    }
    this.setItemUnitPrice = function (unitPrice) {
        this.__unitPrice = unitPrice;
    }
    this.getItemUnitPrice = function () {
        return this.__unitPrice;
    }
    this.setQtyOnHand = function (qtyOnHand) {
        this.__qtyOnHand = qtyOnHand;
    }
    this.getQtyOnHand = function () {
        return this.__qtyOnHand;
    }
}
