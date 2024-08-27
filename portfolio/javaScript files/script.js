function showsidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}
function hidesidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// for typink effect

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


function visitProject_1() {
  var projectfirstlink = document.getElementById("projectFirst");
}

// JS FOR SUBMIT CONTACT FORM ===================>

// FUNCTION FOR SUBMIT FORM
function submitForm() {
  var Name = document.getElementById("name").value;
  var Email = document.getElementById("email").value;
  var Password = document.getElementById("password").value;
  var Address = document.getElementById("address").value;

  let formdict = {};
  formdict["Name"] = Name;
  formdict["Email"] = Email;
  formdict["Password"] = Password;
  formdict["Address"] = Address;
  console.log(formdict);

  alert("Your form is submitted.");

  document.getElementById("name").value = " ";
  document.getElementById("email").value = " ";
  document.getElementById("password").value = " ";
  document.getElementById("address").value = " ";
}

// FUNCTION FOR CLEAR FORM

function clearall() {
  document.getElementById("name").value = " ";
  document.getElementById("email").value = " ";
  document.getElementById("password").value = " ";
  document.getElementById("address").value = " ";
}