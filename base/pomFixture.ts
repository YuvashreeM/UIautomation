import {test as baseTest} from '@playwright/test';
import HeaderPage from "../pages/headerPage";
import ProductPage from "../pages/productPage"; 
import ResourcesPage from "../pages/resourcesPage";
// import { test as baseTest } from '../base/setup'; // Import the setup logic


type pages = {
    headerPage: HeaderPage;
    productPage: ProductPage;   
    resourcesPage: ResourcesPage;  
   
}

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


// export const test = baseTest.extend<{
//     headerPage: HeaderPage;
//     productPage: ProductPage;
//     resourcesPage: ResourcesPage;
// }>({
//     headerPage: async ({ sharedPage }, use) => {
//         const headerPage = new HeaderPage(sharedPage); // Initialize HeaderPage with sharedPage
//         await use(headerPage);
//     },
//     productPage: async ({ sharedPage }, use) => {
//         const productPage = new ProductPage(sharedPage); // Initialize ProductPage with sharedPage
//         await use(productPage);
//     },
//     resourcesPage: async ({ sharedPage }, use) => {
//         const resourcesPage = new ResourcesPage(sharedPage); // Initialize ResourcesPage with sharedPage
//         await use(resourcesPage);
//     },
// });

// export const expect = test.expect;





export const test = testPages;
export const expect = testPages.expect;