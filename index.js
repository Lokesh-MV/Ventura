

let Hamburger = document.getElementById('Hamburger');
let MobileNavBarContent = document.getElementById('smNavBarContent');

// Hamburger.addEventListener(onclick, () => {
//     if (MobileNavBarContent.style.display == 'none') {
//         MobileNaveBarContnt.style.display == 'block';
//     }
//     if (MobileNavBarContent.style.display == 'block') {
//         MobileNavBarContent.style.display == 'none'
//     }
//     console.log('nothing');
// })

function barClicked() {
    if (MobileNavBarContent.style.display == 'none') {
        MobileNavBarContent.style.display = 'block';
    } else {
        MobileNavBarContent.style.display = 'none'
    }
}


function sendEmail() {
    let userName = document.getElementById('name').value;
    let mailId = document.getElementById('email').value;
    let mobileNo = document.getElementById('mobile').value;
    let message = document.getElementById('message').value;

    totalBody = "User Name : " + userName + "<br />" + "Mobile Number : " + mobileNo + "<br />" + "Email id : " + mailId + "<br />" + "Message : " + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "info@venturaoverseas.com",
        Password: "570E555A8076B5F2109EC1C4A6FD84D62010",
        To: "ventura.abroad@gmail.com",
        From: "info@venturaoverseas.com",
        Subject: userName + " wants to contact you.",
        Body: totalBody
    }).then(
    )
}

function sendEmailMobile() {
    let userName = document.getElementById('nameMobile').value;
    let mailId = document.getElementById('emailMobile').value;
    let mobileNo = document.getElementById('mobileMobile').value;
    let message = document.getElementById('messageMobile').value;

    totalBody = "User Name : " + userName + "<br />" + "Mobile Number : " + mobileNo + "<br />" + "Email id : " + mailId + "<br />" + "Message : " + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "info@venturaoverseas.com",
        Password: "570E555A8076B5F2109EC1C4A6FD84D62010",
        To: 'ventura.abroad@gmail.com',
        From: "info@venturaoverseas.com",
        Subject: userName + " wants to contact you",
        Body: totalBody
    }).then(
    )
}