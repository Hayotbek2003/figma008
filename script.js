let down = document.querySelector(".down")
let down2 = document.querySelector(".down2")
let down3 = document.querySelector(".down3")
let up = document.querySelector(".up")
let up2 = document.querySelector(".up2")
let up3 = document.querySelector(".up3")
let p = document.querySelector(".sp")
let p2 = document.querySelector(".dp")
let p3 = document.querySelector(".fp")


function mode(state){
    if(state == "down"){
        up.style.display = "block"
        down.style.display = "none"
        p.style.display = "block"
        
    }
    else if (state == "up"){
        up.style.display = "none"
        down.style.display = "block"
        p.style.display = "none"

    }
    else if(state == "down2"){
        up2.style.display = "block"
        down2.style.display = "none"
        p2.style.display = "block"
        
    }
    else if (state == "up2"){
        up2.style.display = "none"
        down2.style.display = "block"
        p2.style.display = "none"

    }
    else if(state == "down3"){
        up3.style.display = "block"
        down3.style.display = "none"
        p3.style.display = "block"
        
    }
    else if (state == "up3"){
        up3.style.display = "none"
        down3.style.display = "block"
        p3.style.display = "none"

    }
}