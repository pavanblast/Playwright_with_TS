import { test } from '@playwright/test';
import { PlaceOrderSteps } from '../steps/place_order_steps';


let name = 'John Doe';

test.describe('Sauce Demo', async () => {

  console.log('Running Sauce Demo tests...', name);

  test('Login, Add to Cart and Checkout', async ({ page }) => {

    const placeOrderSteps = new PlaceOrderSteps(page);

    await test.step('Login, Add to Cart and Checkout flow', async () => {
      await placeOrderSteps.place_order();
    });

  });

});
