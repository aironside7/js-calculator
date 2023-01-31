const userinp= document.querySelector("#userinp")
const button= document.querySelectorAll(".btn")
button.forEach(button=>{
    button.addEventListener("click", e =>{
        const value=e.target.innerText
        if(value === "C"){
          userinp.value = ""
        }else if(value==="="){
            try{
                userinp.value=eval(userinp.value)
            }catch(err){
                userinp.value="error"
            }
        }else{
            userinp.value += value
        }
    })
})