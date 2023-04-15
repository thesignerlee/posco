//gnb li에 올리면 그 아래 ul sub가 나오는 식, Node 관계 처리
//3. gnb 자식 li에서 나가면 자식 sub 숨기기
const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.gnb li .sub')
const bg = document.querySelector('nav .bg')
console.log(gnb,sub, bg)
//1. 모든 서브 숨기기
for(let i of sub){
    i.style.height = '0'
    i.style.overflow = 'hidden'
    i.style.transition = 'all 1s'
}
    bg.style.height = '0'
    bg.style.overflow = 'hidden'
    bg.style.transition = 'all 1s'

//2. gnb 자식 li에 마우스를 올리면 자식 sub 보이기(Node 관계처리)
/* gnb.forEach((i, index)=>{
    i.addEventListener('mouseover',()=>{
        i.children[1].style.display = 'block'
    i.addEventListener('mouseout',()=>{
        i.children[1].style.display = 'none'
    })
    })
}) */
// for(let i of gnb){
    
//     /* i.children[1].style.zIndex = '-1' */
//     i.addEventListener('mouseover',()=>{
//         i.children[1].style.height = '300px'
//     })
//     i.addEventListener('mouseout',()=>{
//         i.children[1].style.height = '0'
//     })
// }
for(let i of gnb){
    /* i.children[1].style.zIndex = '-1' */
    i.addEventListener('mouseover',()=>{
        for(let j of sub){j.style.height = '300px'}
        bg.style.height = '400px'
    })
    i.addEventListener('mouseout',()=>{
        for(let j of sub){j.style.height = '0'}
        bg.style.height = '0px'
    })
}