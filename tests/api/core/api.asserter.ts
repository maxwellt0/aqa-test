import {expect} from "@playwright/test";
import {Airport, AirportDistance} from "./api.model";

export class ApiAsserter {
    verifyAirportsInclude(airports: Airport[], expectedItems: string[]) {
        const airportNames = airports.map((airport: any) => airport.attributes.name);
        expectedItems.forEach(item => expect(airportNames).toContain(item));
    }

    verifyDistanceKmGreaterThan(resp: AirportDistance, threshold: number) {
        const distanceInKm = resp.attributes.kilometers;
        expect(distanceInKm).toBeGreaterThan(threshold);
    }
}