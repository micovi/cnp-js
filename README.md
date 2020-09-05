# CNP.JS

Romanian Personal Code (CNP) parser that verifies a number if is a valid CNP and returns age, genre, date of birth, place of birth

## Installation

```bash
npm install https://github.com/micovi/cnp-js
```

## Usage

```js
// Node JS require
const CNP = require("cnp-js");

// Import modules
import CNP from "cnp-js";

// Initialize
const cnp = new CNP(1910101235634);

isValid = cnp.valid === true;
```

# CNP Object

```js
CNP {
    cnp: number; // Provided number
    digits: string[] | undefined; // Array of CNP digits as strings
    valid: boolean = true; // True / False if provided CNP is valid
    error: Error | undefined; // Error containing validatio errors
    age: number | undefined; // Number of current Age
    dateOfBirth: Date | undefined; // Date object
    yearOfBirth: number | undefined; // Full year of birth
    monthOfBirth: number | undefined;  // Month of birth
    dayOfBirth: number | undefined; // Day of birth
    countyCode: string | undefined; // CountyCode of birth for romanian residents - for foreigners is the place where it was first created
    placeOfBirth: string | undefined; // Place of birth (County) for romanian residents - for foreigners is the place where it was first created
    genre: "M" | "F" | undefined; // Genre
    genreCode: number | undefined; // Genre code from CNP (1,2,3,4,5,6,7,8)
}
```
