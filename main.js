canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d")

mouseve="empty"
var lpx, lpy

color="black"
widthline=3

canvas.addEventListener("mousedown", mymousedown)

canvas.addEventListener("mouseup", mymouseup)

canvas.addEventListener("mouseleave", mymouseleave)

canvas.addEventListener("mousemove", mymousemove)

function mymousedown(e){

    mouseve="md"

    color = document.getElementById("cl").value
    widthline = document.getElementById("wl").value
    radius = document.getElementById("rd").value
    mouseve = mousedown
}

function mymouseup(e){

    mouseve="mu"

    
}

function mymouseleave(e){

    mouseve="ml"

    
}

function mymousemove(e){

    cpx=e.clientX- canvas.offsetLeft
    cpy=e.clientY- canvas.offsetTop

    if(mouseve == "md"){

        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth = widthline
        ctx.arc(cpx, cpy, radius, 0, 2*Math.PI)
        ctx.stroke()
    }

    lpx = cpx   //where lpx is last position of x and cpx is current position of x
    lpy = cpy   //where lpy is last position of y and cpy is current position of y

}

function erase(){

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
