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

var vm = new Vue({
    el: "#storyboxs",
    data:{
    text: ""
  }
})