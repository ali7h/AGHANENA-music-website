// $(document).ready(funcation(){
//     $(funcation(){
//         $('.header').height("200px")
//     })
// })


$(document).ready(function(){



    $(function(){
        $('.herosection').height($(window).height());
        $(window).resize(function(){
            $('.sectionhero').height(($window).height());
        })
    })

    $(window).scroll(function(){
        if($(window).scrollTop()>=140){
            $(".header").css({
                "backgroundColor":"#0e1338",
            }
            )
        }
        else
            $(".header").css({
                "backgroundColor":"transparent",
            }
        )
    })


})



menu=document.querySelector('.fa-bars')
list=document.querySelector('.list')
lii=document.querySelector('.list ul')
links=document.querySelectorAll('li a')
countlist=0

document.addEventListener('click',function(e){
    if (e.target===menu&&countlist===0){
        list.style.display="flex"
        countlist+=1
        lii.style.cssText='flex-direction:column; position:absolute; top:80%; left:0px; width:100%;     background-color: rgb(0 0 0 / 90%);'    
    }
    else if(e.target===menu&&countlist>0){
        list.style.display='none'
        countlist-=1
    }
})

links.forEach(element => {
    
    element.onclick=function(){
        links.forEach(e=>{
            e.classList.remove('active')
        })
        element.classList.add("active")
    }
});




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  

