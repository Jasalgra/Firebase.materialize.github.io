//guides add into HTML to DOM
let guidesList = document.querySelector('.guides');



let setupGuide = function (data) {

    if (data.length) {
        let html = "";
        data.forEach(elementDoc => {
            let guide = elementDoc.data();
            console.log(guide);
            let li = `
            <li>
                <div class="collapsible-header grey"><i class="material-icons">filter_drama</i>${guide.title}</div>
                <div class="collapsible-body white"><span>${guide.content}</span></div>
            </li>
            `;
            html += li;
        });
        guidesList.innerHTML = html;
    } else {
        guidesList.innerHTML = "<h3>Load Guide after user log in</h3>";
    }
}



// FB = new Firebase('https://xxx.firebase.io')
// FB.auth(TOKEN, (err, result) => { 

// })
// FB.authAnonymously();
// FB.authWithPassword();
// FB.authWithOAuthPopup();
// FB.authWithOAuthToken();

// Users = FB.child('users')
// // Create
// user = Users.push(first: "Frank", last: "Sinatra");


// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
    // console.log(M.Modal.init(modals));

    // var instance = M.Modal.getInstance(modal);
    // instances.open();
    // instances.close();
    // instances.destroy();
    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
});
document.addEventListener('DOMContentLoaded', function () {

    // var instance = M.Modal.getInstance(elem);
    // instance.collapsible();
    // instance.close();
    // instance.destroy();
});

// $(document).ready(function(){
//     $('.collapsible').collapsible();
//   });


// fetch('https://rest-apiwdb.firebaseio.com/')
//   .then(response => response.json(console.log(response)))
//   .then(commits => alert(commits[0].author.login));