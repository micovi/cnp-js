declare class CNP {
    cnp: number;
    digits: string[] | undefined;
    valid: boolean;
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
    constructor(number: number);
}
export default CNP;
