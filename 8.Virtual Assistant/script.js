let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Ayush Sir")
    }
    


    else if(message.includes("family")){
        speak("you can calculate your faimly's carbon footprint by adding some normal data here...")
        window.location.href="/family/family.html"
    }

    else if(message.includes("car")){
        speak("you can calculate your car's carbon footprint by adding some normal data here...")
        window.location.href="/car/car.html"
    }

    else if(message.includes("sell")){
        speak("you can easly sell your waste recyclable items here....")
        window.location.href="/add waste/hello.html"
    }

    else if(message.includes("buy")||message.includes("items")){
        speak("you can buy artefacts here")
        window.location.href=""
    }

    else if(message.includes("interactive")||message.includes("learning")||message.includes("quiz")||message.includes("knowledge")||message.includes("")){
        speak("you can learn various things about climate just by playing quiz on our platform netra")
        window.location.href="/quiz/quiz.html"
    }
    
    
    
    
    
    
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}