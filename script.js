document.addEventListener('DOMContentLoaded', () => {
            console.log


            document.addEventListener('DOMContentLoaded', () => {
                const menuLinks = document.querySelectorAll('.menu a');

                menuLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        // Плавная прокрутка при переходе по якорю
                        if (link.getAttribute('href').startsWith('#')) {
                            e.preventDefault();
                            const target = document.querySelector(link.getAttribute('href'));
                            target.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                });
            });