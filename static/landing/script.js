  var lines = $(".lines");
    var lineIndex = -1;

    function showNextLine() {
        ++lineIndex;
        if (lineIndex!=(lines.length-1)){
        lines.eq(lineIndex)
            .fadeIn(2000)
            .delay(3000)
            .fadeOut(2000, showNextLine);}
        else{
          lines.eq(lineIndex)
            .fadeIn(2000)
        }
    }


    showNextLine();

    function show() {


        AB = document.getElementsByClassName('overlay');

        AB[0].style.display = 'inline';
    }

    $(function() {

        setTimeout(show, 3000);
    });

    AOS.init({
   easing: 'ease-in-out',
   delay: 100,
 });

  $(document).ready(function() {



var first = new AudioFade('#scrollaudio', 200, 3500,1600).init();
var second = new AudioFade('#scrollaudio2', 1500, 3000).init();
var third = new AudioFade('#scrollaudio3', 4000).init();
});


  TweenLite.set("#leaf",{perspective:600})
  TweenLite.set("leaveimg",{xPercent:"-50%",yPercent:"-50%"})

  var total = 30;
  var warp = document.getElementById("leaf"),	w = window.innerWidth , h = window.innerHeight;

   for (i=0; i<total; i++){
     var Div = document.createElement('div');
     TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
     warp.appendChild(Div);
     animm(Div);
   }

   function animm(elm){
     TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
     TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
     TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
   };

  function R(min,max) {return min+Math.random()*(max-min)};
var myIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
 x[i].style.display = "none";
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}
x[myIndex-1].style.display = "block";
setTimeout(carousel, 3000); // Change image every 2 seconds
}
$('body').addClass('stop-scrolling');
$('body').bind('touchmove', function(e){e.preventDefault()});
setTimeout(function(){
  $('body').removeClass('stop-scrolling');
  $('body').unbind('touchmove')

},5000);
