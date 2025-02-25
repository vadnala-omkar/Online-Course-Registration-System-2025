        function toggleMenu() {
            document.querySelector('.nav-links').classList.toggle('active');
        }

        function openModal() {
            document.getElementById('loginModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('loginModal').style.display = 'none';
        }

        function registerUserDetails() {
            const email = document.getElementById('email').value;
            const existingDetails = JSON.parse(localStorage.getItem('studentDetails'));

            if (existingDetails && existingDetails.email !== email) {
                alert('Email must be the same for login and registration.');
                return;
            }

            const student = {
                name: document.getElementById('studentName').value,
                email: email
            };

            localStorage.setItem('studentDetails', JSON.stringify(student));
            alert('Login Successful!');
            showCourseCard();
            updateNavbar();
            closeModal(); // Close modal after successful registration
        }

        function showCourseCard() {
            if (localStorage.getItem('studentDetails')) {
                const courseCards = document.querySelectorAll('.course-card');
                courseCards.forEach(card => {
                    card.style.display = 'block';
                });
            }
        }

        function logout() {
            localStorage.removeItem('studentDetails');
            location.reload();
        }

        function updateNavbar() {
            if (localStorage.getItem('studentDetails')) {
                document.getElementById('loginLink').style.display = 'none';
                document.getElementById('logoutLink').style.display = 'block';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            showCourseCard();
            updateNavbar();
        });
