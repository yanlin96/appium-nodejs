const wdio = require("webdriverio");
const assert = require("assert");

// javascript
const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "13",
      deviceName: "emulator-5554",
      app: "/Users/yanlgong/Desktop/device-farm/test/app-debug.apk",
    //   appPackage: "io.appium.android.apis",
    //   appActivity: ".view.TextFields",
    //   automationName: "UiAutomator2"
    }
  };
  
  async function main () {
    const client = await wdio.remote(opts);
  
    const field = await client.$("id=editTextTextPersonName");
    await field.setValue("Hello World!");
    const value = await field.getText();
    assert.strictEqual(value,"Hello World!");

    const button = await client.$("id=button_first");
    await button.click()
    const button2 = await client.$("id=button_second");
    const text = await button2.getText()
    assert.strictEqual(text,"PREVIOUS");

  
    await client.deleteSession();
  }
  
  main();