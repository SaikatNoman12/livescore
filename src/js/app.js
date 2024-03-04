const stepsSlide = document.getElementById("steps-slide");
const resultPage = document.getElementById("result-page");
const steps = document.querySelectorAll(".test-steps .step");
const stepChoiceList = document.querySelectorAll(".step .choice-list li a");
let resultObj = [];

if (steps.length > 0){
    steps[0].classList.add("active");
}

if (resultPage !== null){
    resultPage.parentNode.style.backgroundColor = "#000000";
}
function findTopParent(element, num){
    let parent = element;
    for (var i = 0; i < num; i++) {
        if (parent.parentNode) {
            parent = parent.parentNode;
        }
    }
    return parent;
}

if (stepChoiceList.length !== 0){
    stepChoiceList.forEach(item=>{
        item.addEventListener("click",(e)=>{
            let handler = e.target;
            let parent = findTopParent(handler, 5);
            let data = {
                'question' : parent.getAttribute("data-step"),
                'title' : parent.getAttribute("data-title"),
                'selected': handler.getAttribute("data-value"),
            }
            let indexOf = Array.prototype.indexOf.call(steps, parent)+1;

            if (indexOf === steps.length){
                resultObj.push(data)
                performAjaxRequest(resultObj)
            }else{
                resultObj.push(data)
                parent.classList.remove("active");
                parent.nextElementSibling.classList.add("active");
                stepsSlide.style.transform = "translateX(-"+(indexOf*100)+"%)"
            }
        });
    });
}

function performAjaxRequest(data){
    // Write Ajax Code Here and redirect to the result page
    console.log(data)
}
window.share_facebook = function (){
    console.log("Share On Facebook")
}
window.share_linkedin = function (){
    console.log("Share On Linkedin")
}
window.share_kakaotalk = function (){
    console.log("Share On Kakaotalk")
}