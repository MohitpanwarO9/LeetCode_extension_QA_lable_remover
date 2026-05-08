const access_local = chrome.storage.local;

function update_button(state){
    btn.textContent = state ? "Enable" : "Disable";
}

function update_accButton(state){
    btn_acc.textContent = state ? "Enable" : "Disable";
}

access_local.get(["enable"], (res)=>{
    const state = res.enable ?? true;
    update_button(state)
})

access_local.get(["AccEnable"], (res)=>{
    const state = res.AccEnable ?? true;
    update_accButton(state)
})

const btn = document.getElementById("toggle");
//console.log(btn)
const btn_acc = document.getElementById("toggle_accptance");


btn.addEventListener("click", ()=>{
        access_local.get(["enable"], (res)=>{
        const state = !(res.enable ?? true);

        access_local.set({enable : state});
        update_button(state);
    })
})

btn_acc.addEventListener("click", ()=>{
    access_local.get(["AccEnable"], (res)=>{
        const state = !(res.AccEnable ?? true);

        access_local.set({AccEnable : state});
        update_accButton(state);
    })
})