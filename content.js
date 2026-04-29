console.log("Extension is running...");

const url = window.location;
const hostname = url.hostname;
let path = url.pathname;
let pathName = path.split("/")

console.log(url)
console.log(hostname, "\n",pathName)

const pageName = pathName[1];
console.log(pageName);

if(pageName === "problemset"){
    console.log("Hello heloo")
    setTimeout(() => {
        const POTD_lable = document.querySelector('a[href*="/problems/"] p.text-sd-hard');
        console.log(POTD_lable);
        if(POTD_lable){
            POTD_lable.remove()
        }
        // console.log(p);
    }, 5000);
}

if(pageName === "problems"){
    const lable = document.querySelector(".text-difficulty-hard, .text-difficulty-easy, .text-difficulty-medium")
    
    if(lable){
        lable.remove();
    }
}