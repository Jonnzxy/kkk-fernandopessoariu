document.addEventListener("DOMContentLoaded", () => {
    // Função para expandir/collapse o texto de projeto (Ler mais)
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();  // Impede que o clique no "Ler mais" acione a expansão do card

            const cardContent = this.closest('.card-content');
            const shortText = cardContent.querySelector('.short-text');
            const fullText = cardContent.querySelector('.full-text');
            
            // Alternar a visibilidade do texto
            shortText.classList.toggle('expand');
            fullText.classList.toggle('expand');
            
            // Alterar o texto do botão
            if (fullText.classList.contains('expand')) {
                this.textContent = 'Ler menos';
            } else {
                this.textContent = 'Ler mais';
            }
        });
    });

    // Scroll suave para a seção "Sobre"
    const conhecaMaisBtn = document.getElementById("conheca-mais-btn");
    const sobreSection = document.getElementById("sobre");

// Ajuste o comportamento do scroll suave para incluir uma duração mais confortável
conhecaMaisBtn.addEventListener("click", () => {
    sobreSection.scrollIntoView({ behavior: "smooth", block: "start" });
});


    // Animações de entrada nas seções
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".section-sobre, .section-portfolio, .section-contato").forEach((section) => {
        observer.observe(section);
    });

    // Validação e envio do formulário de contato
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (nome && email && mensagem) {
            alert("Obrigado pelo contato, " + nome + "! Em breve entraremos em contato.");
            this.reset();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    // Animações de seção
    const sections = document.querySelectorAll('.scroll-section');

    function changeSectionHighlight() {
        let scrollPos = window.scrollY || window.pageYOffset;
        sections.forEach(section => {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;

            if (scrollPos >= offsetTop - window.innerHeight * 0.8 && scrollPos < offsetTop + offsetHeight) {
                section.classList.add('active'); // Adiciona a classe 'active' quando a seção está visível
            } else {
                section.classList.remove('active'); // Remove a classe 'active' quando a seção não está visível
            }
        });
    }
    window.addEventListener('scroll', changeSectionHighlight);
});
document.querySelector('.dropdown-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    this.nextElementSibling.classList.toggle('show');
});

document.querySelector('.dropdown-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    const menu = this.nextElementSibling;
    menu.classList.toggle('show');

    // Fecha o menu se clicar novamente no mesmo botão
    menu.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});

let currentSlide = 0;

function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Função para rodar automaticamente o carrossel
function autoRotate() {
    moveCarousel(1); // Move para o próximo slide
}

// Define o intervalo para rodar a cada 3 segundos
setInterval(autoRotate, 3000);

// Seleciona o botão de alternar tema
const themeToggleButton = document.getElementById('theme-toggle');

// Alterna o tema claro/escuro
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
// Para evitar que o carrossel avance muito rápido, ajustamos o intervalo
setInterval(autoRotate, 4000); // Aumentar o intervalo de rotação para 4 segundos

