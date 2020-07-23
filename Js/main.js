let sections = document.querySelectorAll(".fields");

let index = 0;
$(document).ready(()=>{
$("#next").on({
  mouseover: ()=>{
if($(".v input").val() == ""){
  $("#next").css({
    "cursor": "not-allowed",
    "pointer-event": "none"
  })
}else{
  $("#next").css({
    "cursor": "pointer",
  })
}
  },
  click: ()=>{
    if($(".v input").val() == ""){
      $(".inputs").css("border-color","#F73617")
      $(".err").css({
        "border-color": "#F55A42",
        "display": "block"
      })
      $(".err").html("Some Fields aren't filled yet")
    }else{
      if(index == sections.length-1){
        $(".button #next").css("display", "none")
        $(".button button").css("display", "block")
        return index
      } else{
    index++
      }
      $(".err").css({
        "display": "none"
      })
      $(".inputs").css("border-color","initial")
    }
 
slide(sections)
  }
})
})
function slide(l){
  for(var i = 0; i < l.length; i++){
      l[i].classList.remove('v');
  }
  l[index].classList.add('v');
}