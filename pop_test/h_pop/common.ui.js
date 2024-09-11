/**
 * Created by CREWMATE on 2017.09.14
 * @author : Publishing Team.
 * @dependency : jquery ver 1.12.4+
 * @env : MOBILE.
*/

var HDFUINEW = HDFUINEW || {};

HDFUINEW.mainTopSwipeFunction = function () {
	var mainSetCon = {
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		centeredSlides: false,
		slideClass: 'visual_item',
		scrollbar: '.swiper-scrollbar',
		speed: 500,
		observer: true,
		observeParents: true,
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		lazy: {
			loadPrevNext: true,
		},
		loop: true,
		pagination: {
			el: '.visual_pagination',
			type: 'custom',
			renderCustom: function (mainwiper, current, total) {
				var customPaginationHtml = "";
				for(var i = 0; i < total; i++) {
					//Determine which pager should be activated at this time
					if(i == (current - 1)) {
						customPaginationHtml += '<span class="visual-pagination-customs visual-pagination-customs-active"></span>';
					}else{
						customPaginationHtml += '<span class="visual-pagination-customs"></span>';
					}
				}
				if(total < 10){
					total = "0" + total
				}
				if(current < 10){
					current = "0" + current
				}
				var fraction =  current + '<span class="space">/</span>'  + '<span class="num_total">'+total+'</span>'; // 마크업과 스타일 수정하세요.
				return  fraction;
			}
		},
		setWrapperSize: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
		// [pub]2023-01-11 GA4 script 작업 Start
		on: {
			/* GA4 메인 리뉴얼 20230616 : 소스 삭제
			touchEnd: function () {
				GA_Event('click_MO_국문_메인', '메인배너', '메인배너', '스와이프');
			}, */ 
			//2023-05-30 비디오 레이지 로딩
			slideChangeTransitionStart : function() {
				if($(".main_swiper .swiper-slide-prev video.video-lazy").length){
					var prevVideoUrl = $(".main_swiper .swiper-slide-prev video.video-lazy").attr("data-url");
					//console.log(prevVideoUrl);
					$(".main_swiper .swiper-slide-prev video.video-lazy").removeAttr("data-url");
					$(".main_swiper .swiper-slide-prev video.video-lazy").attr("src",prevVideoUrl);
					$(".main_swiper .swiper-slide-prev video.video-lazy, .main_swiper").removeClass("video-lazy");
				}
				if($(".main_swiper .swiper-slide-next video.video-lazy").length){
					var nextVideoUrl = $(".main_swiper .swiper-slide-next video.video-lazy").attr("data-url");
					//console.log(nextVideoUrl);
					$(".main_swiper .swiper-slide-next video.video-lazy").removeAttr("data-url");
					$(".main_swiper .swiper-slide-next video.video-lazy").attr("src",nextVideoUrl);
					$(".main_swiper .swiper-slide-next video.video-lazy").removeClass("video-lazy");
				}
	        },
		}
		// [pub]2023-01-11 GA4 script 작업 End
	};
	var mainSetConOne = {
		loop: false,
		watchOverflow:true,
	};
	if($(".main_swiper .visual_item").length == 1) {
		var mainwiper = new Swiper('.main_swiper', mainSetConOne);
	}else{
		var mainwiper = new Swiper('.main_swiper', mainSetCon);
	}
	
	//2023-05-30 비디오 레이지 로딩 - 1번 슬라이드가 비디오일 경우
	var videoUrl = $(".main_swiper .swiper-slide-active video.video-lazy").attr("data-url");
	$(".main_swiper .swiper-slide-active video.video-lazy").removeAttr("data-url");
	$(".main_swiper .swiper-slide-active video.video-lazy").attr("src",videoUrl);
}
// 해시테그 슬라이더
HDFUINEW.roundSwiper01 = function () {
var roundSwiperSetCon = {
	slidesPerView: 3.5,
	spaceBetween: 16,
	centeredSlides: false,
	slideClass: 'visual_item',
	speed: 500,
	observer: true,
	observeParents: true,
	//loop: true,
	paginationType: 'fraction',
	setWrapperSize: true,
	lazyLoadingInPrevNext: true,
	lazyLoading: true,
	lazy: {
		loadPrevNext: true,
	},
	onLazyImageReady: function (s) {
		if (!s.params.autoplay) {
			s.params.autoplay = 4000;
			s.startAutoplay();
		}
	},
};
var roundSwiper = new Swiper('.round_swiper', roundSwiperSetCon);
}

/* round swiper02 */
HDFUINEW.roundSwiper02 = function () {
	var roundSwiper02SetCon = {
		slidesPerView: 2.8,
		spaceBetween: 12,
		centeredSlides: false,
		slideClass: 'visual_item',
		speed: 500,
		//loop: true,
		paginationType: 'fraction',
		setWrapperSize: true,
		lazy:true,
		observer:true,
		resizeObserver:true,
		observerUpdate:true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		lazy: {
			loadPrevNext: true,
		},
		//lazyLoadingInPrevNext: true,
		//lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
	};
	var roundSwiper02 = new Swiper('.round_swiper02', roundSwiper02SetCon);
}

// 특화메뉴 슬라이더
HDFUINEW.specialVisual01 = function () {
	var windowWidth = $(window).outerWidth();
	$(".special_visual .noimg_bg_h").css("width",windowWidth);
	$(".special_visual video").css("width",windowWidth);
	
	var specialSwiperSetCon = {
		autoHeight: true,
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		autoplayDisableOnInteraction: false,
		slideClass: 'visual_item',
		spaceBetween: 0,
		speed: 500, //20200416 modify(add)
		loop: true,
		pagination: {
			el: '.visual_pagination',
			type: 'custom',
			renderCustom: function (specialSwiper, current, total) {
				var customPaginationHtml = "";
				for(var i = 0; i < total; i++) {
					//Determine which pager should be activated at this time
					if(i == (current - 1)) {
						customPaginationHtml += '<span class="visual-pagination-customs visual-pagination-customs-active"></span>';
					}else{
						customPaginationHtml += '<span class="visual-pagination-customs"></span>';
					}
				}
				if(total < 10){
					total = "0" + total
				}
				if(current < 10){
					current = "0" + current
				}
				var fraction =  current + '<span class="space">/</span>'  + '<span class="num_total">'+total+'</span>'; // 마크업과 스타일 수정하세요.
				return  fraction;
			}
		},
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000; //20200416 modify(3000)
				s.startAutoplay();
			}
		},
		on: {
			init: function() {
				$(".special_visual .visual_item a").each(function(){
					if($(this).attr("href") === "javascript:"){
						$(this).css({"pointer-events":"none"});
					}
				});
			}
		},
	};
	var specialSwiperSetConOne = {
		loop: false,
		watchOverflow:true,
	};
	if($(".special_visual .visual_item").length == 1) {
		var specialSwiper = new Swiper('.special_visual', specialSwiperSetConOne);
	}else{
		var specialSwiper = new Swiper('.special_visual', specialSwiperSetCon);
	}
}

// 특화메뉴 슬라이더2
HDFUINEW.specialVisual02 = function () {
var special2SetCon = {
	slidesPerView: 2.7,
	spaceBetween: 8,
	centeredSlides: false,
	slideClass: 'visual_item',
	speed: 500,
	//loop: true,
	paginationType: 'fraction',
	setWrapperSize: true,
	lazyLoadingInPrevNext: true,
	lazyLoading: true,
	observer:true,
	resizeObserver:true,
	observerUpdate:true,
	onLazyImageReady: function (s) {
		if (!s.params.autoplay) {
			s.params.autoplay = 4000;
			s.startAutoplay();
		}
	},
};
var specialSwiper2 = new Swiper('.special_visual02', special2SetCon);
}
//2022-07-01 국중 MO 스페셜관 스와이퍼 배너 높이값 오류 수정
$(window).load(function(){
	if($(".special_visual").length) {
		var swiperHH = $(".special_visual .visual_item img").height();
	$(".special_visual").css("height",swiperHH); 
		}
	if($(".special_visual02").length) {
			var swiper02HH = $(".special_visual02 .visual_item .item_img img").height();
		$(".special_visual02").css("height",swiper02HH); 
	}
});

// 배너 슬라이더01
HDFUINEW.banner_visual01 = function () {
	var bannerSwiperSetCon01 = {
		slidesPerView: 1,
		autoplayDisableOnInteraction: false,
		slideClass: 'visual_item',
		spaceBetween: 0,
		speed: 500, //20200416 modify(add)
		loop: true,
		observer:true,
		resizeObserver:true,
		observerUpdate:true,
		pagination: {
			el: '.visual_pagination',
			type: 'custom',
			renderCustom: function (bannerSwiper, current, total) {
				var customPaginationHtml = "";
				for(var i = 0; i < total; i++) {
					//Determine which pager should be activated at this time
					if(i == (current - 1)) {
						customPaginationHtml += '<span class="visual-pagination-customs visual-pagination-customs-active"></span>';
					}else{
						customPaginationHtml += '<span class="visual-pagination-customs"></span>';
					}
				}
				if(total < 10){
					total = "0" + total
				}
				if(current < 10){
					current = "0" + current
				}
				var fraction =  current + '<span class="space">/</span>'  + '<span class="num_total">'+total+'</span>';
				return  fraction;
			}
		},
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000; //20200416 modify(3000)
				s.startAutoplay();
			}
		},
	};
	var bannerSwiperSetConOne01 = {
		loop: false,
		watchOverflow:true,
	};
	if($(".banner_visual01 .visual_item").length == 1) {
		var bannerSwiper01 = new Swiper('.banner_visual01', bannerSwiperSetConOne01);
	}else{
		var bannerSwiper01 = new Swiper('.banner_visual01', bannerSwiperSetCon01);
	}
}
// 배너 슬라이더02
HDFUINEW.banner_visual02 = function () {
	var bannerSwiperSetCon02 = {
		slidesPerView: 1,
		autoplayDisableOnInteraction: false,
		slideClass: 'visual_item',
		spaceBetween: 0,
		speed: 500, //20200416 modify(add)
		loop: true,
		observer:true,
		resizeObserver:true,
		observerUpdate:true,
		pagination: {
			el: '.visual_pagination',
			type: 'custom',
			renderCustom: function (bannerSwiper, current, total) {
				var customPaginationHtml = "";
				for(var i = 0; i < total; i++) {
					//Determine which pager should be activated at this time
					if(i == (current - 1)) {
						customPaginationHtml += '<span class="visual-pagination-customs visual-pagination-customs-active"></span>';
					}else{
						customPaginationHtml += '<span class="visual-pagination-customs"></span>';
					}
				}
				if(total < 10){
					total = "0" + total
				}
				if(current < 10){
					current = "0" + current
				}
				var fraction =  current + '<span class="space">/</span>'  + '<span class="num_total">'+total+'</span>';
				return  fraction;
			}
		},
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000; //20200416 modify(3000)
				s.startAutoplay();
			}
		},
	};
	var bannerSwiperSetConOne02 = {
		loop: false,
		watchOverflow:true,
	};
	if($(".banner_visual02 .visual_item").length == 1) {
		var bannerSwiper02 = new Swiper('.banner_visual02', bannerSwiperSetConOne02);
	}else{
		var bannerSwiper02 = new Swiper('.banner_visual02', bannerSwiperSetCon02);
	}
}
// 배너 슬라이더03
HDFUINEW.banner_visual03 = function () {
	var bannerSwiperSetCon03 = {
		slidesPerView: 1,
		autoplayDisableOnInteraction: false,
		slideClass: 'visual_item',
		spaceBetween: 0,
		speed: 500, //20200416 modify(add)
		loop: true,
		observer:true,
		resizeObserver:true,
		observerUpdate:true,
		pagination: {
			el: '.visual_pagination',
			type: 'custom',
			renderCustom: function (bannerSwiper, current, total) {
				var customPaginationHtml = "";
				for(var i = 0; i < total; i++) {
					//Determine which pager should be activated at this time
					if(i == (current - 1)) {
						customPaginationHtml += '<span class="visual-pagination-customs visual-pagination-customs-active"></span>';
					}else{
						customPaginationHtml += '<span class="visual-pagination-customs"></span>';
					}
				}
				if(total < 10){
					total = "0" + total
				}
				if(current < 10){
					current = "0" + current
				}
				var fraction =  current + '<span class="space">/</span>'  + '<span class="num_total">'+total+'</span>';
				return  fraction;
			}
		},
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000; //20200416 modify(3000)
				s.startAutoplay();
			}
		},
	};
	var bannerSwiperSetConOne03 = {
		loop: false,
		watchOverflow:true,
	};
	if($(".banner_visual03 .visual_item").length == 1) {
		var bannerSwiper03 = new Swiper('.banner_visual03', bannerSwiperSetConOne03);
	}else{
		var bannerSwiper03 = new Swiper('.banner_visual03', bannerSwiperSetCon03);
	}
}

// 배너 슬라이더 top auto일 경우
HDFUINEW.banner_visual_auto = function () {
	var bannerSwiperSetConTop = {
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		autoplayDisableOnInteraction: false,
		slideClass: 'visual_item',
		spaceBetween: 0,
		speed: 500, //20200416 modify(add)
		loop: true,
		observer:true,
		resizeObserver:true,
		observerUpdate:true,
		pagination: {
			el: '.visual_pagination',
			type: 'custom',
			renderCustom: function (bannerSwiperAuto, current, total) {
				var customPaginationHtml = "";
				for(var i = 0; i < total; i++) {
					//Determine which pager should be activated at this time
					if(i == (current - 1)) {
						customPaginationHtml += '<span class="visual-pagination-customs visual-pagination-customs-active"></span>';
					}else{
						customPaginationHtml += '<span class="visual-pagination-customs"></span>';
					}
				}
				if(total < 10){
					total = "0" + total
				}
				if(current < 10){
					current = "0" + current
				}
				var fraction =  current + '<span class="space">/</span>'  + '<span class="num_total">'+total+'</span>';
				return  fraction;
			}
		},
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000; //20200416 modify(3000)
				s.startAutoplay();
			}
		},
	};
	var bannerSwiperSetConOneTop = {
		loop: false,
		watchOverflow:true,
	};
	if($(".banner_visual_auto .visual_item").length == 1) {
		var bannerSwiperAuto = new Swiper('.banner_visual_auto', bannerSwiperSetConOneTop);
	}else{
		var bannerSwiperAuto = new Swiper('.banner_visual_auto', bannerSwiperSetConTop);
	}
}

//결제정보 슬라이더
HDFUINEW.cardVisual = function () {
	var cardVisual = {
		slidesPerView: 1,
		spaceBetween: 8,
		centeredSlides: false,
		slideClass: 'visual_item',
		speed: 500,
		//loop: true,
		paginationType: 'fraction',
		observer:true,
		resizeObserver:true,
		observerUpdate:true,
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
		on: {
			slideChange: function () {
			}
		}
	}
	var cardSwiper = new Swiper('.card_visual', cardVisual);
}

/* brandshop */
HDFUINEW.brandShopSwiper01 = function () {
	var windowWidth = $(window).outerWidth();
	$(".brandshop_swiper .noimg_bg").css("width",windowWidth);
	$(".brandshop_swiper video").css("width",windowWidth);
	var brandshopSetCon = {
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		centeredSlides: false,
		slideClass: 'visual_item',
		speed: 500,
		loop: true,
		observer:true,
		resizeObserver:true,
		observerUpdate:true,
		pagination: {
			el: '.visual_pagination',
			type: 'custom',
			renderCustom: function (brandshopSwiper, current, total) {
				var customPaginationHtml = "";
				for(var i = 0; i < total; i++) {
					//Determine which pager should be activated at this time
					if(i == (current - 1)) {
						customPaginationHtml += '<span class="visual-pagination-customs visual-pagination-customs-active"></span>';
					}else{
						customPaginationHtml += '<span class="visual-pagination-customs"></span>';
					}
				}
				if(total < 10){
					total = "0" + total
				}
				if(current < 10){
					current = "0" + current
				}
				var fraction =  current + '<span class="space">/</span>'  + '<span class="num_total">'+total+'</span>'; // 마크업과 스타일 수정하세요.
				return  fraction;
			}
		},
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
	};
	var brandshopSetConOne = {
		loop: false,
		watchOverflow:true,
	};
	if($(".brandshop_swiper .visual_item").length == 1) {
		var brandshopSwiper = new Swiper('.brandshop_swiper', brandshopSetConOne);
	}else{
		var brandshopSwiper = new Swiper('.brandshop_swiper', brandshopSetCon);
	}
}

HDFUINEW.mainPopbannerVertical = function () {
	var mainBnSwiper02SetCon = {
		direction: 'vertical',
		slidesPerView: 1,
		mousewheel: true,
		slideClass: 'visual_item',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		
	};
	var mainBnSwiper02 = new Swiper('.main_popbanner_vertical', mainBnSwiper02SetCon);
}

/* brandshop2 */
HDFUINEW.brandShopSwiper02 = function () {
	var brandshop2SetCon = {
		slidesPerView: 3.7,
		centeredSlides: false,
		slideClass: 'visual_item',
		speed: 500,
		loop: false,
		observer:true,
		resizeObserver:true,
		observerUpdate:true,
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
	};
	var brandshop2Swiper = new Swiper('.brandshop2_swiper', brandshop2SetCon);
}

// lucky 슬라이더
HDFUINEW.luckySwiper = function () {
	var luckySwiperSetCon = {
		slidesPerView: 2.8,
		spaceBetween: 0,
		centeredSlides: false,
		slideClass: 'visual_item',
		speed: 500,
		//loop: true,
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		lazy: {
			loadPrevNext: true,
		},
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
	};
	var luckySwiper = new Swiper('.lucky_swiper', luckySwiperSetCon);
}

// 메인 하단 팝업 슬라이드
HDFUINEW.mainBottomSwiper01 = function () {
	var mainBottomSwiper01SetCon = {
		slidesPerView: 1,
		slideClass: 'visual_item',
		speed: 500,
		setWrapperSize: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
	};
	var mainBottomSwiper01SetConOne = {
		loop: false,
		watchOverflow:true,
	};
	if($(".main_bottom_swiper01 .visual_item").length == 1) {
		var mainBottomSwiper01 = new Swiper('.main_bottom_swiper01', mainBottomSwiper01SetConOne);
	}else{
		var mainBottomSwiper01 = new Swiper('.main_bottom_swiper01', mainBottomSwiper01SetCon);
	}
}

// 메인 앱종료 swiper 팝업
HDFUINEW.mainBnSwiper = function () {
	var mainBnSwiperSetCon = {
		slidesPerView: 1,
		spaceBetween: 0,
		slideClass: 'visual_item',
		spaceBetween: 0,
		autoHeight: true,
		speed: 500,
		pagination: {
			el: '.swiper-pagination',
		},
	};
	var mainBnSwiperSetConOne = {
		loop: false,
		watchOverflow:true,
	};
	if($(".main_popbanner .visual_item").length == 1) {
		var mainBnSwiper = new Swiper('.main_popbanner', mainBnSwiperSetConOne);
	}else{
		var mainBnSwiper = new Swiper('.main_popbanner', mainBnSwiperSetCon);
	}
}

// 세일 비주얼 슬라이더
HDFUINEW.saleSwiper = function () {
	var saleSwiperSetCon = {
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		autoplayDisableOnInteraction: false,
		slideClass: 'visual_item',
		spaceBetween: 0,
		speed: 500, //20200416 modify(add)
		loop: true,
		pagination: {
			el: '.visual_pagination',
			type: 'custom',
			renderCustom: function (saleSwiper, current, total) {
				var customPaginationHtml = "";
				for(var i = 0; i < total; i++) {
					//Determine which pager should be activated at this time
					if(i == (current - 1)) {
						customPaginationHtml += '<span class="visual-pagination-customs visual-pagination-customs-active"></span>';
					}else{
						customPaginationHtml += '<span class="visual-pagination-customs"></span>';
					}
				}
				if(total < 10){
					total = "0" + total
				}
				if(current < 10){
					current = "0" + current
				}
				var fraction =  current + '<span class="space">/</span>'  + '<span class="num_total">'+total+'</span>'; // 마크업과 스타일 수정하세요.
				return  fraction;
			}
		},
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000; //20200416 modify(3000)
				s.startAutoplay();
			}
		},
	};
	var saleSwiperSetConOne = {
		loop: false,
		watchOverflow:true,
	};
	if($(".sale_visual .visual_item").length == 1) {
		var saleSwiper = new Swiper('.sale_visual', saleSwiperSetConOne);
	}else{
		var saleSwiper = new Swiper('.sale_visual', saleSwiperSetCon);
	}
}

// 타임세일  슬라이더
HDFUINEW.timeSwiper = function () {
	var timeSwiperSetCon = {
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		spaceBetween: 0,
		centeredSlides: false,
		slideClass: 'visual_item',
		spaceBetween: 0,
		speed: 500,
		//loop: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		lazy: {
			loadPrevNext: true,
		},
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
	};
	var timeSwiperSetConOne = {
		loop: false,
		watchOverflow:true,
	};

	if($(".time_swiper1 .visual_item").length == 1) {
		var timeSwiper = new Swiper('.time_swiper1', timeSwiperSetConOne);
	}else{
		var timeSwiper = new Swiper('.time_swiper1', timeSwiperSetCon);
	}
}

// 타임세일  슬라이더
HDFUINEW.mianTimeSwiper = function () {
	var mainTimeSwiperSetCon = {
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		centeredSlides: false,
		slideClass: 'visual_item',
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		spaceBetween: 0,
		speed: 500,
		//loop: true,
		paginationType: 'fraction',
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		lazy: {
			loadPrevNext: true,
		},
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
	};
	var mainTimeSwiperSetConOne = {
		loop: false,
		watchOverflow:true,
	};

	if($(".main_time_swiper .visual_item").length == 1) {
		var mianTimeSwiper = new Swiper('.main_time_swiper', mainTimeSwiperSetConOne);
	}else{
		var mianTimeSwiper = new Swiper('.main_time_swiper', mainTimeSwiperSetCon);
	}
}

// 신상품 슬라이더
HDFUINEW.newprodectSwiper01 = function () {
	var newprodectSwiperSetCon = {
		slidesPerView: 'auto' ,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		centeredSlides: true, //2021-08-25 true로 수정
		slideClass: 'visual_item',
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		speed: 500,
		//loop: true,
		paginationType: 'fraction',
		setWrapperSize: true,
		lazy: true,
		//lazyLoadingInPrevNext: true,
		//lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
	};
	var newprodectSwiperSetConOne = {
		slideClass: 'visual_item',
		spaceBetween: 0,
		speed: 500,
		watchOverflow:true,
		//loop: true,
	};

	if($(".newproduct_swiper .visual_item").length == 1) {
		var newprodectSwiper01 = new Swiper('.newproduct_swiper', newprodectSwiperSetConOne);
	}else{
		var newprodectSwiper01 = new Swiper('.newproduct_swiper', newprodectSwiperSetCon);
	}
}

//S: 2022-03-25 H.Share 슬라이더 추가 by pub10
HDFUINEW.HshareSwiper = function () {
	var HshareSwiper = new Swiper('.hshare-swiper', {
		slidesPerView: 1.5,
		spaceBetween: 2,
		centeredSlides: false,
		spaceBetween: 0,
		speed: 500,
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		lazy: {
			loadPrevNext: true,
		},
	});
}
//E: 2022-03-25 H.Share 슬라이더 추가 by pub10



// 상품크게보기 swiper 팝업
HDFUINEW.newprodectSwiper02 = function () {
	var zoomImgSwiperSetCon = {
		initialSlide: 3, /* 0,1,2 순으로 순차적으로 보여짐 */
		slidesPerView: 1,
		spaceBetween: 0,
		slideClass: 'zoom_item',
		spaceBetween: 0,
		speed: 500,
		pagination: {
		el: '.pd_zoom',
		},
	};

	var zoomImgSwiperSetConOne = {
		loop: false,
		watchOverflow:true,
	};

	if($(".prd_zoom .zoom_item").length == 1) {
		var newprodectSwiper02 = new Swiper('.prd_zoom', zoomImgSwiperSetConOne);
	}else{
		var newprodectSwiper02 = new Swiper('.prd_zoom', zoomImgSwiperSetCon);
	}
}

// 장비구나 슬라이드 
HDFUINEW.cartSwiper1 = function () {
	var cart1SetCon = {
		slidesPerView: 2.8,
		spaceBetween: 20,
		centeredSlides: false,
		slideClass: 'visual_item',
		speed: 500,
		//loop: true,
		paginationType: 'fraction',
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
	};

	var cart1SetConOne = {
		loop: false,
		watchOverflow:true,
	};

	if($(".cont_swiper .visual_item").length == 1) {
		var cartSwiper1 = new Swiper('.cont_swiper', cart1SetConOne);
	}else{
		var cartSwiper1 = new Swiper('.cont_swiper', cart1SetCon);
	}
}

HDFUINEW.brandSetSwiper = function () {
	var swiper = new Swiper('.brand-swiper-container', {
		slidesPerView: 3.5,
		spaceBetween: 5,
		freeMode: true,
	});
}

/* category search */
HDFUINEW.categotySearchFunction = function () {
	if($(".cate_box").length > 0) {
		// scroll area sticky
		$(".box.cate_box").scroll(function(){
			var brandConTop = $(".cate_box .sh_wrap").position().top * -1;
			var chkItemListTop1 = $(".cate_box .chk_item_list_ko").outerHeight();
			var chkItemListTop2 = $(".cate_box .chk_item_list_en").outerHeight();
			var chkItemListTop3 = $(".cate_box .chk_item_list_brand").outerHeight();
	
			if(brandConTop > 36){
				$(".cate_box .chk_item_list_top_area").addClass("fixed");
				$(".cate_box .btn_category_area").addClass("fixed");
				$(".cate_box .search_ko_con").css("padding-top", chkItemListTop1 + 15);
				$(".cate_box .search_en_con").css("padding-top", chkItemListTop2 + 15);
				$(".cate_box .category_con_area").css("padding-top", chkItemListTop3 - 3);
			} else{
				$(".cate_box .chk_item_list_top_area").removeClass("fixed");
				$(".cate_box .btn_category_area").removeClass("fixed");
				$(".cate_box .search_ko_con").css("padding-top",0);
				$(".cate_box .search_en_con").css("padding-top",0);
				$(".cate_box .category_con_area").css("padding-top",0);
			}
			
		});
		/* 한글검색 */
		$('.cate_box .chk_item_list_ko .sort_list01 li a').each(function (index, item) {
			var index = index + 1
			$(".cate_box .chk_item_list_ko .sort_list01 li a.lang_ko" + index).click(function(){

				if($(this).hasClass("disabled")){

				} else{

					if($(this).parent().hasClass("on")){
						$('.cate_box .chk_item_list_ko .sort_list01 li').removeClass("on");
						$(".cate_box #lang_ko" + index).find("a").trigger("click");
						var langTop = 51 * (index+1) - 30 ;
						$(".cate_box").animate({scrollTop: langTop},400);
						$(this).parent().removeClass("on");
					} else{
						$('.cate_box .chk_item_list_ko .sort_list01 li').removeClass("on");
						$(this).parent().addClass("on");
						$(".cate_box #lang_ko" + index).find("a").trigger("click");
						var langTop = 51 * (index+1) - 30 ;
						$(".cate_box").animate({scrollTop: langTop},400);
					}
				}
			});
		});

		$('.search_ko_con .category_acc li').each(function (index, item) {
			var index = index + 1
			$(".search_ko_con .category_acc li#lang_ko" + index).find("a").click(function(){
				$('.chk_item_list_ko li a').parent().removeClass("on");
				$('.chk_item_list_ko li a.lang_ko' + index).parent().addClass("on");
			});
		});

		/* 영문검색 */
		$('.cate_box .chk_item_list_en .sort_list01 li a').each(function (index, item) {
			var index = index + 1
			$(".cate_box .chk_item_list_en .sort_list01 li a.lang_en" + index).click(function(){
				if($(this).hasClass("disabled")){
					
				} else{
					if($(this).parent().hasClass("on")){
						$('.cate_box .chk_item_list_en .sort_list01 li').removeClass("on");
						$(".cate_box #lang_en" + index).find("a").trigger("click");
						var langTop2 = 51 * (index + 1) - 30 ;
						$(".cate_box").animate({scrollTop: langTop2},400);
						$(this).parent().removeClass("on");
					} else{
						$('.cate_box .chk_item_list_en .sort_list01 li').removeClass("on");
						$(this).parent().addClass("on");
						$(".cate_box #lang_en" + index).find("a").trigger("click");
						var langTop2 = 51 * (index + 1) - 30 ;
						$(".cate_box").animate({scrollTop: langTop2},400);
					}
				}
			});
		});

		$('.search_en_con .category_acc li').each(function (index, item) {
			var index = index + 1
			$(".search_en_con .category_acc li#lang_en" + index).find("a").click(function(){
				$('.chk_item_list_en li a').parent().removeClass("on");
				$('.chk_item_list_en li a.lang_en' + index).parent().addClass("on");
			});
		});

		/* 카테고리검색 */
		$('.cate_box .btn_category_area .chk_price li a').each(function (index, item) {
			var index = index + 1
			$(".cate_box .btn_category_area .chk_price li a.brd" + index).click(function(){
				if($(this).hasClass("disabled")){
					
				} else{
					if($(this).parent().hasClass("on")){
						$('.cate_box .btn_category_area .chk_price li span').removeClass("on");
						$(".cate_box #brd" + index).find("a").trigger("click");
						var langTop2 = 51 * (index + 1) - 40 ;
						$(".cate_box").animate({scrollTop: langTop2},400);
						$(this).parent().removeClass("on");
					} else{
						$('.cate_box .btn_category_area .chk_price li span').removeClass("on");
						$(this).parent().addClass("on");
						$(".cate_box #brd" + index).find("a").trigger("click");
						var langTop2 = 51 * (index + 1) - 40 ;
						$(".cate_box").animate({scrollTop: langTop2},400);
					}
				}
			});

		});

		$('.btn_category_area .chk_price li').each(function (index, item) {
			var index = index + 1
			$(".cate_con .category_acc li#brd" + index).find("a").click(function(){
				$('.btn_category_area .chk_price li a').parent().removeClass("on");
				$(".btn_category_area .chk_price li a.brd" + index).parent().addClass("on");
			});
		});
	}	
}

/* fullscreen_ 딤 클릭시 닫히는 함수 */
HDFUINEW.fullscreenDimm = function () {
	$(".fullscreen_dimm").click(function(e){
		if($(this).parent().siblings().hasClass("active")){
			//$("body").css("overflow-y","hidden").on('scroll touchmove mousewheel', function(e){
			//	e.preventDefault();
			//});
			//$("#main_slides").parents("body").css("overflow-y","hidden");
			HDFUINEW.scroll_freeze();
			$(this).parent().removeClass("active");
			$(".cate_box").animate({scrollTop: 0},0);
			e.preventDefault();
		}
		if(!$(this).parent().siblings().hasClass("active")){
			$(this).parent().removeClass("active");
			//$("body").css("overflow-y","auto").off('scroll touchmove mousewheel');
			//$("#main_slides").parents("body").css("overflow-y","hidden");
			HDFUINEW.scroll_unfreeze();
			$(".cate_box").animate({scrollTop: 0},0);
			e.preventDefault();
		}
	});

	$(".popbtm_dimmed").on("click", function(){
		if($(this).parent().siblings().hasClass("active")){
			//$("body").css("overflow-y","hidden").on('scroll touchmove mousewheel', function(e){
			//	e.preventDefault();
			//});
			HDFUINEW.scroll_freeze();
			$(this).parent().removeClass("active");
			$(".cate_box").animate({scrollTop: 0},0);
		}
		if(!$(this).parent().siblings().hasClass("active")){
			$(this).parent().removeClass("active");
			//$("body").css("overflow-y","auto").off('scroll touchmove mousewheel');
			//$("#main_slides").parents("body").css("overflow-y","hidden");
			HDFUINEW.scroll_unfreeze();
			$(".cate_box").animate({scrollTop: 0},0);
		}
	});
}
/*  swipe_area 딤 메인하단 레이어팝업,브랜드하단 레이어팝업 스와이프 다운 함수 - main.jsp , brand.jsp , reprBrand.jsp , goosListCart.jsp    */ 
HDFUINEW.swipeAreaDown = function () {
	if($('.bottom_page').length > 0){ // 2021-08-25 $('.bottom_page') 있을 경우만 처리
		var bottomTopSwiperHeight = $(".bottom_top_swiper").outerHeight();
		$('.bottom_page').addSwipeEvents().bind('swipedown', function(evt, touch) {
			if ($(this).find(".bottom_page_con").scrollTop() > 0) {

			} else {
				$(".bottom_page.main_type").animate({top:bottomTopSwiperHeight - 60},200);
				$(".bottom_page.brand_type").animate({top:bottomTopSwiperHeight + 20},200);
				$(".no_slide_bg").css("display","block");
				$(".bottom_page.main_type").removeClass("on");
				$(".bottom_page.brand_type").removeClass("on");
				$(".brand_anchor_area ul li a").removeClass("active");
				$(".anchor_intro").addClass("active");
				$(this).find(".swipe_area").removeClass("on");
				$(this).find(".bottom_page_con").find(".btn_ck.on").trigger("click");
				//HDFUINEW.scroll_unfreeze();			//UI수정건	

			}
			evt.preventDefault();
		})
	}
}
/* swipe_area 딤 메인하단 레이어팝업,브랜드하단 레이어팝업 스와이프 업 함수 - main.jsp , brand.jsp , reprBrand.jsp , goosListCart.jsp    */

HDFUINEW.swipeAreaUp = function () {
	if($('.bottom_page').length > 0){ // 2021-08-25 $('.bottom_page') 있을 경우만 처리
		$('.bottom_page').addSwipeEvents().bind('swipeup', function(evt, touch) {
			if($(".main_section").length > 0){
				var safe_area_top =  Number($(".main_section .header").css('padding-top').replace(/[^-\d\.]/g, ''));
			}
			$(".bottom_page.main_type").animate({top: safe_area_top + 40  },200);// 2021-08-12 20 → 40
			$(".bottom_page.brand_type").animate({top: 40 },200);// 2021-08-12 20 → 40
			$(".no_slide_bg").css("display","none");
			$(".bottom_page.main_type").addClass("on");
			$(".bottom_page.brand_type").addClass("on");
			$(this).find(".swipe_area").addClass("on");
			HDFUINEW.scroll_freeze();
			evt.preventDefault();
		});
	}
}
/* 레이어 팝업 닫을경우 쓰는 함수 - addMbshDpatInfo.jsp , mbshPsptMnge.jsp , myDpatInfoList.jsp , optionUpdateGoos.jsp , order.jsp , smsAuth.jsp , cartLayer.jsp , passportLayer.jsp , searchLayer.jsp , sideMenu.jsp */
HDFUINEW.uiClose = function () {
	if($('.filter_popup .ui-close').length > 0){ // 2021-08-25 $('.bottom_page') 있을 경우만 처리
		$('.filter_popup .ui-close').addSwipeEvents().bind('swipedown', function(evt, touch) {
			
			$(this).parents(".filter_popup").removeClass("active");
			$(this).parents(".filter_popup").find(".filter_bottom_dimmed").hide();
			$(".scroll_area_wrap").animate({scrollTop : 0},10);
			$(".tab_item1").trigger("click");
			$(".chk_item_list_top_area").css("opacity","0");
			setTimeout(function() { 
				$(".chk_item_list_top_area").css("opacity","1");
			}, 300);
			evt.preventDefault();
			//UI수정건
			if($(".bottom_page").length <1){ 
				HDFUINEW.scroll_unfreeze();
			}
			//UI수정건 END
		});

		$(".filter_popup .ui-close").on("click", function(){
			$(this).parents(".filter_popup").removeClass("active");
			$(this).parents(".filter_popup").find(".filter_bottom_dimmed").hide();
			$(".scroll_area_wrap").animate({scrollTop : 0},10);
			$(".tab_item1").trigger("click");
			$(".chk_item_list_top_area").css("opacity","0");
			setTimeout(function() { 
				$(".chk_item_list_top_area").css("opacity","1");
			}, 300);
			//UI수정건
			if($(".bottom_page").length <1){ 
				HDFUINEW.scroll_unfreeze();
			}
			//UI수정건 END
		});
	}
}
HDFUINEW.uiCloseHalf = function () {
	if($('.fullscreen_half .ui-close').length > 0){ // 2021-08-25 $('.bottom_page') 있을 경우만 처리
		$('.fullscreen_half .ui-close').addSwipeEvents().bind('swipedown', function(evt, touch) {
			$(this).parents(".fullscreen_half").removeClass("active");
			$(this).parents(".fullscreen_half").find(".box").animate({scrollTop : 0},10);
			HDFUINEW.scroll_freeze();
			if(!$(this).parents(".fullscreen_half").siblings().hasClass("active")){
				$(this).parents(".fullscreen_half").removeClass("active");
				$(this).parents(".fullscreen_half").find(".box").animate({scrollTop : 0},10);
				//$("body").css("overflow-y","auto").off('scroll touchmove mousewheel');
				//$("#main_slides").parents("body").css("overflow-y","hidden");
				HDFUINEW.scroll_unfreeze();
			}
			evt.preventDefault();
		})
	}
}
HDFUINEW.uiCloseBasic = function () {
	if($('.fullscreen_basic .ui-close').length > 0){ // 2021-08-25 $('.bottom_page') 있을 경우만 처리
		$('.fullscreen_basic .ui-close').addSwipeEvents().bind('swipedown', function(evt, touch) {
			$(this).parents(".fullscreen_basic").removeClass("active");
			$(this).parents(".fullscreen_basic").find(".box").animate({scrollTop : 0},10);
			$(this).parents(".fullscreen_basic").find(".chk_item_list_top_area").removeClass("fixed");
			$(this).parents(".fullscreen_basic").find(".btn_category_area").removeClass("fixed");
			$(this).parents(".fullscreen_basic").find(".chk_item_list_top_area").removeClass("fixed");
			HDFUINEW.scroll_freeze();
			/* 20230608 수정 */
			document.body.removeAttribute('style');
			document.querySelector('html').removeAttribute('style');
			/* //20230608 수정 */
			if(!$(this).parents(".fullscreen_basic").siblings().hasClass("active")){
				$(this).parents(".fullscreen_basic").removeClass("active");
				$(this).parents(".fullscreen_basic").find(".box").animate({scrollTop : 0},10);
				$(this).parents(".fullscreen_basic").find(".chk_item_list_top_area").removeClass("fixed");
				$(this).parents(".fullscreen_basic").find(".btn_category_area").removeClass("fixed");
				$(this).parents(".fullscreen_basic").find(".chk_item_list_top_area").removeClass("fixed");
				//$("body").css("overflow-y","auto").off('scroll touchmove mousewheel');
				//$("#main_slides").parents("body").css("overflow-y","hidden");
				HDFUINEW.scroll_unfreeze();
			}
			evt.preventDefault();
		});
	}
}
HDFUINEW.uiCloseSecond = function () {
	if($('.fullscreen_basic .ui-close').length > 0){ // 2021-08-25 $('.bottom_page') 있을 경우만 처리
		$('.fullscreen_second .ui-close').addSwipeEvents().bind('swipedown', function(evt, touch) {
			$(this).parents(".fullscreen_second").removeClass("active");
			$(this).parents(".fullscreen_second").find(".box").animate({scrollTop : 0},10);
			HDFUINEW.scroll_freeze();
			if(!$(this).parents(".fullscreen_second").siblings().hasClass("active")){
				$(this).parents(".fullscreen_second").removeClass("active");
				$(this).parents(".fullscreen_second").find(".box").animate({scrollTop : 0},10);
				//$("body").css("overflow-y","auto").off('scroll touchmove mousewheel');
				//$("#main_slides").parents("body").css("overflow-y","hidden");
				HDFUINEW.scroll_unfreeze();
			}
			evt.preventDefault();
		})
	}
}
HDFUINEW.uiCloseThird = function () {
	if($('.fullscreen_third .ui-close').length > 0){ // 2021-08-25 $('.bottom_page') 있을 경우만 처리
		$('.fullscreen_third .ui-close').addSwipeEvents().bind('swipedown', function(evt, touch) {
			$(this).parents(".fullscreen_third").removeClass("active");
			$(this).parents(".fullscreen_third").find(".box").animate({scrollTop : 0},10);
			HDFUINEW.scroll_freeze();
			if(!$(this).parents(".fullscreen_third").siblings().hasClass("active")){
				$(this).parents(".fullscreen_third").removeClass("active");
				$(this).parents(".fullscreen_third").find(".box").animate({scrollTop : 0},10);
				//$("body").css("overflow-y","auto").off('scroll touchmove mousewheel');
				//$("#main_slides").parents("body").css("overflow-y","hidden");
				HDFUINEW.scroll_unfreeze();
			}
			evt.preventDefault();
		})
	}
}
HDFUINEW.uiCloseFourth = function () {
	if($('.fullscreen_fourth .ui-close').length > 0){ // 2021-08-25 $('.bottom_page') 있을 경우만 처리
		$('.fullscreen_fourth .ui-close').addSwipeEvents().bind('swipedown', function(evt, touch) {
			$(this).parents(".fullscreen_fourth").removeClass("active");
			$(this).parents(".fullscreen_fourth").find(".box").animate({scrollTop : 0},10);
			HDFUINEW.scroll_freeze();
			if(!$(this).parents(".fullscreen_fourth").siblings().hasClass("active")){
				$(this).parents(".fullscreen_fourth").removeClass("active");
				$(this).parents(".fullscreen_fourth").find(".box").animate({scrollTop : 0},10);
				//$("body").css("overflow-y","auto").off('scroll touchmove mousewheel');
				//$("#main_slides").parents("body").css("overflow-y","hidden");
				HDFUINEW.scroll_unfreeze();
			}
			evt.preventDefault();
		})
	}
}
HDFUINEW.uiCloseBtm = function () {
	if($('.fullscreen_btm .ui-close').length > 0){ // 2021-08-25 $('.bottom_page') 있을 경우만 처리
		$('.fullscreen_btm .ui-close').addSwipeEvents().bind('swipedown', function(evt, touch) {
			$(this).parents(".fullscreen_btm").removeClass("active");
			$(this).parents(".fullscreen_btm").find(".box").animate({scrollTop : 0},10);
			HDFUINEW.scroll_freeze();
			if($('.fullscreen_btm').find(".box_in")){
				$('.fullscreen_btm').find(".box_in").animate({scrollTop : 0},10);
			}
			if(!$(this).parents(".fullscreen_btm").siblings().hasClass("active")){
				$(this).parents(".fullscreen_btm").removeClass("active");
				$(this).parents(".fullscreen_btm").find(".box").animate({scrollTop : 0},10);
				//$("body").css("overflow-y","auto").off('scroll touchmove mousewheel');
				//$("#main_slides").parents("body").css("overflow-y","hidden");
				HDFUINEW.scroll_unfreeze();
			}
			evt.preventDefault();
		})
	}
}
/* 카트 하단 레이어팝 닫을때 btn_ck클릭 - goosListCart.jsp */
HDFUINEW.cartSwipeArea = function () {
	if($('.cart_bottom_area .swipe_area').length > 0){ // 2021-09-10 $('.cart_bottom_area .swipe_area') 있을 경우만 처리
		$(".cart_bottom_area .swipe_area").on("click", function(){
			$(".btn_ck").trigger("click");
			$(this).parents(".cart_bottom_area").removeClass("active");
		});
		$('.cart_bottom_area .swipe_area').addSwipeEvents().bind('swipedown', function(evt, touch) {
			$(".btn_ck").trigger("click");
			evt.preventDefault();
		});
	}
}
/* pop_dimmed click - addMbshDpatInfo.jsp , mbshPsptMnge.jsp , addMbshDpatInfo.jsp , listCart.jsp , mbshPsptMnge.jsp , order.jsp , cartLayer.jsp*/
HDFUINEW.popDimmed = function () {
	$(".pop_dimmed").click(function(){
		$(".pop_dimmed").hide();
		$(".fullscreen_second").removeClass("active");
	});
}
/* pop_dimmed click - main.jsp , category.jsp , listBnf.jsp , header.jsp  */
HDFUINEW.btnBenefit = function () {
	$(".header_top .btn_benefit").on("click", function(){
		$(".quick_dimmed").fadeIn(200);
		$(".main_quick_item").animate({right:0},200);
		HDFUINEW.scroll_freeze();
	});
}
/* 퀵딤드 - brand.jsp , reprBrand.jsp , hiddenMenu.jsp */
HDFUINEW.quickDimmed = function () {
	$(".quick_dimmed").on("click", function(){
		$(".quick_dimmed").fadeOut(400);
		$(".main_quick_item").animate({right:-146},200);
		if($(".bottom_page").length <1){ 
			HDFUINEW.scroll_unfreeze();
		}
	});
}
/* 퀵딤드 클로즈 - brand.jsp , reprBrand.jsp , hiddenMenu.jsp */
HDFUINEW.quickClose = function () {
	if ($('.quick_close').length > 0 ) {
		$('.quick_close').addSwipeEvents().bind('swiperight', function(evt, touch) {
			$(".quick_dimmed").fadeOut(200);
			$(".main_quick_item").animate({right:-150},200);
			if($(".bottom_page").length <1){ 
				HDFUINEW.scroll_unfreeze();
			}
		})
	}
}
/* 메인 하단팝업 */
HDFUINEW.btnShowMainPopup = function () {
	$(".btn_show_main_popup").click(function(){
		$(".main_bottom_pop").stop().animate({bottom:0},200);
		$(".main_bottom_dimmed").show();
		$(".main_bottom_pop").css("opacity","1")
	});
}
/* 메인 하단팝업 딤드 */
HDFUINEW.mainBottomDimmedClick = function () {
	$('.main_bottom_btn_area .btn_close, .main_bottom_dimmed').on('click',function(){
		$(".bg_dimm").hide();
		$(this).parents(".main_bottom_pop").stop().animate({bottom:"-100%"},300);
		$(this).parents(".main_bottom_pop").find(".main_bottom_dimmed").hide();
		$("body").removeClass("scroll_off_v2");
	});
}

/* 필터 하단팝업 딤드 */
HDFUINEW.filterBottomDimmedClick = function () {
	$('.filter_bottom_dimmed').on('click',function(){
	//UI수정건
		if($(".bottom_page").length <1){
			HDFUINEW.scroll_unfreeze();	
		}
	//UI수정건 END	
		$(this).parents(".filter_popup").removeClass("active");
	});
}
/* 주문내역 이름옆 화살표 토글버튼 */
HDFUINEW.myDetail = function () {
	$(".my_detail").click(function(){
		$(this).toggleClass("is_active");
		$(this).parent().parent().next(".my_info_view").slideToggle();
	});
}
/* 검색언어별 영문버튼 */
HDFUINEW.btnSearchEn = function () {
	$(".btn_search_en").on("click", function(){
		$(this).hide().next(".btn_search_ko").show();
		$(".search_con_area, .chk_item_list_top_area .chk_item_list").hide();
		$(".search_en_con, .chk_item_list_en").show();
		$(".favor_area_ko").hide();
		$(".favor_area_en").show();
	
	});
}
/* 검색언어별 한글버튼 */
HDFUINEW.btnSearchKo = function () {
	$(".btn_search_ko").on("click", function(){
		$(this).hide().prev(".btn_search_en").show();
		$(".search_con_area, .chk_item_list_top_area .chk_item_list").hide();
		$(".search_ko_con, .chk_item_list_ko").show();
		$(".favor_area_ko").show();
		$(".favor_area_en").hide();
	});
}
/* 브랜드페이지 브랜드 버튼 */
HDFUINEW.btnBrandAreaClick = function () {
	$(".btn_brand_area").on("click", function(){
		$(".tab_con_area").hide();
		$(".brand_con").show();
		$(".filtering_tit,.chk_item_list_top_area").show();
	});
}
/* 브랜드페이지 카테고리 버튼 */
HDFUINEW.btnCategoryAreaClick = function () {
	$(".btn_category_area").on("click", function(){
		$(".tab_con_area").hide();
		$(".cate_con").show();
		$(".filtering_tit,.chk_item_list_top_area").hide();
	});
}
/* 햄버거 리스트 토글 버튼 */
HDFUINEW.categoryList2Click = function () {
	$(".goods_item > li > a > span").each(function(){
		// var gnbLuxuryImg = $(this).height();
		var gnbTextPosition = $(this).height();
		$(this).css({marginTop:-(gnbTextPosition/2)+"px"})
	});
	if($(".category_list2").length) {
		$(".category_list2 .category_wrap > a").bind("click", function(){
			if(!$(this).next().is(":visible")){
				$(this).parent().parent(".category_list2").find(" > li").removeClass("active");
				$(this).parent().addClass("active");
				$(this).parent().parent().find(".category_cont").slideUp();
				$(this).next().slideDown();
				$(".goods_item > li > a > span").each(function(){
					// var gnbLuxuryImg = $(this).height();
					var gnbTextPosition = $(this).height();
					$(this).css({marginTop:-(gnbTextPosition/2)+"px"})
				});
			}
			else{
				$(this).parent().parent(".category_list2").find(" > li").removeClass("active");
				$(this).next().slideUp();
			}
		});
	}
}
/* 해더 타이틀 화살표 버튼 */
HDFUINEW.headerTopMoreClick = function () {
	if($(".header .depth_menu").length > 0){
		$(".header_top > h2").on("click", function() {
			if ($(".depth_menu").hasClass("open")) { 
				$(".depth_menu").removeClass("open");
				$(".depth_menu").hide();
				//$("body").removeClass("scroll_off_v2");	//20210709 헤더에서 동작되는 2뎁스 메뉴의 길이가 길어지면 touchmove가 막히는 관계로 삭제
				$(".header").css("z-index","");
				$(this).find(".more").removeClass("active");
				$(".go_top").css("opacity","1");
				HDFUINEW.scroll_unfreeze();
			}
			else {
				$(".depth_menu").addClass("open");
				$(".depth_menu").show();
				//$("body").addClass("scroll_off_v2");	//20210709 헤더에서 동작되는 2뎁스 메뉴의 길이가 길어지면 touchmove가 막히는 관계로 삭제
				$(".header").css("z-index","999")
				$(this).find(".more").addClass("active");
				$(".go_top").css("opacity","0");
				HDFUINEW.scroll_freeze();
			}
		});
		
	}
}
/* 항공사 선택 리스트 오른쪽 핀 - listCart.jsp , listSrchAirInfo.jsp , listSrchCart.jsp , srchAirOpenNm.jsp , popSrchAirOpenNm.jsp */
HDFUINEW.btnOnOffClick = function () {
	$(".btn_onoff").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
		} else {
			$(this).addClass("on");
		}
	});
}
HDFUINEW.btnLikeClick = function () {
	$(".btn_like").click(function(){
		$(this).addClass("on");
	});
}
/* 해시테그 검색 # 버튼 - searchLayer.jsp */
HDFUINEW.shBtnTgClick = function () {
	$(".sh_btn_tg").click(function(){
		$(this).toggleClass("sh_btn_text");
		$(this).parents(".sh_top").find(".search_top").toggleClass("active");
		$(this).next().text( $(this).next().text() == '해시태그로 검색하세요 :)' ? "일반단어로 검색하세요 :)" : "해시태그로 검색하세요 :)");
		$(".tip_bubble").show().delay(2500).fadeOut();
		$('.btn_clear').hide();
	});
}
/* 앱바 클릭버튼 - main.jsp , footer.jsp */
HDFUINEW.appGnbClick = function () {
	$(".app_gnb").click(function(e){
		$("#hamberger").addClass("active");
		HDFUINEW.scroll_freeze();
		e.preventDefault();
	});
}
/* 앱바 클릭버튼 - main.jsp , footer.jsp */
HDFUINEW.appSearchClick = function () {
	$(".app_search").click(function(e){
		$("#search").addClass("active");
		HDFUINEW.scroll_freeze();
		e.preventDefault();
	});
}
/* 앱바 클릭버튼 - main.jsp , footer.jsp , header.jsp */
HDFUINEW.appCartClick = function () {
	/*$(".app_cart").click(function(e){
		$("#cart").addClass("active");
		HDFUINEW.scroll_freeze();
		e.preventDefault();
	});*/
}
/* 여권정보 글씨 버튼 */
HDFUINEW.appPassportClick = function () {
	$(".app_passport").click(function(e){
		$("#passport").addClass("active");
		HDFUINEW.scroll_freeze();
		e.preventDefault();
	});
}
/* 주문하기 총할인금액 버튼 - brand.jsp , goos.jsp , order.jsp , popPtnrCjOneMembership.jsp , popPtnrKtMembership.jsp , popPtnrLgMembership.jsp */
HDFUINEW.btnMoreToggle = function () {
	$(".btn_more_toggle").click(function(){
		$(this).toggleClass("is_active").parent().parent().next().slideToggle();
	});
	
}
/* 주문내역 동의 - order.jsp */
HDFUINEW.btnMTg = function () {
	$(".btn_m_tg").click(function(){
		$(this).toggleClass("is_active").parent().parent().prev().toggleClass("is_active");
	});
}
/* 항공사 선택 탭 - order.jsp , srchAirOpenNm.jsp , popSrchAirOpenNm.jsp */
HDFUINEW.tab_listLiClick = function () {
	$(".tab_cont_item").hide();
	$(".tab_list > li:first").addClass("is_active").show(); 
	$(".tab_cont_item:first").show(); //Show first tab content
	HDFUINEW.cardVisual(); // 2022-05-11 H.Point Pay 관련 추가
	hpayArea(); // 2022-05-11 H.Point Pay 관련 추가

	$(".tab_list > li").click(function() {
		$(".tab_list > li").removeClass("is_active");
		$(this).addClass("is_active");
		$(".tab_cont_item").hide();
		var activeTab = $(this).find("span").attr("href");
		$(activeTab).fadeIn();
		
		HDFUINEW.cardVisual(); // 2022-05-11 H.Point Pay 관련 추가
		hpayArea(); // 2022-05-11 H.Point Pay 관련 추가
		return false;
	});
	
	
}
/* 간편결제 결제방법 선택 - order.jsp */
HDFUINEW.paylistLiDivClick = function () {
	$(".paylist > li > div").on('click', function (e) {
		$(".paylist > li > div").removeClass("is_active")
		$(this).addClass("is_active");
		
	});
}
/* 할인쿠폰 리스트 토글 - order.jsp */
HDFUINEW.categoryList = function () {
	$(".category_list .cat_tit > a").click(function(){
		$(this).toggleClass("active");
		$(this).parent().toggleClass("check");
		$(this).siblings(".cat_con").slideToggle();
	});
}
/* 여권정보 등록가이드 토글 -  */
HDFUINEW.passportList = function () {
	$(".passport_list .passport_list_btn").click(function(){
		$(this).toggleClass("active");
		$(this).siblings(".passport_list_con").slideToggle();
	});
}
/* 태극기 - sideMenu.jsp */
HDFUINEW.selectNameClick = function () {
	$(".select_item .select_name").on('click', function (e) {
		$(".select_item .select_list").hide();
		$(this).next().slideDown();
	});
}
/* S : 2022-09-14 수정 : GNB 언어변경 버튼 수정 및 영문추가 */
/* 언어설정 - sideMenu.jsp */
$(document).ready(function(){
	if($('.select_name span.ico_country_korea').length) {
		$('.select_list .ico_country_korea').parents('li').addClass('is_selected').siblings('li').removeClass('is_selected');
	} else if ($('.select_name span.ico_country_china').length) {
		$('.select_list .ico_country_china').parents('li').addClass('is_selected').siblings('li').removeClass('is_selected');
	} else if ($('.select_name span.ico_country_english').length) {
		$('.select_list .ico_country_english').parents('li').addClass('is_selected').siblings('li').removeClass('is_selected');
	} else {
		$('.select_list li').removeClass('is_selected');
	}
});
/* E: 2022-09-14 수정 : GNB 언어변경 버튼 수정 및 영문추가 */

/* 중국 한국 통화선택 - sideMenu.jsp , goos.jsp */
HDFUINEW.selectListClick = function () {
	$(".select_item .select_list li").on('click', function (e) {
		$(this).parent().fadeOut(100);
	});
	$(document).mouseup(function(e){
		if($(".select_item .select_list").has(e.target).length===0)
		$(".select_item .select_list").hide();
	});
}

HDFUINEW.anchorTab = function () {
	if($(".brand_anchor_area").length > 0) {
		if($('.anchor_intro_con').length > 0 ){
			var target1 = $(".anchor_intro_con").position().top;
		}
		if($('.anchor_coupon_con').length > 0 ){
			var target2 = $(".anchor_coupon_con").position().top;
		}
		if($('.anchor_product_con').length > 0 ){
			var target3 = $(".anchor_product_con").position().top;
		}

		
		$(".anchor_intro").stop().click(function(){
			if($(".brand_type").hasClass("on")){
				$(this).parents(".bottom_page_con").animate({scrollTop : target1 - 100},400);
			}
		});
		if($('.anchor_coupon').length > 0 ){
			$(".anchor_coupon").stop().click(function(){
				if($(".brand_type").hasClass("on")){
					$(this).parents(".bottom_page_con").animate({scrollTop : target2 - 100},400);
				}
			});
		}
		if($('.anchor_product').length > 0 ){
			$(".anchor_product").stop().click(function(){
				if($(".brand_type").hasClass("on")){
					$(this).parents(".bottom_page_con").animate({scrollTop : target3 - 43},400);
				}
			});
		}
		var prevTop = 0;
		$(".bottom_page_con").scroll(function(){
			var bottomPageConTop = $(".bottom_page_con").scrollTop();
			if($('.anchor_coupon_con').length > 0 ){
				var target2top = $(".anchor_coupon_con").offset().top - 90;
			}
			if($('.anchor_product_con').length > 0 ){
				var target3top = $(".anchor_product_con").offset().top - 90;
			}
			
			if($(".anchor_intro").length > 0 && $(".anchor_coupon").length > 0 && $(".anchor_product").length > 0 ){
				if (35 < target2top) {
					$(".brand_anchor_area ul li a").removeClass("active");
					$(".brand_anchor_area ul li a.anchor_intro").addClass("active");
				} else if( 36 < target3top ) {
					$(".brand_anchor_area ul li a").removeClass("active");
					$(".brand_anchor_area ul li a.anchor_coupon").addClass("active");
				} else if( target3top < 30 ){
					$(".brand_anchor_area ul li a").removeClass("active");
					$(".brand_anchor_area ul li a.anchor_product").addClass("active");
				}
			}
			if(!$(".anchor_coupon").length > 0 ){
				if (30 < target3top) {
					$(".brand_anchor_area ul li a").removeClass("active");
					$(".brand_anchor_area ul li a.anchor_intro").addClass("active");
				} else if( target3top < 30 ){
					$(".brand_anchor_area ul li a").removeClass("active");
					$(".brand_anchor_area ul li a.anchor_product").addClass("active");
				}
			}
			if ($(this).scrollTop() > target3 - 80) {
				var brandAnchorAreaHeight = $(".brand_anchor_area").outerHeight();
				var prdListTopHeight = $(".prd_list_top").outerHeight();
				$(".prd_list_top,.prd_list_new").addClass("fixed");
				if (prevTop > bottomPageConTop) {
					$(".navSection_swiper").show();
					$(".prd_list_new").css("padding-top",brandAnchorAreaHeight + prdListTopHeight - 20);
				}else{
					$(".navSection_swiper").hide();
					$(".prd_list_new").css("padding-top",brandAnchorAreaHeight + prdListTopHeight - 20);
				}
			} else {
				$(".prd_list_top,.prd_list_new").removeClass("fixed");
				$(".prd_list_new").css("padding-top","0");
				$(".navSection_swiper").show();
			}
			prevTop = bottomPageConTop;
		});
	}
	if($(".sticky_product").length > 0) {
		var prevTop = 0;
		var target3 = $(".sticky_product").position().top;
		$(".bottom_page_con").scroll(function(){
			var bottomPageConTop = $(".bottom_page_con").scrollTop();
			if ($(this).scrollTop() > target3 - 80) {
				$(".prd_list_top,.prd_list_new").addClass("fixed2");
				if (prevTop > bottomPageConTop) {
					$(".navSection_swiper").show();
				}else{
					$(".navSection_swiper").hide();
				}
			} else {
				$(".prd_list_top,.prd_list_new").removeClass("fixed2");
			}
			prevTop = bottomPageConTop;
		});
	}
}
HDFUINEW.cartBottomPd = function () {
	if($(".cart_bottom").length > 0) {
		$(".cart_bottom").prev().css("padding-bottom", $(".cart_bottom").height() +30 );
	}
}

HDFUINEW.cartBottomPd2 = function () {
	if($(".cart_area .cart_bottom").length > 0) {
		$(".cart_area .cart_bottom").prev().css("padding-bottom", $(".cart_bottom").height() +80 );
	}
}

HDFUINEW.squareTooltip = function () {
    if($(".square_tooltip").length) {
        $(".square_tooltip .btn").bind("click", function(){
            if(!$(this).parent().is(".open")){
                $(".square_tooltip").removeClass("open");
                $(this).parent().addClass("open");
				$(".cart_layer_top_btn").css("opacity","0");
            }
            else{
                $(this).parent().removeClass("open");
				$(".cart_layer_top_btn").css("opacity","1");
            }
        });
        $(".square_tooltip .close").bind("click", function(){
            $(".square_tooltip").removeClass("open");
			$(".cart_layer_top_btn").css("opacity","1");
        });
    }
}
//주문결제 툴팁
HDFUINEW.squareTooltip2 = function () {
    $(".pay_wrap, .my_wrap").each(function () {
        $(".square_tooltip").parent().addClass("tool_position");
    });
}

//주문결제 툴팁
HDFUINEW.brandProductTab = function () {
	var config7 = {
		slidesPerView: 'auto',
		spaceBetween: 0,
		pagination: false,
		wrapperClass: 'section_tab',
		slideClass: 'tab_item',
		setWrapperSize: true,
	
	};
	var $tabItems7 = $('#nav_tab7 .tab_item');
	var tabSwiper7 = new Swiper('#nav_tab7', config7);
	$tabItems7.on('click', 'a', function (e) {
		var $this = $(this),
			$targetItem7 = $this.closest('.tab_item'),
			activeIndex7 = $targetItem7.index();
		$tabItems7.removeClass('is_selected');
		$targetItem7.addClass('is_selected');
		tabSwiper7.slideTo(activeIndex7 - 1, 400);
    });
}


//메인 현대스타일,선택한 해시태그 선택 버튼

HDFUINEW.btnRoundGroup = function () {
    $(".btn_round_group a").click(function(){
		$(".btn_round_group a").removeClass("is_active");
		$(this).addClass("is_active");
	});
}
//기획전 이벤트 좋아요
HDFUINEW.btnEvlikeClick = function () {
	$(".btn_ev_like.after_login").click(function(){
		$(this).toggleClass("on");
	});
}
//attr('style','font-size: '+ fsize + 'px !important');
HDFUINEW.selRht = function () {
	$(".prd_sort .sel > select, .my_total_sel > select").attr('dir','rtl');
	$(".photo_review .title select").attr('dir','rtl');
}

// 상품상단고정

HDFUINEW.prdFixed = function () {
	if ($('.prd_fixed_wrap').length > 0) {
		$('.prd_fixed_wrap').wrap('<div class="prd_fixed_wrap_all"></div>');
		var prevTop = 0;
		$(window).on('scroll.reload', function () {
			//UI수정건
			if(!$(".filter_popup").hasClass("active")){
				var prdWrap	= $('.prd_fixed_wrap'),
				prdWrapHeight	= $('.prd_fixed_wrap').outerHeight(),
				headerHeight  = $(".header").outerHeight(),
				headerTopHeight  = $(".header_top").outerHeight(),
				headerTopHeight2  = $(".sh_top.fixed").parents(".header").outerHeight(),
				prdTop = $(".prd_fixed_wrap_all").position().top - headerHeight ;
				prdTop2 = $(".prd_fixed_wrap_all").position().top - headerTopHeight ;
				var nowTop = $(window).scrollTop();

				
				if($(".header").find(".nav_main")){
					if (nowTop > prdTop2) {
						if(nowTop > prevTop){
							if($(".header").find(".sh_top.fixed")){
								prdWrap.addClass('prd_fixed').css("top",headerTopHeight2).css("z-index","106").next("#goosArea, .prd_list_new, .mov_item").css("padding-top",prdWrapHeight);
							}
							prdWrap.addClass('prd_fixed').css("top",headerTopHeight).css("z-index","106").next("#goosArea, .prd_list_new, .mov_item").css("padding-top",prdWrapHeight);
						}else{
							prdWrap.addClass('prd_fixed').css("top",headerHeight).css("z-index","100").next("#goosArea, .prd_list_new, .mov_item").css("padding-top",prdWrapHeight);
						}
					} else {
						prdWrap.removeClass('prd_fixed').css("top","0").css("z-index","100").next("#goosArea, .prd_list_new, .mov_item").css("padding-top","0");
					}
				}else{
					if (nowTop > prdTop) {
						prdWrap.addClass('prd_fixed').css("top",headerHeight).next("#goosArea, .prd_list_new, .mov_item").css("padding-top",prdWrapHeight);
					} else {	
						prdWrap.removeClass('prd_fixed').css("top","0").next("#goosArea, .prd_list_new, .mov_item").css("padding-top","0");
					}
				}
				prevTop = nowTop;
			}
			//UI수정건 END
		});
	}
	
};

HDFUINEW.swipeAreaClick = function () {
	$(".main_type .swipe_area").bind("click", function(){
		var safe_area_top2 =  Number($(".main_section .header").css('padding-top').replace(/[^-\d\.]/g, ''));
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).parents(".main_type").removeClass("on");
			var bottomTopSwiperHeight = $(".bottom_top_swiper").outerHeight();
			$(".main_type").animate({top:bottomTopSwiperHeight - 60},300);
			$(".main_type .bottom_page_con").animate({scrollTop:0},300);
			$(this).parents(".main_type").find(".bottom_page_con").css("overflow-y","hidden");
			HDFUINEW.scroll_unfreeze();

		}else{
			$(".bottom_page.main_type").animate({top: safe_area_top2 + 40},300);
			$(".bottom_page.main_type").addClass("on");
			$(this).addClass("on");
			HDFUINEW.scroll_freeze();
		}
	});
	$(".brand_type .swipe_area").bind("click", function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).parents(".brand_type").removeClass("on");
			var bottomTopSwiperHeight = $(".bottom_top_swiper").outerHeight();
            $(".brand_type").animate({top:bottomTopSwiperHeight+20},300);
			$(".brand_type .bottom_page_con").animate({scrollTop:0},300);
			$(this).parents(".brand_type").find(".bottom_page_con").css("overflow-y","hidden");
			$(this).parents(".brand_type").find(".bottom_page_con").find(".btn_ck.on").trigger("click");
			HDFUINEW.scroll_unfreeze();
		}else{
			$(".bottom_page.brand_type").animate({top:40},200);// 2021-08-12 20 → 40
			$(".bottom_page.brand_type").addClass("on");
			$(this).addClass("on");
			HDFUINEW.scroll_freeze();
		}
	});
	$(".fullscreen_basic .ui-close").bind("click", function(){
		if($(this).parents(".fullscreen_basic").hasClass("active")){
			$(this).parents(".fullscreen_basic").find(".box").animate({scrollTop:0},10);
			$(this).parents(".fullscreen_basic").find(".chk_item_list_top_area").removeClass("fixed");
			$(this).parents(".fullscreen_basic").find(".btn_category_area").removeClass("fixed");
			$(this).parents(".fullscreen_basic").find(".chk_item_list_top_area").removeClass("fixed");
			$(this).parents(".fullscreen_basic").removeClass("active");
			HDFUINEW.scroll_freeze();
			/* 20230608 추가 */
			document.body.removeAttribute('style');
			document.querySelector('html').removeAttribute('style');
			/* //20230608 추가 */
			if(!$(this).parents(".fullscreen_basic").siblings().hasClass("active")){
				$(this).parents(".fullscreen_basic").find(".box").animate({scrollTop:0},10);
				$(this).parents(".fullscreen_basic").find(".chk_item_list_top_area").removeClass("fixed");
				$(this).parents(".fullscreen_basic").find(".btn_category_area").removeClass("fixed");
				$(this).parents(".fullscreen_basic").find(".chk_item_list_top_area").removeClass("fixed");
				$(this).parents(".fullscreen_basic").removeClass("active");
				HDFUINEW.scroll_unfreeze();
			}
		}
	});
	$(".fullscreen_second .ui-close").bind("click", function(){
		if($(this).parents(".fullscreen_second").hasClass("active")){
			$(this).parents(".fullscreen_second").find(".box").animate({scrollTop:0},10);
			$(this).parents(".fullscreen_second").find(".chk_item_list_top_area").removeClass("fixed");
			$(this).parents(".fullscreen_second").find(".btn_category_area").removeClass("fixed");
			$(this).parents(".fullscreen_second").find(".chk_item_list_top_area").removeClass("fixed");
			$(this).parents(".fullscreen_second").removeClass("active");
			HDFUINEW.scroll_freeze();
			if(!$(this).parents(".fullscreen_second").siblings().hasClass("active")){
				$(this).parents(".fullscreen_second").find(".box").animate({scrollTop:0},10);
				$(this).parents(".fullscreen_second").find(".chk_item_list_top_area").removeClass("fixed");
				$(this).parents(".fullscreen_second").find(".btn_category_area").removeClass("fixed");
				$(this).parents(".fullscreen_second").find(".chk_item_list_top_area").removeClass("fixed");
				$(this).parents(".fullscreen_second").removeClass("active");
				HDFUINEW.scroll_unfreeze();
			}
		}
	});
	$(".fullscreen_third .ui-close").bind("click", function(){
		if($(this).parents(".fullscreen_third").hasClass("active")){
			$(this).parents(".fullscreen_third").find(".box").animate({scrollTop:0},10);
			$(this).parents(".fullscreen_third").find(".chk_item_list_top_area").removeClass("fixed");
			$(this).parents(".fullscreen_third").find(".btn_category_area").removeClass("fixed");
			$(this).parents(".fullscreen_third").find(".chk_item_list_top_area").removeClass("fixed");
			$(this).parents(".fullscreen_third").removeClass("active");
			HDFUINEW.scroll_freeze();
			if(!$(this).parents(".fullscreen_third").siblings().hasClass("active")){
				$(this).parents(".fullscreen_third").find(".box").animate({scrollTop:0},10);
				$(this).parents(".fullscreen_third").find(".chk_item_list_top_area").removeClass("fixed");
				$(this).parents(".fullscreen_third").find(".btn_category_area").removeClass("fixed");
				$(this).parents(".fullscreen_third").find(".chk_item_list_top_area").removeClass("fixed");
				$(this).parents(".fullscreen_third").removeClass("active");
				HDFUINEW.scroll_unfreeze();
			}
		}
	});
	$(".fullscreen_half .ui-close").bind("click", function(){
		if($(this).parents(".fullscreen_half").hasClass("active")){
			$(this).parents(".fullscreen_half").find(".box").animate({scrollTop:0},10);
			$(this).parents(".fullscreen_half").find(".chk_item_list_top_area").removeClass("fixed");
			$(this).parents(".fullscreen_half").find(".btn_category_area").removeClass("fixed");
			$(this).parents(".fullscreen_half").find(".chk_item_list_top_area").removeClass("fixed");
			$(this).parents(".fullscreen_half").removeClass("active");
			HDFUINEW.scroll_freeze();
			if(!$(this).parents(".fullscreen_half").siblings().hasClass("active")){
				$(this).parents(".fullscreen_half").find(".box").animate({scrollTop:0},10);
				$(this).parents(".fullscreen_half").find(".chk_item_list_top_area").removeClass("fixed");
				$(this).parents(".fullscreen_half").find(".btn_category_area").removeClass("fixed");
				$(this).parents(".fullscreen_half").find(".chk_item_list_top_area").removeClass("fixed");
				$(this).parents(".fullscreen_half").removeClass("active");
				HDFUINEW.scroll_unfreeze();
			}
		}
	});
	$(".fullscreen_btm .ui-close").bind("click", function(){
		if($(this).parents(".fullscreen_btm").hasClass("active")){
			$(this).parents(".fullscreen_btm").removeClass("active");
			if($('.fullscreen_btm').find(".box_in")){
				$('.fullscreen_btm').find(".box_in").animate({scrollTop : 0},400);
			}
			HDFUINEW.scroll_unfreeze();
		}
		if(!$(this).parents(".fullscreen_btm").siblings().hasClass("active")){
			$(this).parents(".fullscreen_btm").removeClass("active");
			if($('.fullscreen_btm').find(".box_in")){
				$('.fullscreen_btm').find(".box_in").animate({scrollTop : 0},400);
			}
			HDFUINEW.scroll_unfreeze();
		}
	});
};

HDFUINEW.productScrollAll = function () {
	// 상품상세 스크롤 이벤트
	$(".scroll_area").scroll(function(){
		var h01 = $(".product_info").outerHeight(true)
		var h02 = $(".price_info").outerHeight(true)
		var h03 = $(".pro_option").outerHeight(true)
		var tab_a = $(".pro_detail_01").outerHeight(true)
		var tab_b = $(".pro_detail_02").outerHeight(true)
		var chip_01 = $(".color_chip_area01").outerHeight(true)
		var chip_02 = $(".color_chip_area02").outerHeight(true)
		if ($(this).scrollTop() < tab_a) {
			$(".product_tab li").removeClass("active");
			$(".product_tab li:nth-child(1)").addClass("active");
		} 
		if(tab_a+h01+h02+h03+chip_01+chip_02 < $(this).scrollTop()) {
			$(".product_tab li").removeClass("active");
			$(".product_tab li:nth-child(2)").addClass("active");
		} 
		if(tab_a+tab_b+h01+h02+h03+chip_01+chip_02 < $(this).scrollTop()) {
			$(".product_tab li").removeClass("active");
			$(".product_tab li:nth-child(3)").addClass("active");
		}
	});
	$(document).on("click", ".product_tab li:nth-child(1)", function(){
		var h01 = $(".product_info").outerHeight(true)
		var h02 = $(".price_info").outerHeight(true)
		var h03 = $(".pro_option").outerHeight(true)
		var chip_01 = $(".color_chip_area01").outerHeight(true)
		var chip_02 = $(".color_chip_area02").outerHeight(true)
		$(".scroll_area").animate({scrollTop:h01+h02+h03+chip_01+chip_02+33},100);
	})
	$(document).on("click", ".product_tab li:nth-child(2)", function(){
		var h01 = $(".product_info").outerHeight(true)
		var h02 = $(".price_info").outerHeight(true)
		var h03 = $(".pro_option").outerHeight(true)
		var proDetail01Height = $(".pro_detail_01").outerHeight(true)
		var chip_01 = $(".color_chip_area01").outerHeight(true)
		var chip_02 = $(".color_chip_area02").outerHeight(true)
		$(".scroll_area").animate({scrollTop:h01+h02+h03+chip_01+chip_02+proDetail01Height+50},100);
	})
	$(document).on("click", ".product_tab li:nth-child(3)", function(){
		var h01 = $(".product_info").outerHeight(true)
		var h02 = $(".price_info").outerHeight(true)
		var h03 = $(".pro_option").outerHeight(true)
		var proDetail01Height = $(".pro_detail_01").outerHeight(true)
		var proDetail02Height = $(".pro_detail_02").outerHeight(true)
		var chip_01 = $(".color_chip_area01").outerHeight(true)
		var chip_02 = $(".color_chip_area02").outerHeight(true)
		$(".scroll_area").animate({scrollTop:h01+h02+h03+chip_01+chip_02+proDetail01Height+proDetail02Height+50},100);
	})
	// scroll area sticky
	$(".scroll_area").scroll(function(){
		var proHeight = $(".product_top_area").height();
		if ($(".scroll_area").scrollTop() >= proHeight+32) {
			$(".product_tab, .product_panel").addClass("sticky");
		}
		else {
			$(".product_tab, .product_panel").removeClass("sticky");
		}
	});
};

HDFUINEW.bullLikeArea = function () {
	if($(".bull_like_area").length > 0) {
		var animation1 = bodymovin.loadAnimation({
			container: document.getElementById('heart01_1'),
			//path: 'https://cdn.hddfs.com/front/js/M_KO/heart2.html',/* 퍼블경로 ->  ../../js/M_KO/heart2.html , 개발 https://cdn.hddfs.com/front/html/M_KO/js/M_KO/heart2.html */
			animationData: {"v":"5.7.11","fr":30,"ip":0,"op":30,"w":140,"h":140,"nm":"合成 1","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":0,"s":[70.099,69.979,0],"to":[0,-9.333,0],"ti":[0,11,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":10,"s":[70.099,13.979,0],"to":[0,-11,0],"ti":[0,1.667,0]},{"t":18,"s":[70.099,3.979,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0.599,-0.021,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[100,100,100]},{"t":18,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.198,6.198],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.094117999077,0.564706027508,1,1],"ix":3},"o":{"a":0,"k":0,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.599,-0.276],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[69.844,69.969,0],"ix":2,"l":2},"a":{"a":0,"k":[34.167,18.715,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[18,18,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":14,"s":[120,120,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":18,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":21,"s":[110,110,100]},{"t":23,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.006,0.001],[0,0],[2.211,-2.211],[0,0],[0,0],[2.211,-2.211],[0,0],[-2.209,-2.209],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.206,2.213]],"o":[[0,0],[-2.211,-2.211],[0,0],[0,0],[-2.211,-2.211],[0,0],[-2.209,2.209],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.213,-2.206],[-0.004,-0.004]],"v":[[11.628,-14.307],[11.628,-14.307],[3.621,-14.307],[2.286,-12.973],[0.951,-14.307],[-7.056,-14.307],[-7.056,-14.307],[-7.056,-6.307],[-5.721,-4.965],[-5.721,-4.965],[2.286,2.035],[10.32,-4.965],[10.32,-4.965],[11.628,-6.299],[11.642,-14.298]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.889999985695,0.20000000298,0.20000000298,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[31.25,31],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[163.325,163.325],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"组 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-61,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[5,5,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":3,"s":[10,10,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[90,90,100]},{"t":14,"s":[97,97,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[91.744,91.744],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.192157000303,0.7333329916,0.674510002136,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.372,-0.878],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[10]},{"t":14,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":0,"s":[70.099,69.979,0],"to":[0,-9.333,0],"ti":[0,11,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":10,"s":[70.099,13.979,0],"to":[0,-11,0],"ti":[0,1.667,0]},{"t":18,"s":[70.099,3.979,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0.599,-0.021,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[100,100,100]},{"t":18,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.198,6.198],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.094117999077,0.564706027508,1,1],"ix":3},"o":{"a":0,"k":0,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.599,-0.276],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":135,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":180,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":225,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":270,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":315,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0}],"markers":[]},
			renderer: 'svg', // Required
			loop: false, // Optional
			autoplay: false // Optional
		});
		$(".bull_like_area.after_login a.bull_like").on("click", function() {
			$(this).addClass("on");
			$(this).next(".motion_area").css("opacity","1");
			animation1.stop();
			animation1.play();
		});
	}
}
HDFUINEW.bullLikeArea2 = function () {
	if($(".bull_like_area2").length > 0) {
		$('.bull_like_area2').each(function (index, item) {
			index = index + 1
			var animation2 = bodymovin.loadAnimation({
				container: document.getElementById('heart02_' + index),
				//path: 'https://cdn.hddfs.com/front/js/M_KO/heart2.html',/* 퍼블경로 ->  ../../js/M_KO/heart.html , 개발 ../../html/M_KO/js/M_KO/heart.html */
				animationData: {"v":"5.7.11","fr":30,"ip":0,"op":30,"w":140,"h":140,"nm":"合成 1","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":0,"s":[70.099,69.979,0],"to":[0,-9.333,0],"ti":[0,11,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":10,"s":[70.099,13.979,0],"to":[0,-11,0],"ti":[0,1.667,0]},{"t":18,"s":[70.099,3.979,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0.599,-0.021,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[100,100,100]},{"t":18,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.198,6.198],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.094117999077,0.564706027508,1,1],"ix":3},"o":{"a":0,"k":0,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.599,-0.276],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[69.844,69.969,0],"ix":2,"l":2},"a":{"a":0,"k":[34.167,18.715,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[18,18,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":14,"s":[120,120,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":18,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":21,"s":[110,110,100]},{"t":23,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.006,0.001],[0,0],[2.211,-2.211],[0,0],[0,0],[2.211,-2.211],[0,0],[-2.209,-2.209],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.206,2.213]],"o":[[0,0],[-2.211,-2.211],[0,0],[0,0],[-2.211,-2.211],[0,0],[-2.209,2.209],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.213,-2.206],[-0.004,-0.004]],"v":[[11.628,-14.307],[11.628,-14.307],[3.621,-14.307],[2.286,-12.973],[0.951,-14.307],[-7.056,-14.307],[-7.056,-14.307],[-7.056,-6.307],[-5.721,-4.965],[-5.721,-4.965],[2.286,2.035],[10.32,-4.965],[10.32,-4.965],[11.628,-6.299],[11.642,-14.298]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.889999985695,0.20000000298,0.20000000298,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[31.25,31],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[163.325,163.325],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"组 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-61,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[5,5,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":3,"s":[10,10,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[90,90,100]},{"t":14,"s":[97,97,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[91.744,91.744],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.192157000303,0.7333329916,0.674510002136,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.372,-0.878],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[10]},{"t":14,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":0,"s":[70.099,69.979,0],"to":[0,-9.333,0],"ti":[0,11,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":10,"s":[70.099,13.979,0],"to":[0,-11,0],"ti":[0,1.667,0]},{"t":18,"s":[70.099,3.979,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0.599,-0.021,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[100,100,100]},{"t":18,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.198,6.198],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.094117999077,0.564706027508,1,1],"ix":3},"o":{"a":0,"k":0,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.599,-0.276],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":135,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":180,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":225,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":270,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":315,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0}],"markers":[]},
				renderer: 'svg', // Required
				loop: false, // Optional
				autoplay: false // Optional
			});
			$(".bull_like_area2.after_login #btn_heart02_" + index).on("click", function() {
				$(this).addClass("on");
				$(this).next(".motion_area").css("opacity","1");
				animation2.stop();
				animation2.play();
			});
		});
	}
}

HDFUINEW.bullLikeArea3 = function () {
	if($(".bull_like_area3").length > 0) {
		$(".bull_like_area3 a.bull_like3").on("click", function(e) {
			$(this).addClass("on");
			e.preventDefault();
		});
	}
}

HDFUINEW.bFavorites = function () {
	if($(".b_favorites").length > 0) {
		var animation3 = bodymovin.loadAnimation({
			container: document.getElementById('heart03_1'),
			//path: 'https://cdn.hddfs.com/front/js/M_KO/heart2.html',/* 퍼블경로 ->  ../../js/M_KO/heart2.html , 개발 https://cdn.hddfs.com/front/html/M_KO/js/M_KO/heart2.html */
			animationData: {"v":"5.7.11","fr":30,"ip":0,"op":30,"w":140,"h":140,"nm":"合成 1","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":0,"s":[70.099,69.979,0],"to":[0,-9.333,0],"ti":[0,11,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":10,"s":[70.099,13.979,0],"to":[0,-11,0],"ti":[0,1.667,0]},{"t":18,"s":[70.099,3.979,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0.599,-0.021,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[100,100,100]},{"t":18,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.198,6.198],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.094117999077,0.564706027508,1,1],"ix":3},"o":{"a":0,"k":0,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.599,-0.276],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[69.844,69.969,0],"ix":2,"l":2},"a":{"a":0,"k":[34.167,18.715,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[18,18,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":14,"s":[120,120,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":18,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":21,"s":[110,110,100]},{"t":23,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.006,0.001],[0,0],[2.211,-2.211],[0,0],[0,0],[2.211,-2.211],[0,0],[-2.209,-2.209],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.206,2.213]],"o":[[0,0],[-2.211,-2.211],[0,0],[0,0],[-2.211,-2.211],[0,0],[-2.209,2.209],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.213,-2.206],[-0.004,-0.004]],"v":[[11.628,-14.307],[11.628,-14.307],[3.621,-14.307],[2.286,-12.973],[0.951,-14.307],[-7.056,-14.307],[-7.056,-14.307],[-7.056,-6.307],[-5.721,-4.965],[-5.721,-4.965],[2.286,2.035],[10.32,-4.965],[10.32,-4.965],[11.628,-6.299],[11.642,-14.298]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.889999985695,0.20000000298,0.20000000298,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[31.25,31],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[163.325,163.325],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"组 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-61,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[5,5,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":3,"s":[10,10,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[90,90,100]},{"t":14,"s":[97,97,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[91.744,91.744],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.192157000303,0.7333329916,0.674510002136,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.372,-0.878],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[10]},{"t":14,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":0,"s":[70.099,69.979,0],"to":[0,-9.333,0],"ti":[0,11,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":10,"s":[70.099,13.979,0],"to":[0,-11,0],"ti":[0,1.667,0]},{"t":18,"s":[70.099,3.979,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0.599,-0.021,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[100,100,100]},{"t":18,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.198,6.198],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.094117999077,0.564706027508,1,1],"ix":3},"o":{"a":0,"k":0,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.890196144581,0.200000017881,0.200000017881,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.599,-0.276],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":135,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":180,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":225,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":270,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"1-1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":315,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2,"l":2},"a":{"a":0,"k":[70,70,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":140,"h":140,"ip":0,"op":900,"st":0,"bm":0}],"markers":[]},
			renderer: 'svg', // Required
			loop: false, // Optional
			autoplay: false // Optional
		});
		$(".after_login .b_favorites").on("click", function() {
			$(this).addClass("on");
			$(this).next(".b_favorites_motion").css("opacity","1");
			animation3.stop();
			animation3.play();
		});
	}
}

HDFUINEW.dragArea = function () {
// drag area
	var draghandler = $(".drag_area .handler");
	var dragstartY,dragendY;
	$(draghandler).on('touchstart',function(event){
		dragstartY = event.originalEvent.changedTouches[0].screenY;
	});
	$(draghandler).on('touchend',function(event){
		dragendY=event.originalEvent.changedTouches[0].screenY;

		if(dragstartY-dragendY>10){
			$(".drag_area .handler").trigger("click");
		} else {
			$(".drag_area .area_close").trigger("click");
		}
	});
	$(".drag_area").each(function(){
		var obj = $(this).offset().top;
		var boxH = $(".fixed_area").height();
		var mouseH = $(".drag_area").height();
		var windowH = $(window).height();
		$(".scroll_area").css({"height":(windowH)+"px"})
	});
	$(".scroll_area").scroll(function(){
		if ($(this).scrollTop() > 0) {
			$(".drag_area").addClass("pd_sticky");
			$(".drag_area .handler").css({"z-index":"199"});
			$(".drag_area .area_close").css({"z-index":"200"});
			$(".header.product").hide();
		} else {
			$(".drag_area").removeClass("pd_sticky");
			$(".drag_area .area_close").css({"z-index":"199"});
			$(".drag_area .handler").css({"z-index":"200"});
			$(".header.product").show()
		}
	});
	$("<div class='area_close' />").appendTo(".drag_area")
	$(".drag_area .handler").click(function(){
		$(".drag_area").addClass("pd_sticky");
		$(".drag_area .handler").css({"z-index":"199"});
		$(".drag_area .area_close").css({"z-index":"200"});
		$(".scroll_area").animate({scrollTop:1},0);
		$(".header.product").hide();
	})
	$(".drag_area .area_close").click(function(){
		$(".drag_area").removeClass("pd_sticky");
		$(".drag_area .area_close").css({"z-index":"199"});
		$(".drag_area .handler").css({"z-index":"200"});
		$(".scroll_area").animate({scrollTop:0},0);
		$(".header.product").show();
	})
}

HDFUINEW.slideRecommendation = function () {
	// 추천상품 슬라이더
	var sliderecommendationswiper = new Swiper('.slide_recommendation .swiper-container', {
		slidesPerView: 1,
		scrollbar: {
			el: '.recommendation-scrollbar',
			draggable: true,
		},
		speed: 500,
		//loop: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		lazy: {
			loadPrevNext: true,
		},
		lazy: true,
		onSlideChangeStart: function(sliderecommendationswiper) {
			if ($('.swiper-slide-next video')[0]) $('.swiper-slide-next video')[0].pause();
			if ($('.swiper-slide-prev video')[0]) $('.swiper-slide-prev video')[0].pause();
		},
		onSlideChangeEnd: function(sliderecommendationswiper) {
			if ($('.swiper-slide-next video')[0]) $('.swiper-slide-next video')[0].pause();
			if ($('.swiper-slide-prev video')[0]) $('.swiper-slide-prev video')[0].pause();
		},
	});

	/* S: 2021-07-14 모바일 추천상품 이미지 크롭관련 추가 */
	$(".slide_recommendation .item_a img").each(function() {
		// $(this).load(function(){ //이미지를 다 불러온후 확인하기 위해
		// 	// var imgHeight = $(this).height();
		// 	// var pimgHeight = $(this).parent(".img").height();
		// 	// $(this).parent(pimgHeight).css({"padding-top":((pimgHeight-imgHeight)/2)+"px"})
		// 	img_crop(this);
		// });
		img_crop(this);
	});

	function img_crop(_target) {
		var _target = $(_target);
		var wrap_ratio = _target.closest(".img")[0].offsetHeight / _target.closest(".img")[0].offsetWidth;
		var img_ratio = _target[0].naturalHeight / _target[0].naturalWidth;
		var wrap_ratio_2 = _target.closest(".img")[0].offsetWidth / _target.closest(".img")[0].offsetHeight;
		var img_ratio_2 = _target[0].naturalWidth / _target[0].naturalHeight;
		if (img_ratio <= wrap_ratio) {
			var imgWidthActual = _target.closest(".img")[0].offsetHeight / img_ratio;
			var imgWidthTobe = _target.closest(".img")[0].offsetHeight / wrap_ratio;
			var marginLeft = -Math.round((imgWidthActual - imgWidthTobe) / 2);
			_target.css({ width: "auto", height: "100%", marginLeft: marginLeft });
		} else {
			var imgHeightActual = _target.closest(".img")[0].offsetWidth / img_ratio_2;
			var imgHeightTobe = _target.closest(".img")[0].offsetWidth / wrap_ratio_2;
			var marginTop = -Math.round((imgHeightActual - imgHeightTobe) / 2);
			_target.css({ width: "100%", height: "auto", marginTop: marginTop });
		}
	}
	/* E: 2021-07-14 모바일 추천상품 이미지 크롭관련 추가 */
}

HDFUINEW.slideBrandbest = function () {
	// 브랜드베스트 슬라이더
	var brandbestswiper = new Swiper('.slide_brandbest .swiper-container', {
		slidesPerView: 2.5,
		spaceBetween: 12,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		lazy: {
			loadPrevNext: true,
		}
	});
	// 브랜드 베스트 비디오 높이
	if($(".slide_brandbest .video-js").length) {
		$(".slide_brandbest .img .video-js").each(function(){
			var slidbrandbestWidth = $(this).parent(".img").width()
			$(this).parent(".img").css({"height":(slidbrandbestWidth)+"px"})
		});
	}
}

HDFUINEW.slideTogether = function () {
	// 함께본상품 슬라이더
	var slidetogetherswiper = new Swiper('.slide_together .swiper-container', {
		slidesPerView: 2.5,
		spaceBetween: 12,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		lazy: {
			loadPrevNext: true,
		}
	});
	// 함께본 상품 비디오 높이
	if($(".slide_together .video-js").length) {
		$(".slide_together .img .video-js").each(function(){
			var slidtogetherWidth = $(this).parent(".img").width()
			$(this).parent(".img").css({"height":(slidtogetherWidth)+"px"})
		});
	}
}

HDFUINEW.bodyScrollHidden = function () {
	// 상품상세 body scroll hidden
	$(".product_detail").parents("body").addClass("pd_fix").css({
		"position":"fixed",
		"width":"100%",
		"height":"100%"
	})
}
HDFUINEW.productVisual = function () {
	// 제품상세 슬라이더
	var productswiper = new Swiper('.product_visual .swiper-container', {
		direction: 'vertical',
		autoHeight: true,
		pagination: {
			el: '.product-pagination',
		},
		watchOverflow:true,
		onSlideChangeStart: function(productswiper) {
			if ($('.swiper-slide-next video')[0]) $('.swiper-slide-next video')[0].pause();
			if ($('.swiper-slide-prev video')[0]) $('.swiper-slide-prev video')[0].pause();
		},
		onSlideChangeEnd: function(productswiper) {
			if ($('.swiper-slide-next video')[0]) $('.swiper-slide-next video')[0].pause();
			if ($('.swiper-slide-prev video')[0]) $('.swiper-slide-prev video')[0].pause();
		},
	});
	var proswiper = $(".product_visual .swiper-slide:last-child");
	var proHeight = $(".product_visual .swiper-slide").height();
	var startY,endY;
	$(proswiper).on('touchstart',function(event){
		startY = event.originalEvent.changedTouches[0].screenY;
	});
	$(proswiper).on('touchend',function(event){
		endY=event.originalEvent.changedTouches[0].screenY;
		if(startY-endY>10){
			$("body,html").animate({scrollTop:proHeight+40},300);
			$(".drag_area").addClass("pd_sticky");
			$(".scroll_area").animate({scrollTop:1},0)
		}
	});
}

HDFUINEW.giftSelection = function () {
	// 사은품 슬라이더
	var giftswiper = new Swiper('.gift_selection .swiper-container', {
		slidesPerView: 1.1,
		spaceBetween: 10,
	});
	// 사은품 초기화
	giftswiper.on('transitionStart', function() {
		$(".gift_selection .screen").slideUp(100);
		$(".gift_selection .swiper-slide").removeClass("open");
	});
	$(".gift_selection .swiper-slide").click(function(){
		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$(this).find(".screen").slideUp(200)
		}else{
			$(this).addClass("open");
			$(this).find(".screen").slideDown(200)
		}
	});
}

HDFUINEW.prdzoomSwiper = function () {
	var prdzoom_swiper = new Swiper('#img_big_slide', {
		slidesPerView: 1,
		spaceBetween: 0,
		slideClass: 'zoom_item',
		spaceBetween: 0,
		observer: true,
		observeParents: true,
		speed: 500,
		pagination: {
			el: '.pd_zoom',
		},
	});
}

HDFUINEW.proSelectSet = function () {
	if($(".pro_select_set").length){
		$(function(){
			var winWidth = $(window).width();
			var stipWidth = $(".pro_select_set .sale_tooltip p").outerWidth(true);
			var setItemHeight = $(".set_item_list .prd_list_new li > a").outerHeight(true);
			//$(".pro_select_set .sale_tooltip").css({"padding-left":((winWidth-stipWidth)/2)+"px"}) //21-05-04 삭제
			$(".pro_select_set .checkbox_dimm").css({"height":(setItemHeight - 20 )+"px"})
		});

		$(".pro_select_set .handler").click(function() {
			if(!$(".add_to_cart").is(".open")){
				$(".add_to_cart").addClass("open");
			}
			else{
				$(".add_to_cart").removeClass("open");
			}
		})
	}
}

HDFUINEW.cartMotion = function () {
	$(".add_cart").click(function() {
		$(".product_appbar").addClass("cart_open");
		$(".pro_cart").addClass("open");
		$(".pro_dim").fadeIn();
		$(".add_cart").removeClass("return");
		$(".add_cart.btn_hshare").hide();/* E: H.Share 상품상세 : 2022-03-25 추가 by pub10 */
		// [pub]21-12-22 - DIOR GNB 인터렉션 수정 Start
		if ($('body').find('.container.dior').length) {
			if ($('.container.dior').find('.menu-list.is-opened').length) {
				$('.container.dior').find('.dior_header').css('z-index', 199);
				$('.container.dior').find('.menu-list').css('z-index', 198).removeClass('is-opened');
				$('.container.dior').find('.list-1depth').slideToggle();
				$('.container.dior').find('.menu-all>p').toggleClass('arrow');
				$('.list-2depth').slideUp(function () { $('.list-1depth li p').removeClass('arrow'); });
			};
		};
		// [pub]21-12-22 - DIOR GNB 인터렉션 수정 End
	});
	
	$(".pro_cart_handler, .pro_dim").click(function(){
	 	setTimeout(function(){
	 		$(".product_appbar").removeClass("cart_open");
	 	}, 0);
	 	$(".pro_cart").removeClass("open");
	 	$(".pro_dim").delay().fadeOut();
	 	$(".add_cart").addClass("return");
	 	$(".add_cart.btn_hshare").delay(400).fadeIn();/* E: H.Share 상품상세 : 2022-03-25 추가 by pub10 */
	 	setTimeout(function(){
	 		$(".add_cart").removeClass("return");
	 	}, 801)
	 });
	// 장바구니 클로즈 핸들러
	if($(".pro_cart_handler").length > 0){ //2021-09-10 .pro_cart_handler 유무 조건 처리(조건만 추가)
		$(".pro_cart_handler").addSwipeEvents().bind('swipedown', (function(evt){
			setTimeout(function(){
				$(".product_appbar").removeClass("cart_open");
			}, 0);
			$(".pro_cart").removeClass("open");
			$(".pro_dim").delay().fadeOut();
			$(".add_cart").addClass("return");
			setTimeout(function(){
				$(".add_cart").removeClass("return");
			}, 801)
			evt.preventDefault();
		}))
	}
}

//다른결제수단 라디오
HDFUINEW.btnFormRadio = function () {
    /*
	$(".tab_cont_item .box_form").click(function(){
        $(".tab_cont_item .box_form").removeClass("is_active");
        $(this).addClass("is_active");
    });
	*/
}

HDFUINEW.mainTypeTopBtn = function () {
	$(".main_type .bottom_page_con").append('<div class="layer_top_btn"><a href="#">top버튼</a></div>');
	$(".main_type .bottom_page_con").scroll(function(){
		var maintypeTop = $(".main_type .bottom_page_con").scrollTop();
		if(maintypeTop > 100){
			$(".main_type .layer_top_btn").fadeIn();
		}else{
			$(".main_type .layer_top_btn").fadeOut();
		}
	});
	$(".layer_top_btn a").click(function(e) {
		$(".main_type .bottom_page_con").animate({scrollTop: 0}, 200);
		e.preventDefault();
	});
}

HDFUINEW.brandTypeTopBtn = function () {
	$(".brand_type .bottom_page_con").append('<div class="layer_top_btn"><a href="#">top버튼</a></div>');
	$(".brand_type .bottom_page_con").scroll(function(){
		var brandtypeTop = $(".brand_type .bottom_page_con").scrollTop();
		if(brandtypeTop > 100){
			$(".brand_type .layer_top_btn").fadeIn();
			
			// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 Start
			if ($('.footer').find('.btn_cos_face.type-bottom').length) {
				if (!$('.footer').find('.btn_cos_face.type-bottom').hasClass('has_top_btn')){
					$('.btn_cos_face.type-bottom').addClass('has_top_btn').animate({ "bottom": "144px" }, 200);
				};
			};
			// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 End
		}else{
			$(".brand_type .layer_top_btn").fadeOut();
			
			// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 Start
			if ($('.footer').find('.btn_cos_face.type-bottom').length){
				if ($('.footer').find('.btn_cos_face.type-bottom').hasClass('has_top_btn')) {
					$('.btn_cos_face.type-bottom').removeClass('has_top_btn').animate({ "bottom": "80px" }, 200);
				};
			};
			// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 End
		}
	});
	$(".layer_top_btn a").click(function(e) {
		$(".brand_type .bottom_page_con").animate({scrollTop: 0}, 200);
		e.preventDefault();
	});
}

HDFUINEW.cartTopBtn = function () {
	$(".add_top_btn").append('<div class="cart_layer_top_btn"><a href="#">top버튼</a></div>');
	$(".add_top_btn .cart_area").scroll(function(){
		var carttypeTop = $(".add_top_btn .cart_area").scrollTop();
		if(carttypeTop > 100){
			$(".add_top_btn .cart_layer_top_btn").fadeIn();
		}else{
			$(".add_top_btn .cart_layer_top_btn").fadeOut();
		}
	});
	$(".cart_layer_top_btn a").click(function(e) {
		$(".add_top_btn .cart_area").animate({scrollTop: 0}, 200);
		e.preventDefault();
	});
}

HDFUINEW.proTopBtn = function () {
	/*
	$(".product_detail .drag_area").append('<div class="pro_layer_top_btn"><a href="#">top버튼</a></div>');
	$(".product_detail .drag_area .scroll_area").scroll(function(){
		var protypeTop = $(".product_detail .drag_area .scroll_area").scrollTop();
		if(protypeTop > 100){
			$(".pro_layer_top_btn").fadeIn();
		}else{
			$(".pro_layer_top_btn").fadeOut();
		}
	});
	$(".pro_layer_top_btn a").click(function(e) {
		$(".drag_area .scroll_area").animate({scrollTop: 0}, 200);
		e.preventDefault();
	});
	*/
}

HDFUINEW.layerPopupOpen = function () {
	/*
	if($(".fullscreen_basic").hasClass("active") || $(".fullscreen_second").hasClass("active") || $(".fullscreen_third").hasClass("active") || $(".fullscreen_half").hasClass("active") || $(".fullscreen_btm").hasClass("active")){
		$("html , body").css("overflow-y","hidden");
	}
	*/
}

HDFUINEW.chipArea01 = function () {
	$(".color_chip_area01 .btn_more_area .btn_more").click(function(e) {
		$(".color_chip_area01").css("height","auto");
		$(".color_chip_area01 .btn_more_area").hide();
		e.preventDefault();
	});
	$(".color_chip_area01 .btn_close_area .btn_close").click(function(e) {
		$(".color_chip_area01").css("height","66px");
		$(".color_chip_area01 .btn_more_area").show();
		e.preventDefault();
	});
}

HDFUINEW.chipArea02 = function () {
	$(".color_chip_area02 .btn_more_area .btn_more").click(function(e) {
		$(".color_chip_area02").css("height","auto");
		$(".color_chip_area02 .btn_more_area").hide();
		e.preventDefault();
	});
	$(".color_chip_area02 .btn_close_area .btn_close").click(function(e) {
		$(".color_chip_area02").css("height","66px");
		$(".color_chip_area02 .btn_more_area").show();
		e.preventDefault();
	});
}

HDFUINEW.scroll_freeze = function () {
	/* 추후 해당 함수 삭제 필요할수도 현재 tobe 변경되면서 화면 스크롤에 영향을 줌.(임시방편)*/
	const actUrl = window.location.href;
	if(actUrl.indexOf("/mm/my/myMain.do") > -1 ||
		actUrl.indexOf("/or/order/listCart.do") > -1 ||
		actUrl.indexOf("/dm/main.do") > -1){
		return false;
	}

	if($("html").css("position") != "fixed") {
		var top = $("html").scrollTop() ? $("html").scrollTop() : $("body").scrollTop();
		if(window.innerWidth > $("html").width()) {
			$("html").css("overflow-y", "scroll");
		}
			$("html").css({"width": "100%", "height": "100%", "position": "fixed", "top": -top});
	}
		$("html").css("overflow", "hidden");
		$("body").css("overscroll-behavior-y", "contain");
}

//Unfreeze page content scrolling
HDFUINEW.scroll_unfreeze = function () {
	if($("html").css("position") == "fixed") {
		$("html").css("position", "static");
		$("html, body").scrollTop(-parseInt($("html").css("top")));
		$("html").css({"position": "", "width": "", "height": "", "top": "", "overflow-y": ""});
	}
	$("html").css("overflow", "auto");
	$("body").css("overscroll-behavior-y", "");
}

HDFUINEW.brand_first_position = function () {
	var bottomTopSwiperHeight = $(".bottom_top_swiper").outerHeight();
	$(".bottom_page.main_type").animate({top: bottomTopSwiperHeight  - 60},200);
	$(".bottom_page.brand_type").animate({top:bottomTopSwiperHeight + 20},200);
}

HDFUINEW.prd_list_new_lazy = function () {
	$('.prd_img img').lazyload({
		placeholder : 'https://cdn.hddfs.com/front/images/M_KO/common/noimg.png?RS=252x252',    // 로딩 이미지
		threshold: 0,                 // 접근 ~px 이전에 로딩을 시도한다.
		load : function(){              // 로딩시에 이벤트
			$(this).attr('alt',$(this).attr("data-srcset"));
		}
	});
}

HDFUINEW.hash_lazy = function () {
	$('.toggle_banner .img_hash').lazyload({
		placeholder : 'https://cdn.hddfs.com/front/images/M_KO/common/noimg.png?RS=252x252',    // 로딩 이미지
		threshold: 0,                 // 접근 ~px 이전에 로딩을 시도한다.
		load : function(){              // 로딩시에 이벤트
			$(this).attr('alt',$(this).attr("data-srcset"));
		}
	});
}

HDFUINEW.gnbev_list_lazy = function () {
	$('.gnbev_list .img_ban').lazyload({
		placeholder : 'https://cdn.hddfs.com/front/images/M_KO/common/noimg.png?RS=252x252',    // 로딩 이미지
		threshold: 0,                 // 접근 ~px 이전에 로딩을 시도한다.
		load : function(){              // 로딩시에 이벤트
			$(this).attr('alt',$(this).attr("data-srcset"));
		}
	});
}


$(document).ready(function() {
	
	/* 스와이프 함수작업 */
	HDFUINEW.mainTopSwipeFunction();
	HDFUINEW.roundSwiper01();
	HDFUINEW.roundSwiper02();
	HDFUINEW.specialVisual01();
	HDFUINEW.specialVisual02();
	HDFUINEW.banner_visual01();
	HDFUINEW.banner_visual02();
	HDFUINEW.banner_visual03();
	HDFUINEW.banner_visual_auto();
	HDFUINEW.cardVisual();
	HDFUINEW.brandShopSwiper01();
	HDFUINEW.brandShopSwiper02();
	HDFUINEW.luckySwiper();
	HDFUINEW.mainBottomSwiper01();
	HDFUINEW.mainBnSwiper();
	HDFUINEW.mainPopbannerVertical ();
	HDFUINEW.saleSwiper();
	HDFUINEW.timeSwiper();
	HDFUINEW.mianTimeSwiper();
	HDFUINEW.newprodectSwiper01();
	HDFUINEW.newprodectSwiper02();
	HDFUINEW.cartSwiper1();
	HDFUINEW.HshareSwiper(); //H.Share : 2022-03-25 추가 by pub10

	
	HDFUINEW.layerPopupOpen(); // 레이어 하나라도 열렷을때
	HDFUINEW.fullscreenDimm();
	HDFUINEW.popDimmed();
	HDFUINEW.btnBenefit();
	HDFUINEW.quickDimmed();
	HDFUINEW.quickClose();
	HDFUINEW.btnShowMainPopup();
	HDFUINEW.mainBottomDimmedClick();
	HDFUINEW.filterBottomDimmedClick();
	HDFUINEW.myDetail();
	HDFUINEW.btnSearchEn();
	HDFUINEW.btnSearchKo();
	HDFUINEW.btnBrandAreaClick();
	HDFUINEW.btnCategoryAreaClick();
	HDFUINEW.categoryList2Click();
	HDFUINEW.headerTopMoreClick();
	HDFUINEW.btnOnOffClick();
	HDFUINEW.shBtnTgClick();
	HDFUINEW.appGnbClick();
	HDFUINEW.appSearchClick();
	HDFUINEW.appCartClick();
	HDFUINEW.appPassportClick();
	HDFUINEW.swipeAreaDown();
	HDFUINEW.swipeAreaUp();
	HDFUINEW.cartSwipeArea();
	HDFUINEW.btnMoreToggle();
	HDFUINEW.btnMTg();
	HDFUINEW.tab_listLiClick();
	HDFUINEW.paylistLiDivClick();
	HDFUINEW.categoryList();
	HDFUINEW.passportList();
	HDFUINEW.selectNameClick();
	HDFUINEW.uiClose();
	HDFUINEW.uiCloseHalf();
	HDFUINEW.uiCloseBasic();
	HDFUINEW.uiCloseSecond();
	HDFUINEW.uiCloseThird();
	HDFUINEW.uiCloseFourth();
	HDFUINEW.uiCloseBtm();
	HDFUINEW.anchorTab();
	HDFUINEW.categotySearchFunction();
	HDFUINEW.selectListClick();
	HDFUINEW.btnLikeClick ();
	HDFUINEW.cartBottomPd(); //  주문결제 하단 padding
	HDFUINEW.cartBottomPd2(); //장바구니 하단  padding
    HDFUINEW.squareTooltip(); // square_tooltip
    HDFUINEW.squareTooltip2(); // 주문결제 툴팁
	HDFUINEW.brandProductTab();
	HDFUINEW.btnRoundGroup(); //메인 현대스타일,선택한 해시태그 선택 버튼 
	HDFUINEW.btnEvlikeClick();  //기획전 이벤트 좋아요
	HDFUINEW.selRht(); //select 오른쪽 정렬
	HDFUINEW.prdFixed();; // 공통 상품상단고정
	HDFUINEW.swipeAreaClick();
	HDFUINEW.productScrollAll();
	HDFUINEW.bullLikeArea(); //좋아요1
	HDFUINEW.bullLikeArea2(); //좋아요2 
	HDFUINEW.bullLikeArea3(); //좋아요3 
	HDFUINEW.bFavorites(); //좋아요4
	HDFUINEW.dragArea(); //상품상세 드레그
	HDFUINEW.slideRecommendation(); //추천상품 슬라이드
	HDFUINEW.slideBrandbest();  //브랜드베스트 슬라이드
	HDFUINEW.slideTogether(); // 함께 본 상품 슬라이드
	HDFUINEW.bodyScrollHidden(); //상품상세 body 스크롤 히든
	HDFUINEW.productVisual(); // 제품상세 슬라이더
	HDFUINEW.giftSelection(); //사은품 슬라이드
	HDFUINEW.prdzoomSwiper(); //상세 이미지 슬아이드
	HDFUINEW.proSelectSet(); //상세 장바구니 버튼 모션
	HDFUINEW.cartMotion(); // 장바구니 모션
	HDFUINEW.btnFormRadio(); // 다른결제수단 라디오 내용 삭제
	HDFUINEW.mainTypeTopBtn(); // 메인 팝업 탑버튼
	HDFUINEW.brandTypeTopBtn(); // 브랜드 팝업 탑버튼
	//HDFUINEW.cartTopBtn(); // 장바구니 팝업 탑버튼
	HDFUINEW.proTopBtn(); // 상품상세 팝업 탑버튼 
	HDFUINEW.chipArea01(); // 컬러칩 버튼
	HDFUINEW.chipArea02(); // 컬러칩 버튼
	HDFUINEW.scroll_freeze(); // 스크롤막기
	HDFUINEW.scroll_unfreeze(); // 스크롤풀기
	HDFUINEW.brand_first_position(); // 브랜드 메인 초기 위치값
	
	$(".btnclick01").on("click", function(){
		$(".btnclick_con").hide();
		$(".btnclick_con01").show();
		HDFUINEW.roundSwiper02();
	});
	$(".btnclick02").on("click", function(){
		$(".btnclick_con").hide();
		$(".btnclick_con02").show();
		HDFUINEW.roundSwiper02();
	});

	$("#btn_test_close").on("click", function(){
		$(".fullscreen_basic .ui-close").trigger("click");
	});

});

// Define Constant HDFUI(Hyundai Duty Free User Interface) : 퍼블리싱에서 사용
var HDFUI = HDFUI || {};

/**
 * ----------------------------------------------------------------------------
 * # GNB Navigation Swipe UI
 * ----------------------------------------------------------------------------
 */
HDFUI.gnbSwipe = function () {

	// Menu active && Full Menu toggle && GNB,Full Menu mapping
	function swipeController(gnbSwiper) {
		var $gnbItems    = $('.gnb .gnb_item'),
			$btnFullMenu = $('.btn_fullMenu'),
			$gnbDim      = $('.gnb_dimmed'),
			$fullView    = $('.fullMenu_area'),
			$fullItems   = $fullView.find('.fullMenu_item'),
			$body        = $('body'),
			$footer      = $('.footer');

		$btnFullMenu.on('click', function () {
			var $target = $(this);
			$target.toggleClass('selected');
			toggleController();

			if ($target.hasClass('selected')) {
				$body.on('touchmove', function (e) {
					e.preventDefault();
				});
			} else {
				$body.off('touchmove');
			}

		});

		var $tabItems2 = $('.gnb_swiper .tab_item');
		var config = {
			slidesPerView: 'auto',
			spaceBetween: 0,
			pagination: false,
			wrapperClass: 'gnb',
			slideClass: 'gnb_item',
			setWrapperSize: true
		};

		$tabItems2.on('click', 'a', function (e) {
			var $this = $(this),
				$targetItem = $this.closest('.tab_item'),
				activeIndex = $targetItem.index();
			$tabItems2.removeClass('selected');
			$targetItem.addClass('selected');
			tabSwiper2.slideTo(activeIndex - 1, 400);
		});
		var tabSwiper2 = new Swiper('.gnb_swiper', config);
		
		$gnbItems.on('click', 'a', function (e) {
			var $target = $(this),
				tabIdx  = $target.parent().index();
			$target.parent().addClass('selected').siblings().removeClass('selected');
			tabSwiper2.slideTo(tabIdx, 300);
		});

		$gnbDim.on('click', function () {
			toggleController();
			$btnFullMenu.removeClass('selected');
			$body.off('touchmove');
		});

		function toggleController() {
			$gnbDim.fadeToggle(200);
			$fullView.fadeToggle(250);
			$body.toggleClass('scroll_off_v2');
			$footer.toggleClass('zIndex');
		}

	}

	return {
		swipeController : swipeController
	}
}();

// vertical swiper height
$(document).ready(function(e) {
	$(".main_bottom_swiper02 .visual_item img").each(function() {
		$(this).load(function(){
			var imgHeight = $(this).height();
			$(this).parents(".main_bottom_swiper02").css({"height":(imgHeight)+"px"})
		});
	});

	$(".toggle_banner").each(function() {
		var toggleBannerTitHeight =  $(this).find(".toggle_banner_tit").outerHeight()/2;
		$(this).find(".toggle_banner_tit").css("margin-top", -toggleBannerTitHeight );
	});
});

/**
 * ----------------------------------------------------------------------------
 * # Main Visual Swipe UI
 * ----------------------------------------------------------------------------
 */
HDFUI.mBannerSwipe = function () {

	var config = {
		slidesPerView: 1,
		// autoplay: 3000,
		autoplayDisableOnInteraction: false,
		slideClass: 'visual_item',
		spaceBetween: 0,
		speed: 500, //20200416 modify(add)
		loop: true,
		pagination: '.visual_pagination',
		paginationCurrentClass: 'visual_current',
		paginationTotalClass: 'visual_total',
		paginationType: 'fraction',
		setWrapperSize: true,
    	lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000; //20200416 modify(3000)
				s.startAutoplay();
			}
		}
	};

	return {
		config : config
	}
}();

/**
 * ----------------------------------------------------------------------------
 * # Product Swipe UI(상품 내비게이션 스와이프 및 중첩된 상품 스와이프)
 * ----------------------------------------------------------------------------
 */
HDFUI.productSwipe = function () {

	// 상품 내비게이션(탭)
	var goodsNavConfig = {
		slidesPerView: 'auto',
		wrapperClass: 'nav_goods',
		slideClass: 'goods_item',
		spaceBetween: 0,
		pagination: false,
	};

	if (!!$('#mGoods_nav').length) {
		var goodsNavSwiper = new Swiper('#mGoods_nav', goodsNavConfig);
	}

	var goodsItems = $('.nav_goods > .goods_item'),
		tabLen     = goodsItems.length;

	goodsItems.on('click', 'a', function (e) {
		var $target = $(this),
			tabIdx  = $target.parent().index();
		$target.parent().addClass('active').siblings().removeClass('active');
		swiperGoodsW.slideTo(tabIdx + 1, 300);
		e.preventDefault();
	});

	var goodsContainerConfig = {
		slideClass: 'slide_depth01',
		spaceBetween: 0,
		loop: true,
		pagination: false,
		onSlideChangeStart: function (swiper) {
			var idx = swiper.activeIndex - 1;
			if (idx < 0) {
				idx = tabLen - 1;
			} else if (idx == tabLen) {
				idx = 0;
			}
			$('.nav_goods > li').removeClass('active').eq(idx).addClass('active');
			if (idx < tabLen) {
				goodsNavSwiper.slideTo(idx - 1, 300);
			}
		}
	};

	if (!!$('.goods_container').length) {
		var swiperGoodsW = new Swiper('.goods_container', goodsContainerConfig);
	}

	var goodsHrConfig = {
		pagination: '.goods_paging',
		slideClass: 'slide_depth02',
		bulletClass: 'goods_bullet',
		bulletActiveClass: 'goods_bullet_active',
		paginationClickable: true,
		spaceBetween: 0,
		nested: true,
		onSlideChangeEnd: function (swiper) {
			// var index = swiper.activeIndex;
			// $('img.lazy', '#svcGateArea').lazyload();
		}
	};
	if (!!$('.goodsHr_container').length) {
		new Swiper('.goodsHr_container', goodsHrConfig);
	}

};

$(window).on('load', function () {
	if ($('.gnb_swiper').length > 0) {
		HDFUI.gnbSwipe.swipeController();
	}

	if (!!$('#mGoods_nav').length) {
		HDFUI.productSwipe();
	}
	
});

/**
 * ----------------------------------------------------------------------------
 * # Sticky Header UI
 * ----------------------------------------------------------------------------
 */
HDFUI.stickyHeader = function () {

	var $mHeader    = $('#m_header'),
		$mHeader2    = $('.header'),
		$nav        = $('.nav_main'),
		$flotingBtn = $('.go_top, .btn_quick'),
		$headerTop  = $('.header_top'),
		prevTop     = 0;
	if($nav.length > 0){
		var $navOffset  = $nav.position().top
	}

	$(window).on('scroll', function () {

		var nowTop = $(window).scrollTop();
		// 2020-04-01 모바일 메인화면 상단영역 개선 - 스크롤값 변경
		if (!!$mHeader.length) {
			if (nowTop > 52){
				$mHeader.addClass('isBg');
				$flotingBtn.css({'display': 'block'});
			}
			else $mHeader.removeClass('isBg');
		}

		// 20231207 검색 결과에도 top 노출하기 위해 주석 처리
		// if (!!$mHeader2.length) {
			if (nowTop > 52){
				$flotingBtn.css({'display': 'block'});
			}
			else {
				$flotingBtn.css({'display': 'none'});
			}
		// }

		/*
		if (nowTop > $navOffset) {
			$flotingBtn.css({'display': 'block'});
			if (nowTop > prevTop) $headerTop.addClass('off');
			else $headerTop.removeClass('off');
		} else {
			$flotingBtn.css({'display': 'none'});
		}
		*/
		/*
		if (nowTop > searcTop ) {
			$flotingBtn.css({'display': 'block'});
		} else {
			$flotingBtn.css({'display': 'none'});
		}
		*/
		if (!nowTop) {
			$mHeader.removeClass('isBg');
			$headerTop.removeClass('off');
		}

		prevTop = nowTop;
	});
};

/**
 * ----------------------------------------------------------------------------
 * # Search result Page Bottom floating
 * ----------------------------------------------------------------------------
 * 2019-05-21 pub09 Sticky Header UI 
 */
HDFUI.searchFloating = function () {
	var $sHeader	= $('#searchHeader, #result01'),
		$headerOffset  = 91,
		$flotingBtn = $('.go_top, .btn_quick'),
		prevTop = 0;

	$(window).on('scroll', function () {

		var nowTop = $(window).scrollTop();
		if (!!$sHeader.length) {
			if (nowTop > 0) $sHeader.addClass('flexible');
			else $sHeader.removeClass('flexible');
		}

		if (nowTop > $headerOffset) {
			$flotingBtn.css({'display': 'block'});
			if (nowTop > prevTop) $sHeader.addClass('off');
			else $sHeader.removeClass('off');
		} else {
			$flotingBtn.css({'display': 'none'});
		}
		if (!nowTop) {
			$sHeader.removeClass('flexible');
			$sHeader.removeClass('off');
		}
		prevTop = nowTop;
	});
};

/**
 * ----------------------------------------------------------------------------
 * # Util Action Bar UI(bottom sliding)
 * ----------------------------------------------------------------------------
 */
HDFUI.utilityBar = function () {
	var didScroll,
		prevTop  = 0,
		$utilBar = $('.util_bar');

	$(window).on('touchend scroll', function (e) {
		didScroll = true;
	});
	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 800);
	//$(".go_top").hide(); ← [pub]22-02-23 추가 - 이전 내역 주석
	
	// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 Start
	var navPosT = $(window).scrollTop(),
		navPosY = 133;
	if (navPosT > navPosY) {
		$(".go_top").css('display', 'block');
		if ($('body').find('.btn_cos_face.type-utilbar').length) {
			$('.btn_cos_face.type-utilbar').addClass('has_go_top').css('bottom', '139px');
		};
	}else{
		$(".go_top").hide();
	};
	// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 End
	
	function hasScrolled() {
		var crrTop    = $(this).scrollTop();
		if(crrTop < 10){
			if($('.util_bar').hasClass("appUtilbar")){
				$utilBar.prev(".quick_area").find(".go_top").animate({"margin-top":"0"},200);
				
				// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 Start
				if ($('body').find('.btn_cos_face.type-utilbar').length) {
					if ($('body').find('.go_top').css('display') == "none") {
						$('.btn_cos_face.type-utilbar').animate({ "bottom": "76px" }, 200);
					}
					else {
						$('.btn_cos_face.type-utilbar').animate({ "bottom": "139px" }, 200);
					};
				};
				// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 End

				// [pub10] 2022-08-09 랑콤 리뉴얼: 추가 Start
				if ($('body').find('.lancome_plp_content_part .scroll_bar_selecter_inner').length) {
					$('.lancome_plp_content_part .scroll_bar_selecter_inner').addClass('select_up');
				};
				// [pub10] 2022-08-09 랑콤 리뉴얼: 추가 End
				
			}else{
				$utilBar.addClass('util_up').prev(".quick_area").find(".go_top").animate({"margin-top":"0"},200);
				
				// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 Start
				if ($('body').find('.btn_cos_face.type-utilbar').length) {
					if ($('body').find('.go_top').css('display') == "none") {
						$('.btn_cos_face.type-utilbar').animate({ "bottom": "76px" }, 200);
					}
					else {
						$('.btn_cos_face.type-utilbar').animate({ "bottom": "139px" }, 200);
					};
				};
				// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 End

				// [pub10] 2022-08-09 랑콤 리뉴얼: 추가 Start
				if ($('body').find('.lancome_plp_content_part .scroll_bar_selecter_inner').length) {
					$('.lancome_plp_content_part .scroll_bar_selecter_inner').addClass('select_up');
				};
				// [pub10] 2022-08-09 랑콤 리뉴얼: 추가 End
				
			}
		}else{
			var scrollEnd = parseInt($(document).actual('outerHeight')) - parseInt($(window).height() || screen.height);
			if (scrollEnd < crrTop) return;
			/*if (crrTop > prevTop) $utilBar.removeClass('util_up').addClass('util_down');
			else $utilBar.removeClass('util_down').addClass('util_up');*/
			if (crrTop > prevTop){
				if(!$('.util_bar').hasClass("appUtilbar")){
					$utilBar.removeClass('util_up').prev(".quick_area").find(".go_top").css("margin-top","0");
					
					// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 Start
					if ($('body').find('.btn_cos_face.type-utilbar').length) {
						if ($('body').find('.go_top').css('display') == "none"){
							//$('.btn_cos_face.type-utilbar').animate({ "bottom": "55px" }, 200);
						}
						else{
							//$('.btn_cos_face.type-utilbar').animate({ "bottom": "84px" }, 200);
						};
					};
					// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 End

					// [pub10] 2022-08-09 랑콤 리뉴얼: 추가 Start
					if ($('body').find('.lancome_plp_content_part .scroll_bar_selecter_inner').length) {
						$('.lancome_plp_content_part .scroll_bar_selecter_inner').removeClass('select_up');
					};
					// [pub10] 2022-08-09 랑콤 리뉴얼: 추가 End
					
				}
			}else{
				if($('.util_bar').hasClass("appUtilbar")){
					$utilBar.prev(".quick_area").find(".go_top").animate({"margin-top":"0"},200);
					
					// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 Start
					if ($('body').find('.btn_cos_face.type-utilbar').length) {
						if ($('body').find('.go_top').css('display') == "none") {
							$('.btn_cos_face.type-utilbar').animate({ "bottom": "76px" }, 200);
						}
						else {
							$('.btn_cos_face.type-utilbar').animate({ "bottom": "139px" }, 200);
						};
					};
					// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 End

					// [pub10] 2022-08-09 랑콤 리뉴얼: 추가 Start
					if ($('body').find('.lancome_plp_content_part .scroll_bar_selecter_inner').length) {
						$('.lancome_plp_content_part .scroll_bar_selecter_inner').addClass('select_up');
					};
					// [pub10] 2022-08-09 랑콤 리뉴얼: 추가 End
					
				}else{
					$utilBar.addClass('util_up').prev(".quick_area").find(".go_top").animate({"margin-top":"0"},200);
					
					// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 Start
					if ($('body').find('.btn_cos_face.type-utilbar').length) {
						if ($('body').find('.go_top').css('display') == "none") {
							$('.btn_cos_face.type-utilbar').animate({ "bottom": "76px" }, 200);
						}
						else {
							$('.btn_cos_face.type-utilbar').animate({ "bottom": "139px" }, 200);
						};
					};
					// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 End

					// [pub10] 2022-08-09 랑콤 리뉴얼: 추가 Start
					if ($('body').find('.lancome_plp_content_part .scroll_bar_selecter_inner').length) {
						$('.lancome_plp_content_part .scroll_bar_selecter_inner').addClass('select_up');
					};
					// [pub10] 2022-08-09 랑콤 리뉴얼: 추가 End
					
				}
			}
		}
		prevTop = crrTop;
	}

};

/**
 * ----------------------------------------------------------------------------
 * # Quick Menu UI (=floating Menu) && Go to top
 * ----------------------------------------------------------------------------
 */
HDFUI.quickMenu = function () {

	var detect = {
		$body: $('body'),
		$btnQuick: $('.btn_quick'),
		$quickMenu: $('.quick_menu'),
		$dimmed: $('.util_dimmed'),
		$moveTop: $('.go_top'),
	};

	detect.$btnQuick.on('click', function () {
		var $target = $(this);
		if (!$target.hasClass('active')) {
			detect.$body.on('touchmove', function (evt) {
				evt.preventDefault();
			});
		} else detect.$body.off('touchmove');
		toggleController();
	});

	detect.$dimmed.on('toucumove click', function (e) {
		if (e.type == 'touchmove') detect.$body.off('touchmove');
		else {
			detect.$body.off('touchmove');
			toggleController();
		}
	});

	function toggleController() {
		if (detect.$dimmed.is(':animated')) return;
		detect.$quickMenu.toggleClass('showing');
		detect.$body.toggleClass('scroll_off_v2');
		detect.$btnQuick.toggleClass('active');
		$(detect.$dimmed).fadeToggle(250);
		if (detect.$moveTop.is(':visible')) detect.$moveTop.css({'display': 'none'});
		else detect.$moveTop.css({'display': 'block'});
	}

	detect.$moveTop.on('click', function () {
		$('html, body').animate({scrollTop: 0}, 200);
	});
};

/**
 * -----------------------------------------------------------------------
 * # Search Field clear UI
 * -----------------------------------------------------------------------
 */
HDFUI.searchClear = function () {

	var sc;

	function SearchClear() {

		if (!(this instanceof SearchClear)) {
			return new SearchClear();
		}

		sc         = this;
		sc.$schBox = $('#schBox');
		if (!sc.$schBox.length) return;
		sc.initialize();
	}

	SearchClear.prototype.initialize = function () {
		sc.$schField = sc.$schBox.find('[data-search-ui="field"]');
		sc.$btnClear = sc.$schBox.find('[data-search-ui="clear"]');
		sc.$btnbox   = sc.$schBox.find('.s_btn');
		sc.strSize   = null;
		sc.addEvent();
	};

	SearchClear.prototype.addEvent = function () {
		sc.$schField.on('keyup', sc.changeUi);
		sc.$btnClear.on('click', sc.clearField);
	};

	SearchClear.prototype.changeUi = function () {
		var $target = $(this);
		sc.strSize  = $target.val().trim().length;
		sc.$btnbox.addClass('focusIn');
		if (!sc.strSize)  sc.$btnbox.removeClass('focusIn');
	};

	SearchClear.prototype.clearField = function () {
		if (!!sc.strSize) {
			sc.$schField.val('').focus();
			sc.$btnbox.removeClass('focusIn');
		}
	};

	return SearchClear;
}();

/**
 * ----------------------------------------------------------------------------
 * # Search Swipe UI
 * ----------------------------------------------------------------------------
 */

HDFUI.schSwipe = function () {

	if (!$('#searchTotal').length) return;

	var config = {
			slidesPerView: 1,
			autoplay: false,
			slideClass: 'search-slide',
			spaceBetween: 0,
			loop: false,
			//setWrapperSize: true,
			onSlideChangeStart: function (swiper) {

				var swiperIndex = swiper.activeIndex;

				$schTabItems.removeClass('active')
					.eq(swiperIndex).addClass('active')
					.find('button').focus();

			}
		},
		$schTabItems = $('.sch_tab li');

	$schTabItems.on('click', 'button', function (e) {

		var $target     = $(this),
			$targetItem = $target.closest('li'),
			activeIndex = $targetItem.index();

		$schTabItems.removeClass('active');
		$targetItem.addClass('active');
		searchSwiper.slideTo(activeIndex, 250);
		e.preventDefault();
	});
	var searchSwiper = new Swiper('#searchTotal', config);
};

/**
 * ----------------------------------------------------------------------------
 * # Filter UI
 * ----------------------------------------------------------------------------
 */
HDFUI.filter = function () {

	var ft;

	function Filter() {
		ft          = this;
		ft.$btnOpen = $('[data-filter="open"]');
		if (!ft.$btnOpen.length) return;
		ft.initialize();
	}

	Filter.prototype.initialize = function () {
		ft.$body      = $('body');
		ft.$schView   = $('.detail_search');
		ft.$btnClose  = ft.$schView.find('[data-filter="close"]');
		ft.$schDimmed = $('.search_dimmed');
		ft.scrollTo   = null;
		this.scrollPosition;
		ft.addEvent();
	};

	Filter.prototype.addEvent = function () {
		ft.$btnOpen.on('click', ft.filterOpen.bind(this));
		ft.$btnClose.on('click', ft.filterClose.bind(this));
		ft.$schDimmed.on('click', ft.triggerHandler);
	};

	Filter.prototype.filterOpen = function () {
		if(typeof(appGnbDisplay) == "function"){
			appGnbDisplay(false);
		}
		this.scrollPosition = $(window).scrollTop();
		ft.$schDimmed.fadeIn(100);
		ft.$schView.addClass('is_actived');
		ft.$body.css({'top': -this.scrollPosition, position: 'fixed'});
	};

	Filter.prototype.filterClose = function () {
		if(typeof(appGnbDisplay) == "function"){
			appGnbDisplay(true);
		}
		ft.$body.removeAttr('style');
		$(document).scrollTop(this.scrollPosition);
		ft.$schView.removeClass('is_actived');
		ft.$schDimmed.fadeOut(300);
	};

	Filter.prototype.triggerHandler = function () {
		ft.$btnClose.trigger('click');
	};

	return Filter;
}();

/**
 * ----------------------------------------------------------------------------
 * # Side Menu UI
 * ----------------------------------------------------------------------------
 */
HDFUI.sideMenu = function () {

	var sm;

	function SideMenu() {
		sm = this;
		sm.initialize();
	}

	SideMenu.prototype.initialize = function () {
		sm.$body        = $('body');
		sm.$btnSide     = $('.btn_category');
		sm.$sideMenu    = $('#sideMenu');
		sm.$sideDim     = $('.sideMenu_dimmed');
		sm.$btnClose    = $('[data-side="close"]');
		sm.$btnFullMenu = $('.btn_fullMenu');
		sm.$fullView    = $('.fullMenu_area');
		sm.$gnbDim      = $('.gnb_dimmed');
		sm.$footer      = $('.footer');
		sm.scrollTo     = null;

		sm.addEvent();
	};

	SideMenu.prototype.addEvent = function () {
		sm.$btnSide.on('click', sm.openSide);
		sm.$btnClose.on('click', sm.closeSide);
		// 사이드 메뉴가 all cover 가 아닐 경우에 사용
		// sm.$sideDim.on('click', sm.closeSide)
	};

	SideMenu.prototype.openSide = function () {
		if(typeof(appGnbDisplay) == "function"){
			appGnbDisplay(false);
		}
		sm.isActiveMenu();
		sm.scrollTo = $(document).scrollTop();
		sm.$sideDim.fadeIn(100);
		sm.$sideMenu.addClass('on');
		sm.$body.addClass('scroll_off');
	};

	SideMenu.prototype.closeSide = function (e) {
		if(typeof(appGnbDisplay) == "function"){
			appGnbDisplay(true);
		}
		sm.$body.removeClass('scroll_off');
		window.scrollTo(0, sm.scrollTo);
		sm.$sideMenu.removeClass('on');
		sm.$sideDim.fadeOut(400);
	};

	SideMenu.prototype.isActiveMenu = function () {
		if (sm.$btnFullMenu.hasClass('selected')) {
			sm.$btnFullMenu.trigger('click');
		}
	};

	return SideMenu;
}();

/**
 * ----------------------------------------------------------------------------
 * # Side Menu scrollTo
 * ----------------------------------------------------------------------------
 */
HDFUI.sideScrollTo = function () {

	function SideScrollTo(selector) {
		this.$selector = $(selector);
		this._initialize();
	}

	SideScrollTo.prototype = {
		_initialize : function () {

			this.$sortNav   = this.$selector.find('.sort_depth01');
			this.$sortMenu  = this.$sortNav.find('li');
			this.$contents  = this.$selector.find('.sort_depth02');
			this.$sortLists = this.$contents.find('.sort_list02');
			this.menuHeight = this.$sortMenu.outerHeight();
			this.sortIndex    = 0;
			this.scrollValue  = 0;
			this.scrollingTop = 0;
			this.originalTop  = 0;

			this.topValues = [];
			var self       = this;
			this.$sortLists.each(function () {
				var $this = $(this);
				self.topValues.push($this.position().top + self.scrollingTop);
			});

			this._runEvent();
		},
		_runEvent : function () {
			this._onClick();
			// this._onScroll();
		},
		_onClick : function () {
			var self = this;
			this.$sortMenu.on('click', 'button', function () {
				var $target = $(this);
				self.sortIndex    = $target.closest('li').index();
				self.originalTop  = self.$sortLists.eq(self.sortIndex).position().top;
				self.scrollingTop = self.$contents.scrollTop();

				if (!self.$contents.is(':animated')) {
					self.$contents.animate({
						scrollTop: self.originalTop + self.scrollingTop
					});
				}
				self._leftSetup();
				return false;
			});
		},
		_leftSetup : function () {
			this.$sortMenu.removeClass('on').eq(this.sortIndex).addClass('on');
			if (!this.$sortNav.is(':animated')) {
				this.$sortNav.animate({scrollTop: (this.sortIndex -2) * this.menuHeight});
			}
		},
		_onScroll : function () {
			var self = this;
			this.$contents.on('scroll', function () {
				var $this = $(this);
				// 스크롤 다운인 경우
				if (self.scrollValue < $this.scrollTop()) {
					// 스크롤중인 값을 저장
					self.scrollValue = $this.scrollTop();
					if (self.scrollValue > self.topValues[self.sortIndex+1]) {
						self.sortIndex++;
						self._leftSetup();
					}
				}
				// 스크롤 업인 경우
				else {
					self.scrollValue = $this.scrollTop();
					if (self.scrollValue < (self.topValues[self.sortIndex] - 120)) {
						self.sortIndex--;
						self._leftSetup();
					}
				}
			})
		}
	};

	return SideScrollTo;
}();
/**
 * ----------------------------------------------------------------------------
 * # Side Tab Menu
 * ----------------------------------------------------------------------------
 */
HDFUI.sideTab = function () {

	function SideTab(selector) {
		if (!(this instanceof SideTab)) {
			return new SideTab();
		}
		this.$selector = $(selector);
		this.dataValue = selector.substring(1, selector.length);
		this._initialize();
	}

	SideTab.prototype = {
		_initialize : function () {
			this.$tabContents = $('[data-tabcont="' + this.dataValue + '"]');
			this.$tabItems = this.$selector.find('li');
			this.$tabContents.eq(0).show();

			this._addEvent();
		},
		_addEvent : function () {
			this.$tabItems.on('click', 'a', this._setUp.bind(this));
		},
		_setUp : function (e) {
			var $targetItem = $(e.target).closest('li');
			this.contsIndex = $targetItem.index();

			$targetItem.addClass('selected').siblings().removeClass('selected');

			this._contShow();
		},
		_contShow : function () {
			this.$tabContents.hide().eq(this.contsIndex).show();
		}
	};

	return SideTab;
}();

/**
 * ----------------------------------------------------------------------------
 * # Accodian Menu in Side Menu
 * ----------------------------------------------------------------------------
 */
HDFUI.sideAccodian = function (speed) {

	var $accWrap    = $('.category_acc'),
		$allDepth   = $accWrap.find('>li'),
		$secondStep = $accWrap.find('.depth02'),
		speed       = speed || 300;

	$secondStep.each(function () {
		var $this = $(this);
		if (findChild($this)) return;
		$this.addClass('no_depth');
	});

	function findChild(node) {
		return node.find('> ul').length > 0;
	}

	$allDepth.on('click', '> a', controller);

	function controller(e) {
		var $target      = $(e.target),
			$targetItem  = $target.closest('li'),
			$targetChild = $target.next(),
			$siblings    = $targetItem.siblings();

		if($targetItem.is('.no_depth')) return;
		if ($targetItem.is('.depth01')) {
			$allDepth.removeClass('active');
		}

		$siblings.removeClass('active');
		$siblings.find('.depth02_area').slideUp(speed);

		$targetChild.is(':hidden') ?
			open($targetItem, $targetChild) : close($targetItem, $targetChild);
		e.stopPropagation();
	}

	function open(item, child) {
		item.addClass('active');
		child.slideDown(speed);

	}

	function close(item, child) {
		item.removeClass('active');
		child.slideUp(speed);
	}
};
/**
 * ----------------------------------------------------------------------------
 * # 퀵메뉴 없는 곳의 탑 버튼
 * ----------------------------------------------------------------------------
 */
HDFUI.moveTop = function () {

	function GoTop() {
		if (!(this instanceof GoTop)) {
			return new GoTop();
		}
		if (!$('.detail_dockbar').length) return;
		this.initialize();
	}

	GoTop.prototype = {
		initialize : function () {
			this.$btnTop = $('.detail_dockbar .go_top');
			this.defaultTop = 50;
			this.addEvent();
		},
		addEvent : function () {
			$(window).on('scroll', this.scrolling.bind(this));
			this.$btnTop.on('click', this.moving)
		},
		scrolling : function (e) {
			var scrollValue = $(e.target).scrollTop();
			if (this.defaultTop < scrollValue) {
				this.$btnTop.show();
			} else {
				this.$btnTop.hide();
			}
		},
		moving : function (e) {
			$('html, body').animate({
				scrollTop : 0
			}, 200);
			e.preventDefault();
		}
	};
	return GoTop;
}();

HDFUI.moveTopFixed = function () {

	function GoTopFixed() {
		if (!(this instanceof GoTopFixed)) {
			return new GoTopFixed();
		}
		this.initialize();
	}

	GoTopFixed.prototype = {
		initialize : function () {
			this.$btnTop2 = $('.go_top.fixed');
			this.defaultTop2 = 50;
			this.addEvent();
		},
		addEvent : function () {
			$(window).on('scroll', this.scrolling.bind(this));
			this.$btnTop2.on('click', this.moving)
		},
		scrolling : function (e) {
			var scrollValue2 = $(e.target).scrollTop();
			if (this.defaultTop2 < scrollValue2) {
				this.$btnTop2.show();
			} else {
				this.$btnTop2.hide();
			}
		},
		moving : function (e) {
			$('html, body').animate({
				scrollTop : 0
			}, 200);
			e.preventDefault();
		}
	};
	return GoTopFixed;
}();

/**
 * ----------------------------------------------------------------------------
 * # App_type Page Bottom floating
 * ----------------------------------------------------------------------------
 */
HDFUI.appFloating = function () {
	var appTop = $('.contents_area').position().top,
		$flotingBtn2 = $('.go_top, .btn_quick'),
		prevTop = 0;

	$(window).on('scroll', function () {

		var nowTop = $(window).scrollTop();

		if (nowTop > appTop ) {
			$flotingBtn2.css({'display': 'block'});
		} else {
			$flotingBtn2.css({'display': 'none'});
		}

		prevTop = nowTop;
	});
};

/**
 * ----------------------------------------------------------------------------
 * # Footer Address Toggle
 * ----------------------------------------------------------------------------
 */
HDFUI.address = function () {

	function AddressToggle() {
		if (!(this instanceof AddressToggle)) {
			return new AddressToggle();
		}
		if (!$('.footer').length) return;
		this._initialize();
	}

	AddressToggle.prototype = {
		_initialize: function () {
			this.$selector   = $('.address');
			this.$btnAddress = this.$selector.find('[data-address="button"]');
			this.$data = this.$selector.find('dd');

			this._addEvent();
		},
		_addEvent : function () {
			this.$btnAddress.on('click', this._controller.bind(this));
		},
		_controller : function (e) {
			var $self = $(e.target);
			!$self.is('.opened') ? this._open($self) : this._close($self);
		},
		_open : function ($self) {
			$self.addClass('opened');
			this.$data.slideDown(200);
		},
		_close : function ($self) {
			$self.removeClass('opened');
			this.$data.slideUp(200);
		}
	};

	return AddressToggle;
}();

/**
 * ----------------------------------------------------------------------------
 * # Footer Family Toggle
 * ----------------------------------------------------------------------------
 */
HDFUI.family = function () {

	function FamilyToggle() {
		if (!(this instanceof FamilyToggle)) {
			return new FamilyToggle();
		}
		if (!$('.footer').length) return;
		this._initialize();
	}

	FamilyToggle.prototype = {
		_initialize: function () {
			this.$selector   = $('.family-site-wrap');
			this.$btnFamily = this.$selector.find('[data-family="button"]');
			this.$data = $('.family-site');

			this._addEvent();
		},
		_addEvent : function () {
			this.$btnFamily.on('click', this._controller.bind(this));
		},
		_controller : function (e) {
			var $self = $(e.target);
			!$self.is('.opened') ? this._open($self) : this._close($self);
		},
		_open : function ($self) {
			$self.addClass('opened');
			this.$data.slideDown(200);
		},
		_close : function ($self) {
			$self.removeClass('opened');
			this.$data.slideUp(200);
		}
	};

	return FamilyToggle;
}();

/**
 * ----------------------------------------------------------------------------
 * # document ready init
 * ----------------------------------------------------------------------------
 */
$(function () {
	// 2018-10-16 pub09 메인 배너 1번슬라이드 제외 순서 섞기(랜덤)
	function banner_shuffle() {
		var bigBanners = $('#main_visual .swiper-wrapper > li:not(:first-child)');
		var bigParents = $('#main_visual .swiper-wrapper');
		for(i=0;i<bigBanners.length;i++){
			var randNum = Math.floor(Math.random() * bigBanners.length);
			var bItem = bigBanners[randNum];
			bigParents.append(bItem);
		}
	}
	banner_shuffle();

	// 메인 비주얼 슬라이더
	if (!!$('#main_visual').length ) {
		if ($('.visual_item').length == 1){
			HDFUI.mBannerSwipe.config.autoplay = false;
			HDFUI.mBannerSwipe.config.loop = false;
			HDFUI.mBannerSwipe.config.autoplayDisableOnInteraction = false;
		}
		var mainVisualSwiper = Swiper('#main_visual', HDFUI.mBannerSwipe.config);
	}

	var $quickMenu = $('.quick_menu');
	// 20231207 검색 결과에도 top 노출하기 위해 주석 처리
	// if (!!$('.header').length) HDFUI.stickyHeader();
	HDFUI.stickyHeader();
	if (!!$('.search_header').length) HDFUI.searchFloating();
	if (!!$('.app_type').length) HDFUI.appFloating();
	if (!!$quickMenu.length) {
		HDFUI.utilityBar();
		HDFUI.quickMenu();
	}

	// Side Menu UI
	if (!!$('#sideMenu').length) {
		// Side Menu Open
		var SMO = HDFUI.sideMenu;
		new SMO();
		// SideScrollTo
		var SST = HDFUI.sideScrollTo;
		var scrollTo01 = new SST('#scrollTo01');
		var scrollTo02 = new SST('#scrollTo02');
		// Side Tab Menu
		var STM = HDFUI.sideTab;
		var st01 = new STM('#tab01');
		var st02 = new STM('#tab02');
		HDFUI.sideAccodian();
	}

	// search clear
	var SC = HDFUI.searchClear;
	new SC();

	// Search Swipe
	HDFUI.schSwipe();

	// Filter
	var FT = HDFUI.filter;
	new FT();

	// Alone Go to Top
	var GT = HDFUI.moveTop;
	new GT();

	var GTFixed = HDFUI.moveTopFixed;
	if (!!$('.go_top.fixed').length) new GTFixed();

	// Address Toggle
	var AT = HDFUI.address;
	new AT();


	// Family Toggle
	var FamT = HDFUI.family;
	new FamT();
	

	//리사이징 폰트
	function measureText(pText, pFontSize) {
		
		var resizeFont = document.createElement('p');
	
		document.body.appendChild(resizeFont);
		
		resizeFont.style.fontSize = "" + pFontSize + "px";
		resizeFont.style.position = "absolute";
		resizeFont.style.left = -1000;
		resizeFont.style.top = -1000;
		
		resizeFont.innerHTML = pText;
	
		var lResult = {
			width: resizeFont.clientWidth,
			height: resizeFont.clientHeight
		};
	
		document.body.removeChild(resizeFont);
		resizeFont = null;
	
		return lResult;
	}
	function fitText(el){
		/* 2018-12-05 pub09
		var text = el.text();
		var fsize = parseFloat(el.css('font-size'));
		
		var measured = measureText(text, fsize);
		
		if (measured.width > el.width()){
		
		while(true){
			fsize = parseFloat(el.css('font-size'));
			var m = measureText(text, fsize);
			if(m.width > el.width()){
			el.css('font-size', fsize-0.5 + 'px');
			}
			else{
			break;
			}
		}
		}
		*/
		var text = el.text();
        var currentFsize = parseFloat(el.css('font-size'));
		var fsize = currentFsize || 64;
		var measured = measureText(text, fsize);
		
		if (measured.width > el.width()){
			while(true && fsize >= 6){
				var m = measureText(text, fsize);
				if(m.width > el.width()){
					fsize -= 2; //2023-05-10 수정 : 이전값 0.5
					el.attr('style','font-size: '+ fsize + 'px !important');
				}
				else{
					break;
				}
			}
		}
	}
	
	function FitAll(){
		$('.resize').each(function(index, el){
			fitText($(el));
		})
	}
	
	FitAll();
	
	//2019-01-24 H Style 슬라이드 스크립트
	var hstorySwiperSetCon = {
		slideClass: 'hstyle_slide_con_item',
		//pagination: '#hstyle_slide_con_wrap .swiper_paging',
		pagination: {
			el: '#hstyle_slide_con_wrap .swiper_paging',
			type: 'bullets',
		},
		loop: $('.hstyle_slide_con_item').length > 1 ? true : false,
		//nextButton: '.swiper-button-next',
		//prevButton: '.swiper-button-prev',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		onInit: function(swiper) {
			if(swiper.slides.length == 1) {
				$('#hstyle_slide_con_wrap .swiper_paging').remove();
				$('#hstyle_slide_con_wrap .swiper-button-prev').remove();
				$('#hstyle_slide_con_wrap .swiper-button-next').remove();
			}
		},
	};
	var hstorySwiper = new Swiper('#hstyle_slide_con_wrap', hstorySwiperSetCon);

	$('.prd_list_new .checkbox input:checkbox').click(function(){
		var checked = $(this).is(':checked');
		
		if(checked){
			$(this).parent().parent().parent("li").addClass("on");
		}else{
			$(this).parent().parent().parent("li").removeClass("on");
		}
	});

	// 쿠폰 비주얼 슬라이더
	var couponSwiperSetCon = {
		slidesPerView: 1,
		// autoplay: 3000,
		autoplayDisableOnInteraction: false,
		slideClass: 'visual_item',
		spaceBetween: 0,
		speed: 500, //20200416 modify(add)
		loop: true,
		pagination: {
			el: '.visual_pagination',
			type: 'custom',
			renderCustom: function (couponSwiper, current, total) {
				var customPaginationHtml = "";
				for(var i = 0; i < total; i++) {
					//Determine which pager should be activated at this time
					if(i == (current - 1)) {
						customPaginationHtml += '<span class="visual-pagination-customs visual-pagination-customs-active"></span>';
					}else{
						customPaginationHtml += '<span class="visual-pagination-customs"></span>';
					}
				}
				if(total < 10){
					total = "0" + total
				}
				if(current < 10){
					current = "0" + current
				}
				var fraction =  current + '<span class="space">/</span>'  + '<span class="num_total">'+total+'</span>'; // 마크업과 스타일 수정하세요.
				return  fraction;
			}
		},
		setWrapperSize: true,
		lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000; //20200416 modify(3000)
				s.startAutoplay();
			}
		},
	};
	var couponSwiper = new Swiper('.coupon_visual', couponSwiperSetCon);
	

	/* //2021-03-03 main_all page
	var mainAllSwiperSetCon = {
		slidesPerView: 1,
		spaceBetween: 0,
		slideClass: 'swiper-slide',
		speed: 500,
		loop: true,
		setWrapperSize: true,
		navigation: {   // 버튼 사용자 지정
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
    	lazyLoadingInPrevNext: true,
		lazyLoading: true,
		onLazyImageReady: function (s) {
			if (!s.params.autoplay) {
				s.params.autoplay = 4000;
				s.startAutoplay();
			}
		},
	};
	var mainAllSwiper = new Swiper('#main-swiper', mainAllSwiperSetCon);
	*/
	
	// tab/filteringmenu swiper

	/*
	
	var config77 = {
		slidesPerView: 'auto',
		spaceBetween: 0,
		pagination: false,
		wrapperClass: 'section_tab',
		slideClass: 'tab_item',
		setWrapperSize: true,
		observer: true,
		observeParents: true,

	};
	var $tabItems = $('#category_tab');
	var tabSwiper = new Swiper('#category_tab', config77);
	$tabItems.on('click', 'a', function (e) {
		var $this = $(this),
			$targetItem = $this.closest('.tab_item'),
			ctActiveIndex = $targetItem.index();
		$tabItems.removeClass('is_selected');
		$targetItem.addClass('is_selected');
		tabSwiper.slideTo(ctActiveIndex - 1, 400);
	});

	var config2 = {
		slidesPerView: 'auto',
		spaceBetween: 0,
		pagination: false,
		wrapperClass: 'section_tab',
		slideClass: 'tab_item',
		setWrapperSize: true,

	};
	var $tabItems2 = $('#nav_tab2 .tab_item');
	var tabSwiper2 = new Swiper('#nav_tab2', config2);
	$tabItems2.on('click', 'a', function (e) {
		var $this = $(this),
			$targetItem2 = $this.closest('.tab_item'),
			activeIndex2 = $targetItem2.index();
		$tabItems2.removeClass('is_selected');
		$targetItem2.addClass('is_selected');
		tabSwiper2.slideTo(activeIndex2 - 1, 400);
	});

	var config3 = {
		slidesPerView: 'auto',
		spaceBetween: 0,
		pagination: false,
		wrapperClass: 'section_tab',
		slideClass: 'tab_item',
		setWrapperSize: true,

	};
	var $tabItems3 = $('#nav_tab3 .tab_item');
	var tabSwiper3 = new Swiper('#nav_tab3', config3);
	$tabItems3.on('click', 'a', function (e) {
		var $this = $(this),
			$targetItem3 = $this.closest('.tab_item'),
			activeIndex3 = $targetItem3.index();
		$tabItems3.removeClass('is_selected');
		$targetItem3.addClass('is_selected');
		tabSwiper3.slideTo(activeIndex3 - 1, 400);
	});
	
	
	var config5 = {
		slidesPerView: 'auto',
		spaceBetween: 0,
		pagination: false,
		wrapperClass: 'section_tab',
		slideClass: 'tab_item',
		setWrapperSize: true,

	};
	var $tabItems5 = $('#nav_tab5 .tab_item');
	var tabSwiper5 = new Swiper('#nav_tab5', config5);
	$tabItems5.on('click', 'a', function (e) {
		var $this = $(this),
			$targetItem5 = $this.closest('.tab_item'),
			activeIndex5 = $targetItem5.index();
		$tabItems5.removeClass('is_selected');
		$targetItem5.addClass('is_selected');
		tabSwiper5.slideTo(activeIndex5 - 1, 400);
	});

	var config7 = {
		slidesPerView: 'auto',
		spaceBetween: 0,
		pagination: false,
		wrapperClass: 'section_tab',
		slideClass: 'tab_item',
		setWrapperSize: true,

	};

	var $tabItems7 = $('#nav_tab7 .tab_item');
	var tabSwiper7 = new Swiper('#nav_tab7', config7);
	$tabItems7.on('click', 'a', function (e) {
		var $this = $(this),
			$targetItem7 = $this.closest('.tab_item'),
			activeIndex7 = $targetItem7.index();
		$tabItems7.removeClass('is_selected');
		$targetItem7.addClass('is_selected');
		tabSwiper7.slideTo(activeIndex7 - 1, 400);
	});

	//결제정보탭
	var config6 = {
		slidesPerView: 3,
		spaceBetween: 0,
		pagination: false,
		wrapperClass: 'tab_list',
		slideClass: 'tab_item',
		setWrapperSize: true,
	};
	var $tabItems6 = $('#nav_tab6 .tab_item');
	var tabSwiper6 = new Swiper('#nav_tab6', config6);
	$tabItems6.on('click', 'a', function (e) {
		var $this = $(this),
			$targetItem6 = $this.closest('.tab_item'),
			activeIndex6 = $targetItem6.index();
		$tabItems6.removeClass('is_selected');
		$targetItem6.addClass('is_selected');
		tabSwiper6.slideTo(activeIndex6 - 1, 400);
	});
	*/
	var config = {
		slidesPerView: 'auto',
		spaceBetween: 0,
		pagination: false,
		wrapperClass: 'section_tab',
		slideClass: 'tab_item',
		setWrapperSize: true,
		observer: true,
		observeParents: true,

	};
	var $tabItems = $('#nav_tab_toggle1 .tab_item');
	var tabSwiper = new Swiper('#nav_tab_toggle1', config);
	$tabItems.on('click', 'a', function (e) {
		var $this = $(this),
			$targetItem = $this.closest('.tab_item'),
			activeIndex = $targetItem.index();
		$tabItems.removeClass('is_selected');
		$targetItem.addClass('is_selected');
		tabSwiper.slideTo(activeIndex - 1, 400);
	});

	//필터탭
    
	var config7 = {
		slidesPerView: 'auto',
		spaceBetween: 0,
		pagination: false,
		wrapperClass: 'section_tab',
		slideClass: 'tab_item',
		setWrapperSize: true,

	};
	function filterTab(){
		var tabSwiper7 = new Swiper('#filter_tab', {
			slidesPerView: 'auto',
			wrapperClass: 'section_tab',
			slideClass: 'tab_item',
			observer: true,
			observeParents: true,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		var $tabItems7 = $('#filter_tab .tab_item');
		var tabSwiper7 = new Swiper('#filter_tab', config7);
		$('#filter_tab .tab_item a').click(function(e) {
			var $this = $(this)
			var $targetItem7 = $this.closest('.tab_item')
			var activeIndex7 = $targetItem7.index();
			$('#filter_tab .tab_item').removeClass('is_selected');
			$targetItem7.addClass('is_selected');
			tabSwiper7.slideTo(activeIndex7 - 1, 400);
			$("#filter_swiper .visual_item .scroll_area_wrap").animate({scrollTop: 0},0);
		});
		//필터스와이퍼
		if($(".filter_swiper").length) {
			var filterSwiper = {
				swiper : null, //이벤트리스터 this 선언을 위함
				init : function(){
					var swiperFilter = new Swiper('#filter_swiper', {
						slideClass: 'visual_item',
						speed: 500,
						navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
						},
						thumbs: {
						swiper: tabSwiper7
						},
						on: {
							init: function(){
							},
							slideChange: function () {
								$("#filter_swiper .visual_item .scroll_area_wrap").animate({scrollTop: 0},0);
							}
						}
					});
					filterSwiper.swiper = swiperFilter; //이벤트리스너 안에 this 처리를 위해
					swiperFilter.slideTo(4);
				}
			}
			$(function(){
				filterSwiper.init();
			})
			$("#tab_item1 a").trigger("click");

		}
	}
	filterTab();


	// 한번에 담기
	$(".ch_btn a.btn_ck").on('click', function (e) {
		$(".prd_list_new").toggleClass("active");
		$(".cart_bottom_area").toggleClass("active");
		$(".go_top").toggleClass("top_off");
		e.preventDefault(); 
	});
	setTimeout(function() { 
		$(".btn_txt").fadeOut(900).parent(".ch_btn.ty02").animate({width:44},1400);
	}, 500);
	$(".btn_ck").on("click", function(){
		$(this).toggleClass("on");
	});
	
	//마이 버튼
	$(".mybutton_tab li a").click(function(){
		$(".mybutton_tab li").removeClass("is_selected");
		$(this).parent().addClass("is_selected");
	});

	//마이 탭
	function tabDefault(){
		// $(".tab_default > li:first").addClass("is_active").show(); 
		// $(".tab_con_box .tab_con_item:first").show(); //Show first tab content

		$(".tab_default > li").click(function() {
			$(" .tab_default > li").removeClass("is_active");
			$(this).addClass("is_active");
			$(".tab_con_box .tab_con_item").hide();

			var activeTab = $(this).find("a").attr("href");
			$(activeTab).fadeIn();
			HDFUINEW.cardVisual(); //2022-05-11 H.Point Pay 관련 추가 pub10

			return false;
		});
	}
	tabDefault();


	function moreButton(){
		$(".plusminus > a").on('click', function (e) {
			$(this).toggleClass("is_active");
			$(this).text( $(this).text() == '더보기' ? "닫기" : "더보기");
		});
	}
	moreButton();

	function contToggle(){
		$(".cont_tg").on('click', function (e) {
			$(this).toggleClass("is_active");
			$(this).next(".cont_tg_box").slideToggle();
		});
	}
	contToggle();

	//footerToggle
	function footToggle(){
		$(".dd_link").on('click', function (e) {
			$(this).toggleClass("is_active");
			$(this).next(".f_site_list").slideToggle();
		});
	}
	footToggle();
	/*
	if ($('.toggle_bloom').length > 0) {
		$(".toggle_bloom").swipe( { pinchStatus:pinch, allowPageScroll:"vertical" } );
		function pinch(event, phase, direction, distance) {
			$(this).text( phase +" you have pinched " + distance + "px in direction:" + direction );
		}
	}
	*/


	$(".btn_pop01").on("click", function(){
		$(".fullscreen_basic").addClass("active");
		HDFUINEW.scroll_freeze();
	});
	$(".btn_pop02").on("click", function(){
		$(".fullscreen_second").addClass("active");
		HDFUINEW.scroll_freeze();
	});
	$(".btn_pop03").on("click", function(){
		$(".fullscreen_third").addClass("active");
		filterInfo();
		var el = $(this).attr('id');
		$('.'+el).click();
	});
	$(".btn_pop05").on("click", function(){
		$(".fullscreen_fourth").addClass("active");
		HDFUINEW.scroll_freeze();
	});
	$(".btn_pop06").on("click", function(){
		$(".filter_popup").addClass("active");
		HDFUINEW.scroll_freeze();
	});

	/* guide popup */
	$(".btn_guide01").on("click", function(){
		$(".fullscreen_basic").addClass("active");
		HDFUINEW.scroll_freeze();
	});
	$(".btn_guide02").on("click", function(){
		$(".fullscreen_second").addClass("active");
		HDFUINEW.scroll_freeze();
	});
	$(".btn_guide03").on("click", function(){
		$(".fullscreen_third").addClass("active");
		HDFUINEW.scroll_freeze();
	});
	$(".btn_guide04").on("click", function(){
		$(".fullscreen_half").addClass("active");
		HDFUINEW.scroll_freeze();
	});
	$(".btn_guide05").on("click", function(){
		$(".fullscreen_btm").addClass("active");
		HDFUINEW.scroll_freeze();
	});
	
	// 하단에서 올라오는 선택 팝업
	if ($(".fullscreen_btm").length > 0 ) {
		var fBtm = $(".fullscreen_btm");
		fBtm.each(function(){
			var btmheight = $(this).height();
			$(this).css("height", (btmheight) + "px");
		});
		if ($(".box > div").hasClass("btn_btm") == false ){
			$(".box").addClass("pdb15");
		}
		$(".btn_popbtm").on("click", function(){
			$(".fullscreen_btm").addClass("active");
		});
	}
	$(".btn_pop04").on("click", function(){
		$(".fullscreen_half").addClass("active");
		HDFUINEW.scroll_freeze();
	});
	$(".btn_pop_close").on("click", function(e){
		$(this).parent().parent().removeClass("active");
		
		HDFUINEW.scroll_unfreeze();
		e.preventDefault(); 
	});

	var windowHeight = $(window).outerHeight();
	var headerHeight = $(".header").outerHeight();
	$(".main_section").css("height",windowHeight);
	$(".myhyundai_section").css("height",windowHeight);
	$(".container_main").css("height",windowHeight);
	$(".container_myhyundai").css("height",windowHeight - headerHeight);
	$(".contaner_brand").css("height",windowHeight);

	$(".noimg_main").css("height", $(".main_swiper").height());

	$('.intro_hash_list li a').click(function(){
        $(this).toggleClass("on");
    });
	$('.intro_hash_list02 li a').click(function(){
        $(this).toggleClass("on");
    });
	$('.intro_hash_list03 li a').click(function(){
        $(this).toggleClass("on");
    });
    $('.intro_hash_list li span').click(function(){
        $(this).toggleClass("on");
    });

    var all_height = $(window).outerHeight();
	$(".bottom_page_con").css("height","100%");

    $('.toggle_spin_left').on('click',function(){
        $(".toggle_btn_area").stop().addClass("move_left");
        $(".toggle_spin a").stop().addClass("active");
        setTimeout(function() { 
            $(".toggle_btn_area").delay(30).removeClass("move_left");
            $(".toggle_spin a").stop().removeClass("active");
        }, 500);
    });
    $('.toggle_spin_right').on('click',function(){
        $(".toggle_btn_area").stop().addClass("move_right");
        $(".toggle_spin a").stop().addClass("active");
        setTimeout(function() { 
            $(".toggle_btn_area").delay(30).removeClass("move_right");
            $(".toggle_spin a").stop().removeClass("active");
        }, 500);
    });

	/* toggle banner */
	$(".toggle_swiper").hide();
	$('.toggle_banner a').click(function(){
        $(this).parent().next(".toggle_swiper").toggle();
		$(this).find(".btn_arrow").toggleClass("active");
    });

	/* 개발쪽에서 작업
	$('.bull_like_area a.bull_alim').click(function(){
        $(this).toggleClass("on");
    });
	*/
	

	$('.bg_dimm').click(function(){
        $(this).hide();
        $(".main_bottom_pop").hide();
    });

	$(".app_gnb").click(function(e){
		$("#hamberger").addClass("active");
		HDFUINEW.scroll_freeze();
		e.preventDefault();
	});
	
	$(".app_search").click(function(e){
		$("#search").addClass("active");
		HDFUINEW.scroll_freeze();
		e.preventDefault();
	});

/*	$(".app_cart").click(function(e){
		$("#cart").addClass("active");
		HDFUINEW.scroll_freeze();
		e.preventDefault();
	});*/
	$(".app_passport").click(function(e){
		$("#passport").addClass("active");
		HDFUINEW.scroll_freeze();
		e.preventDefault();
	});
	$(".app_departure").click(function(e){
		$("#passport").removeClass("active");
		$("#departure").addClass("active");
		HDFUINEW.scroll_freeze();
		e.preventDefault();
	});

	/* filter toggle */
	if($(".filter_toggle").length) {
		$(".filter_toggle > li > a").bind("click", function(){
			if(!$(this).next().is(":visible")){
				$(this).parent().parent(".filter_toggle").find(" > li").removeClass("active");
				$(this).parent().addClass("active");
				$(this).parent().parent().find(".filter_toggle_con").slideUp();
				$(this).next().slideDown();
			}
			else{
				$(this).parent().parent(".filter_toggle").find(" > li").removeClass("active");
				$(this).next().slideUp();
			}
		});
	}

	if($(".lang_change_en").length) {
		$(".lang_change_en").bind("click", function(){
			$(this).text( $(this).text() == 'ABC순' ? "가나다순" : "ABC순");
			$(this).parent().parent().toggleClass("on");
		});
	}

});

$(document).ready(function() {
	
	// 수량 체크
	if($(".num_amount").length) {
		$(".num_amount input[count_range]").click(function(e){
			e.preventDefault();
			var type = $(this).attr("count_range");
			var $count = $(this).siblings("input.count");
			var count_val = $count.val(); // min 1
			if(type=="m"){
				if(count_val < 2){
					return;
				}
				$count.val(parseInt(count_val)-1);
			}else if(type=="p"){
				$count.val(parseInt(count_val)+1);
			}
		});
	}

});

// Header Local Navigation Bar Type
$(document).ready(function(){

	var introVideoPositionX = $(".intro_video").width()/2;
	$(".intro_video").css("maegin-left",-introVideoPositionX);

	var introHashListHeight = $(".intro_hash_list").outerHeight()/2;
	$(".intro_hash_list").css("margin-top",-introHashListHeight);
	//var introHashListHeight02 = $(".intro_hash_list02").outerHeight()/2;
	//$(".intro_hash_list02").css("margin-top",-introHashListHeight02);
	var introHashListHeight03 = $(".intro_hash_list03").outerHeight()/2;
	$(".intro_hash_list03").css("margin-top",-introHashListHeight03);

	/*
	if($("#myPlayer").length > 0) {
		var player = videojs("myPlayer", {
			controls : true,
			playsinline : true,
			muted : true,
			autoplay : true,
			loop : true,
			preload : "metadata",
		});
	}

	if($("#myPlayer2").length > 0) {
		var player = videojs("myPlayer2", {
			controls : true,
			playsinline : true,
			preload : "metadata",
		});
	}

	if($("#myPlayer3").length > 0) {
		var player = videojs("myPlayer3", {
			controls : true,
			playsinline : true,
			preload : "metadata",
			muted : false,
			autoplay : true,
			loop : true
		});
	}

	if($("#myPlayer4").length > 0) {
		var player = videojs("myPlayer4", {
			sources : [ 
			{ src : "../../mp4/intro_bg2.mp4", type : "video/mp4"}
			],
			poster : "../../images/M_KO/temp/temp_toggle_banner06.png",
			controls : true,
			playsinline : true,
			muted : false,
			autoplay : false,
			loop : false,
			preload : "metadata",
		});
	}
	*/

	var prdListTopFixed = $(".header").outerHeight();
	$(".prd_list_top.fixed").css("top",prdListTopFixed);
	$(".prd_list_top.fixed").next(".prd_list_fixed").css("margin-top",prdListTopFixed);

	$(".btn_toggle_sort").bind("click", function(){
		$(this).toggleClass("on");
		$(".sort_sel").toggleClass("on");
	});

});

$(function () {

	/* 검색 삭제버튼 */
	var $ipt = $('.search_top');
	var $ipt2 = $('.search_top1');
	var $ipt3 = $('.search_top2');
	var $ipt4 = $('.basic_search .search_top');
    var $clearIpt = $('.search_top').next('.btn_clear');
    var $clearIpt2 = $('.search_top1').next('.btn_clear');
    var $clearIpt3 = $('.search_top2').next('.btn_clear');
    var $clearIpt4 = $('.basic_search .search_top').next('.btn_search_clear');

	$ipt.keyup(function(){
		// $clearIpt.toggle(Boolean($(this).val()));
	});
	$ipt2.keyup(function(){
		$clearIpt2.toggle(Boolean($(this).val()));
		if($ipt2.val()=='') { 
			$(".sh_ipt").removeClass("ty02");
			$(".tip_item").show();
		}
		if(!$ipt2.val()=='') { 
			$(".sh_ipt").addClass("ty02");
			$(".tip_item").hide();
		}
	});
	$ipt3.keyup(function(){
		$clearIpt3.toggle(Boolean($(this).val()));
		if($ipt3.val()=='') { 
			$(".sh_ipt").removeClass("ty02");
			$(".tip_item").show();
		}
		if(!$ipt3.val()=='') { 
			$(".sh_ipt").addClass("ty02");
			$(".tip_item").hide();
		}
	});

	$ipt4.keyup(function(){
		$clearIpt4.toggle(Boolean($(this).val()));
		if($ipt4.val()=='') { 
			$(".basic_search").removeClass("ty02");
			$(".tip_item").show();
		}
		if(!$ipt4.val()=='') { 
			$(".basic_search").addClass("ty02");
			$(".tip_item").hide();
		}
	});

	$clearIpt.toggle(Boolean($ipt.val()));
	$clearIpt.click(function(){
		$ipt.val('').focus();
		$(this).hide();
	});

	$clearIpt2.toggle(Boolean($ipt2.val()));
	$clearIpt2.click(function(){
		$ipt2.val('').focus();
		$(this).hide();
		$(".sh_ipt").removeClass("ty02");
		$(".tip_item").show();
	});

	$clearIpt3.toggle(Boolean($ipt3.val()));
	$clearIpt3.click(function(){
		$ipt3.val('').focus();
		$(this).hide();
		$(".sh_ipt").removeClass("ty02");
		$(".tip_item").show();
	});

	$clearIpt4.toggle(Boolean($ipt4.val()));
	$clearIpt4.click(function(){
		$ipt4.val('').focus();
		$(this).hide();
		$(".basic_search").removeClass("ty02");
		$(".tip_item").show();
	});

	$(".tip_bubble").delay(2500).fadeOut(); 

});

// video
$(document).ready(function(){
	// 브랜드 스케어형
	if($(".goods_item li .video-js").length){
		$(".goods_item li .video-js").each(function() {
			var VideoLink = $(this).parent("a").attr("href");
			$(this).parents(".goods_item li").addClass("link_position").append("<a href='"+VideoLink+"' class='link'>링크</a>");
			var LinkZindex = parseInt($(".goods_item li .link").css("zIndex"));
			$(this).css({"z-index":LinkZindex-1})
		});
	}
	// 제품목록
	if($(".prd_list_new li .prd_img .video-js").length){
		$(".prd_list_new li .prd_img .video-js").each(function(){
			if($(".video-js").length){
				$(this).parents(".pic_section").addClass("video")
				var VideoLink = $(this).parents("a").attr("href");
				$(this).parents("li").addClass("link_position").append("<a href='"+VideoLink+"' class='link'>링크</a>");
				var LinkZindex = parseInt($(".prd_list_new li .sale_per").css("zIndex"));
				$(this).css({"z-index":LinkZindex-1})
				$(".link_position .cart, .best_num").css({"z-index":LinkZindex+1})
			}
		})
	}

	if($(".main_swiper .visual_item .video-js").length){
		$(".main_swiper .visual_item .video-js").each(function(){
			var vItemHeight = $(".main_swiper").height();
			$(this).css({
				// "min-height":(vItemHeight)+"px",
				//height:($(".bottom_top_swiper").outerHeight() - 60)//2021-09-02 추가 : 영상 높이 수정 / 2021-09-09 국문만 제거
			});
		})
	}
	
	setTimeout(function() { 
		$(".main_section, .myhyundai_section").css("opacity","1");
	}, 200);

});
// video

$(window).load(function(){
	if($(".foot_wrap").prev().find(".attention_tit")){
		$(".attention_tit").parent().addClass("pdb_no");
	}

	$(".pd_wrap2 .order_no_data").addClass("pdb_no");
	$(".box.cart_area .attention_area").removeClass("pdb_no");
	$(".my_pd_wrap.ty_buy .dot_list_new").addClass("pdb40");
});
// toast message
$(function(){
	var toasttitle = "관심상품으로 등록되었습니다 :)"
	var toastmessage = function(){
		$(".toast_message div").css("zIndex","9999").text(toasttitle).fadeIn(200).delay(1000).fadeOut(200)
	}
	$(".toast_btn").click(toastmessage);
	$(".pro_option_layer").parents(".pro_cart").addClass("has_select");
	
});

$(document).ready(function(){

	/* 개발 요청으로 삭제
	// 일시품절
	$(document).on("click", ".pro_soldout a", function(){
		if($(".pro_soldout").hasClass("alarm")){
			$(".pro_soldout").removeClass("alarm");
		}else{
			$(".pro_soldout").addClass("alarm");
		}
	})
	// 관심상품 등록
	$(document).on("click", ".wish_popup", function(){
		$(this).addClass("on");
		$(".toast_message .wish").fadeIn(400).delay(1000).fadeOut(400);
	})
	*/
	// 상품상세 이미지
	window.addEventListener("load", function(){
		var pvHeight = $(".product_view").outerHeight(true);
		if (pvHeight < 900) {
			$(".product_view .more").addClass("none");
		}
	})
	// 묶음상품 on/off
	$(".pro_option_layer").prepend("<button class='close'>창닫기</button>")
	$(".pro_option_layer .selected").click(function() {
		$(".pro_option_layer").addClass("open");
	});
	$(".pro_option_layer .close").bind("click", function(){
		$(".pro_option_layer").removeClass("open")
	});
	$(".select_list a").bind("click", function(){
		$(".pro_option_layer").removeClass("open")
	});

	// 레이어팝업 zIndex
	$(".ui-dialog").css({"z-index":"900"})
	// 사용자리뷰 별점
	$(".total_score").each(function () {
		var Pdata = $(".total_score .scoreboard strong").html();
		$(".total_score .total_star span").css({"width":(Pdata*20)+"%"})
	});
	$(".star_point span").each(function () {
		var Pdata = $(this).html();
		$(this).css({"width":(Pdata*20)+"%"})
	});
	// 포토리뷰 펼침
	$(".photo_review .screen a.use").bind("click" , function(){
		$(this).siblings().removeClass("open");
		if($(this).hasClass("open")){
			$(this).removeClass("open")
		}else{
			$(this).addClass("open")
		}
		return false;
	});
	// 텍스트리뷰 펼침
	$(".text_review .screen a.use").bind("click" , function(){
		$(this).siblings().removeClass("open");
		if($(this).hasClass("open")){
			$(this).removeClass("open")
		}else{
			$(this).addClass("open")
		}
		return false;
	});
	// 아코디언 펼침 공통
	$(".accordion_toggle .pro_screen").click(function(){
		if($(this).hasClass("open")){
			$(this).removeClass("open")
		}else{
			$(this).addClass("open")
		}
	});
	$(".accordion_set li p").click(function(){
		if($(this).parents(".accordion_set li").hasClass("open")){
			$(this).parents(".accordion_set li").removeClass("open");
		}else{
			$(this).parents(".accordion_set li").addClass("open");
		}
	});
	// 제품정보 더보기
	$(".product_view .more").click(function(){
		if($(this).parent().hasClass("open")){
			$(".product_view").removeClass("open");
			$(this).text("더보기");
			var scrollTop = $(".scroll_area").scrollTop();
			var moreTop = $(this).offset().top;
			$(".scroll_area").animate({scrollTop: scrollTop+moreTop-300},0);
		}else{
			$(".product_view").addClass("open");
			$(this).text("닫기")
		}
	});

	// 관심상품 등록
	$(".counter_amount input[count_range]").click(function(e){
		e.preventDefault();
		var type = $(this).attr("count_range");
		var $count = $(this).siblings("input.count");
		var count_val = $count.val(); // min 1
		if(type=="m"){
			if(count_val<1){
				return;
			}
			$count.val(parseInt(count_val)-1);
		}else if(type=="p"){
			$count.val(parseInt(count_val)+1);
		}
	});

	if($(".bottom_page").length){
		$("html").addClass("onepage");
	}

	/*   
	//2021-09-29 메인, 브랜드 페이지 앱바

	function OtherutilBar() {
		var $utilBar = $(".util_bar");
		//Other Type (Main, Brand)
		var OtherScroll,
		prevOtherTop = 0,
		layerCon = $(".main_type .bottom_page_con, .brand_type .bottom_page_con"); 
		layerCon.on('touchend scroll', function (e) {
		OtherScroll = true;
		setInterval(function () {
			if (OtherScroll) {
				OtherScrolled();
				OtherScroll = false;
			}
		}, 800);
	});   
	   
	function OtherScrolled() {
		var layerTop    = layerCon.scrollTop();
		if(layerTop < 10){
			$utilBar.addClass('util_up');
		}else{
			if (layerTop > prevOtherTop){
				$utilBar.removeClass('util_up');
			}else{
				$utilBar.addClass('util_up');
			}
		}
		prevOtherTop = layerTop;
	   
	}
	   
	//Main: My Hyundai
	   
	var myhyundaiScroll,
		prevMyhyundaiTop = 0,
		myhyundaiCon = $(".container_myhyundai .my_wrap");
		myhyundaiCon.on('touchend scroll', function (e) {
		myhyundaiScroll = true;
		setInterval(function () {
			if (myhyundaiScroll) {
				myhyundaiScrolled();
				myhyundaiScroll = false;
			}
		}, 800);
	   
	});
	   
	   
	   
	function myhyundaiScrolled() {
		var myHyundaiTop = myhyundaiCon.scrollTop();
		if(myHyundaiTop < 10){
			$utilBar.addClass('util_up');
		}else{
			if (myHyundaiTop > prevMyhyundaiTop){
				$utilBar.removeClass('util_up');
			}else{
				$utilBar.addClass('util_up');
			}
		}
		prevMyhyundaiTop = myHyundaiTop;
		}
	   
	} OtherutilBar();
	
	*/

	// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 - 브랜드몰 상세페이지 Start
	if ($('.product_appbar').find('.btn_cos_face.type-tooltip').length) {
		if ($('.product_appbar').find('.add_cart').css('display') == 'block') {
			$('.product_appbar').find('.btn_cos_face.type-tooltip').addClass('is-selling');
		} else if ($('.product_appbar').find('.pro_soldout').css('display') == 'block') {
			$('.product_appbar').find('.btn_cos_face.type-tooltip').addClass('is-soldout');
		} else if ($('.product_appbar').find('.stopselling').css('display') == 'block') {
			$('.product_appbar').find('.btn_cos_face.type-tooltip').addClass('no-selling');
		};
	};
	// [pub]22-02-23 추가 - 버튼 H.COS Face 추가 - 브랜드몰 상세페이지 End
	
	// [pub1]2022-07-06 추가 - lolozem 버튼 추가 - 상품 상세페이지 Start
	if ($('.product_appbar').find('.btn_lolozem.type-tooltip').length) {
		if ($('.product_appbar').find('.add_cart').css('display') == 'block') {
			$('.product_appbar').find('.btn_lolozem.type-tooltip').addClass('is-selling');//판매중일때
		} else if ($('.product_appbar').find('.pro_soldout').css('display') == 'block') {
			$('.product_appbar').find('.btn_lolozem.type-tooltip').addClass('is-soldout');//품절일때
		} else if ($('.product_appbar').find('.stopselling').css('display') == 'block') {
			$('.product_appbar').find('.btn_lolozem.type-tooltip').addClass('no-selling');//판매중지일때
		};
	};
	// [pub1]2022-07-06 추가 - lolozem 버튼 추가 - 상품 상세페이지 End
	
});

function linkfunction_buy() {
	$(".product_appbar .add_cart").addClass("buy_turn")
	setTimeout(function() {
		location.href = '#';
	}, 400);
};

/* 2021-07-26 추가 : 비디오 다운로드 관련 = 인트로, 메인 키비주얼, 상단 영상 제외한 모든 비디오는 <video preload="none"> 스크롤 시 <video preload="">
$(function(){
	if($('video').length > 0){
		$('video').each(function(){
			if($(this).offset().top <= $(window).height()){
				if($(this).attr('auto_chk') == 'false'){
					auto_chk = false
				} else {
					auto_chk = true
				}
				$(this).attr({
					preload:'',
					autoplay:auto_chk
				});
			}
		});
		$(window).scroll(function(){
			$('video').each(function(){
				if($(this).attr('auto_chk') == 'false'){
					auto_chk = false
				} else {
					auto_chk = true
				}
				$(this).attr({
					preload:'',
					autoplay:auto_chk
				});
			});
		});
	}
});
 */

//S: 2022-05-11 H.Point Pay 카드, 계좌 선택 추가
function hpayArea(){
	$(".payway_area_hpay .hpay_choose").on("click", function(){
		var hpayBox = $(this).next(".hpay_box");
		$(".hpay_box").removeClass("active");
		hpayBox.addClass("active");
		HDFUINEW.cardVisual();
	});
}; hpayArea();

// E: 2022-05-11 H.Point Pay 카드, 계좌 선택 추가

/* S:2023-11-22 이지웰 해더 추가 */
var ezwelHeader = function () {
	if ($(".ezwel_header_wrap").length){
		$("body").addClass("ezwel_type");

        //스크롤시
        $(window).on("scroll", function(e) {
            var scrollTop = $(this).scrollTop();
            var ezwelHH = $(".ezwel_header_wrap").height();
			if (scrollTop >= ezwelHH) {
                $("body").addClass("ezwel_scroll");
                $("body").removeClass("ezwel_type");
            } else {
                $("body").removeClass("ezwel_scroll");
                $("body").addClass("ezwel_type");
            }
		});
	}
};
/* E:2023-11-22 이지웰 해더 추가 */

//2023 개선 cart
//20130713 수정
const _mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 500; // 웹에서 확인용으로 innewWidth 추가
// vh 셋팅
function setScreenSize() {
    const _vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${_vh}px`);
}
window.addEventListener('load', () => {
	//2023 cart
    // 20230804 수정
    // 모바일 vh 셋팅
    document.querySelector('.area-cart, .myhd, .od') && _mobile && setScreenSize();
    document.querySelector('.area-cart, .myhd, .od') && _mobile && window.addEventListener('resize', setScreenSize);
    // 장바구니 세트 swiper
    document.querySelector('.wrap-swiper__set') && Array.prototype.forEach.call(document.querySelectorAll('.wrap-swiper__set'), target => {
        setSwiper({target, viewNum: 4, gap: 16, navigation: true});
    });
    /* 퍼블 확인 용 */
    // 최저가 엿보기 20230713 수정
    document.querySelector('.payment-info__low-price.type-always .bottom-price__open button') && viewSlideCont({base: '.payment-info__low-price.type-always', btn: '.payment-info__low-price .bottom-price__open button', target: '.payment-info__low-price .bottom-price__detail'});
    // 최저가 엿보기 적립금 할인 20230713 수정
    // document.querySelector('.payment-info__low-price .bottom-price__item button') && viewSlideCont({base: '.payment-info__low-price .list-bottom-price.type-detail', btn: '.payment-info__low-price .bottom-price__item button', target: '.payment-info__low-price .list-bottom-price--detail'});
    document.querySelector('.wrap-payment-cart') && viewSlideCont({base: '.wrap-payment-cart .list-bottom-price.type-detail', btn: '.wrap-payment-cart .bottom-price__item button', target: '.wrap-payment-cart .list-bottom-price--detail'});
	//2024-07-11 회원가입 개선
    $('.desc_low_price .ac_head button').click(function(){
        $('.desc_low_price .ac_head').addClass('hide-tooltip');
    });

    // 툴팁 20230713 수정
    document.querySelector('.btn-tooltip') && Array.prototype.forEach.call(document.querySelectorAll('.btn-tooltip'), el => {
        viewTooltip(el);
    });
    // 최저가 엿보기 열기
    document.querySelector('[data-role*="open__"]') && Array.prototype.forEach.call(document.querySelectorAll('[data-role*="open__"]'), el => {
        openEl(el);
    });
    // 품절삭제 체크박스 20230802 수정
    _mobile && document.getElementById('chk-sold-out') && changeSoldOut(document.getElementById('chk-sold-out'));
    // 주문창 여부
    document.querySelector('.wrap-payment-cart .payment-cart') && setPadBot(document.querySelector('.wrap-payment-cart .payment-cart').parentNode);
    
    
    //2023 order
    // select box mobile
    document.querySelector('.wrap-form__select select, .form_cont select, .wrap-select select, .temp_opt select') && Array.prototype.forEach.call(document.querySelectorAll('.wrap-form__select, .form_cont, .wrap-select, .temp_opt'), el => {
        if (!el.closest('.type-order-payment.cart__content')) {
            el.querySelector('select') && setSelectBox(el);
        }
    });
    // input 삭제 버튼
    document.querySelector('.wrap-form__input, .form_cont') && Array.prototype.forEach.call(document.querySelectorAll('.wrap-form__input, .form_cont'), el => {
        if (!el.closest('.type-order-payment.cart__content')) {
            // el.addEventListener('focusin', viewDel);
            el.addEventListener('input', disableDel);
            // el.addEventListener('focusout', removeDel);
        }
    });
    // 기간 카렌다 기본 날짜 넣기 20230802 추가
    document.querySelector('[data-role="calendarData"], [data-role="calendarDpat"]') && periodCalendar(document.querySelectorAll('[data-role="calendarData"], [data-role="calendarDpat"]'));
    // 날짜 1개 선택용 카렌다 20230802 수정
    document.querySelector('[data-role="calendar"]') && Array.prototype.forEach.call(document.querySelectorAll('[data-role="calendar"]'), inp => {
        const type = inp.dataset.calendarType;
        inp.addEventListener('click', function(e) {
            setCalendar({target: inp, type, multi: false});
        });
    });
    // 등록가이드 accordion 
    document.querySelector('[data-role*="accordion__"]') && Array.prototype.forEach.call(document.querySelectorAll('[data-role*="accordion__"]'), el => {
        viewSlideCont({base: el.closest('.wrap-tit'), btn: el, target: el.closest('.wrap-tit').querySelector('.guide-passport')});
    });
    // 레이어 탭 리스트, 팝업 열기 등 mutation observer
    checkLayer();
    // 모바일 마이현대 swiper
    document.querySelector('.my-situation-swiper') && setSwiper({target: document.querySelector('.my-situation-swiper'), gap: 30, pagination: '.swiper-pagination', navigation: true});
    //document.querySelector('.my-suggestion-swiper') && setSwiper({target: document.querySelector('.my-suggestion-swiper'), viewNum: 'auto', gap: 12});
    document.querySelector('.wave-open.electronic-passport-wrap') && viewSlideCont({base: '.wave-open.electronic-passport-wrap', btn: '.electronic-passport', target: '.electronic-passport-content'});
    // accordion
    document.querySelector('[role=region]') && setAccordion();
    //주문결제 주문상품 더 보기 20230725 추가
    document.querySelector('[data-role=fold__wrap-order-list]') && foldOrderProduct(document.querySelector('[data-role=fold__wrap-order-list]'));
    // 주문결제 hpoint swiper
    // document.querySelector('.swiper-h-point-card') && setSwiper({target: document.querySelector('.swiper-h-point-card'), gap: 30, pagination: '.swiper-pagination'});
    // 주문결제 hpoint swiper
    // document.querySelector('.swiper-h-point-account') && setSwiper({target: document.querySelector('.swiper-h-point-account'), gap: 30, pagination: '.swiper-pagination'});
    // 모달창 닫기
    document.querySelector('.layer-dim') && Array.prototype.forEach.call(document.querySelectorAll('.layer-dim'), el => {
        closeModalSwipe({base: el, cls: '.box-bottom-float', checkBody: true});
    });
    // 우측 결제 금액 스크롤 이벤트
    document.querySelector('.cart__right') && scrollFloatRight('.cart__right');
    // 모바일 최종 결제금액 보기 아코디언
    document.querySelector('.payment_final_detail .folding .detail_tit.type-btn') && paymentFoldPos('.payment_final_detail .folding');
    setIntersectionOpserve({target: '.swiper-h-point-card'});
    setIntersectionOpserve({target: '.swiper-h-point-account'});
    
	//2023 mypage
	// 마이현대 메뉴 서브 메뉴 보기
    document.querySelector('.wrap-my-menu .list-my-menu') && viewMyMenu('.wrap-my-menu');
    // 롤링 알림 메세지
    document.querySelector('.my-grade__alram') && myAlram();
    // 1, 3, 6개월 기간 선택
    document.querySelector('.list-order__head.type-order-history [data-role="period-calendar"]') && Array.prototype.forEach.call(document.querySelectorAll('.list-order__head.type-order-history [data-role="period-calendar"]'), el => {
        changePeriodCalendar(el.closest('.list-order__head.type-order-history'));
    });
    // 마이현대 앵커이동 20230726 추가
    setTimeout(() => {
    	document.querySelector('.my-tab-menu-info') && anchorMove(document.querySelector('.my-tab-menu-info'));
    }, 1000);
    // 모바일 전자여권 숨기기
    document.querySelector('.wave-open.electronic-passport-wrap') && hidePassport('.wave-open.electronic-passport-wrap');
    // 마이현대 높이값
    setTimeout(() => {
    	document.querySelector('.my-od-tab-content') && setSameHgt('.my-od-tab-content');
    }, 100);//2023-03-28 마이현대 메인 상단 수정


	//2023 product
	let productDetailTab = document.querySelectorAll('.product_tab ul li');
    let fileNameUrl = location.href.split('/')[(location.href.split('/').length-1)].split('.')[0];

    if (fileNameUrl === 'm_product_search_list' || fileNameUrl === 'm_product_search_list_popup') {
        document.querySelector('html').style.overflowX = 'hidden';
    }

    // 모바일 상품상세 swiper
    document.querySelector('.pd-thumblist-swiper .swiper-wrapper') && setSwiper({target: document.querySelector('.pd-thumblist-swiper'), gap: 30, pagination: '.swiper-pagination', navigation: true});
    document.querySelector('.pd-giftlist-swiper .swiper-wrapper') && setSwiper({target: '.pd-giftlist-swiper', gap: 12,viewNum: 1.25, breakPoint: {600: {slidesPerView: 1,},}});
    document.querySelector('.pd-reviewlist-swiper .swiper-wrapper') && setSwiper({target: document.querySelector('.pd-reviewlist-swiper'), viewNum: 4.5, gap: 8});
    document.querySelector('.wrap-swiper__gift .swiper-wrapper .swiper-wrapper') && setSwiper({
        target: '.wrap-swiper__gift', pagination: '.swiper-pagination', navigation:  true
    });
    document.querySelector('.pd-set-swiper') && Array.prototype.forEach.call(document.querySelectorAll('.pd-set-swiper'), target => {
        target.querySelector('.swiper-wrapper') && setSwiper({target, viewNum: 5, gap: 24, navigation: true});
    });
    document.querySelector('.pd-recommended-swiper') && Array.prototype.forEach.call(document.querySelectorAll('.pd-recommended-swiper'), target => {
        target.querySelector('.swiper-wrapper') && setSwiper({target, viewNum: 4, gap: 24, navigation: true});
    });
    document.querySelector('.pd-bestbrand-swiper') && Array.prototype.forEach.call(document.querySelectorAll('.pd-bestbrand-swiper'), target => {
        target.querySelector('.swiper-wrapper') && setSwiper({target, viewNum: 4, gap: 24, navigation: true});
    });
    document.querySelector('.pd-ititems-swiper') && Array.prototype.forEach.call(document.querySelectorAll('.pd-ititems-swiper'), target => {
        target.querySelector('.swiper-wrapper') && setSwiper({target, viewNum: 1, gap: 0, pagination: '.swiper-pagination',});
    });
    // 상품 디테일 내용 탭 활성화
    for (let i = 0; i < productDetailTab.length; i++) {
        productDetailTab[i].addEventListener('click', (e) => {
            for (let j = 0; j < productDetailTab.length; j++) {
                productDetailTab[j].classList.remove('active');
            }
            e.target.parentElement.parentElement.classList.add('active');
        })
    };
    // 평점비율
    document.querySelector('[data-role=rating-bar]') && Array.prototype.forEach.call(document.querySelectorAll('[data-role=rating-bar]'), el => ratingBar(el));
    // menu sticky
    _mobile && document.querySelector('.product-saerch-list-top') && menuSticky('.product-saerch-list-top');
    // filter 20231011 수정
    // document.querySelector('[data-filter="btn"]') && viewFlterDetail(document.querySelector('[data-filter="btn"]'));
    // show hide 제어
    document.querySelector('[data-control]') && Array.prototype.forEach.call(document.querySelectorAll('[data-control]'), el => {
        viewControlCheck(el);
    })
    _mobile && setScreenSize();
    _mobile && window.addEventListener('resize', setScreenSize);
    // 상품상세 sticky
    _mobile && document.querySelector('.product_tab.productdetail_tab') && anchorMove(document.querySelector('.product_tab.productdetail_tab'));
    // pc 상품상세 sticky
    !_mobile && document.querySelector('.product_tab.productdetail_tab') && anchorMovePc(document.querySelector('.product_tab.productdetail_tab'));
    // 브랜드 검색 sticky
    _mobile && document.querySelector('.search-tab-content-wrap .brand-category') && brandSticky();
    // 레이어 observe
    checkMutationObserve();
    // 레이어 observe
    // document.querySelector('.box-float-layer .guidance-area') && intSecObserver(document.querySelector('.box-float-layer .guidance-area'));
    // 검색 레이어
    _mobile && document.querySelector('.saerch-top.saerch-top-fix-no input[type=text]') && checkIntersectionOpserve(document.querySelector('.saerch-top.saerch-top-fix-no input[type=text]'));
    // 검색 레이어 초성 클릭 
    _mobile && document.querySelector('.kr-en-conversion-wrap .initial-sound') && checkIntersectionOpserve(document.querySelector('.kr-en-conversion-wrap .initial-sound'));
    // 검색 타입 전환
    document.querySelector('.productSaerchList .saerch-top') && changeCls({base: document.querySelector('.productSaerchList .saerch-top'), btn: '.btn-search-type', cls: 'type-hash'});
    // 필터 아이콘 클릭 노출
    // document.querySelector('.product-filter-btn') && changeCls({base: document.querySelector('.product-saerch-list-right'), btn: '.product-filter-btn', cls: 'active', rel: '.search-hashtag-result', dip: 'flex'});

    // 세트상품 하단 장바구니 영역 활성화
    document.querySelector('.payment-cart-wrap .min-down-btn') && cartBtnArea({base: '.payment-cart-wrap', btn: '.min-down-btn' , cls: 'off'});
    // 필터 checkbox
    document.querySelector('.saerch-result-content dl input[type=checkbox]') && Array.prototype.forEach.call(document.querySelectorAll('.saerch-result-content dl dt input[type=checkbox]'), el => {
        agreeCheckAll(el.closest('dl'));
    });
    // list_search
    let refreshBtn = document.querySelector('.refresh-btn');
    let categoryMenuOneDepth = document.querySelectorAll('.category-menu-one-depth ul li a');
    let categoryMenuTwoDepth = document.querySelectorAll('.category-menu-two-depth ul li a');
    let categoryMenuTwoDepthOpen = document.querySelectorAll('.category-menu-two-depth-open ul li a');

    // 카테고리 드롭다운 2depth 메뉴
    $('.category-menu-two-depth-btn').click(function() {
        const _scroll = window.scrollY;
        document.querySelector('.category-menu-two-depth-open').style.top = `${_scroll}px`;
        $('.category-menu-two-depth-open').stop().slideToggle(300, () => {
            $(this).parent().toggleClass('active');
        });
        $('.category-menu-two-depth-open, .category-menu-dimmed').toggleClass('active');
        

        if ($('.category-menu-two-depth-open').hasClass('active') === true) {
            scrollHide();
        } else {
            scrollShow();
        }

        if ($('.category-menu-dimmed').hasClass('active') === true) {
            scrollHide();
        } else {
            scrollShow();
        }
    });

    // 딤 배경 처리
    $('.category-menu-dimmed').click(function() {
        if ($(this).hasClass('active') === true) {
            $('.category-menu-two-depth-open').stop().slideUp(300, function() {
                $('.category-menu-two-depth-wrap').removeClass('active');
            });
            $('.category-menu-two-depth-open, .category-menu-dimmed').removeClass('active');
            scrollHide();
            // $('.category-menu-two-depth-open').stop().slideUp(300);
            // $(this).toggleClass('active');
            // $('.category-menu-two-depth-btn').toggleClass('active');
            // $('html').css('overflow-y', 'unset');
        }
    });

    // PC 카테고리 드롭다운 메뉴
    $('.product-category-menu > li:has(ul) > a').each(function() {
        $(this).html($(this).html() + '<img src="../../front/images/KO/common/n/icon_cr_down_arrow.svg" />');
    });
    $('.product-category-menu li > a').click(function() {
        let li = $(this).parent();
        let ul = li.parent()

        ul.find('li').removeClass('active');
        ul.find('ul').not(li.find('ul')).hide();
        li.children('ul').toggle();

        if (li.children('ul').is(':visible') || li.has('ul')) {
            li.addClass('active');
        }
    });

    // 카테고리 드롭다운 1depth 메뉴 활성화
    for (let i = 0; i < categoryMenuOneDepth.length; i++) {
        categoryMenuOneDepth[i].addEventListener('click', (e) => {
            for (let j = 0; j < categoryMenuOneDepth.length; j++) {
                categoryMenuOneDepth[j].classList.remove('active');
            }
            e.target.classList.add('active');
        })
    };

    // 카테고리 드롭다운 2depth 메뉴
    for (let i = 0; i < categoryMenuTwoDepth.length; i++) {
        categoryMenuTwoDepth[i].addEventListener('click', (e) => {
            for (let j = 0; j < categoryMenuTwoDepth.length; j++) {
                categoryMenuTwoDepth[j].classList.remove('active');
            }
            e.target.classList.add('active');
        })
    };

    // 카테고리 드롭다운 2depth 메뉴 활성화
    for (let i = 0; i < categoryMenuTwoDepthOpen.length; i++) {
        categoryMenuTwoDepthOpen[i].addEventListener('click', (e) => {
            for (let j = 0; j < categoryMenuTwoDepthOpen.length; j++) {
                categoryMenuTwoDepthOpen[j].classList.remove('active');
            }
            e.target.classList.add('active');
        })
    };

    // MO 추천 상품 슬라이드
    let swiperSuggestion = new Swiper('.suggestion-prdouct-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        observer: true,
        observeParents: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
    });

    // PC 추천 상품 슬라이드
    let pcSwiperSuggestion = new Swiper('.pc-suggestion-prdouct-swiper', {
        slidesPerView: 5,
        spaceBetween: 24,
        observer: true,
        observeParents: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
    });
    // filter sticky 20231011
    !_mobile && document.querySelector('.saerch-result-content .filter-info') && unitSticky({target: document.querySelector('.saerch-result-content .filter-info'), basis: ['#header', '.product-saerch-list-top'], base: '.product-list-content-wrap'});
    // filter
    document.querySelector('.saerch-result-content #filterOptionBtn') && viewFilter({base: document.querySelector('.saerch-result-content'), btn: document.querySelector('.saerch-result-content #filterOptionBtn')});
    document.querySelector('.saerch-result-content #filterOptionBtn2') && viewFilter({base: document.querySelector('.saerch-result-content'), btn: document.querySelector('.saerch-result-content #filterOptionBtn2')});
    // video btn - mo
    document.querySelector('.dubble_box .video_area') && Array.prototype.forEach.call(document.querySelectorAll('.dubble_box .video_area'), el => {
        setVideoBtn(el);
    });
    // video btn - pc
    document.querySelector('.pord_duble .img_video') && Array.prototype.forEach.call(document.querySelectorAll('.pord_duble .img_video'), el => {
        setVideoBtn(el);
    });
    // n_display
    // 혜택 탭 202310117 수정
    document.querySelector('.display_tab_item') && displayTabEvent();
    _mobile && document.querySelector('.search-round-data-wrap.bests_ico') && checkIntersectionOpserve(document.querySelector('.search-round-data-wrap.bests_ico'));
    document.querySelector('.search-round-data__bests-ico') && setRoundDataList('.search-round-data__bests-ico');
    document.querySelector('.benefits-topbanner-swiper') && benefitsBannerSwiper(document.querySelector('.benefits-topbanner-swiper'));
    document.querySelector('.specials_products_swiper--pc') && specialProductsSlider();
    document.querySelector('.specials_brands_swiper--pc') && specialBrandsSlider();
    document.querySelector('.specials_h-share_swiper--pc') && setHShareSlider();
    document.querySelector('.display_search_top') && setSearchClear();

    // 카테고리 드롭다운 1depth 메뉴
    $('.category-menu-one-depth-btn').click(function() {
        $('.category-menu-one-depth').stop().slideToggle(300);
        $('.category-menu-one-depth').toggleClass('active');
        $(this).toggleClass('active');

        if ($('.category-menu-one-depth').hasClass('active') === true) {
            scrollHide();
        } else {
            scrollShow();
        }
    });

    //베스트 브랜드 swiper
    let bestInnerSlides = document.querySelectorAll('.bests_brand_list--top li.bests_brand_item')
        bestInnerSlides.forEach((slide, index) => {    
        slide.classList.add(`bests_top-${index}`); 
        let swiper = new Swiper(`.bests_top-${index} .best_innerslide`, {
            slidesPerView: 2,
            spaceBetween: 24,
            observer: true,
            observeParents: true,
            navigation: {
                prevEl: `.bests_top-${index} .swiper-button-prev`,
                nextEl: `.bests_top-${index} .swiper-button-next`,
            },
        });
    });
    // pc 검색 swiper
    document.querySelector('.pc-search-hit-swiper') && new Swiper('.pc-search-hit-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        width: 404,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-search-hit-pagination',
            clickable: true,
        },
    });

    // PC 인기 해시태그
    document.querySelector('.pc-search-hit-hastag-swiper') && new Swiper('.pc-search-hit-hastag-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        width: 404,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-search-hit-hastag-pagination',
            clickable: true,
        },
    });
    // MO 세일 : 특가 상품 슬라이드
    document.querySelector('.benefits-topbanner-swiper_mo') && Array.prototype.forEach.call(document.querySelectorAll('.benefits-topbanner-swiper_mo'), el => {
        el.querySelector('.swiper-wrapper') && setSwiper({target: el, autoplay: 5000, pagination: '.swiper-pagination', paginationType: 'fraction'});
    });
    // MO 세일 : 특가 상품 슬라이드
    document.querySelector('.specials_products_swiper_mo') && Array.prototype.forEach.call(document.querySelectorAll('.specials_products_swiper_mo'), el => {
        el.querySelectorAll('.swiper-slide').length > 2 && el.querySelector('.swiper-wrapper') && setSwiper({target: el, autoplay: 5000, gap: 8, offset: 20, viewNum: 'auto'});
        el.querySelectorAll('.swiper-slide').length <= 2 && el.classList.add('no-swiper')
    });
    // MO 세일 : 특가 브랜드 슬라이드
    document.querySelector('.specials_brands_swiper_mo') && Array.prototype.forEach.call(document.querySelectorAll('.specials_brands_swiper_mo'), el => {
        el.querySelectorAll('.swiper-slide').length > 2 && el.querySelector(' .swiper-wrapper') && setSwiper({target: el, autoplay: 5000, gap: 8, offset: 20, viewNum: 'auto'});
        el.querySelectorAll('.swiper-slide').length <= 2 && el.classList.add('no-swiper')
    });
    // MO 세일 : h.share 슬라이드
    let swiperSpecialsHShare = new Swiper('.specials_h-share_swiper_mo', {
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakPoint: {
            600: {
                slidesPerView: 2,
            },
        }
    });

    document.body.removeAttribute('style');

    //세일상품 둘러보기 할인율 클릭효과
    document.querySelector('.search-round-data') && Array.prototype.forEach.call(document.querySelectorAll('.search-round-data'), el => {
        searchRoundBtn(el);
    });
    // main personal
    document.querySelector('.personal') && _mobile && setScreenSize();
    document.querySelector('.personal') && _mobile && window.addEventListener('resize', setScreenSize);
    // document.querySelector('.personal .benefits-slider') && mainBenefit();
    document.querySelector('.personal .ps_main_wrap') && mainScrollBenefit();
    // benefit swiper
    document.querySelector('.benefits-slider') && swiperBenefit('.benefits-slider');
    // 취향 선택
    document.querySelector("[data-role=curation]") && Array.prototype.forEach.call(document.querySelectorAll("[data-role=curation]"), el => {
        checkCuration(el);
    });
    // pc 메인 혜택 우측 float 메뉴
    document.querySelector('.float-benefit') && floatBenefitBtn(document.querySelector('.float-benefit'));
    // 오프라인 브랜드 이미지 확대 축소
    document.querySelector('.offline-brand-img') && offlineBrandZoom(document.querySelector('.offline-brand-img'))
    // 카테고리 펼침
    document.querySelector('.category-menu-one-depth-btn') && viewTopCategory(document.querySelector('.category-menu-one-depth-btn'));
    // pc main 무한롤링
    document.querySelector('[role="infinity"]') && Array.prototype.forEach.call(document.querySelectorAll('[role="infinity"]'), el => {
        infinityRolling(el);
    })
    // 레이어 팝업 창
    // document.querySelector('.box-float-layer .guidance-area') && Array.prototype.forEach.call(document.querySelectorAll('.box-float-layer .guidance-area'), el => {
    //     setLayHgt(el);
    // });
    document.querySelector('.box-float-layer .guidance-area') && Array.prototype.forEach.call(document.querySelectorAll('.box-float-layer .guidance-area'), el => {
        checkIntersectionOpserve(el);
    })
    // 상품 상세 더보기
    document.querySelector('.btn_more_box .btn_prodmore') && Array.prototype.forEach.call(document.querySelectorAll('.btn_more_box .btn_prodmore'), el => {
        openProdctDetail(el);
    });
    // h.share 그래프
    document.querySelector('.product__co-buying') && setShareGraph('.product__co-buying');
    // 상품상세 포토리뷰 swiper
    document.querySelector('.swiper-detail-photo') && Array.prototype.forEach.call(document.querySelectorAll('.swiper-detail-photo'), el => {
        new Swiper(el, {
			slidesPerView: 1,
			pagination: {
				el: '.pagination-fraction',
				type:'fraction'
			}
		})
	})

	/* S: 2024-05-14 첫구매딜 신규 */
	let setFirstDealSlider = new Swiper('.sale__first-deal', {
		spaceBetween: 20,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.sale__first-deal .swiper-pagination',
			clickable: true,
		},
		breakPoint: {
			600: {
				slidesPerView: 2,
			},
		}
	});
	/* E: 2024-05-14 첫구매딜 신규 */
    
	//_mobile && document.querySelector('.saerch-result-content .list-product__searchlist') && resetPosSearchResult(document.querySelector('.saerch-result-content .list-product__searchlist'));
    
    ezwelHeader(); //2023-12-27 이지웰 헤더
	document.querySelector('.searchLayer') && checkIntersectionOpserve(document.querySelector('.searchLayer')); // 20231225
	/* 20231226 */
    document.querySelector('.wrap-timepicker') && Array.prototype.forEach.call(document.querySelectorAll('.wrap-timepicker'), el => {
        el.addEventListener('click', () => {
            wrapTimePicker(el);
        });
    });
    
    levelExpect(); //2024-05-29 예상등급 추가(마이현대 메인)
    floatBenefitColor(); //2024-01-10 큐레이션 숨겨진 혜택 배경색 추가
    filterPosition(); //2024-02-26 필터 검색 후 화면이동
    fileAtached(); //2024-04-02 입점 및 제휴문의
    listContact(); //2024-04-02 입점 및 제휴문의
});
//addEventListener 끝

// 슬라이드 다운
function viewSlideCont({base, btn, target}) {
    const _base = typeof base === 'string' ? document.querySelector(base) : base;
    const _target = typeof target == 'string' ? document.querySelector(target) : target;
    const _btn = typeof btn === 'string' ? document.querySelector(btn) : btn;
    _btn && _btn.addEventListener('click', () => {
        if (!_base.classList.contains('active')) {
            _btn.setAttribute('aria-expanded', true);
            elSlideDown({base: _base, btn: _btn, target: _target, cls: 'active', execute: true, is: 'ing'});
        } else {
            _btn.setAttribute('aria-expanded', false);
            elSlideDown({base: _base, btn: _btn, target: _target, cls: 'active', execute: false, is: 'ing'});
        }
    })
}
// 툴팁 20230713 수정
function viewTooltip(btn) {
    const _target = btn.parentNode.querySelector('.wrap-tooltip__content');
    btn.addEventListener('click', () => {
        const _top = btn.getBoundingClientRect().top;
        const _left = btn.getBoundingClientRect().left;
        // 레이어 경우 top 사용 안함
        if (!btn.closest('.layer-dim')) {
            _target.style.top = `${_top + 30}px`;
        }
        // 모바일, 레이어 경우 left 사용 안함
        if (!_mobile && !btn.closest('.layer-dim')) {
            _target.style.left = `${_left}px`;
        }
        _target.classList.add('active');
    });
    _target.querySelector('.btn-close').addEventListener('click', () => {
        _target.classList.remove('active');
    });
    window.addEventListener('scroll', () => {
        //20231205
		_target.getAttribute('style') && _target.removeAttribute('style');
		if (!_target.classList.contains('active')) {
		  return;
	  }
	  _target.classList.remove('active');
    })
}
// body freeze
function bodyFreeze(freeze) {
    const scrollFreeze = () => {
        document.body.style.overscrollBehaviorY = 'contains';
        document.querySelector('html').style.height = '100%';
        document.querySelector('html').style.overflow = 'hidden';
    }
    if (!freeze) {
        document.body.removeAttribute('style');
        document.querySelector('html').removeAttribute('style');
        document.body.classList.remove('is-dimmed');
    } else {
        scrollFreeze();
        document.body.classList.add('is-dimmed');
    }
}
// 상품 삭제 팝업
function deleteConfirm(txt) {
    bodyFreeze('freeze');
    const _layer = document.createElement('div');
    _layer.className = 'layer-dim';
    _layer.innerHTML = `
        <div class="box-confirm-layer type-delete active">
            <div class="txt-cont">${txt ? txt : '상품을 삭제하시겠습니까'}</div>
            <ul class="list-btn">
                <li><button type="button" class="btn-cancle">취소</button></li>
                <li><button type="button" class="btn-confirm">확인</button></li>
            </ul>
        </div>
    `;
    document.body.append(_layer);

    _layer.querySelector('.btn-cancle').addEventListener('click', function() {
        bodyFreeze();
        _layer.remove();
    });
    _layer.querySelector('.btn-confirm').addEventListener('click', function() {
        bodyFreeze();
        _layer.remove();
        viewConfirmTxt('삭제되었습니다.'); // 삭제 확인 문구
    })
    _layer.addEventListener('click', (e) => {
        const _cls = _layer.firstElementChild.getAttribute('class').replace('active', '').trim().split(' ').join('.');
        const _target = e.target.closest(`.${_cls}`);
        if (document.body.classList.contains('is-dimmed') && !_target) {
            bodyFreeze();
            _layer.remove();
        }
    })
}
// 확인메세지
function viewConfirmTxt(txt) {
	document.querySelector('.txt-confirm-message') && document.querySelector('.txt-confirm-message').remove(); // 20231205
    const _txt = document.createElement('div');
    _txt.className = 'txt-confirm-message';
    _txt.innerHTML = txt;
    const _hasDim = document.body.classList.contains('is-dimmed');
    document.body.append(_txt);
    setTimeout(() => {
        !_hasDim && bodyFreeze();
        _txt.remove();
    }, 1500);
}
// data-role 버튼 열기 20230713 수정
function openEl(el) {
    if (!el.dataset) {
        return;
    }
    const _dataSet = el.dataset.role.replace('open__', '');
    const _targetName = ctx_shop+`/${_dataSet}`;

    el.addEventListener('click', e => {
        e.preventDefault();
        fetch(_targetName)
            .then(res => {
                if (!res.ok){
                    throw new Error;
                }
                return res.text()
            })
            .then(res => {
                makeLayer(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
    );
    // 팝업 높이값 만들기
    const setHgt = (layer) => {
        const _hgt = window.innerHeight;
        const _child = layer.querySelector('.download-coupon') ? layer.querySelector('.download-coupon') : layer.firstElementChild;
        const _baseHgt = 60;
        let _excHgt = 0;
        if (_child.clientHeight === 0 || !layer.querySelector('.area-scroll')) {
            return;
        }
        
        const _scrolls = layer.querySelectorAll('.area-scroll');
        const _setHgtTargets = Array.prototype.map.call(_scrolls, el => {
            return el.parentNode.classList.contains('download-coupon') ? el.parentNode : el;
        });
        const _scrollHgt = _setHgtTargets[0].scrollHeight;

        if ((_hgt - _baseHgt) < _child.clientHeight) {
            _child.style.transitionDuration = '0s';
            _child.style.height = `${_hgt - _baseHgt}px`;
        }
        
        _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('[data-scroll="exc"]'), (acc, el) => {
            return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
        }, 0);
        const _layerExc = parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-bottom'));
        const _scrollExc = parseInt(window.getComputedStyle(_setHgtTargets[0]).getPropertyValue('margin-top'));
        const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc;
        
        if (layer.querySelector('[data-scroll="exc"]') && _computedHgt <= _child.clientHeight) {
            Array.prototype.forEach.call(_setHgtTargets, el => {
                // 20230802 수정
                if (_computedHgt > _scrollHgt && !layer.querySelector('.wrap-search-sch')) {
                    el.style.height = `${_scrollHgt}px`;
                } else {
                    el.style.height = `${_computedHgt}px`;
                }
            })
        }
        // Array.prototype.forEach.call(_setHgtTargets, el => {
        //     if (el.clientHeight >= el.scrollHeight) {
        //         el.style.height = `${el.clientHeight}px`
        //         el.classList.add('no-scroll');
        //     }
        // });
        // 수량 변경 레이어 area-scroll 높이 설정
        /* if (layer.querySelector('.wrap-option-change')) {
            layer.querySelector('.area-scroll').style.height = `${_hgt - 605}px`;
        } */
    }
    // mo 팝업 높이값 만들기 20230725 추가
    const setMoHgt = (layer) => {
        const _hgt = window.innerHeight;
        const _child = layer.querySelector('.download-coupon') ? layer.querySelector('.download-coupon') : layer.firstElementChild;
        const _baseHgt = 44;
        let _excHgt = 0;
        if (_child.clientHeight === 0 || !layer.querySelector('.area-scroll')) {
            return;
        }
        
        const _scrolls = layer.querySelectorAll('.area-scroll');
        const _setHgtTargets = Array.prototype.map.call(_scrolls, el => {
            return el.parentNode.classList.contains('download-coupon') ? el.parentNode : el;
        });
        const _scrollHgt = _setHgtTargets[0].scrollHeight;

        if ((_hgt - _baseHgt) < _child.clientHeight) {
            _child.style.transitionDuration = '0s';
            _child.style.height = `${_hgt - _baseHgt}px`;
        }
        
        _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('[data-scroll="exc"]'), (acc, el) => {
            return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
        }, 0);
        const _layerExc = parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-bottom'));
        const _scrollExc = parseInt(window.getComputedStyle(_setHgtTargets[0]).getPropertyValue('margin-top'));
        const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc - 12;
        
        if (layer.querySelector('[data-scroll="exc"]') && _computedHgt <= _child.clientHeight) {
            Array.prototype.forEach.call(_setHgtTargets, el => {
                if (_computedHgt > _scrollHgt && !layer.querySelector('.wrap-search-sch')) {
                    el.style.height = `${_scrollHgt}px`;
                } else {
                    el.style.height = `${_computedHgt}px`;
                }
            })
        }
    }
    // 레이어 만들기
    const makeLayer = (res) => {
        document.querySelector('.layer-dim') && document.querySelector('.layer-dim').remove(); //20230726 수정
        const _layer = document.createElement('div');
        _layer.className = 'layer-dim';
        _layer.innerHTML = res;
        $('body').append(_layer); // 20230720 수정
        // document.body.append(_layer);
        setTimeout(() => {
            _layer.querySelector('div').classList.add('active');
            const _dim = _layer.querySelector('[data-dim]') && _layer.querySelector('[data-dim]').dataset.dim;
            bodyFreeze(`${_dim ? 'freeze' : ''}`);
            // 레이어 높이값 설정
            !_mobile && setHgt(_layer);
            _mobile && setMoHgt(_layer); //20230725 수정
        }, 100);
        // 최저가 엿보기
        document.querySelector('.wrap-payment-cart .bottom-price__detail') && viewSlideCont({base: '.wrap-payment-cart .bottom-price__detail', btn: '.wrap-payment-cart .bottom-price__open button'});
        document.querySelector('.wrap-payment-cart .list-bottom-price') && viewSlideCont({base: '.wrap-payment-cart .list-bottom-price .list-bottom-price--detail', btn: '.wrap-payment-cart .list-bottom-price > li .bottom-price__item button'});
        // 레이어 닫기
        const closeLayer = () => {
            _layer.querySelector('.active') && _layer.querySelector('.active').classList.remove('active');
            setTimeout(() => {
                bodyFreeze();
                _layer.remove();
            }, 10);
        }
        // 닫기 버튼 레이어 닫기
        _layer.querySelector('.btn-close-layer') && _layer.querySelector('.btn-close-layer').addEventListener('click', () => closeLayer())
        _layer.querySelector('[data-close="closeLayer"]') && _layer.querySelector('[data-close="closeLayer"]').addEventListener('click', () => closeLayer());
        // 딤 클릭 레이어 닫기
        _layer.addEventListener('click', (e) => {
            if (_layer.querySelector('.box-float-layer.type-close') || e.target.nodeName === 'INPUT' || e.target.nodeName === 'BUTTON' || e.target.nodeName === 'A' || e.target.nodeName === 'SELECT' || !_layer.firstElementChild.getAttribute('class')) {
                return;
            }
            const _cls = _layer.firstElementChild.getAttribute('class').replace('active', '').trim().split(' ').join('.');
            const _target = e.target.closest(`.${_cls}`);
            if (!e.target.classList.contains('type-del') && document.body.classList.contains('is-dimmed') && !_target) {
                closeLayer()
            }
        })
    }
}
// 모달 show/hide 20230724 추가 ex) viewInnerModal('#testId')
function viewInnerModal(id) {
    if (!$(id)) {
        return;
    }
    const _dim = $(`${id} [data-dim]`) && $(`${id} [data-dim]`).data('dim');
    
    const closeThisModal = () => {
        $(id).hide(
            {
                duration: 100,
                done: function() {
                    bodyFreeze();
                }
            }
        );
    }

    $('.btn-close-layer') && $('.btn-close-layer').on('click ', function() {
        closeThisModal();
        $(this).off('click');
    });

    if($(id).css("display") == "none"){
        $(id).show({
            duration: 100,
            done: function() {
                bodyFreeze(`${_dim ? 'freeze' : ''}`);
            }
        });
    }else{
        closeThisModal();
    }
}

//popup 오픈
function openEl2(data) {
    if(!data){
        return;
    }
    // 팝업 높이값 만들기
    const setHgt = (layer) => {
        const _hgt = window.innerHeight;
        const _child = layer.querySelector('.download-coupon') ? layer.querySelector('.download-coupon') : layer.firstElementChild;
        const _baseHgt = 60;
        let _excHgt = 0;
        if (_child.clientHeight === 0 || !layer.querySelector('.area-scroll')) {
            return;
        }

        const _scrolls = layer.querySelectorAll('.area-scroll');
        const _setHgtTargets = Array.prototype.map.call(_scrolls, el => {
            return el.parentNode.classList.contains('download-coupon') ? el.parentNode : el;
        });
        const _scrollHgt = _setHgtTargets[0].scrollHeight;

        if ((_hgt - _baseHgt) < _child.clientHeight) {
            _child.style.transitionDuration = '0s';
            _child.style.height = `${_hgt - _baseHgt}px`;
        }

        _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('[data-scroll="exc"]'), (acc, el) => {
            return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
        }, 0);
        const _layerExc = parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-bottom'));
        const _scrollExc = parseInt(window.getComputedStyle(_setHgtTargets[0]).getPropertyValue('margin-top'));
        const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc;

        if (layer.querySelector('[data-scroll="exc"]') && _computedHgt <= _child.clientHeight) {
            Array.prototype.forEach.call(_setHgtTargets, el => {
                if (_computedHgt > _scrollHgt && !layer.querySelector('.wrap-search-sch')) {
                    el.style.height = `${_scrollHgt}px`;
                } else {
                    el.style.height = `${_computedHgt}px`;
                }
            })
        } else {
            if (layer.querySelector('.download-coupon')) {
                layer.querySelector('.download-coupon').style.height = _child.clientHeight < 400 ? '400px' : `${_child.clientHeight}px`; //20231206
            }
        }
        // Array.prototype.forEach.call(_setHgtTargets, el => {
        //     if (el.clientHeight >= el.scrollHeight) {
        //         el.style.height = `${el.clientHeight}px`
        //         el.classList.add('no-scroll');
        //     }
        // });
        // 수량 변경 레이어 area-scroll 높이 설정
        /* if (layer.querySelector('.wrap-option-change')) {
            layer.querySelector('.area-scroll').style.height = `${_hgt - 605}px`;
        } */
    }
    // 레이어 만들기
    const makeLayer = (res) => {
        const _layer = document.createElement('div');
        _layer.className = 'layer-dim';
        $(_layer).html(res);
        $("body").append(_layer);
        setTimeout(() => {
            _layer.querySelector('div').classList.add('active');
            const _dim = _layer.querySelector('[data-dim]') && _layer.querySelector('[data-dim]').dataset.dim;
            bodyFreeze(`${_dim ? 'freeze' : ''}`);
            // 레이어 높이값 설정
            !_mobile && setHgt(_layer);
        }, 100);
        // 최저가 엿보기
        //document.querySelector('.wrap-payment-cart .bottom-price__detail') && viewSlideCont({base: '.wrap-payment-cart .bottom-price__detail', btn: '.wrap-payment-cart .bottom-price__open button'});
        //document.querySelector('.wrap-payment-cart .list-bottom-price') && viewSlideCont({base: '.wrap-payment-cart .list-bottom-price .list-bottom-price--detail', btn: '.wrap-payment-cart .list-bottom-price > li .bottom-price__item button'});
        // 레이어 닫기
        const closeLayer = () => {
            _layer.querySelector('.active') && _layer.querySelector('.active').classList.remove('active');
            setTimeout(() => {
                bodyFreeze();
                _layer.remove();
                if(tmpHtmlDiv){closeElPop();}
            }, 10);
        }
        // 닫기 버튼 레이어 닫기
        _layer.querySelector('.btn-close-layer') && _layer.querySelector('.btn-close-layer').addEventListener('click', () => closeLayer())
        _layer.querySelector('[data-close="closeLayer"]') && _layer.querySelector('[data-close="closeLayer"]').addEventListener('click', () => closeLayer());
        // 딤 클릭 레이어 닫기
        _layer.addEventListener('click', (e) => {
            if (_layer.querySelector('.box-float-layer.type-close') || e.target.nodeName === 'INPUT' || e.target.nodeName === 'BUTTON' || e.target.nodeName === 'A' || e.target.nodeName === 'SELECT' || !_layer.firstElementChild.getAttribute('class')) {
                return;
            }
            const _cls = _layer.firstElementChild.getAttribute('class').replace('active', '').trim().split(' ').join('.');
            const _target = e.target.closest(`.${_cls}`);
            if (document.body.classList.contains('is-dimmed') && !_target) {
                closeLayer()
            }
        })
    }
    makeLayer(data);
}

function closeEl(){
    bodyFreeze();
    $(".layer-dim").remove();
    if(tmpHtmlDiv){closeElPop();}
}

// 생성된 DIV 영역 팝업
var tmpHtmlDiv;
function showElPop(data){
    if(data){
        tmpHtmlDiv = data;
        const delTargetId = $(data).attr('id');
        $("#"+delTargetId).remove();

        openEl2(tmpHtmlDiv);
    }
}

function closeElPop(){
    if(tmpHtmlDiv){
        $("body").append(tmpHtmlDiv);
        tmpHtmlDiv = "";
    }
}
// 품절삭제 체크박스 20230726 추가
function changeSoldOut(inp) {
    const _target = document.querySelector('.btn-del__sold-out');
    if (!_target) {
        return;
    }
    inp.addEventListener('change', (e) => {
        if (inp.checked) {
            _target.innerHTML = '선택삭제';
        } else {
            _target.innerHTML = '품절삭제';
        }
    })
}
// 주문창 여부
function setPadBot(target) {
    const _hgt = target.clientHeight + 20;
    const _base = document.querySelector('.area-cart') ? document.querySelector('.area-cart') : document.querySelector('.wrap-cart');
    if (!_base) {
        return;
    }
    _base.style.paddingBottom = `${_hgt}px`;
}

//2023 개선 order
// 레이어 탭 리스트, 팝업 열기 등 mutation observer
function checkLayer() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach( mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach( el => {
                    if (!el.querySelector) {
                        return;
                    }
                    // 탭 적용
                    if (el.querySelector('[role=tablist]')) {
                        const _cls = `.${el.querySelector('.box-float-layer').className.split(' ').join('.')}`;
                        setTab(_cls);
                    }
                    // 팝업 열기
                    if (el.querySelector('[data-role*="open__"]')) {
                        openEl(el.querySelector('[data-role*="open__"]'));
                    }
                    // 기간 카렌다 기본 날짜 넣기 20230802 추가
                    if (el.querySelector('[data-role="calendarData"], [data-role="calendarDpat"]')) {
                        periodCalendar(el.querySelectorAll('[data-role="calendarData"], [data-role="calendarDpat"]'));
                    }
                    // calendaer 20230802 수정
                    if (el.querySelector('.choice-date-single')) {
                        Array.prototype.forEach.call(el.querySelectorAll('[data-role="calendar"]'), inp => {
                            const type = inp.dataset.calendarType;
                            inp.addEventListener('click', function(e) {
                                setCalendar({target: inp, type, multi: false});
                            });
                        });
                    }
                    // 1, 3, 6개월 기간 선택
                    if (el.querySelector('[data-role="period-calendar"]')) {
                        Array.prototype.forEach.call(el.querySelectorAll('.list-order__head.type-order-history [data-role="period-calendar"]'), el => {
                            changePeriodCalendar(el.closest('.list-order__head.type-order-history'));
                        });
                    }
                    // tooltip
                    if (el.querySelector('.btn-tooltip')) {
                        Array.prototype.forEach.call(el.querySelectorAll('.btn-tooltip'), el => {
                            viewTooltip(el);
                        });
                    }
                    // accordion
                    if (el.querySelector('[aria-expanded]')) {
						if (!el.querySelector('[role=region]')) {
							return;
						}
                        const cls = el.querySelector('[role=region]').className.split(' ').filter(el => el !== '').join('.'); //20231205
                        setAccordion(`.${cls}`);
                    }
                    // input 삭제 버튼
                    if (el.querySelector('.wrap-form__input, .form_cont') && !document.querySelector('body').querySelector('.type-order-payment.cart__content')){ //20231206
                        Array.prototype.forEach.call(document.querySelectorAll('.wrap-form__input, .form_cont'), el => {
                            // el.addEventListener('focusin', viewDel);
                            el.addEventListener('input', disableDel);
                            // el.addEventListener('focusout', removeDel);
                        });
                    }
                    // select box 
                    if (el.querySelector('.wrap-form__select select, .form_cont select, .wrap-select select, .temp_opt select')) {
                        Array.prototype.forEach.call(document.querySelectorAll('.wrap-form__select, .form_cont, .wrap-select, .temp_opt'), el => {
                            if (!el.closest('.type-order-payment.cart__content')) {
                                el.querySelector('select') && setSelectBox(el);
                            }
                        });
                    }
                    // modal close
                    // 모달창 닫기
                    if (el.classList.contains('layer-dim')) {
                        closeModalSwipe({base: el, cls: '.box-bottom-float', checkBody: true});
                    }
                });
            }
        });
    });
      
      // observe everything except attributes
      observer.observe(document.body, {
        childList: true, // observe direct children
        subtree: true, // and lower descendants too
        characterDataOldValue: true // pass old data to callback
      });
    
}
// 날짜 변환
function changeValDate(val) {
    const _join = val.split('-').map(num => parseInt(num)).join('/');
    return `${_join} 00:00:00`;
}
// 날짜 선택용 카렌다 만들기 //20230803 수정
function setCalendar({target, type, multi}) {
    if (document.querySelector('.wrap-calendar')) {
        return;
    }
    document.querySelector('.area-calendar') && document.querySelector('.area-calendar').remove();
    let _calendar = '';
    const _html = `
    ${_mobile ? '<div class="wrap-calendar__inner"><div class="btn-close-layer type-bar"><button type="button" class="conditiontton">레이어 닫기</button></div>' : ''}
    ${_mobile && target.title ? `<h3 class="tit-calendar">${target.title}</h3>` : ''}
    <div class="area-calendar">
        <div class="area-year-month">
            <p class="btn-prev"><button type="button">이전 달</button></p>
            <p class="wrap-year-month"><span class="txt-year"></span><span class="txt-month"></span></p>
            <p class="btn-next"><button type="button">다음 달</button></p>
        </div>
        <div class="wrap-calendar-day">
            <div class="wrap-week">
                <p class="day-sunday">일</p>
                <p class="day-week">월</p>
                <p class="day-week">화</p>
                <p class="day-week">수</p>
                <p class="day-week">목</p>
                <p class="day-week">금</p>
                <p class="day-saturday">토</p>
            </div>
            <div class="wrap-day">
            </div>
        </div>
    </div>
    ${_mobile ? `<button type="button" class="btn-square type-full type-dark-1 size-1">적용</button></div>` : ''}
    `;
    const _alertTxt = `<div class="box-confirm-layer m_popup_renew">
            <div class="confirm_group">
                <div class="confirm_tit">
                    <p>날짜를 선택해 주세요.</p>
                </div>
            </div>
            <div class="float_btn">
                <ul class="list-btn">
                    <li><button type="button" class="btn_confirm">확인</button></li>
                </ul>
            </div>
        </div>`;

    const _period = target.dataset.period;
    const _last = target.closest('[data-role="period-calendar"]') && target.closest('[data-role="period-calendar"]').querySelector('[data-today="0"]');
    const _base = target.parentNode;
    const _value = target.parentNode.querySelector('input').value;
    const rToday = new Date();
    rToday.setHours(0, 0, 0, 0);
    let today = new Date();
    today = type === 'birthday' ? new Date(today.getFullYear() - 19,0,1) : !!_value && _period !== 'end' && new Date(_value) <= today ? new Date(changeValDate(_value)) : today;
    const _selectedDay = !multi ?  {start: ''} : {start: '', end: ''};
    const scheduledDay = _value && new Date(changeValDate(_value)) <= today && _period === 'start' ? new Date(changeValDate(_last.value)) : today;
    const valDay = _value ? new Date(changeValDate(_value)) : today;
    let curDay = _value ? new Date(changeValDate(_value)) : today; // value 있으면 value 날짜로 아니면 현재 날짜

    // 카렌다 만들기
    const makeCalendar = () => {
        // _calendar && _calendar.querySelector('.area-calendar') && _calendar.querySelector('.area-calendar').remove();
        const firstDay = new Date(curDay.getFullYear(), curDay.getMonth(), 1);
        const lastDay = new Date(curDay.getFullYear(), curDay.getMonth() + 1, 0);
        const top = target.getBoundingClientRect().top + target.clientHeight;
        const left = _mobile ? '' : target.getBoundingClientRect().left;
        
        _calendar = _calendar ? _calendar : document.createElement('div');
        _calendar.innerHTML = _html;
        _calendar.classList.add('wrap-calendar');
        _mobile && _calendar.setAttribute('data-dim', true);
        curDay.setHours(0, 0, 0, 0);
        _calendar.querySelector('.wrap-day').innerHTML = '';
        _calendar.querySelector('.wrap-year-month .txt-year').innerHTML = `<button type-"button" class="btn-choice type-year">${curDay.getFullYear()}년</button>`;
        _calendar.querySelector('.wrap-year-month .txt-month').innerHTML = `<button type-"button" class="btn-choice type-month">${curDay.getMonth() + 1}월</button>`;
        !document.querySelector('.wrap-calendar') && document.body.append(_calendar);
        if (_mobile) {
            setTimeout(() => {
                !_calendar.classList.contains('is-active') && _calendar.classList.add('is-active');
            }, 10);
        } else {
            _calendar.querySelector('.area-calendar').style.top = `${top}px`;
            _calendar.querySelector('.area-calendar').style.left = `${left - 120}px`;
        }
        for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
            const _date = day.getDate();
            const _day = document.createElement('p');
            const _weekDay = day.getDay();

            // 첫번째 아이템 위치
            if (_date === 1) {
                _day.style.gridColumn = `${_weekDay + 1} / ${_weekDay + 2}`;
            }
            // 주말 체크
            if (_weekDay === 6) {
                _day.className = 'day-saturday';
            } else if (_weekDay === 0) {
                _day.className = 'day-sunday';
            }
            // 지난 날짜
            // if (day < scheduledDay && !type && type !== 'birthday' && !_value) {
            if (day < rToday && !type) {
                _day.classList.add('day-pass');
            }
            // 오늘 체크
            // if (day.getFullYear() === today.getFullYear() && day.getMonth() === today.getMonth() && day.getDate() === today.getDate()) {
            if (day.getFullYear() === rToday.getFullYear() && day.getMonth() === rToday.getMonth() && day.getDate() === rToday.getDate()) {
                _day.classList.add('day-today');
            }
            // 선택된 날짜 체크
            if (_value && day.getFullYear() === valDay.getFullYear() && day.getMonth() === valDay.getMonth() && day.getDate() === valDay.getDate()) {
                _day.classList.add('is-selected');
            }

            // 지난 날짜는 텍스트만, 오늘 이후 날짜 버튼 추가
            // _day.innerHTML = (day < scheduledDay && !type ? _date : `<button type="button" data-date="${day}">${_date}</button>`);
            _day.innerHTML = (day < rToday && !type ? _date : `<button type="button" data-date="${day}">${_date}</button>`);
            // 버튼 클릭 액션
            _day.querySelector('button') && _day.querySelector('button').addEventListener('click', e => {
                selectDay(e); // 날짜 선택
                type === 'history' && resetChoiceMonth(target.dataset.period); // 개월선택 라디오 초기화
            })
            _calendar.querySelector('.wrap-day').append(_day);
        }
        // 바탕 클릭 창 닫기
        _calendar.addEventListener('click', e => {
            if (e.target.nodeName === 'BUTTON') {
                return;
            }
            !e.target.classList.contains('choice-btn') && !e.target.closest(`.area-calendar`) && closeCalendar();
        })
        _calendar.querySelector('.btn-close-layer button') && _calendar.querySelector('.btn-close-layer button').addEventListener('click', () => {
            closeCalendar();
        });
        !_mobile && document.addEventListener('scroll', () => {
            if (_calendar) {
                _calendar.querySelector('.area-calendar').style.top = `${target.getBoundingClientRect().top + target.clientHeight}px`;
            }
        });
        _mobile && moChoiceMonth();
        choiceMonth(); // 달 선택
        choiceJump() // 년, 월 선택
    }
    // 년, 월 선택
    const choiceJump = () => {
        Array.prototype.forEach.call(_calendar.querySelectorAll('.wrap-year-month .btn-choice'), btn => {
            btn.addEventListener('click', (e) => {
                if (btn.classList.contains('is-choice')) {
                    return;
                }
                const _isYear = e.target.classList.contains('type-year') ? true : false;
                const _removeDim = document.createElement('div');
                const _wrapCont = document.createElement('div');
                const _wrapList = document.createElement('ul');
                _removeDim.className = 'remove-dim choice-btn';
                _wrapCont.className = 'wrap-list-dropdown is-active';
                btn.classList.contains('type-month') && _wrapCont.classList.add('type-month');
                btn.classList.add('is-choice');
                _wrapList.className = 'list-dropdown';
                const _yearStart = type === 'history' ? today.getFullYear() - 10 : type === 'birthday' ? today.getFullYear() - 50 : today.getFullYear();
                const _yearEnd = type === 'history' ? today.getFullYear() + 11 : type === 'birthday' ? today.getFullYear() + 51 : today.getFullYear() + 11;
                const _start = _isYear ? _yearStart : 1;
                const _end = _isYear ? _yearEnd : 13;
                const _unitHgt = _mobile ? 40 : 30;
                // 년, 월선택 값 넣기
                for (let i = _start; i < _end; i++) {
                    const _li = document.createElement('li');
                    const _btn = document.createElement('button');
                    _btn.setAttribute('type', 'button');
                    _btn.className = 'choice-btn';
                    _btn.dataset.year = i;
                    _btn.innerHTML = i;
                    if (_isYear) {
                        i === today.getFullYear() && _li.classList.add('is-selected');
                    } else {
                        i === today.getMonth() + 1 && _li.classList.add('is-selected');
                    }
                    _li.append(_btn);
                    _wrapList.append(_li);
                    _btn.addEventListener('click', () => {
                        curDay = _isYear ? new Date(_btn.dataset.year, curDay.getMonth(), curDay.getDate()) : new Date(curDay.getFullYear(), _btn.dataset.year - 1, curDay.getDate());
                        makeCalendar();
                        _wrapCont.remove();
                        _removeDim.remove();
                    })
                }
                // 년, 달 선택 레이어 특정 위치로 이동
                setTimeout(() => {
                    const _num = _isYear ? _wrapList.querySelector('.is-selected button').dataset.year - _yearStart : _wrapList.querySelector('.is-selected button').dataset.month - _yearStart;
                    _wrapList.scrollTop = _num * _unitHgt;
                }, 10);
                _wrapCont.append(_wrapList);
                _calendar.querySelector('.wrap-year-month').append(_removeDim);
                _calendar.querySelector('.wrap-year-month').append(_wrapCont);
                _removeDim.addEventListener('click', () => {
                    _wrapCont.remove();
                    _removeDim.remove();
                    btn.classList.contains('is-choice') && btn.classList.remove('is-choice');
                })
            })
        })
    }
    // 날짜 선택
    const selectDay = (e) => {
        const _day = new Date(e.target.dataset.date);
        const _dayTrans = `${_day.getFullYear()}-${_day.getMonth() + 1 < 10 ? `0${_day.getMonth() + 1}` : `${_day.getMonth() + 1}`}-${_day.getDate() < 10 ? `0${_day.getDate()}` : `${_day.getDate()}`}`;

        if (!multi) {
            _selectedDay.start = _dayTrans;
            insertDate({target: e.target, end: 'end'});
            // _period === 'end' && checkPeriod(target);
            return;
        }
        if (_selectedDay.start !== '' && _selectedDay.end !== '') {
            _selectedDay.start = _dayTrans;
            _selectedDay.end = '';
            insertDate({target: e.target});
        } else if (_selectedDay.start > _dayTrans || _selectedDay.start === '') {
            _selectedDay.start = _dayTrans;
            insertDate({target: e.target});
        } else if (_selectedDay.end === '') {
            _selectedDay.end = _dayTrans;
            insertDate({target: e.target, end: 'end'});
        }
    }
    // 날짜 입력
    const insertDate = ({target, end, exc}) => {
        // const _inp = type === 'single' ? [_base.querySelector('input')] : [_base.querySelector('.start-calendar'), _base.querySelector('.end-calendar')]
        const _inp = [_base.querySelector('input')];
        _calendar.querySelector('.is-selected') && _calendar.querySelector('.is-selected').classList.remove('is-selected');
        target && target.parentNode.classList.add('is-selected');
        // end && target.parentNode.classList.add('is-selected-end'); // 멀티일 경우 두번째 날짜
        if (_mobile && !exc) {
            return;
        }
        end && Object.values(_selectedDay).forEach((el, idx) => {
            //mo
            if (_inp[idx].dataset.type === 'pspt') {
                getPstpExpiDt(el);
            }
            _inp[idx].value = el;
            _inp[idx].dispatchEvent(new Event('change'));
        });
        end && closeCalendar();
    }
    // 달 선택
    const choiceMonth = () => {
        _calendar.querySelector('.area-year-month .btn-prev button').addEventListener('click', () => {
            curDay = new Date(curDay.getFullYear(), curDay.getMonth() - 1, 1);
            makeCalendar();
        });
        _calendar.querySelector('.area-year-month .btn-next button').addEventListener('click', () => {
            curDay = new Date(curDay.getFullYear(), curDay.getMonth() + 1, 1);
            makeCalendar();
        });
    }
    // 모바일 alert
    const makeAlert = () => {
        const _alert = document.createElement('div');
        _alert.className = 'alert-modal';
        _alert.innerHTML = _alertTxt;
        document.body.append(_alert);
        _alert.querySelector('button').addEventListener('click', () => {
            _alert.remove();
        })
    }
    // 모바일 달력 날짜 선택 적용
    const moChoiceMonth = () => {
        _calendar.querySelector('.btn-square').addEventListener('click', () => {
            if (!_selectedDay.start) {
                makeAlert();
                return;
            } else {
                insertDate({end: true, exc: true});
                closeCalendar();
            }
        })
    }
    // 달력 닫기
    const closeCalendar = () => {
        _calendar && _calendar.remove();
        _calendar = null;
    }
    // 개월선택 라디오 초기화
    const resetChoiceMonth = (type) => {
        const _wrap = _base.closest('.order-history__group');
        const _radios = _wrap.querySelector('.wrap-btn');
        _radios.querySelector('input:checked').checked = false;
        _radios.querySelector('input').checked = true;
        // evtTrigger(_radios.querySelector('input'));
    }
    makeCalendar(); // 카렌더 만들기
}
// 기간 달력
function periodCalendar(calendars) {
    Array.prototype.forEach.call(calendars, (inp, idx) => {
        if (inp.dataset.type === 'history') {
            const _type = inp.dataset.role;
            const _num = _type === 'calendarData' ? -1 : 1;
            const today = new Date();
            const firstDay = _type === 'calendarData' ? new Date(today.getFullYear(), today.getMonth() - 3, today.getDate()) : today;
            const secondDay = _type === 'calendarData' ? today : new Date(today.getFullYear(), today.getMonth() + _num, today.getDate());
            idx % 2 === 0 && insertCurDate({target: inp, day: firstDay});
            idx % 2 !== 0 && insertCurDate({target: inp, day: secondDay});
        }
    });
    myOrderCalendar();//2024-07-10 마이현대 주문내역 달력 수정
}
// 달력 관련 날짜 넣기
function insertCurDate({target, day, num}) {
    const _year = day.getFullYear();
    const _month = day.getMonth() + 1 < 10 ? `0${day.getMonth() + 1}` : day.getMonth() + 1;
    const _day = day.getDate() < 10 ? `0${day.getDate()}` : day.getDate();
    const _inpuTxt = `${_year}-${_month}-${_day}`;
    target.value = _inpuTxt;
}
// 1, 3, 6개월 기간 선택 20230802 수정
function changePeriodCalendar(el) {
    if (!el.querySelector('input[name*="onthRadio"]')) {
        return;
    }
    const _inputs = el.querySelectorAll('input[name*="onthRadio"]');
    const _sequence = el.querySelectorAll('input[name*="tdCdRadio"]');
    const _calendars = el.querySelectorAll('[data-role="calendarData"], [data-role="calendarDpat"]');
    Array.prototype.forEach.call(_sequence, inp => {
        inp.addEventListener('change', () => {
            const _type = inp.value === 'order' ? 'calendarData' : 'calendarDpat';
            const _num = _type === 'calendarData' ? -1 : 1;
            const today = new Date();
            const _checked = el.querySelector('input[name*="onthRadio"]:checked').value;
            insetCalendarData(_type, today, (_num * _checked));
        })
    });
    Array.prototype.forEach.call(_inputs, inp => {
        inp.addEventListener('click', e => {
            const _type = _calendars[0].dataset.role;
            const _num = _type === 'calendarData' ? Number((e.target.value) * -1) : Number(e.target.value);
            const today = _type === 'calendarData' ? new Date(changeValDate(_calendars[1].value)) : new Date(changeValDate(_calendars[0].value));
            insetCalendarData(_type, today, _num);
        })
    });
    const insetCalendarData = (type, today, num) => {
        Array.prototype.forEach.call(_calendars, (calendar, idx) => {
            const firstDay = type === 'calendarData' ? new Date(today.getFullYear(), today.getMonth() + num, today.getDate()) : today;
            const secondDay = type === 'calendarData' ? today : new Date(today.getFullYear(), today.getMonth() + num, today.getDate());
            idx % 2 === 0 && insertCurDate({target: calendar, day: firstDay});
            idx % 2 !== 0 && insertCurDate({target: calendar, day: secondDay});
        });
    }
}
//2024-07-10 마이현대 주문내역 달력 수정
function myOrderCalendar() {
	let onlineMonVal = $("#onMonthSpan").attr("data");
	let offlineMonVal = $("#offMonthSpan").attr("data");
	
	if (onlineMonVal != "3") {
		let startDate = $(".wrap-order-history #mainForm #stDt").val();
		let endtDate = $(".wrap-order-history #mainForm #endDt").val();
		
		if (startDate != "" ) {
			$("#onlineFilter .wrap-form__calendar input[name='online-calendar-1-1']").val(startDate);
		}
		if (endtDate != "" ) {
			$("#onlineFilter .wrap-form__calendar input[name='online-calendar-1-2']").val(endtDate);
		}
	}

	
	if (offlineMonVal != "3") {
		let startDate = $(".wrap-order-history #mainForm #stDt").val();
		let endtDate = $(".wrap-order-history #mainForm #endDt").val();
		
		if (startDate != "" ) {
			$("#offlineFilter .wrap-form__calendar input[name='online-calendar-1-1']").val(startDate);
		}
		if (endtDate != "" ) {
			$("#offlineFilter .wrap-form__calendar input[name='online-calendar-1-2']").val(endtDate);
		}
	}
}

// input del button 20230802 수정
function viewDel(e) {
    if (e.target.getAttribute('type') === 'checkbox' || e.target.getAttribute('type') === 'radio' || e.target.getAttribute('type') === 'button' || e.target.nodeName === 'SELECT' || e.target.nodeName === 'A') {
        return;
    }
    const inp = e.target;
    const _base = inp.closest('.wrap-form__input, .form_cont');
    const checkIsBtn = () => {
        const _btns = _base.querySelectorAll('button, p, .timer, .remain-date'); //20230802
        const _wids = Array.prototype.reduce.call(_btns, (acc, el) => {
            return acc + (el.classList.contains('txt-error') ? 0 : el.clientWidth === 0 ? 0 : parseInt(el.clientWidth + 8));
        }, 0);
        return _wids;
    }
    const makeDel = () => {
        const _right = checkIsBtn();
        const btn = document.createElement('button');
        _base.classList.add('is-change');
        btn.className = 'btn-circle type-del';
        btn.innerHTML = '삭제';
        _base.append(btn);
        btn.style.right = `${_right === 0 ? 12 : _right}px`;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            _base.classList.contains('is-change') && _base.classList.remove('is-change');
            inp.value = '';
            _base.querySelector('.btn-square') && _base.querySelector('.btn-square').dataset.role !== 'allSearch' && _base.querySelector('.btn-square').setAttribute('disabled', '');
            btn.remove();
        })
    }
    !_base.classList.contains('is-change') && makeDel();
    if (inp.value !== '') {
        _base.querySelector('.btn-square') && _base.querySelector('.btn-square').dataset.role !== 'allSearch' && _base.querySelector('.btn-square').removeAttribute('disabled');
    } else {
        _base.querySelector('.btn-square') && _base.querySelector('.btn-square').dataset.role !== 'allSearch' && _base.querySelector('.btn-square').setAttribute('disabled', '');
    }
}
function removeDel(e) {
    setTimeout(() => {
        if (e.target.getAttribute('type') === 'checkbox' || e.target.getAttribute('type') === 'radio' || e.target.getAttribute('type') === 'button' || e.target.nodeName === 'SELECT' || e.target.nodeName === 'A') {
            return;
        }
        const inp = e.target;
        const _base = inp.closest('.wrap-form__input, .form_cont');
        const btn = _base ? _base.querySelector('.type-del') : '';
        _base ? _base.classList.contains('is-change') && _base.classList.remove('is-change') : '';
        btn ? btn.remove() : '';
    }, 200);
}
function disableDel(e) {
    if (e.target.getAttribute('type') === 'checkbox' || e.target.getAttribute('type') === 'radio' || e.target.getAttribute('type') === 'button' || e.target.nodeName === 'SELECT' || e.target.nodeName === 'A') {
        return;
    }
    const inp = e.target;
    const _base = inp.closest('.wrap-form__input, .form_cont');
    if (inp.value !== '') {
        _base.querySelector('.btn-square') && _base.querySelector('.btn-square').dataset.role !== 'allSearch' && _base.querySelector('.btn-square').removeAttribute('disabled');
    } else {
        _base.querySelector('.btn-square') && _base.querySelector('.btn-square').dataset.role !== 'allSearch' && _base.querySelector('.btn-square').setAttribute('disabled', '');
    }
}
// select value idx
function searchValOptIdx(target, val) {
    const _options = target.querySelectorAll('option');
    const _idx = Array.prototype.findIndex.call(_options, opt => {
        return opt.value === val;
    })
    if (_idx === -1) {
        return;
    }
    return _idx;
}
// select data insert
function setAttrData(target, data) {
    const _idx = searchValOptIdx(target, data);
    target.querySelector('option[selected]') && target.querySelector('option[selected]').removeAttribute('selected');
    target.querySelectorAll('option')[_idx] && target.querySelectorAll('option')[_idx].setAttribute('selected','');
}
// custom select box
function setSelectBox(el, pop) {
    // return;
    if (!el.querySelector('select')) {
        return;
    }
    const init = {
        posWrap: '',
        addWrap: '',
        listWrap: '',
        addSelect: '',
        addBtn: '',
        fakeBtn: '',
        selectBox: '',
        options: '',
        max: {num: 0, txt: ''},
        isFirst: false,
        cls: `dropdown_${parseInt(Math.random() * 1000000)}`
    }
    const searchValOpt = (val) => {
        const _idx = Array.prototype.findIndex.call(init.options, opt => {
            return opt.value === val;
        })
        if (_idx === -1) {
            return;
        }
        return init.options[_idx].text;
    }
    const makeSelect = () => {
        init.posWrap = document.createElement('div');
        init.addWrap = el.querySelector('.wrap-add-dropdown') ? el.querySelector('.wrap-add-dropdown') : document.createElement('div');
        init.listWrap = el.querySelector('.wrap-list-dropdown') ? el.querySelector('.wrap-list-dropdown') : document.createElement('div');
        init.addSelect = el.querySelector('.list-dropdown') ? el.querySelector('.list-dropdown') : document.createElement('ul');
        init.addBtn = el.querySelector('.btn-dropdown') ? el.querySelector('.btn-dropdown') : document.createElement('button');
        init.fakeBtn = el.querySelector('.fake-dropdown') ? el.querySelector('.fake-dropdown') : document.createElement('span');
        init.selectBox = el.querySelector('select');
        init.options = init.selectBox.querySelectorAll('option');

        if (el.querySelector('.wrap-add-dropdown')) {
            return;
        }
        init.posWrap.className = pop ? 'wrap-pos-add-dropdown type-modal' : 'wrap-pos-add-dropdown';
        // 20231004 modal용 수정
        if (el.closest('.box-bottom-float') || el.closest('.m_popup_renew')) {
            init.posWrap.classList.add('type-modal');
        }
        init.posWrap.classList.add(init.cls);
        init.addWrap.className = 'wrap-add-dropdown';
        init.listWrap.className = 'wrap-list-dropdown';
        init.addSelect.className = 'list-dropdown';
        init.addSelect.setAttribute('data-parentid', init.selectBox.id);
        init.addBtn.className = 'btn-dropdown'
        init.fakeBtn.className = 'fake-dropdown'
        init.addBtn.setAttribute('type', 'button');
        init.selectBox.disabled && init.addWrap.setAttribute('data-disabled', 'disabled');
        init.options.length === 0 && init.addWrap.setAttribute('data-disabled', 'disabled');
        init.addBtn.innerHTML = init.selectBox.value ? searchValOpt(init.selectBox.value) : init.options[0] ? init.options[0].text : '';
        if (init.selectBox.value || init.options[0] && init.options[0].value) {
            init.addBtn.classList.add('active');
        }
        init.addSelect.innerHTML = Array.prototype.reduce.call(init.options, (acc, option) => {
            if (option.text.length > init.max.num) {
                init.max.num = option.text.length;
                init.max.txt = option.text;
            }
            return acc += `<li ${init.selectBox.value === option.value ? 'class="is-selected"' : ''}><button type="button" data-value=${option.value} ${option.disabled ? 'data-disabled="disabled"' : ''}>${option.text}</button></li>`
        },'');

        init.fakeBtn.innerHTML = init.max.txt;
        init.addWrap.appendChild(init.fakeBtn);
        init.addWrap.appendChild(init.addBtn);
        init.listWrap.appendChild(init.addSelect);
        init.selectBox.insertAdjacentElement('afterend', init.addWrap);
        init.posWrap.append(init.listWrap);
        document.body.append(init.posWrap);
        el.classList.add('is-setted');
        selectData();
        init.addBtn.addEventListener('click', (e) => {
            if (!init.addWrap.classList.contains('active')) {
                const _cls = getPos({btn: init.addBtn, inner: init.listWrap, include: '.od_calc_wrap'});
                init.posWrap.classList.add(_cls);
				makeSelectPos(init.addWrap, init.posWrap, _cls);
				if (_cls.indexOf('up')) {
					init.posWrap.style.width = `${init.posWrap.dataset.wid}px`;
				}
                elSlideDown({base: init.addWrap, btn: init.addBtn, target: init.listWrap, cls: 'active', execute: true, is: 'ing'});
                !init.isFirst && setCloseSelect();
            } else {
                closeSelect();
            }
            window.addEventListener('scroll', () => {
                if (!init.addWrap.classList.contains('active')) {
                    return;
                }
                closeSelect(); // 20231204
                // makeSelectPos(init.addWrap, init.posWrap);// 20231204
            })
        });
    }
	// 닫기20231204
    const closeSelect = () => {
        elSlideDown({base: init.addWrap, btn: init.addBtn, target: init.listWrap, cls: 'active', execute: false, is: 'ing'});
        setTimeout(() => {
            init.posWrap.removeAttribute('style');
        }, 300);
    }
    // position 
    const makeSelectPos = (btn, target, type) => {
        const _type = type ? type : target.className;
        const _wid = btn.offsetWidth;
        const _hgt = _type.indexOf('direct-down') !== -1 ? btn.clientHeight : 0;
        const _addHgt = _type.indexOf('direct-down') !== -1 ? 8 : -8;
        const _top = btn.getBoundingClientRect().top + _hgt + _addHgt;
        const _left = btn.getBoundingClientRect().left;
		// target.style.width = `${_wid}px`; 20231206
		target.setAttribute('data-wid', _wid);
        target.style.top = `${_top}px`;
        target.style.left = `${_left}px`;
    }
    // select body click close
    const setCloseSelect = () => {
        init.isFirst = true;
        document.body.addEventListener('click', () => {
            if (!init.addWrap.classList.contains('active')) {
                return;
            }
            elSlideDown({base: init.addWrap, btn: init.addBtn, target: init.listWrap, cls: 'active', execute: false, is: 'ing'});
            setTimeout(() => {
                init.posWrap.removeAttribute('style');
                init.posWrap.classList.contains('direct-up') && init.posWrap.classList.remove('direct-up');
                init.posWrap.classList.contains('direct-down') && init.posWrap.classList.remove('direct-down');
            }, 300);
        })
    }
    // 드롭다운 메뉴 선택
    const selectData = () => {
        const datas = init.addSelect.querySelectorAll('button');
        Array.prototype.forEach.call(datas, (data, idx) => {
            data.addEventListener('click', e => {
                init.addSelect.querySelector('.is-selected') && init.addSelect.querySelector('.is-selected').classList.remove('is-selected');
                data.parentNode.classList.add('is-selected');
                init.addBtn.innerHTML = data.innerHTML;
                if (!!data.dataset.value) {
                    init.addBtn.classList.add('active');
                } else {
                    init.addBtn.classList.remove('active');
                }
                init.selectBox.querySelector(`option[selected]`) && init.selectBox.querySelector(`option[selected]`).removeAttribute('selected');
                init.options[idx].setAttribute('selected','');
                init.options[idx].selected = true;
                init.selectBox.value = init.options[idx].value;
                init.selectBox.dispatchEvent(new Event('change'));
                // selectClickEvent(datas);
            })
        })
    }
    // 열리는 방향
    const getPos = ({btn, inner, include}) => {
        if (!btn || !inner) {
            return;
        }
        inner.style.cssText = "display: block; opacity: 0; transition: all 0s";
        const _innerHgt = inner.clientHeight;
        inner.removeAttribute('style');
        const _include = include && document.querySelector(include) ? document.querySelector(include).clientHeight : 0;
        const _btnInfo = btn.getBoundingClientRect();
        const _winHgt = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
        const _direct = _winHgt - _include - _btnInfo.top < _innerHgt ? 'direct-up' : 'direct-down';
        // const _direct = _winHgt - _include - _btnInfo.top < _innerHgt ? false : true;
        return _direct;
    };
    // observe
    const optionObserve = () => {
        let observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // console.log(mutation.type);
                // if (mutation.type === 'childList' || mutation.type === 'attributes') {
                el.querySelector('.wrap-add-dropdown') && el.querySelector('.wrap-add-dropdown').remove();
                init.posWrap.innerHTML = '';
                document.querySelector(`.wrap-pos-add-dropdown.${init.cls}`) && document.querySelector(`.wrap-pos-add-dropdown.${init.cls}`).remove()
                init.addWrap = '';
                makeSelect();
                // mutation.addedNodes.forEach(unit => {
                // });
                // }
            })
        })
        const config = {
            childList: true,
            subtree: true,
            attributes: true
        }
        observer.observe(init.selectBox, config);
    }
    makeSelect();
    optionObserve();
}
//주문결제 주문상품 더 보기 20230725 추가
function foldOrderProduct(btn) {
    const _base = btn.parentNode.querySelector('.wrap-order-list');
    const _baseHgt = _base.querySelector('.order_list > li').clientHeight + 5;
    const _txtClose = btn.dataset.closeTxt ? btn.dataset.closeTxt : '닫기';
    const _txtOpen = btn.dataset.openTxt ? btn.dataset.openTxt : '더보기';
    let _maxHgt = 0;
    _base.style.maxHeight = `${_baseHgt}px`;
    if (_base.querySelectorAll('.order_list > li').length === 1) {
        btn.style.display = 'none';
    }

    btn.addEventListener('click', (e) => {
        if (_base.dataset.status === 'fold') {
            _base.style.maxHeight = 'none'
            _maxHgt = _base.clientHeight;
            _base.style.maxHeight = `${_baseHgt}px`;
            _base.style.transition = 'all .3s ease-out';
            setTimeout(() => {
                _base.style.maxHeight = `${_maxHgt}px`;
            }, 10);
            setTimeout(() => {
                btn.querySelector('span').innerHTML = _txtClose;
                btn.classList.add('close');
                _base.dataset.status = 'unfold';
            },300);
        } else {
            _base.style.maxHeight = `${_baseHgt}px`;
            setTimeout(() => {
                _base.dataset.status = 'fold';
                _base.style.maxHeight = `${_baseHgt}px`;
                btn.querySelector('span').innerHTML = _txtOpen;
                btn.classList.remove('close');
                window.scrollTo({
                    top: window.pageYOffset + _base.getBoundingClientRect().top - 65,
                    behavior: 'smooth'
                })
            }, 300);
        }
    })
}
// close modal
function closeModalSwipe({base, cls, checkBody}) {
    const sclTarget = base.querySelector('.box-bottom-float') ? base.querySelector('.box-bottom-float') : base;
    const initialize = {
        firstX: 0,
        firstY: 0,
        isMove: false,
        moveLeft: 0,
        moveTop: 0,
    }
    const dragStart = () => {
        base.querySelector(cls).addEventListener('touchstart', mouseDown);
        window.addEventListener('touchmove', mouseMove)
        window.addEventListener('touchend', mouseUp)
    };
    const mouseDown = (event) => {
        if (event.target.closest('.group-option-change') || event.target.closest('.area-inner-scroll') || event.target.closest('.area-scroll') || initialize.isMove || base.scrollTop > 0) {
            return;
        }

        initialize.firstX = event.type !== 'mousedown' ? event.touches[0].screenX : event.pageX;
        initialize.firstY = event.type !== 'mousedown' ? event.touches[0].screenY : event.pageY;

        initialize.moveLeft = 0;
        initialize.moveTop = 0;
        initialize.isMove = true;
    };
    const mouseMove = (event) => {
        if (!initialize.isMove) {
            return;
        }

        const _moveX = event.type !== 'mousemove' ? event.touches[0].screenX : event.pageX;
        const _moveY = event.type !== 'mousemove' ? event.touches[0].screenY : event.pageY;

        initialize.moveLeft = initialize.firstX - _moveX;
        initialize.moveTop = initialize.firstY - _moveY;
    };
    const mouseUp = (event) => {
        if (!initialize.isMove) {
            return;
        }
        if (Math.abs(initialize.moveLeft) < Math.abs(initialize.moveTop) && initialize.moveTop < 0 && sclTarget.scrollTop < 1 && Math.abs(initialize.moveTop) > 30) {
            initialize.isMove = false;
            closeEl();
            checkBody && document.querySelector('html').getAttribute('style') && document.querySelector('html').removeAttribute('style')
            checkBody && document.querySelector('body').getAttribute('style') && document.querySelector('body').removeAttribute('style')
            document.body.classList.contains('is-dimmed') && document.body.classList.remove('is-dimmed');
        }
        initialize.firstX = 0;
        initialize.firstY = 0;
        initialize.isMove = false;
        initialize.moveLeft = 0;
        initialize.moveTop = 0;
    };
    base.querySelector(cls) && dragStart();
}
function selectClickEvent() {
    
}
// event trigger
function evtTrigger(btn) {
    const _event = document.createEvent('Event');
    _event.initEvent('click', true, true);
    btn.dispatchEvent(_event);
}
// 우측 결제 금액 스크롤 이벤트
function scrollFloatRight(target) {
    const _target = document.querySelector(target);
    const _footer = document.getElementById('footer');
    const _addNum = 122;
    const _pos = window.scrollY + _target.getBoundingClientRect().top - _addNum;
    let _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
    const calcuHgt = (target) => {
        return Array.prototype.reduce.call(target, (acc, el) => {
            return acc + el.clientHeight;
        }, 0)
    }
    let _hgt = calcuHgt(_target.children);
    const checkPos = () => {
        _hgt = calcuHgt(_target.children);
        _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
        if (window.scrollY >= _pos && window.scrollY + _hgt + _addNum < _footerPos) {
            _target.classList.add('fixed');
            _target.removeAttribute('style');
        } else if (window.scrollY + _hgt + _addNum > _footerPos) {
            _target.style.top = `${_footer.getBoundingClientRect().top - _hgt - 50}px`;
        } else {
            _target.removeAttribute('style');
            _target.classList.contains('fixed') && _target.classList.remove('fixed');
        }
        if (document.body.clientWidth < 1200 && _target.classList.contains('fixed')) {
            _target.style.left = `${952 - window.scrollX}px`;
        }
    }
    window.addEventListener('scroll', () => {
        checkPos();
    });
    let observer = new ResizeObserver(function(entries) {
        entries.forEach(function(entrie) {
            checkPos();
        })
    })
    observer.observe(document.body);
}
// 모바일 최종 결제금액 보기 아코디언
function paymentFoldPos(cls) {
    const _wrap = document.querySelector(cls);
    const _btn = _wrap.querySelector('.detail_tit.type-btn button');
    const _content = _wrap.querySelector('.detail_discount');
    const checkHgt = () => {
        setTimeout(() => {
            if (_content.classList.contains('is-active')) {
                const _scl = window.scrollY + _content.clientHeight;
                window.scrollTo({
                    top: _scl,
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                checkHgt();
            }
        }, 100);
    }
    _btn.addEventListener('click', () => {
        checkHgt();
    })
}
// observer intersection
function setIntersectionOpserve({target}) {
    const options = {
        threshold: 0
    }
    const _target = document.querySelectorAll(target);
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            const {target} = entry;
            if (entry.isIntersecting) {
                setSwiper({target, gap: 30, pagination: '.swiper-pagination'})
                observer.unobserve(target);
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    Array.prototype.forEach.call(_target, el => {
        observer.observe(el);
    });
}


//2023 개선 mypage
// 마이현대 메뉴 서브 메뉴 보기
function viewMyMenu(target) {
    const base = document.querySelector(target);
    const _snb = base.querySelectorAll('.list-my-snb');
    const back = document.createElement('div');
    let _snbHgt = 0;

    back.className = 'my-menu__back';
    base.insertAdjacentElement('afterbegin', back);

    const checkHgt = () => {
        _snbHgt = Array.prototype.reduce.call(_snb, (acc, el) => {
            el.style.display = 'block';
            acc = acc < el.clientHeight ? el.clientHeight : acc;
            el.removeAttribute('style');
            return acc;
        }, 0);
        const _mrg = parseInt(window.getComputedStyle(_snb[0]).getPropertyValue('padding-top'));
        return _snbHgt + _mrg;
        
    }
    base.addEventListener('mouseenter', (e) => {
        back.style.transition = 'height .3s ease-out';
        back.style.height = `${maxHgt}px`;
        Array.prototype.forEach.call(_snb, snb => {
            elSlideDown({base, target: snb, btn: base.querySelector('a'), cls: 'is-active', execute: true, is: 'ing'})
        })
    })
    base.addEventListener('mouseleave', (e) => {
        elSlideDown({base, target: back, btn: base.querySelector('a'), cls: 'is-active', execute: false, is: 'ing'})
        Array.prototype.forEach.call(_snb, snb => {
            elSlideDown({base, target: snb, btn: base.querySelector('a'), cls: 'is-active', execute: false, is: 'ing'})
        })
    })
    const maxHgt = checkHgt();
}
// 롤링 알림 메세지
function myAlram() {
    const _base = document.querySelector('.my-grade__alram');
    const _alram = _base.querySelectorAll('a');
    const _time = 4000;
    let _timer = '';
    let _cur = 0;
    if (!_base.querySelector('a') || _base.querySelectorAll('a') < 2) {
        return;
    }
    const interval = () => {
        _timer = setInterval(() => {
            _base.querySelector('.is-active') && _base.querySelector('.is-active').classList.remove('is-active');
            _alram[_cur % _alram.length].classList.add('is-active');
            _cur++;
        }, _time);
    }
    interval();
    _base.addEventListener('mouseenter', () => {
        clearInterval(_timer);
        _timer = '';
    });
    _base.addEventListener('mouseleave', () => {
        interval();
    });
}
// 마이현대 앵커이동 20230726 추가
function anchorMove(base) {
    const _topHgt = 60;
    const _btnHgt = 57;
    const _btns = base.querySelectorAll('a');
    let _pos = 0;
    const _tabConts = base.parentNode.querySelectorAll('.my-panel');
    let _contPos = Array.prototype.map.call(_tabConts, cont => {
        return window.scrollY + cont.getBoundingClientRect().top;
    });
    let _is = false;
    const sclEvt = () => {
        if (window.scrollY >= _pos) {
            !base.parentNode.classList.contains('fixed') && base.parentNode.classList.add('fixed');
        } else {
            base.parentNode.classList.contains('fixed') && base.parentNode.classList.remove('fixed');
        }
        checkCurPos(window.scrollY);
    }
    const throttleUse = (callback) => {
        let _timeOut = null;
        _pos = window.scrollY + base.getBoundingClientRect().top - _topHgt;
        _contPos = Array.prototype.map.call(_tabConts, cont => {
            return window.scrollY + cont.getBoundingClientRect().top;
        });
        return function () {
            if (_timeOut) {
                window.cancelAnimationFrame(_timeOut);
            }
            _timeOut = window.requestAnimationFrame(function () {
                callback();
            });
        }
    }
    window.addEventListener('scroll', throttleUse(sclEvt, 100));
    const checkCurPos = (pos) => {
        if (_is) {
            return;
        }
        for (let i = 0; i < _contPos.length; i++) {
            const _computed = _contPos[i] - _btnHgt - _topHgt;
            if (pos > _computed && pos < _tabConts[i].clientHeight + _computed) {
                // removeArrCls(base.querySelectorAll('li'), 'is-active');
                base.querySelector('.is-active') && base.querySelector('.is-active').classList.remove('is-active');
                !_btns[i].parentNode.classList.contains('is-active') && _btns[i].parentNode.classList.add('is-active');
            }
        }
    }
    Array.prototype.forEach.call(_btns, btn => {
        btn.addEventListener('click', (e) => {
            const _link = btn.getAttribute('href');
            if (_link.indexOf('#') === -1) {
                return;
            }
            _is = true;
            // removeArrCls(base.querySelectorAll('li'), 'is-active');
            base.querySelector('.is-active') && base.querySelector('.is-active').classList.remove('is-active');
            !btn.parentNode.classList.contains('is-active') && btn.parentNode.classList.add('is-active');
            e.preventDefault();
            const _target = document.getElementById(_link.replace('#', ''));
            $('html, body').animate({
                scrollTop: window.scrollY + _target.getBoundingClientRect().top - _topHgt - _btnHgt
            }, function() {
                _is = false;
            })
            // window.scrollTo({
            //     top: window.scrollY + _target.getBoundingClientRect().top - _topHgt - _btnHgt,
            //     behavior: 'smooth'
            // });
        })
    });
}
function removeArrCls(targets, cls) {
    Array.prototype.forEach.call(targets, target => {
        target.classList.contains(cls) && target.classList.remove(cls);
    });
}
// 모바일 전자여권 숨기기
function hidePassport(el) {
    const _headerBtn = document.querySelector('.header_top > h2');
    const _menu = document.querySelector('.header_top .depth_menu');
    _headerBtn.addEventListener('click', () => {
        const _scl = window.scrollY;
        _menu.classList.contains('open') && $(el).fadeOut();
        _scl !== 0 && !_menu.classList.contains('open') && $(el).fadeIn();
    });
    document.querySelector('.quick_area').style.marginTop = '-81px'; // top 버튼 이동
}
// 마이현대 높이값
function setSameHgt(cls) {
	const _targets = document.querySelectorAll(cls);
	let _max = 0;
	const calHgt = () => {
		Array.prototype.forEach.call(_targets, target => {
            target.closest('.my-tab-content').classList.add('temped');
            const _hgt = target.clientHeight;
            target.closest('.my-tab-content').classList.remove('temped');
            if (_max < _hgt) {
                _max = _hgt
            }
        });
	}
    calHgt();
    const checkHgt = (type) => {
        Array.prototype.forEach.call(_targets, target => {
            if (_max === 0 || type) {
                setTimeout(() => {
                    calHgt();
                }, 100);
            } else {
                target.style.height = `${_max}px`;
            }
        });
    }
    checkHgt();
}


//2023 개선 product
// 상품 상세 - 내용 탭메뉴 이동
function scrollIntoMove(num) {
    return;
    // let targetPosition = $("#panel" + num).offset();
    // $('html, body').animate({scrollTop : targetPosition.top - 60}, 400);
    // $('html, body').animate({scrollTop : targetPosition.top - 140}, 400);
}
// 평점 비율
function ratingBar(el) {
    const _bars = el.querySelectorAll('.bar .wrap-rating');
    const _max = 5;
    const makeBar = (bar) => {
        const _addBar = document.createElement('div');
        const _addUnit = document.createElement('div');
        const _num = bar.querySelector('.bar_num').innerHTML;
        _addBar.className = 'bar_line';
        _addUnit.className = 'gauge';
        _addBar.appendChild(_addUnit);
        bar.insertAdjacentElement('afterbegin', _addBar);
        _addUnit.style.height = `${(_num / _max) * 100}%`;

    }
    Array.prototype.forEach.call(_bars, bar => makeBar(bar));
}
//menu sticky 20231227
function menuSticky(target) {	
    const _base = target === '.product-saerch-list-top' ? document.querySelector(target).parentElement : document.querySelector(target);
	const _filter =  _base.querySelector('.product-saerch-list-top');
	if (!_filter) {
        return;
    }
	const _filterUnit = _base.querySelector('.search-hashtag-result');
	
	let _filterHgt = _filter.offsetHeight;
	let _unitHgt = _filterUnit.offsetHeight;
	const _resultWrap = document.querySelector('.search-round-data-wrap, .category-menu-two-depth-wrap');
	const _resultHgt = !document.querySelector('.browse_category') && _resultWrap ? _resultWrap.offsetHeight : 0; //20231225
	const _addHgt = document.querySelector('#searchTermResult') ? 22 : 0;
	const _headerHgt = document.querySelector('.saerch-top, .header') ? document.querySelector('.saerch-top, .header').offsetHeight : 0;
	let _filterPosPlus = _headerHgt + _resultHgt + _addHgt;
	let _filterPos = _filter.getBoundingClientRect().top;
	let _sclPos = (window.scrollY + _filterPos) - _filterPosPlus;
	window.addEventListener('scroll', e => {
		_filterHgt = _filter.offsetHeight;
		_filterPos = _filter.getBoundingClientRect().top;
		_filterPos = _filterPos >= 60 ? _filterPos : 60;
		_unitHgt = _filterUnit.clientHeight;
        if (window.scrollY > _sclPos) {
            !_base.classList.contains('is-scroll') && _base.classList.add('is-scroll');
            if (_resultWrap) {
                !_resultWrap.classList.contains('is-scroll') && _resultWrap.classList.add('is-scroll');
                _resultWrap.parentElement.style.paddingTop = `${_resultWrap.clientHeight}px`;
            }
            _base.style.paddingTop = `${_filterHgt + _unitHgt}px`;
            _filter.style.top = `${_filterPosPlus}px`;
            _filterUnit.style.top = `${_filterPosPlus + _filterHgt}px`;
        } else {
            _base.classList.contains('is-scroll') && _base.classList.remove('is-scroll');
            if (_resultWrap) {
                _resultWrap.classList.contains('is-scroll') && _resultWrap.classList.remove('is-scroll');
                _resultWrap.parentElement.removeAttribute('style');
            }
            _base.removeAttribute('style');
            _filter.removeAttribute('style');
            _filterUnit.style.removeProperty('top');
        }
    })
	
	// 2024-02-26 필터바 떨림 관련 삭제
    /*let observer = new ResizeObserver(function(entries) {
        entries.forEach(function(entrie) {
            _filterPos = _filter.getBoundingClientRect().top;
			_sclPos = (window.scrollY + _filterPos) - _filterPosPlus;
        })
    })
	observer.observe(document.body);*/
}
// filter 20231011 수정
function viewFlterDetail(btn) {
    const _filter = document.querySelector('[data-filter="wrap"]');
    btn.addEventListener('click', () => {
        if (btn.classList.contains('is-active')) {
            _filter.classList.remove('is-active');
            btn.classList.remove('is-active');
        } else {
            _filter.classList.add('is-active');
            btn.classList.add('is-active');
        }
    })
}
// show hide 제어
function viewControlCheck(el) {
    const _control = el.dataset.control;
    const _targets = document.querySelectorAll(`[data-${_control}]`);
    el.addEventListener('change', e => {
        Array.prototype.forEach.call(_targets, target => {
            const _cur = JSON.parse(target.getAttribute(`data-${_control}`));
            target.setAttribute(`data-${_control}`, !_cur);
        })
    })
}
// mutation observer 20231004
function checkMutationObserve() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach( mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach( el => {
                    if (!el.querySelector) {
                        return;
                    }
                    // 검색어 저장 체크
                    if (el.querySelector('[data-control]')) {
                        viewControlCheck(el.querySelector('[data-control]'));
                    }
                    // 검색 input focus
                    if (el.querySelector('.saerch-top.saerch-top-fix-no input[type=text]')) {
                        el.querySelector('.saerch-top.saerch-top-fix-no input[type=text]').focus();
                    }
                    // 필터 검색어
                    if (el.closest('.product-saerch-filter-wrap .filter-data-save')) {
                        checkFilterSearch(el);
                    }
                    // tab
                    if (el.querySelector('[role=tablist]')) {
                        const cls = el.querySelector('[role=tablist]').parentNode.className.split(' ').join('.');
                        cls && setTab(`.${cls}`);
                    }
                    // round btn is-class
                    if (el.querySelector('.search-round-data')) {
                        el.querySelector('button').addEventListener('click', (e) => {
                            setOneCls({base: el.parentNode, unit: el, cls: 'is-active'});
                        })
                    }
                    // 세트상품 swiper
                    if (el.querySelector('.select-brand-wrap .swiper-wrapper')) {
                        setSwiper({target: el.querySelector('.select-brand-wrap'), gap: 12, viewNum: 2.5, offset: 20});
                    }
                    // 오프라인 브랜드 이미지 확대 축소
                    if (el.querySelector('.offline-brand-img')) {
                        offlineBrandZoom(el.querySelector('.offline-brand-img'));
                    }
                    // 일부 팝업 높이값
                    if (el.querySelector('.box-float-layer .guidance-area')) {
                        setLayHgt(el.querySelector('.box-float-layer .guidance-area'), 'inner');
                    }
                    // pc 필터
                    if (el.querySelector('.saerch-result-content #filterOptionBtn')) {
                        viewFilter({base: document.querySelector('.saerch-result-content'), btn: document.querySelector('.saerch-result-content #filterOptionBtn')});
                    }
                    if (el.querySelector('.saerch-result-content #filterOptionBtn2')) {
                        viewFilter({base: document.querySelector('.saerch-result-content'), btn: document.querySelector('.saerch-result-content #filterOptionBtn2')});
                    }
                });
            }
        });
    });
    // observe everything except attributes
    observer.observe(document.body, {
        childList: true, // observe direct children
        subtree: true, // and lower descendants too
        characterDataOldValue: true // pass old data to callback
    });
}
// observer intersection
function checkIntersectionOpserve(target) {
    const options = {
        threshold: 0
    }
    const callback = (entries, observer) => {
        return entries.forEach(entry => {
            const {target} = entry;
            if (entry.isIntersecting) {
                if (target.closest('.saerch-top.saerch-top-fix-no') && target.nodeName === 'INPUT') {
                    target.focus();
                    document.querySelector('html').scrollTop = 0;
                    observer.unobserve(target);
                }
                if (target.classList.contains('guidance-area')) {
                    setLayHgt(target, 'inner');
                }
                if (target) {
                    searchRoundBtn();
                }
				// 20231225
                if (target.querySelector('#basicSearchTerm')) {
                    setTimeout(() => {
                        window.scrollTo({
                            left: 0,
                            top: 0,
                            behavior: 'instant'
                        });
                    }, 200);
                }
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
}
// 검색 필터
function checkFilterSearch(el) {
    const _content = document.querySelector('.product-saerch-filter');
    const _base = el.closest('.product-saerch-filter-wrap .filter-box-footer');
    const _txt = _base.querySelector('.filter-data-save ul li');
    const _refreshBtn = _base.querySelector('.filter-box-function a');
    const addPadContent = () => {
        if (!_content) {
            return;
        }
        // _content.style.paddingBottom = `${_base.clientHeight + 48}px`;
    }
    if (_txt) {
        !_base.classList.contains('has-txt') && _base.classList.add('has-txt');
        addPadContent();
        Array.prototype.forEach.call(_base.querySelectorAll('.filter-data-save ul li button'), btn => {
            btn.addEventListener('click', () => {
                if (_base.querySelectorAll('.filter-data-save ul li').length === 0) {
                    _base.classList.remove('has-txt');
                    addPadContent();
                }
            })
        });
    } else {
        _base.classList.remove('has-txt');
        addPadContent();
    }
    /*_refreshBtn && _refreshBtn.addEventListener('click', () => {
	    const _head = document.querySelector('.saerch-top, .header') ? document.querySelector('.saerch-top, .header').offsetHeight : 0;
	    const _hgt1 = document.querySelector('.product-saerch-list-top') ? document.querySelector('.product-saerch-list-top').offsetHeight : 0;
	    const _hgt2 = document.querySelector('.search-hashtag-result') ? document.querySelector('.search-hashtag-result').offsetHeight + parseInt(window.getComputedStyle(document.querySelector('.search-hashtag-result')).getPropertyValue('margin-top')) + parseInt(window.getComputedStyle(document.querySelector('.search-hashtag-result')).getPropertyValue('margin-bottom')) : 0;
	    const _hgt3 = document.querySelector('.search-round-data-wrap') ? document.querySelector('.search-round-data-wrap').offsetHeight : 0;
	    const _hgt4 = document.querySelector('.category-menu-two-depth-wrap') ? document.querySelector('.category-menu-two-depth-wrap').offsetHeight : 0;
	    const _pad1 = document.querySelector('#searchTermResult') && document.querySelector('.saerch-result-content') ? parseInt(window.getComputedStyle(document.querySelector('.saerch-result-content')).getPropertyValue('margin-top')) + parseInt(window.getComputedStyle(document.querySelector('.saerch-result-content')).getPropertyValue('border-top-width')) : 0;
	    
	    const _list = document.querySelector('.saerch-result-content .list-product__searchlist') ? window.scrollY + document.querySelector('.saerch-result-content .list-product__searchlist').getBoundingClientRect().top : 0;
		const _top =  _list - _hgt1 - _hgt2 - _hgt3 - _hgt4 - _pad1 - _head ;
		setTimeout(() => {
			window.scrollTo({
				left: 0,
				top: _top,
				behavior: 'instant'
			});	
		}, 1000);
	})*//* 2024-02-26 필터 검색 후 화면이동 관련 삭제*/
	
	/* S: 2024-02-26 필터 검색 후 화면이동*/
	const _filterBox = document.querySelector('.product-saerch-list-top').getAttribute("data-offset");
	_refreshBtn && _refreshBtn.addEventListener('click', () => {
		
		console.log('asdert');
		
		setTimeout(() => {
			const _resultData = document.querySelector('.search-hashtag-result').offsetHeight;
			const _salePage = document.querySelector(".area-display-sale"); //세일페이지 
			
			if (_salePage !== null) {
				const _saleCateHeight = document.querySelector('.browse_category.search-round-data-wrap').offsetHeight;
				window.scrollTo({
					left: 0,
					top: _filterBox - 100 + _saleCateHeight,
					behavior: 'instant'
				});
			} else {
				if(_resultData == 0) {
					window.scrollTo({
						left: 0,
						top: _filterBox - 100,
						behavior: 'instant'
					});
				} else {
					window.scrollTo({
						left: 0,
						top: _filterBox - 50 - _resultData,
						behavior: 'instant'
					});
				}
			}
		}, 100);
	})
	/* E: 2024-02-26 필터 검색 후 화면이동*/
}

/* S: 2024-02-26 필터 검색 후 화면이동*/
function filterPosition() {
let _filterBar = document.querySelector(".product-saerch-list-top")
if(_filterBar !== null) {
    const _filterTop = window.pageYOffset + _filterBar.getBoundingClientRect().top;//필터바 절대값 위치
    _filterBar.setAttribute("data-offset", _filterTop)
    
    // 품절제외
    const _btnSoldOut = document.querySelector('.product-saerch-list-top .toggle-switch-wrap');
	const _filterBox = document.querySelector('.product-saerch-list-top').getAttribute("data-offset");
	_btnSoldOut && _btnSoldOut.addEventListener('click', () => {
		setTimeout(() => {
			const _resultData = document.querySelector('.search-hashtag-result').offsetHeight;
			const _salePage = document.querySelector(".area-display-sale"); //세일페이지 
			
			if (_salePage !== null) {
				const _saleCateHeight = document.querySelector('.browse_category.search-round-data-wrap').offsetHeight;
				window.scrollTo({
					left: 0,
					top: _filterBox - 100 + _saleCateHeight,
					behavior: 'instant'
				});
			} else {
				if(_resultData == 0) {
					window.scrollTo({
						left: 0,
						top: _filterBox - 100,
						behavior: 'instant'
					});
				} else {
					window.scrollTo({
						left: 0,
						top: _filterBox - 50 - _resultData,
						behavior: 'instant'
					});
				}
			}
		}, 100);
	})
}	
}
/* E: 2024-02-26 필터 검색 후 화면이동*/

// 검색 결과 리스트 위치 이동
function resetPosSearchResult(target) {
	const movePos = () => {
		const _head = document.querySelector('.saerch-top, .header') ? document.querySelector('.saerch-top, .header').offsetHeight : 0;
		const _hgt1 = document.querySelector('.product-saerch-list-top') ? document.querySelector('.product-saerch-list-top').offsetHeight : 0;
		const _hgt2 = document.querySelector('.search-hashtag-result') ? document.querySelector('.search-hashtag-result').offsetHeight + parseInt(window.getComputedStyle(document.querySelector('.search-hashtag-result')).getPropertyValue('margin-top')) + parseInt(window.getComputedStyle(document.querySelector('.search-hashtag-result')).getPropertyValue('margin-bottom')) : 0;
		const _hgt3 = document.querySelector('.search-round-data-wrap') ? document.querySelector('.search-round-data-wrap').offsetHeight : 0;
		const _hgt4 = document.querySelector('.category-menu-two-depth-wrap') ? document.querySelector('.category-menu-two-depth-wrap').offsetHeight : 0;
		const _pad1 = document.querySelector('#searchTermResult') && document.querySelector('.saerch-result-content') ? parseInt(window.getComputedStyle(document.querySelector('.saerch-result-content')).getPropertyValue('margin-top')) + parseInt(window.getComputedStyle(document.querySelector('.saerch-result-content')).getPropertyValue('border-top-width')) : 0;
		
		const _list = document.querySelector('.saerch-result-content .list-product__searchlist') ? window.scrollY + document.querySelector('.saerch-result-content .list-product__searchlist').getBoundingClientRect().top : document.querySelector('#goosArea') ? window.scrollY + document.querySelector('#goosArea').getBoundingClientRect().top : 0;
		const _top =  _list - _hgt1 - _hgt2 - _hgt3 - _hgt4 - _pad1 - _head ;
		window.scrollTo({
			left: 0,
			top: _top,
			behavior: 'instant'
		});	
	}
	const interSectionFunc = (target) => {
		const options = {
			threshold: 0
		}
		const callback = (entries, observer) => {
			return entries.forEach(entry => {
				const {target} = entry;
				if (!entry.isIntersecting) {
					movePos();
				}
			});
		};
		const observer = new IntersectionObserver(callback, options);
		observer.observe(target);
	}
	interSectionFunc(document.querySelector('#main_loading_area'));
}
// brand sticky
function brandSticky() {
    const _base = document.querySelector('.search-tab-content-wrap');
    const _target = _base.querySelector('.brand-category');
    const _result = _base.querySelector('.kr-en-conversion-wrap');
    const _tab = document.querySelectorAll('.search-tab-menu li');
    const _tabContent = _base.querySelector('.brand-search-tab-content');
    const _parent = _base.querySelector('.brand-category-content');
    const setPos = () => {
        if (!_tabContent.classList.contains('active')) {
            return;
        }
        const _baseTop = _base.getBoundingClientRect().top - 40;
        const _top = _parent.getBoundingClientRect().top - 20;
        const _targetHgt = _target.clientHeight;
        const _resultHgt = _result.clientHeight;
        if (_base.scrollTop > _top) {
            !_base.classList.contains('is-fixed') && _base.classList.add('is-fixed');
            _parent.style.paddingTop = `${_targetHgt + _resultHgt}px`;
            _target.style.top = `${_baseTop}px`;
            _result.style.top = `${_baseTop + _targetHgt}px`;
        } else {
            _base.classList.contains('is-fixed') && _base.classList.remove('is-fixed');
            _parent.removeAttribute('style');
            _target.removeAttribute('style');
            _result.removeAttribute('style');
        }
    }
    _base.addEventListener('scroll', () => {
        setPos();
    })
    Array.prototype.forEach.call(_tab, (tab, idx) => {
        tab.addEventListener('click', () => {
            _base.scrollTop = 0;
            setPos();
        });
    })
    setPos();
}
// class toggle
function changeCls({base, btn, cls, rel, dip}) {
    if (!base || !base.querySelector(btn)) {
        return
    }
    base.querySelector(btn).addEventListener('click', () => {
        if (base.classList.contains(cls)) {
            base.classList.remove(cls);
            rel && base.parentNode.querySelector(rel) && base.parentNode.querySelector(rel).classList.remove(cls);
            rel && base.parentNode.querySelector(rel) && base.parentNode.querySelector(rel).removeAttribute('style');
        } else {
            base.classList.add(cls);
            rel && base.parentNode.querySelector(rel) && base.parentNode.querySelector(rel).classList.add(cls);
            rel && base.parentNode.querySelector(rel) && base.parentNode.querySelector(rel).setAttribute('style', `display: ${dip}`);
        }
    });
}
// 세트상품 하단 장바구니 영역 활성화
function cartBtnArea({base, btn, cls}) {
    const _base = document.querySelector(base);
    const _btn = _base.querySelector(btn);
    if (!_btn) {
        return;
    }
    _btn.addEventListener('click', () => {
        if(_base.classList.contains(cls)) {
            _base.classList.remove(cls);
        } else {
            _base.classList.add(cls);
        }
    });
}
// checkbox 전체 선택
function agreeCheckAll(base) {
    if (!base.querySelector('dd input[type=checkbox]')) {
        return;
    }
    const _inputs = base.querySelectorAll('dd input[type=checkbox]');
    const _len = _inputs.length;
    const _all = base.querySelector(`dt input[type=checkbox]`);
    const checkAll = () => {
        const _checked = base.querySelectorAll('dd input[type=checkbox]:checked').length;
        if (_checked === _len) {
            _all.checked = true;
        } else {
            _all.checked = false;
        }
    }
    const checkUnit = (type) => {
        Array.prototype.forEach.call(_inputs, inp => {
            if (type) {
                inp.checked = true
            } else {
                inp.checked = false;
            }
        });
    }
    _all.addEventListener('change', () => {
        if (_all.checked) {
            checkUnit(true)
        } else {
            checkUnit(false);
        }
    })
    Array.prototype.forEach.call(_inputs, inp => {
        inp.addEventListener('change', checkAll);
    })
}
// 스크롤 제어
function scrollHide() {
    document.querySelector('html, .productList').style.overflowY = 'hidden';
}

// 스크롤 제어
function scrollShow() {
    document.querySelector('html, .productList').style.overflowY = 'unset';
}

$(document).mouseup(function(e) {
    if ($(e.target).parents('.product-category-menu').length == 0) {
        $('.product-category-menu li').removeClass('active');
        $('.product-category-menu ul').hide();
    }
});
// sticky
function unitSticky({target, basis, base}) {
    const _footer = document.getElementById('footer');
    const _parent = target.parentNode;
    const _sibling = _parent.querySelector('.list-product__searchlist');
    const _bar = _parent.parentElement.querySelector('.product-saerch-list-top');
    const _filterBtn = _parent.querySelector('.filter-apply-btn');
    let _isTemp = false;
    const _basisHgt = Array.prototype.reduce.call(basis, (acc, unit) => {
        if (!document.querySelector(unit)) {
            return;
        }
        return acc += document.querySelector(unit).clientHeight
    }, 0)
    const calcuHgt = (target) => {
        return Array.prototype.reduce.call(target, (acc, el) => {
            const _val = parseInt(window.getComputedStyle(el).marginTop) + parseInt(el.clientHeight);
            return acc + _val;
        }, 0)
    }
    let _hgt = calcuHgt(target.children);
    const _top = window.scrollY + document.querySelector(base).getBoundingClientRect().top;
    const _pos = window.scrollY + target.getBoundingClientRect().top + _basisHgt;
    let _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
    
    const checkPos = () => {
        _hgt = calcuHgt(target.children);
        _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
        if (_parent.querySelectorAll('.list-product__searchlist li, .list-product li').length < 1) {
            return;
        }
        if (window.scrollY >= _top && window.scrollY + _hgt + _basisHgt < _footerPos) {
            _isTemp = false;
            // !_parent.classList.contains('fixed') && _parent.classList.add('fixed');
            // target.removeAttribute('style');
        } else if (window.scrollY + _hgt - _basisHgt > _footerPos) {
            if (!_isTemp) {
                _isTemp = true;
                const _computed = window.innerHeight - target.getBoundingClientRect().top - _footer.getBoundingClientRect().top - 20;
                target.style.height = `${_computed}px`;
            }
        } else {
            _isTemp = false;
            const _max = _sibling.clientHeight;
            const _fooHgt = window.innerHeight - _footer.getBoundingClientRect().top > 0 ? window.innerHeight - _footer.getBoundingClientRect().top : 0;
            const _computed = window.innerHeight - _bar.getBoundingClientRect().top - _fooHgt - 80;
            const _last = _computed > _max ? _max : _computed;
            if (_last > 10) {
                target.style.height = `${_last}px`;
            }
        }
    }
    _filterBtn && _filterBtn.addEventListener('click', () => {
		const _top = document.querySelector('.list-product__searchlist') ? window.scrollY + document.querySelector('.list-product__searchlist').getBoundingClientRect().top - 190 : 0;
		window.scrollTo({
			left: 0,
            top: _top,
            behavior: 'instant'
        });
    })
    window.addEventListener('scroll', () => {
        if (_parent.querySelectorAll('.list-product__searchlist li, .list-product li').length > 4) {
            checkPos();
        }
    });
    let observer = new ResizeObserver(function(entries) {
        entries.forEach(function(entrie) {
            if (_parent.querySelectorAll('.list-product__searchlist li, .list-product li').length > 4) {
                checkPos();
            }
        })
    })
    observer.observe(document.body);
}
function viewFilter({base, btn}) {
    const _promo = base.querySelector('.product__promotion-bg');
    const setPromo = (hgt) => {
        _promo.style.height = hgt;
    }
    btn.addEventListener('click', () => {
        if (base.classList.contains('is-active')) {
            base.classList.remove('is-active');
            _promo && setPromo('394px');
        } else {
            base.classList.add('is-active');
            _promo && setPromo('504px');
        }
    })
}
// video btn
function setVideoBtn(el) {
    const _video = el.querySelector('video');
    if (!_video) {
        return;
    }
    const playVideo = (btn) => {
        btn.addEventListener('click', () => {
            if (_video.paused) {
                _video.play();
                !el.classList.contains('is-play') && el.classList.add('is-play');
            }  else {
                _video.pause();
                el.classList.contains('is-play') && el.classList.remove('is-play');
            }
        })
    }
    const init = () => {
        const _btn = document.createElement('button');
        _btn.setAttribute('type', 'button');
        _btn.className = 'btn-play';
        el.append(_btn);
        playVideo(_btn);
    }
    init();
}
// h.share 그래프 (main참고)
function setShareGraph(el) {
    const setGraph = ({target, is}) => {
        const _total = parseInt(target.querySelector('.co-buying__max').innerHTML);
        const _cur = parseInt(target.querySelector('.co-buying__current').innerHTML);
        const _graph = target.querySelector('.co-buying__bar');
        if (_graph.classList.contains('is-active')) {
            return;
        }
        if (is) {
            const _wid = _cur / _total * 100;
            _graph.style.width = `${_wid > 100 ? 100 : _wid}%`;
            _graph.classList.add('is-active');
        }

    }
    setOpserve({target: el, func: setGraph, end: true}) // 20230513 수정
}

const siblings = (el) => { return [...el.parentNode.children].filter((child) => child !== el) }
function setClass(el, currentClass) {
    let element = el

    const getFirstClass = (element) => {return element.classList[0]}
    const getSibs = siblings(el, getFirstClass(el))

    el.classList.add(currentClass)
    getSibs.forEach(sib => {
        sib.classList.remove(currentClass)
    })
}

// 검색
function setSearchClear() {
    const searchBox = document.querySelectorAll('.display_search_top')
    searchBox.forEach(box => {
        const input = box.querySelector('input')
        const btnClear = box.querySelector('.display_search_clear')
        let isActive = false //현재 input에 입력이벤트가 있었는지 구분하기 위한 목적
        let lastState = false //현재 value가 있는지 없는지 구분하기 위한 목적
        input.addEventListener('input', () => {
           input.value !== '' ? isActive = true : isActive = false
            if (isActive !== lastState) {
                setClear(isActive, box)
            }
            lastState = isActive
        })
        btnClear.addEventListener('click', () => {
            lastState = false
            setClear(false, box)
        })
    })
    function setClear(bool, inp) {
        const inputs = inp.querySelector('input')
        const btnClear = inp.querySelector('.display_search_clear')
        if (bool) {
            //value가 있는 상태
            btnClear.style.display = 'block'
        } else {
            //value가 없는 상태
            inputs.value = ''
            btnClear.style.display = 'none'
        }
    }
} 

//리스트 ACTIVE
function setRoundDataList(el) {
    const tarWrap = document.querySelector(el)
    if (tarWrap === null) {return}
    const eventTarget = tarWrap.querySelectorAll('button')

    $(document).on('click', `${el} button`, function() {
        const _btnParent = $(this).parent();
        setClass(_btnParent[0], 'active')
    })
}

// 혜택 swiper
function benefitsBannerSwiper(el) {
    if (el.querySelectorAll('.swiper-slide').length < 2) {
        el.classList.add('is-single');
        return;
    }
    const _opt = {target: '.benefits-topbanner-swiper', gap: 24, pagination: '.swiper-pagination', paginationType: 'fraction', autoplay: 5000, viewNum: 2};
    const _visual = document.querySelector('.benefits-topbanner-swiper');
    if (_visual === null ) return
    if (_visual.querySelectorAll('.swiper-slide').length > 3) {
        _opt.loop = 'loop';
    }
    const pageNum = _visual.querySelectorAll('.swiper-slide').length > 3 ? 1 : 2;
    const mainVisual = setSwiper(_opt);
    const _playBtn = _visual.querySelector('.btn-swiper-play button');
    _playBtn.addEventListener('click', (e) => {
        if (!_playBtn.classList.contains('is-play')) {
            _playBtn.classList.add('is-play');
            _playBtn.innerHTML = '자동 슬라이드 시작'
            mainVisual.autoplay.stop();
        } else {
            _playBtn.classList.remove('is-play');
            _playBtn.innerHTML = '자동 슬라이드 중지'
            mainVisual.autoplay.start();
        }
    });
    // progress bar
    setProgressBar({base: '.box-benefits', bar: '.swiper-progress', pageNum});
    
    const imgLightFunc = (img) => {
        const _val = 180; // 숫자값을 높이면 더 밝은 이미지에서 color black 
        img && imgLightCheck(img, (bright) => {
            img.closest('.banner__item').setAttribute('data-bright', bright);
            bright > _val && img.closest('.banner__item').classList.add('type-color-black');
        });
    }
    const transitionFunc = (el) => {
        const _total = el.slides.length;
        const _firstImg = [el.slides[el.realIndex].querySelector('img'), el.slides[(el.realIndex + 1) % _total].querySelector('img')];
        _firstImg.forEach(img => img && imgLightFunc(img));
        el.on('transitionEnd', function() {
            setProgressBar({base: '.box-benefits', bar: '.swiper-progress', idx: this.realIndex, pageNum});
        });
        el.on('transitionStart', function() {
            const _swiper = [el.slides[el.realIndex].querySelector('img'), el.slides[(el.realIndex + 1) % _total].querySelector('img')];
            _swiper.forEach(img => img && imgLightFunc(img));
        });
    }
    transitionFunc(mainVisual);
}

// progress bar 

function setProgressBar({base, bar, idx, pageNum}) {
    const _pageNum = pageNum ? pageNum : 1;
    const _swiper = typeof base === 'string' ? document.querySelectorAll(`${base} .swiper-slide`) : base.querySelectorAll('.swiper-slide');
    const _total = document.querySelector(base).querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length - (_pageNum - 1);
    const _progress = typeof base === 'string' ? document.querySelector(`${base} ${bar}`) : base.querySelector(bar);
    const _wid = _progress.clientWidth / _total;
    const _bar = _progress.querySelector('.scrollbar__unit') ? _progress.querySelector('.scrollbar__unit') : document.createElement('div');
    const init = () => {
        _bar.className = 'scrollbar__unit';
        _progress.classList.add('set-bar');
        _bar.style.width = `${_wid}px`;
        _progress.append(_bar);
    }
    const setBarWid = (idx) => {
        _bar.style.width = `${_wid * (idx + 1)}px`;
    }
    !_progress.classList.contains('set-bar') && init();
    _progress.classList.contains('set-bar') && setBarWid(idx);

}

//혜택 탭
function displayTabEvent () {
    // 탭
    const displayTabList = document.querySelectorAll('.display_tab_item button');
    const displayTabContent = document.querySelectorAll('.display_tab_content');
    Array.prototype.forEach.call(displayTabList, (tab) => {
        tab.addEventListener('click', function() {
            const parents = tab.parentElement
            const sibs = siblings(parents)

            if (tab.parentElement.parentElement.classList.contains('display_tab_menu')) {
                scrollLeft(tab);
            }
            parents.classList.add('active')
            for (let i = 0; i < sibs.length; i++) {
                let childBtn = sibs[i].querySelector('button')
                sibs[i].classList.remove('active')

                childBtn.setAttribute('aria-selected', 'false')
                childBtn.setAttribute('tab-index', -1)
            }
            tab.setAttribute('aria-selected', 'true')
            tab.setAttribute('tab-index', 1)

            let tablabel = tab.getAttribute('aria-controls')
            let displayTabContentTarget = document.querySelector(`[aria-labelledby=${tablabel}]`)

            if (tablabel === null) {return}

            // displayTabContent.classList.remove('active')
            displayTabContent.forEach(el => el.classList.remove('active'))
            displayTabContentTarget.classList.add('active')
        })
    });
    const scrollLeft = (btn) => {
        const _wrap = btn.closest('.search-tab-menu.display_tab_menu');
        const _parent = btn.parentElement;
        _wrap.scrollTo({
            left: _parent.offsetLeft - 20,
            top: 0,
            behavior: 'smooth'
        });
    }
}

// 스크롤 제어
function scrollHide() {
    document.querySelector('html, .area-display-benefits, .area-dispaly-sale, .area-display-bests').style.overflowY = 'hidden';
}

// 스크롤 제어
function scrollShow() {
    document.querySelector('html, .area-display-benefits, .area-dispaly-sale, .area-display-bests').style.overflowY = 'unset';
}

// 오늘의 특가(상품) 슬라이드
function specialProductsSlider () {
    if (document.querySelector('.specials_products_swiper--pc') === null ) return
    const _base = document.querySelector('.specials_products_swiper--pc');
    if (_base.querySelectorAll('.swiper-slide').length < 2) {
        _base.classList.add('is-single');
        return;
    }
    let swiperTodayHotdeal = new Swiper('.specials_products_swiper--pc', {
        slidesPerView: 1,
        spaceBetween: 24,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.specials_products .swiper-button-next',
            prevEl: '.specials_products .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    let pageNum = 1

    setProgressBar({base: '.specials_products', bar: '.swiper-progress', pageNum});

    swiperTodayHotdeal.on('transitionEnd', function() {
        setProgressBar({base: '.specials_products', bar: '.swiper-progress', idx: this.realIndex, pageNum});
    })
}
// 오늘의 특가(브랜드) 슬라이드
function specialBrandsSlider () {
    if (document.querySelector('.specials_brands_swiper--pc') === null ) return
    const _base = document.querySelector('.specials_brands_swiper--pc');
    if (_base.querySelectorAll('.swiper-slide').length < 2) {
        _base.classList.add('is-single');
        return;
    }
    let swiperTodayHotdeal = new Swiper('.specials_brands_swiper--pc', {
        slidesPerView: 1,
        spaceBetween: 24,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.specials_brands .swiper-button-next',
            prevEl: '.specials_brands .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    let pageNum = 1

    setProgressBar({base: '.specials_brands', bar: '.swiper-progress', pageNum});

    swiperTodayHotdeal.on('transitionEnd', function() {
        setProgressBar({base: '.specials_brands', bar: '.swiper-progress', idx: this.realIndex, pageNum});
    })
}

// H.Share 슬라이드
function setHShareSlider () {
    if (document.querySelector('.specials_h-share_swiper--pc') === null ) return
    const _base = document.querySelector('.specials_h-share_swiper--pc');
    if (_base.querySelectorAll('.swiper-slide').length < 5) {
        _base.classList.add('is-single');
        return;
    }
    let swiperHShare = new Swiper('.specials_h-share_swiper--pc', {
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: {
            nextEl: '.hshares .swiper-button-next',
            prevEl: '.hshares .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    let pageNum = 4

    setProgressBar({base: '.hshares', bar: '.swiper-progress', pageNum});

    swiperHShare.on('transitionEnd', function() {
        setProgressBar({base: '.hshares', bar: '.swiper-progress', idx: this.realIndex, pageNum});
    })
}

// 탭 동적 처리
function searchRoundBtn(base) {
    const scrollLeft = (btn) => {
        btn.closest('.search-round-data') && btn.closest('.search-round-data').scrollTo({
            left: btn.parentElement.offsetLeft - 20,
            top: 0,
            behavior: 'smooth'
        });
    }
    base && base.parentElement.addEventListener('click', (e) => {
        if (!e.target.closest('.search-round-data') || e.target.nodeName !== 'BUTTON') {
            return;
        }
        const _wrap = e.target.closest('.search-round-data');
        scrollLeft(e.target);
        setOneCls({base: _wrap.children[0], unit: e.target.parentElement, cls: 'is-active'});
    })
    if (document.querySelector('.display_tab_content.is-active .search-round-data ul')) {
        scrollLeft(document.querySelector('.display_tab_content.is-active .search-round-data li.is-active button'));
    }
}
// 부모 영역에서 하나의 유닛에 class 설정
function setOneCls({base, unit, cls}) {
    const _units = base.children;
    Array.prototype.forEach.call(_units, unit => {
        unit.classList.contains(cls) && unit.classList.remove(cls);
    });
    !unit.classList.contains(cls) && unit.classList.add(cls);
}
function textSwipe() {
    let offsetYpos = window.pageYOffset;
    let lastScrollTop = 0;
    let psMainBg = document.querySelector('.container.ps_main_bg');
    let psMainWrap = document.querySelector('.personal .ps_main_wrap');
    let psSliderCard = document.querySelector('.personal .ps_main_wrap .ps_slider_card');
    let psTitle = document.querySelector('.personal .ps_info_top .ps_title');
    let psShort = document.querySelector('.personal .ps_main_wrap .ps_info_top .ps_short');
    let psDday = document.querySelector('.personal .ps_main_wrap .ps_info_top .ps_short .ps_Dday');
    let psMagneticInfo = document.querySelector('.personal .ps_main_wrap .ps_info_top .ps_short .ps_magnetic_info');
    let psDetailWrap = document.querySelector('.personal .ps_main_wrap .ps_info_top .ps_detail_wrap');
    let nonMember = document.querySelector('.personal .ps_info_top .ps_detail_wrap.non_member');
    let psResister = document.querySelector('.personal .ps_info_top .ps_detail_wrap.non_member .ps_resister');
    let psTo = document.querySelector('.personal .ps_info_top .ps_to');
    let psExit = document.querySelector('.personal .ps_main_wrap .ps_info_top .ps_short .ps_exit');
    let passport = document.querySelector('.personal .ps_info_top .ps_detail.passport');

    if (offsetYpos > lastScrollTop) {
        psTitle.style.transform = 'scale(0.65)'; // 폰트 사이즈 기본값 16px
    } else if (offsetYpos === 0) {
        psTitle.style.transform = 'unset';
    }
    lastScrollTop = offsetYpos;

    if (offsetYpos >= 100) {
        if (psDday !== null || passport !== null || psTo !== null || psExit !== null) {
            psDday.classList.add('ps_Dday_rolling');
            passport.style.marginTop = '0px';
            psTo.style.paddingLeft = '20px';
            psExit.style.display = 'flex';
        }
        psMagneticInfo.classList.add('ps_magnetic_info_rolling');
        psMainWrap.style.cssText = `padding-top: 0px;`;
        !psMainWrap.classList.contains('is-fold') && psMainWrap.classList.add('is-fold');
        psSliderCard.style.marginTop = '20px';
        psShort.style.marginTop = '0px';
        psMagneticInfo.style.cssText = `display: flex; padding: 0 20px;`;
        psDetailWrap.style.cssText = `height: 0px; opacity: 0; transform: translateY(-10px);`;
        if (nonMember) {
            nonMember.style.marginBottom = '0px';
        }
        if (psResister) {
            psResister.style.display = 'none';
        }
    } else {
        if (psDday !== null || passport !== null || psTo !== null || psExit !== null) {
            psDday.classList.remove('ps_Dday_rolling');
            passport.style.marginTop = '25px';
            psTo.style.paddingLeft = '15px';
            psExit.style.display = 'none';
        }
        psMagneticInfo.classList.remove('ps_magnetic_info_rolling');
        psMainWrap.style.cssText = `padding-top: 80px;`;
        psMainWrap.classList.contains('is-fold') && psMainWrap.classList.remove('is-fold');
        psSliderCard.style.marginTop = '32px';
        psShort.style.marginTop = '8px';
        psMagneticInfo.style.cssText = `display: none; padding:0 8px;`;
        psDetailWrap.style.cssText = `height: auto; opacity: 1; transform: translateY(0px);`;
        if (nonMember) {
            nonMember.style.marginBottom = '48px';
        }
        if (psResister) {
            psResister.style.display = 'block';
        }
    }

    if (psDetailWrap.classList.contains('non_member')) {
        psMainBg.style.paddingBottom = '200px';
    } else {
        psMainBg.style.paddingBottom = '174px';
    }
}
// benefit swiper
function swiperBenefit(cls) {
    new Swiper(cls, {
        slidesPerView: 3,
        observer: true,
        observeParents: true,
        spaceBetween: 8,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}
// 메인(혜택) 바로보기 슬라이드
function mainBenefit() {
    const panels = document.querySelectorAll('.ps_card_box');

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    gsap.set('.ps_card_box', {
        zIndex: (i) => panels.length + i
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.personal',
            markers: false,
            pin: true,
            start: 'top 0%',
            end: '+=100%',
            scrub: 1,
        }
    });

    gsap.to('.ps_benefits_card_box_1', {
        opacity: 0.5,
        scale: 0.9,
        scrollTrigger: {
            trigger: '.ps_benefits_card_box_1',
            markers: false,
            start: 'top 0%',
            end: '+=10%',
            scrub: 1,
        }
    });
    gsap.to('.header', {
        scrollTrigger: {
            trigger: '.ps_benefits_card_box_2',
            markers: false,
            start: 'top 0%',
            end: '+=100%',
            scrub: 1,
        }
    });

    panels.forEach((el, i) => {
        let heighting = el.clientHeight - 405; // 박스 스와이프 했을 때 비스듬하게 겹치기 위해 수치값 조절
        // let gap = 20;
        let gap = 0;

        gsap.set(el, {
            position: 'absolute', top: `${heighting * i}`
        });

        tl.to(el, {
            y: `-${(heighting - gap) * i}`
        }).addLabel(el.classList[1]);
    });

    window.onscroll = textSwipe;
    /**
     * 메인(혜택) 상단 스와이프 이벤트
     */
}
// 메인(혜택) 바로보기 스크롤
function mainScrollBenefit() {
    const _base = document.querySelector('.ps_main_wrap');
    const _isAll = !!_base.querySelector('.ps_detail_wrap');
    const _head = document.querySelector('.header') || document.createElement('div');
    const _wrapInfo = _base.querySelector('.ps_info_top') || document.createElement('div');
    const _info = _base.querySelector('.ps_detail_wrap') || document.createElement('div');
    const _benefit = _base.querySelector('.ps_benefits') || document.createElement('div');
    const _content = _base.querySelector('.ps_slider_card') || document.createElement('div')
    const initial = {
        old: 0,
        cur: 0,
        dir: 0,
        info: 0,
        benefit: 0,
        wrapPos: 0,
        infoPos: 0,
        benefitPos: 0,
        scale: 1,
        opacity: 1,
        contPad: 0,
        scroll1: 260,
        fixTop: 150,
    }
    const init = () => {
        initial.info = _info ? _info.clientHeight : 0;
        initial.infoPos = _info ? window.scrollY + _info.getBoundingClientRect().top : 0;
        initial.wrapPos = _wrapInfo ? window.scrollY + _wrapInfo.getBoundingClientRect().top : 0;
        initial.benefit = _benefit ? _benefit.clientHeight : 0;
        initial.benefitPos = _benefit ? window.scrollY + _benefit.getBoundingClientRect().top : 0;
        initial.contPad = _wrapInfo.clientHeight !== 0 && _benefit.clientHeight !== 0 ? 320 : _wrapInfo.clientHeight === 0 && _benefit.clientHeight !== 0 ? 145 : 0;
        initial.scroll1 = _wrapInfo.clientHeight !== 0 && _benefit.clientHeight !== 0 ? 340 : _wrapInfo.clientHeight === 0 && _benefit.clientHeight !== 0 ? 180 : 0;
        initial.fixTop = _wrapInfo.clientHeight !== 0 && _benefit.clientHeight !== 0 ? 110 : 20;
        _base.classList.contains('is-fixed') && _base.classList.remove('is-fixed');
        _base.classList.contains('is-fold') && _base.classList.remove('is-fold');
        window.addEventListener('scroll', () => {
            checkDirect(window.scrollY);
            scrollReaction(window.scrollY);
        })
    }
    const moveHead = (val) => {
        if (_wrapInfo) {
            _wrapInfo.style.marginTop = `${initial.scroll1 - val}px`;
        }
        _head.style.marginTop = `${initial.scroll1 - val}px`;
    }
    const benefitReset = () => {
        _base.classList.contains('is-fold') && _base.classList.remove('is-fold');
        _base.classList.contains('is-scroll') && _base.classList.remove('is-scroll');
        _base.classList.contains('is-fixed') && _base.classList.remove('is-fixed');
        _head.removeAttribute('style');
        _benefit & _benefit.removeAttribute('style');
        _wrapInfo && _wrapInfo.removeAttribute('style');
        _content && _content.removeAttribute('style');
    }
    const scrollReaction = (val) => {
        if (initial.infoPos - val > 0 && val > 10) {
            const _num = (initial.info - (val * 2) + 20) / initial.info;
            initial.scale = _num > 1 ? 1 : _num < 0 ? 0 : _num;
            _info.style.opacity = `${initial.scale}`;
            _info.style.height = `${initial.info * initial.scale}px`;
        } else if (val < 10) {
            _info.removeAttribute('style');
        }
        if (val > initial.scroll1) {
            !_base.classList.contains('is-scroll') && _base.classList.add('is-scroll');
            moveHead(val);
        } else {
            _base.classList.contains('is-scroll') && _base.classList.remove('is-scroll');
        }
        if (_wrapInfo && val < 80) {
            _wrapInfo.style.transform = `translateY(${(val / 3.8)}px`;
        } else if (_wrapInfo && val > 80 && val < initial.scroll1) {
            // _wrapInfo.style.transform = `translateY(-${(val)}px`;
        }
        if (initial.scale < 0.04 && _isAll || val > 0 && !_isAll ) {
            !_base.classList.contains('is-fixed') && _base.classList.add('is-fixed');
            _content.style.paddingTop = `${initial.contPad}px`;
            _benefit.style.top = `${initial.fixTop}px`;
            // _wrapInfo.style.top = `${parseInt(_wrapInfo.getBoundingClientRect().top) + ((1 - initial.scale) * 10)}px`;
            // _wrapInfo.style.top = '-60px';
        } else {
            _base.classList.contains('is-fixed') && _base.classList.remove('is-fixed');
            _content.removeAttribute('style');
            _benefit.style.top = 'auto';
            _wrapInfo && _wrapInfo.style.removeProperty('top');
        }
        if (val > initial.wrapPos - 50 && val < initial.wrapPos - 50 + (initial.benefit / 2)) {
            const _num = (initial.wrapPos - 50 + (initial.benefit / 2)) - val;
            initial.opacity = (1 - ((100 - _num) * 0.005));
            _benefit.style.transform = `scale(${1 - ((100 - _num) * 0.001)})`;
            _benefit.style.opacity = initial.opacity;
        }
        if (val > 0) {
            !_base.classList.contains('is-fold') && _base.classList.add('is-fold');
        } else {
            benefitReset();
        }
    }
    // 방향
    const checkDirect = (val) => {
        initial.old = val;
        if (initial.cur > initial.old) {
            initial.dir = 1;
        } else {
            initial.dir = -1;
        }
        initial.cur = initial.old;
    }
    init();
}
// 쇼핑 큐레이션 만들기 alert
function checkCuration(btn) {
    const _base = btn.closest('.taste-step-1');
    btn.addEventListener('click', () => {
        const _list = _base.querySelector(".tab-content.is-active [data-list=curation]");
        const _num = _list.querySelectorAll('input[type=checkbox]:checked').length;
        if (_num < 3) {
            makeAlert();
        }
    });
    const makeAlert = () => {
        const _alert = document.createElement('div');
        const _lang = document.querySelector('html').getAttribute('lang');
        const _txt = _lang === 'ko' ? '최대 3가지 관심 키워드 선택해주세요.' : _lang === 'zh' ? '请选择最多3个感兴趣的关键词。' : 'Please select up to three of the following categories.';
        _alert.className = 'txt-benefit-message';
        _alert.innerHTML = _txt;
        _mobile ? document.body.append(_alert) : btn.parentNode.append(_alert);
        setTimeout(() => {
            _alert.remove();
        }, 3000);
        return false;
    }
}
// 높이값 설정
function setScreenSize() {
    const _vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${_vh}px`);
}
// pc 메인 혜택 우측 float 메뉴
function floatBenefitBtn(base) {
    const _btn = base.querySelector('.float-benefit__btn');
    const _winHgt = window.innerHeight;
    const _footer = document.getElementById('footer');
    let _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
    _btn.addEventListener('click', () => {
        if (base.classList.contains('is-active')) {
            elSlideDown({base: _btn.parentElement, target: _btn.parentElement.querySelector('.float-hidden-menu'), btn: _btn, cls: 'is-active', execute: false, is: 'ing'});
            // base.classList.remove('is-active')
        } else {
            elSlideDown({base: _btn.parentElement, target: _btn.parentElement.querySelector('.float-hidden-menu'), btn: _btn, cls: 'is-active', execute: true, is: 'ing'});
            // base.classList.add('is-active')
        }
    });
    window.addEventListener('scroll', () => {
        checkPos();
    });
    const setBenefitSwiper = () => {
        setSwiper({target: '.float-benefit .float-hidden-menu .swiper-container', viewNum: 'auto', navigation: true, direction: 'vertical', slidesPerGroup: 1})
    }
    const checkPos = () => {
        _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
        if (window.scrollY < 10) {
            base.classList.contains('is-min') && base.classList.remove('is-min');
        } else if (window.scrollY + _winHgt < _footerPos) {
            !base.classList.contains('is-min') && base.classList.add('is-min');
            base.classList.contains('is-max') && base.classList.remove('is-max');
            base.removeAttribute('style');
        } else if (_footer.getBoundingClientRect().top < _btn.parentElement.getBoundingClientRect().top + _btn.parentElement.clientHeight) {
            !base.classList.contains('is-min') && base.classList.add('is-min');
            !base.classList.contains('is-max') && base.classList.add('is-max');
            base.style.top = `${_footer.getBoundingClientRect().top - _btn.parentElement.clientHeight - 30}px`;
        }
        // if (document.body.clientWidth < 948) {
        //     base.style.left = `${1042 - window.scrollX}px`;
        // }
    }
    checkPos();
    setBenefitSwiper();
}
// 오프라인 팝업 이미지 확대 축소
function offlineBrandZoom(el) {
    const _base = el.querySelector('.swiper-zoom-container');
    const _img = _base.querySelector('img');
    const initial = {
        scale: 1,
        firstX: 0,
        firstY: 0,
        isMove: false,
        moveLeft: 0,
        moveTop: 0,
        wid: 0,
        hgt: 0,
        oldTrans: {left: 0, top: 0},
        curTrans: {left: 0, top: 0},
    }
    const init = () => {
        _img.style.transitionDuration = '200ms';
        _base.style.transitionDuration = '300ms';
        initial.wid = _base.clientWidth;
        initial.hgt = _base.clientHeight;
        _base.style.transform = 'translate3d(0, 0, 0)';
        _base.closest('.swiper-wrapper').style.transform = 'translate3d(0, 0, 0)';
        if (initial.wid === 0 || initial.hgt === 0) {
            setTimeout(() => {
                init();
            }, 100);
        } else {
            dragStart();
            clickZoom();
        }
    }
    const dragStart = () => {
        _base.addEventListener("mousedown", mouseDown);
        _base.addEventListener("touchstart", mouseDown);
        _base.addEventListener("mousemove", mouseMove);
        _base.addEventListener("touchmove", mouseMove);
        window.addEventListener("mouseup", mouseUp);
        window.addEventListener("touchend", mouseUp);
        _base.addEventListener("mouseout", (e) => {
            mouseUp();
        });
    };
    const mouseDown = (event) => {
        if (initial.isMove) {
            return;
        }
        event.preventDefault();

        initial.firstX = event.type !== 'mousedown' ? event.touches[0].screenX : event.pageX;
        initial.firstY = event.type !== 'mousedown' ? event.touches[0].screenY : event.pageY;

        initial.moveLeft = 0;
        initial.moveTop = 0;
        initial.isMove = true;
    };
    const mouseMove = (event) => {
        if (!initial.isMove) {
            return;
        }

        const _moveX = event.type !== 'mousemove' ? event.touches[0].screenX : event.pageX;
        const _moveY = event.type !== 'mousemove' ? event.touches[0].screenY : event.pageY;

        initial.moveLeft = _moveX - initial.firstX;
        initial.moveTop = _moveY - initial.firstY;
        transImg(initial.moveLeft, initial.moveTop);
    };
    const mouseUp = () => {
        if (!initial.isMove) {
            return;
        }
        transImg(initial.moveLeft, initial.moveTop, 'end');
        initial.isMove = false;
    };
    // 이미지 이동
    const transImg = (left, top, type) => {
        const _areaWid = (initial.wid / 2) * (initial.scale - 1);
        const _areaHgt = (initial.hgt / 2) * (initial.scale - 1);
        const _leftMove = left + initial.oldTrans.left;
        const _topMove = top + initial.oldTrans.top;
        const _dilectX = _leftMove - _areaWid > 0 ? 1 : -1;
        const _dilectY = _topMove - _areaHgt > 0 ? 1 : -1;
        const _x = type === 'end' && Math.abs(_leftMove) > Math.abs(_areaWid) ? _areaWid * _dilectX : _leftMove;
        const _y = type === 'end' && Math.abs(_topMove) > Math.abs(_areaHgt) ? _areaHgt * _dilectY : _topMove;
        if (type === 'end') {
            initial.oldTrans = {left: initial.scale === 1 ? 0 : _x, top: initial.scale === 1 ? 0 : _y};
            _base.style.transitionDuration = '200ms'
        } else {
            _base.style.transitionDuration = '0ms'
        }
        _base.style.transform = `translate3d(${initial.scale === 1 ? 0 : _x}px, ${initial.scale === 1 ? 0 : _y}px, 0px)`;
    }
    // 확대 축소 버튼 클릭
    const clickZoom = () => {
        const _btns = el.querySelectorAll('.area-offline-brand .wrap-btn button');
        Array.prototype.forEach.call(_btns, btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.classList.contains('btn-zoom-in') && imgZoomIn(true);
                btn.classList.contains('btn-zoom-out') && imgZoomIn(false);
            })
        })
    }
    const imgZoomIn = (type) => {
        if (type) {
            initial.scale = initial.scale + 1 > 3 ? 3 : initial.scale + 1;
        } else if (!type && initial.scale > 0) {
            initial.scale = initial.scale - 1 < 1 ? 1 : initial.scale - 1;
        }
        _img.style.transform = `translate3d(0, 0, 0) scale(${initial.scale})`;
        _base.style.transform = 'translate3d(0, 0, 0)';
        initial.oldTrans.top = 0;
        initial.oldTrans.left = 0;
    }
    init();
}
// 카테고리 펼칠
function viewTopCategory(btn) {
    const _category = btn.parentElement.querySelector('.depth_menu, .category-menu-one-depth');
    if (!_category) {
        return;
    }
    btn.addEventListener('click', () => {
        if (btn.classList.contains('is-active')) {
            _category.style.display = 'none';
            btn.classList.remove('is-active');
        } else {
            _category.style.display = 'block';
            btn.classList.add('is-active');
        }
    })
}
// 무한롤링
function infinityRolling(el) {
    const _wid = window.innerWidth;
    const _elWid = el.clientWidth;
    const _ratio = _wid / _elWid;
    const _float = document.querySelector('.float-benefit');
    const clone = {};
    const init = () => {
        _float && _float.classList.add('type-wide');
        for (let i = 0; i < Math.ceil(_ratio); i++) {
            clone[`div${i}`] = el.children[0].cloneNode(true);
            el.append(clone[`div${i}`]);
            el.dataset.direct === 'left' && el.classList.add('is-moved');
            !el.classList.contains('is-rolling') && el.classList.add('is-rolling');
        }
    }
    init();
}
// 레이어 팝업 창
function setLayHgt(el, type) {
    const layer = el.closest('.box-float-layer');
    // 팝업 높이값 만들기
    const setHgt = (layer) => {
        const _hgt = window.innerHeight;
        const _child = layer.querySelector('.guidance-popup');
        const _baseHgt = 60;
        let _excHgt = 0;
        if (!_child || !layer.querySelector('.guidance-area')) {
            return;
        }
        const _scroll = layer.querySelector('.guidance-area');
        if ((_hgt - _baseHgt) < layer.clientHeight) {
            layer.style.height = `${_hgt - _baseHgt}px`;
        } else {
            return;
        }
        _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('.layer-title'), (acc, el) => {
            return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
        }, 0);
        const _layerExc = parseInt(window.getComputedStyle(_child).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(_child).getPropertyValue('padding-bottom'));
        const _scrollExc = parseInt(window.getComputedStyle(_scroll).getPropertyValue('margin-top'));
        const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc - 72;
        
        if (_computedHgt <= _child.clientHeight) {
            _scroll.style.height = `${_computedHgt}px`;
        }
    }
    setTimeout(() => {
        layer.classList.contains('active') && setHgt(layer);
    }, 100);
}
// 상품 상세 더보기
function openProdctDetail(el) {
    const _lang = document.querySelector('html').getAttribute('lang');
    const _openTxt = _lang === 'ko' ? '더 보기' : _lang === 'en' ? 'View more' : '展开'; 
    const _closeTxt = _lang === 'ko' ? '닫기' : _lang === 'en' ? 'Close' : '关闭';
    const _target = el.parentElement.parentElement.querySelector('.prodCont');
    const _max = _mobile ? 900 : 1870;
    if (!_target) {
        return;
    }
    const init = () => {
        if (_target.clientHeight < _max) {
            el.classList.contains('is-hide') && el.classList.remove('is-hide');
        } else {
            el.classList.add('is-hide');
        }
    }
    init();
    el.addEventListener('click', () => {
        if (_target.classList.contains('is-open')) {
            _target.classList.remove('is-open');
            _target.parentElement.classList.remove('is-open');
            el.querySelector('span').innerHTML = _openTxt;
            $('html, body').animate({
                scrollTop: window.scrollY + _target.getBoundingClientRect().top
            })
        } else {
            _target.classList.add('is-open');
            _target.parentElement.classList.add('is-open');
            el.querySelector('span').innerHTML = _closeTxt;
        }
    });

}
// intersection observer
function intSecObserver(target) {
    const options = {
        threshold: 0
    }
    const callback = (entries, observer) => {
        return entries.forEach(entry => {
            const {target} = entry;
            if (entry.isIntersecting) {
                target && setLayHgt(target, 'inner');
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
}
// pc 상품 상세 anchor
function anchorMovePc(base) {
    const _topHgt = document.getElementById('header').clientHeight;
    const _btns = base.querySelectorAll('button');
    const _btnHgt = _btns[0].clientHeight;
    let _pos = 0;
    const _tabConts = base.parentNode.querySelectorAll('.tab_cont');
    let _contPos = Array.prototype.map.call(_tabConts, cont => {
        return window.scrollY + cont.getBoundingClientRect().top - parseInt(window.getComputedStyle(cont).getPropertyValue('margin-top')) - 50;
    });
    let _is = false;
    const sclEvt = () => {
        if (window.scrollY >= _pos) {
            !base.parentNode.classList.contains('fixed') && base.parentNode.classList.add('fixed');
        } else {
            base.parentNode.classList.contains('fixed') && base.parentNode.classList.remove('fixed');
        }
        checkCurPos(window.scrollY);
    }
    const throttleUse = (callback) => {
        let _timeOut = null;
        _pos = window.scrollY + base.getBoundingClientRect().top - _topHgt;
        _contPos = Array.prototype.map.call(_tabConts, cont => {
            return window.scrollY + cont.getBoundingClientRect().top - parseInt(window.getComputedStyle(cont).getPropertyValue('margin-top')) - 50;
        });
        return function () {
            if (_timeOut) {
                window.cancelAnimationFrame(_timeOut);
            }
            _timeOut = window.requestAnimationFrame(function () {
                callback();
            });
        }
    }
    window.addEventListener('scroll', throttleUse(sclEvt, 100));
    const checkCurPos = (pos) => {
        if (_is) {
            return;
        }
        for (let i = 0; i < _contPos.length; i++) {
            const _computed = _contPos[i] - _btnHgt - _topHgt;
            if (pos > _computed && pos < _tabConts[i].clientHeight + _computed) {
                // removeArrCls(base.querySelectorAll('li'), 'is-active');
                base.querySelector('.is-active') && base.querySelector('.is-active').classList.remove('is-active');
                !_btns[i].parentNode.classList.contains('is-active') && _btns[i].parentNode.classList.add('is-active');
            }
        }
    }
    Array.prototype.forEach.call(_btns, btn => {
        btn.addEventListener('click', (e) => {
            const _link = btn.getAttribute('aria-controls');
            if (_link === -1) {
                return;
            }
            _is = true;
            base.querySelector('.is-active') && base.querySelector('.is-active').classList.remove('is-active');
            !btn.parentNode.classList.contains('is-active') && btn.parentNode.classList.add('is-active');
            e.preventDefault();
            const _target = document.querySelector(`[aria-labelledby=${_link}]`);
            $('html, body').animate({
                scrollTop: window.scrollY + _target.getBoundingClientRect().top - _topHgt - _btnHgt - 50
            }, function() {
                _is = false;
            })
        })
    });
    let observer = new ResizeObserver(function(entries) {
        entries.forEach(function() {
            throttleUse(sclEvt, 100);
        })
    })
    observer.observe(document.body);
}
// 모바일 브랜드 검색 초성 클릭
function initialConsonatScl(el) {
    // const _base = document.querySelector('.brand-category-wrap .initial-sound');
	const _base = el.closest('.searchLayer');
	const _changeBtn = _base.querySelectorAll('[data-lang]');
    const _btn = _base.querySelectorAll('.brandKrTabListM button, .brandEnTabListM button');
    const _scl = _base.querySelector('.search-tab-content-wrap');
    const _openBtn = _base.querySelector('.pop-open') ? _base.querySelector('.pop-open').offsetHeight : 0;
    const _searchTop = _base.querySelector('.saerch-top') ? _base.querySelector('.saerch-top').offsetHeight : 0;
    const _addHgt1 = _base.querySelector('.saerch-top-brand') ? _base.querySelector('.saerch-top-brand').offsetHeight : 0;
    const _addHgt2 = _base.querySelector('.search-tab-menu') ? parseInt(window.getComputedStyle(_base.querySelector('.search-tab-menu')).getPropertyValue('margin-top')) + _base.querySelector('.search-tab-menu').offsetHeight : 0;
    const _addHgt3 = _base.querySelector('.search-tab-contents') ? _base.querySelector('.search-tab-contents').offsetHeight : 0;
    const _addHgt4 = _base.querySelector('.brand-category-wrap') ? parseInt(window.getComputedStyle(_base.querySelector('.brand-category-wrap')).getPropertyValue('margin-top')) + parseInt(window.getComputedStyle(_base.querySelector('.brand-category-wrap')).getPropertyValue('padding-top')) : 0;
	const _add =  _openBtn + _searchTop + _addHgt1 + _addHgt2 + _addHgt3 + _addHgt4;
	_changeBtn && Array.prototype.forEach.call(_changeBtn, btn => {
		btn.addEventListener('click', () => {
			const _target = btn.closest('.brand-category-wrap').querySelector('.initial-sound');
			_target && _target.scrollTo({
				left: 0,
				top: 0,
				behavior: 'instant'
			})
			
		})
	})
    _btn && Array.prototype.forEach.call(_btn, btn => {
        btn.addEventListener('click', () => {
            const _cls = btn.innerHTML;
            const _top = document.querySelector('[data-keyword=' + _cls + ']').getBoundingClientRect().top;
            
			btn.closest('.initial-sound') && btn.closest('.initial-sound').scrollTo({
				left: btn.parentElement.offsetLeft - 95,
				top: 0,
				behavior: 'smooth'
			});
			_scl && _scl.scrollTo({
                top: _top + _scl.scrollTop - _add,
                left: 0,
                behavior: 'smooth'
            })
        })
	})
}

/* S: 2024-05-29 예상등급 추가(마이현대 메인)*/
function levelExpect () {
    let amount = $(".my-grade .status-current .status-price span").text().replace(",", "");
    let currentBar =  $(".my-grade .status-current .current-bar");
    let levelIcon = $(".my-grade .present-level");
    let dataNation = $(".my-grade__status").attr("data-nation");

    //등급 아이콘 변경 및 최저, 최대 클래스 추가
    if (amount == 0) {
        currentBar.addClass('min');
    }
    //내국인
    if (dataNation == "kor") {
        // if (0 < amount && amount < 800) {
        //     levelIcon.attr("title","Silver").text("S");
        // }
        // if (800 <= amount  && amount < 2000) {
        //     levelIcon.attr("title","Gold").text("G");
        // }
        // if (2000 <= amount && amount < 4000) {
        //     levelIcon.attr("title","Black").text("B");
        // }
        if (amount >= 4000) {
            currentBar.removeClass('min');
            currentBar.addClass('max');
            // levelIcon.attr("title","Prestige").text("P");
        }
        //bar 넓이 퍼센트 계산
        let barWidth = (amount / 4000) * 100;
        console.log(barWidth)
        if (amount >= 4000) {
            currentBar.css("width","100%");
        } else {
            currentBar.css("width", barWidth + "%");
        }
    } 
    //외국인
    else {
        // if (0 < amount && amount < 2000) {
        //     levelIcon.attr("title","Silver").text("S");
        // }
        // if (2000 <= amount  && amount < 4000) {
        //     levelIcon.attr("title","Gold").text("G");
        // }
        // if (4000 <= amount && amount < 8000) {
        //     levelIcon.attr("title","Black").text("B");
        // }
        if (amount >= 8000) {
            currentBar.removeClass('min');
            currentBar.addClass('max');
            // levelIcon.attr("title","Prestige").text("P");
        }
        //bar 넓이 퍼센트 계산
        let barWidth = (amount / 8000) * 100;
        console.log(barWidth)
        if (amount >= 8000) {
            currentBar.css("width","100%");
        } else {
            currentBar.css("width", barWidth + "%");
        }
    }
}
/* E: 2024-05-29 예상등급 추가(마이현대 메인)*/

// 툴틸
function viewTooltip(btn, type) {
    btn.addEventListener('click', () => {
        _viewToolTip();
    });
    const _viewToolTip = () => {
		const _winWid = window.innerWidth;
        const _target = btn.parentNode.querySelector('.wrap-tooltip__content');
        const _top = btn.getBoundingClientRect().top;
        const _left = btn.getBoundingClientRect().left;
        // 레이어 경우 top 사용 안함
        if (!btn.closest('.layer-dim')) {
            _target.style.top = `${_top + 30}px`;
        }
        // 모바일, 레이어 경우 left 사용 안함
        if (!_mobile && !btn.closest('.layer-dim')) {
            _target.style.left = `${_left}px`;
        }
        removeOther();
        // _target.classList.add('active');
        _target.style.display = 'block';
        _target.querySelector('.btn-close').addEventListener('click', () => {
            // _target.classList.remove('active');
            _target.removeAttribute('style');
        });
        window.addEventListener('scroll', () => {
            _target.getAttribute('style') && _target.removeAttribute('style');
            if (!_target.classList.contains('active')) {
                return;
            }
            _target.classList.remove('active');
        })
    }
    const removeOther = () => {
        Array.prototype.forEach.call(document.querySelectorAll('.wrap-tooltip__content'), el => {
            el.classList.contains('active') && el.classList.remove('active');
            el.style.removeProperty('display');
        })
    }
    type && _viewToolTip();
}
// 생성된 DIV 영역 팝업
function showElPop1(data){
    if(data){
        tmpHtmlDiv = data;
        const delTargetId = $(data).attr('id');
        $("#"+delTargetId).remove();

        openEl3(tmpHtmlDiv);
    }
}
function openEl3(data) {
    if(!data){
        return;
    }
    // 팝업 높이값 만들기
    const setHgt = (layer) => {
        const _hgt = window.innerHeight;
        const _child = layer.firstElementChild;
        const _baseHgt = 60;
        let _excHgt = 0;
        if (_child.clientHeight === 0 || !layer.querySelector('.area-scroll')) {
            return;
        }

        const _scrolls = layer.querySelectorAll('.area-scroll');
        const _setHgtTargets = Array.prototype.map.call(_scrolls, el => {
            return el.parentNode.classList.contains('download-coupon') ? el.parentNode : el;
        });
        const _scrollHgt = _setHgtTargets[0].scrollHeight;

        if ((_hgt - _baseHgt) < _child.clientHeight) {
            _child.style.transitionDuration = '0s';
            _child.style.height = `${_hgt - _baseHgt}px`;
        }

        _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('[data-scroll="exc"]'), (acc, el) => {
            return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
        }, 0);
        const _layerExc = parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-bottom'));
        const _scrollExc = parseInt(window.getComputedStyle(_setHgtTargets[0]).getPropertyValue('margin-top'));
        const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc;

        if (layer.querySelector('[data-scroll="exc"]') && _computedHgt <= _child.clientHeight) {
            Array.prototype.forEach.call(_setHgtTargets, el => {
                if (_computedHgt > _scrollHgt && !layer.querySelector('.wrap-search-sch')) {
                    el.style.height = `${_scrollHgt}px`;
                } else {
                    el.style.height = `${_computedHgt}px`;
                }
            })
        }
    }
    // 레이어 만들기
    const makeLayer = (res) => {
        const _layer = document.createElement('div');
        _layer.className = 'layer-dim';
        $(_layer).html(res);
        $("body").append(_layer);
        setTimeout(() => {
            _layer.querySelector('div').classList.add('active');
            const _dim = _layer.querySelector('[data-dim]') && _layer.querySelector('[data-dim]').dataset.dim;
            bodyFreeze(`${_dim ? 'freeze' : ''}`);
            // 레이어 높이값 설정
            !_mobile && setHgt(_layer);
        }, 100);
    }
    makeLayer(data);
}
// 팝업 높이값 만들기
function setLayerSelfHgt(layer) {
    const _hgt = window.innerHeight;
    const _child = layer.querySelector('.download-coupon') ? layer.querySelector('.download-coupon') : layer.firstElementChild;
    const _baseHgt = 60;
    let _excHgt = 0;
    if (_child.clientHeight === 0 || !layer.querySelector('.area-scroll')) {
        return;
    }

    const _scrolls = layer.querySelectorAll('.area-scroll');
    const _setHgtTargets = Array.prototype.map.call(_scrolls, el => {
        return el.parentNode.classList.contains('download-coupon') ? el.parentNode : el;
    });
    const _scrollHgt = _setHgtTargets[0].scrollHeight;

    if ((_hgt - _baseHgt) < _child.clientHeight) {
        layer.style.transitionDuration = '0s';
        layer.style.height = `${_hgt - _baseHgt}px`;
    }

    _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('[data-scroll="exc"]'), (acc, el) => {
        return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
    }, 0);
    const _layerExc = parseInt(window.getComputedStyle(layer).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(layer).getPropertyValue('padding-bottom'));
    const _scrollExc = parseInt(window.getComputedStyle(_setHgtTargets[0]).getPropertyValue('margin-top'));
    const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc;

    if (layer.querySelector('[data-scroll="exc"]') && _computedHgt <= _child.clientHeight) {
        Array.prototype.forEach.call(_setHgtTargets, el => {
            if (_computedHgt > _scrollHgt && !layer.querySelector('.wrap-search-sch')) {
                el.style.height = `${_scrollHgt}px`;
            } else {
                el.style.height = `${_computedHgt}px`;
            }
        })
    }
}
// max-length
function maxLengthInpCheck(el) {
    if (el.value.length > el.maxLength) {
        el.value = el.value.slice(0, el.maxLength);
    }
}
/* 20231226 */
function setTimePicker(el, base, cls) {
    if (!el.querySelector('select')) {
        return;
    }
    const init = {
        posWrap: '',
        listWrap: '',
        addSelect: '',
        selectBox: '',
        options: '',
        isFirst: false,
        firstX: 0,
        firstY: 0,
        oldY: 0,
        direct: 0,
        isMove: false,
        moveLeft: 0,
        moveTop: 0,
        startTime: 0,
        endTime: 0,
        speed: 0,
        ratio: 0.8,
        radius: 90,
        hgt: 30,
        pi: Math.PI / 180,
        isView: [],
        cur: 0,
        idx: 0,
        val: 0
    }
    // 만들기
    const makeSelect = () => {
        init.posWrap = document.createElement('div');
        init.posWrap.className = 'box-timepicker';
        init.listWrap = el.querySelector('.wrap-timepicker-item') ? el.querySelector('.wrap-timepicker-item') : document.createElement('div');
        init.addSelect = el.querySelector('.list-timepicker') ? el.querySelector('.list-timepicker') : document.createElement('ul');
        init.selectBox = el.querySelector('select');
        init.options = init.selectBox.querySelectorAll('option:not([value=""]');

        init.listWrap.className = 'wrap-timepicker-item';
        init.addSelect.className = 'list-timepicker';
        init.addSelect.setAttribute('data-parentid', init.selectBox.id);
        init.addSelect.innerHTML = Array.prototype.reduce.call(init.options, (acc, option) => {
            if (option.value === '') {
                return '';
            }
            return acc += `<li class="${init.selectBox.value === option.value ? '"is-selected"' : ''}"><p data-val="${option.value}">${option.text}</p></li>`
        },'');

        init.listWrap.appendChild(init.addSelect);
        if (init.options.length < 24) {
            const _inner = init.addSelect.innerHTML;
            init.addSelect.innerHTML += _inner;
        }
        init.posWrap.append(init.listWrap);
        base.append(init.posWrap);
        setTimeout(() => {
            base.closest('.wrap-add-timepicker').classList.add('is-active');
        }, 10);
        
        const _idx = init.selectBox.value ? init.selectBox.querySelector('[value=""]') ? searchValOptIdx(init.selectBox, init.selectBox.value) - 1 : searchValOptIdx(init.selectBox, init.selectBox.value) : 0;
        init.idx = Number(_idx);

        setUnitPos(); //위치
        dragStart(); // swipe 시작
        setCloseSelect(); // 레이어 닫기
        setValue();
    }
    // set value
    const setValue = () => {
        const _base = base.closest('.wrap-add-timepicker');
        _base.querySelector('.btn-square').addEventListener('click', e => {
            const _target = init.selectBox.querySelector(`option[value="${init.val}"]`);
            if (_target) {
                init.selectBox.querySelector(`option[value="${init.val}"]`).setAttribute('value', init.val);
                init.selectBox.value = init.val;
            }
            _base.remove();
            bodyFreeze();
        })
    }
    // select body click close
    const setCloseSelect = () => {
        init.isFirst = true;
        const _target = base.closest('.wrap-add-timepicker');
        const _closeBtn = _target.querySelector('.btn-close')
        if (!_target) {
            return;
        }
        _target.addEventListener('click', (e) => {
            if (!_target.classList.contains('is-active') || e.target.closest('.timepicker__inner') && !e.target.classList.contains('btn-close')) {
                return;
            }
            _target.remove();
            bodyFreeze();
        })
    }
    const dragStart = () => {
        init.listWrap.addEventListener('touchstart', mouseDown);
        window.addEventListener('touchmove', mouseMove)
        window.addEventListener('touchend', mouseUp)
    };
    const mouseDown = (event) => {
        if (init.isMove) {
            return;
        }
        event.preventDefault();

        init.firstX = event.type !== 'mousedown' ? event.touches[0].screenX : event.pageX;
        init.firstY = event.type !== 'mousedown' ? event.touches[0].screenY : event.pageY;
        init.oldY = event.type !== 'mousedown' ? event.touches[0].screenY : event.pageY;

        init.moveLeft = 0;
        init.moveTop = 0;
        init.isMove = true;
        init.startTime = new Date();
    };
    const mouseMove = (event) => {
        if (!init.isMove) {
            return;
        }

        const _moveX = event.type !== 'mousemove' ? event.touches[0].screenX : event.pageX;
        const _moveY = event.type !== 'mousemove' ? event.touches[0].screenY : event.pageY;

        init.moveLeft = init.firstX - _moveX;
        init.moveTop = init.firstY - _moveY;
        init.cur = init.cur - (Math.round(init.moveTop / 30));
        init.direct = init.oldY - event.touches[0].screenY > 0 ? 1 : -1;
        init.oldY = event.type !== 'mousemove' ? event.touches[0].screenY : event.pageY;
        setUnitPos();
    };
    const mouseUp = () => {
        if (!init.isMove) {
            return;
        }
        calcMove();
    };
    // unit배치
    const setUnitPos = () => {
        const _childrens = init.addSelect.children;
        const _len = _childrens.length;
        init.hgt = 360 / _len;
        Array.prototype.forEach.call(_childrens, (item, idx) => {
            const _idx = (idx + init.idx) % _len <  0 ? _len + ((idx + init.idx) % _len) : (idx + init.idx) % _len;
            const _item = _childrens[_idx];
            const _ang = (init.hgt * idx) + (init.cur * (_len / 36));
            const _deg = ((_ang % 360) + 360) % 360;
            const _rad = _ang * init.pi;
            const _diameter = Math.sin(_rad) * (_len * 5);
            if(_deg < init.hgt || _deg > 360 - init.hgt){
                _item.classList.add('on');
            }else{
                _item.classList.remove('on');
            }
            if(_deg <= (init.hgt * 3) || _deg >= 360 - (init.hgt * 3)){
                _item.style.display = "block";
            }else{
                _item.style.display = "none";
            }
			_item.style.top = `${_diameter}px`;
			_item.style.transform = `rotateX(${_ang}deg)`;
        })
    }
    // 선택 값 설정 및 위치 조정
    const calcMove = () => {
        init.endTime = new Date();
        init.idx = init.idx + (Math.round(init.cur / 25) * -1); //선택 값
        const _len = init.addSelect.children.length;
        const _idx = (init.idx) % _len <  0 ? _len + ((init.idx) % _len) : (init.idx) % _len;
        init.val = init.addSelect.children[_idx].querySelector('p').dataset.val;
        init.cur = 0;
        setUnitPos()

        init.isMove = false;
        init.firstX = 0;
        init.firstY = 0;
        init.moveLeft = 0;
        init.moveTop = 0;
    }
    makeSelect();
}
// 레이어 틀 작업
function wrapTimePicker(el) {
    const tit = document.querySelector('html').getAttribute('lang') === 'en' ? 'Enter Departure time' : document.querySelector('html').getAttribute('lang') === 'zh' ? '请选择出境时间' : '출국 시간을 선택하세요';
    const useTxt = document.querySelector('html').getAttribute('lang') === 'en' ? 'use' : document.querySelector('html').getAttribute('lang') === 'zh' ? '使用' : '적용';
    const _wrap = document.createElement('div');
    const _cls = `timepicker_${parseInt(Math.random() * 1000000)}`;
    _wrap.className = `wrap-add-timepicker ${_cls}`;
    _wrap.innerHTML = `<div class="timepicker__inner">
        <div class="btn-close-layer type-bar">
            <button type="button" class="btn-close">레이어 닫기</button>
        </div>
        <h3 class="tit-calendar">${tit}</h3>
        <div class="area-timepicker"></div>
        <button type="button" class="btn-square type-dark-1 size-big type-full">${useTxt}</button>
    </div>`;
    document.body.append(_wrap);
    bodyFreeze('freeze');
    Array.prototype.forEach.call(el.querySelectorAll('.type-time'), item => {
        setTimePicker(item, _wrap.querySelector('.area-timepicker'), _cls);
    })
}



/* S: 2023-10-18 리뷰라운지 추가 */
window.addEventListener('load', () => {
    // 리뷰라운지 리스트 배너 swiper
    document.querySelector('.review-rounge .swiper__main-banner') && setSwiper({target: '.review-rounge .swiper__main-banner', pagination: '.swiper-pagination', paginationType: 'fraction'});
    // 필터 range
    // document.querySelector("[data-role=range]") && Array.prototype.forEach.call(document.querySelectorAll("[data-role=range]"), el => {
    //     setRangeSlide(el);
    // });
    // 상세리뷰 포토 스와이프
    // document.querySelector('.swiper-detail-photo') && setSwiper({target: '.swiper-detail-photo', pagination: '.pagination-fraction', paginationType: 'fraction', navigation: true});
    // 별점입력
    document.querySelector('.star_grade') && starGrade(document.querySelector('.star_grade'));
    // observer
    reviewCheckLayer();
    /* S: 2023-11-07 리뷰라운지 수정 추가 */
    // 리뷰체크 갯수 제한 실행    
    _limitCheckboxes("review-type",3);
    _limitCheckboxes("review-problems",3);
    _limitCheckboxes("review-color",2);
    // 리뷰라운지 리스트 태그 삭제
	_checkTag('.review-rounge ul.list-filter-result','.btn-reset');
	// 리뷰라운지 리스트 좋아요 On/Off
	// _likeBtnOnOff('.review-rounge ul.list-review-rounge'); //2023-11-23 개발에서 실행시킴
    // _likeBtnOnOff('.photo-review-detail'); //2023-11-23 개발에서 실행시킴
    /* E: 2023-11-07 리뷰라운지 수정 추가 */
	reviewCate(); //2023-11-17 리스트 페이지의 카테고리 제어 추가
    reviewUnused(); //2023-12-20 키, 몸무게, 발사이즈 사용안함 추가
});
//range 슬라이드
function setRangeSlide(el) {
    const initial = {};
    const _dragArea = el.querySelector('.graph-track');
    const _curData = el.querySelector('.review-form__exp span');
    const slideMove = (thumbUnit, barUnit) => {
        const _left = initial.stepWid * initial.curVal > initial.rangeWid ? initial.rangeWid : initial.stepWid * initial.curVal;
        thumbUnit.style.left = `${_left}px`;
        barUnit.style.width = `${_left}px`;
        _curData.innerHTML = initial.value;
    }
    // slide
    const rangeInit = (target) => {
        const _range = target.querySelector('input[type=range]');
        const _wrapDivision = target.querySelector('.wrap-division');
        const _thumb = target.querySelector('.graph-track__cur');
        const _has = _range.querySelector('.cur-bar');
        const _curBar = _range.querySelector('.cur-bar') ? _range.querySelector('.cur-bar') : document.createElement('div');
        
        initial.rangeWid = 0,
        initial.stepWid = 0
        initial.steps = (_range.getAttribute('max') - _range.getAttribute('min')) / _range.getAttribute('step');
        initial.value = _range.value;
        initial.curVal = (parseInt(_range.value) - parseInt(_range.getAttribute('min'))) / parseInt(_range.getAttribute('step'));
    
        initial.rangeWid = target.clientWidth;
        initial.stepWid = initial.rangeWid / (initial.steps - 1);
    
        if (!_has) {
            _curBar.className = "cur-bar";
            _wrapDivision.append(_curBar);
        }
        slideMove(_thumb, _curBar);
    
        // range 이동
        _range.addEventListener('input', () => {
            initial.curVal = (parseInt(_range.value) - parseInt(_range.getAttribute('min'))) / parseInt(_range.getAttribute('step'));
            initial.value = _range.value;
            slideMove(_thumb, _curBar);
        });
    }
    Array.prototype.forEach.call(el.querySelectorAll('.cur-bar'), bar => {
		bar.removeAttribute('style');
		bar.remove();
	})
    setTimeout(() => {
        rangeInit(_dragArea);
    }, 100);
}
// 별점입력
function starGrade(base) {
    const starButtons = base.querySelectorAll('button');
    starButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            starButtons.forEach((button, i) => {
                if (i <= index) {
                    button.classList.add('on');
                } else {
                    button.classList.remove('on');
                }
            });
        });
    });
}
// mutation observer
function reviewCheckLayer() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach( mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach( el => {
                    if (!el.querySelector) {
                        return;
                    }
                    //필터 range 20231228
                    if (el.querySelector("[data-role=range]")) {
                        Array.prototype.forEach.call(el.querySelectorAll("[data-role=range]"), unit => {
                            setRangeSlide(unit);
                        });
                    }
                    // 상세리뷰 포토 스와이프
                    if (el.querySelector(".swiper-detail-photo")) {
                        setSwiper({target: '.swiper-detail-photo', pagination: '.pagination-fraction', paginationType: 'fraction', navigation: true});
                    }
                    // 별점입력
                    if (el.querySelector(".star_grade")) {
                        starGrade(document.querySelector('.star_grade'));
                    }
                    // 선택된 값 체크
                    if (el.querySelector('[data-text="review-type"]')) {
                        checkChoiceVal();
                    }
                });
            }
        });
    });
      
    // observe everything except attributes
    observer.observe(document.body, {
    childList: true, // observe direct children
    subtree: true, // and lower descendants too
    characterDataOldValue: true // pass old data to callback
    });
}

/* S: 2023-11-07 리뷰라운지 수정 추가 */
// 리뷰체크 갯수 제한 셋팅
function _limitCheckboxes(_checkerName,_limitNum) {
	let _checker = document.querySelector('[data-text='+ _checkerName +']');
	if(_checker){
		let _checkerInput = _checker.querySelectorAll('input');        
		for (var i = 0; i < _checkerInput.length; i++) {
			_checkerInput[i].onclick = function() {
				var _checkedcount = 0;
				for (var i = 0; i < _checkerInput.length; i++) {
					_checkedcount += (_checkerInput[i].checked) ? 1 : 0;
				}
				if (_checkedcount > _limitNum) {
					this.checked = false;
				}
			}
		}
	}
}
// 리뷰라운지 리스트 태그 삭제
function _checkTag(target,reset){
    let _resetBtn = document.querySelector(reset)
	let _reviewPage = document.querySelector(target);    
	if(_reviewPage){
		let _reviewTag = _reviewPage.querySelectorAll('li');
		_reviewTag.forEach((_el,_idx) => {
			_el.addEventListener('click', function() {
				_el.remove();
			})
		});
		if(_resetBtn){
			_resetBtn.addEventListener('click', function(){
				_reviewTag.forEach((_el,_idx) => {
					_el.remove();
				})
			});
		}        
	}		
};
// 리뷰라운지 리스트, 상세 좋아요 On/Off
function _likeBtnOnOff(target){
	// 로그인체크
	if(!isLogin){ alert("로그인 후 이용해주세요."); login(); return; }

	let _reviewPage = document.querySelectorAll(target);
	if(_reviewPage){
		_reviewPage.forEach((_el,_idx) => {
			let _reviewTag = _el.querySelectorAll('.review__like');
			_reviewTag.forEach((_el1,_idx1) => {
				let _reviewTagBtns = _el1.querySelector('button')
				_el1.addEventListener('click', function() {
					if(!_reviewTagBtns.classList.contains('is-active')){
						_reviewTagBtns.classList.add('is-active');
					}
					else {
						_reviewTagBtns.classList.remove('is-active');
					}
				})
			});
		});
	}
};
/* E: 2023-11-07 리뷰라운지 수정 추가 */

//선택된 값 체크 2023-11-13 추가 20231228
function checkChoiceVal() {
 const _base = document.querySelector('.pop-review-rounge');
 const _ranges = _base.querySelectorAll('[data-role=range]');
 const _wrap = document.querySelector('.list-filter-result');
 const _list = _wrap.querySelectorAll('[data-val]');
 const searchInp = (name, val) => {
     Array.prototype.forEach.call(document.querySelectorAll(`input[name=${name}]`), inp => {
         if (inp.type === 'range') {
             if (val === 'disabled') {
                 inp.closest('.wrap-review-form').classList.add('type-disabled');
                 inp.closest('.wrap-review-form').querySelector('.review-form__tit.type__check button').classList.add('is-active');
                 inp.disabled = true;
             } else {
             	inp.closest('.wrap-review-form').classList.contains('type-disabled') && inp.closest('.wrap-review-form').classList.remove('type-disabled');
             	inp.closest('.wrap-review-form').querySelector('.review-form__tit.type__check button').classList.contains('is-active') && inp.closest('.wrap-review-form').querySelector('.review-form__tit.type__check button').classList.remove('is-active');
             	inp.disabled = false;
                 inp.value = val;
             }
         } else {
             if (inp.value === val) {
                 inp.setAttribute('checked', '');
                 inp.checked = true;
             }
         }
     })
     Array.prototype.forEach.call(_ranges, inp => {
         setRangeSlide(inp);
     })
 }
 const checkSelected = () => {
     if (_list.length === 0) {
         Array.prototype.forEach.call(_ranges, inp => {
             setRangeSlide(inp);
         })
     }
     Array.prototype.forEach.call(_list, el => {
         const _val = el.dataset.val.split('__');
         searchInp(_val[0], _val[1]);
     })
 }
 const resetSelectedCheckbox = () => {
     const _checkeds = _base.querySelectorAll('input[type=checkbox]:checked');
     Array.prototype.forEach.call(_checkeds, inp => {
         inp.checked = false;
     });
     checkSelected();
 }
 resetSelectedCheckbox();
}

/* S: 2023-11-17 리뷰라운지 리스트 카테고리 선택 */
function reviewCate() {
	$(".review-rounge .search-review-data .list-filter button").click(function(){
		if(!$(this).hasClass('is-active')){
			if(!$(this).hasClass('all')){
				$(".review-rounge .search-review-data .list-filter .all").removeClass('is-active'); //전체버튼 해제
			} else if($(this).hasClass('all')){
				$(".review-rounge .search-review-data .list-filter button").removeClass('is-active'); //카테고리 해제
			}
			$(this).addClass('is-active');
		} else {
			$(this).removeClass('is-active');
			if($(".review-rounge .search-review-data .list-filter .is-active").length == 0){
				$(".review-rounge .search-review-data .list-filter .all").addClass('is-active'); //전체버튼 해제
			}
		}
	});
}
/* S: 2023-11-17 리뷰라운지 리스트 카테고리 선택 */
/* S: 2023-12-20 리뷰라운지 사용안함 추가 */
function reviewUnused() {
	$(document).on("click", ".type-review-rounge .btn_unused", function(){
        let formBox = $(this).parents(".wrap-review-form");
		if (!$(this).hasClass("is-active")){
            $(this).addClass("is-active");
            formBox.addClass("type-disabled");
            formBox.find("input[type=range]").attr("disabled", "disabled");
            formBox.find("input[type=range]").val("");
		} else {
            $(this).removeClass("is-active");
			formBox.removeClass("type-disabled");
            formBox.find("input[type=range]").removeAttr('disabled');
        }
	});
} 
/* E: 2023-12-20 리뷰라운지 사용안함 추가 */
/* E: 2023-10-18 리뷰라운지 추가 */
function disableFilter(el) {
	const _val = el.dataset.val.split('__')[0];
	el.dataset.val = `${_val}__disabled`;
	el.classList.add('is-hidden');
	el.parentElement.style.display = 'none';
	removefilter(el);
}
/* E: 2023-12-28 리뷰라운지 추가 */

/* S: 2024-04-02 입점 및 제휴문의(공정거래) 신규 */
//파일첨부 폼
function fileAtached() {
    $('.wrap-form__file .btn-file__input input[type="file"]').change(function (e) {
        $(".wrap-form__file").addClass("is-attached");

        const fileName = e.target.files[0].name;
        const fileSize = e.target.files[0].size;
        if(fileSize < 1000000){
            var _size = Math.floor(fileSize/1000) + 'KB';
            $(".wrap-form__file .box-file__attached .file-info em").text(_size);
        }else{
            var _size = Math.floor(fileSize/1000000) + 'MB';
            $(".wrap-form__file .box-file__attached .file-info em").text(_size);
        }

        $(".wrap-form__file .box-file__attached .file-info span").text(fileName);
    });
    $('.wrap-form__file .btn-file__del').click(function(){
        let fileBox = $(this).parents('.wrap-form__file');
        fileBox.removeClass("is-attached");
        $(".wrap-form__file .box-file__attached .file-info span").text("");
        $(".wrap-form__file .box-file__attached .file-info em").text("");
        $('.wrap-form__file .btn-file__input input[type="file"]').val("");
    })
}
//제휴문의 리스트
function listContact() {
    $('.contact_us .receive_item .receive_number a, .contact_us .receive_item .btn-detail a').click(function(){
        let listItem = $(this).parents('.receive_item');
        let liestDetail = $(this).parents('.receive_item').find(".receive_detail");
		let btnDetail = $(this).parents('.receive_item').find(".btn-detail a");
        if(!listItem.hasClass("is-opend")){
            listItem.addClass("is-opend");
            liestDetail.slideDown();
			btnDetail.text("내용 닫기");
        } else {
            listItem.removeClass("is-opend");
            liestDetail.slideUp();
			btnDetail.text("내용 보기");
        }

		//닫기
		$('.contact_us .receive_item .receive_detail .sub-close a').click(function(){
			listItem.removeClass("is-opend");
			liestDetail.slideUp();
			btnDetail.text("내용 보기");
		});
    });
	
}
/* E: 2024-04-02 입점 및 제휴문의(공정거래) 신규 */

/* S: 2024-01-10 큐레이션 숨겨진 혜택 배경색 추가 */
function floatBenefitColor() {
    if($(".ps_benefits_card_box_1").length) {
        $(".ps_benefits_card_box_1 .benefits-slider .swiper-slide:nth-child(3n-2)").find(".product__img").addClass("prod_blue");
        $(".ps_benefits_card_box_1 .benefits-slider .swiper-slide:nth-child(3n - 1)").find(".product__img").addClass("prod_purp");
        $(".ps_benefits_card_box_1 .benefits-slider .swiper-slide:nth-child(3n)").find(".product__img").addClass("prod_pink");
    }
}
/* E: 2024-01-10 큐레이션 숨겨진 혜택 배경색 추가 */

