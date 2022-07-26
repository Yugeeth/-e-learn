window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

//FAQ
const faqs = document.querySelectorAll('.faq');  

faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        //change the icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

//sow/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav
const closeNav = () =>{
    menu.style.display ="none";
    closeBtn.style.display ="none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)