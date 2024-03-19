// To change the tabs for Simple, Advance and NSE mode
function ChangeTab(evt, customTab) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(customTab).style.display = "block";
    evt.currentTarget.className += " active";
}

function ResetToClip(event) {
    var comment = event.target.querySelector(".commenttext");
    comment.innerHTML = "Copy to Clipboard";
}

function CopyToClip(event) {
    var buttonid = event.target.getAttribute("data-id");
    var copyText = document.getElementById(buttonid);
    navigator.clipboard.writeText(copyText.value);

    var comment = event.target.querySelector(".commenttext");
    comment.innerHTML = "Copied!";

}


function SwitchColorMode() {

    if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');

        var elements = document.querySelectorAll(".dark");

        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("dark");
            elements[i].classList.add("light");
        }
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('data-theme', 'light'); //add this
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
    const tabsContainers = document.querySelectorAll(".tabs-container");

    tabsContainers.forEach(container => {
        const tabs = container.querySelectorAll(".tab");
        const contents = container.querySelectorAll(".content");

        const removeActiveClass = () => {
            tabs.forEach((t) => {
                t.classList.remove("active");
            });

            contents.forEach((c) => {
                c.classList.remove("active");
            });
        };

        const setFirstTabActive = () => {
            tabs[0].classList.add("active");
            contents[0].classList.add("active");
        };

        const setActiveTab = (tabIndex) => {
            removeActiveClass();
            tabs[tabIndex].classList.add("active");
            contents[tabIndex].classList.add("active");
        };

        tabs.forEach((t, i) => {
            t.addEventListener("click", () => {
                setActiveTab(i);
            });
        });

        setFirstTabActive(); // Set the first inner tab as active initially
    });

    // Default Opening the first tab
    document.getElementById("AuthenticationBypassOpen").click();

    function open_query(evt, query_name) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(query_name).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // to add onmouseleave and onclick into all copy button
    var cpbtns = document.querySelectorAll("button[id^='Copy']");
    for (var i = 0; i < cpbtns.length; i++) {
        cpbtns[i].addEventListener("mouseleave", ResetToClip);
        cpbtns[i].addEventListener("click", CopyToClip);
    }

    // trigger Light/Dark mode depends on user last view
    var theme = window.localStorage.getItem('data-theme');
    if (theme === 'dark') {
        SwitchColorMode();
    }
    // trigger Light/Dark mode
    document.getElementById('Switch-Color').addEventListener('click', SwitchColorMode);

});


