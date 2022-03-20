const cancelbtn=document.querySelector('.cancel')
const hamburgerbtn=document.querySelector('.hambuger')
const menu=document.querySelector('.menu')
const main=document.querySelector('main')
const header=document.querySelector('header')
const supercarousel=document.querySelector('.supercarousel')
const alldiv=document.querySelectorAll('div')
const allh1=document.querySelectorAll('h1')
const allh2=document.querySelectorAll('h2')
const allmain=document.querySelectorAll('main')
const allfooter=document.querySelectorAll('footer')
const allspan=document.querySelectorAll('span')
const allbutton=document.querySelectorAll('button')
const allp=document.querySelectorAll('p')
const allElement=[...allp,...alldiv,...allh1,...allh2,...allmain,...allspan,...allfooter,...allbutton]

const footer=document.querySelector('footer')

if(footer.getBoundingClientRect().bottom<2){
footer.classList.add('fixedbottom')
}


const observer=new IntersectionObserver((elements)=>{
  elements.forEach(element=>{
    console.log(element)
  element.target.classList.toggle('hide',!element.isIntersecting)
  })
})
allElement.forEach(element=>{
  
  observer.observe(element)
})









cancelbtn.addEventListener('click',()=>{
 if (menu.classList.contains('active')) return
  menu.classList.add('active')
    menu.classList.remove('now')
})  
hamburgerbtn.addEventListener('click',()=>{
  menu.classList.remove('active')
    menu.classList.add('now')
})  

document.addEventListener('scroll',()=>{
  client=main.getBoundingClientRect()
  
  header.classList.toggle('fixed',client.top<=-1) 
    
  
})

//* carousel
setInterval(()=>{
  supercarousel.click()
},5000)
  var shot=document.querySelectorAll('.shot')
  shot.forEach((shot,index)=>{
    shot.style.left=index *100+'%'
    if(index==0) return
    shot.classList.add('noOpacity')
    // observer.observe(shot)
  })
var next=0
  var  now=0
  var prev=0
  var total=shot.length - 1
  var radio=document.querySelectorAll('.radio')
function changedot(e){
    radio.forEach(rad=>{
      rad.innerHTML=''
    })
    e.innerHTML='<div class="activepic"></div>'

  }
  
function move(pos){
  prev=now
  switch (pos) {
    case 'left' :
      if (now==0) {
        now=total + 1
      }
      now-=1
      break;
      case 'right' :
        
      if (now>=total) {
        now=-1
      }
      now+=1;
      break;
      default:
     pos=parseInt(pos)
    // alert(pos)
      // if(typeof pos!=Number) break;
      now=pos
      break;
      
      
  }
  next=now + 1
 if (next>total) {
   next=0
 } else if(next==0){
 next=total
   
 } 
  var prevdocs=document.getElementById(prev)
  var docs=document.getElementById(now)
     var nextdocs=document.getElementById(next)
  function opt(now){
    if (now<=0) {
      return true
    }else if (now>=total) {
      if (now-prev <=1) {
        return false
      }
      return true
    } else {
    return false  
    }
  }
  prevdocs.classList.add('noOpacity')
  prevdocs.style.left=-100+'%'
      // docs.scrollIntoView({behavior: 'instant',inline:'start',block:'nearest'})
      docs.style.left=0+'%'
      docs.classList.remove('noOpacity')
      
      handleClick(docs)
        nextdocs.style.left=100+'%'
console.log(prev+" "+now+" "+next)
}

   

  function handleClick(e){
    
      if (e.target && e.target.dataset.value==undefined) return
    radio.forEach(rad=>{
      rad.innerHTML=''
    })
  
    if (e.target) {
      
          e.target.innerHTML='<div class="activepic"></div>'
              
move(e.target.dataset.value)
return;
    }
   
    radio[now].innerHTML='<div class="activepic"></div>'

  }
  

  radio.forEach(rad=>{
    rad.addEventListener('click',handleClick)
  })
  
  
    document.addEventListener('resize',()=>{
      
        var docs=document.getElementById(now)
   
      shot.forEach((shot,index)=>{
    shot.style.left=index *100+'%'
          })
            docs.scrollIntoView({behavior: 'instant',inline:'start',block:'nearest'})

  })
  