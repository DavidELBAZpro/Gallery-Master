(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  renderProjects()
})(jQuery); // End of use strict


function renderProjects() {
  var projects = getProjects()
  
   var strHTML = projects.map(project =>   { 
     console.log('hey1',project);
     
    return ` <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${project.id}')">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${project.imgUrl}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.title}</h4>
            <p class="text-muted2">${project.title}</p>
          </div> `      
  })       
  $('.row-david').html(strHTML)
}

function renderModal(id) {
  var project = getProjectById(id)
  console.log('hey2', project);
  
  var elModal = document.querySelector('.modal-body')
  var strHTML = `<h2>${project.name}<h2>
                <p class="item-intro text-muted">My personal projects</p>
                <img class="img-fluid d-block mx-auto" src="${project.imgUrl}" alt="">
               <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Date:${project.publishedAt}</li>
                  <li></li>
                </ul>
                <div class="btn-link">
                <a href="${project.url}" >
                <button type="button" class="btn btn-primary">CHECK IT</button>
                <a/>
                </div>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div> `
              elModal.innerHTML = strHTML
  
}

function onSubmit() {
  const $email = $('.email').val()
  const $subject = $('.subject').val()
  const $textarea = $('.textarea').val()

  $('.email').val('')
  $('.subject').val('')
  $('.textarea').val('')

  var newLink = `https://mail.google.com/mail/u/0/?fs=1&to=dvdbg93310@gmail.com&su=${$subject}&body=${$textarea}&bcc=${$email}&tf=cm`
  window.open(newLink, '_blank')
}