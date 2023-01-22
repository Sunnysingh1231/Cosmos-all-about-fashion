let Name=document.getElementById("name")
let Email=document.getElementById("email")
let Password=document.getElementById("password")
let signup=document.getElementById("signup")
let arr=[]
signup.addEventListener("click",element=>{
    element.preventDefault()
    if(Name.value===""){
        alert("Put your Name first")
    }else if(Email.value===""){
        alert("Enter your Email")
    }else if(Password.value===""){
        alert("Make a password")
    }else{
        let form={
            inName:Name.value,
            inemail:Email.value,
            password:Password.value
            
        }
        arr.push(form)
        console.log(arr)
        localStorage.setItem("credential",JSON.stringify(arr))
        alert("registration successfull")
        window.location.href="./login.html"
    }

})