let added= document.getElementById("newadd");
added.addEventListener('click',function()
{
    var adde= document.getElementById("addition");
    adde.style.display="block";
});
console.log()
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
    }
    note.value="";
    aod = om.value;
    om.value="";
    shownotes();
});
function shownotes()
{
    if(aod == "")
    {
        aod = "title";
    }
    let html=`<div class="card col-md-3 mx-3 my-3">
    <div class="card-body">
        <h5 class="card-title">${aod}</h5>
        <p class="card-text">${x}</p>
        <a href="#" class="btn btn-primary">Delete Note</a>
    </div>
    </div>`;
    let addhere= document.getElementById("addhere");
    addhere.innerHTML += html;
}
