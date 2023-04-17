const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.gnb > li .sub')
const bg2 = document.querySelector('nav .bg2')
const bg = document.querySelector('#bg')
console.log(gnb)
for(let i of sub){
    i.style.height = '0'
    i.style.overflow = 'hidden'
    i.style.transition = 'all 0.3s'
}
bg2.style.height ='0'
bg2.style.transition = 'all 1s'
for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        for(let j of sub){
            j.style.height = '800px'
        }
        bg2.style.height = '800px'
        bg.style.background = '#fff'
    })
    i.addEventListener('mouseout',()=>{
        for(let j of sub){
            j.style.height = '0px'
        }
        bg2.style.height = '0px'
        bg.style.background = 'rgba(255,255,255,0.6)' // 따옴표에 ; 붙이면 작동 안 함
        bg.style.transition = 'all 0.3s'
    })
}