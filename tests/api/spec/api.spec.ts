import {test, expect} from '@playwright/test';
import {ApiController} from "@api/core/api.controller";
import {ApiAsserter} from "@api/core/api.asserter";

test.describe('Airport Gap API Tests', () => {
    // encapsulation api requests logic in a separate class
    const controller = new ApiController();
    // encapsulating assertion logic in a separate class unless it's really simple
    const asserter = new ApiAsserter();

    test('Scenario 1: Verify Airport Count', async ({request}) => {
        const airports = await controller.getAirports(request);

        expect(airports).toHaveLength(30);
    });

    test('Scenario 2: Verify Specific Airports', async ({request}) => {
        const airports = await controller.getAirports(request);

        asserter.verifyAirportsInclude(airports, [
            'Akureyri Airport',
            'St. Anthony Airport',
            'CFB Bagotville'
        ]);
    });

    test('Scenario 3: Verify Distance Between Airports', async ({request}) => {
        const resp = await controller.getDistanceBetweenAirports(request, 'KIX', 'NRT');

        asserter.verifyDistanceKmGreaterThan(resp, 400)
    });
});
