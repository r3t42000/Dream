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
var classes =
[
  {name:"寫實",
  },
  {name:"科幻"},
  {name:"懸疑"},
  {name:"其他"}
]
var perspective =
[ {name:"開心",class:false},
  {name:"憤怒",class:false},
  {name:"哀傷",class:false},
  {name:"害怕",class:false},
  {name:"愛慕",class:false},
  {name:"贈恨",class:false},
  {name:"慾望",class:false},
  {name:"其他",class:false},
]

var special_Lists=
[
  {name:"夢冷汗或驚醒",class:false},
  {name:"清醒夢",class:false},
  {name:"夢遺",class:false},
  {name:"其他",class:false},
]

var dates = [
  ""
]


// "寫實","科幻","懸疑","其他"

var vm = new Vue({
  el:"#list",
  data:{
   thisMonth: "請選擇",
   thisDay: "請選擇",


   sleepHour:"請選擇",
   sleepMinutes:"請選擇",

   timeHour: "請選擇",
   timeMinutes: "請選擇",
   classdata: classes ,
   otherClass: "",
   classNumber: null,

   story_title: "夢境分享",
   perspective: perspective,
   perspective_num: null,
   mood_other: "",
   story_text: "",
   special_Lists: special_Lists,
   special_number: "",
   special_other: ""
  },
  methods:
  {
  	style_click:function(id)
  	{
  	this.classNumber=id
  	},
    perspective_click:function(id)
    {
    this.perspective[id].class = !this.perspective[id].class
    },

    special_click:function(id)
    {
      this.special_Lists[id].class = !this.special_Lists[id].class
    },

  },


})