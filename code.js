// smooath scroll
// custom cursor
let link = document.querySelectorAll('.link')
let iframes = document.querySelectorAll("iframe");
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
// hide mouse on iframe
iframes.forEach(frame =>{   
    frame.addEventListener("mouseleave", () => {
        cursorDot.classList.remove("hide");
    });
    frame.addEventListener("mouseover", () => {
        cursorDot.classList.add("hide");
    });
});
// scale imgvideo&svgs hide
let video = document.querySelector('#video')
let textHome = document.querySelector('#text-home')
let svgs = document.querySelector('#svgs-anim')

video.addEventListener('mouseover', () => {
    textHome.classList.add('opacityLower')
    svgs.classList.remove("hide");
})
video.addEventListener('mouseleave', () => {
    textHome.classList.remove('opacityLower')
    svgs.classList.add("hide");
})

// menu click
function clickMenu() {
    let menuOverlay = document.querySelector('#menu-overlay')
    menuOverlay.classList.toggle('active');
    let icon = document.querySelector('.menuImg')
    icon.classList.toggle('active');
}