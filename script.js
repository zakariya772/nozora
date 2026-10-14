const hambugger = document.querySelector(".nav-menu__container")
const header = document.querySelector("header")
const navList = document.querySelector(".nav-list");
const heroSection = document.querySelector(".hero-section");
const heroImage = document.querySelector(".hero-section__image")
const btnSubscribe = document.querySelector(".btn-subscribe")
let emailInput = document.querySelector(".section-feature__container--input")
const sections = document.querySelectorAll("section")
const navMenu = document.querySelector(".nav-menu")
const featureSectionText = document.querySelector(".feature-section__text")
const featureSectionContainer = document.querySelector(".feature-section__container")

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

const heroSectionContent = document.querySelector(".hero-section__content")
const navHeight = header.getBoundingClientRect().height
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
},{
    root:null,
    threshold:0,
    rootMargin:`-${navHeight}px`
})

observeHeroSection.observe(heroSectionContent)

const observeHeroImage = new IntersectionObserver(entries=>{
    const entry = entries[0]
    if (entry.isIntersecting){
        console.log(entry.target)
        entry.target.classList.add("zoom-out")
        observeHeroImage.unobserve(entry.target)
    }
},{
    root:null,
    threshold:.5,
    rootMargin:`-${navHeight}px`
})

observeHeroImage.observe(heroImage)

const observeFeatureText = new IntersectionObserver(entries=>{
    const entry = entries[0]
    if (entry.isIntersecting){
        entry.target.querySelectorAll(":scope > *").forEach((element,index)=>{
            setTimeout(()=>{
                element.classList.add("animate-up")
            },index*150)
        })
    }
},{
    root:null,
    threshold:.25,
    rootMargin:`-${navHeight}px`
})

observeFeatureText.observe(featureSectionText)

const observeFeatureCard = new IntersectionObserver(entries=>{
    const entry = entries[0]
    if (entry.isIntersecting){
        entry.target.querySelectorAll(":scope > *").forEach((element,index)=>{
            setTimeout(()=>{
                element.classList.add("zoom-out")
            },index * 200)
        })
    }
},{
    root:null,
    threshold:.25,
    rootMargin:`-${navHeight}px`
})

observeFeatureCard.observe(featureSectionContainer)
