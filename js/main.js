const swiper = new Swiper('.swiper', {
 
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2.3,
    spaceBetween: 30,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.3,
        spaceBetween: 30
      }
    }
  
  });
  $(document).ready(function(){
    $('.header-burger').click(function(e){
      e.preventDefault();
  
      $('.header__links').slideToggle();
 
    })
    
  

  })
  
  $(document).ready(function(){
    $('.how__btn').click(function(e){
      e.preventDefault();
      $('.how__btn').removeClass('active');
      $(this).addClass('active');
      $('.how__diagram__item').removeClass('active');
      $('.diag').animate({opacity: 0}, 200);
      $($(this).attr('href')).addClass('active');
      $($(this).attr('href')).find('.diag').animate({opacity: 1}, 200);
    })

  

  })


  $(document).ready(function() {
    $('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
    $('.acc-container .acc:nth-child(1) .acc-content').slideDown();
    $('.acc-head').on('click', function() {
        if($(this).hasClass('active')) {
          $(this).siblings('.acc-content').slideUp();
          $(this).removeClass('active');
        }
        else {
          $('.acc-content').slideUp();
          $('.acc-head').removeClass('active');
          $(this).siblings('.acc-content').slideToggle();
          $(this).toggleClass('active');
        }
    });     
    });
    function setCursorPosition(pos, e) {
      e.focus();
      if (e.setSelectionRange) e.setSelectionRange(pos, pos);
      else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
      }
    }
    AOS.init();
    function mask(e) {
      //console.log('mask',e);
      var matrix = this.placeholder,// .defaultValue
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      def.length >= val.length && (val = def);
      matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"
      });
      this.value = matrix;
      i = matrix.lastIndexOf(val.substr(-1));
      i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
      setCursorPosition(i, this)
    }
    window.addEventListener("DOMContentLoaded", function() {
      var input = document.querySelector("#online_phone");
      input.addEventListener("input", mask, false);
    });
    function circleDiagram(settings) {
      if (settings.selector.length > 0) {
        let params = {
          strokeWidth: 8, // толщина круга
          radius: 20, // радиус круга
          absolutePercent: false, // не замыкать круг до конца если в общем < 100%
          minPartSize: 1.5, // минимальный размер секции
          diagramColors: [
            "var(--c-orange)",
            "var(--c-green)"
            
          ], // список цветов диаграммы из css
          diagramColorDefault: "#aaa", // применяется, когда заканчивается список цветов выше
          fractions: 1 // точность вычислений
        };
        $.extend(params, settings);
    
        let id = params.selector.attr("id");
        if (id === undefined) {
          id = "default_id";
          params.selector.attr("id", id);
        }
        const diagram = params.selector.find(".circle");
        const percent = params.selector.find(".table td:first-child");
        const circleLength = Math.floor(params.radius * (Math.PI * 2) * 10) / 10;
        const valueLength = percent.length;
        let circleEl = [];
        for (let i = 0; i < valueLength; i++) {
          circleEl.push(
            `<circle class="d-item" cx="50" cy="50" r="${params.radius}"/>`
          );
        }
        circleEl = circleEl.join("");
        const svgObj = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style type="text/css">#${id} .d-item{fill:transparent;stroke-linecap:butt;stroke-width:${params.strokeWidth}}#${id} circle{animation:load_${id} 1.5s ease-in-out}@keyframes load_${id}{from{stroke-dashoffset:0}}</style></defs><g x="0" y="0" width="100" height="100">${circleEl}</g></svg>`;
        diagram.append(svgObj);
        percent.prepend(
          `<div style="background:${params.diagramColorDefault}"></div>`
        );
        const diagramElement = params.selector.find("svg g circle");
        const valPercent = [].map.call(percent, function (obj2) {
          let objVal = obj2.innerText;
          return parseFloat(objVal);
        });
        const objValSum = valPercent.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );
        let percentFix = objValSum / 100;
        if (
          (params.absolutePercent == true && objValSum < 100) ||
          valueLength === 1
        ) {
          percentFix = 1;
        }
        let step = 0;
        let dashoffsetValUpdate =
          circleLength - ((valPercent[0] / 100) * circleLength) / percentFix;
    
        while (valueLength > step) {
          let circlePercent =
            Math.floor((valPercent[step] * circleLength) / percentFix) / 100;
          if (circlePercent < params.minPartSize) {
            circlePercent = params.minPartSize;
          }
          dashoffsetValUpdate = dashoffsetValUpdate + circlePercent;
          diagramElement
            .eq(step)
            .attr(
              "stroke-dasharray",
              Math.floor(circlePercent * 10 ** params.fractions) /
                10 ** params.fractions +
                "," +
                Math.floor(
                  (circleLength - circlePercent) * 10 ** params.fractions
                ) /
                  10 ** params.fractions
            )
            .attr(
              "stroke-dashoffset",
              Math.floor(dashoffsetValUpdate * 10 ** params.fractions) /
                10 ** params.fractions
            );
          if (params.diagramColors.length > step) {
            diagramElement.eq(step).attr("stroke", params.diagramColors[step]);
            percent
              .eq(step)
              .find("div")
              .css({ background: params.diagramColors[step] });
          } else {
            diagramElement.eq(step).attr("stroke", params.diagramColorDefault);
          }
          step++;
        }
      }
    }
    circleDiagram({
      selector: $(".circle-diagram#first"), // обязательный параметр
      strokeWidth: 12.5,
      radius: 18
    });
    circleDiagram({
      selector: $(".circle-diagram#second"), // обязательный параметр
      strokeWidth: 12.5,
      radius: 18
    });
  
    circleDiagram({
      selector: $(".circle-diagram#third"), // обязательный параметр
      strokeWidth: 12.5,
      radius: 18
    });
    circleDiagram({
      selector: $(".circle-diagram#four"), // обязательный параметр
      strokeWidth: 12.5,
      radius: 18
    });
    circleDiagram({
      selector: $(".circle-diagram#five"), // обязательный параметр
      strokeWidth: 12.5,
      radius: 18
    });
    circleDiagram({
      selector: $(".circle-diagram#six"), // обязательный параметр
      strokeWidth: 12.5,
      radius: 18
    });
    var block_show = false;
 
    function scrollTracking(){
      if (block_show) {
        return false;
      }
     
      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $('.how__wrapper').offset().top;
      var eh = $('.how__wrapper').outerHeight();
      var dh = $(document).height();   
     
      if (wt + wh - 200 >= et || wh + wt == dh || eh + et < wh){
        block_show = true;
        
        // Код анимации
        $('.firstdig').addClass('active');
      }
    }
     
    $(window).scroll(function(){
      scrollTracking();
    });
      
    $(document).ready(function(){ 
      scrollTracking();
    });
