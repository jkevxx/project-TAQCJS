## Testing Automation

**[GDLTAQ-15](https://jira.softserve.academy/browse/GDLTAQ-15)** - Automate test: Search an device and click on button detail and show its content uuid. _Kevin Paez_

**[GDLTAQ-11](https://jira.softserve.academy/browse/GDLTAQ-11)** - Test the date element, Verify the selected date is displayed. _Cinthia Sanchez_

**[GDLTAQ-14](https://jira.softserve.academy/browse/GDLTAQ-14)** - Automate test, Check that everything is fine on the devices tab. _Sandra P. Bombela_

**[GDLTAQ-16](https://jira.softserve.academy/browse/GDLTAQ-16)** - Automate the test: Verify results using specific keywords on inventory advanced search. _Emmanuel Arroyo_

---

## Instructions:

En la carpeta `pageobjects` se colocan las clases que vayan a utilizar en su `testing case`

La nomenclatura de los archivos que contengan **Classes** es: `snake_case.js`

En la carpeta `specs` van a ir los `testing cases` la nomenclatura para esos archivos es `camelCase.js`

Ya existe el test para iniciar sesión, solo necesitan llamarlo como está en el siguiente archivo `spects/GDLTAQ-15/findDevice.js`.

Pueden ignorar la línea de código `await browser.pause(1000 * 3);` solo es para pausar el test.

Si quieren evitar que se ejecuten todos los test al ejecutar el comando `npm run wdio` deben ir al archivo llamado `wdio.conf.js` y en la línea 25 pueden colocar el nombre de su archivo

Ejemplo:

`'./test/specs/**/*.js'`

solo ejecuta un test `'./test/specs/**/findDevice.js'`

**NOTA: no necestan colocar el nombre de la carpeta donde este su test, para eso esta el doble `**` solo coloquen el nombre de su test\*\*
