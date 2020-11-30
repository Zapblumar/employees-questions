const Engineer = require('../lib/engineer');


describe('Person', () => {
    it('should be a name', () => {
        const engineer = new Engineer('tom', 15, "tpaggi23@aol.com", "jim@github.com");
        //should be seperate tests
        expect(engineer.name).toBe('tom');
    }),
        it('should be id', () => {
            const engineer = new Engineer('joe', 164, "tpaggi23@aol.com", "jim@github.com")
            expect(engineer.id).toEqual(expect.any(Number));
        }),
        it('should be an email', () => {
            const engineer = new Engineer('bill', 20, "tpaggi23@aol.com", "jim@github.com")
            expect(engineer.email).toBe('tpaggi23@aol.com');
        }),
        it('should be a github', () => {
            const engineer = new Engineer('jimmy', 32, "tpaggi23@aol.com", "jim@github.com")
            expect(engineer.github).toEqual("jim@github.com");
        })
})