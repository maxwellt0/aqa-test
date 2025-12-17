export interface AirportAttributes {
    name: string;
    city: string;
    country: string;
    iata: string;
    icao: string;
    latitude: string;
    longitude: string;
    altitude: number;
    timezone: string;
}

export interface Airport {
    id: string;
    type: string;
    attributes: AirportAttributes;
}

export interface AirportDistanceAttributes {
    from_airport: {
        altitude: number;
        city: string;
        country: string;
        iata: string;
        icao: string;
        id: number;
        latitude: string;
        longitude: string;
        name: string;
        timezone: string;
    };
    to_airport: {
        altitude: number;
        city: string;
        country: string;
        iata: string;
        icao: string;
        id: number;
        latitude: string;
        longitude: string;
        name: string;
        timezone: string;
    };
    kilometers: number;
    miles: number;
    nautical_miles: number;
}

export interface AirportDistance {
    id: string;
    type: string;
    attributes: AirportDistanceAttributes;
}


