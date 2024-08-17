// import { auth } from './firebase-config.mjs';

// import { auth } from './firebase-config.mjs';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '


// document.getElementById('signUpForm')?.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;

//     if (password === confirmPassword) {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in
//                 console.log('User signed up:', userCredential.user);
//                 window.location.href = 'dashboard.html';
//             })
//             .catch((error) => {
//                 console.error('Error signing up:', error.message);
//             });
//     } else {
//         alert('Passwords do not match');
//     }
// });

// document.getElementById('signInForm')?.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             console.log('User signed in:', userCredential.user);
//             window.location.href = 'dashboard.html';
//         })
//         .catch((error) => {
//             console.error('Error signing in:', error.message);
//         });
// });



import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';


document.getElementById('signUpForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up:', userCredential.user);
            window.location.href = 'dashboard.html';
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    } else {
        alert('Passwords do not match');
    }
});


document.getElementById('signInForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error('Error signing in:', error.message);
    }
});
