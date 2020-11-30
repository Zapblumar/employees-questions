const fs = require('fs');
const inquirer = require("inquirer")
//const generateMarkdown = require("./scr/generatepage");
const EmployeeQUestions = require('./lib/EmployeeQuestions');
const EngineerQUestions = require('./lib/EngineerQuestions');
const managerQUestions = require('./lib/managerQuestions');
const InternQUestions = require('./lib/InternQuestions');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const employees = []
const employmet = async () => {
    await inquirer.prompt(
        {
            type: 'confirm',
            name: 'manager',
            message: "Are you the manager?"
        })

        .then(({ manager }) => {
            if (manager === true) {
                inquirer.prompt(managerQUestions)
                    .then((Employee) => {
                        this.manager = new Manager(Employee.name, Employee.id, Employee.email, Employee.role = "Manager", Employee.officeNumber)
                        employees.push(this.manager)
                        getemploy()
                    })
                //.then(anwser )=
            } else { console.log('done') }

            const getemploy = () => {
                inquirer.prompt(
                    {
                        type: 'confirm',
                        name: 'employee',
                        message: "Do you have an employee?"
                    })
                    .then(({ employee }) => {
                        if (employee) {
                            inquirer.prompt(EmployeeQUestions)
                                .then((employee) => {
                                    this.employee = new Employee(employee.name, employee.id, employee.email, employee.role = "Employee")
                                    employees.push(this.employee)
                                    getmoney()


                                })
                        }
                    })

                const getmoney = () => {
                    inquirer.prompt(
                        {
                            type: 'confirm',
                            name: 'engineer',
                            message: "do you have an engineer?"
                        })
                        .then(({ engineer }) => {
                            if (engineer) {
                                inquirer.prompt(EngineerQUestions)
                                    .then((employee) => {
                                        this.engineer = new Engineer(employee.name, employee.id, employee.email, employee.role = "Engineer", employee.github)
                                        employees.push(this.engineer)
                                        getfucked()


                                    })

                            }

                            const getfucked = () => {
                                inquirer.prompt(
                                    {
                                        type: 'confirm',
                                        name: 'intern',
                                        message: "Do you have an intern?"
                                    })
                                    .then(({ intern }) => {
                                        if (intern) {
                                            inquirer.prompt(InternQUestions)
                                        }
                                    })
                            }
                        })
                }
            }

        })
}




employmet()

