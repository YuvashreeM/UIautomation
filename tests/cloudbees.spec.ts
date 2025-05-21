
import { Page } from "playwright";
import {test, expect} from "../base/pomFixture";
import documetationData from "../testData/documentationData.json";
import pageTitle from "../testData/pageTitle.json"


test.beforeEach(async ({ page, baseURL }) => {
    try{
    await page.goto(`${baseURL}`); 
    await expect(page).toHaveTitle(pageTitle.launchPageTitle);
    }catch (error) {
        console.error("Error navigating to the page:", error);
    }
})

test.describe('CloudBees Resources Page', () => {
    

    test ("Prodcuts Page", async ({ page, headerPage, productPage }) => {
        
        await headerPage.clickProductsLink();
        await productPage.clickOnCDAndRO();
        await productPage.costSavings();
        await productPage.clickAuditorsAndSecurity();
        await productPage.releaseGovernance();

    });

    test ("Resources Page", async ({headerPage, resourcesPage}) => {
       
        await headerPage.clickResourcesLink();
        await resourcesPage.clickOnDocumentation();
        await resourcesPage.searchResources();
        await resourcesPage.search(documetationData.searchValue);
        await resourcesPage.pagination();
      
    });
    
})

