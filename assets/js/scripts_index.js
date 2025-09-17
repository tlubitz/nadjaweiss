// Open Street map
document.getElementById('load-map-btn').addEventListener('click', function() {
	document.getElementById('map-placeholder').style.display = 'none';
	document.getElementById('osm-map').style.display = 'block';
	document.getElementById('map-attribution').style.display = 'block';
	
	initMap();
});

function initMap() {
	const yourLocation = [49.52739795256828, 8.664293940666886];
	
	const map = L.map('osm-map').setView(yourLocation, 15);
	
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors',
		maxZoom: 18
	}).addTo(map);
	
	const marker = L.marker(yourLocation).addTo(map);
	
	marker.bindPopup(`
		<div style="text-align: center;">
			<h4>Nadja Weiß</h4>
			<h5>Systemische Familienberaterin</h5>
			<p style="font-size:14px;">Sommergasse 55<br>
			69469 Weinheim<br>
			Phone: xxx</p>
		</div>
	`);
	
	marker.openPopup();
}

// function to close nav upon click of nav link
function closeNav() {
    var navbutton = document.getElementById("navbutton");
    navbutton.setAttribute("aria-expanded", "false");
    navbutton.classList.add("collapsed");

    var mobile_collapse = document.getElementById("mobile_collapse_front");
    mobile_collapse.setAttribute("aria-expanded", "false");
    mobile_collapse.style.height = "1px";
    mobile_collapse.classList.remove("in");
}

// "MORE" Buttons
var $el, $ps, $up, totalHeight;

$(".hidden-box .button").click(function() {
  totalHeight = 0;
  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight+80
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
});
// END: "MORE" Buttons



// Gallery modal
// Open the Modal
function openModal() {
  document.getElementById("modal-gallery").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("modal-gallery").style.display = "none";
}

var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("figure-gallery");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
// End: Gallery modal


// stickiness of navbar
window.onscroll = function() { navVisibility() };

function navVisibility() {
    if (window.innerWidth > 991) {
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
	    var nav = document.getElementById("navbar-dynamic");
	    var logo = document.getElementById("logo");
	    if (nav.style.position === 'absolute') {
		logo.style.display = 'block';

		//nav.style.position = 'fixed';
		nav.classList.add('navbar-back');
		var navitems = document.getElementsByClassName("nav-item");
		for (i = 0; i < navitems.length; i++) {
		    navitems[i].style.color = "black";
		}

		var borders = document.getElementsByClassName("borders-out");
		for (i = 0; i < borders.length; i++) {
		    var borders_li = borders[i].getElementsByTagName("a");
		    for (j = 0; j < borders_li.length; j++) {
		    }
		}

		nav.style.top = "-100px";
		nav.style.position = "fixed";

		let current_pos = -100;
		var interv = setInterval(increase, 1);
		function increase() {
		    current_pos++;
		    nav.style.top = current_pos + "px";
		    if (current_pos === 0) {
			clearInterval(interv);
		    }
		}
	    }
	}
	else {
	    var nav = document.getElementById("navbar-dynamic");
	    nav.style.position = 'absolute';
	    nav.classList.remove('navbar-back');
	    var navitems = document.getElementsByClassName("nav-item");
	    for (i = 0; i < navitems.length; i++) {
		navitems[i].style.color = "white";
	    }
	    var logo = document.getElementById("logo");
	    logo.style.display = 'none';
	}

	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
	    var fig_1 = document.getElementById("mod-2-fig-1");
		if (fig_1) {
			if (fig_1.style.display === "none") {
			fig_1.style.left = "60%";
			fig_1.style.display = "block";
			let fig_1_pos = 60;
			var fig_1_int = setInterval(increase_1, 30);
			function increase_1() {
				fig_1_pos--;
				fig_1.style.left = fig_1_pos + "%";
				if (fig_1_pos === 45) {
				clearInterval(fig_1_int);
				}
			}
		}
	    
		var fig_2 = document.getElementById("mod-2-fig-2");
		if (fig_2) {
			fig_2.style.left = "-10%";
			fig_2.style.display = "block";
			let fig_2_pos = -10;
			var fig_2_int = setInterval(increase_2, 30);
			function increase_2() {
				fig_2_pos++;
				fig_2.style.left = fig_2_pos + "%";
				if (fig_2_pos === 15) {
				clearInterval(fig_2_int);
				}
			}
		}

		var fig_3 = document.getElementById("mod-2-fig-3");
		if (fig_3) {
			fig_3.style.top = "480px";
			fig_3.style.display = "block";
			let fig_3_pos = 480;
			var fig_3_int = setInterval(increase_3, 1);
			function increase_3() {
				fig_3_pos--;
				fig_3.style.top = fig_3_pos + "px";
				if (fig_3_pos === 280) {
				clearInterval(fig_3_int);
				}
			}
		}

	    }
	}
	else {
	    var fig_1 = document.getElementById("mod-2-fig-1");
		if (fig_1) {
		    fig_1.style.display = "none";
		}
	    var fig_2 = document.getElementById("mod-2-fig-2");
		if (fig_2) {
		    fig_2.style.display = "none";
		}
	    var fig_3 = document.getElementById("mod-2-fig-3");
		if (fig_3) {
		    //fig_3.style.display = "none";
		}
	}

    }
}

// function for basic sanity check of date fields
function check_dates() {
	var start = document.querySelector('#startdate');
	var end = document.querySelector('#enddate');

	if (start.value.length > 5 && end.value.length > 5) {
		return true
	}
	else {
		return false
	}
}
