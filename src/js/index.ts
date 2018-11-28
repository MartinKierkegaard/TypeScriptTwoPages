interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
let btn1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("page1");

let btn2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("page2");
element.innerHTML = greeter(user);

btn1.addEventListener('click', page1);
btn2.addEventListener('click', page2);


function page1(): void {
    let html = "";
    html = "<h1>Page 1</h1> ";
    html += "<h2>Er nu på side 1</h2>";

    element.innerHTML = html;
}

function page2(): void {
    let html = "";
    html = "<h3>Page 2</h3> ";
    html += "<h4>Er nu på side 2</h4>";

    element.innerHTML = html;
}
