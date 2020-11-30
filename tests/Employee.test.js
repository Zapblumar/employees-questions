const Employee = require('../lib/Employee');


describe('Person', () => {
    it('should be a name', () => {
        const employee = new Employee('tylor', 13, "tpaggi23@aol.com");
        //should be seperate tests
        expect(employee.name).toBe('tylor');
    }),
        it('should be id', () => {
            const employee = new Employee('joe', 183, "tpaggi23@aol.com")
            expect(employee.id).toEqual(expect.any(Number));
        }),
        it('should be an email', () => {
            const employee = new Employee('bill', 18, "tpaggi23@aol.com")
            expect(employee.email).toBe('tpaggi23@aol.com');
        })
})