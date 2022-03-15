function CustomerDTO(id,name,address) {
    var __id;
    var __name;
    var __address;

    this.setId = function (id) {
        __id = id;
    }
    this.getId = function () {
        return __id;
    }
    this.setName = function (name) {
        __name = name;
    }
    this.getName = function () {
        return __name;
    }
    this.srtAddress = function (address) {
        __address = address;
    }
    this.getAddress = function () {
        return __address;
    }
}