const courses = [
{code:"WDD130", subject:"WDD", credits:2, completed:true},
{code:"WDD131", subject:"WDD", credits:2, completed:true},
{code:"WDD231", subject:"WDD", credits:2, completed:false},
{code:"CSE111", subject:"CSE", credits:2, completed:false},
{code:"CSE210", subject:"CSE", credits:2, completed:false}
];

const courseContainer = document.getElementById("courses");
const creditDisplay = document.getElementById("credits");

function displayCourses(list){

courseContainer.innerHTML="";

list.forEach(course => {

const card = document.createElement("div");

card.textContent = course.code;

if(course.completed){
card.classList.add("completed");
}

courseContainer.appendChild(card);

});

const total = list.reduce((sum,course)=> sum + course.credits,0);
creditDisplay.textContent = total;

}

displayCourses(courses);

document.getElementById("all").addEventListener("click", ()=> displayCourses(courses));

document.getElementById("wdd").addEventListener("click", ()=> {
displayCourses(courses.filter(course => course.subject==="WDD"));
});

document.getElementById("cse").addEventListener("click", ()=> {
displayCourses(courses.filter(course => course.subject==="CSE"));
});
