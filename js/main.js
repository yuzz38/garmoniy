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
    $('.how__btn').click(function(e){
      e.preventDefault();
      $('.how__btn').removeClass('active');
      $(this).addClass('active');
      $('.how__diagram__item').removeClass('active');
      $($(this).attr('href')).addClass('active');
    })

  

  })

  const dataDoughnut = {
    
   
    datasets: [
      {
        borderWidth: 0,
        hoverBorderWidth: 0,
        data: [30,90],
        backgroundColor: [
          
          "rgba(88, 166, 119, 1)",
          "rgba(227, 90, 60, 1)",
        ],
        hoverOffset: 0,
      },
      
    ],
    
  };

  const configDoughnut = {
    type: "doughnut",
    data: dataDoughnut,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false // <-- this option disables tooltips
        }
      }
    },
    events: [],
  };
  
  var chartBar = new Chart(
    document.getElementById("chartDoughnut"),
    
    configDoughnut
  );
  const dataDoughnut2 = {
    
    
    datasets: [
      {
        borderWidth: 0,
        hoverBorderWidth: 0,
        data: [30,80],
        backgroundColor: [
          "rgba(227, 90, 60, 1)",
          "rgba(88, 166, 119, 1)",
          
        ],
        hoverOffset: 0,
        
      },
      
    ],
    
  };

  const configDoughnut2 = {
    type: "doughnut",
    data: dataDoughnut2,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false // <-- this option disables tooltips
        }
      }
    },
  };

  var chartBar2 = new Chart(
    document.getElementById("chartDoughnut2"),
    configDoughnut2
  );
  
  const dataDoughnut3 = {
    
 
    datasets: [
      {
        borderWidth: 0,
        hoverBorderWidth: 0,
        data: [30,50],
        backgroundColor: [
          "rgba(227, 90, 60, 1)",
          "rgba(88, 166, 119, 1)",
          
        ],
        hoverOffset: 0,
      },
      
    ],
    
  };

  const configDoughnut3 = {
    type: "doughnut",
    data: dataDoughnut3,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false // <-- this option disables tooltips
        }
      }
    },
    
  };

  var chartBar3 = new Chart(
    document.getElementById("chartDoughnut3"),
    configDoughnut3
  );

  const dataDoughnut4 = {
    
 
    datasets: [
      {
        borderWidth: 0,
        hoverBorderWidth: 0,
        data: [20,90],
        backgroundColor: [
          "rgba(88, 166, 119, 1)",
          "rgba(227, 90, 60, 1)",
          
          
        ],
        hoverOffset: 0,
      },
      
    ],
    
  };

  const configDoughnut4 = {
    type: "doughnut",
    data: dataDoughnut4,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false // <-- this option disables tooltips
        }
      }
    },
    
  };

  var chartBar4 = new Chart(
    document.getElementById("chartDoughnut4"),
    configDoughnut4
  );
  const dataDoughnut5 = {
    
 
    datasets: [
      {
        borderWidth: 0,
        hoverBorderWidth: 0,
        data: [40,90],
        backgroundColor: [
          "rgba(88, 166, 119, 1)",
          "rgba(227, 90, 60, 1)",
          
          
        ],
        hoverOffset: 0,
      },
      
    ],
    
  };

  const configDoughnut5 = {
    type: "doughnut",
    data: dataDoughnut5,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false // <-- this option disables tooltips
        }
      }
    },
    
  };

  var chartBar5 = new Chart(
    document.getElementById("chartDoughnut5"),
    configDoughnut5
  );

  const dataDoughnut6 = {
    
 
    datasets: [
      {
        borderWidth: 0,
        hoverBorderWidth: 0,
        data: [5,90],
        backgroundColor: [
          "rgba(88, 166, 119, 1)",
          "rgba(227, 90, 60, 1)",
          
          
        ],
        hoverOffset: 0,
      },
      
    ],
    
  };

  const configDoughnut6 = {
    type: "doughnut",
    data: dataDoughnut6,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false // <-- this option disables tooltips
        }
      }
    },
    
  };

  var chartBar6 = new Chart(
    document.getElementById("chartDoughnut6"),
    configDoughnut6
  );
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