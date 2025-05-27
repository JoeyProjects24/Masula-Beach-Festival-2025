        // Countdown Timer
        function updateCountdown() {
            const festivalDate = new Date('June 6, 2025 00:00:00').getTime();
            const now = new Date().getTime();
            const distance = festivalDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
            document.getElementById('hours').innerHTML = Math.floor(hours).toString().padStart(2, '0');
            document.getElementById('minutes').innerHTML = Math.floor(minutes).toString().padStart(2, '0');
            document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
            
            if (distance < 0) {
                clearInterval(countdownTimer);
                document.getElementById('days').innerHTML = '00';
                document.getElementById('hours').innerHTML = '00';
                document.getElementById('minutes').innerHTML = '00';
                document.getElementById('seconds').innerHTML = '00';
            }
        }
        
        const countdownTimer = setInterval(updateCountdown, 1000);
        updateCountdown();
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Instagram embed fallback
        document.addEventListener('DOMContentLoaded', function() {
            if (!document.querySelector('iframe.instagram-media')) {
                const instagramContainer = document.querySelector('.instagram-container');
                const fallbackHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <p>Unable to load Instagram profile. please click on the button below to get profile:</p>
                        <a href="https://www.instagram.com/masula_beach_festival2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="btn" target="_blank">View Instagram Profile</a>
                    </div>
                `;
                instagramContainer.innerHTML = fallbackHTML;
            }
        });
        
        // Add animation class when elements come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('.about-card, .highlight-card, .reach-card').forEach(card => {
            observer.observe(card);
        });