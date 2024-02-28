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

function SetSQLmap() {

  // Variable Declaration

  //General Variables
  var sqlmap_version = document.getElementById("SQLmap-version");
  var sqlmap_verbose = document.getElementById("SQLmap-verbose");
  var verbosity = document.getElementById('Verbosity');
  var sqlmap_wizard = document.getElementById("SQLmap-wizard");
  var sqlmap_update = document.getElementById("SQLmap-update");
  var sqlmap_purge = document.getElementById("SQLmap-purge");
  var sqlmap_tampers = document.getElementById("SQLmap-tampers");
  var sqlmap_dependencies = document.getElementById("SQLmap-dependencies");


  //Target Variables
  var sqlmap_target = document.getElementById("SQLmap-target");
  var target_url = document.getElementById("target-url");
  var sqlmap_dorking = document.getElementById("SQLmap-dorking");
  var googledork = document.getElementById("googledork");

  //Request Variables
  var sqlmap_data = document.getElementById("SQLmap-data");
  var request_data = document.getElementById("request-data");
  var sqlmap_cookie = document.getElementById("SQLmap-cookie");
  var request_cookie = document.getElementById("request-cookie");
  var sqlmap_random_agent = document.getElementById("SQLmap-random-agent");
  var sqlmap_proxy = document.getElementById("SQLmap-proxy");
  var request_proxy = document.getElementById("request-proxy");
  var sqlmap_tor = document.getElementById("SQLmap-tor");
  var sqlmap_check_tor = document.getElementById("SQLmap-check-tor");

  //Injection Variables
  var sqlmap_parameter = document.getElementById("SQLmap-parameter");
  var injection_parameter = document.getElementById("injection-parameter");
  var sqlmap_dbms = document.getElementById("SQLmap-dbms");
  var dbms_types = document.getElementById("dbms-types");


  //Detection Variables
  var sqlmap_level = document.getElementById("SQLmap-level");
  var level = document.getElementById("level");
  var sqlmap_risk = document.getElementById("SQLmap-risk");
  var risk = document.getElementById("risk");

  //Enumeration Variables
  var sqlmap_all = document.getElementById("SQLmap-all");
  var sqlmap_current_user = document.getElementById("SQLmap-current-user");
  var sqlmap_current_db = document.getElementById("SQLmap-current-db");
  var sqlmap_password = document.getElementById("SQLmap-password");
  var sqlmap_database = document.getElementById("SQLmap-database");
  var sqlmap_tables = document.getElementById("SQLmap-tables");
  var sqlmap_columns = document.getElementById("SQLmap-columns");
  var sqlmap_schema = document.getElementById("SQLmap-schema");
  var sqlmap_dump = document.getElementById("SQLmap-dump");
  var sqlmap_dump_all = document.getElementById("SQLmap-dump-all");
  var sqlmap_DB = document.getElementById("SQLmap-DB");
  var sqlmap_TBL = document.getElementById("SQLmap-TBL");
  var sqlmap_COL = document.getElementById("SQLmap-COL");

  //OS Access Variables
  var sqlmap_shell = document.getElementById("SQLmap-Shell");
  var sqlmap_pwn = document.getElementById("SQLmap-Pwn");

  //General Variables
  var sqlmap_batch = document.getElementById("SQLmap-Batch");
  var sqlmap_flush = document.getElementById("SQLmap-Flush");



  // Initialize SQLmap command
  var sqlmap_result = "sqlmap";

  //General Option Values
  sqlmap_version.value = "--version";
  sqlmap_verbose.value = "-v";
  sqlmap_wizard.value = "--wizard";
  sqlmap_update.value = "--update";
  sqlmap_purge.value = "--purge";
  sqlmap_tampers.value = "--list-tampers";
  sqlmap_dependencies.value = "--dependencies";

  //Target Option Values
  sqlmap_target.value = "-u";
  sqlmap_dorking.value = "-g";

  //Request Options
  sqlmap_data.value = "--data";
  sqlmap_cookie.value = "--cookie";
  sqlmap_random_agent.value = "--random-agent"
  sqlmap_proxy.value = "--proxy";
  sqlmap_tor.value = "--tor";
  sqlmap_check_tor.value = "--check-tor";

  //Injection Variables
  sqlmap_parameter.value = "-p";
  sqlmap_dbms.value = "--dbms";

  //Detection Variables
  sqlmap_level.value = "--level";
  sqlmap_risk.value = "--risk";

  //Enumeration Variables
  sqlmap_all.value = "--all";
  sqlmap_current_user.value = "--current-user";
  sqlmap_current_db.value = "--current-db";
  sqlmap_password.value = "--password";
  sqlmap_database.value = "--database";
  sqlmap_tables.value = "--tables";
  sqlmap_columns.value = "--columns";
  sqlmap_schema.value = "--schema";
  sqlmap_dump.value = "--dump";
  sqlmap_dump_all.value = "--dump-all";
  sqlmap_DB.value = "-DB";
  sqlmap_TBL.value = "-TBL";
  sqlmap_COL.value = "-COL";

  //Operating System Access
  sqlmap_shell.value = "--os";
  sqlmap_pwn.value = "--pwn";

  //General Options
  sqlmap_batch.value = "--batch";
  sqlmap_flush.value = "--flush";

  //General Option Conditions
  if (sqlmap_version.checked) {
    sqlmap_result += " " + sqlmap_version.value;
  }

  if (sqlmap_verbose.checked) {
    if (verbosity.value !== "") {
      sqlmap_result += " " + sqlmap_verbose.value + " " + verbosity.value;
    } else {
      sqlmap_result += " " + sqlmap_verbose.value + " " + "1";
    }
  }

  if (sqlmap_wizard.checked) {
    sqlmap_result += " " + sqlmap_wizard.value;
  }

  if (sqlmap_update.checked) {
    sqlmap_result += " " + sqlmap_update.value;
  }

  if (sqlmap_purge.checked) {
    sqlmap_result += " " + sqlmap_purge.value;
  }

  if (sqlmap_tampers.checked) {
    sqlmap_result += " " + sqlmap_tampers.value;
  }

  if (sqlmap_dependencies.checked) {
    sqlmap_result += " " + sqlmap_dependencies.value;
  }

  //Target Option Conditions
  if (sqlmap_target.checked) {
    if (target_url.value !== "") {
      sqlmap_result += " " + sqlmap_target.value + " " + target_url.value;
    } else {
      sqlmap_result += " " + sqlmap_target.value;
    }
  }

  if (sqlmap_dorking.checked) {
    if (googledork.value !== "") {
      sqlmap_result += " " + sqlmap_dorking.value + " " + googledork.value;
    } else {
      sqlmap_result += " " + sqlmap_dorking.value;
    }
  }

  if (sqlmap_data.checked) {
    if (request_data.value !== "") {
      sqlmap_result += " " + sqlmap_data.value + " " + request_data.value;
    } else {
      sqlmap_result += " " + sqlmap_data.value;
    }
  }

  if (sqlmap_cookie.checked) {
    if (request_cookie.value !== "") {
      sqlmap_result += " " + sqlmap_cookie.value + " " + request_cookie.value;
    } else {
      sqlmap_result += " " + sqlmap_cookie.value;
    }
  }

  if (sqlmap_random_agent.checked) {
    sqlmap_result += " " + sqlmap_random_agent.value;
  }

  if (sqlmap_proxy.checked) {
    if (request_proxy.value !== "") {
      sqlmap_result += " " + sqlmap_proxy.value + " " + request_proxy.value;
    } else {
      sqlmap_result += " " + sqlmap_proxy.value;
    }
  }

  if (sqlmap_tor.checked) {
    sqlmap_result += " " + sqlmap_tor.value;
  }

  if (sqlmap_check_tor.checked) {
    sqlmap_result += " " + sqlmap_check_tor.value;
  }

  if (sqlmap_parameter.checked) {
    if (injection_parameter.value !== "") {
      sqlmap_result += " " + sqlmap_parameter.value + " " + injection_parameter.value;
    } else {
      sqlmap_result += " " + sqlmap_parameter.value;
    }
  }

  if (sqlmap_dbms.checked) {
    if (dbms_types.value !== "") {
      sqlmap_result += " " + sqlmap_dbms.value + " " + dbms_types.value;
    } else {
      sqlmap_result += " " + sqlmap_dbms.value;
    }
  }

  if (sqlmap_level.checked) {
    if (level.value !== "") {
      sqlmap_result += " " + sqlmap_level.value + " " + level.value;
    } else {
      sqlmap_result += " " + sqlmap_level.value + " " + "1";
    }
  }

  if (sqlmap_risk.checked) {
    if (risk.value !== "") {
      sqlmap_result += " " + sqlmap_risk.value + " " + risk.value;
    } else {
      sqlmap_result += " " + sqlmap_risk.value + " " + "1";
    }
  }

  // Append value if sqlmap_all is checked
  if (sqlmap_all.checked) {
    sqlmap_result += " " + sqlmap_all.value;
  }

  // Append value if sqlmap_current_user is checked
  if (sqlmap_current_user.checked) {
    sqlmap_result += " " + sqlmap_current_user.value;
  }

  // Append value if sqlmap_current_db is checked
  if (sqlmap_current_db.checked) {
    sqlmap_result += " " + sqlmap_current_db.value;
  }

  // Append value if sqlmap_password is checked
  if (sqlmap_password.checked) {
    sqlmap_result += " " + sqlmap_password.value;
  }

  // Append value if sqlmap_database is checked
  if (sqlmap_database.checked) {
    sqlmap_result += " " + sqlmap_database.value;
  }

  // Append value if sqlmap_tables is checked
  if (sqlmap_tables.checked) {
    sqlmap_result += " " + sqlmap_tables.value;
  }

  // Append value if sqlmap_columns is checked
  if (sqlmap_columns.checked) {
    sqlmap_result += " " + sqlmap_columns.value;
  }

  // Append value if sqlmap_schema is checked
  if (sqlmap_schema.checked) {
    sqlmap_result += " " + sqlmap_schema.value;
  }

  // Append value if sqlmap_dump is checked
  if (sqlmap_dump.checked) {
    sqlmap_result += " " + sqlmap_dump.value;
  }

  // Append value if sqlmap_dump_all is checked
  if (sqlmap_dump_all.checked) {
    sqlmap_result += " " + sqlmap_dump_all.value;
  }

  // Append value if sqlmap_DB is checked
  if (sqlmap_DB.checked) {
    sqlmap_result += " " + sqlmap_DB.value;
  }

  // Append value if sqlmap_TBL is checked
  if (sqlmap_TBL.checked) {
    sqlmap_result += " " + sqlmap_TBL.value;
  }

  // Append value if sqlmap_COL is checked
  if (sqlmap_COL.checked) {
    sqlmap_result += " " + sqlmap_COL.value;
  }

  // Disable or enable specific options checkboxes based on the state of sqlmap_all
  var specificOptionsCheckboxes = [sqlmap_current_user, sqlmap_current_db, sqlmap_password, sqlmap_database, sqlmap_tables, sqlmap_columns, sqlmap_schema, sqlmap_dump, sqlmap_dump_all, sqlmap_DB, sqlmap_TBL, sqlmap_COL];
  specificOptionsCheckboxes.forEach(function (checkbox) {
    checkbox.disabled = sqlmap_all.checked;
  });


  if (sqlmap_shell.checked) {
    sqlmap_result += " " + sqlmap_shell.value;
  }

  if (sqlmap_pwn.checked) {
    sqlmap_result += " " + sqlmap_pwn.value;
  }

  if (sqlmap_batch.checked) {
    sqlmap_result += " " + sqlmap_batch.value;
  }

  if (sqlmap_flush.checked) {
    sqlmap_result += " " + sqlmap_flush.value;
  }

  document.getElementById("Simple-SQLmap").value = sqlmap_result;
}

function CopyToClip(event) {
  var buttonid = event.target.getAttribute("data-id");
  var copyText = document.getElementById(buttonid);
  navigator.clipboard.writeText(copyText.value);

  var comment = event.target.querySelector(".commenttext");
  comment.innerHTML = "Copied!";

}

// Copy button feedback reset
function ResetToClip(event) {
  var comment = event.target.querySelector(".commenttext");
  comment.innerHTML = "Copy to Clipboard";
}

function DisableEnableInput() {

  var verbosity_input = document.getElementById("Verbosity");
  var sqlmap_verbose = document.getElementById("SQLmap-verbose");

  var target_url_input = document.getElementById("target-url");
  var sqlmap_target = document.getElementById("SQLmap-target");

  var googledork_input = document.getElementById("googledork");
  var sqlmap_dorking = document.getElementById("SQLmap-dorking");

  var request_data_input = document.getElementById("request-data");
  var sqlmap_data = document.getElementById("SQLmap-data");

  var request_cookie_input = document.getElementById("request-cookie");
  var sqlmap_cookie = document.getElementById("SQLmap-cookie");

  var request_proxy_input = document.getElementById("request-proxy");
  var sqlmap_proxy = document.getElementById("SQLmap-proxy");

  var request_proxy_input = document.getElementById("request-proxy");
  var sqlmap_proxy = document.getElementById("SQLmap-proxy");

  var injection_parameter = document.getElementById("injection-parameter");
  var sqlmap_parameter = document.getElementById("SQLmap-parameter");

  var dbms_types = document.getElementById("dbms-types");
  var sqlmap_dbms = document.getElementById("SQLmap-dbms");

  var level = document.getElementById("level");
  var sqlmap_level = document.getElementById("SQLmap-level");

  var risk = document.getElementById("risk");
  var sqlmap_risk = document.getElementById("SQLmap-risk");

  // Enable/disable verbosity input based on the verbose checkbox
  verbosity_input.disabled = !sqlmap_verbose.checked;
  if (!sqlmap_verbose.checked) {
    verbosity_input.value = ""; // Optionally reset value when disabled
  }

  // Enable/disable verbosity input based on the verbose checkbox
  target_url_input.disabled = !sqlmap_target.checked;
  if (!sqlmap_target.checked) {
    target_url_input.value = ""; // Reset value when disabled
  }

  googledork_input.disabled = !sqlmap_dorking.checked;
  if (!sqlmap_dorking.checked) {
    googledork_input.value = ""; // Reset value when disabled
  }

  request_data_input.disabled = !sqlmap_data.checked;
  if (!sqlmap_data.checked) {
    request_data_input.value = ""; // Reset value when disabled
  }

  request_cookie_input.disabled = !sqlmap_cookie.checked;
  if (!sqlmap_cookie.checked) {
    request_cookie_input.value = ""; // Reset value when disabled
  }

  request_proxy_input.disabled = !sqlmap_proxy.checked;
  if (!sqlmap_proxy.checked) {
    request_proxy_input.value = ""; // Reset value when disabled
  }

  injection_parameter.disabled = !sqlmap_parameter.checked;
  if (!sqlmap_parameter.checked) {
    injection_parameter.value = ""; // Reset value when disabled
  }

  dbms_types.disabled = !sqlmap_dbms.checked;
  if (!sqlmap_dbms.checked) {
    dbms_types.value = ""; // Reset value when disabled
  }

  level.disabled = !sqlmap_level.checked;
  if (!sqlmap_level.checked) {
    level.value = ""; // Optionally reset value when disabled
  }

  risk.disabled = !sqlmap_risk.checked;
  if (!sqlmap_risk.checked) {
    risk.value = ""; // Optionally reset value when disabled
  }
}

function DBMSTypes() {
  var options = [
    { value: "mysql", text: "MySQL" },
    { value: "oracle", text: "OracleDB" },
    { value: "postgresql", text: "PostgreSQL" },
    { value: "microsoft-sql-server", text: "Microsoft SQL Server" },
    { value: "microsoft-access", text: "Microsoft Access" },
    { value: "ibm-db2", text: "IBM DB2" },
    { value: "firebird", text: "Firebird" },
    { value: "sybase", text: "Sybase" },
    { value: "sapmaxdb", text: "SAP MaxDB" },
    { value: "informix", text: "Informix" },
    { value: "mariadb", text: "MariaDB" },
    { value: "memsql", text: "MemSQL" },
    { value: "tidb", text: "TiDB" },
    { value: "coachroachdb", text: "CockroachDB" },
    { value: "hsqldb", text: "HSQLDB" },
    { value: "h2", text: "H2" },
    { value: "monetdb", text: "MonetDB" },
    { value: "apache-derby", text: "Apache Derby" },
    { value: "amazon-redshift", text: "Amazon Redshift" },
    { value: "vertica", text: "Vertica" },
    { value: "mckoi", text: "Mckoi" },
    { value: "presto", text: "Presto" },
    { value: "altibase", text: "Altibase" },
    { value: "mimersql", text: "MimerSQL" },
    { value: "cratedb", text: "CrateDB" },
    { value: "greenplum", text: "Greenplum" },
    { value: "drizzle", text: "Drizzle" },
    { value: "apache-ignite", text: "Apache Ignite" },
    { value: "cubrid", text: "Cubrid" },
    { value: "intersystems-cache", text: "InterSystems Cache" },
    { value: "iris", text: "IRIS" },
    { value: "extremedb", text: "eXtremeDB" },
    { value: "frontbase", text: "FrontBase" },
    { value: "raima", text: "Raima Database Manager" },
    { value: "yugabytedb", text: "YugabyteDB" },
    { value: "aurora", text: "Aurora" },
    { value: "opengauss", text: "OpenGauss" },
    { value: "clickhouse", text: "ClickHouse" },
    { value: "virtuoso", text: "Virtuoso" }
  ];

  // Simple Mode
  var dbms_types = document.getElementById("dbms-types");

  options.forEach(function (option) {
    var optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    dbms_types.appendChild(optionElement);
  });

  dbms_types.value = "default";

  // Advanced Mode
  var dbms_types2 = document.getElementById("dbms-types2");

  options.forEach(function (option) {
    var optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    dbms_types2.appendChild(optionElement);
  });

  dbms_types2.value = "default";

}


function TamperTypes() {
  var tampersSelect = document.getElementById("injection-tamper");

  var tampers = [
    "apostrophemask.py",
    "apostrophenullencode.py",
    "appendnullbyte.py",
    "base64encode.py",
    "between.py",
    "bluecoat.py",
    "chardoubleencode.py",
    "commalesslimit.py",
    "commalessmid.py",
    "concat2concatws.py",
    "charencode.py",
    "charunicodeencode.py",
    "equaltolike.py",
    "escapequotes.py",
    "greatest.py",
    "halfversionedmorekeywords.py",
    "ifnull2ifisnull.py",
    "modsecurityversioned.py",
    "modsecurityzeroversioned.py",
    "multiplespaces.py",
    "nonrecursivereplacement.py",
    "percentage.py",
    "overlongutf8.py",
    "randomcase.py",
    "randomcomments.py",
    "securesphere.py",
    "sp_password.py",
    "space2comment.py",
    "space2dash.py",
    "space2hash.py",
    "space2morehash.py",
    "space2mssqlblank.py",
    "space2mssqlhash.py",
    "space2mysqlblank.py",
    "space2mysqldash.py",
    "space2plus.py",
    "space2randomblank.py",
    "symboliclogical.py",
    "unionalltounion.py",
    "unmagicquotes.py",
    "uppercase.py",
    "varnish.py",
    "versionedkeywords.py",
    "versionedmorekeywords.py",
    "xforwardedfor.py"
  ];

  var options = tampers.map(function (tamper) {
    return { value: tamper.replace(".py", ""), text: tamper };
  });

  options.forEach(function (option) {
    var optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    tampersSelect.appendChild(optionElement);
  });

  tampersSelect.value = "default";

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

function Initial_Setup() {

  DBMSTypes();
  TamperTypes();
  SetSQLmap();
  DisableEnableInput();
}

document.addEventListener("DOMContentLoaded", function () {

  Initial_Setup();

  // Default Opening the first tab
  document.getElementById("SimpleOpen").click();

  // to add onmouseleave and onclick into all copy button
  var cpbtns = document.querySelectorAll("button[id^='Copy']");
  for (var i = 0; i < cpbtns.length; i++) {
    cpbtns[i].addEventListener("mouseleave", ResetToClip);
    cpbtns[i].addEventListener("click", CopyToClip);
  }



  var elementIDs = [
    { id: "SQLmap-version", event: "change", action: SetSQLmap },
    { id: "SQLmap-verbose", event: "change", action: SetSQLmap },
    { id: "Verbosity", event: "input" }, // Removed trailing space
    { id: "SQLmap-wizard", event: "change" },
    { id: "SQLmap-update", event: "change" },
    { id: "SQLmap-purge", event: "change" },
    { id: "SQLmap-tampers", event: "change" },
    { id: "SQLmap-dependencies", event: "change" },
    { id: "SQLmap-target", event: "change" },
    { id: "target-url", event: "input" },
    { id: "SQLmap-dorking", event: "change" },
    { id: "googledork", event: "input" },
    { id: "SQLmap-data", event: "change" },
    { id: "request-data", event: "input" },
    { id: "SQLmap-cookie", event: "change" },
    { id: "request-cookie", event: "input" },
    { id: "SQLmap-proxy", event: "change" },
    { id: "request-proxy", event: "input" },
    { id: "SQLmap-random-agent", event: "change" },
    { id: "SQLmap-tor", event: "change" },
    { id: "SQLmap-check-tor", event: "change" },
    { id: "SQLmap-parameter", event: "change" },
    { id: "injection-parameter", event: "input" },
    { id: "SQLmap-dbms", event: "change" },
    { id: "dbms-types", event: "input" },
    { id: "SQLmap-level", event: "change" },
    { id: "level", event: "input" },
    { id: "SQLmap-risk", event: "change" },
    { id: "risk", event: "input" },
    { id: "SQLmap-all", event: "change" },
    { id: "SQLmap-current-user", event: "change" },
    { id: "SQLmap-current-db", event: "change" },
    { id: "SQLmap-password", event: "change" },
    { id: "SQLmap-database", event: "change" },
    { id: "SQLmap-tables", event: "change" },
    { id: "SQLmap-columns", event: "change" },
    { id: "SQLmap-schema", event: "change" },
    { id: "SQLmap-dump", event: "change" },
    { id: "SQLmap-dump-all", event: "change" },
    { id: "SQLmap-DB", event: "change" },
    { id: "SQLmap-TBL", event: "change" },
    { id: "SQLmap-COL", event: "change" },
    { id: "SQLmap-Shell", event: "change" },
    { id: "SQLmap-Pwn", event: "change" },
    { id: "SQLmap-Batch", event: "change" },
    { id: "SQLmap-Flush", event: "change" },
    // Add other elements and corresponding functions if necessary
  ];

  elementIDs.forEach(function (elementID) {
    document.getElementById(elementID.id).addEventListener(elementID.event, function () {
      DisableEnableInput();
      SetSQLmap(); // Corrected function call
    });
  });

  // trigger Light/Dark mode depends on user last view
  var theme = window.localStorage.getItem('data-theme');
  if (theme === 'dark') {
    SwitchColorMode();
  }
  // trigger Light/Dark mode
  document.getElementById('Switch-Color').addEventListener('click', SwitchColorMode);

});

