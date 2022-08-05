let mobileMenuButton = document.querySelector('.mobile-menu-button');
let menu = document.querySelector('.nav-bottom ul');
mobileMenuButton.addEventListener('click',()=>{
    if (mobileMenuButton.classList.contains('no-menu')){
        menu.style.display = "flex";
        mobileMenuButton.classList.remove('no-menu');
    }
    else{
        menu.style.display = "none";
        mobileMenuButton.classList.add('no-menu');
    };
    
})