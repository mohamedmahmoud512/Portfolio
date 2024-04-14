const HomeBtn = document.getElementById("Home-Btn");
const AboutBtn = document.getElementById("About-Btn");
const SkillsBtn = document.getElementById("Skills-Btn");
const PortfolioBtn = document.getElementById("Portfolio-Btn");
const ContactBtn = document.getElementById("Contact-Btn");
const NavBar = document.getElementById("NavBar");
const sectionCollaps = document.getElementById("sectionCollaps");
const ArrowUpBtn = document.getElementById("ArrowUpBtn");
const information = document.querySelectorAll("#information");
const reloadButton = document.getElementById("reloadButton");
const scrollVar = $("#Skills").offset().top;
let DarkMoodClick = true;
document.addEventListener("scroll", function (e) {
    scroll();
})
HomeBtn.addEventListener("click", function (e) {
    // window.location.href="index.html";
    e.target.classList.add("active");
    AboutBtn.classList.remove("active");
    SkillsBtn.classList.remove("active");
    PortfolioBtn.classList.remove("active");
    ContactBtn.classList.remove("active");
})

AboutBtn.addEventListener("click", function (e) {
    // window.location.href="index.html";
    e.target.classList.add("active");
    HomeBtn.classList.remove("active");
    SkillsBtn.classList.remove("active");
    PortfolioBtn.classList.remove("active");
    ContactBtn.classList.remove("active");
})

SkillsBtn.addEventListener("click", function (e) {
    // window.location.href="index.html";
    e.target.classList.add("active");
    AboutBtn.classList.remove("active");
    HomeBtn.classList.remove("active");
    PortfolioBtn.classList.remove("active");
    ContactBtn.classList.remove("active");
})

PortfolioBtn.addEventListener("click", function (e) {
    // window.location.href="index.html";
    e.target.classList.add("active");
    AboutBtn.classList.remove("active");
    SkillsBtn.classList.remove("active");
    HomeBtn.classList.remove("active");
    ContactBtn.classList.remove("active");
})

ContactBtn.addEventListener("click", function (e) {
    // window.location.href="index.html";
    e.target.classList.add("active");
    AboutBtn.classList.remove("active");
    SkillsBtn.classList.remove("active");
    PortfolioBtn.classList.remove("active");
    HomeBtn.classList.remove("active");
})
function scroll() {
    let scroll = $(window).scrollTop()
    let offset = $("#About").offset().top;
    if (scroll == 0) {
        $('.navbar').slideDown(100);
        ArrowUpBtn.classList.add('d-none');
        ArrowUpBtn.hide(500);
        ArrowUpBtn.classList.remove("d-flex");
    } else if (scroll > 5 && scroll < offset) {
        $('.navbar').slideUp(100);
    }
    else if (scroll > offset - 100) {
        $('.navbar').slideDown(500);
        NavBar.classList.add("position-fixed");
        ArrowUpBtn.classList.remove('d-none');
        ArrowUpBtn.show(500);
        ArrowUpBtn.classList.add("d-flex");
    }
}
function ChangeMode() {
    if (DarkMoodClick) {
        DarkMood.classList.remove("fa-moon");
        DarkMood.classList.add("fa-sun");
        sectionCollaps.classList.add('bg-dark');
        sectionCollaps.classList.add('text-white');
        for (let index = 0; index < information.length; index++) {
            const element = information[index];
            element.classList.remove('font-color');
            element.classList.add('font-color-dark');
        }
        DarkMoodClick = false;
        localStorage.setItem("WebMood","dark")
    } else {
        DarkMood.classList.remove("fa-sun");
        DarkMood.classList.add("fa-moon");
        sectionCollaps.classList.remove('bg-dark');
        sectionCollaps.classList.remove('text-white');
        for (let index = 0; index < information.length; index++) {
            const element = information[index];
            element.classList.remove('font-color-dark');
            element.classList.add('font-color');
        }
        DarkMoodClick = true;
        localStorage.setItem("WebMood","light")
    }
}
reloadButton.addEventListener("click", function () {
    location.reload();
});
if (localStorage.getItem("WebMood") == "dark") {
    DarkMood.classList.remove("fa-moon");
    DarkMood.classList.add("fa-sun");
    sectionCollaps.classList.add('bg-dark');
    sectionCollaps.classList.add('text-white');
    for (let index = 0; index < information.length; index++) {
        const element = information[index];
        element.classList.remove('font-color');
        element.classList.add('font-color-dark');
    }
    DarkMoodClick = false;
} else if (localStorage.getItem("WebMood") == "light") {
    DarkMood.classList.remove("fa-sun");
    DarkMood.classList.add("fa-moon");
    sectionCollaps.classList.remove('bg-dark');
    sectionCollaps.classList.remove('text-white');
    for (let index = 0; index < information.length; index++) {
        const element = information[index];
        element.classList.remove('font-color-dark');
        element.classList.add('font-color');
    }
    DarkMoodClick = true;
}








































const exampleText = ['Developer', 'Designer', 'Engineer', 'Analyst', 'Freelancer'];
const exampleTyping = new AutoTyping('.selector', exampleText, {
    typeSpeed: 100,
    deleteSpeed: 50,
    waitBeforeDelete: 2000,
    waitBetweenWords: 100,
});
exampleTyping.start()