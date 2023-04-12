document.addEventListener('DOMContentLoaded', (loaded) => {
    console.log('Document is ready.');
});
$(document).ready(function () {
    $(function () {
        $("#head").load("meta.html");
        $("#footer").load("footer.html"); //load meta and footer
        $("#header").load("header.html");
    });
    $(function(){
        $(window).on("scroll", function(){
            if($(window).scrollTop()>50){
                $(".menu-row").addClass("scrolled-menu");
            }else{                         /*changes header if scrolled down or not*/
                $(".menu-row").removeClass("scrolled-menu");
            }
        });
    });
    $(".masthead-slider>div:gt(0)").hide();
    setInterval(function () {
        $(".masthead-slider>div:first-child")
            .fadeOut(1000)
            .next()      /* changes pictures*/
            .fadeIn(1000)
            .end()
            .appendTo(".masthead-slider");
    }, 3000);
    document.getElementById("form").addEventListener("submit", function(){ /*alerts the user that their input has been submitted*/
        alert("Inquiry submitted.");
    });

});