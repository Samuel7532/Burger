var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        })
    }
}

module.exports = burger;