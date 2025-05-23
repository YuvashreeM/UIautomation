import {Page} from '@playwright/test';
import * as headerSelectors from '../selectors/headerPageSelectors.json';
import { allure } from 'allure-playwright';

export default class HeaderPage {


    constructor(public page: Page) {} // Constructor to initialize the page object

    async clickProductsLink() {
        await allure.step('Click on Products link', async () => {
            await this.page.locator(headerSelectors.productLink).click(); // Click on the Products link
        });
    }

    async clickResourcesLink() {
        await allure.step('Click on Resources link', async () => {
        await this.page.locator(headerSelectors.resourcesLink).click(); // Click on the Resources link
        });
    }



}

