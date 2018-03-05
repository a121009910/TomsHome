
$(document).ready(function () { 

    if ($('body').width()>1440) {
        // animate 页面动画
        $(window).scroll(function () {
                //$(window).scrollTop()这个方法是当前滚动条滚动的距离
                //$(window).height()获取当前窗体的高度
                //$(document).height()获取当前文档的高度
            if (( $(window).scrollTop()) >= ($(".about").offset().top - $(window).height() / 2)) {
                //当底部基本距离+滚动的高度〉=文档的高度-窗体的高度时；
                //触发事件；加载动画
                $('.abs .ab-test').animate({
                    left:'0'
                },1000,"linear")
                $('.abs .ab-test').animate({
                    backgroundColor: '#fff'
                })
                $('.abs .ab-img').animate({
                    right:'0'
                },1000,"linear")
            } //关于我们动画

            if (( $(window).scrollTop()) >= ($(".prod-list").offset().top - $(window).height() / 2)) {
                $('.prod-list .prod-lis:nth-child(3)').animate({
                    top:'876px',
                    opacity:'1'
                },1000,"linear")
                $('.prod-list .prod-lis:nth-child(4)').animate({
                    top:'876px',
                    opacity:'1'
                },1500,"linear")
            } // 产品展示动画 

            if (( $(window).scrollTop()) >= ($(".shops").offset().top - $(window).height() / 2)) {
                $('.shop-banner').animate({
                    left:'0'
                },1000,"linear")
                
                $('.shop-test').animate({
                    right:'0'
                },1000,"linear")

                $('.shop-test').animate({
                    backgroundColor: '#fff'
                })
            } // 店面展示动画 

            if (( $(window).scrollTop()) >= ($(".news").offset().top - $(window).height() / 2)) {
                $('.news .news-lis:nth-child(1)').animate({
                    top:'50',
                    opacity:1
                },800,"linear")
                
                $('.news .news-lis:nth-child(2)').animate({
                    top:'50',
                    opacity:1
                },1300,"linear")

                $('.news .news-lis:nth-child(3)').animate({
                    top:'50',
                    opacity:1
                },1800,"linear")
            } // 店面展示动画 
        });

        
        // 关于我们链接动画
        $(".about a").mouseover(function() {
            $(this).css({"background":"url('./img/more.png') 130px center no-repeat"});
            $(".about a span").stop().animate({
                width: '100%',
                opacity: '1',
            },500,"linear");
            $(this).stop().animate({
                color:"#fff"
            }, 500);
        });
        $(".about a").mouseout(function() {
            $(this).css({"background":"url('./img/mores.png') 130px center no-repeat"});
            $(".about a span").stop().animate({
                width: '0',
                opacity: '0',
            },500,"linear");
            $(this).stop().animate({
                color:"#5d4038"
            }, 500);
        });

        // 产品展示链接动画
        $(".prod .more").mouseover(function() {
            $(this).css({"background":"url('./img/more.png') 130px center no-repeat"});
            $(".prod .more span").stop().animate({
                width: '100%',
                opacity: '1',
            },500,"linear");
            $(this).stop().animate({
                color:"#fff"
            }, 500);
        });
        $(".prod .more").mouseout(function() {
            $(this).css({"background":"url('./img/mores.png') 130px center no-repeat"});
            $(".prod .more span").stop().animate({
                width: '0',
                opacity: '0',
            },500,"linear");
            $(this).stop().animate({
                color:"#5d4038"
            }, 500);
        });

        // 店铺展示链接动画
        $(".shops .more").mouseover(function() {
            $(this).css({"background":"url('./img/more.png') 130px center no-repeat"});
            $(".shops .more span").stop().animate({
                width: '100%',
                opacity: '1',
            },500,"linear");
            $(this).stop().animate({
                color:"#fff"
            }, 500);
        });
        $(".shops .more").mouseout(function() {
            $(this).css({"background":"url('./img/mores.png') 130px center no-repeat"});
            $(".shops .more span").stop().animate({
                width: '0',
                opacity: '0',
            },500,"linear");
            $(this).stop().animate({
                color:"#5d4038"
            }, 500);
        });


        // 新闻中心链接动画
        $(".news .more").mouseover(function() {
            $(this).css({"background":"url('./img/more.png') 130px center no-repeat"});
            $(".news .more span").stop().animate({
                width: '100%',
                opacity: '1',
            },500,"linear");
            $(this).stop().animate({
                color:"#fff"
            }, 500);
        });
        $(".news .more").mouseout(function() {
            $(this).css({"background":"url('./img/mores.png') 130px center no-repeat"});
            $(".news .more span").stop().animate({
                width: '0',
                opacity: '0',
            },500,"linear");
            $(this).stop().animate({
                color:"#5d4038"
            }, 500);
        });
    }
});