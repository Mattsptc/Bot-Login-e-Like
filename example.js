require('dotenv').config()
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto("https://unsplash.com/login");
  // - Acessa a página de login

  await page.type('[name="user[email]"]', process.env.UNSPLASH_EMAIL)
  await page.type('#user_password', process.env.UNSPLASH_PASS)
  await page.click('[type="submit"]')

  // esperar a navegacao de pagina
  await page.waitForNavigation();

  // entrar em outra pagina
  await page.goto('https://unsplash.com/photos/7Dwj1-ye81c')

  
   // like na foto
  await page.click('[title="Like"]')

  /* await browser.close(); */
})();

