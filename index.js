let stars=document.getElementById('stars')
let moon=document.getElementById('moon')
let mountains3=document.getElementById('mountains3')
let mountains4=document.getElementById('mountains4')
let river=document.getElementById('river')
let boat=document.getElementById('boat')
let mountains7=document.getElementById('mountains7')

window.onscroll=function(){
    let value=scrollY;
   stars.style.left=value +'px'
   moon.style.top=value*3 +'px'
  river.style.top=value +'px'
 mountains3.style.top=value*1.5 +'px' 
 mountains4.style.top=value *1.2+'px' 
 boat.style.left=value*3 +'px'
 boat.style.top=value +'px'
 if(scrollY>=127){
    document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)'
 }
 
 if(scrollY<=127){
    document.querySelector('.main').style.background='linear-gradient(rgb(62, 2, 31),rgb(12, 0, 25))'
 }


}