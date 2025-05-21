import {Page, expect} from "@playwright/test";

import * as productData from "../testData/productData.json";
import * as productSelectors from "../selectors/productPageSelectors.json";

export default class ProductPage {

    constructor(public page: Page) {}
  

    async clickOnCDAndRO() {
        await this.page.locator(productSelectors.cdRO).click();
        const currentUrl = this.page.url();
        expect(currentUrl).toContain(productData.currentUrl);
    }

    async costSavings() {
        await this.page.locator(productSelectors.costSavings).scrollIntoViewIfNeeded();;
        expect(this.page.locator(productSelectors.costSavings)).toHaveText(productData.costSavings);;
    }

    async clickAuditorsAndSecurity(){
        await this.page.locator(productSelectors.auditorsAndSecurity).scrollIntoViewIfNeeded().then( async () => {
            await this.page.locator(productSelectors.auditorsAndSecurity).click();
        });
        expect(this.page.locator(productSelectors.auditorsAndSecurityText)).toHaveText(productData.auditorsAndSecurity);
    }

    async releaseGovernance(){
        await this.page.locator(productSelectors.releaseGoverence).scrollIntoViewIfNeeded().then( async () => {
            expect(this.page.locator(productSelectors.releaseGoverence)).toHaveText(productData.releaseGovernance); 
        });
    }
    
}