	
	var lock = true;

	$('.head .head-btn').click(function(){
		$('.header').addClass('header-ap');
		$('.header').css({
			background: "rgba(254,167,39,0.8)"
		})
		$('.head-logo').addClass('head-logo-ap');
		$('.head-nav .nav').show();
		$('.colse').show();	
		$('.head-btn').hide();
		lock = false;
	})
	$('.colse').click(function(){
		$('.header').removeClass('header-ap');
		$('.head-logo').removeClass('head-logo-ap');
		$('.head-nav .nav').hide();
		$('.colse').hide();
		$('.head-btn').show()
		lock = true;
	})


	$(document).ready(function () {
		$(window).scroll(function () {
			// var lock = true;
			if(lock == true){
				if ( $(window).scrollTop() == 0) {
					//当底部基本距离+滚动的高度〉=文档的高度-窗体的高度时；
					//触发事件；加载动画
					$('.header').css({
						backgroundColor: "transparent",
					})
				}
				if ( $(window).scrollTop() != 0) {
					$('.header').css({
						background: "rgba(254,167,39,0.8)"
					})
				}
				console.log(0)
			}
		})
	})
	

	// jquery 兼容的滚轮事件
	// $(document).on("mousewheel DOMMouseScroll", function (e) {
	//     var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	//                  (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
	// 	if (delta > 0) {
	// 		// 向上滚
	// 		$('.header').css({
	// 			backgroundColor: "transparent"
	// 		})
	// 		// alert('上')
	// 	} else if (delta < 0) {
	// 		// 向下滚
	// 		$('.header').css({
	// 			backgroundColor: "#ffa827"
	// 		})
	// 	}
 // 	});
 


