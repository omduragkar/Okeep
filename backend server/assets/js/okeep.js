let added= document.getElementById("newadd");
let added1 = document.getElementById("newadd1");
let added12 = document.getElementById("newadd12");
var adde= document.getElementById("addition");
var buton=document.getElementById("closebtn");
added.addEventListener('click',function()
{
    
    added1.style.display="inline-block";
    added12.style.display="inline-block";
    buton.style.display="inline-block";
    adde.style.display="block";
    added.style.display="none";
});
buton.addEventListener('click',function()
{
    adde.style.display="none";
    added12.style.display="none";
    buton.style.display="none";
    added.style.display="inline-block";
});
added1.addEventListener('click',function()
{
    added12.style.display="inline-block";
    buton.style.display="inline-block";
    adde.style.display="block";
    added.style.display="none";
});
added12.addEventListener('click',function()
{
    adde.style.display="none";
    added12.style.display="none";
    added.style.display="inline-block";
});
// var adde= document.getElementById("addition");
added1.addEventListener('click',function()
{
    adde.style.display="block";
 
});
// console.log()
let addbtn= document.getElementById("addbtn");
addbtn.addEventListener('click',function()
{
    let note = document.getElementById("notetxt");
    let om =document.getElementById("om");
    x = note.value;
    if(x=="")
    {
        alert("Note not added");
        return;
    }
    if (om=="") {
        confirm("Title not added");
        return;
    }
    // note.value="";
    // aod = om.value;
    // om.value="";
    // shownotes();
});
// function shownotes()
// {
//     if(aod == "")
//     {
//         aod = "title";
//     }
//     let html=`<div class="card col-md-3 mx-3 my-3">
//     <div class="card-body">
//         <h5 class="card-title">${aod}</h5>
//         <p class="card-text">${x}</p>
//         <a href="#" class="btn btn-primary">Delete Note</a>
//     </div>
//     </div>`;
//     let addhere= document.getElementById("addhere");
//     addhere.innerHTML += html;
// }
