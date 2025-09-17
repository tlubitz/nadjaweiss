/*var onloadCallback = function() {
    grecaptcha.render('empty_div', {
	  // Timo: 'sitekey' : '6LftFsUUAAAAAIun29DREA5VOsFVE0ZrNChfGRRZ'
	  'sitekey' : '6LedGsUUAAAAAGnudUMZfl41Y4CcHksOO-kCacR6'
	});
}*/

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

// Contact modal
// Get the modal
var modal = document.getElementById("modal-contact");

// Get the button that opens the modal
var btn = document.getElementById("button-contact");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// END: Contact modal

// contact form details
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#startdate").value = today;

var currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 2);
document.querySelector("#enddate").value = currentDate.toISOString().substr(0, 10);


// stickiness of navbar
window.onscroll = function() { navVisibility()};

function navVisibility() {
    if (window.innerWidth > 991) {
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
	    var nav = document.getElementById("navbar-dynamic");
	    var logo = document.getElementById("logo-sub");
	    if (nav.style.position === 'absolute') {
		logo.style.display = 'block';
		logo.getElementsByTagName("a")[0].style.color = 'black';
		
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
	    var logo = document.getElementById("logo-sub");
	    logo.getElementsByTagName("a")[0].style.color = 'white';
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

// JS Captcha Calculate Validation
/*let validCaptcha = false;
var myCaptcha = new jCaptcha({
// set callback function
	callback: function(response, $captchaInputElement) {
	if (response == 'success') {
            $captchaInputElement[0].classList.remove('error');
            $captchaInputElement[0].classList.add('success');
            $captchaInputElement[0].placeholder = 'GUT GERECHNET!';
	    	validCaptcha = true;
	}
        if (response == 'error') {
            $captchaInputElement[0].classList.remove('success');
            $captchaInputElement[0].classList.add('error');
            $captchaInputElement[0].placeholder = 'NOCHMAL PROBIEREN!';
	}
    }
});

let captchaText = document.getElementsByClassName('jCaptchaText')[0];
captchaText.style.padding = '1rem';
captchaText.style.border = '1px solid white';
captchaText.style.marginTop = '2rem';
captchaText.style.float = 'left';

let captcha = document.getElementsByClassName('jCaptcha')[0];
captcha.style.width = '60%';
captcha.style.float = 'none';
captcha.style.padding = '2.5rem 1rem 1rem 1rem';
captcha.style.marginLeft = '2rem';
captcha.style.marginBottom = '1rem';

// Here starts the validation upon clicking submit:
var onSubmit = function(token) {
    // first check if the calculation captcha is correct
    myCaptcha.validate();

	// execute captcha (is this sufficient for validation?)
	grecaptcha.execute();
	//grecaptcha.getResponse();

	// if it is, trigger submit manually
	// but only if dates are long enough (currently 5 chars)
    if (validCaptcha === true && check_dates() === true) {
		document.querySelector('#contact-form').submit();
	}
	else {
		console.log('Something went wrong.')
		grecaptcha.reset();
	}
}*/