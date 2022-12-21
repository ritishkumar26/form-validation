
form.addEventListener('submit' ,function(event)
{
   
const form = document.getElementById('form');
const nam = form.elements['name'].value;
const email = form.elements['email'].value;
const address = form.elements['Address'].value;
const city = form.elements['city'].value;
const gender = form.elements['gender'].value;
const aler =['please enter valid name','please enter valid Email','please enter valid Address','please select any one','please select gender','please select hobbies'];
const hobbies = document.querySelectorAll('input[type="checkbox"]:checked');
var hob=[];
hobbies.forEach((checkbox)=>{
    hob.push(checkbox.value);
})
const inp =[nam,email,address,city,gender,hob];
event.preventDefault();
    for(i=0;i<inp.length;i++)
    {
    
    if(inp[i]=="" || inp[i]=='city')
    {
    document.getElementsByClassName('alert')[i].innerHTML = `***${aler[i]}***`;
}
    else
    {
    
        document.getElementsByClassName('item')[i].classList.add('success');
        document.getElementsByClassName('alert')[i].innerHTML = ""; 
    
    }
   
    }

});

