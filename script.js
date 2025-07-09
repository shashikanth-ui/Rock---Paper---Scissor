let sysCount = 0;
let youCount = 0;
let r = 0;
let rock = document.querySelector(".rock");
rock.addEventListener("click",()=>{
    r = 1;
}); 
let paper = document.querySelector(".paper");
paper.addEventListener("click",()=>{
    r = 2;
}); 
let scissor = document.querySelector(".scissor");
scissor.addEventListener("click",()=>{
    r = 3;
}); 

let submit = document.querySelector(".submit");
submit.addEventListener("click",()=>{
        if (r === 0) {
        submit.innerText = "Please make a choice first!";
        return;
    }
    win(r);
    r = 0;
});
let choices = ["","rock","paper","scissor"];
function win(rr){
    let r1 = Math.floor((Math.random()*3)+ 1);
    if (rr == r1){
        submit.innerText = "Tie";
    }else if ((r1 ==  1 && rr == 2) || (r1 == 2 && rr == 3) || (r1 == 3 && rr == 1)  ){
        youCount++;
        document.querySelectorAll("h1")[0].innerText = `Your win count : ${youCount}`;
        submit.innerText = "You won ";
    }else{
        sysCount++;
        document.querySelectorAll("h1")[1].innerText = `System win count : ${sysCount}`;
        submit.innerText = "You lost ";
    }

}
