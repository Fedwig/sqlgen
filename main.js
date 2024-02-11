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


function DBMSTypes() {
  var options = [
    { value: "mysql", text: "MySQL" },
    { value: "oracle", text: "OracleDB" },
  ];
  var NSECategory = document.getElementById("dbms-types");

  options.forEach(function (option) {
    var optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    NSECategory.appendChild(optionElement);
  });

  NSECategory.value = "default";
}



document.addEventListener("DOMContentLoaded", function() {
  DBMSTypes();
});
