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