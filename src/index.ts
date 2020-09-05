const moment = require('moment').default;

interface countyCodesObject {
    [key: string]: string;
}

const countyCodes: countyCodesObject = {
    "01": "Alba",
    "02": "Arad",
    "03": "Argeș",
    "04": "Bacău",
    "05": "Bihor",
    "06": "Bistrița-Năsăud",
    "07": "Botoșani",
    "08": "Brașov",
    "09": "Brăila",
    "10": "Buzău",
    "11": "Caraș-Severin",
    "12": "Cluj",
    "13": "Constanța",
    "14": "Covasna",
    "15": "Dâmbovița",
    "16": "Dolj",
    "17": "Galați",
    "18": "Gorj",
    "19": "Harghita",
    "20": "Hunedoara",
    "21": "Ialomița",
    "22": "Iași",
    "23": "Ilfov",
    "24": "Maramureș",
    "25": "Mehedinți",
    "26": "Mureș",
    "27": "Neamț",
    "28": "Olt",
    "29": "Prahova",
    "30": "Satu Mare",
    "31": "Sălaj",
    "32": "Sibiu",
    "33": "Suceava",
    "34": "Teleorman",
    "35": "Timiș",
    "36": "Tulcea",
    "37": "Vaslui",
    "38": "Vâlcea",
    "39": "Vrancea",
    "40": "București",
    "41": "București",
    "42": "București",
    "43": "București",
    "44": "București",
    "45": "București",
    "46": "București",
    "51": "Călărași",
    "52": "Giurgiu"
};

class CNP {
    cnp: number;
    digits: string[] | undefined;
    valid: boolean = true;
    error: Error | undefined;
    age: number | undefined;
    dateOfBirth: Date | undefined;
    yearOfBirth: number | undefined;
    monthOfBirth: number | undefined;
    dayOfBirth: number | undefined;
    countyCode: string | undefined;
    placeOfBirth: string | undefined;
    genre: "M" | "F" | undefined;
    genreCode: number | undefined;

    constructor(number: number) {
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
        const shortYear = parseInt(this.digits[1] + this.digits[2]);

        this.yearOfBirth = 2000 + shortYear;

        if (shortYear > parseInt(new Date().getFullYear().toString().substr(-2))) {
            this.yearOfBirth = 1900 + shortYear;
        }

        this.monthOfBirth = parseInt(this.digits[3] + this.digits[4]);
        this.dayOfBirth = parseInt(this.digits[5] + this.digits[6]);
        this.dateOfBirth = new Date(`${this.yearOfBirth}-${this.monthOfBirth}-${this.dayOfBirth} 12:00`);


        // Validate and set place of birth
        this.countyCode = this.digits[7] + this.digits[8];

        if (parseInt(this.countyCode) < 0 || parseInt(this.countyCode) > 52) {
            this.valid = false;
            this.error = new Error('Invalid county code - digits [8,9]');
            throw this.error;
        }

        this.placeOfBirth = countyCodes[this.countyCode];
    }
}

export default CNP;