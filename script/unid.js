const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.gnb > li .sub')
const sub_li = document.querySelectorAll('.sub > li')
const bg2 = document.querySelector('nav .bg2')
const bg = document.querySelector('#bg')
console.log(gnb.children)
//1. 모두 숨기기
/* bg2.style.display = 'none'
for(let i of sub){i.style.display = 'none'}
//2. gnb 마우스 오버 시 sub, bg2 보이기
for(let i of gnb){
    i.addEventListener('mouseover',()={
        bg2.style.display = 'block'
        for(let i of sub){i.style.display = 'block'}
    })
}
//함수
//2. gnb 마우스 오버 시 sub, bg2 보이기
function sub_func(value,bg){
    bg(bg말고 다른 이름 써야됨).style.background = bg
    bg2.style.display = value
    for(let i of sub){i.style.display = value}
sub_func('none')
for(let i of gnb){
    i.addEventListener('mouseover',()={
        sub_func('block','#fff)
    })
    //2. gnb 마우스 나갈 시 sub, bg2 숨기기
        i.addEventListener('mouseover',()={
        sub_func('block','rgba(255,255,255,0.6)')
    })
}
}
*/
for(let i of sub){
    i.style.opacity = '0'
    i.style.transition = 'all 0.3s'
}
bg2.style.height ='0'
bg2.style.transition = 'all 0.5s'
for(let i of gnb){
    console.log()
    i.addEventListener('mouseover',()=>{
        for(let j of sub){
            j.style.opacity = '1'
        }
        bg2.style.height = '70vh'
        bg.style.background = '#fff'
        i.children[1].style.background = '#eee'
        i.children[0].style.color = '#003a14'
    })
    i.addEventListener('mouseout',()=>{
        for(let j of sub){
            j.style.opacity = '0'
        }
        bg2.style.height = '0px'
        bg.style.background = 'rgba(255,255,255,0.6)' // 따옴표에 ; 붙이면 작동 안 함
        bg.style.transition = 'all 0.3s'
        i.children[1].style.background = '#fff'
        i.children[0].style.color = '#000'
    })
}
for(let k of sub_li){
    k.addEventListener('mouseover',()=>{
        k.children[0].style.color = '#003a14'
    })
    k.addEventListener('mouseout',()=>{
        k.children[0].style.color = '#000'
    })
}
