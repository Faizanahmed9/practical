import { auth } from './firebase-config.mjs';
import { signOut } from 'firebase/auth';

const usernameElement = document.getElementById('username');
const createPostButton = document.getElementById('createPost');

auth.onAuthStateChanged(user => {
    if (user) {
        usernameElement.textContent = user.displayName || user.email;
        // Load posts here
    } else {
        window.location.href = 'signin.html';
    }
});

createPostButton.addEventListener('click', () => {
    // Handle post creation
    console.log('Create new post functionality');
});

document.getElementById('signOut')?.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = 'signin.html';
    }).catch((error) => {
        console.error('Error signing out:', error.message);
    });
});
