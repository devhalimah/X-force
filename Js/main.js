let sections = document.querySelectorAll(".fields");
let inputs = document.querySelectorAll(".v > .inputs > input");
let next = document.querySelector("#next")

let index = 0;
next.onclick = ()=>{
  if(index == sections.length-1){
    document.querySelector(".button #next").style.display = "none";
    document.querySelector(".button button").style.display = "block"
    return index
  } else{
index++
  }

        
console.log(index)
slide(sections)
}
// left.onclick = ()=>{
//   if(index == 0){
//     index = carousel.length-1
//    }else{
// index--
//    }
//    slide(carousel)
//  slide(id)
// }
function slide(l){
  for(var i = 0; i < l.length; i++){
      l[i].classList.remove('v');
  }
  l[index].classList.add('v');
}