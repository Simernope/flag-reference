export type CountryDto =
    {
        "name": {
            "common": string,
            "official": string,
            "nativeName": any
        },
        "tld": Array<string>,
        "cca2": string,
        "ccn3": string,
        "cca3": string,
        "cioc": string,
        "independent": true,
        "status": string,
        "unMember": true,
        "currencies": any,
        "idd": {
            "root": string,
            "suffixes": Array<string>
        },
        "capital": Array<string>,
        "altSpellings": Array<string>,
        "region": string,
        "subregion": string,
        "languages": any,
        "translations": {
            "cym": {
                "official": string,
                "common": string
            },
            "rus": {
                "official": string,
                "common": string
            },
        },
        "latlng": Array<number>,
        "landlocked": false,
        "borders": Array<string>,
        "area": number,
        "demonyms": {
            "eng": {
                "f": string,
                "m": string
            },
            "fra": {
                "f": string,
                "m": string
            }
        },
        "flag": string,
        "maps": {
            "googleMaps": string,
            "openStreetMaps": string
        },
        "population": number,
        "gini": {
            "2018": number
        },
        "fifa": string,
        "car": {
            "signs": [
                string
            ],
            "side": string
        },
        "timezones": Array<string>,
        "continents": Array<string>,
        "flags": {
            "png": string,
            "svg": string,
            "alt": string
        },
        "coatOfArms": {
            "png": string,
            "svg": string
        },
        "startOfWeek": string,
        "capitalInfo": {
            "latlng": [
                number,
                number
            ]
        },
        "postalCode": {
            "format": string,
            "regex": string
        }
    }
