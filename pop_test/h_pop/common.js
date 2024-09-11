

// 앱다운로드 처리
function appDownload(siteNtnlCd){
    var siteNtnlCd = siteNtnlCd ? siteNtnlCd : dfsiInfo.siteNtnlCd;

    exApp.download({
        marketAnd : siteNtnlCd == "KR" ? dfsiInfo.appDownloadUrlKrAndroid : dfsiInfo.appDownloadUrlCnAndroid,
        marketIos : siteNtnlCd == "KR" ? dfsiInfo.appDownloadUrlKrIos : dfsiInfo.appDownloadUrlCnIos
    });
}

// 앱실행 처리
function appExecute(siteNtnlCd){
    exApp.execute2({
        appSchemeAnd : siteNtnlCd == "KR" ? dfsiInfo.appDownloadUrlKrAndroid : dfsiInfo.appDownloadUrlCnAndroid,
        appSchemeIos : siteNtnlCd == "KR" ? dfsiInfo.appDownloadUrlKrIos : dfsiInfo.appDownloadUrlCnIos
    });
}

//window load 이벤트 처리 2019-12-03 pub09 수정

//$(window).load(function(evt){
//	gnbMenuFocus();
//});
$(document).ready(function(){
    gnbMenuFocus();

    // 카테고리 JSONP load
    if($(".serviceCtgList > ul").length <1){
        loadCtgList();
    }
});
function gnbMenuFocus(){
    var href = location.href;
    var arr = href.split("/");
    var currentIndex = 0;

    if(arr.length >= 6){
        var chkPattern = "/" + arr[4] + "/" + arr[5];
        var plusShop = (arr.length > 6)? (arr[6].indexOf('spexId=0001282') != -1 || arr[6].indexOf('spexId=0001002') != -1) : false; // 운영
        //var plusShop = (arr.length > 6)? (arr[6].indexOf('spexId=0001063') != -1 || arr[6].indexOf('spexId=0001064') != -1) : false; // 개발
        for(num = 0; num < $(".gnb_item .fullMenuLink").length; num++){
            var currentItem = $(".gnb_item .fullMenuLink")[num];
            var currentUrl = currentItem.href;
            if(plusShop){
                currentIndex = 11;
                //$(d).click();
                $('.gnb .gnb_item').removeClass('selected');
                $(".gnb .gnb_item").eq(currentIndex).addClass('selected');
                break;
            }else{
                if(currentUrl.indexOf(chkPattern) != -1){
                    currentIndex = num;
                    //$(d).click();
                    $('.gnb .gnb_item').removeClass('selected');
                    $(".gnb .gnb_item").eq(currentIndex).addClass('selected');
                    break;
                }
            }
        }
    }
    if (!!$('.gnb_swiper').length) {
        var config = {
            slidesPerView: 'auto',
            spaceBetween: 0,
            pagination: false,
            wrapperClass: 'gnb',
            slideClass: 'gnb_item',
            setWrapperSize: true,
            initialSlide : currentIndex
        };
        var gnbSwiper = new Swiper('.gnb_swiper', config);
    }
}
//
//function gnbMenuFocus(){
//    var href = location.href;
//    var arr = href.split("/");
//    var isFocus = false;
//    	
//    if(arr.length >= 6){
//        var chkPattern = "/" + arr[4] + "/" + arr[5];
//        //var plusShop = (arr.length > 6)? (arr[6].indexOf('spexId=0001282') != -1 || arr[6].indexOf('spexId=0001002') != -1) : false; // 운영
//        var plusShop = (arr.length > 6)? (arr[6].indexOf('spexId=0001063') != -1 || arr[6].indexOf('spexId=0001002') != -1) : false;
//        for(var i=0, d ; d = $(".fullMenuLink")[i] ; i++){
//            var url = d.href;
//            if(url.indexOf(chkPattern) != -1){
//            	if (!!$('.gnb_swiper').length) {
//            		var config = {
//            				slidesPerView: 'auto',
//            				spaceBetween: 0,
//            				pagination: false,
//            				wrapperClass: 'gnb',
//            				slideClass: 'gnb_item',
//            				setWrapperSize: true,
//            				initialSlide : plusShop ? 11 : i
//            			};
//
//            		var gnbSwiper = new Swiper('.gnb_swiper', config);
//
//            		isFocus = true;
//            	}
//
//                //$(d).click();
//            	$('.gnb .gnb_item').removeClass('selected');
//            	$(d).parents().addClass('selected');
//
//            	if(plusShop){
//            		continue;
//            	}else{
//            		break;
//            	}	
//                
//            }
//        }
//    }
//
//    if(!isFocus){
//		var config = {
//				slidesPerView: 'auto',
//				spaceBetween: 0,
//				pagination: false,
//				wrapperClass: 'gnb',
//				slideClass: 'gnb_item',
//				setWrapperSize: true,
//				initialSlide : 0
//			};
//
//		var gnbSwiper = new Swiper('.gnb_swiper', config);
//    }
//}


// 회원 로그인 처리
function login(redirectUrl, orderYn,type,goosCd,qtyList,setGoosId,buyNow,notAdtGoodsCd,notAdtQtyList){
    var redirectUrl = typeof(redirectUrl) == "undefined" || redirectUrl == "" ? "?redirectUrl=" + top.location.href : "?redirectUrl=" + redirectUrl;
    redirectUrl = redirectUrl.replace("&", "%26");
    redirectUrl = redirectUrl.replace("&", "%26");
    redirectUrl = redirectUrl.replace("&", "%26");
    redirectUrl = redirectUrl.replace("&", "%26");
    redirectUrl = redirectUrl.replace("&", "%26");
    redirectUrl = redirectUrl.replace("&", "%26");
    redirectUrl = redirectUrl.replace("&", "%26");

    redirectUrl = redirectUrl.replace("#", "%23");

    var type = typeof(type) == "undefined" ? "" : "&type=" + type; // 성인인증 후처리 분기타입
    var goosCd = typeof(goosCd) == "undefined" ? "" : "&goosCd=" + goosCd;
    var qtyList = typeof(qtyList) == "undefined" ? "" : "&qtyList=" + qtyList;
    var notAdtGoodsCd = typeof(goosCd) == "undefined" ? "" : "&notAdtGoodsCd=" + notAdtGoodsCd;
    var notAdtQtyList = typeof(goosCd) == "undefined" ? "" : "&notAdtQtyList=" + notAdtQtyList;
    var setGoosId = typeof(setGoosId) == "undefined" ? "" : "&setGoosId=" + setGoosId;
    var buyNow = typeof(buyNow) == "undefined" ? "" : "&buyNow=" + buyNow;
    var orderYn		= typeof(orderYn) == "undefined" ? "" : "&orderYn=" + orderYn; // 상품상세 바로구매용도
    var path = ctx_curr + "/mm/mbshAuca/addLgin.do" + redirectUrl + orderYn + type + goosCd + qtyList + setGoosId +buyNow+notAdtGoodsCd+notAdtQtyList;
    var htmlAppYn = sessionStorage.getItem("htmlFileGen");
    if(htmlAppYn =="Y" || appYn =="Y"){
        controlAppbar('Y');
    }
    HDFUINEW.scroll_freeze();
    layerPopup("로그인", path, "loginLayer");
}

//레이어팝업 처리 함수
var scrollPosition_;
function layerPopup(title, path, areaId, closeYn){
    var areaId	= areaId ? areaId : "layer_iframe";
    var area	= $("#" + areaId);
    var path	= path.indexOf("?") == -1 ? path + "?layerPopupId=" + areaId : path + "&layerPopupId=" + areaId;

    // app인 경우에 GNB메뉴 숨김 처리
    //appGnbDisplay(false);		// HDDFS 리뉴얼 프로젝트 [김민수 - 2021.07.23] -  GNB미사용 제거

    // 영역삭제 - 기존에 레이어를 띄우고 다른 레이어를 띄우는 경우 기존 레이어를 초기화
    if(area.size() != 0){ area.remove(); }

    // 영역 생성
    var html = [];
    html.push("<div id='" + areaId + "' title='" + title + "' style='display:none;'>");
    html.push("<iframe src='" + path + "' frameborder='0'></iframe>")
    html.push("</div>");
    $("body").append(html.join(""));
    area = $("#" + areaId);


    // 영역 활성화
    area.dialog({
        autoOpen: false,
        resizable: false,
        dialogClass: "no_title iframe_type full_type", // 타이틀이 없는 타입(.no_title), 아이프레임 타입(.iframe_type), 100% 타입(.full_type)
        //dialogClass: "iframe_type full_type", // 타이틀이 없는 타입(.no_title), 아이프레임 타입(.iframe_type), 100% 타입(.full_type)
        width:'100%',
        modal: true,
        create: function( event, ui ) {
            // 닫기버튼 비노출 처리 -> 레이어에서 레이어를 또 활성화 시키는 경우 닫기버튼을 비노출하는 경우가 필요함 -> 출국정보 등록
            if(closeYn == "N"){
                top.$(".ui-dialog-titlebar-close").hide();
            }
        },
        open: function( event, ui ) {
            scrollPosition_ = $(window).scrollTop();
            HDFUINEW.scroll_freeze();
        },
        close: function( event, ui ) {
            var htmlAppYn = sessionStorage.getItem("htmlFileGen");
            if((htmlAppYn == "Y" || appYn =="Y") && areaId == "loginLayer"){
                controlAppbar('N');
            }
            HDFUINEW.scroll_unfreeze();
            // app인 경우에 GNB메뉴 보임 처리 -> 예외경로가 존재함.
            var exceptUrl	= ["/gd/dtl/goos.do"];
            var isDisp		= true;

            for(var i=0, d ; d = exceptUrl[i] ; i++){
                if(top.location.href.indexOf(d) != -1){
                    isDisp = false;
                    break;
                }
            }
            // HDDFS 리뉴얼 프로젝트 [김민수 - 2021.07.23] -  GNB미사용 제거
            //appGnbDisplay(typeof(defaultAppGnbDisp) == "boolean" ? defaultAppGnbDisp : isDisp);

            //$('html, body').css('overflow','');
            $(document).scrollTop(scrollPosition_);

            if(areaId == "loginLayer"){
                controlAppbar('N');
            }else if(areaId == "myDpatLimitGuide"){
                controlAppbar('N');
            }else if(areaId == "popMbshRepy"){
                controlAppbar('N');
            }else if(areaId == "srchAirOpenNm" || areaId == "srchShipOpenNm"){
                controlAppbar('N');
            }
        }
    });
    area.dialog('open');
}

// 회원 로그아웃 처리
function logout(data, callback){
    deleteCookie("uid"); //쿠키정보 먼저 삭제
    var data = typeof(data) == "undefined" ? {} : data;

    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/mbshAuca/saveLogout.json",
        dataType    : "json",
        type        : "POST",
        data        : data,
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }
            $.cookie('ssoLogin', null);			// 메인페이지 sso 자동로그인 횟수 초기화
            $.cookie('ssoLogin_pc_kr', null);	// 메인페이지 sso 자동로그인 횟수 초기화(pc_국문)
            $.cookie('ssoLogin_pc_en', null);	// 메인페이지 sso 자동로그인 횟수 초기화(pc_영문)
            $.cookie('ssoLogin_pc_cn', null);	// 메인페이지 sso 자동로그인 횟수 초기화(pc_중문)
            $.cookie('ssoLogin_pc_dcn', null);	// 메인페이지 sso 자동로그인 횟수 초기화(mo_역직구)
            $.cookie('ssoLogin_mo_kr', null);	// 메인페이지 sso 자동로그인 횟수 초기화(mo_국문)
            $.cookie('ssoLogin_mo_en', null);	// 메인페이지 sso 자동로그인 횟수 초기화(mo_영문)
            $.cookie('ssoLogin_mo_cn', null);	// 메인페이지 sso 자동로그인 횟수 초기화(mo_중문)
            $.cookie('ssoLogin_mo_dcn', null);	// 메인페이지 sso 자동로그인 횟수 초기화(mo_역직구)

            appCallLogout();							// 앱 로그아웃 정보 전달

            // 자동로그인 기능 해제.
            localStorage.removeItem("ack");
            //필터 storage 삭제
            sessionStorage.removeItem("scrollPosition");
            sessionStorage.removeItem("goosListType");
            sessionStorage.removeItem("goosFilterTabArea");
            sessionStorage.removeItem("layerFilterArea");
            sessionStorage.removeItem("goosListNxtPage");
            sessionStorage.removeItem("goodsListOrder");
            gfnSsoDscdToknReq(fnSsoDscdToknCallbackByLogout);	// SSO 토큰만료
            sessionStorage.removeItem("appCartCnt");            // 앱바 장바구니 영역
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// 로그아웃 시 sso callback 
function fnSsoDscdToknCallbackByLogout(){
    alert("로그아웃되었습니다.");
    sessionStorage.setItem("selMainSwiperPos",1);
    sessionStorage.setItem("mainSwiperPos",1);
    deleteCookie("uid"); //쿠키정보 먼저 삭제
    location.href = ctx_curr + "/dm/main.do";
}

// 바로구매 등록 처리 - 복수개 - 상품수량은 1개
function addBuyMultiOne(){
    if(arguments.length != 0){
        var onlnGoosCdList = [];
        var goosQtyList    = [];

        for(var i=0 ; i < arguments.length ; i++){
            if(typeof(arguments[i]) == "object"){
                for(var j=0 ; j < arguments[i].length ; j++){
                    onlnGoosCdList.push(arguments[i][j]);
                    goosQtyList.push(1);
                }
            }else if(typeof(arguments[i]) == "string"){
                var arr = arguments[i].split(/,/gi);

                for(var j=0, val ; val = arr[j] ; j++){
                    onlnGoosCdList.push(val);
                    goosQtyList.push(1);
                }
            }

        }

        addBuyMulti(onlnGoosCdList.join(","), goosQtyList.join(","));
    }
}

// 로그인후 리다이렉트 처리 - app공용으로 사용하기 위해서 분리됨.
function loginRedirect(path){
    if(path == "reload"){
        top.location.reload();
    }else if(path == "loginBuy"){
        top.loginBuy();
    }else{
        top.location.href = path;
    }
}


//로그인후 바로구매로 이어지는 경우의 처리를 위한 로직
var loginCartInfo = {}

function loginBuy(){
    // 단건구매인 경우의 대응 처리
    if(loginCartInfo.buyType == "addBuy"){
        addBuy(loginCartInfo.onlnGoosCd, loginCartInfo.goosQty, false);
    }

    // 멀티구매인 경우의 대응 처리
    if(loginCartInfo.buyType == "addBuyMulti"){
        addBuyMulti(loginCartInfo.onlnGoosCdList, loginCartInfo.goosQtyList, loginCartInfo.callback, false);
    }
}



//바로구매 멀티
function addBuyMulti(onlnGoosCdList, goosQtyList, callback, chkLogin){
    var chkLogin	= typeof(chkLogin) == "undefined" ? true : chkLogin;
    var cartType    = 'Y';

    // 전송 데이터 구성
    var cart = { onlnGoosCdList : onlnGoosCdList, goosQtyList : goosQtyList, mode : "order" }

    // 전송전에 로그인 상태 체크
    if(chkLogin && !isLogin){
        loginCartInfo = cart;
        loginCartInfo.buyType	= "addBuyMulti";
        loginCartInfo.callback	= callback;
        login("", "Y");
        return;
    }

    newAddCartMulti(onlnGoosCdList.join(","), goosQtyList.join(","), '', '', 'insert',cartType);

    /*
    // 전송
    $.ajax({
        async       : true,
        url         : ctx_shop + "/cm/comm/addCartMulti.json",
        dataType    : "jsonp",
        type        : "POST",
        data        : cart,
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }
            
            
            // 콜백함수가 존재하는 경우
            if(typeof(callback) == "function"){
                callback(data);
                return;
            }
            
            if (showLayer === 'N') {
            	return false;
            } else {
            	if(confirm("선택하신 상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")){
                    //location.href = ctx_shop + "/or/order/listCart.do"
                	// HDDFS 리뉴얼 프로젝트 [김영훈 - 2021.03.29] - 장바구니 레이어 호출
                	if( $("#myHyundaiOrderDetailDiv").hasClass("active")){
            			// 마이 현대에서 동일 상품 재 구매시
            			$("#myHyundaiOrderDetailDiv").removeClass("active");
            		}
                	setTimeout(cartLayerStat('CART'), 20);
                    return false;
                }
            }
            
            
            

            // 바로구매 처리
            
            $.ajax({
                async       : true,
                url         : ctx_shop + '/or/order/checkOrderPsbCartGoos.json',
                dataType    : "jsonp",
                type        : "POST",
                data        : {checkedCartSeq : data.info.cartSeq },
                success     : function(data, textStatus, jqXHR){
                    if(crew.ajaxValidate(data, false)){
                        if(data.resultCode != 1) {
                            alert(data.message);
                        } else if (data.resultCode == 1) {
                            window.location.href = ctx_shop + data.nextUrl;
                        }
                    } else {
                        alert('처리중 오류가 발생하였습니다.');
                    }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    alert('처리중 오류가 발생하였습니다.');
                }
            });
            
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
    */
}



//바로구매 처리
function addBuy(onlnGoosCd, goosQty, chkLogin){

    var cartType =	'Y';
    var goosQty 	= typeof(goosQty) == "undefined" ? 1 : goosQty;
    var chkLogin	= typeof(chkLogin) == "undefined" ? true : chkLogin;

    // 전송 데이터 구성
    var cart = { onlnGoosCd : onlnGoosCd, goosQty : goosQty, mode : "order" }

    // 전송전에 로그인 상태 체크
    if(chkLogin && !isLogin){
        loginCartInfo = cart;
        loginCartInfo.buyType = "addBuy";
        login("",cartType,"",onlnGoosCd,goosQty,"");
        return;
    }

    newAddCartMulti(onlnGoosCd, goosQty, '', '', 'insert',cartType);

    /*
    // 전송
    $.ajax({
        async       : true,
        url         : ctx_shop + "/cm/comm/addCart.json",
        dataType    : "jsonp",
        type        : "POST",
        data        : cart,
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            // 바로구매 처리
            $.ajax({
                async       : true,
                url         : ctx_shop + '/or/order/checkOrderPsbCartGoos.json',
                dataType    : "json",
                type        : "POST",
                data        : {checkedCartSeq : data.info.cartSeq },
                success     : function(data, textStatus, jqXHR){
                    if(crew.ajaxValidate(data, false)){
                        if(data.resultCode != 1) {
                            alert(data.message);
                        } else if (data.resultCode == 1) {
                            window.location.href = ctx_curr + data.nextUrl;
                        }
                    } else {
                        alert('처리중 오류가 발생하였습니다.');
                    }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    alert('처리중 오류가 발생하였습니다.');
                }
            });
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
    */
}

// 장바구니 상품 등록 처리 - 복수개 - 상품수량은 1개
function addCartMultiOne(){
    if(arguments.length != 0){
        var onlnGoosCdList = [];
        var goosQtyList    = [];

        for(var i=0 ; i < arguments.length ; i++){
            if(typeof(arguments[i]) == "object"){
                for(var j=0 ; j < arguments[i].length ; j++){
                    onlnGoosCdList.push(arguments[i][j]);
                    goosQtyList.push(1);
                }
            }else if(typeof(arguments[i]) == "string"){
                var arr = arguments[i].split(/,/gi);

                for(var j=0, val ; val = arr[j] ; j++){
                    onlnGoosCdList.push(val);
                    goosQtyList.push(1);
                }
            }

        }

        addCartMulti(onlnGoosCdList.join(","), goosQtyList.join(","));
    }
}

/**
 * HDDFS 리뉴얼 프로젝트 [김인호 - 2021.05.26] -  세트 장바구니 담기 추가
 */
function newAddSetCartMulti(onlnGoosCdList, goosQtyList, setGoosId, setType) {
    var onlnGoosCdList   = typeof(onlnGoosCdList)  === "undefined" ? "" : onlnGoosCdList;
    var setType = setType === "" ? "" : setType; // '' : 최초호출(조건따라서 레이어 혹은 장바구니 담기는 로직 ,  'I' : 새로담기
    var dupMsg		= "장바구니에 동일한 상품이 존재합니다. 추가로 담으시겠습니까?";
    var inMode      = "insert";
    var type = "";
    var cart = "";

    var sumResult = 0;
    for (var i = 0; i<goosQtyList.split(",").length; i++){
        sumResult += Number(goosQtyList.split(",")[i]) ;
    }

    for (var i = 0; i<goosQtyList.split(",").length; i++){
        if(Number(goosQtyList.split(",")[i]) > 50000){
            alert('최대 구매가능 수량은 50000개 입니다.');
            return false;
        }
    }
    var setEvtClsCd = "";
    $.ajax({
        url:  ctx_curr + "/or/order/getSetGoosCfm.json",
        method: "post",
        data: {setGoosId : setGoosId},
        async: false,
        dataType : 'json',
        success : function(data, textStatus, jqXHR) {
            var  resultCode = data.resultCode;
            setEvtClsCd = data.info.getEvtClsCd;
            if(data.resultCode === 1) {  // 장바구니 세트상품 유
                //수량변견 관련 layer호출
                type = "exist"; //이미 장바구니 존재
                evtCartLayer(type ,goosQtyList , setGoosId );

                if(data.info.getEvtClsCd === 001){
                    $("#hiddenSetQty").val(goosQtyList);
                }

                if(setType !== ""){

                    cart = { onlnGoosCdList : onlnGoosCdList, goosQtyList : goosQtyList, setGoosId : setGoosId  , mode : inMode , setType : setType }
                    // 전송
                    $.ajax({
                        async       : false,
                        url         : ctx_curr + "/cm/comm/addCartMulti.json",
                        dataType    : "json",
                        type        : "POST",
                        data        : cart,
                        success     : function(data, textStatus, jqXHR){

                            if(data.cartIsLogin === "Y"){
                                isLogin = true;
                            }


                            if(data.resultCode === 1) {
                                commToastMsg("장바구니에 담겼습니다 :)","");
                                addCartCount();
                                $("#layer_default").dialog("close");
                                if(setEvtClsCd == "001"){
                                    $(".setEvtGoosLayer").removeClass("active");
                                }else{
                                    $("#setEvtLayer").dialog("close");
                                }
                            }else{
                                if(data.resultCode === 0){
                                    commToastMsg('처리중 오류가 발생하였습니다.',"");
                                }else{
                                    commToastMsg(data.message,"");
                                }
                            }

                        },
                        error : function(jqXHR, textStatus, errorThrown){
                            console.log(jqXHR.status);
                            commToastMsg('처리중 오류가 발생하였습니다.',"");
                        }
                    });
                }

            }else{ // 장바구니 세트상품 무

                setType = "I";
                cart = { onlnGoosCdList : onlnGoosCdList, goosQtyList : goosQtyList, setGoosId : setGoosId  , mode : inMode , setType : "I" }

                // 전송
                $.ajax({
                    async       : false,
                    url         : ctx_curr + "/cm/comm/addCartMulti.json",
                    dataType    : "json",
                    type        : "POST",
                    data        : cart,
                    success     : function(data, textStatus, jqXHR){

                        if(data.cartIsLogin === "Y"){
                            isLogin = true;
                        }

                        if(data.resultCode === 1) {
                            commToastMsg("장바구니에 담겼습니다 :)","");
                            addCartCount();
                            if(setEvtClsCd === "001"){
                                $(".setEvtGoosLayer").removeClass("active");
                            }else{
                                $("#setEvtLayer").dialog("close");
                            }
                            return false;
                        }else{
                            commToastMsg(data.message,"");
                        }

                    },
                    error       : function(jqXHR, textStatus, errorThrown){
                        console.log(jqXHR.status);
                        commToastMsg('처리중 오류가 발생하였습니다.',"");
                    }
                });
            }
        },
        error : function(jqXHR, textStatus, errorThrown) {
            commToastMsg('처리중 오류가 발생하였습니다.',"");
        }
    });

}

/**
 * HDDFS 리뉴얼 프로젝트 [김인호 - 2021.06.04] - 장바구니 cnt
 */
function appCartCount(cartCnt) {

    if(appYn == "Y"){
        var uAgent = exApp.getAgent();
        if(uAgent == "android" || uAgent == "ios"){
            if(uAgent == "android"){
                android.cartCount(cartCnt);
            }else if(uAgent == "ios"){
            	
            }
        }
    }
}

//HDDFS 리뉴얼 프로젝트 [박용규 - 2021.09.08] - 한번에 담기 초기화
function initLayerCommon(){

    $("input[name='goosChk']").prop("checked",false);
    $(".tmpCartList").find('li').remove();
    $(".cart_total_price_all").hide();
    $.each($(".goosList"),function(i,el){
        $(el).removeClass("on");
        $(el).find("input[name='goosChk']").attr("checked",false);
    });

    if($(".goosListChk").hasClass("on")){
        $(".goosListChk").click();
    }

}

/**
 * HDDFS 리뉴얼 프로젝트 [김영훈 - 2021.03.29] - 장바구니
 * HDDFS 리뉴얼 프로젝트 [김인호 - 2021.05.10] - 장바구니 > 바로구매 로직 추가 (buyNow)
 * @param onlnGoosCd
 * @param goosQty
 * @param callback
 */
function newAddCartMulti(onlnGoosCdList, goosQtyList, callback, cartType, mode, buyNow, el){
    var cartType	= cartType ? cartType : "normal";
    var dupMsg		= "장바구니에 동일한 상품이 존재합니다. 추가로 담으시겠습니까?";
    var inMode      = typeof(mode) === "undefined" ? "insert" : mode;
    var onlnGoosCdList   = typeof(onlnGoosCdList)  === "undefined" ? "" : onlnGoosCdList;
    var buyNow = typeof(buyNow) === "undefined" ? "" : buyNow;

    //GA4 START
    var onlnGoosCdArr = [];
    var goosNmArr = [];
    var branNmArr = [];
    var onlnBranCdArr = [];
    var goosTypeCdArr = [];
    var branGrpCdArr = [];
    var goosHigpCdNmArr = [];
    var goosMlfCdNmArr = [];
    var goosLgrpCdNmArr = [];
    var refNoArr = [];
    var quantityArr = [];
    var priceCriteoArr = [];

    if($(".ga_section").data("section")=="명품관"){ //명품관 추가
        onlnGoosCdArr.push($(el).attr("data-onlnGoosCd"));
        goosNmArr.push($(el).attr("data-goosNm"));
        branNmArr.push($(el).attr("data-branNm"));
        onlnBranCdArr.push($(el).attr("data-onlnBranCd"));
        goosTypeCdArr.push($(el).attr("data-goosTypeCd"));
        branGrpCdArr.push($(el).attr("data-branGrpCd"));
        goosHigpCdNmArr.push($(el).attr("data-goosHigpCdNm"));
        goosMlfCdNmArr.push($(el).attr("data-goosMlfCdNm"));
        goosLgrpCdNmArr.push($(el).attr("data-goosLgrpCdNm"));
        refNoArr.push($(el).attr("data-refNo"));
        priceCriteoArr.push($(el).attr("data-priceCriteo"));
    } else if($(el).parents(".ga_section").data("section")=="추천상품"){ //추천상품 추가
        onlnGoosCdArr.push($(el).data("onlngooscd"));
        goosNmArr.push($(el).data("goosnm"));
        branNmArr.push($(el).data("brannm"));
        onlnBranCdArr.push($(el).data("onlnbrancd"));
        goosTypeCdArr.push($(el).data("goostypecd"));
        branGrpCdArr.push($(el).data("brangrpcd"));
        goosHigpCdNmArr.push($(el).data("gooshigpcdnm"));
        goosMlfCdNmArr.push($(el).data("goosmlfcdnm"));
        goosLgrpCdNmArr.push($(el).data("gooslgrpcdnm"));
        refNoArr.push($(el).data("refno"));
        priceCriteoArr.push($(el).data("priceCriteo"));
    } else {
        $(".tmpCartList > li").each(function(){
            var goosCd = $(this).data("cd");
            var amount = $(this).find(".count").val();

            onlnGoosCdArr.push(goosCd);
            goosNmArr.push($(this).data("goosnm"));
            branNmArr.push($(this).data("brannm"));
            onlnBranCdArr.push($(this).data("onlnbrancd"));
            goosTypeCdArr.push($(this).data("goostypecd"));
            branGrpCdArr.push($(this).data("brangrpcd"));
            goosHigpCdNmArr.push($(this).data("gooshigpcdnm"));
            goosMlfCdNmArr.push($(this).data("goosmlfcdnm"));
            goosLgrpCdNmArr.push($(this).data("gooslgrpcdnm"));
            refNoArr.push($(this).data("refno"));
            quantityArr.push(amount);
            priceCriteoArr.push($(this).data("priceCriteo"));
        })
    }
    //GA4 END

    var sumResult = 0;
    for (var i = 0; i<goosQtyList.split(",").length; i++){
        sumResult += Number(goosQtyList.split(",")[i]) ;
    }

    for (var i = 0; i<goosQtyList.split(",").length; i++){
        if(Number(goosQtyList.split(",")[i]) > 50000){
            if(typeof(callback) === "function"){
                var data = {"message" : "최대 구매가능 수량은 50000개 입니다."};
                callback(data);
            }else{
                alert('최대 구매가능 수량은 50000개 입니다.');
                if(buyNow === "Y" && !isLogin){
                    $(".ui-dialog").hide();
                    $(".ui-widget-overlay").remove();
                    window.location.reload();
                }
            }
            return false;
        }
    }

    if(buyNow === 'Y'){
        inMode = "order";
    }else{
        inMode = "insert";
    }

    // 전송 데이터 구성
    var cart = { onlnGoosCdList : onlnGoosCdList, goosQtyList : goosQtyList,  mode : inMode , buyNow : buyNow }


    // 전송
    $.ajax({
        async       : true,
        url         : ctx_curr + "/cm/comm/addCartMulti.json",
        dataType    : "json",
        type        : "POST",
        data        : cart,
        success     : function(data, textStatus, jqXHR){

            if(data.cartIsLogin === "Y"){
                isLogin = true;
            }

            if(!isLogin && data.info.firsBuyYn === "Y"){
        		alert("로그인 후 이용 가능합니다.");
                login();
        		return;
        	}else if(typeof(data.exception) !== "undefined" && buyNow === "Y" && !isLogin){
                if(typeof(callback) === "function"){
                    var data = {"message" : data.message};
                    callback(data);
                }else{
                    alert(data.message);
                }

                $(".ui-dialog").hide();
                $(".ui-widget-overlay").remove();
                window.location.reload();
                return false;
            }
            /*
            if(!crew.ajaxValidate(data)){
                return false;
            }
            */
            if(typeof(data.info) !== "undefined" && typeof(data.info.onlnGoosCdListDup) !== "undefined"){

                // 수량변경으로 모드 변경
                cart.mode               = inMode !== "order" ? "update" : inMode;
                cart.goosQtyList        = data.info.goosQtyList;
                cart.onlnGoosCdList     = data.info.onlnGoosCdList;
                cart.onlnGoosCdListDup  = data.info.onlnGoosCdListDup;

                if(buyNow === "Y"){

                    // 재요청
                    $.ajax({
                        async       : true,
                        url         : ctx_curr + "/cm/comm/addCartMulti.json",
                        dataType    : "json",
                        type        : "POST",
                        data        : cart,
                        success     : function(data, textStatus, jqXHR){
                            if(!crew.ajaxValidate(data)){ return; }

                            if(data.cartIsLogin === "Y"){
                                isLogin = true;
                            }

                            if(data.resultCode === 1) {
                                addCartCount();
                                initLayerCommon();
                                setTimeout(cartLayerStat('CART', buyNow ,onlnGoosCdList), 20);
                                // 콜백함수가 존재하는 경우
                                if(typeof(callback) == "function"){
                                    callback(data);
                                    return false;
                                }
                                return false;
                            }else{
                                if(typeof(callback) === "function"){
                                    var data = {"message" : data.message};
                                    callback(data);
                                }else{
                                    alert(data.message);
                                    if(cartType == 'goos')
                                    {
                                        closeEl();
                                        showElPop1($("#pro_cart").prop("outerHTML"));
                                        dimLayerClose(event);
                                    }
                                }
                            }
                        },
                        error       : function(jqXHR, textStatus, errorThrown){
                            console.log(jqXHR.status);
                        }
                    });

                }else{

                    if(data.info.setGoosYns === "Y"){

                        // 재요청
                        $.ajax({
                            async       : true,
                            url         : ctx_curr + "/cm/comm/addCartMulti.json",
                            dataType    : "json",
                            type        : "POST",
                            data        : cart,
                            success     : function(data, textStatus, jqXHR){
                                if(!crew.ajaxValidate(data)){ return; }
                                //commToastMsg("장바구니에 담겼습니다 :)" , ''); // 호출 방식

                                if(data.cartIsLogin === "Y"){
                                    isLogin = true;
                                }

                                if(data.resultCode === 1) {

                                    addCartCount();
                                    initLayerCommon();

                                    //여러 상품 선택하여 장바구니 담기
                                    if(onlnGoosCdArr.length > 0) {
                                        GA_fn_common("add_to_cart", onlnGoosCdArr, goosNmArr, branNmArr, onlnBranCdArr, branGrpCdArr, goosTypeCdArr, goosHigpCdNmArr, goosMlfCdNmArr, goosLgrpCdNmArr, refNoArr, undefined, undefined);

                                        /** Criteo Add to Cart Tag */
                                        window.criteo_q = [];
                                        var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
                                        let ItemAdd = [];
                                        /**for(var i = 0; i < onlnGoosCdArr.length;i++){
                                    		ItemAdd.push(
                                				{id: onlnGoosCdArr[i],
                                				 price: priceCriteoArr[i],
                                        		 quantity: quantityArr[i]
                                				}	
                                    		);
                                        }
                                         window.criteo_q.push(
                                         { event: "setAccount", account: 103437},
                                         { event: "setSiteType", type: "m"},
                                         { event: "addToCart", item: ItemAdd
                                        });
                                         console.log(window.criteo_q);*/
                                        /** END Criteo Add to Cart Tag */
                                    } else {
                                        GA_fn_common("add_to_cart",
                                            onlnGoosCdList,
                                            $("."+onlnGoosCdList).attr("data-goosNm"),
                                            $("."+onlnGoosCdList).attr("data-branNm"),
                                            $("."+onlnGoosCdList).attr("data-onlnBranCd"),
                                            $("."+onlnGoosCdList).attr("data-branGrpCd"),
                                            $("."+onlnGoosCdList).attr("data-goosTypeCd"),
                                            $("."+onlnGoosCdList).attr("data-goosHigpCdNm"),
                                            $("."+onlnGoosCdList).attr("data-goosMlfCdNm"),
                                            $("."+onlnGoosCdList).attr("data-goosLgrpCdNm"),
                                            $("."+onlnGoosCdList).attr("data-refNo"),
                                            undefined,
                                            $("."+onlnGoosCdList).attr("data-section"));

                                        /** Criteo Add to Cart Tag */
                                        window.criteo_q = [];
                                        var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
                                        let ItemAdd = [];
                                        /** ItemAdd.push(
                                         {id: onlnGoosCdList,
                                				 price: $("."+onlnGoosCdList).attr("data-priceCriteo"),
                                        		 quantity: goosQtyList
                                				}
                                         );
                                         window.criteo_q.push(
                                         { event: "setAccount", account: 103437},
                                         { event: "setSiteType", type: "m"},
                                         { event: "addToCart", item: ItemAdd
                                        });
                                         console.log(window.criteo_q); */
                                        /** END Criteo Add to Cart Tag */
                                    }

                                    if(confirm("선택하신 상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")){
                                        // HDDFS 리뉴얼 프로젝트 [임병욱- 2021.05.20] - 주문내역상세 hide
                                        if($("#myHyundaiOrderDetailDiv").hasClass("active")){
                                            $("#myHyundaiOrderDetailDiv").removeClass("active");
                                            $(".btn_pop_close").trigger("click");
                                            $("body").css("overflow-y","auto");
                                            $(".pop_dimmed").hide();
                                            $(".bg_dimm").hide();
                                        }
                                        setTimeout(cartLayerStat('CART', buyNow ,onlnGoosCdList), 20);

                                        // 콜백함수가 존재하는 경우
                                        if(typeof(callback) === "function"){
                                            callback(data);
                                            return;
                                        }
                                        return false;
                                    }
                                }else{
                                    if(typeof(callback) === "function"){
                                        var data = {"message" : data.message};
                                        callback(data);
                                    }else{
                                        alert(data.message);
                                        if(cartType == 'goos')
                                        {
                                            closeEl();
                                            showElPop1($("#pro_cart").prop("outerHTML"));
                                            dimLayerClose(event);
                                        }
                                    }
                                }
                            },
                            error       : function(jqXHR, textStatus, errorThrown){
                                console.log(jqXHR.status);
                            }
                        });

                    }else{

                        if(confirm(dupMsg)){

                            // 재요청
                            $.ajax({
                                async       : true,
                                url         : ctx_curr + "/cm/comm/addCartMulti.json",
                                dataType    : "json",
                                type        : "POST",
                                data        : cart,
                                success     : function(data, textStatus, jqXHR){
                                    if(!crew.ajaxValidate(data)){ return; }
                                    //commToastMsg("장바구니에 담겼습니다 :)" , ''); // 호출 방식

                                    if(data.cartIsLogin === "Y"){
                                        isLogin = true;
                                    }

                                    if(data.resultCode === 1) {
                                        addCartCount();
                                        initLayerCommon();

                                        //여러 상품 선택하여 장바구니 담기
                                        if(onlnGoosCdArr.length > 0) {
                                            GA_fn_common("add_to_cart", onlnGoosCdArr, goosNmArr, branNmArr, onlnBranCdArr, branGrpCdArr, goosTypeCdArr, goosHigpCdNmArr, goosMlfCdNmArr, goosLgrpCdNmArr, refNoArr, undefined, undefined);

                                            /** Criteo Add to Cart Tag */
                                            window.criteo_q = [];
                                            var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
                                            let ItemAdd = [];
                                            /** for(var i = 0; i < onlnGoosCdArr.length;i++){
                                        		ItemAdd.push(
                                    				{id: onlnGoosCdArr[i],
                                    				 price: priceCriteoArr[i],
                                            		 quantity: quantityArr[i]
                                    				}	
                                        		);
                                            }
                                             window.criteo_q.push(
                                             { event: "setAccount", account: 103437},
                                             { event: "setSiteType", type: "m"},
                                             { event: "addToCart", item: ItemAdd
                                            });
                                             console.log(window.criteo_q); */
                                            /** END Criteo Add to Cart Tag */
                                        } else {
                                            GA_fn_common("add_to_cart",
                                                onlnGoosCdList,
                                                $("."+onlnGoosCdList).attr("data-goosNm"),
                                                $("."+onlnGoosCdList).attr("data-branNm"),
                                                $("."+onlnGoosCdList).attr("data-onlnBranCd"),
                                                $("."+onlnGoosCdList).attr("data-branGrpCd"),
                                                $("."+onlnGoosCdList).attr("data-goosTypeCd"),
                                                $("."+onlnGoosCdList).attr("data-goosHigpCdNm"),
                                                $("."+onlnGoosCdList).attr("data-goosMlfCdNm"),
                                                $("."+onlnGoosCdList).attr("data-goosLgrpCdNm"),
                                                $("."+onlnGoosCdList).attr("data-refNo"),
                                                undefined,
                                                $("."+onlnGoosCdList).attr("data-section"));

                                            /** Criteo Add to Cart Tag */
                                            window.criteo_q = [];
                                            var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
                                            let ItemAdd = [];
                                            /** ItemAdd.push(
                                             {id: onlnGoosCdList,
                                    				 price: $("."+onlnGoosCdList).attr("data-priceCriteo"),
                                            		 quantity: goosQtyList
                                    				}
                                             );
                                             window.criteo_q.push(
                                             { event: "setAccount", account: 103437},
                                             { event: "setSiteType", type: "m"},
                                             { event: "addToCart", item: ItemAdd
                                            });
                                             console.log(window.criteo_q); */
                                            /** END Criteo Add to Cart Tag */
                                        }

                                        if(confirm("선택하신 상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")){
                                            // HDDFS 리뉴얼 프로젝트 [임병욱- 2021.05.20] - 주문내역상세 hide
                                            if($("#myHyundaiOrderDetailDiv").hasClass("active")){
                                                $("#myHyundaiOrderDetailDiv").removeClass("active");
                                                $(".btn_pop_close").trigger("click");
                                                $("body").css("overflow-y","auto");
                                                $(".pop_dimmed").hide();
                                                $(".bg_dimm").hide();
                                            }
                                            setTimeout(cartLayerStat('CART', buyNow ,onlnGoosCdList), 20);

                                            // 콜백함수가 존재하는 경우
                                            if(typeof(callback) === "function"){
                                                callback(data);
                                                return;
                                            }
                                            return false;
                                        }
                                    }else{
                                        if(typeof(callback) === "function"){
                                            var data = {"message" : data.message};
                                            callback(data);
                                        }else{
                                            alert(data.message);
                                            if(cartType == 'goos')
                                            {
                                                closeEl();
                                                showElPop1($("#pro_cart").prop("outerHTML"));
                                                dimLayerClose(event);
                                            }
                                        }
                                    }
                                },
                                error       : function(jqXHR, textStatus, errorThrown){
                                    console.log(jqXHR.status);
                                }
                            });
                        }else{
                            //initLayerCommon();
                            if(cartType == 'goos')
                            {
                                closeEl();
                                showElPop1($("#pro_cart").prop("outerHTML"));
                                dimLayerClose(event);
                            }
                        }
                    }
                }
            }else{

                if(data.resultCode === 1) {

                    if(data.cartIsLogin === "Y"){
                        isLogin = true;
                    }
                    addCartCount();
                    initLayerCommon();
                    if(buyNow === 'Y'){
                        setTimeout(cartLayerStat('CART', buyNow ,onlnGoosCdList), 20);

                        // 콜백함수가 존재하는 경우
                        if(typeof(callback) === "function"){
                            callback(data);
                            return;
                        }
                        return false;
                    }else{

                        //여러 상품 선택하여 장바구니 담기
                        if(onlnGoosCdArr.length > 0) {
                            GA_fn_common("add_to_cart", onlnGoosCdArr, goosNmArr, branNmArr, onlnBranCdArr, branGrpCdArr, goosTypeCdArr, goosHigpCdNmArr, goosMlfCdNmArr, goosLgrpCdNmArr, refNoArr, undefined, undefined);

                            /** Criteo Add to Cart Tag */
                            window.criteo_q = [];
                            var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
                            let ItemAdd = [];
                            /** for(var i = 0; i < onlnGoosCdArr.length;i++){
                        		ItemAdd.push(
                    				{id: onlnGoosCdArr[i],
                    				 price: priceCriteoArr[i],
                            		 quantity: quantityArr[i]
                    				}	
                        		);
                            }
                             window.criteo_q.push(
                             { event: "setAccount", account: 103437},
                             { event: "setSiteType", type: "m"},
                             { event: "addToCart", item: ItemAdd
                            });
                             console.log(window.criteo_q); */
                            /** END Criteo Add to Cart Tag */
                        } else {
                            GA_fn_common("add_to_cart",
                                onlnGoosCdList,
                                $("."+onlnGoosCdList).attr("data-goosNm"),
                                $("."+onlnGoosCdList).attr("data-branNm"),
                                $("."+onlnGoosCdList).attr("data-onlnBranCd"),
                                $("."+onlnGoosCdList).attr("data-branGrpCd"),
                                $("."+onlnGoosCdList).attr("data-goosTypeCd"),
                                $("."+onlnGoosCdList).attr("data-goosHigpCdNm"),
                                $("."+onlnGoosCdList).attr("data-goosMlfCdNm"),
                                $("."+onlnGoosCdList).attr("data-goosLgrpCdNm"),
                                $("."+onlnGoosCdList).attr("data-refNo"),
                                undefined,
                                $("."+onlnGoosCdList).attr("data-section"));

                            /** Criteo Add to Cart Tag */
                            window.criteo_q = [];
                            var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
                            let ItemAdd = [];
                            /** ItemAdd.push(
                             {id: onlnGoosCdList,
                    				 price: $("."+onlnGoosCdList).attr("data-priceCriteo"),
                            		 quantity: goosQtyList
                    				}
                             );
                             window.criteo_q.push(
                             { event: "setAccount", account: 103437},
                             { event: "setSiteType", type: "m"},
                             { event: "addToCart", item: ItemAdd
                            });
                             console.log(window.criteo_q); */
                            /** END Criteo Add to Cart Tag */
                        }

                        if(confirm("선택하신 상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")){
                            // HDDFS 리뉴얼 프로젝트 [임병욱- 2021.05.20] - 주문내역상세 hide
                            if($("#myHyundaiOrderDetailDiv").hasClass("active")){
                                $("#myHyundaiOrderDetailDiv").removeClass("active");
                                $(".btn_pop_close").trigger("click");
                                $("body").css("overflow-y","auto");
                                $(".pop_dimmed").hide();
                                $(".bg_dimm").hide();
                            }

                            setTimeout(cartLayerStat('CART', buyNow ,onlnGoosCdList), 20);
                            // 콜백함수가 존재하는 경우
                            if(typeof(callback) === "function"){
                                callback(data);
                                return;
                            }
                            return false;
                        }
                    }
                }else{
                    if(typeof(callback) === "function"){
                        var data = {"message" : data.message};
                        callback(data);
                    }else{
                        alert(data.message);
                        if(cartType == 'goos')
                        {
                            closeEl();
                            showElPop1($("#pro_cart").prop("outerHTML"));
                            dimLayerClose(event);
                        }
                    }
                }
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR.status);
        }
    });
}
// 장바구니 상품 등록 처리 - 복수개
function addCartMulti(onlnGoosCdList, goosQtyList, callback, cartType){
    var cartType	= cartType ? cartType : "normal";
    var dupMsg		= "장바구니에 동일한 상품이 존재합니다. 추가로 담으시겠습니까?";

    // 장바구니 유형에 따른 메세지 처리
    if(cartType == "set"){
        dupMsg = "세트상품을 모두 담으시면 이미 담겨있는 세트상품의 수량정보가 달라질 수 있습니다. 모두담기를 계속 하시겠습니까?";
    }


    // 전송 데이터 구성
    var cart = { onlnGoosCdList : onlnGoosCdList, goosQtyList : goosQtyList, mode : "insert" }

    // 전송
    $.ajax({
        async       : true,
        url         : ctx_curr + "/cm/comm/addCartMulti.json",
        dataType    : "json",
        type        : "POST",
        data        : cart,
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            if(typeof(data.info) != "undefined" && typeof(data.info.onlnGoosCdListDup) != "undefined"){
                if(confirm(dupMsg)){
                    // 수량변경으로 모드 변경
                    cart.mode               = "update";
                    cart.goosQtyList        = data.info.goosQtyList;
                    cart.onlnGoosCdList     = data.info.onlnGoosCdList;
                    cart.onlnGoosCdListDup  = data.info.onlnGoosCdListDup;

                    // 재요청
                    $.ajax({
                        async       : true,
                        url         : ctx_curr + "/cm/comm/addCartMulti.json",
                        dataType    : "json",
                        type        : "POST",
                        data        : cart,
                        success     : function(data, textStatus, jqXHR){
                            if(!crew.ajaxValidate(data)){ return; }

                            // 콜백함수가 존재하는 경우
                            if(typeof(callback) == "function"){
                                callback(data);
                                return;
                            }

                            if(confirm("선택하신 상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")){
                                //location.href = ctx_shop + "/or/order/listCart.do"
                                //리뉴얼 장바구니 레이어로 변경
                                setTimeout(cartLayerStat('CART'), 20);
                                return false;
                            }
                        },
                        error       : function(jqXHR, textStatus, errorThrown){
                            //console.log(jqXHR.status);
                        }
                    });
                }
            }else{
                // 콜백함수가 존재하는 경우
                if(typeof(callback) == "function"){
                    callback(data);
                    return;
                }

                if(confirm("선택하신 상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")){
                    //location.href = ctx_shop + "/or/order/listCart.do"
                    //리뉴얼 장바구니 레이어로 변경
                    setTimeout(cartLayerStat('CART'), 20);
                    return false;
                }
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}


/**
 * @param onlnGoosCd
 * @param goosQty
 * @param callback
 */
//장바구니 상품 등록 처리
function newAddCart(onlnGoosCd, goosQty, callback, mode){

    var inGoosQty = typeof(goosQty) === "undefined" ? 1 : goosQty;
    var inMode = typeof(mode) === "undefined" ? "insert" : mode;

    // 전송 데이터 구성
    var cart = { onlnGoosCd : onlnGoosCd, goosQty : inGoosQty, mode : inMode }

    // 전송
    $.ajax({
        url         : ctx_curr + "/cm/comm/addCart.json",
        async       : true,
        dataType    : "json",
        type        : "POST",
        data        : cart,
        success     : function(data, textStatus, jqXHR){

            if(!crew.ajaxValidate(data)){
                return;
            }
            if( inMode !== "order"){
                console.log("data.info:"+ typeof(data.info));
                if(typeof(data.info) !== "undefined") {

                    if(confirm("장바구니에 동일한 상품이 존재합니다. 추가로 담으시겠습니까?")) {
                        // 수량변경으로 모드 변경
                        cart.mode     = "update";
                        cart.goosQty  = data.info.goosQty;

                        // 재요청
                        $.ajax({
                            async       : true,
                            url         : ctx_curr + "/cm/comm/addCart.json",
                            dataType    : "json",
                            type        : "POST",
                            data        : cart,
                            success     : function(data) {
                                if(!crew.ajaxValidate(data)) {
                                    return false;
                                }
                                if(confirm("선택하신 상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")){
                                    setTimeout(cartLayerStat('CART'), 20);
                                    return false;
                                }

                                // 콜백함수가 존재하는 경우
                                if(typeof(callback) === "function"){
                                    callback(data);
                                }
                            },
                            error       : function(jqXHR, textStatus, errorThrown){
                                alert("eror:"+ errorThrown);
                            }
                        });

                    } else {
                        console.log(" 장바구니에 추가로 담지 않음");
                    }
                } else {

                    addCartCount();

                    if(confirm("선택하신 상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")){
                        setTimeout(cartLayerStat('CART'), 20);
                        return false;
                    }

                    // 콜백함수가 존재하는 경우
                    if(typeof(callback) === "function"){
                        callback(data);
                    }
                }
            } else {
                // HDDFS 리뉴얼 프로젝트 [김영훈 - 2021.03.29] - 장바구니 레이어 호출
                addCartCount();
                setTimeout(cartLayerStat('CART'), 20);
                return false;
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            console.log("error:"+ jqXHR.status);
        }
    });
}

// 장바구니 상품 등록 처리
function addCart(onlnGoosCd, goosQty, callback){
    var goosQty = typeof(goosQty) == "undefined" ? 1 : goosQty;

    // 전송 데이터 구성
    var cart = { onlnGoosCd : onlnGoosCd, goosQty : goosQty, mode : "insert" }

    // 전송
    $.ajax({
        async       : true,
        url         : ctx_curr + "/cm/comm/addCart.json",
        dataType    : "json",
        type        : "POST",
        data        : cart,
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            if(typeof(data.info) != "undefined"){
                if(confirm("장바구니에 동일한 상품이 존재합니다. 추가로 담으시겠습니까?")){
                    // 수량변경으로 모드 변경
                    cart.mode     = "update";
                    cart.goosQty  = data.info.goosQty;

                    // 재요청
                    $.ajax({
                        async       : true,
                        url         : ctx_curr + "/cm/comm/addCart.json",
                        dataType    : "json",
                        type        : "POST",
                        data        : cart,
                        success     : function(data, textStatus, jqXHR){
                            if(!crew.ajaxValidate(data)){ return; }

                            if(confirm("선택하신 상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")){
                                //location.href = ctx_shop + "/or/order/listCart.do";
                                //return;
                                //리뉴얼 장바구니 레이어로 변경 7/23
                                setTimeout(cartLayerStat('CART'), 20);
                                return false;
                            }

                            // 콜백함수가 존재하는 경우
                            if(typeof(callback) == "function"){ callback(data); }
                        },
                        error       : function(jqXHR, textStatus, errorThrown){
                            //console.log(jqXHR.status);
                        }
                    });
                }
            }else{
                if(confirm("선택하신 상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")){
                    //location.href = ctx_shop + "/or/order/listCart.do";
                    //return;
                    //리뉴얼 장바구니 레이어로 변경 7/23
                    setTimeout(cartLayerStat('CART'), 20);
                    return false;
                }

                // 콜백함수가 존재하는 경우
                if(typeof(callback) == "function"){ callback(data); }
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

function goHome(){
    var uAgent = exApp.getAgent();
    if(appYn == 'Y'){
        if(uAgent == "android" || uAgent == "ios"){
            if(uAgent == "android"){
                android.goMailMain();
            }else if(uAgent == "ios"){
                var appUrl = 'goMailMain://';
                location.href = appUrl;
            }
        }
    }else{
        location.href = ctx_shop + "/dm/main.do"
    }
}


// 재입고 알림 팝업 활성화
function addAginRecpNtc(onlnGoosCd, aginRecpNtcSeq){
    var aginRecpNtcSeq = aginRecpNtcSeq ? aginRecpNtcSeq : "";

    // 로그인 체크
    if(!isLogin){
        alert("로그인 후 이용해주세요.");
        login();
        return;
    }

    // 등록가능개수 판단.
    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/addAginRecpNtcCnt.json",
        dataType    : "json",
        type        : "POST",
        data        : { onlnGoosCd : onlnGoosCd },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            if(data.dupYn == 'Y'){
                alert("이미 등록되어 있는 상품입니다.");
                return;
            }

            // 등록불가인 경우
            if(data.regYn != 'Y'){
                alert("재입고 알림은 최대 " + data.limitCnt + "개까지 등록 가능합니다.");
                return;
            }

            // 팝업 처리
            layerPopup("재입고 알림 신청", ctx_curr + "/mm/my/addAginRecpNtc.do?onlnGoosCd=" + onlnGoosCd + "&aginRecpNtcSeq=" + aginRecpNtcSeq);
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

function showBrandAlarmViewLayer(onlnBranCd,type){
    // 로그인 체크
    if(!isLogin){
        login();
        return;
    }

    if(appYn =="Y"){
        controlAppbar("Y");
    }

    layerPopup("브랜드 혜택 알림 신청", ctx_curr + "/dm/bran/showBrandAlarmViewLayer.do?onlnBranCd=" + onlnBranCd + "&type="+type);
}

// 관심 브랜드 등록 처리
function addMyBrand(onlnBranCd, obj, fn){
    if(!isLogin){ login(); return; }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/addMyBrand.json",
        dataType    : "json",
        type        : "POST",
        data        : { onlnBranCd : onlnBranCd },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }


            $(obj).addClass("active");
            alert("관심브랜드에 등록되었습니다.");

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// 관심 브랜드 삭제 처리
function removeMyBrand(onlnBranCd, obj, fn){
    if(!isLogin){ login(); return; }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/removeMyBrand.json",
        dataType    : "json",
        type        : "POST",
        data        : { onlnBranCd : onlnBranCd },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            //$(obj).removeClass("active");
            alert("관심브랜드가 삭제되었습니다.");

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}


// 관심 브랜드 등록/삭제 처리
function mergeMyBrand(onlnBranCd, obj, fn){
    if(!isLogin){ login(); return; }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/mergeMyBrand.json",
        dataType    : "json",
        type        : "POST",
        data        : { onlnBranCd : onlnBranCd },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            if(data.info.mode == "insert"){
                $(obj).addClass("active");
                alert("관심브랜드에 등록되었습니다.");
            }else if(data.info.mode == "delete"){
                $(obj).removeClass("active");
                alert("관심브랜드가 삭제되었습니다.");
            }

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// 관심 상품 등록 처리
function addMyGoos(onlnGoosCd, obj, fn){
    if(!isLogin){ login(); return; }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/addMyGoos.json",
        dataType    : "json",
        type        : "POST",
        data        : { onlnGoosCd : onlnGoosCd },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            $(obj).addClass("active");
            alert("관심상품으로 등록되었습니다.");

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// 관심 상품 삭제 처리
function removeMyGoos(onlnGoosCd, obj, fn){
    if(!isLogin){ login(); return; }
    if(!confirm("해당 상품을 관심상품에서 삭제하시겠습니까?")){
        return false;
    }
    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/removeMyGoos.json",
        dataType    : "json",
        type        : "POST",
        data        : { onlnGoosCd : onlnGoosCd },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }


            $(obj).removeClass("active");
            alert("관심상품이 삭제되었습니다.");

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// 관심 상품 삭제 처리(복수개)
function removeSelectGoos(onlnGoosCds, obj, fn){
    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/myCont/deleteCnrGoos.json",
        dataType    : "json",
        type        : "POST",
        data        : { onlnGoosCds : onlnGoosCds.join(",") },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            alert("관심상품이 삭제되었습니다.");

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// 관심 상품 등록/삭제 처리
function mergeMyGoos(onlnGoosCd, obj, fn){
    if(!isLogin){ login(); return; }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/mergeMyGoos.json",
        dataType    : "json",
        type        : "POST",
        data        : { onlnGoosCd : onlnGoosCd },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            if(data.info.mode == "insert"){
                //$(obj).addClass("active");
                $(obj).addClass("on");
                //alert("관심상품으로 등록되었습니다.");

                createAttendToast(obj, "add");
            }else if(data.info.mode == "update"){
                $(obj).addClass("on")
                //alert("관심상품이 삭제되었습니다.");

                //createAttendToast(obj, "remove");
            }

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });


    // toast msg 인터페이스 구성
    function createAttendToast(obj, msgType){
        var toast = $("#AttenToast");

        if(toast.size() != 1){
            var html = [];
            html.push("<div class='add_wish_wrap' id='AttenToast'>");
            html.push("	<p class='AttenToastMsg AttenToastAdd'><i class='ico_com i_wish'></i>관심상품으로<br>등록되었습니다.</p>");
            html.push("	<p class='AttenToastMsg AttenToastRemove'><i class='ico_com i_wish no'></i>관심상품이<br>삭제되었습니다.</p>");
            html.push("</div>");
            $("body").append(html.join(""));
            toast = $("#AttenToast");
        }

        // 메세지 유형에 따라서 분기 처리
        toast.find(".AttenToastMsg").hide();

        if(msgType == "add"){
            toast.find(".AttenToastAdd").show();
        }else{
            toast.find(".AttenToastRemove").show();
        }

        // 메세지 처리
        var _animated = null;
        var optionAlarm = toast;

        if(_animated == null) {
            _aminated = true;
            optionAlarm.addClass("view");

            setTimeout(function() {
                optionAlarm.removeClass('view');
                if(!$(this).hasClass('view')) {_aminated = null;}
            },1000);
        }
    }
}

// 이벤트 참여 처리
function addEvnt(evntId, bnfSeq, fn){
    // 로그인체크, 로그인 후 이용해주세요. ->  로그인 후 이용 가능합니다.
    if(!isLogin){ alert("로그인 후 이용 가능합니다."); login(); return; }

    // 기본값 설정
    var bnfSeq = typeof(bnfSeq) == "undefined" ? 0 : bnfSeq;

    // 전송
    $.ajax({
        async       : false,
        url         : ctx_curr + "/op/evnt/evntJoinValidation.json",
        dataType    : "json",
        type        : "POST",
        data        : { evntId : evntId, bnfSeq : bnfSeq },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }
            $.ajax({
                async       : false,
                url         : ctx_curr + "/op/evnt/evntJoin.json",
                dataType    : "json",
                type        : "POST",
                data        : { evntId : evntId, bnfSeq : bnfSeq },
                success     : function(data, textStatus, jqXHR){
                    if(!crew.ajaxValidate(data)){ return; }

                    // 이벤트 참여 결과 내용 구성
                    var winInfo = [];
                    var evntWinClsCd = data.info.evntWinClsCd;
                    if(evntWinClsCd == "001" || evntWinClsCd == "002"){
                        var bnfListWinResult = data.info.bnfListWinResult;

                        // 참여당첨의 경우 당첨혜택정보가 없을때(블랙회원 or 대량구매회원) 참여완료 알림으로 처리
                        if(evntWinClsCd == "001" && bnfListWinResult.length == 0) {
                            alert("참여되었습니다.");
                        } else {
                            // 상세항목 구성
                            for(var i=0, bnf ; bnf = bnfListWinResult[i] ; i++){
                                if(bnf.svmtId != null){
                                    winInfo.push("적립금 : " + comma(bnf.rsvgAmt) + "원");
                                }

                                if(bnf.cupId != null){
                                    winInfo.push("쿠폰 : " + bnf.cupNm);
                                }
                            }

                            // 알림
                            if(winInfo.length != 0){
                                if(evntWinClsCd == "001"){
                                    alert(winInfo.join(", ") + " 지급되었습니다.");
                                }else if(evntWinClsCd == "002"){
                                    alert(winInfo.join(",") + "이 당첨되었습니다.");
                                }
                            }else{
                                alert("당첨되지 않았습니다.");
                            }
                        }
                    } else if(evntWinClsCd == "003"){
                        alert("참여되었습니다.");
                    }

                    // 콜백함수가 존재하는 경우
                    if(typeof(fn) == "function"){ fn(data); }
                },
                error       : function(jqXHR, textStatus, errorThrown){
                    //console.log(jqXHR.status);
                }
            });
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// H.Style 참여 처리(이벤트 참여와 분리됨)
function addHstEvnt(evntId, bnfSeq, fn){
    // 로그인체크
    if(!isLogin){ alert("로그인 후 이용해주세요."); login(); return; }

    // 기본값 설정
    var bnfSeq = typeof(bnfSeq) == "undefined" ? 0 : bnfSeq;

    // 전송
    $.ajax({
        async       : false,
        url         : ctx_curr + "/op/evnt/evntJoinValidation.json",
        dataType    : "json",
        type        : "POST",
        data        : { evntId : evntId, bnfSeq : bnfSeq, hstYn : "Y" },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }
            $.ajax({
                async       : false,
                url         : ctx_curr + "/op/evnt/evntJoin.json",
                dataType    : "json",
                type        : "POST",
                data        : { evntId : evntId, bnfSeq : bnfSeq, hstYn : "Y" },
                success     : function(data, textStatus, jqXHR) {
                    if(!crew.ajaxValidate(data)){ return; }

                    // 이벤트 참여 결과 내용 구성
                    var winInfo = [];
                    var evntWinClsCd = data.info.evntWinClsCd;
                    if(evntWinClsCd == "001" || evntWinClsCd == "002"){
                        var bnfListWinResult = data.info.bnfListWinResult;

                        // 참여당첨의 경우 당첨혜택정보가 없을때(블랙회원 or 대량구매회원) 참여완료 알림으로 처리
                        if(evntWinClsCd == "001" && bnfListWinResult.length == 0) {
                            alert("참여되었습니다.");
                        } else {
                            // 상세항목 구성
                            for(var i=0, bnf ; bnf = bnfListWinResult[i] ; i++){
                                if(bnf.svmtId != null){
                                    winInfo.push("적립금 : " + comma(bnf.rsvgAmt) + "원");
                                }

                                if(bnf.cupId != null){
                                    winInfo.push("쿠폰 : " + bnf.cupNm);
                                }
                            }

                            // 알림
                            if(winInfo.length != 0){
                                if(evntWinClsCd == "001"){
                                    alert(winInfo.join(", ") + "지급되었습니다.");
                                }else if(evntWinClsCd == "002"){
                                    alert(winInfo.join(",") + "이 당첨되었습니다.");
                                }
                            }else{
                                alert("당첨되지 않았습니다.");
                            }
                        }
                    } else if(evntWinClsCd == "003"){
                        alert("참여되었습니다.");
                    }

                    // 콜백함수가 존재하는 경우
                    if(typeof(fn) == "function"){ fn(data); }
                },
                error       : function(jqXHR, textStatus, errorThrown){
                    //console.log(jqXHR.status);
                }
            });
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// 관심 이벤트 등록 처리
function addMyEvnt(evntId, obj, fn){
    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/addMyEvnt.json",
        dataType    : "json",
        type        : "POST",
        data        : { evntId : evntId },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            $(obj).addClass("active");
            alert("관심이벤트에 등록되었습니다.");

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// 관심 이벤트 삭제 처리
function removeMyEvnt(evntId, obj, fn){
    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/removeMyEvnt.json",
        dataType    : "json",
        type        : "POST",
        data        : { evntId : evntId },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            $(obj).removeClass("active");
            alert("관심이벤트가 삭제되었습니다.");

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}


// 관심 이벤트 등록/삭제 처리
function mergeMyEvnt(evntId, obj, fn){
    if(!isLogin){ login(); return; }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/mergeMyEvnt.json",
        dataType    : "json",
        type        : "POST",
        data        : { evntId : evntId },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }


            // 아이콘 + 메세지 처리
            if(data.info.mode == "insert"){
                $(obj).addClass("active");
                alert("관심이벤트에 등록되었습니다.");
            }else if(data.info.mode == "delete"){
                $(obj).removeClass("active");
                alert("관심이벤트가 삭제되었습니다.");
            }

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}


// 관심 기획전 등록 처리
function addMySpex(spexId, obj, fn){
    if(!isLogin){ login(); return; }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/addMySpex.json",
        dataType    : "json",
        type        : "POST",
        data        : { spexId : spexId },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            $(obj).addClass("active");
            alert("관심기획전에 등록되었습니다.");

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// 관심 기획전 삭제 처리
function removeMySpex(spexId, obj, fn){
    if(!isLogin){ login(); return; }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/removeMySpex.json",
        dataType    : "json",
        type        : "POST",
        data        : { spexId : spexId },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            $(obj).removeClass("active");
            alert("관심기획전이 삭제되었습니다.");

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}


// 관심 기획전 등록/삭제 처리
function mergeMySpex(spexId, obj, fn){
    if(!isLogin){ login(); return; }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/my/mergeMySpex.json",
        dataType    : "json",
        type        : "POST",
        data        : { spexId : spexId },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            // 아이콘 + 메세지 처리
            if(data.info.mode == "insert"){
                $(obj).addClass("active");
                alert("관심기획전에 등록되었습니다.");
            }else if(data.info.mode == "delete"){
                $(obj).removeClass("active");
                alert("관심기획전이 삭제되었습니다.");
            }

            // 콜백함수가 존재하는 경우
            if(typeof(fn) == "function"){ fn(obj); }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// 상품 미리보기 레이어
function previewGoos(onlnGoosCd){
    $.ajax({
        async       : true,
        url         : ctx_curr + "/gd/dtl/goosPreview.json",
        dataType    : "json",
        type        : "POST",
        data        : { onlnGoosCd : onlnGoosCd },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }
            $('#productPreview').remove();
            $('body').append(data.html);
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// gnb 브랜드 레이어의 카테고리 선택 이벤트 핸들
var gnbBranCtgInfo = {};
function selectGnbBranCtg(obj, goosCtgId){
    // 선택한 항목 활성화
    $(obj).parent().parent().find("li").removeClass("on");
    $(obj).parent().addClass("on");


    // 한번 로딩된 데이터는 기존 데이터 사용
    if(typeof(gnbBranCtgInfo[goosCtgId]) != "undefined"){
        appendGnbBranCtg(gnbBranCtgInfo[goosCtgId]);
    }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/cm/comm/getGnbGoosCtgBran.json",
        dataType    : "json",
        type        : "POST",
        data        : {goosCtgId:goosCtgId},
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            // 글로벌 데이터 등록
            gnbBranCtgInfo[goosCtgId] = data;

            // 영역 반영
            appendGnbBranCtg(data);
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

// gnb 브랜드 레이어의 카테고리 선택영역 적용
function appendGnbBranCtg(data){
    var ctg        = data.ctg;
    var ctgList    = data.ctgList;
    var branList   = data.branList;

    // 브랜드 목록 정보 갱신
    var html = [];
    for(var i = 0 ; i < branList.length ; i++){
        var b = branList[i];
        html.push('<li><a href="' + ctx_shop + '/dm/bran/brand.do?onlnBranCd=' + b.onlnBranCd + '" class="ico_coma">' + b.branNm + "</a></li>");
    }
    $(".gnbCtgBranList").html(html.join(""));

}


// 즐겨찾기 처리
function addBookmark(){
    var bookmarkURL = window.location.href;
    var bookmarkTitle = document.title;
    var triggerDefault = false;

    if (window.sidebar && window.sidebar.addPanel) {
        // Firefox version &lt; 23
        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') < -1)) || (window.opera && window.print)) {
        // Firefox version &gt;= 23 and Opera Hotlist
        var $this = $(this);
        $this.attr('href', bookmarkURL);
        $this.attr('title', bookmarkTitle);
        $this.attr('rel', 'sidebar');
        $this.off(e);
        triggerDefault = true;
    } else if (window.external && ('AddFavorite' in window.external)) {
        // IE Favorite
        window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else {
        // WebKit - Safari/Chrome
        alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 를 이용해 이 페이지를 즐겨찾기에 추가할 수 있습니다.');
    }

    //return triggerDefault;
}

function issueCoupon(cupId,fn){
    if(!isLogin){
        login();
        return;
    }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/or/coupon/issueCoupon.json",
        dataType    : "json",
        type        : "POST",
        data        : {
            cupId:cupId
        },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }
            if(typeof(fn) == "function"){
                fn(data);
                return;
            }
            if ( data.resultCode == 1 ) {
                alert('쿠폰이 다운로드 되었습니다.');
            }
            else {
                alert('쿠폰 다운로드 대상이 아닙니다.');
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){

        }
    });
}

function issueCouponDeferred(cupId){
    if(!isLogin){
        login();
        return;
    }

    var deferred = $.Deferred();
    $.ajax({
        async       : true,
        url         : ctx_curr + "/or/coupon/issueCoupon.json",
        dataType    : "json",
        type        : "POST",
        data        : {
            cupId:cupId
        },
        success     : function(data, textStatus, jqXHR){
            deferred.resolve(data);
        },
        error       : function(jqXHR, textStatus, errorThrown){
            deferred.resolve({resultCode:"999",message:"시스템에러가 발생하였습니다."});
        }
    });
    return deferred.promise();
}

function issueMultiCoupon(cupIds,fn) {
    if(!isLogin){
        login();
        return;
    }

    var arr         = new Array(cupIds.length);
    var msg         = new Array(cupIds.length);
    var rtn         = {};
    for ( var i = 0; i<cupIds.length; i++ ) {
        arr[i]          = issueCouponDeferred(cupIds[i]);
    }
    for ( var i = 0; i<arr.length; i++ ) {
        arr[i].done(function(data){
            var allComplete = true;
            var succCnt     = 0;
            var failCnt     = 0;
            for ( var k = 0; k<arr.length; k++ ) {
                msg[k]          = data.message;
                rtn[cupIds[k]]  = data;
                if ( data.resultCode == '1' ) {
                    succCnt+=1;
                }
                else {
                    failCnt+=1;
                }
                if ( arr[k].state() != "resolved" ) {
                    allComplete = false;
                    break;
                }
            }

            if ( allComplete ) {
                if(typeof(fn) == "function"){
                    fn(rtn);
                }
                else {
                    if ( succCnt == arr.length ) {
                        alert('모든 쿠폰이 다운로드 되었습니다.');
                    }
                    else if ( succCnt == 0 ) {
                        alert('쿠폰 다운로드 대상이 아닙니다.');
                    }
                    else {
                        alert('쿠폰이 '+succCnt+'건이 다운로드 되었습니다.');
                    }
                }
            }
        });
    }

}

// 숫자입력만 허용
function onlynum(event){
    var val     = $.trim($(this).val());
    var result  = "";

    for(var i=0, s ; s = val.substring(i, i+1) ; i++){
        if(!isNaN(s)){ result += s; }
    }

    $(this).val(parseInt(result || 0));
}

//HDDFS 리뉴얼 프로젝트 [ 김인호 - 2021.05.27 ] 숫자입력만 허용 
function onlynum2(event){
    var val     = $.trim($(this).val());
    var result  = "";

    for(var i=0, s ; s = val.substring(i, i+1) ; i++){
        if(!isNaN(s)){ result += s; }
    }

    $(this).val(parseInt(result || ""));
}

// 콤마찍기
function comma(num){
    var len, point, str, decimal;


    num = num + "";
    decimal = num.split(".")[1];
    num = num.split(".")[0];
    point = num.length % 3 ;
    len = num.length;

    str = num.substring(0, point);
    while (point < len) {
        if (str != "") str += ",";
        str += num.substring(point, point + 3);
        point += 3;
    }

    if (typeof(decimal) != "undefined") {
        str += "." + decimal;
    }

    return str;
}




// 자동 로그아웃 타이머 처리
function logoutAuto(){
    if(!isLogin){ return; }
    $.ajax({
        async       : false,
        url         : ctx_curr + "/mm/mbshAuca/saveLogoutAuto.json",
        dataType    : "json",
        type        : "POST",
        data        : {},
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data, false)){
                var resultCode = data.resultCode;
                var message    = data.message;

                if(resultCode == "10"){
                    var time = data.info.time;
                    setTimeout(logoutAuto, USER_AUTO_LOGOUT_TIME * 1000);
                }else{
                    alert("장애가 발생했습니다.");
                }
            }else{
                $.cookie('ssoLogin', null);			// 메인페이지 sso 자동로그인 횟수 초기화
                $.cookie('ssoLogin_pc_kr', null);	// 메인페이지 sso 자동로그인 횟수 초기화(pc_국문)
                $.cookie('ssoLogin_pc_en', null);	// 메인페이지 sso 자동로그인 횟수 초기화(pc_영문)
                $.cookie('ssoLogin_pc_cn', null);	// 메인페이지 sso 자동로그인 횟수 초기화(pc_중문)
                $.cookie('ssoLogin_pc_dcn', null);	// 메인페이지 sso 자동로그인 횟수 초기화(mo_역직구)
                $.cookie('ssoLogin_mo_kr', null);	// 메인페이지 sso 자동로그인 횟수 초기화(mo_국문)
                $.cookie('ssoLogin_mo_en', null);	// 메인페이지 sso 자동로그인 횟수 초기화(mo_영문)
                $.cookie('ssoLogin_mo_cn', null);	// 메인페이지 sso 자동로그인 횟수 초기화(mo_중문)
                $.cookie('ssoLogin_mo_dcn', null);	// 메인페이지 sso 자동로그인 횟수 초기화(mo_역직구)

                appCallLogout();	// 앱 로그아웃 정보 전달
                gfnSsoDscdToknReq(callbackSSOFunc);	// SSO 토큰만료
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR.status);
        }
    });
}

function callbackSSOFunc(){
    location.href = ctx_curr + "/dm/main.do";
}

function isEmpty(value) {
    var trimValue = $.trim(value);
    return (trimValue == null || trimValue == undefined || trimValue == "");
}

// 수량 체크(1~999...)
function qtyValidation(qty){
    return /^[1-9][0-9]*$/.test(qty);
}

//지류쿠폰등록
function issuePptpCup(pptpCupNo,fn){
    if ( !isLogin ) {
        login();
        return;
    }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/or/coupon/issuePptpCup.json",
        dataType    : "json",
        type        : "POST",
        data        : {
            pptpCupNo:pptpCupNo
        },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }
            if(typeof(fn) == "function"){
                fn(data);
                return;
            }
            if ( data.resultCode == 1 ) {
                alert('쿠폰이 등록 되었습니다.');
            }
            else {
                alert('쿠폰 등록 대상이 아닙니다.');
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){

        }
    });
}




// 레이어팝업 닫기
function layerPopupClose(areaId , type){
    var areaId	= areaId ? areaId : "layer_iframe";
    $("#" + areaId).dialog("close");
    top.$(".ui-dialog-titlebar-close").show();		// 닫았는데 또 레이어팝업이 있는 경우 닫기버튼 활성화
    if(type == 'goos'){
        if($(".b_notice").hasClass('check')){

        }else{
            $(".b_notice").addClass('check');
        }
    }else if(type =='brand'){
        if($(".bull_alim").hasClass('on')){

        }else{
            $(".bull_alim").addClass('on');
        }
    }else if(type == 'review'){
        location.reload();
    }else if(type == 'cart'){
        if(appYn =="Y"){
            controlAppbar("Y");
        }
    }
    if(appYn =="Y"){
        if(type != 'cart'){
            controlAppbar("N");
        }
    }


}

// SSO 토큰만료 콜백
function fnSsoDscdToknCallback(data) {
}

// 팝업함수
function popOpen(url, name, width, height){
    /*
    var toolbar_str = 'no';
    var menubar_str = 'no';
    var statusbar_str = 'no';
    var scrollbar_str = 'yes';
    var resizable_str = 'no';
    window.open(url, name, 'width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
    */
    layerPopup(name, url);
}

// 팝업함수(통멤 팝업용)
function popOpen1(url, name, width, height){
    var toolbar_str = 'no';
    var menubar_str = 'no';
    var statusbar_str = 'no';
    var scrollbar_str = 'yes';
    var resizable_str = 'no';
    window.open(url, name, 'width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}

// 쿠키설정
function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString()) + "; path=/";
    document.cookie = cookieName + "=" + cookieValue;
}

// 쿠키삭제
function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
}

function clearAllCookies(domain, path) {
    var doc = document,
        domain = domain || doc.domain,
        path = path || '/',
        cookies = doc.cookie.split(';'),
        now = +(new Date);
    for (var i = cookies.length - 1; i >= 0; i--) {
        doc.cookie = cookies[i].split('=')[0] + '=; expires=' + now + '; domain=' + domain + '; path=' + path;
    }
}

// 쿠키가져오기
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

// 윤년여부검사
function fnIsleafDate(year) {
    var vLeaf = false;

    if(year % 4 == 0) {
        vLeaf = true;

        if(year % 100 == 0) {
            vLeaf = false;
        }

        if(year % 400 == 0) {
            vLeaf = true;
        }
    }

    return vLeaf;
}

// 날짜 유효성 체크(YYYY-MM-DD)
function fnIsValidDate(date) {
    // 기본 날짜 형식 확인
    var vRegExpFormat = /\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/g;
    if(!vRegExpFormat.test(date)) {
        return false;
    }

    // 당월에 말일 넘어가지 않는지 확인
    var vSplitDate = date.split('-');
    var vYear = Number(vSplitDate[0]);
    var vMonth = Number(vSplitDate[1]);
    var vDay = Number(vSplitDate[2]);

    var vIsleaf = fnIsleafDate(vYear) ? 1 : 0; // 윤년여부 확인
    var vMonthEndDay = [31, 28 + vIsleaf, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(vDay > vMonthEndDay[vMonth - 1]) {
        return false;
    }

    return true;
}

// 숫자만 체크(양수만)
function fnIsNumber(a) {
    return /^\d+$/.test(a);
}

// 이메일 체크
function fnIsEmail(a) {
    return /^([.0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/g.test(a);
}

// 휴대폰 체크
function fnIsPhoneNumber(a) {
    return /^([\d]){3}-?([\d]){3,4}-?([\d]){4}$/g.test(a);
}

//한국 핸드폰번호체크 010,011,016,017,018,019 외 불가처리
function fnIsKorPhonePrefix(preCellPhone) {
    if(preCellPhone.length != 3){ return false; }
    if(preCellPhone == '010' || preCellPhone == '011' || preCellPhone == '016' || preCellPhone == '017' || preCellPhone == '018' || preCellPhone == '019'){
        return true;
    }
    return false;
}

// 숫자만 입력
$(document).on("keyup", ".number", function() {
    $(this).val( $(this).val().replace(/[^0-9]/gi,"") );
});

// 영문,숫자만 입력
$(document).on("keyup", ".engNumber", function() {
    $(this).val( $(this).val().replace(/[^0-9a-zA-Z]/gi,"") );
});

// 영문만 입력
$(document).on("keyup", ".eng", function() {
    $(this).val( $(this).val().replace(/[^a-zA-Z]/gi,"") );
});

// 두개의 날짜를 비료하여 차이를 반환한다.
function dateDiff(_date1, _date2) {
    var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);

    diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());

    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));

    return diff;
}

// 생년월일 자동하이픈 처리
function fnAutoHypenBymd(str) {
    var vTmp = '';
    var vStr = str;
    vStr = vStr.replace(/-/g, '');

    if(vStr.length < 5){
        vTmp = vStr;
    }else if(vStr.length < 7){
        vTmp += vStr.substr(0, 4);
        vTmp += '-';
        vTmp += vStr.substr(4);
    }else {
        vTmp += vStr.substr(0, 4);
        vTmp += '-';
        vTmp += vStr.substr(4, 2);
        vTmp += '-';
        vTmp += vStr.substr(6, 2);
    }

    return vTmp;
}

// 영문만 체크
function fnIsAlpha(a) {
    return /^[a-zA-Z]+$/g.test(a);
}

//여권체크
function fnIsPassport(a) {
    return /^[0-9A-Z]+$/g.test(a);
}

// 영문대문자만 체크
function fnIsUpperAlpha(a) {
    return /^[A-Z]+$/g.test(a);
}


//공백입력불가
function noSpaceEvnt(e){
    if(e.keyCode == 32){
        e.preventDefault();
    }
}

// 이미지 크게보기 레이어 팝업
function imgViewLayerPopup(img_src, img_alt, areaId){
    var areaId	= areaId ? areaId : "layer_prd";
    var area	= $("#" + areaId);

    // 영역삭제 - 기존에 레이어를 띄우고 다른 레이어를 띄우는 경우 기존 레이어를 초기화
    if(area.size() != 0){ area.remove(); }

    // 영역 생성
    var html = [];
    html.push("<div id='"+ areaId +"' title='이미지 보기'>");
    html.push("<div class='layer_popup'>");
    html.push("<div class='img_zoom'><img src=\""+ img_src +"\" alt=\""+ img_alt +"\"></div>");
    html.push("</div>");
    html.push("</div>");
    $("body").append(html.join(""));
    area = $("#" + areaId);

    // 영역 활성화
    area.dialog({
        resizable: false,
        dialogClass: "full_type no_title_02", // 타이틀이 없는 타입(.no_title), 아이프레임 타입(.iframe_type), 100% 타입(.full_type)
        width:'100%',
        modal: true
    });
}

$(document).on("blur", ".upper", function() {
    $(this).val( $(this).val().toUpperCase() );
});

// 휴면해제 페이지이동
function fnMbshSleepRelease(mbshNo, authType, redirectUrl) {
    // 앱여부 따라 분기
    if(appYn == 'Y' && appOsInfo == 'ios') {
        // IOS인 경우는 window.open 사용불가
        var url = ctx_curr + '/mm/mbshAuca/membershipSleepRelease.do';
        url += '?mbshNo=' + mbshNo;
        url += '&authType' + authType;
        url += '&redirectUrl' + redirectUrl;

        // OS에 따라 분기
        location.href = url;
    } else {
        var $form = $('<form></form>');
        $form.attr('action', ctx_curr + '/mm/mbshAuca/membershipSleepRelease.do');
        $form.attr('method', 'post');
        $form.append('<input type="hidden" value="' + mbshNo + '" name="mbshNo">');
        $form.append('<input type="hidden" value="' + authType + '" name="authType">');
        $form.append('<input type="hidden" value="' + redirectUrl + '" name="redirectUrl">');
        $form.appendTo('body');
        $form.submit();
    }
}


//숫자만 입력 
function isNumber(obj) {
    $(obj).val($(obj).val().replace(/[^0-9]/g,''));
    /*
    if($(obj).val() == "0"){
        $(obj).val(1);
    }
    if($(obj).val().length == 0){
        $(obj).val(1);
    }
    */
}

// 한글명, 영문명 앞뒤 공백체크
function fnIsNotValidNameBlank1(a) {
    return /^ +| +$/g.test(a);
}

// 한글명, 영문명 중간 공백체크
function fnIsNotValidNameBlank2(a) {
    return / {2,}/g.test(a);
}

// 영문대문자, 공백만 체크
function fnIsUpperAlphaBlank(a) {
    return /^[A-Z ]+$/g.test(a);
}

//공백체크
function fnIsCheckSpace(a) {
    return / /g.test(a);
}

// 연락처 하이픈 처리
function fnHpHyphen(hp) {
    return hp.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
}


//동일문자 3번이상 체크
function fnIsThreeSameVal(a){
    var same = 0; //동일문자 카운트
    var chr_0;
    var chr_1;
    for(var i =0; i < a.length; i++){
        chr_0 = a.charAt(i);
        chr_1 = a.charAt(i+1);
        // 동일문자 카운트
        if(chr_0 == chr_1){
            same = same + 1;
        }else{
            if(same > 1){
                alert("동일 문자를 연속하여 3번 이상 사용할 수 없습니다.");
                return false;
            }
            same = 0;
        }
    }
    return true;
}

/**
 * URL, 파라미터(object)를 받아서 context Path를 적용시킨 URL 리턴
 * url(URL-문자열)
 * param(URL 파라미터 - Object)
 */
function gfnMakeFullUrl(url, oParam){
    var sParam = (url.indexOf('?') > -1 ? '&' : '?');
    $.each(oParam, function(k,v){ sParam+=k+'='+v+'&' });

    return ctx_curr+"/"+url+sParam;
}



function autoSwiperSetting(id){
    var config7 = {
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: false,
        wrapperClass: 'section_tab',
        slideClass: 'tab_item',
        setWrapperSize: true

    };
    var $tabItems7 = $('#'+id+' .tab_item');
    var tabSwiper7 = new Swiper('#'+id, config7);
    $tabItems7.on('click', 'a', function (e) {
        var $this = $(this),
            $targetItem7 = $this.closest('.tab_item'),
            activeIndex7 = $targetItem7.index();
        $tabItems7.removeClass('is_selected');
        $targetItem7.addClass('is_selected');
        tabSwiper7.slideTo(activeIndex7 - 1, 400);
    });
}

//적립금 발행
function issueSvmt(svmtId, rsvgAmt , fn){
    // 로그인 체크
    if(!isLogin){
        alert("로그인 후 이용 가능합니다 ");
        login();
        return;
    }

    $.ajax({
        async       : true,
        url         : ctx_curr + "/cm/comm/issueSvmt.json",
        dataType    : "json",
        type        : "POST",
        data        : {
            svmtId : svmtId,
            rsvgAmt : rsvgAmt
        },
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }
            if(typeof(fn) == "function"){
                fn(data);
                return;
            }
            if ( data.resultCode == 1 ) {
                alert('적립금이 다운로드 되었습니다.');
            }
            else {
                alert('적립금 다운로드 대상이 아닙니다.');
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){

        }
    });
}

function goosFilterInit(){
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
                    }
                }
            });
            filterSwiper.swiper = swiperFilter; //이벤트리스너 안에 this 처리를 위해
            swiperFilter.slideTo(4);
        }
    }
    filterSwiper.init();
    goosFilterSwiper();
    autoSwiperSetting("searchFilterSwiper");
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
    $(".ch_btn a.btn_ck").on('click', function (e) {
        $(".prd_list_new").toggleClass("active");
        $(".cart_bottom_area").toggleClass("active");
        e.preventDefault();
    });
    $(".btn_txt").fadeOut(900).parent(".ch_btn.ty02").animate({width:44},1400);
    //체크박스 초기화
    $(".goosListChk").removeClass("on");

    //상품 리스트 sort 변경시
    $(".goodsListOrder").on("change",function(){
        callGoosListSortInit();
    });

    $("#priceFilterStr,#priceFilterEnd").on("focus", function(){
        $("input[name='priceFillter']").prop("checked",false);		// 가격 초기화
    });

    $(".btn_ck").on("click", function(){
        $(this).toggleClass("on");
    });

    if($(".lang_change_en").length) {
        $(".lang_change_en").bind("click", function(){
            $(this).text( $(this).text() == 'ABC순' ? "가나다순" : "ABC순");
            $(this).parent().parent().toggleClass("on");
        });
    }
    //filter 결과 bind
    $(".btn_toggle_sort").bind("click", function(){
        $(this).toggleClass("on");
        $(".sort_sel").toggleClass("on");
    });
}

/**
 * HDDFS 리뉴얼 프로젝트 [김영훈 - 2021.03.29] - 적립금 혜택 엿보기
 * @param onlnGoosCd
 * @param goosQty
 * @param callback
 */
function getMaxDcPrc(goosCd, goosQty, setGoosCd, steGoosQty) {

    // 로그인 체크
    if(!isLogin){
        alert("로그인 후 이용 가능합니다.");
        login();
        return;
    }

    var goosCds  = typeof(goosCd) === "undefined" ? "" : goosCd;
    var goosQtys   = typeof(goosQty) === "undefined" ? "" : goosQty;

    var setGoosCds = typeof(setGoosCd) === "undefined" ? "" : setGoosCd;
    var steGoosQtys = typeof(steGoosQty) === "undefined" ? "" : steGoosQty;

    if( goosCds === "" && setGoosCds === ""){
        alert("상품을 선택해 주십시오.");
        return;
    }

    var url = ctx_curr + "/or/order/maxDcAmtInfo.do?onlnGoosCd="+ goosCds +"&goosQty="+ goosQtys + "&setGoosCd="+ setGoosCds+"&setGoosQty="+ steGoosQtys ;

    top.layerPopup('적립금 혜택 엿보기', url, 'maxDcAmtPopup');

}


/**
 * HDDFS 리뉴얼 프로젝트 [최현웅 - 2021.05.12] - 앱 자동로그인
 * @param mbshNo
 * @param autoLoginYn
 */
function fnBridgeAutoLogin(mbshNo, oflnMbshLvlId, addDcBnfYn, rememberID, ackApp){
    if(appYn == 'Y'){

    	var uAgent = exApp.getAgent();
        var autoLoginYn = "";
        if(uAgent == "ios"){
            if(ackApp != ""){
                autoLoginYn = "Y";
            } else {
                autoLoginYn = "N";
            }
        } else {
            if(localStorage.getItem('ack') == undefined){
                autoLoginYn = "N";
            } else{
                autoLoginYn = "Y";
            }
        }

        var obj = {
            "mbshNo" : mbshNo ,
            "autoLoginYn" : autoLoginYn ,
            "oflnMbshLvlId" : oflnMbshLvlId == null ? "" : oflnMbshLvlId,
            "addDcBnfYn" : addDcBnfYn == null ? "" : addDcBnfYn,
            "rememberID": rememberID == null ? "" : rememberID //ID 저장 정보 넣기 - INTG / GENE / INTG_NONE / GENE_NONE / NONE
        }
        console.log("====App fnBridgeAutoLogin bridge =====");
        if(uAgent == "android" || uAgent == "ios"){
            if(uAgent == "android"){
                android.loginInfo(JSON.stringify(obj));
            }else if(uAgent == "ios"){
            	if(ackApp != ""){
                    obj["ackApp"] = ackApp;
                } else {
                	obj["ackApp"] = "";
                }
            	
                var appUrl = 'loginInfo://' + encodeURIComponent(JSON.stringify(obj));
                location.href = appUrl;
            }
        }

    }
}

/**
 * HDDFS 리뉴얼 프로젝트 [최현웅 - 2021.05.12] - 레이어 컨트롤 감지 앱 전달
 * @param openStat
 */
function controlAppbar(openStat){
    if(appYn == 'Y'){
        console.log(openStat);
        console.log("====App controlAppbar bridge =====");
        var uAgent = exApp.getAgent();
        // openStat이 Y면 앱바 hide
        // openStat이 N이면 앱바 show
        if(openStat == 'Y'){
            // 오픈
            if(uAgent == "android" || uAgent == "ios"){
                if(uAgent == "android"){
                    android.hideAppbar()
                }else if(uAgent == "ios"){
                    //var appUrl = 'hideAppbar://';
                    //location.href = appUrl;
                }
            }
        }else{
            // 닫기
            if(uAgent == "android" || uAgent == "ios"){
                if(uAgent == "android"){
                    android.showAppbar()
                }else if(uAgent == "ios"){
                    //var appUrl = 'showAppbar://';
                    //location.href = appUrl;
                }
            }
        }

    }
}


/**
 * HDDFS 리뉴얼 프로젝트 [김민수 - 2021.05.27] -  toast 메세지 공통 처리
 * @param openStat
 */
function commToastMsg(msg , type){
    $(".toast_message").html("<div class='"+type+"'>"+ msg.replace( /[\t\r\n ]{2,}|[\t\r\n]/g, '<br>' ) +"</div>");
    $(".toast_message > div ").css("zIndex","99999").fadeIn(400).delay(1000).fadeOut(400);		// toast message 최상단 띄우기
}

//메인html, leftwing *.js 갱신 버전정보
function fnScriptVerVal() {
    var d = new Date();

    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var hours = d.getHours();
    var minutes = parseInt(d.getMinutes() / 5);

    return year + '' + month + '' + date + '' + hours + '' + minutes;
}
// 브랜드온, 오프정보
var brandDetData = "";
function loadBranDetData (val){
    if(brandDetData == "") {
        var asyncYn = true;
        if(val == false) {
            asyncYn = false;
        }
        $.ajax({
            async       : asyncYn,
            url           : ctx_shop+"/dm/bran/branMstInfo.json",
            dataType    : "json",
            type        : "POST",
            success     : function(data, textStatus, jqXHR){
                brandDetData = data.branInf;
            },
            error       : function(jqXHR, textStatus, errorThrown){

            }
        });
    }
}

/*
 *  HDDFS 리뉴얼 프로젝트 [김민수 - 2021.06.27] - 브랜드 IC 정보 반환
 *  CDN 활용 데이터 브랜드 , 카테고리 관련 처리 
 */
var loadBranIcKrJsonpList="";
var loadBranIcEnJsonpList="";
var loadBranKrJsonpList="";
var loadBranEnJsonpList="";
var loadCtgJsonpList="";


// 브랜드 IC 국문 리스트
function loadBranIcKrList(){
    if(loadBranIcKrJsonpList ==""){
        $.ajax({
            url:  SERVER_SCRIPT_JSON + '/htmlGen/M_KO/gnbBranIcKr.js?ver=' + fnScriptVerVal(),
            dataType: 'jsonp',
            async : false ,
            jsonpCallback: 'myCallback',
            success : function(json) {
                loadBranIcKrJsonpList = json != null ? json[0] : "";
                //브랜드KR 생성
                loadBranKrList();
            },
            error : function(jqXHR, textStatus, errorThrown) {
            }
        });
    }
}

//브랜드 IC 영문 리스트
function loadBranIcEnList(){
    if(loadBranIcEnJsonpList ==""){
        $.ajax({
            url:  SERVER_SCRIPT_JSON + '/htmlGen/M_KO/gnbBranIcEn.js?ver=' + fnScriptVerVal(),
            dataType: 'jsonp',
            async : false ,
            jsonpCallback: 'myCallback',
            success : function(json) {
                loadBranIcEnJsonpList = json != null ? json[0] : "";
                //브랜드 EN 생성
                loadBranEnList();
            },
            error : function(jqXHR, textStatus, errorThrown) {
            }
        });
    }
}

//브랜드 리스트 국문
function loadBranKrList(){
    if(loadBranKrJsonpList ==""){
        $.ajax({
            url:  SERVER_SCRIPT_JSON + '/htmlGen/M_KO/gnbBranSiteMap.js?ver=' + fnScriptVerVal(),
            dataType: 'jsonp',
            async : false ,
            jsonpCallback: 'myCallback',
            success : function(subJson) {
                loadBranKrJsonpList = subJson != null ? subJson[0] : "";
                var html ="";
                //국문 브랜드 정보
                for(var i=0; i<loadBranIcKrJsonpList.length; i++){
                    var chkClass = i ==0 ? "on" : "";
                    var isDisabled ="";
                    if(loadBranKrJsonpList[loadBranIcKrJsonpList[i]] == ""){
                        isDisabled = "disabled";
                    }
                    html+="<li class=\""+chkClass+"\"><a nohref class='lang_ko"+(i+1)+" "+isDisabled+"  '><span class=\"preface\">"+loadBranIcKrJsonpList[i]+"</span></a></li>";
                }
                $(".brandKrTabList").html(html);
                html = "";
                //국문 브랜드 depth별 정보
                for(var i=0; i<loadBranIcKrJsonpList.length; i++){
                    var subDataList = loadBranKrJsonpList[loadBranIcKrJsonpList[i]];
                    if(subDataList.length > 0){
                        html += "<li class=\"depth01\" id=\"lang_ko" + (i + 1) + "\" ><a noHref onclick=\"chkBtn(this, event);\" class=\"ico_coma\">" + loadBranIcKrJsonpList[i] + "<em>" + " " + subDataList.length + "</em></a>	"; // [pub]2023-01-31 GA4 script 작업
                        html+="<ul class=\"depth02_area\">";
                        for(var j=0; j <subDataList.length; j++){
                            html+="<li class=\"depth02\"><a href=\""+ctx_shop+"/dm/bran/brand.do?onlnBranCd="+subDataList[j].onlnBranCd+"\" class=\"ico_coma\">"+subDataList[j].branNm+"</a></li>";
                        }
                        html+="</ul>";
                    }
                }
                $(".brandKrDepthList").html(html);
                HDFUINEW.categotySearchFunction();
                HDFUI.sideAccodian();
            },
            error : function(jqXHR, textStatus, errorThrown) {
            }
        });
    }
}

//브랜드 리스트 영문
function loadBranEnList(){
    if(loadBranEnJsonpList ==""){
        $.ajax({
            url:  SERVER_SCRIPT_JSON + '/htmlGen/M_KO/gnbBranEnMap.js?ver=' + fnScriptVerVal(),
            dataType: 'jsonp',
            async : false ,
            jsonpCallback: 'myCallback',
            success : function(subJson) {
                loadBranEnJsonpList = subJson != null ? subJson[0] : "";
                var html ="";
                //영문 브랜드 정보
                for(var i=0; i<loadBranIcEnJsonpList.length; i++){
                    var chkClass = i ==0 ? "on" : "";
                    var isDisabled ="";
                    if(loadBranEnJsonpList[loadBranIcEnJsonpList[i]] == ""){
                        isDisabled = "disabled";
                    }
                    html+="<li class=\""+chkClass+"\"><a nohref class='lang_en"+(i+1)+" "+isDisabled+"  '><span class=\"preface\">"+loadBranIcEnJsonpList[i]+"</span></a></li>";
                }
                $(".brandEnTabList").html(html);
                html="";
                //영문 브랜드 depth별 정보
                for(var i=0; i<loadBranIcEnJsonpList.length; i++){
                    var subDataList = loadBranEnJsonpList[loadBranIcEnJsonpList[i]];
                    if(subDataList.length > 0){
                        html += "<li class=\"depth01\" id=\"lang_en" + (i + 1) + "\" ><a noHref onclick=\"chkBtn_(this, event);\" class=\"ico_coma\">" + loadBranIcEnJsonpList[i] + "<em>" + " " + subDataList.length + "</em></a>	"; // [pub]2023-01-31 GA4 script 작업
                        html+="<ul class=\"depth02_area\">";
                        for(var j=0; j <subDataList.length; j++){
                            html+="<li class=\"depth02\"><a href=\""+ctx_shop+"/dm/bran/brand.do?onlnBranCd="+subDataList[j].onlnBranCd+"\" class=\"ico_coma\">"+subDataList[j].branEngNm+"</a></li>";
                        }
                        html+="</ul>";
                    }
                }
                $(".brandEnDepthList").html(html);
                HDFUINEW.categotySearchFunction();
                HDFUI.sideAccodian();
            },
            error : function(jqXHR, textStatus, errorThrown) {
            }
        });
    }
}

function loadCtgList(){
    if(loadCtgJsonpList ==""){
        $.ajax({
            url:  SERVER_SCRIPT_JSON + '/htmlGen/M_KO/goosCtg.js?ver=' + fnScriptVerVal(),
            dataType: 'jsonp',
            async : true ,
            jsonpCallback: 'myCallback',
            success : function(data) {
                loadCtgJsonpList = data;
                var html ="";
                //카테고리 tab 리스트
                for(var i=0; i<loadCtgJsonpList.length; i++){
                    var isDisabled ="";
                    if(loadCtgJsonpList[i].branList == ""){
                        isDisabled = "disabled";
                    }
                    html+="<li><span class=\"chk_item\"><a nohref class=\"brd"+(i+1)+" "+isDisabled+"\">"+loadCtgJsonpList[i].goosDispCtgNm+"</a></span></li>";
                }
                $(".categoryTabList").html(html);
                html = "";

                for(var i=0; i<loadCtgJsonpList.length; i++){
                    var subDataList = loadCtgJsonpList[i].branList;
                    html+="<li class=\"depth01\" id=\"brd"+(i+1)+"\"><a noHref onclick=\"chkCtgBtn(this, event);\" class=\"ico_coma\">"+loadCtgJsonpList[i].goosDispCtgNm+"<em>"+" "+subDataList.length+"</em></a>";
                    if(subDataList.length >0){
                        html +="<ul class=\"depth02_area\">";
                        for(var j=0; j < subDataList.length; j++){
                            html+="<li class=\"depth02\"><a href=\""+ctx_shop+"/dm/bran/brand.do?onlnBranCd="+subDataList[j].onlnBranCd+"\"  class=\"ico_coma\" >"+subDataList[j].branNm+"</a></li>";
                        }
                        html+="</ul>";
                    }
                    html+="</li>";
                }
                $(".categoryDepthList").html(html);
                //setGoosCtg(loadCtgJsonpList);
                // 햄버거 카테고리 2023 개선
                setCategory({data: loadCtgJsonpList, all: '전체보기'});
                HDFUINEW.categotySearchFunction();
                HDFUI.sideAccodian();
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.log('실패 - jqXHR : ', jqXHR);
                console.log('textStatus, : ', textStatus);
                console.log('errorThrown, : ', errorThrown);
            }
        });
    }
}

/**
 * HDDFS 리뉴얼 프로젝트 [김민수 - 2021.06.21] - 카테고리 JSON
 * @param openStat
 */
/*
function loadGnbDispCtgJsonp() {
	if($(".ctgMainList").length <1){
		$.ajax({
	        url: SERVER_SCRIPT_JSON + '/htmlGen/M_KO/goosCtg.js?ver=' + fnScriptVerVal(),
	        dataType: 'jsonp', 
	        jsonpCallback: 'myCallback', 
	        success : function(data) {
	        	// console.log('성공 - ', data);
	        	gnbDispCtg = data;
	        	setGoosCtg(gnbDispCtg);
	        },
	        error : function(jqXHR, textStatus, errorThrown) {
	            console.log('실패 - jqXHR : ', jqXHR);
	            console.log('textStatus, : ', textStatus);
	            console.log('errorThrown, : ', errorThrown);
	        }
	    });	
	} 
}
*/

function setGoosCtg(goosCtgList1) {
    var html = "";

    html+="<div class=\"nav_section\">";
    html+="<div id=\"categoryTab\" class=\"navSection_swiper\">";
    html+="<ul class=\"section_tab ctgMainList\">";
    for(var i = 0; i < goosCtgList1.length; i++) {
        if(i ==0){
            html+="<li class=\"tab_item is_selected\" data-ctgid=\"ctg"+goosCtgList1[i].goosCtgId+"\"><a noHref><span>"+goosCtgList1[i].goosDispCtgNm+"</span></a></li>";
        }else{
            html+="<li class=\"tab_item\" data-ctgid=\"ctg"+goosCtgList1[i].goosCtgId+"\"><a noHref><span>"+goosCtgList1[i].goosDispCtgNm+"</span></a></li>";
        }
    }
    html+="</ul>";
    html+="</div>";
    html+="</div>";
    for(var i = 0; i < goosCtgList1.length; i++) {
        var goosCtgList2 = goosCtgList1[i].subCtgList;
        if(i == 0){
            html+="<ul class=\"depth02_list01 ty_small ctgSubList\" id=\"ctg"+goosCtgList1[i].goosCtgId+"\">";
            for(var j = 0; j < goosCtgList2.length; j++) {
                if(j ==0){
                    html+="<li><a href=\""+ctx_shop+"/dm/ctg/category.do?goosCtgId="+goosCtgList1[i].goosCtgId+"\">"+goosCtgList1[i].goosDispCtgNm+" 전체보기</a></li>";
                }
                html+="<li><a href=\""+ctx_shop+"/dm/ctg/category.do?goosCtgId="+goosCtgList2[j].goosCtgId+"\">"+goosCtgList2[j].goosDispCtgNm+"</a></li>";

            }
            html+="</ul>";
        }else{
            html+="<ul class=\"depth02_list01 ty_small ctgSubList\" style=\"display:none;\" id=\"ctg"+goosCtgList1[i].goosCtgId+"\">";
            for(var j = 0; j < goosCtgList2.length; j++) {
                if(j ==0){
                    html+="<li><a href=\""+ctx_shop+"/dm/ctg/category.do?goosCtgId="+goosCtgList1[i].goosCtgId+"\">"+goosCtgList1[i].goosDispCtgNm+" 전체보기</a></li>";
                }
                html+="<li><a href=\""+ctx_shop+"/dm/ctg/category.do?goosCtgId="+goosCtgList2[j].goosCtgId+"\">"+goosCtgList2[j].goosDispCtgNm+"</a></li>";
            }
            html+="</ul>";
        }

    }
    $('.serviceCtgList').html(html);
    $(function(){
        $(".ctgMainList > li > a").on("click",function(){
            var ctgId = $(this).parent().data("ctgid");
            $(".ctgSubList").hide();
            $("#"+ctgId).show();
        });

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
        var $tabItems = $('#categoryTab .tab_item');
        var tabSwiper = new Swiper('#categoryTab', config);
        $tabItems.on('click', 'a', function (e) {
            var $this = $(this),
                $targetItem = $this.closest('.tab_item'),
                activeIndex = $targetItem.index();
            $tabItems.removeClass('is_selected');
            $targetItem.addClass('is_selected');
            tabSwiper.slideTo(activeIndex - 1, 400);
        });
    });
}


function changeAmtBtn(obj) {
    var cntObj = $(obj).parent().find('.count');	//input [type=number] 오브젝트
    var cntVal = parseInt(cntObj.val());			//cntObj의 값
    var isEmpty = cntObj.val() == "" ? true : false;	//빈카여부 확인
    var range = $(obj).attr("count_range");			//'-'버튼 : 'm' , '+'버튼 : 'p'
    var amount = 1;
    //최소값
    var min = parseInt(cntObj.attr("min"));		//항목에 설정된 최소값
    var max = parseInt(cntObj.attr("max"));		//항목에 설정된 최대값

    if(range == 'm') {

        if(isEmpty) {
            alert("수량을 확인해주세요.");
            return false;
        }else {
            if(cntVal == min) {
                amount = min;
                alert("해당 상품의 최소 주문 수량은 "+min+"개 입니다.");
            }else {
                amount = cntVal-1;
            }
        }

    }else if(range == 'p') {

        if(isEmpty) {
            alert("수량을 확인해주세요.");
            return false;
        }else {
            if(cntVal == max) {
                amount = max;
                alert("주문예정 수량보다 해당 상품의 재고가 부족합니다.");
            }else {
                amount = cntVal+1;
            }
        }
    }

    cntObj.val(cntVal);
    cntObj.attr("value", amount);
    return amount;
}

function checkNumber(event) {
    if((48 <= event.keyCode && event.keyCode <= 57) 			//키보드 숫자
        || (96 <= event.keyCode && event.keyCode <= 105)	//키보드 숫자(num Lock)
        || (event.keyCode == 8) || (event.keyCode == 37) || (event.keyCode == 39)) {		//Back-Space
    }else {
        return false;
    }
}

function checkAmt(obj, event) {
    var min = $(obj).attr("min");	//설정된 최소값
    var max = $(obj).attr("max");	//설정된 최대값
    var inputVal = $(obj).val();		//입력 후 value값
    var value = inputVal.replace(/[^0-9]/g,"");	//숫자 외 제거 처리

    if(value == 0) {
        alert("수량을 확인해주세요.");
        $(obj).val(parseInt(min));
        $(obj).attr("value", parseInt(min));
        rtnVal = parseInt(min);
        //return false;
    }else if(parseInt(value) > parseInt(max)) {
        alert("주문예정 수량보다 해당 상품의 재고가 부족합니다.");
        $(obj).val(parseInt(min));
        $(obj).attr("value", parseInt(min));
        rtnVal = parseInt(min);
        //return false;
    }else if(parseInt(value) < parseInt(min)){
        alert("해당 상품의 최소 주문 수량은 "+min+"개 입니다.");
        $(obj).val(parseInt(min));
        $(obj).attr("value", parseInt(min));
        rtnVal = parseInt(min);
        //return false;
    }else{
        rtnVal = parseInt(value);
    }
    $(obj).attr("value", rtnVal);
    return rtnVal;
}

//메인 럭키딜 AJAX
function luckyDealMake(){
    $.ajax({
        async       : true,
        url           : ctx_shop+"/dm/main/mainLckd.json",
        dataType    : "json",
        type        : "POST",
        success     : function(data, textStatus, jqXHR){
            var list = data.lckd;
            var html = "";
            if(list != null){
                if(list.goosList.length <1 ){
                    $(".luckyDealMenu").remove();
                }else{
                    html+="<h3 class=\"submain_h3\">럭키딜</h3>";
                    html+="<div class=\"lucky_swiper\">";
                    html+="<ul class=\"swiper-wrapper lucky-wrapper\">";
                    for(var i=0; i<list.goosList.length; i++){
                        html+="<li class=\"visual_item\">";
                        html+="<div class=\"lucky_wrap\">";
                        html+="<div class=\"img_area\">";
                        html+="<a href=\""+ctx_shop+"/gd/dtl/goos.do?onlnGoosCd="+list.goosList[i].onlnGoosCd+"\" ";
                        html+=" onclick='GA_fn_common(\"select_item\",\""+list.goosList[i].onlnGoosCd+"\",\""+list.goosList[i].goosNm+"\",\""+list.goosList[i].branNm+"\",\""+list.goosList[i].onlnBranCd;
                        html+="\",\""+list.goosList[i].branGrpCd+"\",\""+list.goosList[i].goosTypeCd+"\",\""+list.goosList[i].goosHigpCdNm+"\",\""+list.goosList[i].goosMlfCdNm+"\",\""+list.goosList[i].goosLgrpCdNm;
                        html+="\",\""+list.goosList[i].refNo+"\",undefined,\"홈_럭키딜\")'>";
                        if(list.goosList[i].stocOnln < 1 || list.goosList[i].goosStatCd =="2" ){
                            html+="<a noHref class=\"no_stoc\">판매종료</a> ";
                        }
                        if(list.goosList[i].dcRate !="" && Number(list.goosList[i].dcRate) > 0){
                            html+="<div class=\"sale_mount\">";
                            html+="<span>"+parseInt(list.goosList[i].dcRate)+"<em>%</em></span>";
                            html+="</div>";
                        }
//            			html+="<img src=\""+SERVER_IMAGE_MNG+""+list.goosList[i].goosImgUrl+"?RS=120X120\" alt=\""+list.goosList[i].branNm+"\>";
                        html+="<img class=\"swiper-lazy lazy\" data-srcset=\""+SERVER_IMAGE_MNG+""+list.goosList[i].goosImgUrl+"?RS=300X300\" data-original=\""+SERVER_IMAGE_MNG+""+list.goosList[i].goosImgUrl+"?RS=300X300\" src=\""+SERVER_IMAGE_MNG+"/images/M_KO/common/noimg.png\" alt=\""+list.goosList[i].branNm+"\"/>"
                        html+="</a>";
                        html+="</div>";
                        html+="<a href=\""+ctx_shop+"/gd/dtl/goos.do?onlnGoosCd="+list.goosList[i].onlnGoosCd+"\">";
                        html+="<div class=\"prd_tit2 ty_lucky\">";
                        html+="<span class=\"brand\">"+list.goosList[i].branNm+"</span>";
                        if(list.goosList[i].mdKwrdWrd !="" && list.goosList[i].mdKwrdWrd !=null){
                            html+="<span class=\"brand_stxt\">"+list.goosList[i].mdKwrdWrd+"</span>";
                        }
                        html+="<span class=\"brand_ex\">"+list.goosList[i].goosNm+"</span>";
                        html+="<div class=\"prd_price2\">";
                        if(list.goosList[i].strkMarkYn =="Y" && list.goosList[i].goosApprBeyn =="N"){
                            html+="<div class=\"be_area\">";
                            html+="<span class=\"be\">"+comma(list.goosList[i].pricOnln)+"</span>";
                            if(list.goosList[i].dcRate !="" && Number(list.goosList[i].dcRate) > 0){
                                html+="<span class=\"be_per\">"+parseInt(list.goosList[i].dcRate)+"%</span>";
                            }
                            html+="</div>";
                        }
                        html+="<div class=\"now_area\">";
                        html+="<span class=\"sale\">$"+comma(list.goosList[i].lastDcPric)+"</span>";
                        html+="<span class=\"won\">"+comma(list.goosList[i].lastDcPricNtnl)+"<em>원</em></span>";
                        html+="</div></div></div></a></div></li>";
                    }
                    html+="</ul>";
                    html+="</div>";

//            		alert(html);

                    $(".luckyDealMenu").html(html);
                    HDFUINEW.luckySwiper();
                }
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){

        }
    });
}

function timeSaleMake(){
    $.ajax({
        async       : true,
        url           : ctx_shop+"/dm/main/tmSaleList.json",
        dataType    : "json",
        type        : "POST",
        success     : function(data, textStatus, jqXHR){
            var tmDcList = data.tmDcList;
            var tmDcPreList = data.tmDcPreList;
            var html = "";
            var count = 0;
            if(tmDcList.length < 1 && tmDcPreList.length < 1){
                $(".timeSaleMenu").remove();
            }else{
                html+="<h3 class=\"submain_h3\">TIME SALE</h3>";
                html+="<div class=\"main_time_swiper\">";
                html+="<ul class=\"swiper-wrapper\">";
                for(var i =0; i < tmDcList.length; i++){
                    if(count < 20){
                        html+="<li class=\"visual_item\">";
                        html+="<a href=\""+ctx_shop+"/dm/bran/brand.do?onlnBranCd="+tmDcList[i].onlnBranCd+"\">";
                        html+="<div class=\"item_img\">";
                        html+="<img data-srcset=\""+SERVER_IMAGE_MNG+""+tmDcList[i].tmDcImg1Url+"?RS=670X710\" data-original=\""+SERVER_IMAGE_MNG+""+tmDcList[i].tmDcImg1Url+"?RS=670X710\" alt=\"\" class=\"lazy swiper-lazy\" src='"+SERVER_IMAGE+"/images/M_KO/common/noimg.png?RS=500X500' onerror=\"this.onerror=null; this.src='"+SERVER_IMAGE+"/images/M_KO/common/noimg.png?RS=335X240';\">";
                        html+="<div class=\"item_info\">";
                        html+="<p class=\"item_info_sale\">"+tmDcList[i].dcRate+"% SALE</p><br/>";
                        html+="<p class=\"item_info_tit\">"+tmDcList[i].branNm+"</p>";
                        html+="<div class=\"s_sec_timer s_sec1_timer\">";
                        html+="<span class=\"hours\"></span><span>:</span><span class=\"minutes\"></span><span>:</span><span class=\"seconds\"></span>";
                        html+="</div>";
                        html+="</div>";
                        html+="</div>";
                        html+="</a>";
                        html+="</li>";
                        count++;
                    }
                }
                for(var i =0; i < tmDcPreList.length; i++){
                    if(count < 20){
                        html+="<li class=\"visual_item ty_item\">";
                        html+="<a href=\""+ctx_shop+"/dm/bran/brand.do?onlnBranCd="+tmDcPreList[i].onlnBranCd+"\">";
                        html+="<div class=\"item_img\">";
                        html+="<img data-srcset=\""+SERVER_IMAGE_MNG+""+tmDcPreList[i].tmDcImg1Url+"?RS=670X710\" data-original=\""+SERVER_IMAGE_MNG+""+tmDcPreList[i].tmDcImg1Url+"?RS=670X710\" alt=\"\" class=\"lazy swiper-lazy\" src='"+SERVER_IMAGE+"/images/M_KO/common/noimg.png?RS=500X500' onerror=\"this.onerror=null; this.src='"+SERVER_IMAGE+"/images/M_KO/common/noimg.png?RS=670X480';\">";
                        html+="</div>";
                        html+="<div class=\"timer\">";
                        html+="<p class=\"txt_coming\">COMING SOON</p>";
                        html+="<p class=\"txt_brand\">"+tmDcPreList[i].branNm+"</p>";
                        var dt = new Date(tmDcPreList[i].dcStDttm);
                        var hours = dt.getHours() <10 ? "0"+dt.getHours() : dt.getHours() ;
                        var minutes = dt.getMinutes() <10 ? "0"+dt.getMinutes() : dt.getMinutes() ;
                        html+="<p class=\"txt_times\"><span><fmt:formatDate value=\""+hours+" : "+minutes+"\" pattern=\"HH : mm\"/>"+hours+" : "+minutes+"</span></p>";
                        html+="<p class=\"txt_rest sale_timer2\"></p>";
                        html+="</div>";
                        html+="</a>";
                        html+="</li>";
                        count++;
                    }
                }

                html+="</ul>";
                html+="<div class=\"visual_bottom\">";
                html+="<div class=\"swiper-scrollbar\"></div>";
                html+="</div>";
                html+="</div>";
                $(".timeSaleMenu").html(html);
                HDFUINEW.timeSwiper();
                HDFUINEW.mianTimeSwiper();
                //타임세일 카운팅
                timeSaleCounting("1",data.tmDcSecond);
                //타임세일 예정 카운팅
                timeSaleCounting("2",data.tmDcPreSecond);
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){

        }
    });
}

//HDDFS 리뉴얼 프로젝트 [2021.07.27] - 장바구니 카운트 업데이트
function addCartCount(){

    $.ajax({
        async       : false,
        url         : ctx_curr + "/cm/comm/lnbInfo.json",
        dataType    : "json",
        type        : "POST",
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return; }

            var result =  data.cartCnt;
            if(result >= 99){
                result = "99+";
            }

            if($("#rwingCartCnt").length != 0){
                $("#rwingCartCnt").text(result).show();
            }

            appCartCount(result);
        },
        error       : function(jqXHR, textStatus, errorThrown){
        }
    });
}

//HDDFS 리뉴얼 프로젝트 [2021.08.13] - 장바구니 뒤로가기
function cartHistoryBack() {

    $("#cartCnt").val(0);
    $("#chkDpat").val(0);
    $("#chkPspt").val(0);
    $(".ui-datepicker").hide();
    $(".ui-dialog").hide();
    $('.ui-widget-overlay.ui-front').remove();
    $(".fullscreen_btm").removeClass("active");
    $(".fullscreen_third").removeClass("active");
}

function XSSCheck(str, level) {
    if (level == undefined || level == 0) {
        str = str.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");
    } else if (level != undefined && level == 1) {
        str = str.replace(/\</g, "&lt;");
        str = str.replace(/\>/g, "&gt;");
    }
    return str;
}

/**
 * HDDFS 리뉴얼 프로젝트 [최현웅 - 2021.08.26] -  toast 메세지 공통 처리 callback reload
 * @param openStat
 */
function commToastMsgReload(msg , type){
    $(".toast_message").html("<div class='"+type+"'>"+ msg.replace( /[\t\r\n ]{2,}|[\t\r\n]/g, '<br>' ) +"</div>");
    $(".toast_message > div ").css("zIndex","99999").fadeIn(400).delay(1000).fadeOut(400, function(){
        window.location.reload();
    });
}


function videoLayerOpen(_target){
    var video_ratio = $(_target).attr('video-ratio').split('-');
    var video_height = (video_ratio[1]/video_ratio[0])*100;
    var videoTarget = $(_target).attr("video-src");
    $('#layerPop .video_wrap').html("<iframe frameBorder=\"0\" name=\"iFrm\" scrolling=\"no\" src=\""+ctx_shop+"/dm/videoPreview.do?videoTarget="+videoTarget+"\" ></iframe>");

    $('#layerPop').addClass('active');

    var screen_ratio = ((($('.layer_container').width() * video_height)/100)/$(window).height())*100;

    if(screen_ratio > 75){//window 높이값의 75%이상이면 닫힘 padding 고정값
        $('#layerPop .video_wrap').css({paddingTop:(($(window).height()*75)/100)});
    } else {
        $('#layerPop .video_wrap').css({paddingTop:video_height+'%'});
    }
}

function callBridgeAppbar(flag){		//flag :   intro - 인트로버튼  home - 메인화면  search - 검색레이어  mypage - 마이현대
    if(appYn =="Y"){
        var uAgent = exApp.getAgent();
        if(uAgent == "android" || uAgent == "ios"){
            if(uAgent == "android"){
                if(flag =="intro"){
                    android.goIntro();
                }else if(flag =="home"){
                    android.goMallMain();
                }else if(flag =="search"){
                    android.goSearch();
                }else if(flag =="mypage"){
                    android.goMyPage();
                }
            }else if(uAgent == "ios"){
                if(flag =="intro"){
                    var appUrl = 'goIntro://';
                    location.href = appUrl;
                }else if(flag =="home"){
                    var appUrl = 'goMallMain://';
                    location.href = appUrl;
                }else if(flag =="search"){
                    var appUrl = 'goSearch://';
                    location.href = appUrl;
                }else if(flag =="mypage"){
                    var appUrl = 'goMyPage://';
                    location.href = appUrl;
                }
            }
        }
    }
}

function hShareListMake(){
    $.ajax({
        async       : true,
        url           : ctx_shop+"/dm/main/mainHShareList.json",
        dataType    : "json",
        type        : "POST",
        success     : function(data, textStatus, jqXHR){
            var hShareList = data.hShareList;
            var adtAucaYn = data.adtAucaYn;
            var html = "";

            if(hShareList.length < 1 && hShareList.length < 1){
                $(".h-share").remove();
            }else{
                html+="<div class=\"box-tit\">";
                html+="	<h3 class=\"tit--color-dark\">H.SHARE 뭉치면 싸진다!</h3>";
                html+="</div>";
                html+="<div class=\"wrap-swiper swiper__h-share\">";
                html+="	<div class=\"swiper-wrapper\" id=\"h-share-swiper\">";
                for(var i =0; i < hShareList.length; i++){
                    html+="<div class=\"swiper-slide\">";
        			if((hShareList[i].adultAucaNeedYn == 'Y' && adtAucaYn == 'Y') || (hShareList[i].adultAucaNeedYn != 'Y')){
            			html+="	<div class=\"product__item product__item--row\">";
            			html+="		<a href=\""+ctx_shop+"/gd/dtl/goos.do?onlnGoosCd="+hShareList[i].onlnGoosCd+"\" ";
        			}else{
            			html+="	<div class=\"product__item product__item--row type-sales--adult adult "+hShareList[i].onlnGoosCd+"\">";
            			html+="		<a href=\"javascript:\" onclick=\"openPopup('adult','detail',"+hShareList[i].onlnGoosCd+", "+hShareList[i].minBuyQty+");\"";
        			}
                    html+=" onclick='GA_fn_common(\"select_item\",\""+hShareList[i].onlnGoosCd+"\",\""+hShareList[i].goosNm+"\",\""+hShareList[i].branNm+"\",\""+hShareList[i].onlnBranCd;
                    html+="\",\""+hShareList[i].branGrpCd+"\",\""+hShareList[i].goosTypeCd+"\",\""+hShareList[i].goosHigpCdNm+"\",\""+hShareList[i].goosMlfCdNm+"\",\""+hShareList[i].goosLgrpCdNm;
                    html+="\",\""+hShareList[i].refNo+"\",undefined,\"홈_H.SHARE\")'>";
                    html+="			<p class=\"co-buying__remain\">";
                    var hShareEndDt = new Date(hShareList[i].hShareEndDttm).getTime();
                    var today = new Date().getTime();
                    var gap = hShareEndDt - today;
                    var day = (Math.ceil(gap / (1000 * 60 * 60* 24)))-1;
                    html+="				D-<span class=\"co-buying__remain-day\">"+day+"</span>";
                    html+="			</p>";
                    html+="			<div class=\"product__img\">";
                    html+="				<img src=\""+SERVER_IMAGE+"/images/M_KO/common/n/blank.svg\" data-src=\""+SERVER_IMAGE_MNG+""+hShareList[i].goosImgUrl+"?sf=webp&RS=400X400\" onerror=\"this.src='"+SERVER_IMAGE+"/images/M_KO/common/n/blank.svg'\" alt=\""+hShareList[i].goosNm+"\" >";
                    html+="			</div>";
                    html+="			<div class=\"product__info\">";
                    html+="				<p class=\"product__brand\">"+hShareList[i].branNm+"</p>";
                    html+="				<p class=\"product__brand-info\">"+hShareList[i].goosNm+"</p>";
                    html+="				<div class=\"product__sale-info\">";
                    html+="					<p class=\"product__tit-info\">최대 혜택가</p>";
                    html+="					<p class=\"product__price--origin type-1\">";
                    html+="						<span class=\"product__price--sale\">$"+comma(hShareList[i].lastDcPric)+"</span>";
                    html+="						<span class=\"product__price--won\"><span>"+comma(hShareList[i].goosDcPriceXmny)+"</span>원</span>";
                    html+="						<span class=\"product__per\"><span class=\"product__per--num\">~"+hShareList[i].maxDcRate+"</span>%</span>";
                    html+="					</p>";
                    html+="				</div>";
                    html+="				<div class=\"product__co-buying\">";
                    html+="					<p><span class=\"co-buying__current\">"+hShareList[i].pectCnt+"</span> / <span class=\"co-buying__max\">"+hShareList[i].maxTargPect+"명</span></p>";
                    html+="					<span class=\"co-buying__bar\"></span>";
                    html+="				</div>";
                    html+="			</div>";
                    html+="		</a>";
                    html+="	</div>";
                    html+="</div>";
                }
                html+="	</div>";
                if(hShareList.length % 2 == 1){
                    html+="	<p class=\"product-more-link\"><a href=\""+ctx_shop+"/op/sale/saleShop.do\">더 많은 특가 상품이 궁금하다면? <span class=\"product-more-link__txt\">특가 상품 더 보기</span></a></p>";
                }
                if(hShareList.length > 2){
                    html+="	<div class=\"swiper-pagination\"></div>";
                }
                html+="</div>";
                $(".h-share").html(html);

                //HDFUINEW.HshareSwiper();
            }

        },
        complete: function(){
            // main h share
            document.querySelector('.swiper__h-share') && setSwiperAutoplay({target: '.swiper__h-share', gap: 8, pagination: '.swiper-pagination', grid: {rows: 2}, autoplay: 5000, breakPoint: {
                    600: {
                        slidesPerView: 2,
                    },
                }});
            // h.share 그래프
            document.querySelector('.product__co-buying') && setShareGraph('.product__co-buying');
            // h.share 더보기 버튼 처리
            document.querySelector('.swiper__h-share') && setShareMore('.swiper__h-share');
        },
        error       : function(jqXHR, textStatus, errorThrown){

        }
    });
}

//메인 오늘의특가 AJAX
function todaySpPricMake(){

    $.ajax({
        async       : true,
        url           : ctx_shop+"/dm/main/mainLckd.json",
        dataType    : "json",
        type        : "POST",
        success     : function(data, textStatus, jqXHR){
            var list = data.lckd;
            var adtAucaYn = data.adtAucaYn;
            var adtClass = "";
            var html = "";
            if(list != null){
                if(list.goosList.length <1 ){

                }else{
                    $("#tab__special-price--1").show();
                    //$("#special-price--1").show();
                    html+="		<ul class=\"list-product swiper-wrapper\" id=\"today-sale-product\">";
                    for(var i=0; i<list.goosList.length; i++){
                        if((list.goosList[i].adultAucaNeedYn == 'Y' && adtAucaYn == 'Y') || (list.goosList[i].adultAucaNeedYn != 'Y')){
                            adtClass = "";
                            html+="<li class=\"swiper-slide "+list.goosList[i].onlnGoosCd+"\">";
                        }else{
                            adtClass = " type-sales--adult";
                            html+="<li class=\"swiper-slide "+list.goosList[i].onlnGoosCd+" adult\">";
                        }
                        /*if(list.goosList[i].stocOnln < 1 || list.goosList[i].goosStatCd =="2" ){
                            html+="	<div class=\"product__item type-sales--restock type-color-black"+adtClass+"\">";
                        }else{
                            
                        }*/
                        html+="	<div class=\"product__item type-color-black"+adtClass+"\">";
                        /*if (list.goosList[i].stocOnln < 1 || list.goosList[i].goosStatCd =="2" ){
                            html+="<a nohref onclick=\"addAginRecpNtc('"+list.goosList[i].onlnGoosCd+"');\" >";
                        }else*/
                        if((list.goosList[i].adultAucaNeedYn == 'Y' && adtAucaYn == 'Y') || (list.goosList[i].adultAucaNeedYn != 'Y')){
                            html+="<a href=\""+ctx_shop+"/gd/dtl/goos.do?onlnGoosCd="+list.goosList[i].onlnGoosCd+"\" ";
                            html+=" onclick='GA_fn_common(\"select_item\",\""+list.goosList[i].onlnGoosCd+"\",\""+list.goosList[i].goosNm+"\",\""+list.goosList[i].branNm+"\",\""+list.goosList[i].onlnBranCd;
                            html+="\",\""+list.goosList[i].branGrpCd+"\",\""+list.goosList[i].goosTypeCd+"\",\""+list.goosList[i].goosHigpCdNm+"\",\""+list.goosList[i].goosMlfCdNm+"\",\""+list.goosList[i].goosLgrpCdNm;
                            html+="\",\""+list.goosList[i].refNo+"\",undefined,\"홈_오늘의특가\")'>";
                        }else{
                            html+="<a nohref onclick=\"openPopup('adult','detail','"+list.goosList[i].onlnGoosCd+"','');\" >";
                        }
                        if(list.goosList[i].dcRate !="" && Number(list.goosList[i].dcRate) > 0){
                            html+="		<p class=\"product__sale-mount\">";
                            html+="			<span>"+parseInt(list.goosList[i].dcRate)+"</span>%";
                            html+="		</p>";
                        }
                        html+="			<div class=\"product__img\">";
                        html+="				<img src=\""+SERVER_IMAGE_MNG+""+list.goosList[i].goosImgUrl+"?sf=webp&RS=400X400\" alt=\""+list.goosList[i].goosNm+"\">";
                        if(list.goosList[i].stocOnln < 1 || list.goosList[i].goosStatCd =="2" ){
                            html+="<button onclick=\"javascript:event.preventDefault(); event.stopPropagation(); addAginRecpNtc('"+list.goosList[i].onlnGoosCd+"')\" class=\"no_stoc\">재입고알림</button>";
                        }
                        html+="			</div>";
                        html+="			<div class=\"product__info\">";
                        html+="				<p class=\"product__brand\">"+list.goosList[i].branNm+"</p>";
                        if(list.goosList[i].mdKwrdWrd !="" && list.goosList[i].mdKwrdWrd !=null){
                            html+="<p class=\"product___md-key\"><span>" + list.goosList[i].mdKwrdWrd + "</span></p>";
                        }
                        html+="				<p class=\"product__brand-info\">"+list.goosList[i].goosNm+"</p>";
                        html+="             <div class=\"product__sale-info\">";
                        html+="				<div class=\"product__price--origin\">";
                        html+="					<div class=\"product__price\">$"+comma(list.goosList[i].pricOnln)+"</div>";
                        html+="					<div class=\"product__price--sale\">$"+comma(list.goosList[i].lastDcPric)+"</div>";
                        html+="				</div>";
                        html+="				<div class=\"product__price--won\">";
                        html+="					<span>"+comma(list.goosList[i].lastDcPricNtnl)+"원</span>";
                        html+="				</div>";
                        html+="         	</div>";
                        html+="			</div>";
                        html+="		</a>";
                        html+="	</div>";
                        html+="</li>";
                    }
                    html+="		</ul>";

                    $("#special-price--1").html(html);
                    $("#special-price--1").addClass("is-active");
                    $("#tab__special-price--1").closest("li").addClass("is-active");
                    //HDFUINEW.luckySwiper();

                }
            }else{
                $("#tab__special-price--1").closest("li").remove();
                $("#special-price--1").remove();
            }




            $.ajax({
                async       : true,
                url           : ctx_shop+"/dm/main/tmSaleList.json",
                dataType    : "json",
                type        : "POST",
                success     : function(data, textStatus, jqXHR){
                    var tmDcList = data.tmDcList;
                    var tmDcPreList = data.tmDcPreList;
                    var html = "";
                    var count = 0;
                    if(tmDcList.length < 1 && tmDcPreList.length < 1){
                        $("#tab__special-price--2").closest("li").remove();
                        $("#special-price--2").remove();
                    }else{
                        $("#tab__special-price--2").show();
                        //$("#special-price--2").show();
                        html+="	<ul class=\"list-product swiper-wrapper\" id=\"today-sale-brand\">";
                        for(var i =0; i < tmDcList.length; i++){
                            if(count < 24){
                                var dt = new Date(tmDcList[i].dcEndDttm);
                                var year = dt.getFullYear();
                                var month = Number(dt.getMonth()+1)<10 ? "0"+Number(dt.getMonth()+1) : Number(dt.getMonth()+1) ;
                                var date = dt.getDate()<10 ? "0"+dt.getDate() : dt.getDate() ;
                                var hours = dt.getHours() <10 ? "0"+dt.getHours() : dt.getHours() ;
                                var minutes = dt.getMinutes() <10 ? "0"+dt.getMinutes() : dt.getMinutes() ;
                                var seconds = dt.getSeconds() <10 ? "0"+dt.getSeconds() : dt.getSeconds() ;
                                html+="<li class=\"swiper-slide\">";
                                if(tmDcList[i].imgBright != null && tmDcList[i].imgBright > 500){
                                    html+="	<div class=\"product__item product__item--brand type-color-black\">";
                                }else{
                                    html+="	<div class=\"product__item product__item--brand\">";
                                }
                                html+="		<a href=\""+ctx_shop+"/dm/bran/brand.do?onlnBranCd="+tmDcList[i].onlnBranCd+"\">";
                                html+="			<p class=\"product__sale-mount\">";
                                html+="				<span>"+tmDcList[i].dcRate+"</span>%";
                                html+="			</p>";
                                html+="			<div class=\"product__img\">";
                                html+="				<img src=\""+SERVER_IMAGE_MNG+""+tmDcList[i].tmDcImg1Url+"?sf=webp&RS=326X568\" alt=\""+tmDcList[i].branNm+"\">";
                                html+="				<span class=\"product__img--logo\">";
                                html+="					<img src=\""+SERVER_IMAGE_MNG+""+tmDcList[i].branLogoImgUrl+"?sf=webp&RS=286X96\" alt=\""+tmDcList[i].branNm+"\">";
                                html+="				</span>";
                                html+="			</div>";
                                html+="			<p class=\"product__remain\">";
                                html+="				<span class=\"product__remain--time\">"+year+"/"+month+"/"+date+" "+hours+":"+minutes+":"+seconds+"</span>";
                                html+="			</p>";
                                html+="		</a>";
                                html+="	</div>";
                                html+="</li>";
                            }
                        }
                        for(var i =0; i < tmDcPreList.length; i++){
                            if(count < 24){
                                html+="<li class=\"swiper-slide\">";
                                if(tmDcPreList[i].imgBright != null && tmDcPreList[i].imgBright > 500){
                                    html+="	<div class=\"product__item product__item--brand type-coming-soon type-color-black\">";
                                }else{
                                    html+="	<div class=\"product__item product__item--brand type-coming-soon\">";
                                }
                                html+="		<a href=\""+ctx_shop+"/dm/bran/brand.do?onlnBranCd="+tmDcPreList[i].onlnBranCd+"\">";
                                html+="			<div class=\"product__img\">";
                                html+="				<img src=\""+SERVER_IMAGE_MNG+""+tmDcPreList[i].tmDcImg1Url+"?sf=webp&RS=326X568\" alt=\""+tmDcPreList[i].branNm+"\" >";
                                html+="				<span class=\"product__img--logo\">";
                                html+="					<img src=\""+SERVER_IMAGE_MNG+""+tmDcPreList[i].branLogoImgUrl+"?sf=webp&RS=286X96\" alt=\""+tmDcPreList[i].branNm+"\" >";
                                html+="				</span>";
                                html+="			</div>";
                                html+="			<p class=\"product__remain type-coming-soon\">Coming Soon</p>";
                                var dt = new Date(tmDcPreList[i].dcStDttm);
                                var hours = dt.getHours() <10 ? "0"+dt.getHours() : dt.getHours() ;
                                var minutes = dt.getMinutes() <10 ? "0"+dt.getMinutes() : dt.getMinutes() ;
                                html+="			<p class=\"product__remain\">";
                                html+="				<fmt:formatDate value=\""+hours+" : "+minutes+"\" pattern=\"HH : mm\"/>"+hours+" : "+minutes+"";
                                html+="			</p>";
                                html+="		</a>";
                                html+="	</div>";
                                html+="</li>";
                            }
                        }
                        html+="	</ul>";

                        $("#special-price--2").html(html);
                        if($(".tab-special-price li").length == 1){
                            $("#special-price--2").addClass("is-active");
                            $("#tab__special-price--2").closest("li").addClass("is-active");
                        }
                        //HDFUINEW.timeSwiper();
                        //HDFUINEW.mianTimeSwiper();
                        //타임세일 카운팅
                        //timeSaleCounting("1",data.tmDcSecond);
                        //타임세일 예정 카운팅
                        //timeSaleCounting("2",data.tmDcPreSecond);
                        var TimeSale = document.querySelectorAll(".product__remain--time");
                        TimeSale.forEach(function(timer){
                            var countDownDate = new Date(timer.innerText).getTime();
                            var x = setInterval(function() {
                                var now = new Date().getTime();
                                var distance = countDownDate - now;
                                var h = Math.floor(distance / (1000 * 60 * 60));
                                var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                var s = Math.floor((distance % (1000 * 60)) / 1000);
                                if(h < 10){
                                    h = "0"+h;
                                }
                                if(m < 10){
                                    m = "0"+m;
                                }
                                if(s < 10){
                                    s = "0"+s;
                                }
                                timer.innerHTML = "<span class=\"hours\">"+h+"</span><span>:</span><span class=\"minutes\">"+m+"</span><span>:</span><span class=\"seconds\">"+s+"</span>";
                                if (distance < 0) {
                                    clearInterval(x);
                                    timer.innerHTML = "EXPIRED";
                                }
                            }, 1000);
                        });

                    }
                },
                complete: function(){
                    if($('.special-price .tab-content ul').length > 0){
                        document.querySelector('.special-price .tab-content') && setObserverFunc('.special-price', tabSwiper('.special-price'));
                    }else{
                        $(".special-price").hide();
                    }

                },
                error       : function(jqXHR, textStatus, errorThrown){

                }
            });
        },
        error       : function(jqXHR, textStatus, errorThrown){

        }
    });

}

/**
 * 22.06 고유식별정보 수집동의 팝업 보기/닫기, 22.10 수정
 */
/*function showUnqIdtInfoTermsPop(flag){
    if(flag == "open" && $('#psptRcvYn').val() == "N"){
        $('#psptRcvYn').val('N');
        $('.input_passport').blur();
        $("#unqIdtInfoTermsPop").dialog('open');
    }else if(flag == "check"){
        $('#psptRcvYn').val('Y');
        $('#unqIdtInfoTermsPop').dialog('close');
    }else{
        $('#unqIdtInfoTermsPop').dialog('close');
    }
}*/
function showUnqIdtInfoTermsPop(flag){
    if(flag == "open"){
        $("#unqIdtInfoTermsPop").dialog('open');
    }else if(flag == "agree"){
        if(!$('input.uniqeChk').is(":checked")){
            $('input.uniqeChk').prop('checked',true);
            $('input.uniqeChk').change();
            $('.input_passport input, input.input_passport').prop("disabled", false);
            $('.form_box.input_passport .datepicker').datepicker('option','disabled',false);
        }
        if($(".join_form.input_passport").length > 0 || $(".info_table.input_passport").length > 0){
            $('.input_passport input, input.input_passport').prop("disabled", false);
            $('.form_box.input_passport .datepicker').datepicker('option','disabled',false);
        }
        $('#psptRcvYn').val('Y');
        $('#unqIdtInfoTermsPop').dialog('close');
    }else if(flag == "disagree"){
        if($('input.uniqeChk').is(":checked")){
            $('input.uniqeChk').prop('checked',false);
            $('input.uniqeChk').change();
        }
        if(location.href.indexOf("myInfo/mbshPsptMnge.do")!=-1){
            $('input.input_passport').val('');
            $('input.input_passport').prop("disabled", true);
        }
        $('.input_passport input').val('');
        $('.input_passport input').prop("disabled", true);
        $('.form_box.input_passport .datepicker').datepicker('option','disabled',true);

        $('#psptRcvYn').val('N');
        $('#unqIdtInfoTermsPop').dialog('close');
    }else{
        $('#unqIdtInfoTermsPop').dialog('close');
    }
}
function uniqAgree(){
    if($('input.uniqeChk').is(":checked")){
        $('#psptRcvYn').val('Y');
        $('.input_passport input, input.input_passport').prop("disabled", false);
        $('.form_box.input_passport .datepicker').datepicker('option','disabled',false);
    } else {
        $('#psptRcvYn').val('N');
        if(location.href.indexOf("myInfo/mbshPsptMnge.do")!=-1){
            $('input.input_passport').val('');
            $('input.input_passport').prop("disabled", true);
        }
        $('.input_passport input').val('');
        $('.input_passport input').prop("disabled", true);
        $('.form_box.input_passport .datepicker').datepicker('option','disabled',true);
    }
}
$( function() {
    $('.form_box.input_passport .datepicker').datepicker('option','disabled',true);
});

/**
 * 여권정보 형식 validation
 */
function validationDataForPassport(natiCd){
    var psptNo = $('#psptNo').val();
    var returnValue = false;
    var data = { psptNo : psptNo, natiCd : natiCd }
    $.ajax({
        async       : true,
        url         : ctx_curr + "/mm/myInfo/checkValidPsptNo.json",
        dataType    : "json",
        type        : "POST",
        data        : data,
        async       : false,
        success     : function(data, textStatus, jqXHR){
            if(!crew.ajaxValidate(data)){ return false; }
            if(data.resultCode == 1){
                returnValue = true;
            }
        },
        error       : function(jqXHR, textStatus, errorThrown){
            returnValue = false;
        }
    });
    return returnValue;
}

//GA4 함수 생성
function GA_fn_common(EStep, onlnGoosCd, goosNm, branNm, onlnBranCd, branGrpCd, goosTypeCd, goosHigpCdNm, goosMlfCdNm, goosLgrpCdNm, refNo, quantity, section, virtualYn
    ,price,coupon,discount,transaction_id,value,tax,eventCoupon,paymentType,epOrder,cmOrder){
    let itemArray = [];
    let actionList = {};
    let ecommerceHit = {};

    if(typeof onlnGoosCd == "object"){
        for(var i = 0; i < onlnGoosCd.length;i++){

            if(goosTypeCd!=undefined){
                if(goosTypeCd[i]=="1"){
                    goosTypeCd[i] = "수입";
                }else if(goosTypeCd[i]=="5"){
                    goosTypeCd[i] = "국산";
                }
            }

            if(branGrpCd!=undefined){
                if(branGrpCd[i]=="01"){
                    branGrpCd[i] = "C&P";
                }else if(branGrpCd[i]=="02"){
                    branGrpCd[i] = "LF";
                }else if(branGrpCd[i]=="03"){
                    branGrpCd[i] = "W&J";
                }else if(branGrpCd[i]=="04"){
                    branGrpCd[i] = "F&A";
                }else if(branGrpCd[i]=="05"){
                    branGrpCd[i] = "S&F";
                }else if(branGrpCd[i]=="06"){
                    branGrpCd[i] = "L&T";
                }
            }

            var currency = "USD";
            if(EStep == "select_item" || EStep == "refund"){
                currency = undefined;
            }

            itemArray.push(
                {
                    item_id:""+onlnGoosCd[i],
                    item_name:goosNm==undefined?undefined:goosNm[i],
                    item_brand:onlnBranCd==undefined||branNm==undefined?undefined:onlnBranCd[i]+"_"+branNm[i],
                    item_category:goosTypeCd==undefined?undefined:goosTypeCd[i],
                    item_category2:branGrpCd==undefined?undefined:branGrpCd[i],
                    item_category3:goosHigpCdNm==undefined?undefined:goosHigpCdNm[i],
                    item_category4:goosMlfCdNm==undefined?undefined:goosMlfCdNm[i],
                    item_category5:goosLgrpCdNm==undefined?undefined:goosLgrpCdNm[i],
                    item_variant:refNo==undefined?undefined:""+refNo[i],
                    currency:currency,
                    quantity:quantity==undefined?undefined:""+quantity[i],
                    price:price==undefined?undefined:""+price[i],
                    coupon:coupon==undefined?undefined:coupon[i],
                    discount:discount==undefined?undefined:""+discount[i],
                }
            );
        }
    }else{

        if(goosTypeCd=="1"){
            goosTypeCd = "수입";
        }else if(goosTypeCd=="5"){
            goosTypeCd = "국산";
        }

        if(branGrpCd=="01"){
            branGrpCd = "C&P";
        }else if(branGrpCd=="02"){
            branGrpCd = "LF";
        }else if(branGrpCd=="03"){
            branGrpCd = "W&J";
        }else if(branGrpCd=="04"){
            branGrpCd = "F&A";
        }else if(branGrpCd=="05"){
            branGrpCd = "S&F";
        }else if(branGrpCd=="06"){
            branGrpCd = "L&T";
        }

        var itemListName = undefined;
        if(EStep == "select_item"){
            itemListName = section;
        }

        var currency = "USD";
        if(EStep == "select_item" || EStep == "refund"){
            currency = undefined;
        }

        itemArray.push(
            {
                item_id:""+onlnGoosCd,
                item_name:goosNm==undefined?undefined:goosNm,
                item_brand:onlnBranCd==undefined||branNm==undefined?undefined:onlnBranCd+"_"+branNm,
                item_category:goosTypeCd==undefined?undefined:goosTypeCd,
                item_category2:branGrpCd==undefined?undefined:branGrpCd,
                item_category3:goosHigpCdNm==undefined?undefined:goosHigpCdNm,
                item_category4:goosMlfCdNm==undefined?undefined:goosMlfCdNm,
                item_category5:goosLgrpCdNm==undefined?undefined:goosLgrpCdNm,
                item_variant:refNo==undefined?undefined:""+refNo,
                item_list_name:itemListName,
                currency:currency,
                quantity: quantity==undefined?undefined:""+quantity,
                price:price==undefined?undefined:""+price,
                coupon:coupon==undefined?undefined:coupon,
                discount:discount==undefined?undefined:""+discount,
            }
        );
    }

    if(EStep != "select_item"){
        actionList.currency = "USD";
    }

    actionList.transaction_id = transaction_id;
    actionList.value = value;
    actionList.tax = tax;
    actionList.coupon = eventCoupon;
    actionList.payment_type = paymentType;

    if(section != '' && section != undefined){
        ecommerceHit.ep_ecommerce_section = EStep+">"+section;
    }
    if(epOrder != '' && epOrder != undefined){
        ecommerceHit.ep_order_departureDate=epOrder.departureDate;
        ecommerceHit.ep_order_depaturePlace=epOrder.depaturePlace;
        ecommerceHit.ep_order_destination=epOrder.destination;
        ecommerceHit.ep_order_giveaway=epOrder.giveaway;
    }
    if(cmOrder != '' && cmOrder != undefined){
        ecommerceHit.cm_order_totalAmount=cmOrder.totalAmount;
        ecommerceHit.cm_order_totalDiscount=cmOrder.totalDiscount;
        ecommerceHit.cm_order_CMDiscount=cmOrder.CMDiscount;
        ecommerceHit.cm_order_couponDiscount=cmOrder.couponDiscount;
        ecommerceHit.cm_order_affiliateDiscount=cmOrder.affiliateDiscount;
        ecommerceHit.cm_order_affiliateCertifiDiscount=cmOrder.affiliateCertifiDiscount;
        ecommerceHit.cm_order_welfarePointUsed=cmOrder.welfarePointUsed;
        ecommerceHit.cm_order_mileageUsed=cmOrder.mileageUsed;
        ecommerceHit.cm_order_mileagetUsed=cmOrder.mileagetUsed;
        ecommerceHit.cm_order_eventplusmileageUsed=cmOrder.eventplusmileageUsed;
        ecommerceHit.cm_order_paymentMethodDiscount=cmOrder.paymentMethodDiscount;
        ecommerceHit.cm_order_hpointReserve=cmOrder.hpointReserve;
        ecommerceHit.cm_order_hpointUsed=cmOrder.hpointUsed;
        ecommerceHit.cm_order_hpointpluspointUsed=cmOrder.hpointpluspointUsed;
        ecommerceHit.cm_order_brandplusmileageUsed=cmOrder.brandplusmileageUsed;
        ecommerceHit.cm_order_partnerplusmileageUsed=cmOrder.partnerplusmileageUsed;
        ecommerceHit.cm_order_paymentplusmileageUsed=cmOrder.paymentplusmileageUsed;
        ecommerceHit.cm_order_cashpointsUsed=cmOrder.cashpointsUsed;
        ecommerceHit.cm_order_prepaidUsed=cmOrder.prepaidUsed;
        ecommerceHit.cm_order_giftcardcashpointsUsed=cmOrder.giftcardcashpointsUsed;
        ecommerceHit.cm_order_KRWvalue=cmOrder.KRWvalue;
    }

    console.log(EStep , itemArray, actionList,ecommerceHit, virtualYn);
    if(virtualYn == "Y"){
        GA_Ecommerce(EStep , itemArray, actionList,ecommerceHit,'virtual');
    }else{
        GA_Ecommerce(EStep , itemArray, actionList,ecommerceHit);
    }
}

function select_item_groobee_tracking(el, section, algorithmCd, campaignKey, campaignTypeCd){
    if(section == "홈_THEFRONTROW"){
        var data = $(el).closest("div");
        GA_fn_common("select_item", data.data("gooscd"), data.data("goosnm"), data.data("brannm"), data.data("onlnbrancd"), data.data("brangrpcd"), data.data("goostypecd"), data.data("gooshigpcdnm"), data.data("goosmlfcdnm"), data.data("gooslgrpcdnm"), data.data("refno"), undefined, section);
    }else{
        var data = $(el).closest("li");
        GA_fn_common("select_item", data.data("gooscd"), data.data("goosnm"), data.data("brannm"), data.data("onlnbrancd"), data.data("brangrpcd"), data.data("goostypecd"), data.data("gooshigpcdnm"), data.data("goosmlfcdnm"), data.data("gooslgrpcdnm"), data.data("refno"), undefined, section);

        /*Groobee 측에 클릭 상품 전달*/
        var groobeeObj;
        var groobeeArray = [];

        var obj = {goodsCd: data.data("gooscd") };
        groobeeArray.push(obj);

        groobeeObj = {
            algorithmCd : algorithmCd,
            campaignKey : campaignKey,
            campaignTypeCd : campaignTypeCd,
            goods : groobeeArray
        }

        groobee.send("CL", groobeeObj);
    }
}

function select_item(el, section){
    if(section == "lgBran"){
        var data = $(el).closest("div.luxury_col_half").find(".image--basic");
        GA_fn_common("select_item", data.data("onlngooscd"), data.data("goosnm"), data.data("brannm"), data.data("onlnbrancd"), data.data("brangrpcd"), data.data("goostypecd"), data.data("gooshigpcdnm"), data.data("goosmlfcdnm"), data.data("gooslgrpcdnm"), data.data("refno"), undefined, "명품관_"+data.data("onlnbrancd"));
    }else if(section == "lgBranMain"){
        var data = $(el).closest("div.prod_full_container").find(".pord_select_section");
        GA_fn_common("select_item", data.data("onlngooscd"), data.data("goosnm"), data.data("brannm"), data.data("onlnbrancd"), data.data("brangrpcd"), data.data("goostypecd"), data.data("gooshigpcdnm"), data.data("goosmlfcdnm"), data.data("gooslgrpcdnm"), data.data("refno"), undefined, "명품관_"+data.data("onlnbrancd"));
    }else if(section == "상품상세" || section.substr(0,3) == "명품관" || section == "홈_THEFRONTROW"){
        var data = $(el).closest("div");
        GA_fn_common("select_item", data.data("gooscd"), data.data("goosnm"), data.data("brannm"), data.data("onlnbrancd"), data.data("brangrpcd"), data.data("goostypecd"), data.data("gooshigpcdnm"), data.data("goosmlfcdnm"), data.data("gooslgrpcdnm"), data.data("refno"), undefined, section);
    }else{
        var data = $(el).closest("li");
        GA_fn_common("select_item", data.data("gooscd"), data.data("goosnm"), data.data("brannm"), data.data("onlnbrancd"), data.data("brangrpcd"), data.data("goostypecd"), data.data("gooshigpcdnm"), data.data("goosmlfcdnm"), data.data("gooslgrpcdnm"), data.data("refno"), undefined, section);
    }
}

// 2023 개선
window.addEventListener('load', () => {
    // mobile set
    // window.innerWidth < 780 && document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    // img lazy load
    imgLazyLoad(['img[data-src]', 'video']); // 20230620 수정
    // tab
    document.querySelector('[role=tablist]') && setTab();
    // accordion
    document.querySelector('[role=tablist]') && setAccordion();
    // gnb swiper
    document.querySelector('.area-gnb.box') && menuSwipe({base: document.querySelector('.area-gnb'), target: document.querySelector('.fullscreen_basic'), checkBody: true}); // 20230602 수정
    // hamburger 언어 선택
    document.querySelector('.language-choice') && choiceLanguage();
    // hagburger showroom swiper 모바일용 20230623 수정
    document.querySelector('.swiper__gnb-showroom') && !document.querySelector('.swiper__gnb-showroom.type-pc') && setSwiper({target: '.swiper__gnb-showroom', scrollBar: '.swiper__gnb-showroom .swiper-scrollbar', gap: 8, viewNum: 2});
    // hagburger showroom swiper pc용
    document.querySelector('.swiper__gnb-showroom') && document.querySelector('.swiper__gnb-showroom.type-pc') && setSwiper({target: '.swiper__gnb-showroom', gap: 8,viewNum: 1, navigation: true, pagination: '.swiper-pagination', paginationType: 'fraction'});
    // hamburger 닫기
    document.querySelector('.fullscreen_basic') && closeHamburger();
    // top 버튼 20230517 추가
    document.querySelector('.btn-move-top') && setTopBtn(document.querySelector('.btn-move-top'));
    // 2024-07-01 온/오프라인 정보 통합(지점안내 버튼 추가)
    document.querySelector('.btn-goto-store') && setTopBtn(document.querySelector('.btn-goto-store'));
    // 쇼핑혜택 이미지 색 확인 20230631 삭제
    // pc 햄버거 열기 20230614 추가
    document.querySelector('.wrap-gnb-logo .btn_gnb') && document.querySelector('.wrap-gnb-logo .btn_gnb').addEventListener('click', e => {
        loadCtgList();
    });
});
// hamburger 닫기
function closeHamburger() {
    const btn = document.querySelector('.fullscreen_basic .ui-close');
    btn.addEventListener('click', (e) => {
        document.body.classList.contains('is-dimmed') && document.body.classList.remove('is-dimmed');
        document.querySelector('.fullscreen_basic').classList.contains('active') && document.querySelector('.fullscreen_basic').classList.remove('active')
    })
}
// swiper 20230607 수정
function setSwiper(type) {
    const {target, viewNum, gap, pagination, grid, offset, paginationType, effect, loop, autoplay, scrollBar, breakPoint, navigation, direction, slidesPerGroup} = type;
    const _offset = offset ? offset : 0;
    const _type = paginationType ? paginationType : "bullets";
    const _option = {
        preloadImages: false,
        observer: true,
        observeParents: true,
        slidesPerView: viewNum ? viewNum : 1,
        spaceBetween: gap ? gap : 0,
        slidesOffsetAfter: _offset,
    }
    if (grid) {
        _option.grid = grid;
    }
    if (loop) {
        _option.loop = loop;
    }
    if (effect) {
        _option.effect = 'coverflow';
    }
    if (pagination) {
        _option.pagination = {
            el: typeof target === 'string' ? `${target} ${pagination}` : target.querySelector(pagination),
            clickable: true,
            type: _type,
        }
    }
    if (scrollBar) {
        _option.scrollbar = {el: scrollBar, draggable: true}
    }
    if (autoplay) {
        _option.autoplay = {
            delay: autoplay,
            disableOnInteraction: false,
        }
    }
    if (breakPoint) {
        _option.breakpoints = breakPoint;
    }
    if (navigation) {
        _option.navigation = {
            nextEl: typeof target === 'string' ? `${target} .swiper-button-next` : target.querySelector('.swiper-button-next'),
            prevEl:  typeof target === 'string' ? `${target} .swiper-button-prev` : target.querySelector('.swiper-button-prev')
        };
    }
    if (direction) {
        _option.direction = direction;
    }
    if (slidesPerGroup) {
        _option.slidesPerGroup = slidesPerGroup;
    }
    const _swiper = new Swiper(target, _option);
    // 20230620 추가
    _swiper.on('transitionStart', function() {
        const _cur = _swiper.slides[_swiper.realIndex];
        _cur && _cur.querySelector('img') && Array.prototype.forEach.call(_cur.querySelectorAll('img'), img => {
            !img.classList.contains('is-loaded') && imgLoadData(img);
        });
    });
    // //20230620 추가
    return _swiper;
}
// 20230630 수정
function imgLoadData(img) {
    if (!img.dataset.src || img.classList.contains('is-loaded')) {
        return;
    }
    const _src = img.dataset.src;
    img.src = _src;
    img.classList.add('is-loaded');
}
// observe 20230621 수정
function setOpserve({target, func, end}) {
    const options = {
        threshold: 0
    }
    const _target = document.querySelectorAll(target);
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            const {target} = entry;
            if (entry.isIntersecting) {
                func && func({target, is: true});
                end && observer.unobserve(target);
            } else if (!end) {
                func && func({target, is: false})
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    Array.prototype.forEach.call(_target, el => {
        observer.observe(el);
    });
}
// img lazy load 20230513 수정
function imgLazyLoad(target) {
    const setElSrc = ({target, is}) => {
        const _type = target.nodeName === 'VIDEO';
        if (!target.classList.contains('is-loaded') && is && target.getAttribute('data-src')) {
            const _src = target.dataset.src; //20230620 수정
            target.src = _src;
            _type ? target.load() : target.classList.add('is-loaded');
        }
        if (_type) {
            is ? playVideoLazy({target, isPlay: true}) : playVideoLazy({target, isPlay: false});
        }
    }
    /* 20230513 수정 */
    !Array.isArray(target) ? setOpserve({target, func: setElSrc}) : target.forEach(el => {
        const _end = el.indexOf('video') !== 0;
        setOpserve({target: el, func: setElSrc, end: _end})
    });
    /* //20230513 수정 */
}
// video play
function playVideoLazy({target, isPlay}) {
    if (target.classList.contains('is-loaded')) {
        isPlay ? target.play() : target.pause();
    } else {
        target.addEventListener('loadeddata', () => {
            target.classList.add('is-loaded');
            isPlay ? target.play() : target.pause();
        });
    }
}
// gnb category mouseover
function setMouseEvt({wrap, target, cls, type}) {
    const _wraps = document.querySelectorAll(wrap);
    const searchCls = (_wrap, cls) => {
        const _els = _wrap.querySelectorAll(target);
        Array.prototype.forEach.call(_els, el => {
            const hasCls = type === 'parent' ? el.parentNode : el;
            hasCls.classList.contains(cls) && hasCls.classList.remove(cls);
        })
    }
    const setEvt = (_wrap) => {
        const _els = _wrap.querySelectorAll(target);
        Array.prototype.forEach.call(_els, el => {
            el.addEventListener('mouseenter', e => {
                searchCls(_wrap, cls);
                const isEl = type === 'parent' ? el.parentNode : el;
                isEl.classList.add(cls);
            });
        });
    }
    Array.prototype.forEach.call(_wraps, _wrap => {
        setEvt(_wrap);
    });
}
// tab
function setTab(el, type) {
    const tabWrap = el ? document.querySelectorAll(`${el} [role=tablist]`) : document.querySelectorAll('[role=tablist]');
    const choiceTab = ({event, tabList}) => {
        // 키보드 화살표 키
        if (event.keyCode !== undefined && event.keyCode === 37 || event.keyCode === 39) {
            const {keyCode} = event;
            setTabArrow({tabList, keyCode})
        } else {
            const {target} = event;
            !target.parentNode.classList.contains('is-active') && makeTab({target, tabList});
        }
    }
    const makeTab = ({target, tabList}) => {
        tabList.querySelector('[aria-selected=true]') && tabList.querySelector('[aria-selected=true]').setAttribute('tabindex', -1);
        tabList.querySelector('[aria-selected=true]') && tabList.querySelector('[aria-selected=true]').setAttribute('aria-selected', false);
        tabList.querySelector('.is-active') && tabList.querySelector('.is-active').classList.remove('is-active');
        target.setAttribute('tabindex', 0);
        target.setAttribute('aria-selected', true);
        target.parentNode.classList.add('is-active');
        target.focus();
        const _curId = target.getAttribute('aria-controls');
        let _id = _curId.split('-');
        if (_id.length < 3) {
            _id = _id[0];
        } else {
            _id.splice(_id.length - 1);
            _id = _id.join('-');
        }
        const _oldTabContent = document.querySelector(`[aria-labelledby^=${_id}].is-active`);
        const _curTabContent = document.querySelector(`[aria-labelledby=${_curId}]`);
        _oldTabContent && _oldTabContent.setAttribute('tabindex', -1);
        _oldTabContent && _oldTabContent.classList.remove('is-active');
        if (_curTabContent) {
            _curTabContent.setAttribute('tabindex', 0);
            _curTabContent.classList.add('is-active');
            _curTabContent.scrollLeft = 0;
            _curTabContent.scrollTop = 0;
        }
    }
    // 키보드 제어
    const setTabArrow = ({tabList, keyCode}) => {
        const _curTab = tabList.querySelector('[aria-selected=true]');
        const curIdx = Array.from(tabList.querySelectorAll('[role=tab]')).indexOf(tabList.querySelector('[aria-selected=true]'));
        const _total = tabList.children.length - 1;
        _curTab.parentNode.classList.contains('is-active') && _curTab.parentNode.setAttribute('tabindex', -1);
        _curTab.parentNode.classList.contains('is-active') && _curTab.parentNode.classList.remove('is-active');
        let _idx = keyCode === 37 ? curIdx - 1 : curIdx + 1;
        if (_idx > _total) {
            _idx = 0;
        } else if (_idx < 0) {
            _idx = _total;
        }
        makeTab({target: tabList.querySelectorAll('[role=tab]')[_idx],tabList});
    }
    Array.prototype.forEach.call(tabWrap, tabList => {
        if (!tabList.querySelectorAll('[role=tab]')) {
            return;
        }
        const btnTabs = tabList.querySelectorAll('[role=tab]');
        Array.prototype.forEach.call(btnTabs, tab => {
            tab.parentNode.classList.contains('is-active') ? tab.setAttribute('tabindex', 0) : tab.setAttribute('tabindex', -1);
            tab.addEventListener(type ? type : 'click', (event) => choiceTab({event, tabList}));
            tab.addEventListener('keyup', (event) => choiceTab({event, tabList}));
        });
    });
}
// slide down
function elSlideDown({base, target, btn, cls, is, execute, time}) {
    const _target = target || base;
    const _time = time || 300;
    if (execute) {
        _target.style.display = 'block';
        const _hgt = _target.clientHeight;
        _target.style.transition = 'height .3s ease-out';
        _target.style.height = 0;
        setTimeout(() => {
            _target.style.height = `${_hgt}px`;
            _target.style.display = 'block';
        }, 10);
        setTimeout(() => {
            base.classList.add(cls);
            btn.classList.remove(is);
            _target.style.height = 'auto';
        }, _time);
    } else {
        _target.style.height = `${_target.clientHeight}px`;
        _target.style.transition = 'height .3s ease-out';
        setTimeout(() => {
            _target.style.height = 0;
        }, 10);
        setTimeout(() => {
            _target.removeAttribute('style');
            base.classList.remove(cls);
            btn.classList.remove(is);
        }, _time);
    }
}
// 아코디언 컴포넌트
function setAccordion(el) {
    const accordionWrap = el ? document.querySelectorAll(`${el}[role=region]`) : document.querySelectorAll('[role=region]');
    const setContent = (opt) => {
        const {btn, type, content} = opt;
        if (btn.classList.contains('ing')) {
            return;
        }
        btn.classList.add('ing');
        if (!type) {
            btn.setAttribute('aria-expanded', true);
            elSlideDown({base: content, btn, cls: 'is-active', execute: true, is: 'ing'});

        } else {
            btn.setAttribute('aria-expanded', false);
            elSlideDown({base: content, btn, cls: 'is-active', execute: false, is: 'ing'});
        }
    }
    const actAccordion = (opt) => {
        const {target, content, type} = opt;
        const _is = JSON.parse(target.getAttribute('aria-expanded'));
        setContent({btn: target, type: _is, content})
    }
    const init = () => {
        Array.prototype.forEach.call(accordionWrap, accordion => {
            const _id = accordion.id;
            const _btn = document.querySelector(`[aria-controls=${_id}]`);
            if (_btn == null) return;
            _btn.addEventListener('click', (e) => {
                actAccordion({target: e.target, content: accordion})
            });
        });
    }
    init();
}
// 언어 선택
function setLanguage() {

}
// hamburger swiper
function menuSwipe({base, target, checkBody}) {
    const initialize = {
        firstX: 0,
        firstY: 0,
        isMove: false,
        moveLeft: 0,
        moveTop: 0,
    }
    const dragStart = () => {
        base.closest('.fullscreen_basic').addEventListener('mousedown', mouseDown) // 20230602 수정
        base.closest('.fullscreen_basic').addEventListener('touchstart', mouseDown) // 20230602 수정
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('touchmove', mouseMove)
        window.addEventListener('mouseup', mouseUp)
        window.addEventListener('touchend', mouseUp)
        document.addEventListener('mouseout', function(e) {
            mouseUp(e)
        });
    };
    const mouseDown = (event) => {
        if (initialize.isMove || base.scrollTop > 0) return;

        initialize.firstX = event.type !== 'mousedown' ? event.touches[0].screenX : event.pageX;
        initialize.firstY = event.type !== 'mousedown' ? event.touches[0].screenY : event.pageY;

        initialize.moveLeft = 0;
        initialize.moveTop = 0;
        initialize.isMove = true;
    };
    const mouseMove = (event) => {
        if (!initialize.isMove) return;

        const _moveX = event.type !== 'mousemove' ? event.touches[0].screenX : event.pageX;
        const _moveY = event.type !== 'mousemove' ? event.touches[0].screenY : event.pageY;

        initialize.moveLeft = initialize.firstX - _moveX;
        initialize.moveTop = initialize.firstY - _moveY;
    };
    const mouseUp = () => {
        if (!initialize.isMove) return;
        if (Math.abs(initialize.moveLeft) < Math.abs(initialize.moveTop) && base.scrollTop < 1 && Math.abs(initialize.moveTop) > 30) {
            target.classList.remove('active');
            checkBody && document.querySelector('html').getAttribute('style') && document.querySelector('html').removeAttribute('style')
            checkBody && document.querySelector('body').getAttribute('style') && document.querySelector('body').removeAttribute('style')
            document.body.classList.contains('is-dimmed') && document.body.classList.remove('is-dimmed');
        }
        initialize.isMove = false;
    };
    dragStart();
}
// hamburger 언어 선택 20230526 수정
function choiceLanguage() {
    const base = document.querySelector('.area-gnb');
    const wrap = base.querySelector('.language-choice');
    const btn = wrap.querySelector('.link-choice');
    const language = wrap.querySelector('.wrap-language') ? wrap.querySelector('.wrap-language') : wrap.querySelector('.list-language');
    const viewLanguage = (is) => {
        if (is) {
            elSlideDown({base: wrap, target: language, btn, cls: 'is-active', execute: false, is: 'ing'});
        } else {
            elSlideDown({base: wrap, target: language, btn, cls: 'is-active', execute: true, is: 'ing'});
        }
    }
    const init = () => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            viewLanguage(wrap.classList.contains('is-active'));
        });
        document.body.addEventListener('click', (e) => {
            if (!wrap.classList.contains('is-active')) {
                return;
            }
            viewLanguage(wrap.classList.contains('is-active'));
        })
    }
    init();
}
// tab scroll
function makeScrollLeftTab(params) {
    const {base, tabWrap, tab} = params;
    const _init = {
        base: document.querySelector(base),
        tabWrap: '',
        tabs: '',
        wrapWid: 0,
        elWid: 0,
        len: 0,
        pos: [],
        curNum: 0,
    };
    const makeUnitPos = (el) => {
        const _margin = el[1] ? parseInt(window.getComputedStyle(el[1]).getPropertyValue('margin-left')) : 0; // 20230612 수정
        return Array.prototype.reduce.call(el, (acc, unit, idx) => {
            const _wid = unit.clientWidth + _margin + acc[idx];
            acc[idx + 1] = _wid;
            return acc;
        }, [0]);
    }
    const moveScroll = (direct) => {
        _init.curNum = direct;
        if (_init.curNum > _init.pos.length - 1) {
            _init.curNum = _init.pos.length - 1;
            return;
        } else if (_init.isTab && _init.curNum < 0) {
            _init.curNum = 0;
            return;
        }
        const _left = _init.pos[_init.curNum];

        _init.tabWrap.scrollTo({
            top: 0,
            left: _left,
            behavior: 'smooth'
        });
    };
    const setScrollBtn = () => {
        Array.prototype.forEach.call(_init.tabs, (tab, idx) => {
            tab.addEventListener('click', () => {
                moveScroll(idx);
            });
        });
    };
    const resizeFunc = () => {
        _init.wrapWid = _init.tabWrap.clientWidth;
        _init.elWid = _init.tabWrap.scrollWidth;
        _init.pos = makeUnitPos(_init.tabs);
    };
    const init = () => {
        _init.base.classList.add('is-tab');
        _init.tabWrap = tabWrap ? _init.base.querySelector(tabWrap) : _init.base;
        _init.wrapWid = _init.tabWrap.clientWidth;
        _init.elWid = _init.tabWrap.scrollWidth;
        _init.tabs = _init.base.querySelectorAll(tab);
        if (_init.wrapWid ===  0 && _init.elWid === 0) {
            setTimeout(() => {
                init();
            }, 100);
            return;
        }
        setScrollBtn();
        window.addEventListener('resize', () => {
            resizeFunc();
        });
        resizeFunc();
    };
    init();
}
// 햄버거 카테고리 셋팅 20230522 수정
function setCategory({data, all, type}) {
    if (!document.querySelector('.gnb-category__inner')) {
        return;
    }
    const moType = document.querySelector('.gnb-category__inner').classList.contains('type-pc') ? false : true;
    const _category = data.reduce((acc, _data, idx) => {
        let isDisabled ="";
        if(_data.branList == ""){
            isDisabled = "disabled";
        }
        if (moType) {
            return acc += `<li class="ctg-${_data.goosCtgId} ${idx === 0 ? 'is-active' : ''}"><button type="button" id="tab__gnb-category--${idx + 1}" role="tab" aria-selected="${idx === 0 ? 'true' : ''}" aria-controls="tab__gnb-category--${idx + 1}">${_data.goosDispCtgNm}</button></li>`;
        } else {
            return acc += `<li class="ctg-${_data.goosCtgId} ${idx === 0 ? 'is-active' : ''}"><a href="${ctx_shop}/dm/ctg/category.do?goosCtgId=${_data.goosCtgId}" id="tab__gnb-category--${idx + 1}" role="tab" aria-selected="${idx === 0 ? 'true' : ''}" aria-controls="tab__gnb-category--${idx + 1}"><span>${_data.goosDispCtgNm}</span></a></li>`;
        }
    }, '');
    document.querySelector('.gnb-category--list').innerHTML = _category;

    data.forEach((_data, idx) => {
        const _ul = document.createElement('ul');
        _ul.className = `gnb-category--2depth tab-content ${idx === 0 ? 'is-active' : ''}`;
        _ul.setAttribute('role', 'tabpanel');
        _ul.setAttribute('aria-labelledby', `tab__gnb-category--${idx + 1}`);

        const subDataList = _data.subCtgList;
        const _all = type === 'full' ? `${all}` : `${_data.goosDispCtgNm} ${all}`;
        const _subItem = subDataList.length <= 0 ? '' : subDataList.reduce((subAcc, subData, subIdx) => {
            if (moType) {
                // 모바일일 경우
                return subAcc += `<li><a href="${ctx_shop}/dm/ctg/category.do?goosCtgId=${subData.goosCtgId}">${subData.goosDispCtgNm}</a></li>`
            } else {
                // pc의 경우
                const ssubDataList = subData.subCtgList;
                const _ssubItem = ssubDataList.length <= 0 ? '' : ssubDataList.reduce((ssubAcc, ssubData) => {
                    return ssubAcc += `<li><a href="${ctx_shop}/dm/ctg/category.do?goosCtgId=${ssubData.goosCtgId}"><span>${ssubData.goosDispCtgNm}</span></a></li>`
                },'');
                subAcc += `<li class="${subIdx === 0 ? 'is-active' : ''}">
                                <a href="${ctx_shop}/dm/ctg/category.do?goosCtgId=${subData.goosCtgId}" class="tab__snb-category" role="tab" aria-selected="${subIdx === 0 ? 'true' : ''}" aria-controls="tab__snb-category--${idx}-${subIdx + 1}"><span>${subData.goosDispCtgNm}</span></a>
                                <ul class="gnb-category--3depth tab-content" role="tabpanel" aria-labelledby="tab__snb-category--${idx}-${subIdx + 1}">
                                    ${_ssubItem}
                                </ul>
                            </li>`
                return subAcc;
            }
        }, `<li class="link-all"><a href="${ctx_shop}/dm/ctg/category.do?goosCtgId=${_data.goosCtgId}">${_all}</a></li>`);
        _ul.innerHTML =_subItem;
        document.querySelector('.gnb-category__inner').append(_ul);
    });
    setCategory3depth('.tab__snb-category', data);
    moType && setTab('.gnb-category__content');
    !moType && setTab('.gnb-category__content', 'mouseenter');
    setMouseEvt({wrap: '.gnb-category--2depth', target: '.tab__snb-category', cls: 'is-active', type: 'parent'});
    moType && linkCloseHambuger(); //20230703 추가
}
// category 3depth
function setCategory3depth(btn, data) {
    const _btns = document.querySelectorAll(btn);
    Array.prototype.forEach.call(_btns, btn => {
        btn.addEventListener('click', e => {
            const ctg1 = e.target.dataset.snb.split('');
            const firstCtg = parseInt(ctg1.splice(0, 4).join(''));
            const secondCtg = parseInt(ctg1.join(''));
            const subList = data[firstCtg - 1].subCtgList[secondCtg - 1].subCtgList;
            const ctg = subList.reduce((acc, data) => {
                return acc += `<li><a href="javascript:getCtgGoos('${e.target.dataset.snb}')">${data.goosDispCtgNm}</a></li>`;
            },'');
            document.querySelector('.gnb-category__inner .gnb-category__3depth').innerHTML = ctg
        })
    })
}
// 스크롤 정지 확인
function createScrollStop(el, callback, time) {
    let handle = null;
    let isScroll = () => {
        handle && clearTimeout(handle);
        handle = setTimeout(callback, time || 200);
    };
    el.addEventListener('scroll', isScroll);
    return function() {
        el.removeEventListener('scroll', isScroll);
    };
}
// body dim 삭제 20230512
function bodyDimRemove() {
    document.body.classList.contains('is-dimmed') && document.body.classList.remove('is-dimmed');
    document.querySelector('html').style.height = '';
    document.querySelector('html').style.position = '';
    document.querySelector('html').style.top = '';
    document.querySelector('html').style.overflow = '';
}
// top 버튼 20230517 추가
function setTopBtn(el) {
    const _hgt = 100;
    let _top = window.pageYOffset;
    const setView = (bl) => {
        setTimeout(() => {
            if (bl) {
                el.classList.add('is-active');
            } else {
                el.classList.remove('is-active');
            }
            el.removeAttribute('style');
        }, 300);
    }
    window.addEventListener('scroll', (e) => {
        _top = window.pageYOffset;
        if (_hgt < _top && !el.classList.contains('is-active')) {
            el.style.display = 'block';
            el.style.opacity = 1;
            setView(true);
        } else if (_hgt > _top && el.classList.contains('is-active')) {
            el.style.opacity = 0;
            setView(false);
        }
    });
    el.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
}
// 이미지 명도 체크 20230630 수정
function imgLightCheck(image, callback) {
    return; //cors 해결 전까지
    if (!image) {
        return;
    }
    const imagePath = image.getAttribute('src').indexOf('blank') !== -1 ? image.dataset.src : image.getAttribute('src'); // 20230620 수정
    const img = document.createElement("img");
    img.src = imagePath;
    img.style.display = "none";
    document.body.appendChild(img);

    let colorSum = 0;

    img.onload = function() {
        // create canvas
        const canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(this,0,0);

        const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        const data = imageData.data;
        let r,g,b,avg;

        for(var x = 0, len = data.length; x < len; x+=4) {
            r = data[x];
            g = data[x+1];
            b = data[x+2];

            avg = Math.floor((r+g+b)/3);
            colorSum += avg;
        }

        const brightness = Math.floor(colorSum / (this.width*this.height));
        callback(brightness);
    }
};
// trigger 20230602 추가
function evtTrigger(btn) {
    const _event = document.createEvent('HTMLEvents');
    _event.initEvent('click', true, false);
    btn.dispatchEvent(_event);
}
//20230703 추가 햄버거 링크 클릭 액션, 20230710 수정 햄버거 링크 클릭 액션
function linkCloseHambuger() {
    const _base = '.fullscreen_basic.gnbLayerArea';
    const _links = document.querySelectorAll(`${_base} .gnb-category--2depth a, ${_base} .list-quick-link a, ${_base} .swiper__gnb-showroom a, ${_base} .gnb-info-link a`);
    Array.prototype.forEach.call(_links, link => {
        link.addEventListener('click', () => {
            evtTrigger(document.querySelector('.fullscreen_basic.gnbLayerArea .ui-close'))
        })
    })
}
//게임
function goDoitFive(){
    var ukey = "";
    var uAgent = exApp.getAgent();
    //로그인여부 검사
    if(!isLogin){
        alert("로그인 후 이용해주세요.");
        login();
        return;
    }

    //앱여부 검사
    if(appYn == 'N'){
        var appUrl = "hddfs://";
        // var appUrl = "hddfs://?url=dev.doit5.com/hddfs/home?doit5=hddfs"; //  게임 페이지로 이동
        if(uAgent == "android"){
            var appUrl = "https://play.google.com/store/apps/details?id=com.ehyundai.HyunDaiDutyFreeShop";
            //window.location.href = appUrl;

            appUrl = dfsiInfo['appDownloadUrlKrAndroid'];

            if(confirm("GAME 서비스는 현대백화점면세점 APP에서만 참여 가능하오니, APP에서 실행해주시기 바랍니다.")){
                window.location.href = appUrl;
            }

        }else if(uAgent == "ios"){
            var appUrl = "https://apps.apple.com/kr/app/현대백화점면세점/id1436812610"; // 파라미터 있는 URL 적용
            location.href = appUrl;

            if(confirm("GAME 서비스는 현대백화점면세점 APP에서만 참여 가능하오니, APP에서 실행해주시기 바랍니다.")){
                location.href = appUrl;
            }
        }
        else{
            var appUrl = "https://play.google.com/store/apps/details?id=com.ehyundai.HyunDaiDutyFreeShop";

            if(confirm("GAME 서비스는 현대백화점면세점 APP에서만 참여 가능하오니, APP에서 실행해주시기 바랍니다.")){
                window.location.href = appUrl;
            }
            setTimeout(function(){
                appUrl = dfsiInfo['appDownloadUrlKrIos']; // 파라미터 있는 URL 적용

                if(confirm("iOS app이 설치되어 있지 않습니다. 앱을 다운로드하시겠습니까?")){
                    location.href = appUrl;
                }
            }, 3000);
        }

    }else{
    	 $.ajax({
             async       : true,
             url         : ctx_curr + "/api/op/evnt/encMbshNo.json",
             dataType    : "json",
             type        : "POST",
             data		 : { encKey: "doit5"},
             success     : function(data, textStatus, jqXHR){
                 if(!crew.ajaxValidate(data)){ return; }
                 ukey = data.ukey;
                 var gameUrl = data.gameUrl;
                 //console.log("gameUrl: "+gameUrl);
                 var $form = $('<form></form>');
                 $form.attr('method', 'post');
                 $form.attr('action', gameUrl);
                 $form.append('<input type="hidden" value="' +ukey+ '"name="ukey">');
                 $form.appendTo('body');
                 $form.submit();
             },
             error       : function(jqXHR, textStatus, errorThrown){
                 //console.log(jqXHR.status);
             }
         });
    }
}

/* S: 2024-04-22 비밀번호 입력칸 토글 기능 추가 */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#custPwd') && _createEyeBtn();
});

function _createEyeBtn() {
    let _pwToggleBase = document.querySelectorAll('.pwToggleView');
    if(!_pwToggleBase.length){
        let _eyeBase1 = document.querySelector('#custPwd');
        let _eyeBase2 = document.querySelector('#mbshPwd');
        let _eyeBtnDiv = `<a href="javascript:void(0);" class="pwToggleView"></a>`;
        _eyeBase1.insertAdjacentHTML('afterend', _eyeBtnDiv);
        _eyeBase2.insertAdjacentHTML('afterend', _eyeBtnDiv);
        _pwToggleViewEvent();
    }
    else {
        return false;        
    }
}
function _pwToggleViewEvent() {
    let _pwToggleBase = document.querySelectorAll('.pwToggleView');
    if(_pwToggleBase.length){
        _pwToggleBase.forEach((_el) => {
            let _base = _el.parentNode;
            let _target = _base.querySelector('input');
            _el.onclick = () => {
                let _type = _target.getAttribute('type');
                // console.log(_type);
                if(_type == 'password'){
                    _target.setAttribute('type','text');
                    _el.classList.add('is-active');
                }
                else {
                    _target.setAttribute('type','password');
                    _el.classList.remove('is-active');
                }
            }
        });
    }                        
}
/* E: 2024-04-22 비밀번호 입력칸 토글 기능 추가 */