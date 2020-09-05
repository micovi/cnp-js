"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require('moment').default;
var countyCodes = {
    '01': "Alba",
    '29': "Prahova"
};
var CNP = /** @class */ (function () {
    function CNP(number) {
        this.valid = true;
        this.cnp = number;
        // Validate if is a number
        if (typeof this.cnp !== 'number') {
            this.valid = false;
            this.error = new Error('You have to provide a number for CNP');
            throw this.error;
        }
        // Validate if has 13 characters
        if (this.cnp.toString().length !== 13) {
            this.valid = false;
            this.error = new Error('Invalid CNP length (not 13 characters)');
            throw this.error;
        }
        // Generate the CNP array
        this.digits = this.cnp.toString().split("");
        // Set genre and genre code0 -- #TODO: validation
        this.genreCode = parseInt(this.digits[0]);
        this.genre = this.genreCode % 2 === 0 ? "F" : "M";
        // Calculate dateOfBirth, year, month and day -- #TODO: validation
        var shortYear = parseInt(this.digits[1] + this.digits[2]);
        this.yearOfBirth = 2000 + shortYear;
        if (shortYear > parseInt(new Date().getFullYear().toString().substr(-2))) {
            this.yearOfBirth = 1900 + shortYear;
        }
        this.monthOfBirth = parseInt(this.digits[3] + this.digits[4]);
        this.dayOfBirth = parseInt(this.digits[5] + this.digits[6]);
        this.dateOfBirth = new Date(this.yearOfBirth + "-" + this.monthOfBirth + "-" + this.dayOfBirth + " 12:00");
        // Validate and set place of birth
        this.countyCode = this.digits[7] + this.digits[8];
        if (parseInt(this.countyCode) < 0 || parseInt(this.countyCode) > 52) {
            this.valid = false;
            this.error = new Error('Invalid county code - digits [8,9]');
            throw this.error;
        }
        this.placeOfBirth = countyCodes[this.countyCode];
        //const controlNumber = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9]
    }
    return CNP;
}());
exports.default = CNP;
