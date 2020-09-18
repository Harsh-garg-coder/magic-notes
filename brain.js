// whwnever user add a note store the note in the local variable
shownotes();
let addbtn = document.getElementById('addbtn');
let textarea = document.getElementById('textarea');
let addinput = document.getElementById('addinput');

addbtn.addEventListener('click',function(){

    let titles = localStorage.getItem('titles');
    if(titles==null)
    {
        titleobj = [];
    }
    else{
    titleobj=JSON.parse(titles);
    }
    titleobj.push(addinput.value);

    localStorage.setItem('titles',JSON.stringify(titleobj));

    
    let notes = localStorage.getItem('notes');

    if(notes == null){
        noteobj = [];
    }
    else{
        noteobj = JSON.parse(notes);
    }

    noteobj.push(textarea.value);


    localStorage.setItem('notes',JSON.stringify(noteobj));
    shownotes();
    textarea.value = '';
    addinput.value = '';
})

function shownotes(){
    let titles = localStorage.getItem('titles');
    if(titles==null)
    {
        titleobj = [];
    }
    else{
        titleobj=JSON.parse(titles);
    }
    
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
        noteobj = [];
    }
    else{
        noteobj = JSON.parse(notes);
    }
    let html='';
    let count=0;
    noteobj.forEach(function(element,index){
        
        html +=`<div class='notecard'>
        <h2>${titleobj[count]}</h2>
        <p>${element}</p>
        <button id='${index}' class='deletebtn' onclick='deletenote(this.id)'>Delete note</button>
    </div>` ;
    count++;
    })

    let displaynote = document.getElementById('displaynote');

    if(noteobj.length !=0){
        displaynote.innerHTML = html;
    }
    else{
        displaynote.innerHTML = 'nothing to show please add a note above!';
    }
}

function deletenote(index)
{
    let titles = localStorage.getItem('titles')
    if(titles == null)
    {
        titleobj=[];
    }
    else{
        titleobj=JSON.parse(titles);
    }
    titleobj.splice(index,1);
    localStorage.setItem('titles',JSON.stringify(titleobj));
    let notes = localStorage.getItem('notes');
    if(notes == null){
        noteobj=[];
    }
    else{
        noteobj = JSON.parse(notes);
    }
    noteobj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(noteobj));
    shownotes();
}
// getting the input search 
let inputsearch = document.getElementById('inputsearch');

// adding event to the input search
inputsearch.addEventListener('input',function(){
    // taking the value user entered
    let inputvalue =  inputsearch.value;
    // taking all the notecards
    let notecard = document.getElementsByClassName('notecard');
    // iterating all the notecards
    Array.from(notecard).forEach(function(element){

        let para = element.getElementsByTagName('p')[0].innerText;
        if(para.includes(inputvalue)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    })

})