$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles\\balanceCheck.feature");
formatter.feature({
  "line": 1,
  "name": "Different Balance verification",
  "description": "",
  "id": "different-balance-verification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "I verify differect balances",
  "description": "",
  "id": "different-balance-verification;i-verify-differect-balances",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@BalanceCheck"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigate to balance test page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User verifies right coloumn values appears on the page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User verify all values greater than zero",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verify total balance is sum of all balance",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verify balance is formatted in currency",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.User_navigate_to_Gmail_signup_page()"
});
formatter.result({
  "duration": 2033270000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.User_enter_firstname_as()"
});
formatter.result({
  "duration": 30040998700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"txt_val_1\"}\n  (Session info: chrome\u003d90.0.4430.212)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.04 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027IN01N02040\u0027, ip: \u0027192.168.225.143\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\cverma\\AppData\\Local\\Temp\\scoped_dir151524_7999}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d90.0.4430.212, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 5a1bf5a911e01f755d9e017d60c9f5f2\n*** Element info: {Using\u003did, value\u003dtxt_val_1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.generic.BaseClass.veirfyElementPresent(BaseClass.java:103)\r\n\tat com.stepDef.StepDef.User_enter_firstname_as(StepDef.java:60)\r\n\tat ???.When User verifies right coloumn values appears on the page(FeatureFiles\\balanceCheck.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.User_enter_lastname_as()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.User_enter_email_id_as()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.User_enter_password_as()"
});
formatter.result({
  "status": "skipped"
});
});