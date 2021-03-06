const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email, role)
        this.github = github;
        this.role = role;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return this.role
    }

}

module.exports = Engineer