const Weather = function(data) {
    this.data = data
    this.error = []
}

Weather.prototype.validateUserInput = function () {
    if (!this.data) {
        this.error.push("Please enter the name of the city.")
       
    }
}

module.exports = Weather