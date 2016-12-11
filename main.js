/*
 * Created by Administrator on 2016/12/4.
 */
window.onload = function(){
    var QuoteList = [];
    var currentQuote = "",currentAuthor = "";
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c','#18a689', '#9b59b6',
        '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    function loadQuote(){/*下载quote的JSON文件*/
        $.ajax({
            url: 'package.json',
            type: 'get',
            async:false,
            dataType: 'json',
            contentType: 'application/json',
            success: function(json){
                QuoteList = eval(json);

            },
            error: function (e) {
                console.log(e);
            }
        });
    }

    function getCurQuote(curArray) {/*取得quote*/
        currentAuthor = curArray.author;
        currentQuote = curArray.quote;
        var colorNum = Math.floor(Math.random()*13);
        $("html body").animate({
            backgroundColor: colors[colorNum],
        }, 1000);
        $(".quote-text").animate({
            opacity:0,
            color: colors[colorNum]
        }, 500 ,function(){
            $(this).animate({opacity : 1},500);
            $("#text").html(currentQuote);
            $("#author-name").html(currentAuthor);
        });
        $(".button").animate({
            backgroundColor: colors[colorNum]
        }, 1000);
        if( $("html body").css('background-color') == ["#342224",'#472E32']){
            $(".footer").animate({color:'#bfbbbb'},500);
        }
    }

    /*初始化页面*/
    loadQuote();
    getCurQuote(QuoteList[Math.floor(Math.random()*28)]);
    var ColorNum = Math.floor(Math.random()*13);
    $("html body").css('background-color',colors[ColorNum]);
    $(".quote-text").css('color',colors[ColorNum]);
    $(".button").css('background-color',colors[ColorNum]);


    /*一键分享*/
      $("#sina-quote").attr("href","http://v.t.sina.com.cn/share/share.php?title=" + "每日一句名人名言：" + currentQuote + "  -" + currentAuthor);
      $("#tencent-quote").attr("href","http://v.t.qq.com/share/share.php?title=" + "每日一句名人名言：" + currentQuote + "  -" + currentAuthor);
    /*end*/


    $("#new-quote").on('click', function () {
        getCurQuote(QuoteList[Math.floor(Math.random()*28)]);
    });













}