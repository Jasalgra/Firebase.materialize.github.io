 //SIGN UP
const signupForm = document.querySelector('#modal-signup');
const signupForm2 = document.querySelector('#signup-form');
 console.log(signupForm);
 console.log(signupForm2);
 console.log("hhhh");
 
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();

// //get user info
//     const email = signupForm['signup-email'].value;
//     const password = signupForm['signup-password'].value;
// //     const email = document.querySelector('#signup-email').value;
// //     const password = document.querySelector('#signup-password').value;
//     console.log(email, password);

// })


//     

//     //sign up user 
//     //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#create-user-with-email-and-password
//     auth.createUserWithEmailAndPassword(email, password).then(credentialCard => {
//             console.log(credentialCard.user);
//             let modal = document.querySelector('#modal-signup');
//             M.Modal.getInstance(modal).close();
//             // signupForm.reset();
            
//             // signupForm.destroy();
            
//         });
//         // .catch(function(error) {
//         //     // Handle Errors here.
//         //     var errorCode = error.code;
//         //     var errorMessage = error.message;
//         //     if (errorCode == 'auth/weak-password') {
//         //       alert('The password is too weak.');
//         //     } else {
//         //       alert(errorMessage);
//         //     }
//         //     console.log(error);
//         //   });

//     //LOGOUT
//     let logout = document.querySelector('#logout');
//     logout.addEventListener('click', (e) => {
//         e.preventDefault();
//         auth.signOut().then(() => {
//             console.log("User log out");
//         });
//     })
//     //END LOGOUT

//     //LOGIN
//     let loginForm = document.querySelector('#modal-login');
//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const email = document.querySelector('#login-email').value;
//         const password = document.querySelector('#login-password').value;
//         console.log(email, password);

//         auth.signInWithEmailAndPassword(email, password).then((credentialCard) => {
//             console.log(credentialCard.user);
//             ;
//         })
      
//     })
//     //END LOGIN
    

    
// })