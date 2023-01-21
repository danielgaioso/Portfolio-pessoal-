// smooath scroll
// custom cursor
let link = document.querySelectorAll('.link')
let btns = document.querySelectorAll(".btn");
let cursorDot = document.querySelector('.cursor-dot');
// cursor move
window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    // mouse voltar apos sumir
    cursorDot.style.display = 'block'
})
// cursor link
link.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('cursor-link')
    })
    link.addEventListener('mouseover', () => {
        cursorDot.classList.add('cursor-link')
    })
})
// click effect
window.addEventListener('click', () => {
    cursorDot.classList.add('cursor-click')
    setTimeout(() => {
        cursorDot.classList.remove('cursor-click');
    }, 200)
})
// hide cursor when leave
document.addEventListener('mouseleave', () =>{
    cursorDot.style.display = `none`
})
// hide mouse btn
btns.forEach(btn =>{   
    btn.addEventListener("mouseleave", () => {
        cursorDot.classList.remove("hide");
    });
    btn.addEventListener("mouseover", () => {
        cursorDot.classList.add("hide");
    });
});



// scale imgvideo&svgs hide
let video = document.querySelector('#video')
let textHome = document.querySelector('#text-home')
let svgs = document.querySelector('#svgs-anim')
let scroll = document.querySelector('.scroll')

let query = window.matchMedia('(min-width: 840px)')

    if(query.matches){
        video.addEventListener('mouseover', () => {
            textHome.classList.add('opacityLower')
            svgs.classList.remove("hide");
            scroll.classList.add("hide");
        })
        video.addEventListener('mouseleave', () => {
            textHome.classList.remove('opacityLower')
            svgs.classList.add("hide");
            scroll.classList.remove("hide");
        })
    }

// menu click
function clickMenu() {
    let menuOverlay = document.querySelector('#menu-overlay')
    menuOverlay.classList.toggle('active');
    let icon = document.querySelector('.menuImg')
    icon.classList.toggle('active');
}

// button
const btn = document.querySelector('.btn');
btn.onmousemove = function(a){
    const x = a.pageX - btn.offsetLeft;
    const y = a.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}