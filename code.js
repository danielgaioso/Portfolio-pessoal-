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

// skills
 // Mock de dados (simulando API)
 const skills = [
    { name: "HTML", category: "programming", icon: "🌐" },
    { name: "CSS", category: "programming", icon: "🎨" },
    { name: "JavaScript", category: "programming", icon: "📜" },
    { name: "Python", category: "programming", icon: "🐍" },
    { name: "Figma", category: "design", icon: "✏️" },
    { name: "Photoshop", category: "design", icon: "🖌️" },
    { name: "Illustrator", category: "design", icon: "🖼️" },
    { name: "Blender", category: "design", icon: "🎬" },
    { name: "Premiere", category: "design", icon: "🎥" },
    { name: "After Effects", category: "design", icon: "🎞️" },
    { name: "Inglês", category: "languages", icon: "🇬🇧" },
    { name: "Espanhol", category: "languages", icon: "🇪🇸" },
    { name: "Libras", category: "languages", icon: "👐" },
    { name: "Excel", category: "office", icon: "📊" },
    { name: "Word", category: "office", icon: "📄" },
    { name: "PowerPoint", category: "office", icon: "📑" },
    { name: "React", category: "programming", icon: "⚛️" },
    { name: "Node.js", category: "programming", icon: "🚀" },
    { name: "TypeScript", category: "programming", icon: "🔷" },
    { name: "UI/UX", category: "design", icon: "🎯" }
];

const skillsGrid = document.getElementById('skillsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderSkills(category = 'all') {
    skillsGrid.innerHTML = '';
    const filtered = category === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === category);
    
    filtered.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
        `;
        skillsGrid.appendChild(card);
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderSkills(button.dataset.category);
    });
});

// Initial render
renderSkills();