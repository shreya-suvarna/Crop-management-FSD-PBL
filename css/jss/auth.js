// Authentication handling
document.addEventListener('DOMContentLoaded', function() {
    // Farmer Sign In
    const farmerSignInForm = document.getElementById('farmerSignInForm');
    if (farmerSignInForm) {
        farmerSignInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('farmerEmail').value;
            const password = document.getElementById('farmerPassword').value;
            
            if (email && password) {
                // Show loading state
                const button = this.querySelector('.auth-btn');
                button.textContent = 'Signing In...';
                button.classList.add('loading');
                
                // Redirect to farmer dashboard
                setTimeout(() => {
                    window.location.href = 'farmerdashboard.html';
                }, 1500);
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Farmer Sign Up
    const farmerSignUpForm = document.getElementById('farmerSignUpForm');
    if (farmerSignUpForm) {
        farmerSignUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = document.getElementById('farmerFullName').value;
            const email = document.getElementById('farmerEmail').value;
            const password = document.getElementById('farmerPassword').value;
            const confirmPassword = document.getElementById('farmerConfirmPassword').value;
            
            if (!fullName || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }
            
            // Show loading state
            const button = this.querySelector('.auth-btn');
            button.textContent = 'Creating Account...';
            button.classList.add('loading');
            
            // Redirect to farmer dashboard
            setTimeout(() => {
                window.location.href = 'farmerdashboard.html';
            }, 2000);
        });
    }

    // Industry Sign In
    const industrySignInForm = document.getElementById('industrySignInForm');
    if (industrySignInForm) {
        industrySignInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('industryEmail').value;
            const password = document.getElementById('industryPassword').value;
            
            if (email && password) {
                // Show loading state
                const button = this.querySelector('.auth-btn');
                button.textContent = 'Signing In...';
                button.classList.add('loading');
                
                // Redirect to industry dashboard
                setTimeout(() => {
                    window.location.href = 'industrydashboard.html';
                }, 1500);
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Industry Sign Up
    const industrySignUpForm = document.getElementById('industrySignUpForm');
    if (industrySignUpForm) {
        industrySignUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const companyName = document.getElementById('industryName').value;
            const email = document.getElementById('industryEmail').value;
            const phone = document.getElementById('industryPhone').value;
            const address = document.getElementById('industryAddress').value;
            const password = document.getElementById('industryPassword').value;
            const confirmPassword = document.getElementById('industryConfirmPassword').value;
            
            if (!companyName || !email || !phone || !address || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }
            
            // Show loading state
            const button = this.querySelector('.auth-btn');
            button.textContent = 'Creating Account...';
            button.classList.add('loading');
            
            // Redirect to industry dashboard
            setTimeout(() => {
                window.location.href = 'industrydashboard.html';
            }, 2000);
        });
    }

    // Password strength indicator
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        input.addEventListener('input', function() {
            const strengthBar = this.parentNode.querySelector('.password-strength-bar');
            if (strengthBar) {
                const strength = calculatePasswordStrength(this.value);
                strengthBar.style.width = strength + '%';
                strengthBar.style.background = getStrengthColor(strength);
            }
        });
    });

    function calculatePasswordStrength(password) {
        let strength = 0;
        if (password.length >= 6) strength += 20;
        if (password.length >= 8) strength += 20;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 20;
        if (password.match(/\d/)) strength += 20;
        if (password.match(/[^a-zA-Z\d]/)) strength += 20;
        return Math.min(strength, 100);
    }

    function getStrengthColor(strength) {
        if (strength < 40) return '#ff4444';
        if (strength < 70) return '#ffbb33';
        return '#00C851';
    }
});