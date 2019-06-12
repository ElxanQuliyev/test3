let chatmini=document.getElementById("chat-mini")
let chat=document.getElementById("chat")
let chatinput=document.getElementById("chat-input")

chatmini.addEventListener("click" ,function(){
    chat.classList.add("active")
})
chat.querySelector(".close-icon").onclick=function(){
    chat.classList.remove("active")
}
chatinput.addEventListener("keypress",function(e){
    if(e.keyCode==13){
 e.preventDefault()
    }
})
chatinput.addEventListener("keyup",function(e){
    if(e.keyCode==13){
        let userinput=this.value



        if(userinput.length){
            if(userinput[0].toUpperCase()==userinput[0]){
                myFunction(userinput,"user")
            }
           
        
        else{
            myFunction(userinput,"support")
        }
    }
    }
})
function myFunction(a,b){
    let div=document.createElement("div")
            div.className="message "+b

            let textP=document.createElement("p")
            textP.innerText=a

            let timeP=document.createElement("p")
            timeP.className="time"
            
            let now=new Date()
            timeP.innerText=now.getHours()+":"+now.getMinutes()
            console.log(timeP)
            
            div.appendChild(textP)
            div.appendChild(timeP)
            chat.querySelector("main").appendChild(div)
            chatinput.value="";
}
