const $ = require("jquery")

const APIManager = Object.create(null, {
    getAllObjects: { //getAllObjects is a method because it's value is a function
        value: function (resource) {
            return $.ajax(`http://localhost:8088/${resource}`)
        }
    }
})
module.exports = APIManager