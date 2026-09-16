const hambugger = document.querySelector(".nav-menu__container")
const navList = document.querySelector(".nav-list");
const heroSection = document.querySelector(".hero-section");
const btnSubscribe = document.querySelector(".btn-subscribe")
let emailInput = document.querySelector(".section-feature__container--input")
hambugger.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("active");
    navList.classList.toggle("hidden");
})
navList.addEventListener("click", (e) => {
    const link = e.target.closest(".nav-list__item--link")
    if (!link) return
     e.preventDefault()
    hambugger.classList.toggle("active")
    navList.classList.toggle("hidden")
    const id = link?.getAttribute("href")
    console.log(id)
    if (id) {
        console.log(document.querySelector(id))
        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
})

btnSubscribe.addEventListener("click",function (e){
    e.preventDefault()
    const value = emailInput.value.trim()
    if (value === "") return
    alert("Your submission was successful. ✅")
    emailInput.value = ""

})

const observeNavbar = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    console.log(entry.target)
})
observeNavbar.observe(heroSection)