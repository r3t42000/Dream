$(document).ready(function()
{
    $(".menu_toggle").click(function(){
    if($(".menu_toggle.open").length>0)
    {
        $(".menu_toggle").removeClass("open")
        $(".navbar-nav").removeClass("open")
    }
    else
    {
        $(".menu_toggle").addClass("open")
        $(".navbar-nav").addClass("open")
    }

    })
})

var moods=
[
  {eg:"happy",name:"開心",class:false},
  {eg:"angry",name:"憤怒",class:false},
  {eg:"sad",name:"哀傷",class:false},
  {eg:"scared",name:"害怕",class:false},
  {eg:"love",name:"愛慕",class:false},
  {eg:"hate",name:"贈恨",class:false},
  {eg:"desire",name:"慾望",class:false},
  {eg:"other",name:"其他",class:false},
]
var vm = new Vue({
    el: "#storyboxs",
    data:{
        moods:moods

    }
})