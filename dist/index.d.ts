declare class CNP {
    cnp: Number;
    age: Number | undefined;
    dob: Date | undefined;
    genre: "M" | "F" | undefined;
    genreCode: Number | undefined;
    constructor(number: Number);
}
export default CNP;
