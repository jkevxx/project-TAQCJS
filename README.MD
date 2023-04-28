## Testing Automation

**[GDLTAQ-15](https://jira.softserve.academy/browse/GDLTAQ-15)** - Automate test: Search an device and click on button detail and show its content uuid. _Kevin Paez_

**[GDLTAQ-11](https://jira.softserve.academy/browse/GDLTAQ-11)** - Test the date element, Verify the selected date is displayed. _Cinthia Sanchez_

**[GDLTAQ-14](https://jira.softserve.academy/browse/GDLTAQ-14)** - Automate test, Check that everything is fine on the devices tab. _Sandra P. Bombela_

**[GDLTAQ-16](https://jira.softserve.academy/browse/GDLTAQ-16)** - Automate the test: Verify results using specific keywords on inventory advanced search. _Emmanuel Arroyo_

---

## Instructions:

The `pageobjects` folder contains all classes for each `testing case` and the nomenclature for the file names is `snake_case.js`

In the folder `specs` are the `testing cases` and the nomenclature for the file names is `camelCase.js`

To execute the `testing cases` you can use `npm run wdio` or `npx wdio run ./wdio.conf.js`

If you want to execute and specific `test case` go to file called `wdio.conf.js` and in the property `specs` change the following line of code:

`'./test/specs/**/*.js'` -> `'./test/specs/**/findDevice.js'`
