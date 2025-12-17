import {configManager} from "@core/config-manager";
import type {APIRequestContext, APIResponse} from "playwright-core";
import {Airport, AirportDistance} from "@api/core/api.model";

export class ApiController {
    protected baseUrl = configManager.apiBaseUrl;

    protected async unwrapData<T>(resp: APIResponse): Promise<T> {
        if (!resp.ok()) {
            let bodyText: string | undefined;
            try {
                bodyText = await resp.text();
            } catch {
                bodyText = undefined;
            }

            throw new Error(
                `API request failed: ${resp.status()} ${resp.statusText()} ${resp.url()}` +
                (bodyText ? `\n${bodyText}` : "")
            );
        }

        const json = await resp.json();
        return (json as { data: T }).data;
    }

    async getAirports(req: APIRequestContext) {
        const resp = await req.get(`${this.baseUrl}/airports`);
        return this.unwrapData<Airport[]>(resp);
    }

    async getDistanceBetweenAirports(req: APIRequestContext, from: string, to: string) {
        const resp = await req.post(`${this.baseUrl}/airports/distance`, {data: {from, to}});
        return this.unwrapData<AirportDistance>(resp);
    }
}