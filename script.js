

const txtAnim = document.querySelector("h2");

new Typewriter(txtAnim,{
    loop: true,
    deleteSpeed: 20
})
.pauseFor(600)
.changeDelay(50)
.typeString("<strong><u>Moi c'est enzo</u> </strong>")
.pauseFor(100)
.typeString("<span style=color:#ff733d><strong><br>Passionné d'informatique</strong></span>" )
.pauseFor(350)
.deleteChars(24)
.typeString("<span style=color:red>Curieux et autodidacte</span>")
.pauseFor(350)
.deleteChars(22)
.typeString("<span style=color:blue>Avec la soif d'apprendre !</span>")
.pauseFor(350)
.deleteChars(26)
.start()

// DECLENCHEMENT PARTIE DEV

//DECLENCHEMENT TEXTE COMPETENCES DEV
const TextAnimationDev = document.querySelector(".competences h3");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = TextAnimationDev.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        TextAnimationDev.classList.add('active')
    }
})



// declenchement anim au scroll pour html
const svgHtmlCSSAnimation = document.querySelector(".boxhtmlCSS svg circle:nth-child(2)");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = svgHtmlCSSAnimation.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        svgHtmlCSSAnimation.classList.add('active')
    }
})

// declenchement anim au scroll pour css
const svgPythonAnimation = document.querySelector(".boxPython svg circle:nth-child(2)");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = svgPythonAnimation.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        svgPythonAnimation.classList.add('active')
    }
})

// declenchement anim au scroll pour javascript
const svgJSAnimation = document.querySelector(".boxjs svg circle:nth-child(2)");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = svgJSAnimation.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        svgJSAnimation.classList.add('active')
    }
})

// declenchement anim au scroll pour php
const svgPHPAnimation = document.querySelector(".boxphp svg circle:nth-child(2)");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = svgPHPAnimation.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        svgPHPAnimation.classList.add('active')
    }
})


// DECLENCHEMENT PARTIE GRAPHISME


//DECLENCHEMENT TEXTE COMPETENCES GRAPHISME
const TextAnimationGraphisme = document.querySelector(".competencesGraphisme h3");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = TextAnimationGraphisme.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        TextAnimationGraphisme.classList.add('active')
    }
})

// declenchement anim au scroll pour première pro
const svgLinuxAnimation = document.querySelector(".boxLinux svg circle:nth-child(2)");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = svgLinuxAnimation.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        svgLinuxAnimation.classList.add('active')
    }
})

// declenchement anim au scroll pour after effects
const svgCISCOAnimation = document.querySelector(".boxCISCO svg circle:nth-child(2)");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = svgCISCOAnimation.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        svgCISCOAnimation.classList.add('active')
    }
})

// declenchement anim au scroll pour photoshop
const svgTCPIPAnimation = document.querySelector(".boxTCPIP svg circle:nth-child(2)");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = svgTCPIPAnimation.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        svgTCPIPAnimation.classList.add('active')
    }
})

// declenchement anim au scroll pour illustrator
const svgBDDAnimation = document.querySelector(".boxBDD svg circle:nth-child(2)");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = svgBDDAnimation.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        svgBDDAnimation.classList.add('active')
    }
})


//DECLENCHEMENT TEXTE ETUDES ENVISAGES
const TextAnimationEtude = document.querySelector(".PresentationContainer h3");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = TextAnimationEtude.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        TextAnimationEtude.classList.add('active')
    }
})

//DECLENCHEMENT TEXTE pourquoi BTS
const TextAnimationPourquoiBTS = document.querySelector(".PourquoiBTS h3");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = TextAnimationPourquoiBTS.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        TextAnimationPourquoiBTS.classList.add('active')
    }
})

//DECLENCHEMENT TEXTE pourquoi BUT
const TextAnimationPourquoiBUT = document.querySelector(".PourquoiBUT h3");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = TextAnimationPourquoiBUT.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        TextAnimationPourquoiBUT.classList.add('active')
    }
})

//DECLENCHEMENT TEXTE Expérience pro
const TextAnimationExperiencePro = document.querySelector(".ExperiencePro h3");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = TextAnimationExperiencePro.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        TextAnimationExperiencePro.classList.add('active')
    }
})

//DECLENCHEMENT TEXTE AUTRES PASSIONS
const TextAnimationAutresPassions = document.querySelector(".AutresPassions h3");

window.addEventListener("scroll",() => {

    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElementToTopViewport = TextAnimationAutresPassions.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        TextAnimationAutresPassions.classList.add('active')
    }
})