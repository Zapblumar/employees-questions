const Intern = require('../lib/Intern');


describe('Person', () => {
    it('should be a name', () => {
        const intern = new Intern('sam', 13, "tpaggi23@aol.com", "minecon");
        //should be seperate tests
        expect(intern.name).toBe('sam');
    }),
        it('should be id', () => {
            const intern = new Intern('joe', 183, "tpaggi23@aol.com", "minecon")
            expect(intern.id).toEqual(expect.any(Number));
        }),
        it('should be an email', () => {
            const intern = new Intern('bill', 18, "tpaggi23@aol.com", "minecon")
            expect(intern.email).toBe('tpaggi23@aol.com');
        }),
        it("should be a school", () => {
            const intern = new Intern("john", 42, "tpaggi23@aol.com", "minecon")
            expect(intern.school).toEqual(expect.any(String));
        })
})