const access_local = chrome.storage.local;

function update_button(state){
    btn.textContent = state ? "Enable" : "Disable";
}

access_local.get(["enable"], (res)=>{
    const state = res.enable ?? true;
    update_button(state)
})

const btn = document.getElementById("toggle");
console.log(btn)

btn.addEventListener("click", ()=>{
        access_local.get(["enable"], (res)=>{
        const state = !(res.enable ?? true);

        access_local.set({enable : state});
        update_button(state);
    })
})