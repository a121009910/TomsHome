
// 首页轮播图
let fir = $('.bar ul li:first').clone();
let las = $('.bar ul li:last').clone(); 
$('.bar ul').append(fir);
$('.bar ul').prepend(las);
let m=1,n=1;
let timer=null;

$('.bar ul li').height($('.bars').height())
$('.bar').stop().animate({ scrollTop: $('.bar ul li').height()*m },500)
$('.bar-prev').click(function(){
	clearInterval(timer);
	m--;
	if (m<1){
		m = $('.bar ul li').length-2;
		$('.bar').scrollTop($('.bar ul li').eq(0).height()*(m+1));
	}
	public();
	run();
}) 

$('.bar-next').click(function(){
	clearInterval(timer);
	m++;
	if (m>$('.bar ul li').length-2) {
		m = 1;
		$('.bar').scrollTop($('.bar ul li').eq(0).height()*(m-1));
	}
	public();
	run();
})

function run (){
	timer=setInterval(function(){
		m++;
		if (m>$('.bar ul li').length-2) {
			m = 1;
			$('.bar').scrollTop($('.bar ul li').eq(0).height()*(m-1));
		}
		public();
	},2000)
}
run();


$('.num li').click(function  () {
	clearInterval(timer);
	var i=$('.num li').index(this);
	console.log(i+1)
	m = i+1;
	n = i;
	public();
	run();
})

function public (){
	$('.bar').stop().animate({ scrollTop: $('.bar ul li').height()*m },500);
	$(".num li").each(function(){
		$(this).css({
			'color':'#fff',
			'borderBottom':'4px solid transparent'
		})
		$(".num li").eq(m-1).css({
			'color':'#5d4038',
			'borderBottom':'4px solid #5d4038'
		})
	});
}



// 店面轮播图

let shopFir = $('.shop-bar ul li:first').clone();
let shopLas = $('.shop-bar ul li:last').clone();
$('.shop-bar ul').append(shopFir);
$('.shop-bar ul').prepend(shopLas);
let a = 1,b = 1;
let timers = null;

$('.shop-bar ul li').width($('.shop-bar').width())
// alert($('.shop-bar ul li').width())
$('.shop-nav strong').html('0'+b+'/'+'0'+($('.shop-bar ul li').length-2))
$('.shop-bar').scrollLeft($('.shop-bar ul li').eq(0).width())
// 向左滑
$('.shop-prev').click(function(){
	clearInterval(timers)
	a--;
	if (a<0) {
		a=$('.shop-bar ul li').length-3;	
		$('.shop-bar').scrollLeft($('.shop-bar ul li').eq(0).width()*(a+1))
	}
	b--;
	if (b<1) {
		b=$('.shop-bar ul li').length-2;
	}
	shopmover();
	shoppublic();
})

// 向右滑
$('.shop-next').click(function(){
	clearInterval(timers)
	a++;
	if (a> $('.shop-bar ul li').length-2) {
		a=1;
		$('.shop-bar').scrollLeft($('.shop-bar ul li').eq(0).width()*(a-1))
	}
	b++;
	if (b> $('.shop-bar ul li').length-2) {
		b=1;
	}
	shopmover();
	shoppublic();
})

// 自动轮播
function shopmover (){
	timers=setInterval(function(){
		a++;
		if (a> $('.shop-bar ul li').length-2) {
			a=1;
			$('.shop-bar').scrollLeft($('.shop-bar ul li').eq(0).width()*(a-1))
		}
		b++;
		if (b> $('.shop-bar ul li').length-2) {
			b=1;
		}
		shoppublic();
	},3000)
}
shopmover();

function shoppublic (){
	$('.shop-bar').stop().animate({
		scrollLeft: $('.shop-bar ul li').eq(0).width()*a
	},1000)
	$('.shop-nav strong').html('0'+b+' / '+'0'+($('.shop-bar ul li').length-2));
}
