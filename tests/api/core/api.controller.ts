import {configManager} from "@core/config-manager";
import type {APIRequestContext} from "playwright-core";
import {expect} from "@playwright/test";

export class ApiController {
    protected baseUrl = configManager.apiBaseUrl;

    async getAirports(req: APIRequestContext) {
        const resp = await req.get(`${this.baseUrl}/airports`)
        expect(resp.ok()).toBeTruthy();
        const json = await resp.json();
        return json.data;
    }

    async getDistanceBetweenAirports(req: APIRequestContext, from: string, to: string) {
        const resp = await req.post(`${this.baseUrl}/airports/distance`, {data: {from, to}});
        expect(resp.ok()).toBeTruthy();
        const json = await resp.json();
        return json.data;
    }
}