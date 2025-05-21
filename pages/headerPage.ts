import {Page} from '@playwright/test';
import * as headerSelectors from '../selectors/headerPageSelectors.json';

export default class HeaderPage {


    constructor(public page: Page) {}

    async clickProductsLink() {
        await this.page.locator(headerSelectors.productLink).click();

    }

    async clickResourcesLink() {
        await this.page.locator(headerSelectors.resourcesLink).click();
    }



}

