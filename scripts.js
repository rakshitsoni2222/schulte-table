let arr = [1,2,3,4,5,6,7,8,9]
let gameArray = []
let start = false
let time = 0
document.querySelector(".button").onclick = ()=>{
    gameStart()
}

function gameStart() {
    document.getElementById("game").style.display = "flex"
    for(let i = 0; i<9; i++){
        let index = Math.floor(Math.random()*arr.length)
        let ele = arr[index]
        gameArray.push(ele)
        arr = arr.filter((x,ind) => ind!=index)
    }
    start = true;
    
if(start == true){
    document.querySelector(".button").style.display = "none"
    let timer = setInterval(()=>{
        time = time+1
        document.querySelectorAll(".your_value")[1].innerText = time/100 + " secs"
    },10)
    function nextNumberFunction(nextNumber){
        if (nextNumber < 9) return nextNumber+1
        else{
            start = false 
            document.getElementById("results").style.display = "flex"
            document.getElementById("game").style.display = "none"
            clearInterval(timer)
            document.querySelector(".your_value").innerText = time/100 + " secs"
            if(time < Number(window.localStorage.getItem("best"))){
                window.localStorage.setItem("best", time)
                document.querySelector(".best_value").innerText = Number(window.localStorage.getItem("best"))/100 + " secs"
            }
            else{
                document.querySelector(".best_value").innerText = Number(window.localStorage.getItem("best"))/100 + " secs"
            }
        }
    }
    let nextNumber = 1
    const board = document.querySelectorAll(".boardEle")
    board.forEach((box,index) => (box.innerText = gameArray[index]))
    board.forEach(box => (box.onclick = function(){
        if(Number(box.innerText) === nextNumber){
            nextNumber = nextNumberFunction(nextNumber)
            document.getElementById("gameChallange").innerText = nextNumber
        }
    }))    
}
}


