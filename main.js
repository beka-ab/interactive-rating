//cathc review
let reviewSpan=document.querySelector(".reviewPoint");
// chatching selected point
let points = document.querySelectorAll(".btn");
points.forEach((points)=>{
    points.addEventListener("click",()=>{
        reviewSpan.classList.add("pointColor")
     reviewSpan.innerHTML=points.innerHTML
    })
})
let greyBtn
points.forEach((points) =>{
 points.addEventListener("click",()=>{
    if(greyBtn){
        greyBtn.classList.remove('clicked')
    }
        points.classList.add("clicked");

        greyBtn=points    
    })
 
})
let inlineDiv = document.querySelector(".mainc_div")
let noneDiv = document.querySelector(".divAfterSub")
// catching sumbit button
let button = document.getElementById("submit");
button.addEventListener("click",function beka(){
    inlineDiv.style.display= "none"
    noneDiv.style.display="flex"    
}
)
//cathc review
