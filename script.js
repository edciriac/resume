// loop each article from container2 and add animation duration or delay by 0.5s to make them appear "one by one"

projects = document.getElementsByClassName('container2')[0].children;
function test(e){
    // e.currentTarget.classList.add('scaleUp');
    // e.currentTarget.transition = "all 0.3s ease-in";
    // e.currentTarget.animationName = "appear";
    // e.currentTarget.style.animationDuration = 2 + "s";
}
let dur = 2;
for (const project of projects) {
    project.style.animationName = "appear";
    project.style.animationDuration = dur + "s";
    // project.style.animationDelay = "2s";
    dur += 1.1;

    // project.addEventListener("mouseenter", () => project.);
    // project.addEventListener("mouseleave", test);
    
}
// // console.log("Test");

// console.log(projects);