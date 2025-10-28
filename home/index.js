function netra(){
    window.location.href="/8.virtual Assistant/index.html"
}

function about(){
    window.location.href="/about/index.html"
}

function fm(){
    window.location.href="/family/family.html"
}

function ca(){
    window.location.href="/car/car.html"

}

function qu(){
    window.location.href="/quiz/quiz.html"
}

function news(){
    window.location.href=""
}

function aiimageanalyser(){
    window.location.href="https://9000-idx-analyser-1742904922192.cluster-qpa6grkipzc64wfjrbr3hsdma2.cloudworkstations.dev/?embedded=0&monospaceUid=45196"
}



function sel(){
    window.location.href="/add waste/hello.html"
}

function ama(){
    window.location.href="/buysection/index.html"
}

document.addEventListener('DOMContentLoaded', () => {
    // Add navigation active state
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation on scroll for feature cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach((card) => {
        observer.observe(card);
    });
});