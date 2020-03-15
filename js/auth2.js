console.log(db);
console.log(db.collection('guides'));
console.log(db.collection('guides').get());

// listen fot Auth status changes
auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
        console.log("User LOG in", user);
        db.collection('guides').onSnapshot(takeDocs => {
            console.log(takeDocs.docs);
            setupGuide(takeDocs.docs);
            setupIU(user);
        })

    } else {
        console.log("User is log out!!!");
        setupGuide([]);
        setupIU(user);
    }
})


// create form  Reate Guide
let createForm = document.querySelector(".create-form");
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('guides').add({
        title: createForm['title'].value,
        content: createForm['content'].value
    }).then(() => {
        ////
        let modalcr = document.querySelector('#modal-create');
        M.Modal.getInstance(modalcr).close();
        createForm.reset();
        ////
    })
})

//SIGN UP
// const signupForm = document.querySelector('#signup-form');
const signupForm = document.querySelector('#signup-form');
console.log(signupForm);
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email, password);

    //sign up user 
    auth.createUserWithEmailAndPassword(email, password).then(credentialCard => {
        console.log(credentialCard.user);
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

//LOGOUT
let logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("User log out");
    });
})
//END LOGOUT

//LOGIN
let loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    console.log(email, password);

    auth.signInWithEmailAndPassword(email, password).then((credentialCard) => {
        console.log(credentialCard.user);
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})
    //END LOGIN
