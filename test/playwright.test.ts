import {expect, test} from "@playwright/test"

const APP_URL = "http://127.0.0.1:5500/index.html"

test("Github", async({page})=>{
    await page.goto(APP_URL)
    await expect(page).toHaveTitle("GITHUB")
})