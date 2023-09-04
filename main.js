const input = document.querySelector('#inputW')
const wordsContainer = document.querySelector('.wordsContainer')
const counter = document.querySelector('.counter')


let success = 0
let wordBoxUser = []
let wordBox = ['Hola', 'como', 'estas']
let touch = 0
let wordCounter = 0




input.addEventListener('keydown', e=> {
    
    const word = document.createElement('span')
    if(e.key === 'Enter' && input !== '' ){
        counter.textContent = ''
        
        touch ++
    

        word.textContent = e.target.value
        wordCounter = wordCounter + 1

        wordsContainer.appendChild(word)
        input.value = ''
        wordBoxUser.push(word.textContent)

        if (touch >= wordBox.length){
            if(touch === 3){
                input.placeholder = "TOUCH TO CONTINUE"
            } 

            iWin()   
            counter.textContent = success
            wordsContainer.innerHTML = ''
            touch = 0
            wordBoxUser = []
            wordBox = ['Hola', 'como', 'estas']
            
        }
        
    }
    
})


function iWin(){   
    
    success = 0
    
    
    for (let i = 0 ; i < wordBox.length ; i++){
        for (let j = 0 ;j < wordBoxUser.length ; j++){
            if(wordBox[i] === wordBoxUser[j]){
                console.log(success)
                success++
                wordBox.splice(i, 1)
                i --
                
            }
            

        }
    }
    

    
}
