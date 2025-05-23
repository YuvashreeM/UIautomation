
import { Page } from "playwright";
import {test, expect} from "../base/pomFixture";
import documetationData from "../testData/documentationData.json";
import pageTitle from "../testData/pageTitle.json"
import {allure} from 'allure-playwright';



test.beforeEach(async ({ page, baseURL }) => {
    try{
        
        await allure.description("Launching CloudBees Page");
        await allure.step("Navigate to CloudBees Launch Page", async () => {
        await page.goto(`${baseURL}`); 
        });
        await allure.step("Verify Launch Page Title", async () => {
        await expect(page).toHaveTitle(pageTitle.launchPageTitle);
        });

    }catch (error) {
        console.error("Error navigating to the page:", error);
    }
})

test.describe('CloudBees Product and Resources Page', () => {
    

    test ("Prodcuts Page", async ({ page, headerPage, productPage }) => {
        await allure.description("Products Paage");
        await headerPage.clickProductsLink();
        await productPage.clickOnCDAndRO();
        await productPage.costSavings();
        await productPage.clickAuditorsAndSecurity();
        await productPage.releaseGovernance();

    });

    test ("Resources Page", async ({headerPage, resourcesPage}) => {
       await allure.description("Resources Page");
        await headerPage.clickResourcesLink();
        await resourcesPage.clickOnDocumentation();
        await resourcesPage.searchResources();
        await resourcesPage.search(documetationData.searchValue);
        await resourcesPage.pagination();
      
    });
    
})

