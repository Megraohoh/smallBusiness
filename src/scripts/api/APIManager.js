const $ = require("jquery")

const APIManager = Object.create(null, {
    getAllObjects: { //getAllObjects is a method because it's value is a function
        value: function (obj) {
            return $.ajax(`http://localhost:8088/${obj}`)
        }
    }
})

module.exports = APIManager