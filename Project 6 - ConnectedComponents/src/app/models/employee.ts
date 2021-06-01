export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    salary: number;

    constructor(newId: number, newFirst: string, newLast: string, newGender: string, newSalary: number){
        this.id = newId;
        this.firstName = newFirst;
        this.lastName = newLast;
        this.gender = newGender;
        this.salary = newSalary;
    }
}