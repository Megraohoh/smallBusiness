const APIManager = require("./api/APIManager")
$(document).ready(function(){
    //Write function to loop through database.json and create DOM elements
    const employeeCardDisplay = APIManager.getAllObjects("Employees").then(employees => {
        employees.forEach(currentEmployee => {
            //Use jQuery to reference html element
            const output = $("#output")
            //Create article element for employee card
            const employeeArticleEl = document.createElement("article")
            employeeArticleEl.setAttribute("class", "employee")
            //Append to DOM output element
            output.append(employeeArticleEl)
            //Create header element to list employee name
            const employeeHeader = document.createElement("header")
            employeeHeader.setAttribute("class", "employee_name")
            //Append to article element
            employeeArticleEl.append(employeeHeader)
            //Create h1 element and add the value of current employee's name
            const employeeName = document.createElement("h1")
            employeeName.textContent = `${currentEmployee.name}`
            console.log(`${currentEmployee.name}`)
            //Append to article element
            employeeHeader.append(employeeName)

            //Create section element for the employee's department
            const employeeDepartmentSection = document.createElement("section")
            employeeDepartmentSection.setAttribute("class", "employee_department")
            employeeDepartmentSection.textContent = "Works in the " + `${currentEmployee.}`
        });
    })
})
/* <article class="employee">
    <header class="employee__name">
        <h1>Rainu Ittycheriah</h1>
    </header>
    <section class="employee__department">
        Works in the IT department
    </section>
    <section class="employee__computer">
        Currently using a 2015 MacBook Pro
    </section>
</article> */