class Manager extends Employee {
    constructor(officeNumber, role) {
        this.officeNumber = officeNumber;
        this.role = role;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return this.role
    }

}