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
    { 
        name: "power bi", 
        category: "dados", 
        image: "imgs/Skills/power.png" 
    },
    { 
        name: "html", 
        category: "programming", 
        image: "imgs/Skills/HTML.png" 
    },
    { 
        name: "css", 
        category: "programming", 
        image: "imgs/Skills/CSS.png" 
    },
    { 
        name: "inglês", 
        category: "languages", 
        image: "imgs/Skills/ingles.png" 
    },
    { 
        name: "excel", 
        category: "tools", 
        image: "imgs/Skills/Excel.png" 
    },
    { 
        name: "word", 
        category: "tools", 
        image: "imgs/Skills/Word.png" 
    },
    { 
        name: "powerpoint", 
        category: "tools", 
        image: "imgs/Skills/ppt.png" 
    },
    { 
        name: "automação", 
        category: "tools", 
        image: "imgs/Skills/ia.png" 
    },
    { 
        name: "figma", 
        category: "design", 
        image: "imgs/Skills/Figma.png" 
    },
    { 
        name: "canva", 
        category: "design", 
        image: "imgs/Skills/Canva.png" 
    },
    { 
        name: "metodologias ágeis", 
        category: "tools", 
        image: "imgs/Skills/Metodo.png" 
    },
    { 
        name: "python", 
        category: "programming", 
        image: "imgs/Skills/Python.png" 
    },
    { 
        name: "javascript", 
        category: "programming", 
        image: "imgs/Skills/Js.png" 
    },
    { 
        name: "snovio", 
        category: "sales", 
        image: "imgs/Skills/Snov.png" 
    },
    { 
        name: "illustrator", 
        category: "design", 
        image: "imgs/Skills/Illustrator.png" 
    },
    { 
        name: "photoshop", 
        category: "design", 
        image: "imgs/Skills/Photoshop.png" 
    },
    { 
        name: "premiere", 
        category: "design", 
        image: "imgs/Skills/Premiere.png" 
    },
    { 
        name: "after effects", 
        category: "design", 
        image: "imgs/Skills/After.png" 
    },
    { 
        name: "stata", 
        category: "dados", 
        image: "imgs/Skills/Stata.png" 
    },
    { 
        name: "blender", 
        category: "design", 
        image: "imgs/Skills/Blender.png" 
    },
    { 
        name: "libras", 
        category: "languages", 
        image: "imgs/Skills/Libras.png" 
    }
];

const skillsGrid = document.getElementById('skillsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Função única e corrigida
function renderSkills(category = 'all') {
    skillsGrid.innerHTML = '';
    const filtered = category === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === category);
    
    filtered.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <img src="${skill.image}" alt="${skill.name}" class="skill-image">
            <div class="skill-name">${skill.name}</div>
        `; // Usando image em vez de icon
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

// Render inicial
renderSkills();