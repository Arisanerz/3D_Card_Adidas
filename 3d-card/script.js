const block = document.querySelector('.container')
const card = document.querySelector('.card')
const img = document.querySelector('.image-box img')
const circle = document.querySelector('.circle')
const title = document.querySelector('.card h3')
const text = document.querySelector('.card p')
const btns = document.querySelector('.btn-box')
const link = document.querySelector('.card a')

block.addEventListener('mousemove', (e) =>{

 const mouseX = e.clientX
 const mouseY = e.clientY

 const windowWidth = window.innerWidth
 const windowHeight = window.innerHeight

 const x = windowWidth / 2 - mouseX
 const y = windowHeight / 2 - mouseY

 card.style.transform = `rotateX(${x / 25}deg) rotateY(${y / 25}deg)`

 img.style.transform = `translateZ(70px) rotate(45deg)`
 circle.style.transform = `translateZ(-30px) scale(0.8)`
 title.style.transform = `translateZ(40px)`
 text.style.transform = `translateZ(20px)`
 btns.style.transform = `translateZ(25px)`
 link.style.transform = `translateZ(60px)`

})

block.addEventListener('mouseleave', () =>{

    card.style.transform = `rotateX(0deg) rotateY(0deg)`
    card.style.transition = '0.5s'

    img.style.transform = `translateZ(0px) rotate(0deg)`
    circle.style.transform = `translateZ(0px) scale(1)`
    title.style.transform = `translateZ(0px)`
    text.style.transform = `translateZ(0px)`
    btns.style.transform = `translateZ(0px)`
    link.style.transform = `translateZ(0px)`
})