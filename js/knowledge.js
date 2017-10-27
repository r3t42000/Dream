
$(document).ready(function(){
    $(".paginator .li").click(function(){
        var index = $(".paginator .li").index(this)
        console.log( index)
        var offset = $(".section").eq(index).offset().top
        console.log( offset)
        $("body,html").animate({scrollTop : offset},500)
        return false //作用？？？？
    })
  $(document).scroll(function(){
    var index = Math.round($(this).scrollTop()/$(window).height())
    $(".page .line").removeClass("active")
    $(".page .line").eq(index).addClass("active")

  })

})