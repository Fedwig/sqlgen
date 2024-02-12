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
  var verbosity = document.getElementById('Verbosity')
  var sqlmap_wizard = document.getElementById("SQLmap-wizard");
  var sqlmap_update = document.getElementById("SQLmap-update");
  var sqlmap_purge = document.getElementById("SQLmap-purge");
  var sqlmap_tampers = document.getElementById("SQLmap-tampers");
  var sqlmap_dependencies = document.getElementById("SQLmap-dependencies");


  //Target Variables
  var sqlmap_target = document.getElementById("SQLmap-target");
  var sqlmap_dorking = document.getElementById("SQLmap-dorking");
  
  //Request Variables
  var sqlmap_data = document.getElementById("SQLmap-data");
  var sqlmap_cookie = document.getElementById("SQLmap-cookie");
  var sqlmap_random_agent = document.getElementById("SQLmap-random-agent");
  var sqlmap_proxy = document.getElementById("SQLmap-proxy");
  var sqlmap_tor = document.getElementById("SQLmap-tor");
  var sqlmap_check_tor = document.getElementById("SQLmap-check-tor");

  //Injection Variables
  var sqlmap_parameter = document.getElementById("SQLmap-parameter");
  var sqlmap_dbms = document.getElementById("SQLmap-dependencies");


  //Detection Variables
  var sqlmap_level = document.getElementById("SQLmap-level");
  var sqlmap_risk = document.getElementById("SQLmap-risk");

  //Enumeration Variables
  var sqlmap_all = document.getElementById("SQLmap-all");
  var sqlmap_current_user = document.getElementById("SQLmap-current-user");
  var sqlmap_current_db = document.getElementById("SQLmap-current-db");
  var sqlmap_password = document.getElementById("SQLmap-password");
  var sqlmap_database = document.getElementById("SQLmap-database");
  var sqlmap_columns = document.getElementById("SQLmap-columns");
  var sqlmap_schema = document.getElementById("SQLmap-schema");
  var sqlmap_dump = document.getElementById("SQLmap-dump");
  var sqlmap_dump_all = document.getElementById("SQLmap-dump-all");
  var sqlmap_DB = document.getElementById("SQLmap-DB");
  var sqlmap_TBL = document.getElementById("SQLmap-TBL");
  var sqlmap_COL = document.getElementById("SQLmap-COL");

  //OS Access Variables
  var sqlmap_os = document.getElementById("SQLmap-OS");
  var sqlmap_Pwn = document.getElementById("SQLmap-Pwn");

  //General Variables
  var sqlmap_batch = document.getElementById("SQLmap-Batch");
  var sqlmap_flush = document.getElementById("SQLmap-Flush");


  
  // Initialize SQLmap command
  var sqlmap_result = "sqlmap";

  sqlmap_version.value = "--version";
  sqlmap_verbose.value = "-v";

  // Check if the SQLmap version checkbox is checked
  if (sqlmap_version.checked) {
    sqlmap_result += " " + sqlmap_version.value;
  }
  
  // Append verbose command based on checkbox and input value
  if (sqlmap_verbose.checked) {
    if (verbosity.value !== "") {
      sqlmap_result += " " + sqlmap_verbose.value + " " + verbosity.value;
    } else {
      sqlmap_result += " " + sqlmap_verbose.value;
    }
  }
  
  document.getElementById("Advance-SQLmap").value = sqlmap_result;
}
  
function DisableEnableInput() {
  var verbosityInput = document.getElementById("Verbosity");
  var sqlmapVerboseCheckbox = document.getElementById("SQLmap-verbose");

  // Enable/disable verbosity input based on the verbose checkbox
  verbosityInput.disabled = !sqlmapVerboseCheckbox.checked;
  if (!sqlmapVerboseCheckbox.checked) {
    verbosityInput.value = ""; // Optionally reset value when disabled
  }
}

function DBMSTypes() {
  var options = [
    { value: "mysql", text: "MySQL" },
    { value: "oracle", text: "OracleDB" },
    { value: "postgresql", text: "PostgreSQL" },
    { value: "microsoft-sql-server", text: "Microsoft SQL Server" },
    { value: "microsoft-access", text: "Microsoft Access" },
    { value: "ibm-db2", text: "SQLite" },
    { value: "firebird", text: "Firebird" },
    { value: "sybase", text: "Sybase" },
    { value: "sapmaxdb", text: "SAPMaxDB" },
    { value: "informix", text: "Informix" },
    { value: "mariadb", text: "MariaDB" },
    { value: "memsql", text: "MemSQL" },
    { value: "tidb", text: "TiDB" },
    { value: "coachroachdb", text: "CochroachDB" },
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
    { value: "apache-ignite", text: "Apache Ignite"},
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
  // Assuming DBMSTypes is correctly defined elsewhere
  DBMSTypes();
  
  // Set initial SQLmap command
  SetSQLmap();
  DisableEnableInput();

  var elementIDs = [
    { id: "SQLmap-version", event: "change", action: SetSQLmap },
    { id: "SQLmap-verbose", event: "change", action: SetSQLmap },
    { id: "Verbosity", event: "input" }, // Removed trailing space
    // Add other elements and corresponding functions if necessary
  ];

  elementIDs.forEach(function (elementID) {
    document.getElementById(elementID.id).addEventListener(elementID.event, function () {
      DisableEnableInput();
      SetSQLmap(); // Corrected function call
    });
  });
});

