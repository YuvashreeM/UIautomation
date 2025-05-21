import {Page, expect} from "@playwright/test";
import * as resourcesSelectors from "../selectors/resourcesPageSelectors.json";
import * as documentationData from "../testData/documentationData.json";

export default class ResourcesPage {

    private newPage: any;
    private searchPage: any;
    constructor(public page: Page) {}

    async clickOnDocumentation() {

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.locator(resourcesSelectors.documentation).click()
        ]);
        this.newPage = newPage; // Store the new page reference
        expect(newPage.url()).toContain(documentationData.url);
        console.log(newPage.url())
        expect(newPage.locator(resourcesSelectors.title).isVisible());  
    
    }
    
    async searchResources() {

        await this.newPage.locator(resourcesSelectors.searchResources).waitFor({ state: 'visible' });
        await this.newPage.locator(resourcesSelectors.searchResources).click();
        expect(this.newPage.locator(resourcesSelectors.search)).toBeVisible();

    }

    async search(searchText: string){
        console.log("searchText", searchText);
        await this.newPage.locator(resourcesSelectors.search).waitFor({ state: 'visible' });
        await this.newPage.locator(resourcesSelectors.search).type(searchText);
        await this.newPage.locator(resourcesSelectors.installingInsight).waitFor({ state: 'visible' });
        expect(this.newPage.url()).toContain(searchText);
    }

    async pagination(){
        console.log("pagination....");
        const pagination = this.newPage.locator(resourcesSelectors.pagination);
        expect(pagination).toBeVisible();
        pagination.scrollIntoViewIfNeeded();
    }
}