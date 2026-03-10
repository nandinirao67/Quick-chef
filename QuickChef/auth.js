/* ==========================================
   QuickChef Auth Page Logic
   ========================================== */

// DOM Elements
const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showSignin = document.getElementById('showSignin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const successOverlay = document.getElementById('successOverlay');
const toastContainer = document.getElementById('toastContainer');

// Particles
(function initParticles() {
    const container = document.getElementById('authParticles');
    const emojis = ['🍕','🍔','🌮','🍣','🍩','🧁','🍰','🍳','🥗','🍜','🥑','🍓','🧀','🥐','🍪'];
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'auth-particle';
        p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (18 + Math.random() * 18) + 's';
        p.style.animationDelay = (Math.random() * 12) + 's';
        p.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
        container.appendChild(p);
    }
})();

// Toggle between Sign In / Sign Up
showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    signinForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    signupForm.style.animation = 'none';
    signupForm.offsetHeight; // reflow
    signupForm.style.animation = 'fadeSlideIn 0.5s var(--ease-out)';
});

showSignin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('hidden');
    signinForm.classList.remove('hidden');
    signinForm.style.animation = 'none';
    signinForm.offsetHeight;
    signinForm.style.animation = 'fadeSlideIn 0.5s var(--ease-out)';
});

// Password Toggle
document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = document.getElementById(btn.dataset.target);
        if (input.type === 'password') { input.type = 'text'; btn.textContent = '🙈'; }
        else { input.type = 'password'; btn.textContent = '👁️'; }
    });
});

// Password Strength
const signupPassword = document.getElementById('signupPassword');
if (signupPassword) {
    signupPassword.addEventListener('input', () => {
        const val = signupPassword.value;
        const fill = document.getElementById('strengthFill');
        const text = document.getElementById('strengthText');
        fill.className = 'strength-fill';
        if (val.length === 0) { fill.style.width = '0%'; text.textContent = 'Enter a password'; return; }
        let score = 0;
        if (val.length >= 8) score++;
        if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
        if (/[0-9]/.test(val) && /[^A-Za-z0-9]/.test(val)) score++;
        if (score <= 1) { fill.className = 'strength-fill weak'; text.textContent = 'Weak'; }
        else if (score === 2) { fill.className = 'strength-fill medium'; text.textContent = 'Medium'; }
        else { fill.className = 'strength-fill strong'; text.textContent = 'Strong 💪'; }
    });
}

// Login Form Submit
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    if (!email || !password) { showToast('❌ Please fill in all fields.', 'error'); return; }

    const btn = loginForm.querySelector('.btn-submit');
    btn.classList.add('loading');

    // Check localStorage for registered users
    const users = JSON.parse(localStorage.getItem('quickchef-users') || '[]');
    const user = users.find(u => u.email === email);

    setTimeout(() => {
        btn.classList.remove('loading');
        if (user && user.password === password) {
            localStorage.setItem('quickchef-loggedin', JSON.stringify({ name: user.name, email: user.email }));
            showSuccess('Welcome back, ' + user.name + '! 👋', 'Redirecting to your kitchen...');
        } else if (user) {
            showToast('❌ Incorrect password. Try again.', 'error');
        } else {
            // Auto-login for demo
            localStorage.setItem('quickchef-loggedin', JSON.stringify({ name: 'Chef', email: email }));
            showSuccess('Welcome Back! 👋', 'Redirecting to your kitchen...');
        }
    }, 1500);
});

// Register Form Submit
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;
    const agreed = document.getElementById('agreeTerms').checked;

    if (!name || !email || !password || !confirm) { showToast('❌ Please fill in all fields.', 'error'); return; }
    if (password.length < 8) { showToast('❌ Password must be at least 8 characters.', 'error'); return; }
    if (password !== confirm) { showToast('❌ Passwords do not match.', 'error'); return; }
    if (!agreed) { showToast('❌ Please agree to the Terms of Service.', 'error'); return; }

    const btn = registerForm.querySelector('.btn-submit');
    btn.classList.add('loading');

    // Save to localStorage
    const users = JSON.parse(localStorage.getItem('quickchef-users') || '[]');
    if (users.find(u => u.email === email)) {
        setTimeout(() => { btn.classList.remove('loading'); showToast('❌ Email already registered. Try signing in.', 'error'); }, 1000);
        return;
    }

    setTimeout(() => {
        btn.classList.remove('loading');
        users.push({ name, email, password });
        localStorage.setItem('quickchef-users', JSON.stringify(users));
        localStorage.setItem('quickchef-loggedin', JSON.stringify({ name, email }));
        showSuccess('Account Created! 🎉', 'Welcome to QuickChef, ' + name + '!');
    }, 1500);
});

// Google Sign In/Up
document.getElementById('googleSignIn').addEventListener('click', () => googleAuth());
document.getElementById('googleSignUp').addEventListener('click', () => googleAuth());

function googleAuth() {
    localStorage.setItem('quickchef-loggedin', JSON.stringify({ name: 'Google User', email: 'user@gmail.com' }));
    showSuccess('Google Sign-In Successful! 🎉', 'Redirecting to your kitchen...');
}

// Success Modal + Redirect
function showSuccess(title, msg) {
    document.getElementById('successTitle').textContent = title;
    document.getElementById('successMsg').textContent = msg;
    successOverlay.classList.add('active');
    setTimeout(() => { window.location.href = 'index.html'; }, 2800);
}

// Toast
function showToast(message, type = 'info') {
    const t = document.createElement('div');
    t.className = 'toast ' + type;
    t.textContent = message;
    toastContainer.appendChild(t);
    setTimeout(() => { t.classList.add('toast-exit'); setTimeout(() => t.remove(), 400); }, 3000);
}

// Check if already logged in
(function checkAuth() {
    const user = localStorage.getItem('quickchef-loggedin');
    if (user) { window.location.href = 'index.html'; }
})();
