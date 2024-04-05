function SwitchColorMode() {

    if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'light');
  
      var elements = document.querySelectorAll(".dark");
  
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("dark");
        elements[i].classList.add("light");
      }
      document.documentElement.setAttribute('data-theme', 'light');
      window.localStorage.setItem('data-theme', 'light');
      document.getElementById("Switch-Color").innerHTML = " 🌙 Dark Mode";
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      var elements = document.querySelectorAll(".light");
  
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("light");
        elements[i].classList.add("dark");
      }
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('data-theme', 'dark'); //add this
      document.getElementById("Switch-Color").innerHTML = " ☀️ Light Mode";
  
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
  
    // trigger Light/Dark mode depends on user last view
    var theme = window.localStorage.getItem('data-theme');
    if (theme === 'dark') {
      SwitchColorMode();
    }
    // trigger Light/Dark mode
    document.getElementById('Switch-Color').addEventListener('click', SwitchColorMode);
  
  });