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
  var specificOptionsCheckboxes = [sqlmap_current_user, sqlmap_current_db, sqlmap_password, sqlmap_database, sqlmap_tables, sqlmap_columns, sqlmap_schema, sqlmap_dump, sqlmap_dump_all, sqlmap_DB, sqlmap_TBL, sqlmap_COL];
  specificOptionsCheckboxes.forEach(function (checkbox) {
    checkbox.disabled = sqlmap_all.checked;
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


  // Request Option Variables  
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

  var sqlmap_adv_drop_set_cookie = document.getElementById("SQLmap-adv-drop-set-cookie");

  var sqlmap_adv_mobile = document.getElementById("SQLmap-adv-mobile");


  // Injection Option Variables
  var sqlmap_adv_parameter = document.getElementById("SQLmap-adv-parameter");
  var injection_parameter = document.getElementById("injection-parameter");

  var sqlmap_adv_skip = document.getElementById("SQLmap-adv-skip");
  var injection_skip = document.getElementById("injection-skip");

  var sqlmap_adv_skip_static = document.getElementById("SQLmap-adv-skip-static");

  var sqlmap_adv_param_exclude = document.getElementById("SQLmap-adv-param-exclude");
  var injection_param_filter = document.getElementById("injection-param-filter");

  var sqlmap_adv_dbms = document.getElementById("SQLmap-adv-dbms");
  var dbms_types2 = document.getElementById("dbms-types2");

  var sqlmap_adv_dbms_cred = document.getElementById("SQLmap-adv-dbms-cred");
  var injection_dbms_cred = document.getElementById("injection-dbms-cred");

  var sqlmap_adv_dbms_os = document.getElementById("SQLmap-adv-dbms-os")
  var injection_os = document.getElementById("injection-os");

  var sqlmap_adv_invalid_bignum = document.getElementById("SQLmap-adv-invalid-bignum");

  var sqlmap_invalid_logical = document.getElementById("SQLmap-invalid-logical"); // Check the ID for correctness. Should it be "SQLmap-adv-invalid-logical"?

  var sqlmap_adv_invalid_string = document.getElementById("SQLmap-adv-invalid-string");

  var sqlmap_adv_no_cast = document.getElementById("SQLmap-adv-no-cast");

  var sqlmap_adv_no_escape = document.getElementById("SQLmap-adv-no-escape");

  var sqlmap_adv_inj_prefix = document.getElementById("SQLmap-adv-inj-prefix");
  var injection_prefix = document.getElementById("injection-prefix");

  var sqlmap_adv_inj_suffix = document.getElementById("SQLmap-adv-inj-suffix");
  var injection_suffix = document.getElementById("injection-suffix");

  var sqlmap_adv_inj_tamper = document.getElementById("SQLmap-adv-inj-tamper");
  var injection_tamper = document.getElementById("injection-tamper");


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

  var sqlmap_os_shell = document.getElementById("SQLmap-os-shell");

  var sqlmap_os_pwn = document.getElementById("SQLmap-os-pwn");

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
  sqlmap_adv_target.value =  "-u";
  sqlmap_adv_direct.value =  "-r";
  sqlmap_adv_logfile.value =  "--log-file";
  sqlmap_adv_bulkfile.value =  "--bulk-file";
  sqlmap_adv_requestfile.value =  "--load-cookie";
  sqlmap_adv_dorking.value =  "--google-dork";
  sqlmap_adv_configfile.value =  "--config-file";

  //Request Option Values
  sqlmap_adv_agent.value =  "--user-agent";
  sqlmap_adv_header.value =  "--header";
  sqlmap_adv_method.value =  "--method";
  sqlmap_adv_data.value =  "--data";
  sqlmap_adv_param_del.value =  "--param-del";
  sqlmap_adv_cookie.value =  "--cookie";
  sqlmap_adv_cookie_del.value =  "--cookie-del";
  sqlmap_adv_live_cookies.value =  "--live-cookies";
  sqlmap_adv_load_cookies.value =  "--load-cookies";
  sqlmap_adv_drop_set_cookie.value =  "--drop-set-cookie";
  sqlmap_adv_mobile.value =  "--mobile";

  // Injection Option Values
  sqlmap_adv_parameter.value =  "--param";
  sqlmap_adv_skip.value =  "--skip";
  sqlmap_adv_skip_static.value =  "--skip-static";
  sqlmap_adv_param_exclude.value =  "--param-exclude";
  sqlmap_adv_dbms.value =  "--dbms";
  sqlmap_adv_dbms_cred.value =  "--dbms-cred";
  sqlmap_adv_dbms_os.value =  "--os";
  sqlmap_adv_invalid_bignum.value =  "--invalid-bignum";
  sqlmap_invalid_logical.value =  "--invalid-logical"; // Check the ID for correctness. Should it be "--invalid-logical"?
  sqlmap_adv_invalid_string.value =  "--invalid-string";
  sqlmap_adv_no_cast.value =  "--no-cast";
  sqlmap_adv_no_escape.value =  "--no-escape";
  sqlmap_adv_inj_prefix.value =  "--prefix";
  sqlmap_adv_inj_suffix.value =  "--suffix";
  sqlmap_adv_inj_tamper.value =  "--tamper";


  // Optimization Option Values
  sqlmap_adv_optimization.value =  "--optimization";
  sqlmap_adv_predict_output.value =  "--predict-output";
  sqlmap_adv_keep_alive.value =  "--keep-alive";
  sqlmap_adv_null_connection.value =  "--null-connection";
  sqlmap_adv_threads.value =  "--threads";

  // Enumeration Option Values
  sqlmap_adv_level.value =  "--level";
  sqlmap_adv_risk.value =  "--risk";
  sqlmap_adv_string.value =  "--string";
  sqlmap_adv_not_string.value =  "--not-string";
  sqlmap_adv_regexp.value =  "--regexp";
  sqlmap_adv_code.value =  "--code";
  sqlmap_adv_smart.value =  "--smart";
  sqlmap_adv_text_only.value =  "--text-only";
  sqlmap_adv_titles.value =  "--titles";

  //Brute Force Option Values
  sqlmap_adv_common_tables.value =  "--common-tables";
  sqlmap_adv_common_columns.value =  "--common-columns";
  sqlmap_adv_common_files.value =  "--common-files";

  //File System Access Values
  sqlmap_adv_file_read.value =  "--file-read";
  sqlmap_adv_file_write.value =  "--file-write";
  sqlmap_adv_file_dest.value =  "--file-dest";

  //Operating System Access Values
  sqlmap_adv_os_cmd.value =  "--os-cmd";
  sqlmap_os_shell.value =  "--os-shell";
  sqlmap_os_pwn.value =  "--os-pwn";
  sqlmap_adv_os_smbrelay.value =  "--os-smbrelay";
  sqlmap_adv_os_bof.value =  "--os-bof";
  sqlmap_adv_priv_esc.value =  "--priv-esc";
  sqlmap_adv_msf_path.value =  "--msf-path";
  sqlmap_adv_tmp_path.value =  "--tmp-path";


  //Windows Registry Access Values
  sqlmap_adv_reg_read.value =  "--reg-read";
  sqlmap_adv_reg_add.value =  "--reg-add";
  sqlmap_adv_reg_del.value =  "--reg-del";
  sqlmap_adv_reg_key.value =  "--reg-key";
  sqlmap_adv_reg_value.value =  "--reg-value";
  sqlmap_adv_reg_data.value =  "--reg-data";
  sqlmap_adv_reg_type.value =  "--reg-type";

  //Miscellaneous Options
  sqlmap_adv_mnemonics.value =  "--mnemonics";
  sqlmap_adv_alert.value =  "--alert";
  sqlmap_adv_beep.value =  "--beep";
  sqlmap_adv_dependencies.value =  "--dependencies";
  sqlmap_adv_disable_coloring.value =  "--disable-coloring";
  sqlmap_adv_list_tampers.value =  "--list-tampers";
  sqlmap_adv_no_logging.value =  "--no-logging";
  sqlmap_adv_offline.value =  "--offline";
  sqlmap_adv_purge.value =  "--purge";
  sqlmap_adv_results_file.value =  "--results-file";
  sqlmap_adv_shell.value =  "--shell";
  sqlmap_adv_tmp_dir.value =  "--tmp-dir";
  sqlmap_adv_unstable.value =  "--unstable";
  sqlmap_adv_update.value =  "--update";
  sqlmap_adv_wizard.value =  "--wizard";

  //Target Options
  if (sqlmap_adv_target.checked) {
    if (target_adv_url.value !== "") {
      sqlmap_result += " " + sqlmap_adv_target.value + " " + target_adv_url.value;
    } else {
      sqlmap_result += " " + sqlmap_adv_target.value + " ";
    }
  }




  if (sqlmap_adv_update.checked) {
    sqlmap_result += " " + sqlmap_adv_update.value;

  }

  document.getElementById("Advance-SQLmap").value = sqlmap_result;
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

  // Simple Mode    <text value = extremedb> ExtremeDB </text>
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
    { id: "SQLmap-adv-update", event: "change" },
    // Add other elements and corresponding functions if necessary
  ];

  elementIDs.forEach(function (elementID) {
    document.getElementById(elementID.id).addEventListener(elementID.event, function () {
      DisableEnableInput();
      SetSimpleSQLmap(); // Corrected function call
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

