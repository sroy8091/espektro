!function(a,b){a(".wq_IsFlip").flip(),a(document).on("click",".wq_btn-continue",function(b){b.preventDefault();var c=a(this).closest(".wq_quizCtr"),d=parseInt(c.data("current-question")),e=c.data("transition_in"),f=c.data("transition_out"),g=c.find(".wq_questionsCtr > .wq_singleQuestionWrapper").eq(d),h=parseInt(c.data("questions")),i=parseInt(c.data("questions-answered")),j=parseInt(i/h*100);parseInt(c.data("quiz-timer"));g.next().length&&(g.transition({animation:f,onComplete:function(){g.hide(),g.next().transition({animation:e}),c.data("current-question",d+1)}}),c.find(".wq_quizProgressValue").animate({width:j+"%"}).text(j+"%"),a("html, body").animate({scrollTop:c.offset().top-35},750))}),a(document).on("click",".wq_shareFB",function(b){b.preventDefault();var c=a(this).closest(".wq_quizCtr"),d=c.data("share-url"),e=c.find(".wq_singleResultWrapper:visible"),f=e.find(".wq_resultDesc").text(),g=e.find(".wq_resultImg").attr("src"),h=c.data("featured-image"),j=c.data("excerpt");if("undefined"==typeof f||""==f){for(metas=document.getElementsByTagName("meta"),i=0;i<metas.lenght;i++)"og:description"==metas[i].getAttribute("property")&&(descrition=metas[i].getAttribute("content"));d=a(".wq_quizCtr").data("share-url"),g=a(".wq_quizCtr").data("featured-image"),h=a(".wq_quizCtr").data("featured-image")}if(console.log("URL: "+d),console.log(f),e.hasClass("wq_IsTrivia"))var k=parseInt(c.data("correct-answered")),l=parseInt(c.data("questions")),m=wq_l10n.captionTriviaFB.replace("%%score%%",k).replace("%%total%%",l);else if(e.hasClass("wq_IsPersonality"))var m=e.find(".wq_resultTitle").data("title");else var m=c.data("post-title");FB.ui({method:"feed",link:d,name:m,description:f?f:j,picture:g?g:h},function(a){})}),a(document).on("click",".wq_shareTwitter",function(b){b.preventDefault();var c=a(this).closest(".wq_quizCtr"),d=c.data("share-url"),e=c.find(".wq_singleResultWrapper:visible");if(e.hasClass("wq_IsTrivia"))var f=parseInt(c.data("correct-answered")),g=parseInt(c.data("questions")),h=wq_l10n.captionTriviaFB.replace("%%score%%",f).replace("%%total%%",g);else if(e.hasClass("wq_IsPersonality"))var h=e.find(".wq_resultTitle").data("title");else var h=c.data("post-title");if("undefined"==typeof h){var j=document.getElementsByTagName("meta");for(i=0;i<j.length;i++)"twitter:description"==j[i].getAttribute("name")&&(h=j[i].getAttribute("content"))}"undefined"==typeof d&&(d=a(".wq_quizCtr").data("share-url")),window.open("https://twitter.com/share?url="+d+"&text="+encodeURI(h),"_blank","width=500, height=300")}),a(document).on("click",".wq_shareGP",function(b){b.preventDefault();var c=a(this).closest(".wq_quizCtr"),d=c.data("share-url");"undefined"==typeof d&&(d=a(".wq_quizCtr").data("share-url")),window.open("https://plus.google.com/share?url="+d,"_blank","width=500, height=300")}),a(document).on("click",".wq_shareVK",function(b){b.preventDefault();var c=a(this).closest(".wq_quizCtr"),d=c.data("share-url");window.open("http://vk.com/share.php?url="+d,"_blank","width=500, height=300")}),a(document).on("click",".wq_retakeQuizBtn",function(b){b.preventDefault(),console.log("Retake start!");var c=a(this).closest(".wq_quizCtr"),d=c.data("transition_in"),e=c.data("transition_out"),f=c.data("question-layout");c.data("current-question",0),c.data("questions-answered",0),c.data("correct-answered",0),c.find(".wq_quizProgressValue").animate({width:"0%"}).text(""),c.find(".wq_questionsCtr > .wq_singleQuestionWrapper").each(function(){a(this).find(".wq_triviaQuestionExplanation").removeClass("transition visible"),a(this).find(".wq_triviaQuestionExplanation").hide(),a(this).find(".wq_singleAnswerCtr").removeClass("wq_incorrectAnswer wq_correctAnswer chosen wq_answerSelected"),a(this).find(".wq_ExplanationHead").removeClass("wq_correctExplanationHead wq_wrongExplanationHead"),a(this).data("question-answered",1),a(this).removeClass("wq_questionAnswered")}),c.find(".wq_singleResultWrapper, .wq_singleResultRow").data("points",0),c.find(".wq_questionsCtr").show(),c.find(".wq_singleResultWrapper.transition.visible").transition({animation:e,onComplete:function(){c.find(".wq_singleResultWrapper").hide(),"multiple"==f&&c.find(".wq_questionsCtr > .wq_singleQuestionWrapper:last").transition({animation:e,onComplete:function(){c.find(".wq_questionsCtr > .wq_singleQuestionWrapper:eq(0)").transition({animation:d})}}),c.find(".wq_singleResultWrapper, .wq_resultsTable, .wq_shareResultCtr, .wq_resultsCtr, .wq_quizEmailCtr, .wq_quizForceShareCtr, .wq_retakeQuizBtn, .wq_retakeQuizCtr").removeClass("transition hidden visible"),c.find(".wq_resultExplanation, .wq_quizEmailCtr, .wq_quizForceShareCtr, .wq_retakeQuizBtn").hide()}}),a("html, body").animate({scrollTop:c.offset().top-35},750),a(this).removeClass("transition visible").hide()}),a(document).ready(function(){function b(b){a(".wq_IsFlip .back").each(function(){var c=a(this).find("img").attr("src"),d=a(this).siblings(".item_top").height();if(a(this).css("top",d+"px"),""==c){var e=this;if(a(this).siblings(".front").find("img").on("load",function(){a(e).find(".desc").height(a(this).height())}),"resize"==b.type){var f=a(this).siblings(".front").find("img").height();a(this).find(".desc").height(f)}}})}a(window).on("resize",b),a(document).on("ready",b),a(window).trigger("resize")})}(jQuery,window),function(a,b){function c(b,c){var d=b.data("transition_in"),f=(b.data("transition_out"),parseInt(b.data("correct-answered"))),g=parseInt(b.data("questions")),k=(parseInt(b.data("display-answers")),parseInt(b.data("quiz-pid")),b.data("ajax-url"),parseInt(b.data("retake-quiz")));b.find(".wq_continue").hide();var l=!1;b.find(".wq_singleResultWrapper").each(function(){var b=parseInt(a(this).data("min")),c=parseInt(a(this).data("max"));if(f>=b&&f<=c&&!l){l=!0;var h=wq_l10n.captionTrivia.replace("%%score%%",f).replace("%%total%%",g);return a(this).find(".wq_resultScoreCtr").text(h),void a(this).transition({animation:d})}}),k&&b.find(".wq_retakeQuizBtn").transition({animation:d})}a(document).on("click",".wq_singleQuestionWrapper:not(.wq_questionAnswered) .wq_singleAnswerCtr.wq_IsTrivia",function(b){b.preventDefault();var d=parseInt(a(this).data("crt")),e=a(this).closest(".wq_singleQuestionWrapper"),f=a(this).closest(".wq_quizCtr"),i=(f.data("transition_in"),f.data("transition_out"),parseInt(f.data("questions"))),j=parseInt(f.data("questions-answered"))+1,l=(parseInt(j/i*100),parseInt(f.data("correct-answered"))),m=parseInt(f.data("current-question")),n=a(".wq_questionsCtr > .wq_singleQuestionWrapper").eq(m),p=(parseInt(f.data("quiz-timer")),f.data("question-layout")),q=parseInt(f.data("auto-scroll"));if(e.addClass("wq_questionAnswered"),1===d?(a(this).addClass("wq_correctAnswer chosen"),e.find(".wq_triviaQuestionExplanation .wq_ExplanationHead").text(wq_l10n.correct).addClass("wq_correctExplanationHead"),l++,f.data("correct-answered",l)):(e.find(".wq_singleAnswerCtr").each(function(){1==a(this).data("crt")&&a(this).addClass("wq_correctAnswer")}),a(this).addClass("wq_incorrectAnswer chosen"),e.find(".wq_triviaQuestionExplanation .wq_ExplanationHead").text(wq_l10n.wrong).addClass("wq_wrongExplanationHead")),"single"==p){var m=parseInt(f.data("current-question"));f.data("current-question",m+1)}else e.find(".wq_continue").show();if(f.data("questions-answered",j),e.find(".wq_triviaQuestionExplanation").show(),1===q&&a("html, body").animate({scrollTop:e.find(".wq_triviaQuestionExplanation").offset().top-35},750),i===j)return f.find(".wq_quizProgressValue").animate({width:"100%"}).text("100%"),void c(f,n)})}(jQuery,window),function(a,b){a(document).on("click",".wq_singleQuestionWrapper:not(.wq_questionAnswered) .wq_singleAnswerCtr.wq_IsPersonality",function(b){b.preventDefault();var c=a(this).closest(".wq_quizCtr"),d=JSON.parse(a(this).find(".wq_singleAnswerResultCtr").val()),e=a(this).closest(".wq_singleQuestionWrapper"),f=parseInt(e.data("question-answered")),g=parseInt(c.data("questions-answered")),h=parseInt(c.data("questions")),i=c.data("transition_in"),l=(c.data("transition_out"),parseInt(c.data("quiz-pid")),parseInt(c.data("retake-quiz"))),m=c.data("question-layout"),o=(c.data("ajax-url"),parseInt(c.data("auto-scroll")));if(e.addClass("wq_questionAnswered"),e.find(".wq_singleAnswerCtr.wq_answerSelected").each(function(){var b=JSON.parse(a(this).find(".wq_singleAnswerResultCtr").val());""!==b&&b.forEach(function(a,b,d){var e=c.find('.wq_singleResultWrapper[data-rid="'+b+'"]'),f=parseInt(e.data("points"))-parseInt(a.points);e.data("points",f)})}),""!==d&&d.forEach(function(a,b,d){var e=c.find('.wq_singleResultWrapper[data-rid="'+b+'"]'),f=parseInt(e.data("points"))+parseInt(a.points);e.data("points",f)}),1===f&&(g++,e.data("question-answered",2),c.data("questions-answered",g)),a(this).addClass("wq_answerSelected"),"single"==m){var p=parseInt(c.data("current-question"));c.data("current-question",p+1),e.next().length&&1===o&&a("html, body").animate({scrollTop:e.next().offset().top-75},750)}else e.find(".wq_btn-continue").trigger("click");if(h===g){c.find(".wq_quizProgressValue").animate({width:"100%"}).text("100%"),a("html, body").animate({scrollTop:c.find(".wq_resultsCtr").offset().top-75},750);var q=null,r=0;c.find(".wq_singleResultWrapper").each(function(){var b=parseInt(a(this).data("points"));b>r&&(r=b,q=this)});var s=a(q).find(".wq_resultTitle").data("title");a(q).find(".wq_resultTitle").text(s),a(q).transition({animation:i}),l&&c.find(".wq_retakeQuizBtn").transition({animation:i})}})}(jQuery,window);