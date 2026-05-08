const access_local = chrome.storage.local;
const url = window.location;
const hostname = url.hostname;
let path = url.pathname;
let pathName = path.split("/")

console.log(url)
console.log(hostname, "\n",pathName)

const pageName = pathName[1];
console.log(pageName);

function isRun(){        
    console.log("Extension is running...");
    let count = 0;
    function removeFromProblemSet(){
        console.log("hello hello")
        if(count) return;

        const potd_lable = document.querySelector('a[href*="/problems/"] p.text-sd-hard, a[href*="/problems/"] p.text-sd-medium, a[href*="/problems/"] p.text-sd-easy');
            
        console.log(potd_lable);
        if(potd_lable){
            count += 1;
            potd_lable.remove()
        }
    }

    function removeFromProblem(){
        const lable = document.querySelector(".text-difficulty-hard, .text-difficulty-easy, .text-difficulty-medium")
        const solved_lable = document.querySelectorAll("div").forEach(elm =>{
            if(elm.innerText === "Solved"){
                elm.remove();
            }
        })
        
        if(lable){
            lable.remove();
        }
    }

    const observer = new MutationObserver(()=>{
        if(pageName === 'problemset'){
            removeFromProblemSet();
        }
        if(pageName === 'problems'){
            removeFromProblem();
        }
    });

    observer.observe(document.body,{
        childList : true,
        subtree : true
    })

}

function isRun_acc(){

    // function remove_accptance(){
    const innerDiv = [...document.querySelectorAll("div")]
        .find(div => div.textContent.trim() === "Acceptance Rate");

    const outerDiv = innerDiv.parentElement;

    console.log(outerDiv);
    
    outerDiv.remove()
    // }
    
    
}

// check state of extenstion

access_local.get(["enable"], (res)=>{
    const state = res.enable ?? true;
    if(state){
        isRun();
    }else{
        console.log("extension is OFF")
        return;
    }
})

// check disable accptance state

access_local.get(["AccEnable"], (res)=>{
    const state = res.AccEnable ?? true;
    if(state){
        isRun_acc();
    }else{
        console.log("diable Accptance is OFF");
        return;
    }
})