$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hamza/OrangeHRMBDDFramework/src/main/java/Features/admin.feature");
formatter.feature({
  "line": 1,
  "name": "admin page",
  "description": "",
  "id": "admin-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "add a new user",
  "description": "",
  "id": "admin-page;add-a-new-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on homePage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on admin tab",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks add button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters details \"\u003cemployeeName\u003e\" and \"\u003cuser\u003e\" and \"\u003ccode\u003e\" and \"\u003cconfirmPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "admin-page;add-a-new-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "employeeName",
        "user",
        "code",
        "confirmPassword"
      ],
      "line": 15,
      "id": "admin-page;add-a-new-user;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "Jacqueline White",
        "qatester",
        "Windows2010.",
        "Windows2010."
      ],
      "line": 16,
      "id": "admin-page;add-a-new-user;;2"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "Ananya Dash",
        "qatester1",
        "Windows2010.",
        "Windows2010."
      ],
      "line": 17,
      "id": "admin-page;add-a-new-user;;3"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "Charlie Carter",
        "qatester2",
        "Windows2010.",
        "Windows2010."
      ],
      "line": 18,
      "id": "admin-page;add-a-new-user;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "add a new user",
  "description": "",
  "id": "admin-page;add-a-new-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on homePage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on admin tab",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks add button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters details \"Jacqueline White\" and \"qatester\" and \"Windows2010.\" and \"Windows2010.\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 7804020500,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.title_of_the_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 8175000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    },
    {
      "val": "admin123",
      "offset": 24
    }
  ],
  "location": "AdminDefinition.user_enter_and(String,String)"
});
formatter.result({
  "duration": 456754600,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 1780360600,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_is_on_homePage()"
});
formatter.result({
  "duration": 5224000,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_click_on_admin_tab()"
});
formatter.result({
  "duration": 1522797600,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_clicks_add_button()"
});
formatter.result({
  "duration": 543085400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jacqueline White",
      "offset": 21
    },
    {
      "val": "qatester",
      "offset": 44
    },
    {
      "val": "Windows2010.",
      "offset": 59
    },
    {
      "val": "Windows2010.",
      "offset": 78
    }
  ],
  "location": "AdminDefinition.user_enters_details_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 760955400,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 838236900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "add a new user",
  "description": "",
  "id": "admin-page;add-a-new-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on homePage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on admin tab",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks add button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters details \"Ananya Dash\" and \"qatester1\" and \"Windows2010.\" and \"Windows2010.\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 5892770400,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.title_of_the_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 8425000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    },
    {
      "val": "admin123",
      "offset": 24
    }
  ],
  "location": "AdminDefinition.user_enter_and(String,String)"
});
formatter.result({
  "duration": 238612800,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 2462898500,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_is_on_homePage()"
});
formatter.result({
  "duration": 7299100,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_click_on_admin_tab()"
});
formatter.result({
  "duration": 898344700,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_clicks_add_button()"
});
formatter.result({
  "duration": 430628800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ananya Dash",
      "offset": 21
    },
    {
      "val": "qatester1",
      "offset": 39
    },
    {
      "val": "Windows2010.",
      "offset": 55
    },
    {
      "val": "Windows2010.",
      "offset": 74
    }
  ],
  "location": "AdminDefinition.user_enters_details_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 593216700,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 788976700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "add a new user",
  "description": "",
  "id": "admin-page;add-a-new-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on homePage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on admin tab",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks add button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters details \"Charlie Carter\" and \"qatester2\" and \"Windows2010.\" and \"Windows2010.\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 4959543600,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.title_of_the_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 7851200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    },
    {
      "val": "admin123",
      "offset": 24
    }
  ],
  "location": "AdminDefinition.user_enter_and(String,String)"
});
formatter.result({
  "duration": 185326400,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 3266890900,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_is_on_homePage()"
});
formatter.result({
  "duration": 4939900,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_click_on_admin_tab()"
});
formatter.result({
  "duration": 662563500,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.user_clicks_add_button()"
});
formatter.result({
  "duration": 483522300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Charlie Carter",
      "offset": 21
    },
    {
      "val": "qatester2",
      "offset": 42
    },
    {
      "val": "Windows2010.",
      "offset": 58
    },
    {
      "val": "Windows2010.",
      "offset": 77
    }
  ],
  "location": "AdminDefinition.user_enters_details_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 723314000,
  "status": "passed"
});
formatter.match({
  "location": "AdminDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 783162600,
  "status": "passed"
});
});