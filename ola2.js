let btn = document.querySelectorAll("button")
let ipauto = document.getElementById("ipauto")
let ipcar = document.getElementById("ipcar")
let ipbike = document.getElementById("ipbike")


btn[0].addEventListener("click",()=>{
    let pbike = document.querySelector("#pbike")
    let val = ipbike.value
    
    if(val>='0' && val<='9')
    {
        pbike.innerText = `Cost for ${val} kms is ${val*10} Rs`
    }
    ipbike.value=""
    setTimeout(()=>{
        pbike.innerText = ``
    },2000)
})


btn[1].addEventListener("click",()=>{
    let pcar = document.querySelector("#pcar")
    let val = ipcar.value
    if(val>='0' && val<='9')
    {
        pcar.innerText = `Cost for ${val} kms is ${val*30} Rs`
    }
    ipcar.value=""
    setTimeout(()=>{
        pcar.innerText = ``
    },2000)
})

btn[2].addEventListener("click",()=>{
    let pauto = document.querySelector("#pauto")
    let val = ipauto.value
    if(val>='0' && val<='9')
    {
        pauto.innerText = `Cost for ${val} kms is ${val*20} Rs`
    }
    ipauto.value=""
    setTimeout(()=>{
        pauto.innerText = ``
    },2000)
        
})