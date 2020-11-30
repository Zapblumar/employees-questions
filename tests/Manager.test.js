const Manager = require('../lib/Manager');


describe('Person', () => {
    it('should be a name', () => {
        const manager = new Manager('dill', 13, "tpaggi23@aol.com", 72);
        //should be seperate tests
        expect(manager.name).toBe('dill');
    }),
        it('should be id', () => {
            const manager = new Manager('joe', 183, "tpaggi23@aol.com", 72)
            expect(manager.id).toEqual(expect.any(Number));
        }),
        it('should be an email', () => {
            const manager = new Manager('bill', 18, "tpaggi23@aol.com", 72)
            expect(manager.email).toBe('tpaggi23@aol.com');
        }),
        it("should be an officeNumber", () => {
            const manager = new Manager("lily", 25, "tpaggi23@aol.com", 72)
            expect(manager.officeNumber).toEqual(expect.any(Number));
        })
})