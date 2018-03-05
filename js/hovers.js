
if ($(window).width()>1200) {
	
	$('.shop-list li').mouseover(function(){
		$(this).children('span').stop().animate({
			bottom: '22%'
		},200);
		
		$(this).children('p').stop().animate({
			bottom:'14%'
		},200);
	})
	$('.shop-list li').mouseout(function(){
		$(this).children('span').stop().animate({
			bottom: '18%'
		},200);
		$(this).children('p').stop().animate({
			bottom:'10%'
		},200);
	})
}


$('.column p a').click(function(){
	var i = $('.column p a').index(this);
	$(this).addClass('active').siblings('').removeClass('active');
	// console.log(i)
	$('.join-img>img').eq(i).addClass('shows').siblings('').removeClass('shows')
	// console.log()
})