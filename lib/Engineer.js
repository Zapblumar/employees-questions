class Engineer extends Employee {
    constructor(github, role) {
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