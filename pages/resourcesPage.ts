import {Page, expect} from "@playwright/test";
import * as resourcesSelectors from "../selectors/resourcesPageSelectors.json";
import * as documentationData from "../testData/documentationData.json";
import { allure } from "allure-playwright";
import { waitForDebugger } from "inspector";

export default class ResourcesPage {

    private newPage: any; // This will hold the new page object
    private searchPage: any; // This will hold the search page object
    constructor(public page: Page) {} // Constructor to initialize the page object

    async clickOnDocumentation() {

        await allure.step("Click on Documentation link", async () => {
            // Wait for the documentation link to be visible
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent("page"),
                this.page.locator(resourcesSelectors.documentation).click() // Click on the documentation link
            ]);
            this.newPage = newPage;
            // Wait for the new page to load 
            await allure.step('Verify Documentation page URL', async () => {
                console.log(this.newPage.url());
                expect(this.newPage.url()).toContain(documentationData.url); // Verify that the URL contains the expected value
                expect(this.newPage.locator(resourcesSelectors.title).isVisible()); 
            }); 
        });
    
    }
    
    async searchResources() {
        await this.newPage.locator(resourcesSelectors.searchResources).waitFor({ state: 'visible' });
        await allure.step('Click on Search Resources', async () => {
            await this.newPage.locator(resourcesSelectors.searchResources).click(); // Click on the search resources link
        });
        await allure.step('Verify Search Resources is displayed', async () => {
        expect(this.newPage.locator(resourcesSelectors.search)).toBeVisible(); // Verify that the search resources link is displayed
        });

    }

    async search(searchText: string){
        await allure.step('Search the Value'+resourcesSelectors.search , async () => {
            await this.newPage.locator(resourcesSelectors.search).waitFor({ state: 'visible' }); // Wait for the search input to be visible
            await this.newPage.locator(resourcesSelectors.search).type(searchText); // Type the search text
        });
        await allure.step('Verify searched content is loaded', async () => {
            await this.newPage.locator(resourcesSelectors.installingInsight).waitFor({ state: 'visible' });
            expect(this.newPage.url()).toContain(searchText); // Verify that the URL contains the search text
        });
    }

    async pagination(){
        console.log("pagination....");
        await allure.step("Pagination is visible", async () => {
            const pagination = this.newPage.locator(resourcesSelectors.pagination); // Locate the pagination element
            expect(pagination).toBeVisible();
            pagination.scrollIntoViewIfNeeded(); // Scroll the pagination element into view
        });
    }
}