$(document).ready(function () {
  $('#news-slider').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 500,
    items: 1,
    dots: true,
    nav: false,
  });
  $("#slide-album").owlCarousel({
    loop: true,
    autoPlay: false,
    autoplayTimeout: 5000,
    smartSpeed: 500,
    items: 1,
    dots: true,
    nav: false,
  });
  $("#slide-album1").owlCarousel({
    loop: true,
    autoPlay: false,
    autoplayTimeout: 5000,
    smartSpeed: 500,
    items: 1,
    dots: true,
    nav: false,
  });
  $("#slide-videos").owlCarousel({
    loop: true,
    autoPlay: false,
    autoplayTimeout: 5000,
    smartSpeed: 500,
    items: 1,
    nav: true,
    dots: false,
    navText: []
  });
  var stickyTop = $("#navbar").offset().top;
  var idMenu = $("#navbar");
  if (window.outerWidth <= 1200) {
    idMenu = $("#navbar-mb");
    stickyTop = idMenu.offset().top;
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() >= stickyTop) {
      idMenu.addClass("sticky");
    } else {
      idMenu.removeClass('sticky');
    }
  });
  $(".box-tab .tab-heading-item").on("click", function () {
    var me = $(this);
    var idSource = me.data("target");
    me.parents(".box-tab")
      .find(".tab-heading-item")
      .removeClass("active");
    me.addClass("active");
    me.parents(".box-tab").find(".tab-content-item").hide();
    me.parents(".box-tab")
      .find('.tab-content-item[data-source="' + idSource + '"]')
      .show();
  });
  $(".sub-tab .sub-tab-item").on("click", function () {
    var me = $(this);
    var idSource = me.data("target");
    me.parents(".sub-tab").find(".sub-tab-item").removeClass("active");
    me.addClass("active");
    me.parents(".box-tab").find(".sub-tab-content-item").hide();
    me.parents(".box-tab")
      .find('.sub-tab-content-item[data-source="' + idSource + '"]')
      .show();
  });

  $(".btn-search").on("click", function () {
    var me = $(this);
    me.parents(".search").toggleClass("active");
  });
  $('.btn-menu').on("click", function () {
    $('#menu-mobile .head-menu').addClass("open");
  });
  $('#closemenu').on("click", function () {
    $('#menu-mobile .head-menu').removeClass("open");
  });

  $('.btn-search-mobile a').on("click", function () {
    $('.search-box').toggleClass("open");
    $('.opacity').toggleClass("hidden");
  });

});