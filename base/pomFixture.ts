import {test as baseTest} from '@playwright/test';
import HeaderPage from "../pages/headerPage";
import ProductPage from "../pages/productPage"; 
import ResourcesPage from "../pages/resourcesPage";

// Importing the necessary page classes
type pages = {
    headerPage: HeaderPage;
    productPage: ProductPage;   
    resourcesPage: ResourcesPage;  
   
}

// Creating a test fixture that extends the base test
const testPages = baseTest.extend<pages>({
    headerPage: async ({page}, use) => {
        await use(new HeaderPage(page));
    },
    productPage: async ({page}, use) => {
        await use(new ProductPage(page));
    },
    resourcesPage: async ({page}, use) => {
        await use(new ResourcesPage(page));
    }

})

// Exporting the test fixture for use in test files
export const test = testPages;
export const expect = testPages.expect;