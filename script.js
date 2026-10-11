const hambugger = document.querySelector(".nav-menu__container")
const header = document.querySelector("header")
const navList = document.querySelector(".nav-list");
const heroSection = document.querySelector(".hero-section");
const btnSubscribe = document.querySelector(".btn-subscribe")
let emailInput = document.querySelector(".section-feature__container--input")
const sections = document.querySelectorAll("section")
const navMenu = document.querySelector(".nav-menu")

hambugger.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("active");
    navList.classList.toggle("nav-open")
})

navList.addEventListener("click", (e) => {
    const link = e.target.closest(".nav-list__item--link")
    if (!link) return
     e.preventDefault()
    hambugger.classList.toggle("active")
    navList.classList.toggle("nav-open")
    const id = link?.getAttribute("href")
    if (id) {
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

function updateNavOffset(){
    const totalHeight = header.offsetHeight;
    totalHeight
    document.documentElement.style.setProperty(
        "--header-height",`${totalHeight}px`
    )
}

updateNavOffset()
window.addEventListener("resize",updateNavOffset)
const navHeight = header.getBoundingClientRect().height
console.log(navHeight)
// const observer = new IntersectionObserver(entries=>{
//     const entry = entries[0]
    
// },{
//     root:null,
//     threshold:0,
//     rootMargin:`-${navHeight}px`
// })
// observer.observe(heroSection)

const heroSectionContent = document.querySelector(".hero-section__content")

const observeHeroSection = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    if (entry.isIntersecting){
        entry.target.querySelectorAll(":scope > *").forEach((element,index)=>{
             setTimeout(()=>{
            element.classList.add("animate-up")
        },index * 150)
        })
        observeHeroSection.unobserve(entry.target);
    }
})

observeHeroSection.observe(heroSectionContent)
