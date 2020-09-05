class CNP {
    cnp: Number;
    age: Number | undefined;
    dob: Date | undefined;
    genre: "M" | "F" | undefined;
    genreCode: Number | undefined;

    constructor(number: Number) {
        this.cnp = number;
    }
}

export default CNP;