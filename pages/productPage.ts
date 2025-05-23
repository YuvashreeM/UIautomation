import {Page, expect} from "@playwright/test";
import { allure } from 'allure-playwright';
import * as productData from "../testData/productData.json";
import * as productSelectors from "../selectors/productPageSelectors.json";

export default class ProductPage {

    constructor(public page: Page) {} // Constructor to initialize the page object
  

    async clickOnCDAndRO() {
        await allure.step('Click on CD and RO link', async () => {
        await this.page.locator(productSelectors.cdRO).click(); // Click on the CD and RO link
        });
        const currentUrl = this.page.url();
        await allure.step('Verify current URL', async () => {
            expect(currentUrl).toContain(productData.currentUrl); // Verify that the URL contains the expected value
        });
    }

    async costSavings() {
        await allure.step('Scroll to Cost Savings section', async () => {
            await this.page.locator(productSelectors.costSavings).scrollIntoViewIfNeeded(); // Scroll the Cost Savings section into view
        });
        await allure.step('Verify Cost Savings text', async () => {
            expect(this.page.locator(productSelectors.costSavings)).toHaveText(productData.costSavings); // Verify that the Cost Savings text is displayed
        });
    }

    async clickAuditorsAndSecurity(){
        await allure.step('Click on Auditors and Security link', async () => {
            await this.page.locator(productSelectors.auditorsAndSecurity).scrollIntoViewIfNeeded();
            await this.page.locator(productSelectors.auditorsAndSecurity).click(); // Click on the Auditors and Security link
        });
        
        await allure.step('Verify Auditors and Security text', async () => {
            expect(this.page.locator(productSelectors.auditorsAndSecurityText)).toHaveText(productData.auditorsAndSecurity); // Verify that the Auditors and Security text is displayed
        });
    }

    async releaseGovernance(){
        await allure.step('Scroll to Release Governance section', async () => {
            await this.page.locator(productSelectors.releaseGoverence).scrollIntoViewIfNeeded(); // Scroll the Release Governance section into view
        });
        
        await allure.step('Verify release Goverence text', async () => {
            expect(this.page.locator(productSelectors.releaseGoverence)).toHaveText(productData.releaseGovernance);  // Verify that the Release Governance text is displayed
        });
    }
    
}