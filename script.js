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
const projectSectionText = document.querySelector(".project-section__text")
const aboutSectionContent = document.querySelector(".about-section__content")
const aboutSectionStats = document.querySelector(".about-section__stats")
const lazyImages = document.querySelectorAll(".lazy-image")
const comunitySection = document.querySelector(".community-section")
const footerSection = document.querySelector(".section-footer")
const footerSectionContainer = document.querySelectorAll(".section-footer__container")
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
const observeSectionText = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    if (entry.isIntersecting){
        entry.target.querySelectorAll(":scope > *").forEach((element,index)=>{
             setTimeout(()=>{
            element.classList.add("animate-up")
        },index * 150)
        })
        observeSectionText.unobserve(entry.target);
    }
},{
    root:null,
    threshold:0,
    rootMargin:`-${navHeight}px 0px 0px 0px`
})

observeSectionText.observe(heroSectionContent)
observeSectionText.observe(featureSectionText)
observeSectionText.observe(projectSectionText)
observeSectionText.observe(comunitySection)



const observeAboutContent = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    if (entry.isIntersecting){
           entry.target.querySelectorAll(":scope > *").forEach((element,index)=>{
             setTimeout(()=>{
            element.classList.add("animate-up")
        },index * 150)
        })
        observeAboutContent.unobserve(aboutSectionContent)
    }

},{
    root:null,
    threshold:.25,
    rootMargin:`-${navHeight}px 0px `
})
observeAboutContent.observe(aboutSectionContent)

const observeAboutStats = new IntersectionObserver(entries=>{
    const entry = entries[0]
    if (!entry.isIntersecting) return
    entry.target.classList.add("zoom-out")
    observeAboutStats.unobserve(entry.target) 
},{
     root:null,
    threshold:.25,
    rootMargin:`-${navHeight}px 0px `
})

observeAboutStats.observe(aboutSectionStats)

const observeAboutStat = new IntersectionObserver(entries=>{
    const entry = entries[0]
    if (!entry.isIntersecting) return
        entry.target.querySelectorAll(":scope *").forEach(entry=>{
            entry.classList.add("animate-up")
        })
})
observeAboutStat.observe(aboutSectionStats)

const observeFeatureCard = new IntersectionObserver(entries=>{
    const entry = entries[0]
    if (entry.isIntersecting){
        entry.target.querySelectorAll(":scope > *").forEach((element,index)=>{
            setTimeout(()=>{
                element.classList.add("zoom-out")
            },index * 150)
        })
        observeFeatureCard.unobserve(entry.target)
    }
},{
    root:null,
    threshold:0.15,
    rootMargin:`-${navHeight}px 0px`    
})
observeFeatureCard.observe(footerSection)
observeFeatureCard.observe(featureSectionContainer)

const observeFooterContainer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if (!entry.isIntersecting) return
        entry.target.querySelectorAll(":Scope > *").forEach((element,index)=>{
            setTimeout(()=>{
                element.classList.add("animate-up")
            },index * 150)
        })
          observeFooterContainer.unobserve(entry.target)
    })
})

footerSectionContainer.forEach((element)=>{
    observeFooterContainer.observe(element)
})



const observeImage = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if (!entry.isIntersecting) return
        const image = entry.target
        image.addEventListener("load",(e)=>{
            e.preventDefault();
            image.classList.add("loaded")
        },{once:true})

        image.addEventListener("error",(e)=>{
            e.preventDefault();
            image.classList.add("load-error")
        })

        image.src = image.dataset.src

        observeImage.unobserve(image)
    })
},{
    root:null,
    rootMargin:`-${navHeight}px 0px`,
    threshold:0
})

lazyImages.forEach(element=>{
    observeImage.observe(element)
})
