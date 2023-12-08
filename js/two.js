let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
 
var name1 = id("name"),
    email = id("mail"),
    password = id("password"),
    form = id("form"),
    // eye =id('1'),
    // eye1= id('2');

    errormsg = classes("error"),
    success = classes("fa-circle-check"),
    error = classes("fa-circle-xmark");

    not= document.getElementsByTagName("input");
        


    
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        vaildation(name1,0," name cannot be blank ");
        vaildation(email,1,"email cannot be blank ");
        vaildation(password,2,"password cannot be blank ");
        
    });


let vaildation = (id,serial,message) => {
    // console.log(id)
    // console.log(vaildation(id,serial,message))
    if(id.value.trim() === ""){
        // console.log(id.value)
        errormsg[serial].innerText = message;
        errormsg[serial].style.color = "red";
        error[serial].style.opacity = "1"; 
        not[serial].style.border ="1px solid red";
 


        
    }
    else{
        id.value.trim();
        success[serial].style.opacity ="1";
        not[serial].style.border ="1px solid green"
    }


}   


    

    

    
    
    
