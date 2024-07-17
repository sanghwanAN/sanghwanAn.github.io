// 팝업
var smtDutyPopup = {
  closeSmtPopup: function ($popupWrap) {
    $popupWrap.removeClass("smt-pop-open");
    $("body").removeClass("popup-open");
    $popupWrap.attr("aria-hidden", "true");
  },

  // open 
  smtOpenPop: function (targetId) {
    var $targetOpenPop = $("#" + targetId);
    if ($targetOpenPop.length) {
      $targetOpenPop.addClass("smt-pop-open");
      $("body").addClass("popup-open");
      $targetOpenPop.attr("aria-hidden", "false");
    }
  },

  // 초기화 
  initializesmtDutyPopup: function (options) {
    var defaults = {
      openButtonSelector: ".btn-js-open-smt-pop",
      closeButtonSelector: ".js-smt-pop-close",
      cancelButtonSelector: ".js-smt-pop-cancel",
      checkButtonSelector: ".js-smt-pop-check",
    };

    var settings = $.extend({}, defaults, options);

    $(document).on("click", settings.openButtonSelector, function (e) {
      var targetId = $(this).data("pop-target");
      smtDutyPopup.smtOpenPop(targetId);
      // var $targetPopupWrap = $("#" + targetId);
      // if ($targetPopupWrap.length) {
      //   $targetPopupWrap.addClass("smt-pop-open");
      //   $("body").addClass("popup-open");
      // }
    });

    $(document).on("click", settings.closeButtonSelector, function () {
      var $targetPopupWrap = $(this).closest(".js-smt-pop-wrap");
      smtDutyPopup.closeSmtPopup($targetPopupWrap);
    });

    $(document).on("click", settings.cancelButtonSelector, function () {
      var $targetPopupWrap = $(this).closest(".js-smt-pop-wrap");
      smtDutyPopup.closeSmtPopup($targetPopupWrap);
    });

    $(document).on("click", settings.checkButtonSelector, function () {
      var $targetPopupWrap = $(this).closest(".js-smt-pop-wrap");
      smtDutyPopup.closeSmtPopup($targetPopupWrap);
    });
    
    $(document).on("keydown", function (e) {
      if (e.key === "Escape") {
        console.log("aa");
        var $activePopup = $(".js-smt-pop-wrap.smt-pop-open");
        if ($activePopup.length) {
          smtDutyPopup.closeSmtPopup($activePopup);
        }
      }
    });
    // $.fn.smtOpenPop = function (targetId) {
    //   smtDutyPopup.smtOpenPop(targetId);
    // };
    
    // $.fn.closeSmtPopup = smtDutyPopup.closeSmtPopup;
  },
};



function smtAgrreCheckboxFunc() {
  $(document).on("click", ".js-allagree-area .js-allcheck-box", function () {
    var $parentTermList = $(this).closest(".js-allagree-area");
    var isChecked = $(this).is(":checked");
    $parentTermList.find(".js-agree-checkbox").prop("checked", isChecked);
  });

  $(document).on("click", ".js-allagree-area .js-agree-checkbox", function () {
    var $parentTermList = $(this).closest(".js-allagree-area");
    var allChecked =
      $parentTermList.find(".js-agree-checkbox").length ===
      $parentTermList.find(".js-agree-checkbox:checked").length;
    $parentTermList.find(".js-allcheck-box").prop("checked", allChecked);
  });
}

function setupAccordion() {
  $(".js-accordion-btn").on("click", function () {
    var $thisArccoBtn = $(this);
    var $content = $("#" + $thisArccoBtn.attr("aria-controls"));
    var isExpanded = $thisArccoBtn.attr("aria-expanded") === "true";
    $thisArccoBtn.attr("aria-expanded", !isExpanded);
    
    if (isExpanded) {
      $content.slideUp(300).attr("aria-hidden", true);
    } else {
      $content.slideDown(300).attr("aria-hidden", false);
    }
  });
}

function smtCustomSelect() {
  $(".js-smt-select-btn").on("click", function () {
    $(this).parent('.smt-select-header').siblings(".js-sms-select-options").slideToggle(340);
    $(this).toggleClass('js-smt-select-btn--open');
  });

  $(".js-sms-select-option input[type='radio']").on("change", function () {
    var selectedOptions = [];
    var $dropdown = $(this).closest(".js-smt-select-wrap");
    $dropdown
      .find(".js-sms-select-option input[type='radio']:checked")
      .each(function () {
        selectedOptions.push($(this).parent().text().trim());
      });

    if (selectedOptions.length > 0) {
      $dropdown
        .find(".js-smt-select-btn")
        .text(selectedOptions.join(", "));
    } else {
      $dropdown.find(".js-smt-select-btn").text("Select options");
    }
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".js-smt-select-wrap").length) {
      $(".js-smt-select-btn").removeClass('js-smt-select-btn--open');
      $(".js-sms-select-options").slideUp();
    }
  });
 
  $(".js-smt-select-wrap").on("click", function (event) {
    event.stopPropagation();
  });
}




function exclamationTooltip() {
  var exclamationTooltipBtn = $('.js-btn-exclamation-toolip');
  var exclamationCloseBtn = $('.smt-toolip .btn-smt-tooltip-close');
  exclamationTooltipBtn.on("click",function(){
      var thisTooltipBtn = $(this);
      console.log("thisTooltipBtn__",thisTooltipBtn);
      var thisTooltipWrap = thisTooltipBtn.closest('.js-exclamation-toolip-wrap');
      thisTooltipWrap.addClass('exclamation-toolip-open')
  })
  exclamationCloseBtn.on("click",function(){
      var thisCloseToolipBtn = $(this);
      var thisTooltipWrap = thisCloseToolipBtn.closest('.js-exclamation-toolip-wrap');
      thisTooltipWrap.removeClass('exclamation-toolip-open')
  })
}

 


$(document).ready(function () {
  //  아코디언
  setupAccordion();
  // 커스텀 셀렉트
  smtCustomSelect();
  // 주의사항 툴팁
  exclamationTooltip();
  //  팝업
  smtDutyPopup.initializesmtDutyPopup();
  if ($(".js-allagree-area").length) {
    smtAgrreCheckboxFunc();
  };
});
