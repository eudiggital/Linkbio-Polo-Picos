document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": isMobile ? 20 : 40,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": ["#0a2463", "#d4af37", "#ffffff"] },
                "shape": {
                    "type": ["circle", "star", "polygon"],
                    "stroke": { "width": 0, "color": "#000000" },
                    "polygon": { "nb_sides": 5 }
                },
                "opacity": {
                    "value": 0.5, "random": true,
                    "anim": { "enable": true, "speed": 0.8, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": isMobile ? 2.5 : 3.5, "random": true,
                    "anim": { "enable": false, "speed": 20, "size_min": 0.1, "sync": false }
                },
                "line_linked": {
                    "enable": !isMobile, "distance": 150, "color": "#adb5bd", "opacity": 0.3, "width": 1
                },
                "move": {
                    "enable": true, "speed": isMobile ? 0.6 : 1.2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false,
                    "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": !isMobile, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 100, "line_linked": { "opacity": 0.7 } },
                    "bubble": { "distance": 200, "size": 20, "duration": 2, "opacity": 0.8, "speed": 3 },
                    "repulse": { "distance": 100, "duration": 0.4 },
                    "push": { "particles_nb": 4 },
                    "remove": { "particles_nb": 2 }
                }
            },
            "retina_detect": true
        });
    }

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Ripple effect logic
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) * 2 + 'px';
            ripple.style.left = `${x - ripple.offsetWidth / 2}px`;
            ripple.style.top = `${y - ripple.offsetHeight / 2}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});