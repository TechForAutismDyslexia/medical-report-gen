// export interface Form {
//     name: string;
//     dob: string;
//     dateOfAssesment: string;
//     ageOfAssesment: string;
//     gender: string;
//     school: string;
//     grade: string;
//     parents: string;
//     parentsEmail: string;
//     homeAddress: string;
// }

export class Form {
    name: string;
    dob: string;
    dateOfAssessment: string;
    ageOfAssessment: string;
    gender: string;
    school: string;
    grade: string;
    parents: string;
    parentsEmail: string;
    homeAddress: string;

    constructor(formData: {
        Name: string;
        "Date of Birth": string;
        "Date of Assessment": string;
        "Age at Assessment": string;
        Gender: string;
        School: string;
        Grade: string;
        "Home Address": string;
        Parents: string;
        "Parent's Email": string;
    }) {
        this.name = formData.Name;
        this.dob = formData["Date of Birth"];
        this.dateOfAssessment = formData["Date of Assessment"];
        this.ageOfAssessment = formData["Age at Assessment"];
        this.gender = formData.Gender;
        this.school = formData.School;
        this.grade = formData.Grade;
        this.parents = formData.Parents;
        this.parentsEmail = formData["Parent's Email"];
        this.homeAddress = formData["Home Address"];

        if (!this.name || !this.dob || !this.dateOfAssessment || !this.ageOfAssessment || !this.gender || !this.school || !this.grade || !this.parents || !this.parentsEmail || !this.homeAddress) {
            throw new TypeError("Invalid format. Missing required fields");
        }
    }
}

