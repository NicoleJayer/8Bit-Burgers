var sequelize = require("sequelize");


var sequelize = new sequelize("burger_bitdb", "root", "",{
    host: "localhost",
    port: 3306,
    dialect: "mysql",


        pool:{
            max: 5,
            min: 0,
            idle: 10000
        }

});


module.exports = sequelize;
