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

function SetSimpleSQLmap() {

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
  var db_enum = document.getElementById("db-enum");
  var sqlmap_TBL = document.getElementById("SQLmap-TBL");
  var tbl_enum = document.getElementById("tbl-enum");
  var sqlmap_COL = document.getElementById("SQLmap-COL");
  var col_enum = document.getElementById("col-enum");

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
  sqlmap_password.value = "--passwords";
  sqlmap_database.value = "--database";
  sqlmap_tables.value = "--tables";
  sqlmap_columns.value = "--columns";
  sqlmap_schema.value = "--schema";
  sqlmap_dump.value = "--dump";
  sqlmap_dump_all.value = "--dump-all";
  sqlmap_DB.value = "-D";
  sqlmap_TBL.value = "-T";
  sqlmap_COL.value = "-C";

  //Operating System Access
  sqlmap_shell.value = "--os-shell";
  sqlmap_pwn.value = "--os-pwn";

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
      sqlmap_result += " " + sqlmap_target.value + " " + "\"" + target_url.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_target.value;
    }
  }

  if (sqlmap_dorking.checked) {
    if (googledork.value !== "") {
      sqlmap_result += " " + sqlmap_dorking.value + " " + "\"" + googledork.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_dorking.value;
    }
  }

  if (sqlmap_data.checked) {
    if (request_data.value !== "") {
      sqlmap_result += " " + sqlmap_data.value + "=" + "\"" + request_data.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_data.value;
    }
  }

  if (sqlmap_cookie.checked) {
    if (request_cookie.value !== "") {
      sqlmap_result += " " + sqlmap_cookie.value + "=" + "\"" + request_cookie.value + "\"";
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
      sqlmap_result += " " + sqlmap_parameter.value + " " + "\"" + injection_parameter.value + "\"";
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
    if (db_enum.value !== "") {
      sqlmap_result += " " + sqlmap_DB.value + " " + db_enum.value;
    } else {
      sqlmap_result += " " + sqlmap_DB.value + " ";
    }
  }

  // Append value if sqlmap_TBL is checked
  if (sqlmap_TBL.checked) {
    if (tbl_enum.value !== "") {
      sqlmap_result += " " + sqlmap_TBL.value + " " + tbl_enum.value;
    } else {
      sqlmap_result += " " + sqlmap_TBL.value + " ";
    }
  }

  if (sqlmap_COL.checked) {
    if (col_enum.value !== "") {
      sqlmap_result += " " + sqlmap_COL.value + " " + col_enum.value;
    } else {
      sqlmap_result += " " + sqlmap_COL.value;
    }
  }

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

  // Disable or enable specific options checkboxes based on the state of sqlmap_all
  // var specificOptionsCheckboxes = [sqlmap_current_user, sqlmap_current_db, sqlmap_password, sqlmap_database, sqlmap_tables, sqlmap_columns, sqlmap_schema, sqlmap_dump, sqlmap_dump_all, sqlmap_DB, sqlmap_TBL, sqlmap_COL];
  // specificOptionsCheckboxes.forEach(function (checkbox) {
  //   checkbox.disabled = sqlmap_all.checked;
  // });

  var specificOptionsCheckboxes = [
    sqlmap_current_user, sqlmap_current_db, sqlmap_password,
    sqlmap_database, sqlmap_tables, sqlmap_columns,
    sqlmap_schema, sqlmap_dump, sqlmap_dump_all,
    sqlmap_DB, sqlmap_TBL, sqlmap_COL
  ];

  // Function to handle checkbox change events
  function handleCheckboxChange() {
    var anyChecked = specificOptionsCheckboxes.some(function (checkbox) {
      return checkbox.checked;
    });
    sqlmap_all.disabled = anyChecked;

    if (sqlmap_all.disabled) {
      sqlmap_all.checked = false; // Uncheck sqlmap_all if any specific option is checked
    }
  }

  // Disable specific options checkboxes when sqlmap_all is checked
  sqlmap_all.addEventListener("change", function () {
    specificOptionsCheckboxes.forEach(function (checkbox) {
      checkbox.disabled = sqlmap_all.checked;
    });
  });

  // Add event listener to each specific option checkbox
  specificOptionsCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", handleCheckboxChange);
  });


  document.getElementById("Simple-SQLmap").value = sqlmap_result;
}


function SetAdvanceSQLmap() {

  // Variable Declaration

  // Initialize SQLmap command
  var sqlmap_result = "sqlmap";


  // Target Option Variables

  var sqlmap_adv_target = document.getElementById("SQLmap-adv-target");
  var target_adv_url = document.getElementById("target-adv-url");

  var sqlmap_adv_direct = document.getElementById("SQLmap-adv-direct");
  var target_adv_direct = document.getElementById("target-adv-direct");

  var sqlmap_adv_logfile = document.getElementById("SQLmap-adv-logfile");
  var target_adv_logfile = document.getElementById("target-adv-logfile");

  var sqlmap_adv_bulkfile = document.getElementById("SQLmap-adv-bulkfile");
  var target_adv_bulkfile = document.getElementById("target-adv-bulkfile");

  var sqlmap_adv_requestfile = document.getElementById("SQLmap-adv-requestfile");
  var target_adv_requestfile = document.getElementById("target-adv-requestfile");

  var sqlmap_adv_dorking = document.getElementById("SQLmap-adv-dorking");
  var target_adv_googledork = document.getElementById("target-adv-googledork");

  var sqlmap_adv_configfile = document.getElementById("SQLmap-adv-configfile");
  var target_adv_configfile = document.getElementById("target-adv-configfile");


  // Technique Option Variables

  var sqlmap_adv_technique = document.getElementById("SQLmap-adv-technique");
  var technique_adv_options = document.getElementById("technique-adv-options");

  var sqlmap_adv_time_sec = document.getElementById("SQLmap-adv-time-sec");
  var time_adv_sec = document.getElementById("time-adv-sec");

  var sqlmap_adv_union_cols = document.getElementById("SQLmap-adv-union-cols");
  var union_adv_cols = document.getElementById("union-adv-cols");

  var sqlmap_adv_union_char = document.getElementById("SQLmap-adv-union-char");
  var union_adv_char = document.getElementById("union-adv-char");

  var sqlmap_adv_union_from = document.getElementById("SQLmap-adv-union-from");
  var union_adv_from = document.getElementById("union-adv-from");


  // Request Option Variables  
  var sqlmap_adv_agent = document.getElementById("SQLmap-adv-agent");
  var request_adv_agent = document.getElementById("request-adv-agent");

  var sqlmap_adv_random_agent = document.getElementById("SQLmap-adv-random-agent");

  var sqlmap_adv_header = document.getElementById("SQLmap-adv-header");
  var request_adv_header = document.getElementById("request-adv-header");

  var sqlmap_adv_method = document.getElementById("SQLmap-adv-method");
  var request_adv_method = document.getElementById("request-adv-method");

  var sqlmap_adv_data = document.getElementById("SQLmap-adv-data");
  var request_adv_data = document.getElementById("request-adv-data");

  var sqlmap_adv_param_del = document.getElementById("SQLmap-adv-param-del");
  var request_adv_param_del = document.getElementById("request-adv-param-del");

  var sqlmap_adv_cookie = document.getElementById("SQLmap-adv-cookie");
  var request_adv_cookie = document.getElementById("request-adv-cookie");

  var sqlmap_adv_cookie_del = document.getElementById("SQLmap-adv-cookie-del");
  var request_adv_cookie_del = document.getElementById("request-adv-cookie-del");

  var sqlmap_adv_live_cookies = document.getElementById("SQLmap-adv-live-cookies");
  var request_adv_live_cookies = document.getElementById("request-adv-live-cookies");

  var sqlmap_adv_load_cookies = document.getElementById("SQLmap-adv-load-cookies");
  var request_adv_load_cookies = document.getElementById("request-adv-load-cookies");

  var sqlmap_adv_drop_set_cookie = document.getElementById("SQLmap-adv-drop-set-cookie");

  var sqlmap_adv_delay = document.getElementById("SQLmap-adv-delay");
  var request_adv_delay = document.getElementById("request-adv-delay");

  var sqlmap_adv_timeout = document.getElementById("SQLmap-adv-timeout");
  var request_adv_timeout = document.getElementById("request-adv-timeout");

  var sqlmap_adv_mobile = document.getElementById("SQLmap-adv-mobile");


  // Injection Option Variables
  var sqlmap_adv_parameter = document.getElementById("SQLmap-adv-parameter");
  var injection_adv_parameter = document.getElementById("injection-adv-parameter");

  var sqlmap_adv_skip = document.getElementById("SQLmap-adv-skip");
  var injection_adv_skip = document.getElementById("injection-adv-skip");

  var sqlmap_adv_skip_static = document.getElementById("SQLmap-adv-skip-static");

  var sqlmap_adv_param_exclude = document.getElementById("SQLmap-adv-param-exclude");
  var injection_adv_param_exclude = document.getElementById("injection-adv-param-exclude");

  var sqlmap_adv_dbms = document.getElementById("SQLmap-adv-dbms");
  var dbms_types2 = document.getElementById("dbms-types2");

  var sqlmap_adv_dbms_cred = document.getElementById("SQLmap-adv-dbms-cred");
  var injection_adv_dbms_cred = document.getElementById("injection-adv-dbms-cred");

  var sqlmap_adv_dbms_os = document.getElementById("SQLmap-adv-dbms-os")
  var injection_adv_os = document.getElementById("injection-adv-os");

  var sqlmap_adv_invalid_bignum = document.getElementById("SQLmap-adv-invalid-bignum");

  var sqlmap_adv_invalid_logical = document.getElementById("SQLmap-adv-invalid-logical");

  var sqlmap_adv_invalid_string = document.getElementById("SQLmap-adv-invalid-string");

  var sqlmap_adv_no_cast = document.getElementById("SQLmap-adv-no-cast");

  var sqlmap_adv_no_escape = document.getElementById("SQLmap-adv-no-escape");

  var sqlmap_adv_inj_prefix = document.getElementById("SQLmap-adv-inj-prefix");
  var injection_adv_prefix = document.getElementById("injection-adv-prefix");

  var sqlmap_adv_inj_suffix = document.getElementById("SQLmap-adv-inj-suffix");
  var injection_adv_suffix = document.getElementById("injection-adv-suffix");

  var sqlmap_adv_inj_tamper = document.getElementById("SQLmap-adv-inj-tamper");
  var injection_adv_tamper = document.getElementById("injection-adv-tamper");


  //Optimization Options
  var sqlmap_adv_optimization = document.getElementById("SQLmap-adv-optimization");
  var sqlmap_adv_predict_output = document.getElementById("SQLmap-adv-predict-output");
  var sqlmap_adv_keep_alive = document.getElementById("SQLmap-adv-keep-alive");
  var sqlmap_adv_null_connection = document.getElementById("SQLmap-adv-null-connection");
  var sqlmap_adv_threads = document.getElementById("SQLmap-adv-threads");
  var threads_input = document.getElementById("threads");


  // Detection Options
  var sqlmap_adv_level = document.getElementById("SQLmap-adv-level");
  var detection_level = document.getElementById("detection-level");

  var sqlmap_adv_risk = document.getElementById("SQLmap-adv-risk");
  var detection_risk = document.getElementById("detection-risk");

  var sqlmap_adv_string = document.getElementById("SQLmap-adv-string");
  var detection_string = document.getElementById("detection-string");

  var sqlmap_adv_not_string = document.getElementById("SQLmap-adv-not-string");
  var detection_not_string = document.getElementById("detection-not-string");

  var sqlmap_adv_regexp = document.getElementById("SQLmap-adv-regexp");
  var detection_regexp = document.getElementById("detection-regexp");

  var sqlmap_adv_code = document.getElementById("SQLmap-adv-code");
  var detection_code = document.getElementById("detection-code");

  var sqlmap_adv_smart = document.getElementById("SQLmap-adv-smart");
  var sqlmap_adv_text_only = document.getElementById("SQLmap-adv-text-only");
  var sqlmap_adv_titles = document.getElementById("SQLmap-adv-titles");


  //Enumeration Options
  var sqlmap_adv_all = document.getElementById("SQLmap-adv-all");
  var sqlmap_adv_banner = document.getElementById("SQLmap-adv-banner");
  var sqlmap_adv_current_user = document.getElementById("SQLmap-adv-current-user");
  var sqlmap_adv_current_db = document.getElementById("SQLmap-adv-current-db");
  var sqlmap_adv_hostname = document.getElementById("SQLmap-adv-hostname");
  var sqlmap_adv_is_dba = document.getElementById("SQLmap-adv-is-dba");
  var sqlmap_adv_users = document.getElementById("SQLmap-adv-users");
  var sqlmap_adv_password = document.getElementById("SQLmap-adv-password");
  var sqlmap_adv_privileges = document.getElementById("SQLmap-adv-privileges");
  var sqlmap_adv_roles = document.getElementById("SQLmap-adv-roles");
  var sqlmap_adv_database = document.getElementById("SQLmap-adv-database");
  var sqlmap_adv_tables = document.getElementById("SQLmap-adv-tables");
  var sqlmap_adv_columns = document.getElementById("SQLmap-adv-columns");
  var sqlmap_adv_schema = document.getElementById("SQLmap-adv-schema");
  var sqlmap_adv_dump = document.getElementById("SQLmap-adv-dump");
  var sqlmap_adv_dump_all = document.getElementById("SQLmap-adv-dump-all");
  var sqlmap_adv_DB = document.getElementById("SQLmap-adv-DB");
  var db_adv_enum = document.getElementById("db-adv-enum");
  var sqlmap_adv_TBL = document.getElementById("SQLmap-adv-TBL");
  var tbl_adv_enum = document.getElementById("tbl-adv-enum");
  var sqlmap_adv_COL = document.getElementById("SQLmap-adv-COL");
  var col_adv_enum = document.getElementById("col-adv-enum");
  var sqlmap_adv_exclude_db = document.getElementById("SQLmap-adv-exclude-db");

  // Brute Force Options
  var sqlmap_adv_common_tables = document.getElementById("SQLmap-adv-common-tables");
  var sqlmap_adv_common_columns = document.getElementById("SQLmap-adv-common-columns");
  var sqlmap_adv_common_files = document.getElementById("SQLmap-adv-common-files");


  //File System Access
  var sqlmap_adv_file_read = document.getElementById("SQLmap-adv-file-read");
  var file_read_name = document.getElementById("file-read-name");

  var sqlmap_adv_file_write = document.getElementById("SQLmap-adv-file-write");
  var file_write_name = document.getElementById("file-write-name");

  var sqlmap_adv_file_dest = document.getElementById("SQLmap-adv-file-dest");
  var file_dest_name = document.getElementById("file-dest-name");


  //Operating System Access
  var sqlmap_adv_os_cmd = document.getElementById("SQLmap-adv-os-cmd");
  var os_cmd_input = document.getElementById("os-cmd-input");

  var sqlmap_adv_os_shell = document.getElementById("SQLmap-os-shell");

  var sqlmap_adv_os_pwn = document.getElementById("SQLmap-os-pwn");

  var sqlmap_adv_os_smbrelay = document.getElementById("SQLmap-adv-os-smbrelay");

  var sqlmap_adv_os_bof = document.getElementById("SQLmap-adv-os-bof");

  var sqlmap_adv_priv_esc = document.getElementById("SQLmap-adv-priv-esc");

  var sqlmap_adv_msf_path = document.getElementById("SQLmap-adv-msf-path");
  var msf_path_input = document.getElementById("msf-path-input");

  var sqlmap_adv_tmp_path = document.getElementById("SQLmap-adv-tmp-path");
  var tmp_path_input = document.getElementById("tmp-path-input");


  //Windows Registry Access
  var sqlmap_adv_reg_read = document.getElementById("SQLmap-adv-reg-read");

  var sqlmap_adv_reg_add = document.getElementById("SQLmap-adv-reg-add");

  var sqlmap_adv_reg_del = document.getElementById("SQLmap-adv-reg-del");

  var sqlmap_adv_reg_key = document.getElementById("SQLmap-adv-reg-key");
  var reg_key_input = document.getElementById("reg-key-input");

  var sqlmap_adv_reg_value = document.getElementById("SQLmap-adv-reg-value");
  var reg_value_input = document.getElementById("reg-value-input");

  var sqlmap_adv_reg_data = document.getElementById("SQLmap-adv-reg-data");
  var reg_data_input = document.getElementById("reg-data-input");

  var sqlmap_adv_reg_type = document.getElementById("SQLmap-adv-reg-type");
  var reg_type_input = document.getElementById("reg-type-input");


  //Miscellaneous Options

  var sqlmap_adv_verbose = document.getElementById("SQLmap-adv-verbose");
  var adv_verbosity = document.getElementById("adv-verbosity");

  var sqlmap_adv_batch = document.getElementById("SQLmap-adv-batch");

  var sqlmap_adv_flush = document.getElementById("SQLmap-adv-flush");

  var sqlmap_adv_mnemonics = document.getElementById("SQLmap-adv-mnemonics");
  var mnemonics_input = document.getElementById("mnemonics-input");

  var sqlmap_adv_alert = document.getElementById("SQLmap-adv-alert");
  var alert_input = document.getElementById("alert-input");

  var sqlmap_adv_beep = document.getElementById("SQLmap-adv-beep");

  var sqlmap_adv_dependencies = document.getElementById("SQLmap-adv-dependencies");

  var sqlmap_adv_disable_coloring = document.getElementById("SQLmap-adv-disable-coloring");

  var sqlmap_adv_list_tampers = document.getElementById("SQLmap-adv-list-tampers");

  var sqlmap_adv_no_logging = document.getElementById("SQLmap-adv-no-logging");

  var sqlmap_adv_offline = document.getElementById("SQLmap-adv-offline");

  var sqlmap_adv_purge = document.getElementById("SQLmap-adv-purge");

  var sqlmap_adv_results_file = document.getElementById("SQLmap-adv-results-file");
  var results_file_input = document.getElementById("results-file-input");

  var sqlmap_adv_shell = document.getElementById("SQLmap-adv-shell");

  var sqlmap_adv_tmp_dir = document.getElementById("SQLmap-adv-tmp-dir");
  var tmp_dir_input = document.getElementById("tmp-dir-input");

  var sqlmap_adv_unstable = document.getElementById("SQLmap-adv-unstable");

  var sqlmap_adv_update = document.getElementById("SQLmap-adv-update");

  var sqlmap_adv_wizard = document.getElementById("SQLmap-adv-wizard");

  //Target Option Values
  sqlmap_adv_target.value = "-u";
  sqlmap_adv_direct.value = "-d";
  sqlmap_adv_logfile.value = "--l";
  sqlmap_adv_bulkfile.value = "--b";
  sqlmap_adv_requestfile.value = "-r";
  sqlmap_adv_dorking.value = "-g";
  sqlmap_adv_configfile.value = "-c";

  //Technique Option Values
  sqlmap_adv_technique.value = "--technique";
  sqlmap_adv_time_sec.value = "--time-sec";
  sqlmap_adv_union_cols.value = "--union-cols";
  sqlmap_adv_union_char.value = "--union-char";
  sqlmap_adv_union_from.value = "--union-from";


  //Request Option Values
  sqlmap_adv_agent.value = "--user-agent";
  sqlmap_adv_random_agent.value = "--random-agent";
  sqlmap_adv_header.value = "--headers";
  sqlmap_adv_method.value = "--method";
  sqlmap_adv_data.value = "--data";
  sqlmap_adv_param_del.value = "--param-del";
  sqlmap_adv_cookie.value = "--cookie";
  sqlmap_adv_cookie_del.value = "--cookie-del";
  sqlmap_adv_live_cookies.value = "--live-cookies";
  sqlmap_adv_load_cookies.value = "--load-cookies";
  sqlmap_adv_drop_set_cookie.value = "--drop-set-cookie";
  sqlmap_adv_delay.value = "--delay";
  sqlmap_adv_timeout.value = "--timeout";
  sqlmap_adv_mobile.value = "--mobile";

  // Injection Option Values
  sqlmap_adv_parameter.value = "--p";
  sqlmap_adv_skip.value = "--skip";
  sqlmap_adv_skip_static.value = "--skip-static";
  sqlmap_adv_param_exclude.value = "--param-exclude";
  sqlmap_adv_dbms.value = "--dbms";
  sqlmap_adv_dbms_cred.value = "--dbms-cred";
  sqlmap_adv_dbms_os.value = "--os";
  sqlmap_adv_invalid_bignum.value = "--invalid-bignum";
  sqlmap_adv_invalid_logical.value = "--invalid-logical";
  sqlmap_adv_invalid_string.value = "--invalid-string";
  sqlmap_adv_no_cast.value = "--no-cast";
  sqlmap_adv_no_escape.value = "--no-escape";
  sqlmap_adv_inj_prefix.value = "--prefix";
  sqlmap_adv_inj_suffix.value = "--suffix";
  sqlmap_adv_inj_tamper.value = "--tamper";


  // Optimization Option Values
  sqlmap_adv_optimization.value = "-o";
  sqlmap_adv_predict_output.value = "--predict-output";
  sqlmap_adv_keep_alive.value = "--keep-alive";
  sqlmap_adv_null_connection.value = "--null-connection";
  sqlmap_adv_threads.value = "--threads";

  // Detection Option Values
  sqlmap_adv_level.value = "--level";
  sqlmap_adv_risk.value = "--risk";
  sqlmap_adv_string.value = "--string";
  sqlmap_adv_not_string.value = "--not-string";
  sqlmap_adv_regexp.value = "--regexp";
  sqlmap_adv_code.value = "--code";
  sqlmap_adv_smart.value = "--smart";
  sqlmap_adv_text_only.value = "--text-only";
  sqlmap_adv_titles.value = "--titles";

  // Enumeration Option Values
  sqlmap_adv_all.value = "--all";
  sqlmap_adv_banner.value = "--banner";
  sqlmap_adv_current_user.value = "--current-user";
  sqlmap_adv_current_db.value = "--current-db";
  sqlmap_adv_hostname.value = "--hostname";
  sqlmap_adv_is_dba.value = "--is-dba";
  sqlmap_adv_users.value = "--users";
  sqlmap_adv_password.value = "--passwords";
  sqlmap_adv_privileges.value = "--privileges";
  sqlmap_adv_roles.value = "--roles";
  sqlmap_adv_database.value = "--dbs";
  sqlmap_adv_tables.value = "--tables";
  sqlmap_adv_columns.value = "--columns";
  sqlmap_adv_schema.value = "--schema";
  sqlmap_adv_dump.value = "--dump";
  sqlmap_adv_dump_all.value = "--dump-all";
  sqlmap_adv_DB.value = "-D";
  sqlmap_adv_TBL.value = "-T";
  sqlmap_adv_COL.value = "-C";
  sqlmap_adv_exclude_db.value = "--exclude-sysdbs";

  //Brute Force Option Values
  sqlmap_adv_common_tables.value = "--common-tables";
  sqlmap_adv_common_columns.value = "--common-columns";
  sqlmap_adv_common_files.value = "--common-files";

  //File System Access Values
  sqlmap_adv_file_read.value = "--file-read";
  sqlmap_adv_file_write.value = "--file-write";
  sqlmap_adv_file_dest.value = "--file-dest";

  //Operating System Access Values
  sqlmap_adv_os_cmd.value = "--os-cmd";
  sqlmap_adv_os_shell.value = "--os-shell";
  sqlmap_adv_os_pwn.value = "--os-pwn";
  sqlmap_adv_os_smbrelay.value = "--os-smbrelay";
  sqlmap_adv_os_bof.value = "--os-bof";
  sqlmap_adv_priv_esc.value = "--priv-esc";
  sqlmap_adv_msf_path.value = "--msf-path";
  sqlmap_adv_tmp_path.value = "--tmp-path";


  //Windows Registry Access Values
  sqlmap_adv_reg_read.value = "--reg-read";
  sqlmap_adv_reg_add.value = "--reg-add";
  sqlmap_adv_reg_del.value = "--reg-del";
  sqlmap_adv_reg_key.value = "--reg-key";
  sqlmap_adv_reg_value.value = "--reg-value";
  sqlmap_adv_reg_data.value = "--reg-data";
  sqlmap_adv_reg_type.value = "--reg-type";


  //Miscellaneous Options
  sqlmap_adv_verbose.value = "-v";
  sqlmap_adv_batch.value = "--batch";
  sqlmap_adv_flush.value = "--flush";
  sqlmap_adv_mnemonics.value = "--mnemonics";
  sqlmap_adv_alert.value = "--alert";
  sqlmap_adv_beep.value = "--beep";
  sqlmap_adv_dependencies.value = "--dependencies";
  sqlmap_adv_disable_coloring.value = "--disable-coloring";
  sqlmap_adv_list_tampers.value = "--list-tampers";
  sqlmap_adv_no_logging.value = "--no-logging";
  sqlmap_adv_offline.value = "--offline";
  sqlmap_adv_purge.value = "--purge";
  sqlmap_adv_results_file.value = "--results-file";
  sqlmap_adv_shell.value = "--os-shell";
  sqlmap_adv_tmp_dir.value = "--tmp-dir";
  sqlmap_adv_unstable.value = "--unstable";
  sqlmap_adv_update.value = "--update";
  sqlmap_adv_wizard.value = "--wizard";

  //Target Options
  if (sqlmap_adv_target.checked) {
    if (target_adv_url.value !== "") {
      sqlmap_result += " " + sqlmap_adv_target.value + " " + "\"" + target_adv_url.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_target.value;
    }
  }

  if (sqlmap_adv_direct.checked) {
    if (target_adv_direct.value !== "") {
      sqlmap_result += " " + sqlmap_adv_direct.value + " " + target_adv_direct.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_direct.value;
    }
  }

  if (sqlmap_adv_logfile.checked) {
    if (target_adv_logfile.value !== "") {
      sqlmap_result += " " + sqlmap_adv_logfile.value + " " + target_adv_logfile.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_logfile.value;
    }
  }

  if (sqlmap_adv_bulkfile.checked) {
    if (target_adv_bulkfile.value !== "") {
      sqlmap_result += " " + sqlmap_adv_bulkfile.value + " " + target_adv_bulkfile.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_bulkfile.value;
    }
  }

  if (sqlmap_adv_requestfile.checked) {
    if (target_adv_requestfile.value !== "") {
      sqlmap_result += " " + sqlmap_adv_requestfile.value + " " + target_adv_requestfile.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_requestfile.value;
    }
  }

  if (sqlmap_adv_dorking.checked) {
    if (target_adv_googledork.value !== "") {
      sqlmap_result += " " + sqlmap_adv_dorking.value + " " + "\"" + target_adv_googledork.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_dorking.value;
    }
  }

  if (sqlmap_adv_configfile.checked) {
    if (target_adv_configfile.value !== "") {
      sqlmap_result += " " + sqlmap_adv_configfile.value + "=" + target_adv_configfile.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_configfile.value;
    }
  }

  // Technique Options
  if (sqlmap_adv_technique.checked) {
    if (technique_adv_options.value !== "") {
      sqlmap_result += " " + sqlmap_adv_technique.value + "=" + technique_adv_options.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_technique.value;
    }
  }

  if (sqlmap_adv_time_sec.checked) {
    if (time_adv_sec.value !== "") {
      sqlmap_result += " " + sqlmap_adv_time_sec.value + "=" + time_adv_sec.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_time_sec.value;
    }
  }

  if (sqlmap_adv_union_cols.checked) {
    if (union_adv_cols.value !== "") {
      sqlmap_result += " " + sqlmap_adv_union_cols.value + "=" + union_adv_cols.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_union_cols.value;
    }
  }

  if (sqlmap_adv_union_char.checked) {
    if (union_adv_char.value !== "") {
      sqlmap_result += " " + sqlmap_adv_union_char.value + "=" + union_adv_char.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_union_char.value;
    }
  }

  if (sqlmap_adv_union_from.checked) {
    if (union_adv_from.value !== "") {
      sqlmap_result += " " + sqlmap_adv_union_from.value + "=" + union_adv_from.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_union_from.value;
    }
  }

  // Request Options
  if (sqlmap_adv_agent.checked) {
    if (request_adv_agent.value !== "") {
      sqlmap_result += " " + sqlmap_adv_agent.value + " " + "\"" + request_adv_agent.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_agent.value;
    }
  }

  if (sqlmap_adv_random_agent.checked) {
    sqlmap_result += " " + sqlmap_adv_random_agent.value;
  }

  if (sqlmap_adv_header.checked) {
    if (request_adv_header.value !== "") {
      sqlmap_result += " " + sqlmap_adv_header.value + "=" + "\"" + request_adv_header.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_header.value;
    }
  }

  if (sqlmap_adv_method.checked) {
    if (request_adv_method.value !== "") {
      sqlmap_result += " " + sqlmap_adv_method.value + " " + request_adv_method.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_method.value;
    }
  }

  if (sqlmap_adv_data.checked) {
    if (request_adv_data.value !== "") {
      sqlmap_result += " " + sqlmap_adv_data.value + " " + "\"" + request_adv_data.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_data.value;
    }
  }

  if (sqlmap_adv_param_del.checked) {
    if (request_adv_param_del.value !== "") {
      sqlmap_result += " " + sqlmap_adv_param_del.value + "=" + "\"" + request_adv_param_del.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_param_del.value;
    }
  }

  if (sqlmap_adv_cookie.checked) {
    if (request_adv_cookie.value !== "") {
      sqlmap_result += " " + sqlmap_adv_cookie.value + "=" + "\"" + request_adv_cookie.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_cookie.value;
    }
  }

  if (sqlmap_adv_cookie_del.checked) {
    if (request_adv_cookie_del.value !== "") {
      sqlmap_result += " " + sqlmap_adv_cookie_del.value + "=" + "\"" + request_adv_cookie_del.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_cookie_del.value;
    }
  }

  if (sqlmap_adv_live_cookies.checked) {
    if (request_adv_live_cookies.value !== "") {
      sqlmap_result += " " + sqlmap_adv_live_cookies.value + " " + request_adv_live_cookies.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_live_cookies.value;
    }
  }

  if (sqlmap_adv_load_cookies.checked) {
    if (request_adv_load_cookies.value !== "") {
      sqlmap_result += " " + sqlmap_adv_load_cookies.value + " " + request_adv_load_cookies.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_load_cookies.value;
    }
  }

  if (sqlmap_adv_drop_set_cookie.checked) {
    sqlmap_result += " " + sqlmap_adv_drop_set_cookie.value;
  }

  if (sqlmap_adv_delay.checked) {
    if (request_adv_delay.value !== "") {
      sqlmap_result += " " + sqlmap_adv_delay.value + "=" + request_adv_delay.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_delay.value;
    }
  }

  if (sqlmap_adv_timeout.checked) {
    if (request_adv_timeout.value !== "") {
      sqlmap_result += " " + sqlmap_adv_timeout.value + "=" + request_adv_timeout.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_timeout.value;
    }
  }


  if (sqlmap_adv_mobile.checked) {
    sqlmap_result += " " + sqlmap_adv_mobile.value;
  }


  // Injection Option
  if (sqlmap_adv_parameter.checked) {
    if (injection_adv_parameter.value !== "") {
      sqlmap_result += " " + sqlmap_adv_parameter.value + " " + "\"" + injection_adv_parameter.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_parameter.value;
    }
  }

  if (sqlmap_adv_skip.checked) {
    if (injection_adv_skip.value !== "") {
      sqlmap_result += " " + sqlmap_adv_skip.value + " " + injection_adv_skip.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_skip.value;
    }
  }

  if (sqlmap_adv_skip_static.checked) {
    sqlmap_result += " " + sqlmap_adv_skip_static.value;
  }

  if (sqlmap_adv_param_exclude.checked) {
    if (injection_adv_param_exclude.value !== "") {
      sqlmap_result += " " + sqlmap_adv_param_exclude.value + "=" + "\"" + injection_adv_param_exclude.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_param_exclude.value;
    }
  }

  if (sqlmap_adv_dbms.checked) {
    if (dbms_types2.value !== "") {
      sqlmap_result += " " + sqlmap_adv_dbms.value + "=" + dbms_types2.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_dbms.value;
    }
  }

  if (sqlmap_adv_dbms_cred.checked) {
    if (injection_adv_dbms_cred.value !== "") {
      sqlmap_result += " " + sqlmap_adv_dbms_cred.value + "=" + injection_adv_dbms_cred.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_dbms_cred.value;
    }
  }

  if (sqlmap_adv_dbms_os.checked) {
    if (injection_adv_os.value !== "") {
      sqlmap_result += " " + sqlmap_adv_dbms_os.value + "=" + injection_adv_os.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_dbms_os.value;
    }
  }

  if (sqlmap_adv_invalid_bignum.checked) {
    sqlmap_result += " " + sqlmap_adv_invalid_bignum.value;
  }

  if (sqlmap_adv_invalid_logical.checked) {
    sqlmap_result += " " + sqlmap_adv_invalid_logical.value;
  }


  if (sqlmap_adv_invalid_string.checked) {
    sqlmap_result += " " + sqlmap_adv_invalid_string.value;
  }

  if (sqlmap_adv_no_cast.checked) {
    sqlmap_result += " " + sqlmap_adv_no_cast.value;
  }

  if (sqlmap_adv_no_escape.checked) {
    sqlmap_result += " " + sqlmap_adv_no_escape.value;
  }

  if (sqlmap_adv_inj_prefix.checked) {
    if (injection_adv_prefix.value !== "") {
      sqlmap_result += " " + sqlmap_adv_inj_prefix.value + "=" + "\"" + injection_adv_prefix.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_inj_prefix.value;
    }
  }

  if (sqlmap_adv_inj_suffix.checked) {
    if (injection_adv_suffix.value !== "") {
      sqlmap_result += " " + sqlmap_adv_inj_suffix.value + "=" + "\"" + injection_adv_suffix.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_inj_suffix.value;
    }
  }

  if (sqlmap_adv_inj_tamper.checked) {
    if (injection_adv_tamper.value !== "") {
      sqlmap_result += " " + sqlmap_adv_inj_tamper.value + " " + injection_adv_tamper.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_inj_tamper.value;
    }
  }


  // Optimization Options

  if (sqlmap_adv_optimization.checked) {
    sqlmap_result += " " + sqlmap_adv_optimization.value;
  }

  if (sqlmap_adv_predict_output.checked) {
    sqlmap_result += " " + sqlmap_adv_predict_output.value;
  }

  if (sqlmap_adv_keep_alive.checked) {
    sqlmap_result += " " + sqlmap_adv_keep_alive.value;
  }

  if (sqlmap_adv_null_connection.checked) {
    sqlmap_result += " " + sqlmap_adv_null_connection.value;
  }

  if (sqlmap_adv_threads.checked) {
    if (threads_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_threads.value + "=" + threads_input.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_threads.value;
    }
  }

  // Detection Options
  if (sqlmap_adv_level.checked) {
    if (detection_level.value !== "") {
      sqlmap_result += " " + sqlmap_adv_level.value + "=" + detection_level.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_level.value + "=" + "1";
    }
  }

  if (sqlmap_adv_risk.checked) {
    if (detection_risk.value !== "") {
      sqlmap_result += " " + sqlmap_adv_risk.value + "=" + detection_risk.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_risk.value + "=" + "1";
    }
  }

  if (sqlmap_adv_string.checked) {
    if (detection_string.value !== "") {
      sqlmap_result += " " + sqlmap_adv_string.value + "=" + "\"" + detection_string.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_string.value;
    }
  }

  if (sqlmap_adv_not_string.checked) {
    if (detection_not_string.value !== "") {
      sqlmap_result += " " + sqlmap_adv_not_string.value + "=" + "\"" + detection_not_string.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_not_string.value;
    }
  }

  if (sqlmap_adv_regexp.checked) {
    if (detection_regexp.value !== "") {
      sqlmap_result += " " + sqlmap_adv_regexp.value + "=" + "\"" + detection_regexp.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_regexp.value;
    }
  }

  if (sqlmap_adv_code.checked) {
    if (detection_code.value !== "") {
      sqlmap_result += " " + sqlmap_adv_code.value + "=" + detection_code.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_code.value;
    }
  }

  if (sqlmap_adv_smart.checked) {
    sqlmap_result += " " + sqlmap_adv_smart.value;
  }

  if (sqlmap_adv_text_only.checked) {
    sqlmap_result += " " + sqlmap_adv_text_only.value;
  }

  if (sqlmap_adv_titles.checked) {
    sqlmap_result += " " + sqlmap_adv_titles.value;
  }


  // Enumeration Options
  if (sqlmap_adv_all.checked) {
    sqlmap_result += " " + sqlmap_adv_all.value;
  }

  if (sqlmap_adv_banner.checked) {
    sqlmap_result += " " + sqlmap_adv_banner.value;
  }

  if (sqlmap_adv_current_user.checked) {
    sqlmap_result += " " + sqlmap_adv_current_user.value;
  }

  if (sqlmap_adv_current_db.checked) {
    sqlmap_result += " " + sqlmap_adv_current_db.value;
  }

  if (sqlmap_adv_hostname.checked) {
    sqlmap_result += " " + sqlmap_adv_hostname.value;
  }

  if (sqlmap_adv_is_dba.checked) {
    sqlmap_result += " " + sqlmap_adv_is_dba.value;
  }

  if (sqlmap_adv_users.checked) {
    sqlmap_result += " " + sqlmap_adv_users.value;
  }

  if (sqlmap_adv_password.checked) {
    sqlmap_result += " " + sqlmap_adv_password.value;
  }

  if (sqlmap_adv_privileges.checked) {
    sqlmap_result += " " + sqlmap_adv_privileges.value;
  }

  if (sqlmap_adv_roles.checked) {
    sqlmap_result += " " + sqlmap_adv_roles.value;
  }

  if (sqlmap_adv_database.checked) {
    sqlmap_result += " " + sqlmap_adv_database.value;
  }

  if (sqlmap_adv_tables.checked) {
    sqlmap_result += " " + sqlmap_adv_tables.value;
  }

  if (sqlmap_adv_columns.checked) {
    sqlmap_result += " " + sqlmap_adv_columns.value;
  }

  if (sqlmap_adv_schema.checked) {
    sqlmap_result += " " + sqlmap_adv_schema.value;
  }

  if (sqlmap_adv_dump.checked) {
    sqlmap_result += " " + sqlmap_adv_dump.value;
  }

  if (sqlmap_adv_dump_all.checked) {
    sqlmap_result += " " + sqlmap_adv_dump_all.value;
  }

  if (sqlmap_adv_DB.checked) {
    if (db_adv_enum.value !== "") {
      sqlmap_result += " " + sqlmap_adv_DB.value + " " + db_adv_enum.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_DB.value + " ";
    }
  }

  // Append value if sqlmap_TBL is checked
  if (sqlmap_adv_TBL.checked) {
    if (tbl_adv_enum.value !== "") {
      sqlmap_result += " " + sqlmap_adv_TBL.value + " " + tbl_adv_enum.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_TBL.value + " ";
    }
  }

  if (sqlmap_adv_COL.checked) {
    if (col_adv_enum.value !== "") {
      sqlmap_result += " " + sqlmap_adv_COL.value + " " + col_adv_enum.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_COL.value;
    }
  }

  if (sqlmap_adv_exclude_db.checked) {
    sqlmap_result += " " + sqlmap_adv_exclude_db.value;
  }

  //Brute Force Options
  if (sqlmap_adv_common_tables.checked) {
    sqlmap_result += " " + sqlmap_adv_common_tables.value;
  }

  if (sqlmap_adv_common_columns.checked) {
    sqlmap_result += " " + sqlmap_adv_common_columns.value;
  }

  if (sqlmap_adv_common_files.checked) {
    sqlmap_result += " " + sqlmap_adv_common_files.value;
  }

  // Disable or enable specific options checkboxes based on the state of sqlmap_all
  var specificOptionsCheckboxes = [sqlmap_adv_banner, sqlmap_adv_current_user, sqlmap_adv_current_db, sqlmap_adv_hostname, sqlmap_adv_is_dba, sqlmap_adv_users,
    sqlmap_adv_password, sqlmap_adv_privileges, sqlmap_adv_roles, sqlmap_adv_database, sqlmap_adv_tables, sqlmap_adv_columns, sqlmap_adv_schema, sqlmap_adv_dump,
    sqlmap_adv_dump_all, sqlmap_adv_DB, sqlmap_adv_TBL, sqlmap_adv_COL, sqlmap_adv_exclude_db];
  specificOptionsCheckboxes.forEach(function (checkbox) {
    checkbox.disabled = sqlmap_adv_all.checked;
  });

  // File System Access

  if (sqlmap_adv_file_read.checked) {
    if (file_read_name.value !== "") {
      sqlmap_result += " " + sqlmap_adv_file_read.value + "=" + "\"" + file_read_name.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_file_read.value;
    }
  }

  if (sqlmap_adv_file_write.checked) {
    if (file_write_name.value !== "") {
      sqlmap_result += " " + sqlmap_adv_file_write.value + "=" + "\"" + file_write_name.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_file_write.value;
    }
  }

  if (sqlmap_adv_file_dest.checked) {
    if (file_dest_name.value !== "") {
      sqlmap_result += " " + sqlmap_adv_file_dest.value + "=" + "\"" + file_dest_name.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_file_dest.value;
    }
  }


  // Operating System Access

  if (sqlmap_adv_os_cmd.checked) {
    if (os_cmd_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_os_cmd.value + "=" + "\"" + os_cmd_input.value + "\"";
    } else {
      sqlmap_result += " " + sqlmap_adv_os_cmd.value;
    }
  }

  if (sqlmap_adv_os_shell.checked) {
    sqlmap_result += " " + sqlmap_adv_os_shell.value;
  }

  if (sqlmap_adv_os_pwn.checked) {
    sqlmap_result += " " + sqlmap_adv_os_pwn.value;
  }

  if (sqlmap_adv_os_smbrelay.checked) {
    sqlmap_result += " " + sqlmap_adv_os_smbrelay.value;
  }

  if (sqlmap_adv_os_bof.checked) {
    sqlmap_result += " " + sqlmap_adv_os_bof.value;
  }

  if (sqlmap_adv_priv_esc.checked) {
    sqlmap_result += " " + sqlmap_adv_priv_esc.value;
  }

  if (sqlmap_adv_msf_path.checked) {
    if (msf_path_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_msf_path.value + "=" + msf_path_input.value;
    }
    else {
      sqlmap_result += " " + sqlmap_adv_msf_path.value;
    }
  }

  if (sqlmap_adv_tmp_path.checked) {
    if (tmp_path_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_tmp_path.value + " " + tmp_path_input.value;
    }
    else {
      sqlmap_result += " " + sqlmap_adv_tmp_path.value;
    }
  }


  // Windows Registry Access
  if (sqlmap_adv_reg_read.checked) {
    sqlmap_result += " " + sqlmap_adv_reg_read.value;
  }

  if (sqlmap_adv_reg_add.checked) {
    sqlmap_result += " " + sqlmap_adv_reg_add.value;
  }

  if (sqlmap_adv_reg_del.checked) {
    sqlmap_result += " " + sqlmap_adv_reg_del.value;
  }

  if (sqlmap_adv_reg_value.checked) {
    if (reg_value_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_reg_value.value + "=" + "\"" + reg_value_input.value + "\"";
    }
    else {
      sqlmap_result += " " + sqlmap_adv_reg_value.value;
    }
  }

  if (sqlmap_adv_reg_key.checked) {
    if (reg_key_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_reg_key.value + "=" + "\"" + reg_key_input.value + "\"";
    }
    else {
      sqlmap_result += " " + sqlmap_adv_reg_key.value;
    }
  }


  if (sqlmap_adv_reg_value.checked) {
    if (reg_value_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_reg_value.value + "=" + "\"" + reg_value_input.value + "\"";
    }
    else {
      sqlmap_result += " " + sqlmap_adv_reg_value.value;
    }
  }

  if (sqlmap_adv_reg_data.checked) {
    if (reg_data_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_reg_data.value + "=" + "\"" + reg_data_input.value + "\"";
    }
    else {
      sqlmap_result += " " + sqlmap_adv_reg_data.value;
    }
  }

  if (sqlmap_adv_reg_type.checked) {
    if (reg_type_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_reg_type.value + "=" + "\"" + reg_type_input.value + "\"";
    }
    else {
      sqlmap_result += " " + sqlmap_adv_reg_type.value;
    }
  }

  // Miscellaneous Options
  if (sqlmap_adv_verbose.checked) {
    if (adv_verbosity.value !== "") {
      sqlmap_result += " " + sqlmap_adv_verbose.value + " " + adv_verbosity.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_verbose.value;
    }
  }

  if (sqlmap_adv_batch.checked) {
    sqlmap_result += " " + sqlmap_adv_batch.value;
  }

  if (sqlmap_adv_flush.checked) {
    sqlmap_result += " " + sqlmap_adv_flush.value;
  }

  if (sqlmap_adv_mnemonics.checked) {
    if (mnemonics_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_mnemonics.value + "=" + "\"" + mnemonics_input.value + "\"";
    }
    else {
      sqlmap_result += " " + sqlmap_adv_mnemonics.value;
    }
  }

  if (sqlmap_adv_alert.checked) {
    if (alert_input.value !== "") {
      sqlmap_result += " " + sqlmap_adv_alert.value + "=" + "\"" + alert_input.value + "\"";
    }
    else {
      sqlmap_result += " " + sqlmap_adv_alert.value;
    }
  }

  if (sqlmap_adv_beep.checked) {
    sqlmap_result += " " + sqlmap_adv_beep.value;
  }

  if (sqlmap_adv_dependencies.checked) {
    sqlmap_result += " " + sqlmap_adv_dependencies.value;
  }

  if (sqlmap_adv_disable_coloring.checked) {
    sqlmap_result += " " + sqlmap_adv_disable_coloring.value;
  }

  if (sqlmap_adv_list_tampers.checked) {
    sqlmap_result += " " + sqlmap_adv_list_tampers.value;
  }

  if (sqlmap_adv_no_logging.checked) {
    sqlmap_result += " " + sqlmap_adv_no_logging.value;
  }

  if (sqlmap_adv_offline.checked) {
    sqlmap_result += " " + sqlmap_adv_offline.value;
  }

  if (sqlmap_adv_purge.checked) {
    sqlmap_result += " " + sqlmap_adv_purge.value;
  }

  if (sqlmap_adv_results_file.checked) {
    if (results_file_input !== "") {
      sqlmap_result += " " + sqlmap_adv_results_file.value + "=" + "\"" + results_file_input.value + "\"";
    }
    else {
      sqlmap_result += " " + sqlmap_adv_results_file.value;
    }
  }

  if (sqlmap_adv_shell.checked) {
    sqlmap_result += " " + sqlmap_adv_shell.value;
  }

  if (sqlmap_adv_tmp_dir.checked) {
    if (tmp_dir_input !== "") {
      sqlmap_result += " " + sqlmap_adv_tmp_dir.value + "=" + "\"" + tmp_dir_input.value + "\"";
    }
    else {
      sqlmap_result += " " + sqlmap_adv_tmp_dir.value;
    }
  }

  if (sqlmap_adv_unstable.checked) {
    sqlmap_result += " " + sqlmap_adv_unstable.value;
  }

  if (sqlmap_adv_update.checked) {
    sqlmap_result += " " + sqlmap_adv_update.value;
  }

  if (sqlmap_adv_wizard.checked) {
    sqlmap_result += " " + sqlmap_adv_wizard.value;
  }

  document.getElementById("Advance-SQLmap").value = sqlmap_result;
}


function CopyToClip(event) {
  var buttonid = event.target.getAttribute("data-id");
  var copyText = document.getElementById(buttonid);
  navigator.clipboard.writeText(copyText.value);

  var copy = event.target.querySelector(".copytext");
  copy.innerHTML = "Copied!";

}

// Copy button feedback reset
function ResetToClip(event) {
  var copy = event.target.querySelector(".copytext");
  copy.innerHTML = "Copy to Clipboard";
}


function DisableEnableInput() {

  // Simple Options
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

  var sqlmap_DB = document.getElementById("SQLmap-DB");
  var db_enum = document.getElementById("db-enum");

  var sqlmap_TBL = document.getElementById("SQLmap-TBL");
  var tbl_enum = document.getElementById("tbl-enum");

  var sqlmap_COL = document.getElementById("SQLmap-COL");
  var col_enum = document.getElementById("col-enum");

  // Enable/disable verbosity input based on the verbose checkbox
  verbosity_input.disabled = !sqlmap_verbose.checked;
  if (!sqlmap_verbose.checked) {
    verbosity_input.value = ""; // Optionally reset value when disabled
  }

  // Enable/disable verbosity input based on the verbose checkbox
  target_url_input.disabled = !sqlmap_target.checked;
  if (!sqlmap_target.checked) {
    target_url_input.value = ""; 
  }

  googledork_input.disabled = !sqlmap_dorking.checked;
  if (!sqlmap_dorking.checked) {
    googledork_input.value = ""; 
  }

  request_data_input.disabled = !sqlmap_data.checked;
  if (!sqlmap_data.checked) {
    request_data_input.value = ""; 
  }

  request_cookie_input.disabled = !sqlmap_cookie.checked;
  if (!sqlmap_cookie.checked) {
    request_cookie_input.value = ""; 
  }

  request_proxy_input.disabled = !sqlmap_proxy.checked;
  if (!sqlmap_proxy.checked) {
    request_proxy_input.value = ""; 
  }

  injection_parameter.disabled = !sqlmap_parameter.checked;
  if (!sqlmap_parameter.checked) {
    injection_parameter.value = ""; 
  }

  dbms_types.disabled = !sqlmap_dbms.checked;
  if (!sqlmap_dbms.checked) {
    dbms_types.value = ""; 
  }

  level.disabled = !sqlmap_level.checked;
  if (!sqlmap_level.checked) {
    level.value = ""; // Optionally reset value when disabled
  }

  risk.disabled = !sqlmap_risk.checked;
  if (!sqlmap_risk.checked) {
    risk.value = ""; // Optionally reset value when disabled
  }

  db_enum.disabled = !sqlmap_DB.checked;
  if (!sqlmap_DB.checked) {
    db_enum.value = ""; // Optionally reset value when disabled
  }

  tbl_enum.disabled = !sqlmap_TBL.checked;
  if (!sqlmap_TBL.checked) {
    tbl_enum.value = ""; // Optionally reset value when disabled
  }

  col_enum.disabled = !sqlmap_COL.checked;
  if (!sqlmap_COL.checked) {
    col_enum.value = ""; // Optionally reset value when disabled
  }
  //Advanced Options

  //Target Options Disable/Enable
  var sqlmap_adv_target = document.getElementById("SQLmap-adv-target");
  var target_adv_url = document.getElementById("target-adv-url");

  var sqlmap_adv_direct = document.getElementById("SQLmap-adv-direct");
  var target_adv_direct = document.getElementById("target-adv-direct");

  var sqlmap_adv_logfile = document.getElementById("SQLmap-adv-logfile");
  var target_adv_logfile = document.getElementById("target-adv-logfile");

  var sqlmap_adv_bulkfile = document.getElementById("SQLmap-adv-bulkfile");
  var target_adv_bulkfile = document.getElementById("target-adv-bulkfile");

  var sqlmap_adv_requestfile = document.getElementById("SQLmap-adv-requestfile");
  var target_adv_requestfile = document.getElementById("target-adv-requestfile");

  var sqlmap_adv_dorking = document.getElementById("SQLmap-adv-dorking");
  var target_adv_googledork = document.getElementById("target-adv-googledork");

  var sqlmap_adv_configfile = document.getElementById("SQLmap-adv-configfile");
  var target_adv_configfile = document.getElementById("target-adv-configfile");

  target_adv_url.disabled = !sqlmap_adv_target.checked;
  if (!sqlmap_adv_target.checked) {
    target_adv_url.value = ""; 
  }

  target_adv_direct.disabled = !sqlmap_adv_direct.checked;
  if (!sqlmap_adv_direct.checked) {
    target_adv_direct.value = ""; 
  }

  target_adv_logfile.disabled = !sqlmap_adv_logfile.checked;
  if (!sqlmap_adv_logfile.checked) {
    target_adv_logfile.value = ""; 
  }

  target_adv_bulkfile.disabled = !sqlmap_adv_bulkfile.checked;
  if (!sqlmap_adv_bulkfile.checked) {
    target_adv_bulkfile.value = ""; 
  }

  target_adv_requestfile.disabled = !sqlmap_adv_requestfile.checked;
  if (!sqlmap_adv_requestfile.checked) {
    target_adv_requestfile.value = ""; 
  }

  target_adv_googledork.disabled = !sqlmap_adv_dorking.checked;
  if (!sqlmap_adv_dorking.checked) {
    target_adv_googledork.value = ""; 
  }

  target_adv_configfile.disabled = !sqlmap_adv_configfile.checked;
  if (!sqlmap_adv_configfile.checked) {
    target_adv_configfile.value = ""; 
  }


  //Techniques
  var sqlmap_adv_technique = document.getElementById("SQLmap-adv-technique");
  var technique_adv_options = document.getElementById("technique-adv-options");

  var sqlmap_adv_time_sec = document.getElementById("SQLmap-adv-time-sec");
  var time_adv_sec = document.getElementById("time-adv-sec");

  var sqlmap_adv_union_cols = document.getElementById("SQLmap-adv-union-cols");
  var union_adv_cols = document.getElementById("union-adv-cols");

  var sqlmap_adv_union_char = document.getElementById("SQLmap-adv-union-char");
  var union_adv_char = document.getElementById("union-adv-char");

  var sqlmap_adv_union_from = document.getElementById("SQLmap-adv-union-from");
  var union_adv_from = document.getElementById("union-adv-from");

  technique_adv_options.disabled = !sqlmap_adv_technique.checked;
  if (!sqlmap_adv_technique.checked) {
    technique_adv_options.value = ""; 
  }

  time_adv_sec.disabled = !sqlmap_adv_time_sec.checked;
  if (!sqlmap_adv_time_sec.checked) {
    time_adv_sec.value = ""; 
  }

  union_adv_cols.disabled = !sqlmap_adv_union_cols.checked;
  if (!sqlmap_adv_union_cols.checked) {
    union_adv_cols.value = ""; 
  }

  union_adv_char.disabled = !sqlmap_adv_union_char.checked;
  if (!sqlmap_adv_union_char.checked) {
    union_adv_char.value = ""; 
  }

  union_adv_from.disabled = !sqlmap_adv_union_from.checked;
  if (!sqlmap_adv_union_from.checked) {
    union_adv_from.value = ""; 
  }


  // Request Options Disable/Enable
  var sqlmap_adv_agent = document.getElementById("SQLmap-adv-agent");
  var request_adv_agent = document.getElementById("request-adv-agent");

  var sqlmap_adv_header = document.getElementById("SQLmap-adv-header");
  var request_adv_header = document.getElementById("request-adv-header");

  var sqlmap_adv_method = document.getElementById("SQLmap-adv-method");
  var request_adv_method = document.getElementById("request-adv-method");

  var sqlmap_adv_data = document.getElementById("SQLmap-adv-data");
  var request_adv_data = document.getElementById("request-adv-data");

  var sqlmap_adv_param_del = document.getElementById("SQLmap-adv-param-del");
  var request_adv_param_del = document.getElementById("request-adv-param-del");

  var sqlmap_adv_cookie = document.getElementById("SQLmap-adv-cookie");
  var request_adv_cookie = document.getElementById("request-adv-cookie");

  var sqlmap_adv_cookie_del = document.getElementById("SQLmap-adv-cookie-del");
  var request_adv_cookie_del = document.getElementById("request-adv-cookie-del");

  var sqlmap_adv_live_cookies = document.getElementById("SQLmap-adv-live-cookies");
  var request_adv_live_cookies = document.getElementById("request-adv-live-cookies");

  var sqlmap_adv_load_cookies = document.getElementById("SQLmap-adv-load-cookies");
  var request_adv_load_cookies = document.getElementById("request-adv-load-cookies");

  var sqlmap_adv_delay = document.getElementById("SQLmap-adv-delay");
  var request_adv_delay = document.getElementById("request-adv-delay");

  var sqlmap_adv_timeout = document.getElementById("SQLmap-adv-timeout");
  var request_adv_timeout = document.getElementById("request-adv-timeout");

  request_adv_agent.disabled = !sqlmap_adv_agent.checked;
  if (!sqlmap_adv_agent.checked) {
    request_adv_agent.value = ""; 
  }

  request_adv_header.disabled = !sqlmap_adv_header.checked;
  if (!sqlmap_adv_header.checked) {
    request_adv_header.value = ""; 
  }

  request_adv_method.disabled = !sqlmap_adv_method.checked;
  if (!sqlmap_adv_method.checked) {
    request_adv_method.value = ""; 
  }

  request_adv_data.disabled = !sqlmap_adv_data.checked;
  if (!sqlmap_adv_data.checked) {
    request_adv_data.value = ""; 
  }

  request_adv_param_del.disabled = !sqlmap_adv_param_del.checked;
  if (!sqlmap_adv_param_del.checked) {
    request_adv_param_del.value = ""; 
  }

  request_adv_cookie.disabled = !sqlmap_adv_cookie.checked;
  if (!sqlmap_adv_cookie.checked) {
    request_adv_cookie.value = ""; 
  }

  request_adv_cookie_del.disabled = !sqlmap_adv_cookie_del.checked;
  if (!sqlmap_adv_cookie_del.checked) {
    request_adv_cookie_del.value = ""; 
  }

  request_adv_live_cookies.disabled = !sqlmap_adv_live_cookies.checked;
  if (!sqlmap_adv_live_cookies.checked) {
    request_adv_live_cookies.value = ""; 
  }

  request_adv_load_cookies.disabled = !sqlmap_adv_load_cookies.checked;
  if (!sqlmap_adv_load_cookies.checked) {
    request_adv_load_cookies.value = ""; 
  }

  request_adv_delay.disabled = !sqlmap_adv_delay.checked;
  if (!sqlmap_adv_delay.checked) {
    request_adv_delay.value = ""; 
  }

  request_adv_timeout.disabled = !sqlmap_adv_timeout.checked;
  if (!sqlmap_adv_timeout.checked) {
    request_adv_timeout.value = ""; 
  }

  // Injection Options Disable/Enable
  var sqlmap_adv_parameter = document.getElementById("SQLmap-adv-parameter");
  var injection_adv_parameter = document.getElementById("injection-adv-parameter");

  var sqlmap_adv_skip = document.getElementById("SQLmap-adv-skip");
  var injection_adv_skip = document.getElementById("injection-adv-skip");

  var sqlmap_adv_param_exclude = document.getElementById("SQLmap-adv-param-exclude");
  var injection_adv_param_exclude = document.getElementById("injection-adv-param-exclude");

  var sqlmap_adv_dbms = document.getElementById("SQLmap-adv-dbms");
  var dbms_types2 = document.getElementById("dbms-types2");

  var sqlmap_adv_dbms_cred = document.getElementById("SQLmap-adv-dbms-cred");
  var injection_adv_dbms_cred = document.getElementById("injection-adv-dbms-cred");

  var sqlmap_adv_dbms_os = document.getElementById("SQLmap-adv-dbms-os");
  var injection_adv_os = document.getElementById("injection-adv-os");

  var sqlmap_adv_inj_prefix = document.getElementById("SQLmap-adv-inj-prefix");
  var injection_adv_prefix = document.getElementById("injection-adv-prefix");

  var sqlmap_adv_inj_suffix = document.getElementById("SQLmap-adv-inj-suffix");
  var injection_adv_suffix = document.getElementById("injection-adv-suffix");

  var sqlmap_adv_inj_tamper = document.getElementById("SQLmap-adv-inj-tamper");
  var injection_adv_tamper = document.getElementById("injection-adv-tamper");

  // Set the disabled state of inputs based on the checkbox state
  injection_adv_parameter.disabled = !sqlmap_adv_parameter.checked;
  if (!sqlmap_adv_parameter.checked) {
    injection_adv_parameter.value = ""; 
  }

  injection_adv_skip.disabled = !sqlmap_adv_skip.checked;
  if (!sqlmap_adv_skip.checked) {
    injection_adv_skip.value = ""; 
  }

  injection_adv_param_exclude.disabled = !sqlmap_adv_param_exclude.checked;
  if (!sqlmap_adv_param_exclude.checked) {
    injection_adv_param_exclude.value = ""; 
  }

  dbms_types2.disabled = !sqlmap_adv_dbms.checked;
  if (!sqlmap_adv_dbms.checked) {
    dbms_types2.value = ""; 
  }

  injection_adv_dbms_cred.disabled = !sqlmap_adv_dbms_cred.checked;
  if (!sqlmap_adv_dbms_cred.checked) {
    injection_adv_dbms_cred.value = ""; 
  }

  injection_adv_os.disabled = !sqlmap_adv_dbms_os.checked;
  if (!sqlmap_adv_dbms_os.checked) {
    injection_adv_os.value = ""; 
  }

  injection_adv_prefix.disabled = !sqlmap_adv_inj_prefix.checked;
  if (!sqlmap_adv_inj_prefix.checked) {
    injection_adv_prefix.value = ""; 
  }

  injection_adv_suffix.disabled = !sqlmap_adv_inj_suffix.checked;
  if (!sqlmap_adv_inj_suffix.checked) {
    injection_adv_suffix.value = ""; 
  }

  injection_adv_tamper.disabled = !sqlmap_adv_inj_tamper.checked;
  if (!sqlmap_adv_inj_tamper.checked) {
    injection_adv_tamper.value = ""; 
  }

  // Detection Options Disable/Enable
  var sqlmap_adv_level = document.getElementById("SQLmap-adv-level");
  var detection_level = document.getElementById("detection-level");

  var sqlmap_adv_risk = document.getElementById("SQLmap-adv-risk");
  var detection_risk = document.getElementById("detection-risk");

  var sqlmap_adv_string = document.getElementById("SQLmap-adv-string");
  var detection_string = document.getElementById("detection-string");

  var sqlmap_adv_not_string = document.getElementById("SQLmap-adv-not-string");
  var detection_not_string = document.getElementById("detection-not-string");

  var sqlmap_adv_regexp = document.getElementById("SQLmap-adv-regexp");
  var detection_regexp = document.getElementById("detection-regexp");

  var sqlmap_adv_code = document.getElementById("SQLmap-adv-code");
  var detection_code = document.getElementById("detection-code");

  // Set the disabled state of inputs based on the checkbox state
  detection_level.disabled = !sqlmap_adv_level.checked;
  if (!sqlmap_adv_level.checked) {
    detection_level.value = ""; 
  }

  detection_risk.disabled = !sqlmap_adv_risk.checked;
  if (!sqlmap_adv_risk.checked) {
    detection_risk.value = ""; 
  }

  detection_string.disabled = !sqlmap_adv_string.checked;
  if (!sqlmap_adv_string.checked) {
    detection_string.value = ""; 
  }

  detection_not_string.disabled = !sqlmap_adv_not_string.checked;
  if (!sqlmap_adv_not_string.checked) {
    detection_not_string.value = ""; 
  }

  detection_regexp.disabled = !sqlmap_adv_regexp.checked;
  if (!sqlmap_adv_regexp.checked) {
    detection_regexp.value = ""; 
  }

  detection_code.disabled = !sqlmap_adv_code.checked;
  if (!sqlmap_adv_code.checked) {
    detection_code.value = ""; 
  }

  //Enumeration Disable/Enable
  var sqlmap_adv_DB = document.getElementById("SQLmap-adv-DB");
  var db_adv_enum = document.getElementById("db-adv-enum");
  var sqlmap_adv_TBL = document.getElementById("SQLmap-adv-TBL");
  var tbl_adv_enum = document.getElementById("tbl-adv-enum");
  var sqlmap_adv_COL = document.getElementById("SQLmap-adv-COL");
  var col_adv_enum = document.getElementById("col-adv-enum");

  db_adv_enum.disabled = !sqlmap_adv_DB.checked;
  if (!sqlmap_adv_DB.checked) {
    db_adv_enum.value = ""; // Optionally reset value when disabled
  }

  tbl_adv_enum.disabled = !sqlmap_adv_TBL.checked;
  if (!sqlmap_adv_TBL.checked) {
    tbl_adv_enum.value = ""; // Optionally reset value when disabled
  }

  col_adv_enum.disabled = !sqlmap_adv_COL.checked;
  if (!sqlmap_adv_COL.checked) {
    col_adv_enum.value = ""; // Optionally reset value when disabled
  }

  // File Access Disable/Enable
  var sqlmap_adv_file_read = document.getElementById("SQLmap-adv-file-read");
  var file_read_name = document.getElementById("file-read-name");

  var sqlmap_adv_file_write = document.getElementById("SQLmap-adv-file-write");
  var file_write_name = document.getElementById("file-write-name");

  var sqlmap_adv_file_dest = document.getElementById("SQLmap-adv-file-dest");
  var file_dest_name = document.getElementById("file-dest-name");

  // Set the disabled state of inputs based on the checkbox state
  file_read_name.disabled = !sqlmap_adv_file_read.checked;
  if (!sqlmap_adv_file_read.checked) {
    file_read_name.value = ""; 
  }

  file_write_name.disabled = !sqlmap_adv_file_write.checked;
  if (!sqlmap_adv_file_write.checked) {
    file_write_name.value = ""; 
  }

  file_dest_name.disabled = !sqlmap_adv_file_dest.checked;
  if (!sqlmap_adv_file_dest.checked) {
    file_dest_name.value = ""; 
  }

  // Optimization Option Disable/Enable
  var sqlmap_adv_threads = document.getElementById("SQLmap-adv-threads");
  var threads_input = document.getElementById("threads");

  // Set the disabled state of input based on the checkbox state
  threads_input.disabled = !sqlmap_adv_threads.checked;
  if (!sqlmap_adv_threads.checked) {
    threads_input.value = ""; 
  }

  // Operating System Access Disble/Enable
  var sqlmap_adv_os_cmd = document.getElementById("SQLmap-adv-os-cmd");
  var os_cmd_input = document.getElementById("os-cmd-input");

  var sqlmap_adv_msf_path = document.getElementById("SQLmap-adv-msf-path");
  var msf_path_input = document.getElementById("msf-path-input");

  var sqlmap_adv_tmp_path = document.getElementById("SQLmap-adv-tmp-path");
  var tmp_path_input = document.getElementById("tmp-path-input");

  os_cmd_input.disabled = !sqlmap_adv_os_cmd.checked;
  if (!sqlmap_adv_os_cmd.checked) {
    os_cmd_input.value = ""; 
  }

  msf_path_input.disabled = !sqlmap_adv_msf_path.checked;
  if (!sqlmap_adv_msf_path.checked) {
    msf_path_input.value = ""; 
  }

  tmp_path_input.disabled = !sqlmap_adv_tmp_path.checked;
  if (!sqlmap_adv_tmp_path.checked) {
    tmp_path_input.value = ""; 
  }

  // Windows Registry Access Disable/Enable
  var sqlmap_adv_reg_key = document.getElementById("SQLmap-adv-reg-key");
  var reg_key_input = document.getElementById("reg-key-input");

  var sqlmap_adv_reg_value = document.getElementById("SQLmap-adv-reg-value");
  var reg_value_input = document.getElementById("reg-value-input");

  var sqlmap_adv_reg_data = document.getElementById("SQLmap-adv-reg-data");
  var reg_data_input = document.getElementById("reg-data-input");

  var sqlmap_adv_reg_type = document.getElementById("SQLmap-adv-reg-type");
  var reg_type_input = document.getElementById("reg-type-input");

  reg_key_input.disabled = !sqlmap_adv_reg_key.checked;
  if (!sqlmap_adv_reg_key.checked) {
    reg_key_input.value = ""; 
  }

  reg_value_input.disabled = !sqlmap_adv_reg_value.checked;
  if (!sqlmap_adv_reg_value.checked) {
    reg_value_input.value = ""; 
  }

  reg_data_input.disabled = !sqlmap_adv_reg_data.checked;
  if (!sqlmap_adv_reg_data.checked) {
    reg_data_input.value = ""; 
  }

  reg_type_input.disabled = !sqlmap_adv_reg_type.checked;
  if (!sqlmap_adv_reg_type.checked) {
    reg_type_input.value = ""; 
  }

  // Miscellaneous Options Disable/Enable
  var sqlmap_adv_verbose = document.getElementById("SQLmap-adv-verbose");
  var adv_verbosity = document.getElementById("adv-verbosity");

  var sqlmap_adv_mnemonics = document.getElementById("SQLmap-adv-mnemonics");
  var mnemonics_input = document.getElementById("mnemonics-input");

  var sqlmap_adv_alert = document.getElementById("SQLmap-adv-alert");
  var alert_input = document.getElementById("alert-input");

  var sqlmap_adv_results_file = document.getElementById("SQLmap-adv-results-file");
  var results_file_input = document.getElementById("results-file-input");

  var sqlmap_adv_tmp_dir = document.getElementById("SQLmap-adv-tmp-dir");
  var tmp_dir_input = document.getElementById("tmp-dir-input");


  adv_verbosity.disabled = !sqlmap_adv_verbose.checked;
  if (!sqlmap_adv_verbose.checked) {
    adv_verbosity.value = ""; 
  }

  mnemonics_input.disabled = !sqlmap_adv_mnemonics.checked;
  if (!sqlmap_adv_mnemonics.checked) {
    mnemonics_input.value = ""; 
  }

  alert_input.disabled = !sqlmap_adv_alert.checked;
  if (!sqlmap_adv_alert.checked) {
    alert_input.value = ""; 
  }

  results_file_input.disabled = !sqlmap_adv_results_file.checked;
  if (!sqlmap_adv_results_file.checked) {
    results_file_input.value = ""; 
  }

  tmp_dir_input.disabled = !sqlmap_adv_tmp_dir.checked;
  if (!sqlmap_adv_tmp_dir.checked) {
    tmp_dir_input.value = ""; 
  }


}


//List of DBMS Types
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


//List of Tamper Types in Advanced Section
function TamperTypes() {
  var tampersSelect = document.getElementById("injection-adv-tamper");

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
    return { value: tamper, text: tamper };
  });

  options.forEach(function (option) {
    var optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    tampersSelect.appendChild(optionElement);
  });

  tampersSelect.value = "default";

}


//Switch to Dark Mode
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


function clearSQLmap() {
  // Uncheck all checkboxes
  document.querySelectorAll('.form-check-input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
  });

  // Disable and clear all input boxes
  document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => {
    input.disabled = true;  // Disable the input box
    input.value = '';       // Clear the value
  });

  // Reset and re-enable specific input fields for both modes
  const sqlmapInputs = ['Simple-SQLmap', 'Advance-SQLmap'];
  sqlmapInputs.forEach(inputId => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) { // Check if the element exists to avoid errors
      inputElement.disabled = false;  // Re-enable the input box
      inputElement.value = "sqlmap";  // Set its value to "sqlmap"
    }
  });

}


function InitialSetup() {
  DBMSTypes();
  TamperTypes();
  SetSimpleSQLmap();
  SetAdvanceSQLmap();
  DisableEnableInput();
}

document.addEventListener("DOMContentLoaded", function () {

  InitialSetup();

  // Default Opening the first tab
  document.getElementById("SimpleOpen").click();

  // to add onmouseleave and onclick into all copy button
  var cpbtns = document.querySelectorAll("button[id^='Copy']");
  for (var i = 0; i < cpbtns.length; i++) {
    cpbtns[i].addEventListener("mouseleave", ResetToClip);
    cpbtns[i].addEventListener("click", CopyToClip);
  }


  var elementIDs = [
    { id: "SQLmap-version", event: "change" },
    { id: "SQLmap-verbose", event: "change" },
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
    { id: "injection-adv-parameter", event: "input" },
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
    { id: "db-enum", event: "change" },
    { id: "SQLmap-TBL", event: "change" },
    { id: "SQLmap-COL", event: "change" },
    { id: "SQLmap-Shell", event: "change" },
    { id: "SQLmap-Pwn", event: "change" },
    { id: "SQLmap-Batch", event: "change" },
    { id: "SQLmap-Flush", event: "change" },
    { id: "SQLmap-adv-target", event: "change" },
    { id: "target-adv-url", event: "input" },
    { id: "SQLmap-adv-direct", event: "change" },
    { id: "target-adv-direct", event: "input" },
    { id: "SQLmap-adv-logfile", event: "change" },
    { id: "target-adv-logfile", event: "input" },
    { id: "SQLmap-adv-bulkfile", event: "change" },
    { id: "target-adv-bulkfile", event: "input" },
    { id: "SQLmap-adv-requestfile", event: "change" },
    { id: "target-adv-requestfile", event: "input" },
    { id: "SQLmap-adv-dorking", event: "change" },
    { id: "target-adv-googledork", event: "input" },
    { id: "SQLmap-adv-configfile", event: "change" },
    { id: "target-adv-configfile", event: "input" },
    { id: "SQLmap-adv-technique", event: "change" },
    { id: "technique-adv-options", event: "input" },  
    { id: "SQLmap-adv-time-sec", event: "change" },
    { id: "time-adv-sec", event: "input" },
    { id: "SQLmap-adv-union-cols", event: "change" },
    { id: "union-adv-cols", event: "input" },
    { id: "SQLmap-adv-union-char", event: "change" },
    { id: "union-adv-char", event: "input" },
    { id: "SQLmap-adv-union-from", event: "change" },
    { id: "union-adv-from", event: "input" },
    { id: "SQLmap-adv-agent", event: "change" },
    { id: "request-adv-agent", event: "input" },
    { id: "SQLmap-adv-mobile", event: "change" },
    { id: "SQLmap-adv-header", event: "change" },
    { id: "request-adv-header", event: "input" },
    { id: "SQLmap-adv-method", event: "change" },
    { id: "request-adv-method", event: "input" },
    { id: "SQLmap-adv-data", event: "change" },
    { id: "request-adv-data", event: "input" },
    { id: "SQLmap-adv-param-del", event: "change" },
    { id: "request-adv-param-del", event: "input" },
    { id: "SQLmap-adv-cookie", event: "change" },
    { id: "request-adv-cookie", event: "input" },
    { id: "SQLmap-adv-cookie-del", event: "change" },
    { id: "request-adv-cookie-del", event: "input" },
    { id: "SQLmap-adv-live-cookies", event: "change" },
    { id: "request-adv-live-cookies", event: "input" },
    { id: "SQLmap-adv-load-cookies", event: "change" },
    { id: "request-adv-load-cookies", event: "input" },
    { id: "SQLmap-adv-drop-set-cookie", event: "change" },
    { id: "SQLmap-adv-delay", event: "change" },
    { id: "request-adv-delay", event: "input" },
    { id: "SQLmap-adv-timeout", event: "change" },
    { id: "request-adv-timeout", event: "input" },
    { id: "SQLmap-adv-mobile", event: "change" },
    { id: "SQLmap-adv-parameter", event: "change" },
    { id: "injection-adv-parameter", event: "input" },
    { id: "SQLmap-adv-parameter", event: "change" },
    { id: "injection-adv-parameter", event: "input" },
    { id: "SQLmap-adv-skip", event: "change" },
    { id: "injection-adv-skip", event: "input" },
    { id: "SQLmap-adv-skip-static", event: "change" },
    { id: "SQLmap-adv-param-exclude", event: "change" },
    { id: "injection-adv-param-exclude", event: "input" },
    { id: "SQLmap-adv-dbms", event: "change" },
    { id: "dbms-types2", event: "input" },
    { id: "SQLmap-adv-dbms-cred", event: "change" },
    { id: "injection-adv-dbms-cred", event: "input" },
    { id: "SQLmap-adv-dbms-os", event: "change" },
    { id: "injection-adv-os", event: "input" },
    { id: "SQLmap-adv-invalid-bignum", event: "change" },
    { id: "SQLmap-adv-invalid-logical", event: "change" },
    { id: "SQLmap-adv-invalid-string", event: "change" },
    { id: "SQLmap-adv-no-cast", event: "change" },
    { id: "SQLmap-adv-no-escape", event: "change" },
    { id: "SQLmap-adv-inj-prefix", event: "change" },
    { id: "injection-adv-prefix", event: "input" },
    { id: "SQLmap-adv-inj-suffix", event: "change" },
    { id: "injection-adv-suffix", event: "input" },
    { id: "SQLmap-adv-inj-tamper", event: "change" },
    { id: "injection-adv-tamper", event: "input" },
    { id: "SQLmap-adv-optimization", event: "change" },
    { id: "SQLmap-adv-predict-output", event: "change" },
    { id: "SQLmap-adv-keep-alive", event: "change" },
    { id: "SQLmap-adv-null-connection", event: "change" },
    { id: "SQLmap-adv-threads", event: "change" },
    { id: "threads", event: "input" },
    { id: "SQLmap-adv-level", event: "change" },
    { id: "detection-level", event: "input" },
    { id: "SQLmap-adv-risk", event: "change" },
    { id: "detection-risk", event: "input" },
    { id: "SQLmap-adv-string", event: "change" },
    { id: "detection-string", event: "input" },
    { id: "SQLmap-adv-not-string", event: "change" },
    { id: "detection-not-string", event: "input" },
    { id: "SQLmap-adv-regexp", event: "change" },
    { id: "detection-regexp", event: "input" },
    { id: "SQLmap-adv-code", event: "change" },
    { id: "detection-code", event: "input" },
    { id: "SQLmap-adv-smart", event: "change" },
    { id: "SQLmap-adv-text-only", event: "change" },
    { id: "SQLmap-adv-titles", event: "change" },
    { id: "SQLmap-adv-all", event: "change" },
    { id: "SQLmap-adv-banner", event: "change" },
    { id: "SQLmap-adv-current-user", event: "change" },
    { id: "SQLmap-adv-current-db", event: "change" },
    { id: "SQLmap-adv-hostname", event: "change" },
    { id: "SQLmap-adv-is-dba", event: "change" },
    { id: "SQLmap-adv-users", event: "change" },
    { id: "SQLmap-adv-password", event: "change" },
    { id: "SQLmap-adv-privileges", event: "change" },
    { id: "SQLmap-adv-roles", event: "change" },
    { id: "SQLmap-adv-database", event: "change" },
    { id: "SQLmap-adv-tables", event: "change" },
    { id: "SQLmap-adv-columns", event: "change" },
    { id: "SQLmap-adv-schema", event: "change" },
    { id: "SQLmap-adv-dump", event: "change" },
    { id: "SQLmap-adv-dump-all", event: "change" },
    { id: "SQLmap-adv-DB", event: "change" },
    { id: "db-adv-enum", event: "input" },
    { id: "SQLmap-adv-TBL", event: "change" },
    { id: "tbl-adv-enum", event: "input" },
    { id: "SQLmap-adv-COL", event: "change" },
    { id: "col-adv-enum", event: "input" },
    { id: "SQLmap-adv-exclude-db", event: "change" },
    { id: "SQLmap-adv-common-tables", event: "change" },
    { id: "SQLmap-adv-common-columns", event: "change" },
    { id: "SQLmap-adv-common-files", event: "change" },
    { id: "SQLmap-adv-file-read", event: "change" },
    { id: "file-read-name", event: "input" },
    { id: "SQLmap-adv-file-write", event: "change" },
    { id: "file-write-name", event: "input" },
    { id: "SQLmap-adv-file-dest", event: "change" },
    { id: "file-dest-name", event: "input" },
    { id: "SQLmap-adv-os-cmd", event: "change" },
    { id: "os-cmd-input", event: "input" },
    { id: "SQLmap-os-shell", event: "change" },
    { id: "SQLmap-os-pwn", event: "change" },
    { id: "SQLmap-adv-os-smbrelay", event: "change" },
    { id: "SQLmap-adv-os-bof", event: "change" },
    { id: "SQLmap-adv-priv-esc", event: "change" },
    { id: "SQLmap-adv-msf-path", event: "change" },
    { id: "msf-path-input", event: "input" },
    { id: "SQLmap-adv-tmp-path", event: "change" },
    { id: "tmp-path-input", event: "input" },
    { id: "SQLmap-adv-reg-read", event: "change" },
    { id: "SQLmap-adv-reg-add", event: "change" },
    { id: "SQLmap-adv-reg-del", event: "change" },
    { id: "SQLmap-adv-reg-key", event: "change" },
    { id: "reg-key-input", event: "input" },
    { id: "SQLmap-adv-reg-value", event: "change" },
    { id: "reg-value-input", event: "input" },
    { id: "SQLmap-adv-reg-data", event: "change" },
    { id: "reg-data-input", event: "input" },
    { id: "SQLmap-adv-reg-type", event: "change" },
    { id: "reg-type-input", event: "input" },
    { id: "SQLmap-adv-verbose", event: "change" },
    { id: "adv-verbosity", event: "input" },
    { id: "SQLmap-adv-batch", event: "change" },
    { id: "SQLmap-adv-flush", event: "change" },
    { id: "SQLmap-adv-mnemonics", event: "change" },
    { id: "mnemonics-input", event: "input" },
    { id: "SQLmap-adv-alert", event: "change" },
    { id: "alert-input", event: "input" },
    { id: "SQLmap-adv-beep", event: "change" },
    { id: "SQLmap-adv-dependencies", event: "change" },
    { id: "SQLmap-adv-disable-coloring", event: "change" },
    { id: "SQLmap-adv-list-tampers", event: "change" },
    { id: "SQLmap-adv-no-logging", event: "change" },
    { id: "SQLmap-adv-offline", event: "change" },
    { id: "SQLmap-adv-purge", event: "change" },
    { id: "SQLmap-adv-results-file", event: "change" },
    { id: "results-file-input", event: "input" },
    { id: "SQLmap-adv-shell", event: "change" },
    { id: "SQLmap-adv-tmp-dir", event: "change" },
    { id: "tmp-dir-input", event: "input" },
    { id: "SQLmap-adv-unstable", event: "change" },
    { id: "SQLmap-adv-update", event: "change" },
    { id: "SQLmap-adv-wizard", event: "change" }
  ];

  elementIDs.forEach(function (elementID) {
    document.getElementById(elementID.id).addEventListener(elementID.event, function () {
      DisableEnableInput();
      SetSimpleSQLmap();
      SetAdvanceSQLmap();
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

