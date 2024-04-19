document.body.style.overflow = 'hidden';
const HomeBtn = document.getElementById("Home-Btn");
const AboutBtn = document.getElementById("About-Btn");
const SkillsBtn = document.getElementById("Skills-Btn");
const PortfolioBtn = document.getElementById("Portfolio-Btn");
const ContactBtn = document.getElementById("Contact-Btn");
const NavBar = document.getElementById("NavBar");
const sectionCollapse = document.getElementById("sectionCollapse");
const ArrowUpBtn = document.getElementById("ArrowUpBtn");
const information = document.querySelectorAll("#information");
const LoaderBox = document.querySelector("#loader-box");
const portfolio_item = document.querySelectorAll(".portfolio-item");
const start_demo = document.querySelectorAll(".img-cover");
const reloadButton = document.getElementById("reloadButton");
const model_darkMood = document.getElementById("model-darkMood");
const ModelSite = document.getElementById("Model-href");
const downloadLink = document.getElementById('download-link');
const fileName = 'MohamedMahmoudCV.pdf';
const scrollVar = $("#Skills").offset().top;
const portfolio_details = ["E-commerce App Sopping Online Application", "weather application with a database of any country and website can set your location automatically with the run application", "find your favorite food and know how to prepare this meal", "you can add medicine to this website application and search for medicine you add to this website by medicine name and your data will be saved in local storage with reload your data will not be deleted you Leave the website your data will be saved and shown again when open again", "Online Book-Library A website where you can add books with his URL the books added not deleted with page Reloading", "BMW car show this website was made when i learning Java-Script ", "you can make an account easily and log in to your account This is a simplified example of a login page view", "Family Bakery Web Portfolio", "Restaurant portfolio web site"]
const portfolio_link = ["https://mohamedmahmoud512.github.io/Ecommerce/", "https://mohamedmahmoud512.github.io/weather-API/", "https://mohamedmahmoud512.github.io/Yummy-mail/", "https://mohamedmahmoud512.github.io/pharmacy/", "https://mohamedmahmoud512.github.io/Book-libarary/", "https://mohamedmahmoud512.github.io/car-project-s/", "https://mohamedmahmoud512.github.io/smart-login/", "https://www.engage.veented.com/bakery/", "https://routeegy.github.io/Mealify/"]
let modelName = document.getElementById("staticBackdropLabel");
let ModelBody = document.getElementById("Model-Body");
let ModelDetails = document.getElementById("Model-details");
let DarkMoodClick = true;
var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();
downloadLink.addEventListener('click', function () {
    downloadLink.setAttribute('download', fileName);
});
document.addEventListener("scroll", function (e) {
    scroll();
})
const exampleText = ['Developer', 'Designer', 'Engineer', 'Analyst', 'Freelancer'];
const exampleTyping = new AutoTyping('.selector', exampleText, {
    typeSpeed: 100,
    deleteSpeed: 50,
    waitBeforeDelete: 2000,
    waitBetweenWords: 100,
});
exampleTyping.start()
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
        ArrowUpBtn.classList.remove("d-flex");
        $("#ArrowUpBtn").hide(500);
    } else if (scroll > 5 && scroll < offset) {
        $('.navbar').slideUp(100);
    }
    else if (scroll > offset - 100) {
        $('.navbar').slideDown(500);
        NavBar.classList.add("position-fixed");
        ArrowUpBtn.classList.remove('d-none');
        ArrowUpBtn.classList.add("d-flex");
        $("#ArrowUpBtn").show(500);
    }
}
function ChangeMode() {
    if (DarkMoodClick) {
        DarkMood.classList.remove("fa-moon");
        DarkMood.classList.add("fa-sun");
        sectionCollapse.classList.add('bg-dark');
        model_darkMood.classList.add('bg-dark');
        sectionCollapse.classList.add('text-white');
        model_darkMood.classList.add('text-white');
        for (let index = 0; index < information.length; index++) {
            const element = information[index];
            element.classList.remove('font-color');
            element.classList.add('font-color-dark');
        }
        DarkMoodClick = false;
        localStorage.setItem("WebMood", "dark")
    } else {
        DarkMood.classList.remove("fa-sun");
        DarkMood.classList.add("fa-moon");
        sectionCollapse.classList.remove('bg-dark');
        model_darkMood.classList.remove('bg-dark');
        sectionCollapse.classList.remove('text-white');
        model_darkMood.classList.remove('text-white');
        for (let index = 0; index < information.length; index++) {
            const element = information[index];
            element.classList.remove('font-color-dark');
            element.classList.add('font-color');
        }
        DarkMoodClick = true;
        localStorage.setItem("WebMood", "light")
    }
}
reloadButton.addEventListener("click", function () {
    location.reload();
});
if (localStorage.getItem("WebMood") == "dark") {
    DarkMood.classList.remove("fa-moon");
    DarkMood.classList.add("fa-sun");
    sectionCollapse.classList.add('bg-dark');
    model_darkMood.classList.add('bg-dark');
    sectionCollapse.classList.add('text-white');
    model_darkMood.classList.add('text-white');
    for (let index = 0; index < information.length; index++) {
        const element = information[index];
        element.classList.remove('font-color');
        element.classList.add('font-color-dark');
    }
    DarkMoodClick = false;
} else if (localStorage.getItem("WebMood") == "light") {
    DarkMood.classList.remove("fa-sun");
    DarkMood.classList.add("fa-moon");
    sectionCollapse.classList.remove('bg-dark');
    model_darkMood.classList.remove('bg-dark');
    sectionCollapse.classList.remove('text-white');
    model_darkMood.classList.remove('text-white');
    model_darkMood.classList.add('text-dark');
    for (let index = 0; index < information.length; index++) {
        const element = information[index];
        element.classList.remove('font-color-dark');
        element.classList.add('font-color');
    }
    DarkMoodClick = true;
}
for (let index = 0; index < start_demo.length; index++) {
    const elements = start_demo[index];
    elements.addEventListener("click", function (e) {
        let element = e.target
        element.setAttribute("data-name", element.parentElement.nextElementSibling.innerText)
        modelName.innerText = element.getAttribute("data-name");
        ModelBody.src = element.src;
        ModelBody.alt = element.getAttribute("data-name");
        ModelDetails.innerText = portfolio_details[element.parentElement.getAttribute("data-index")]
        ModelSite.href = portfolio_link[element.parentElement.getAttribute("data-index")]
    })
}
$(document).ready(function () {
    $(".loader-box").hide(500, function () {
        $(".loader-box").addClass("d-none")
    })
    document.body.style.overflow = 'scroll';
    console.log("done");
});
