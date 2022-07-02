import {createContext, useState} from "react";

export const BookingContext = createContext(null);

export const BookingProvider = ({children}) => {

    // const [place, setPlace] = useState(data);
    const [place, setPlace] = useState({"start": null, "end": null});
    const [direction, setDirection] = useState(dData);
    const [google, setGoogle] = useState(null);
    const [map, setMap] = useState(null);
    const [vehicles, setVehicles] = useState([]);

    const value = {
        google, setGoogle,
        map, setMap,
        vehicles, setVehicles,
        place, setPlace,
        direction, setDirection,
    }

    return <BookingContext.Provider value={value}>
        {children}
    </BookingContext.Provider>

}

const data = {
    "start": {
        "formatted_address": "Balaju Industrial Area, Kathmandu, काठमाडौँ 44700, Nepal",
        "geometry": {
            "location": {"lat": 27.7327348, "lng": 85.3021864},
            "viewport": {
                "south": 27.7313047697085,
                "west": 85.30082966970849,
                "north": 27.7340027302915,
                "east": 85.3035276302915
            }
        },
        "name": "Wow Popcorn",
        "html_attributions": []
    },
    "end": {
        "formatted_address": "M8G8+VRJ, Gabahal Road, Lalitpur 44600, Nepal",
        "geometry": {
            "location": {"lat": 27.6772126, "lng": 85.31701799999999},
            "viewport": {
                "south": 27.67582656970849,
                "west": 85.3155431197085,
                "north": 27.6785245302915,
                "east": 85.3182410802915
            }
        },
        "name": "Labim Mall",
        "html_attributions": []
    }
}


const dData = {
    "geocoded_waypoints": [
        {
            "geocoder_status": "OK",
            "place_id": "ChIJ4U9GQToZ6zkRQIjGcYEFH6w",
            "types": ["premise"]
        },
        {
            "geocoder_status": "OK",
            "place_id": "ChIJxSs0ayYa6zkRG6-JmoL6u3M",
            "types": ["airport", "establishment", "point_of_interest"]
        }
    ],
    "routes": [
        {
            "bounds": {
                "northeast": {
                    "lat": 27.7418803,
                    "lng": 85.36806519999999
                },
                "southwest": {
                    "lat": 27.6963294,
                    "lng": 85.3274838
                }
            },
            "copyrights": "Map data ©2022",
            "legs": [
                {
                    "distance": {
                        "text": "8.6 km",
                        "value": 8608
                    },
                    "duration": {
                        "text": "25 mins",
                        "value": 1508
                    },
                    "end_address": "Tribhuvan International Airport (KTM), Ring Rd, Kathmandu 44600, Nepal",
                    "end_location": {
                        "lat": 27.6966426,
                        "lng": 85.3595835
                    },
                    "start_address": "P8QG+JXH, Kathmandu 44600, Nepal",
                    "start_location": {
                        "lat": 27.7391492,
                        "lng": 85.3274838
                    },
                    "steps": [
                        {
                            "distance": {
                                "text": "1.0 km",
                                "value": 983
                            },
                            "duration": {
                                "text": "4 mins",
                                "value": 229
                            },
                            "end_location": {
                                "lat": 27.7405044,
                                "lng": 85.33612079999999
                            },
                            "html_instructions": "Head \u003cb\u003enortheast\u003c/b\u003e",
                            "polyline": {
                                "points": "uxhhDwoxgOUe@}@mBc@{@k@iAKOaAaBu@aBo@eAAACEi@cAOWk@w@Oa@I[g@gAIc@Kg@C_@A[?O@OFg@Hi@F[FY@AHSFUDOVg@f@gAVm@Ne@Ti@DIZu@Pc@Pe@HWBKDIBK@KBU?AEQEU"
                            },
                            "start_location": {
                                "lat": 27.7391492,
                                "lng": 85.3274838
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "3.2 km",
                                "value": 3155
                            },
                            "duration": {
                                "text": "9 mins",
                                "value": 531
                            },
                            "end_location": {
                                "lat": 27.7160566,
                                "lng": 85.3461841
                            },
                            "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRing Road\u003c/b\u003e",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "caihDwezgOGEzAwD@EDIpCcG\`AqBBEP_@n@cAp@aAr@y@t@q@fAu@fAq@dAo@hAo@lAq@hAs@lAq@h@Y^QjAo@lPaJZEFElH}DBCfB_ATILETGTCPCH?R?ZAd@BTBTDn@LdCh@D@JBRFd@Jf@Lh@Jl@LnB\`@VFVDXF~@P\\\\FXDh@Bh@?hAG^GBAd@IRGx@UB?bAYh@Mp@SNEDABAr@Q\`Bc@TGf@[|Bm@TEbGgBh@O\`@K^ILCr@KJA\\\\@RBVB^FVDpAR@??A@A?A@?@??A@?@?@??A@?@??@@?@?@??@@?@@?@@??@ND~DdB"
                            },
                            "start_location": {
                                "lat": 27.7405044,
                                "lng": 85.33612079999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.5 km",
                                "value": 454
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 115
                            },
                            "end_location": {
                                "lat": 27.7132652,
                                "lng": 85.34928239999999
                            },
                            "html_instructions": "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eGaurighat Marg\u003c/b\u003e",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "khdhDsd|gOFUBEBGDGHE\`@SLG\\\\MFAPAZ@z@m@FE\`@m@PWfAqCHSHU\\\\c@FGDEBEDKFKHQpAeBPIHE"
                            },
                            "start_location": {
                                "lat": 27.7160566,
                                "lng": 85.3461841
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.5 km",
                                "value": 523
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 89
                            },
                            "end_location": {
                                "lat": 27.7117569,
                                "lng": 85.3540732
                            },
                            "html_instructions": "Turn \u003cb\u003eleft\u003c/b\u003e",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "}vchD_x|gOUq@CU?WFcABWDSV}@@EHYBKLc@La@LYJWDMBGFYFQDQDUF_@BUBKDc@DUBQLc@J_@@GRq@\`@cBDIFIDCDCJGHCFEFC"
                            },
                            "start_location": {
                                "lat": 27.7132652,
                                "lng": 85.34928239999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.7 km",
                                "value": 671
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 106
                            },
                            "end_location": {
                                "lat": 27.7127139,
                                "lng": 85.3601666
                            },
                            "html_instructions": "Turn \u003cb\u003eleft\u003c/b\u003e",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "omchD}u}gOJkBBW@Y?I?GAC?CAAAAA?AAA?GAG?A?E?C?EAAAA?AAAA?AAA?GAK?c@@mA@mABoA?S@_@?I?GAG?CACACAAACAAICGCIASEMIIGMMKKKMQWGKEIEICGCKCKAMCa@?EAa@Aw@@w@RgG"
                            },
                            "start_location": {
                                "lat": 27.7117569,
                                "lng": 85.3540732
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "72 m",
                                "value": 72
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 16
                            },
                            "end_location": {
                                "lat": 27.7120765,
                                "lng": 85.3600515
                            },
                            "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDibya Marg\u003c/b\u003e",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "mschDa|~gOhBRRB"
                            },
                            "start_location": {
                                "lat": 27.7127139,
                                "lng": 85.3601666
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.5 km",
                                "value": 542
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 115
                            },
                            "end_location": {
                                "lat": 27.711062,
                                "lng": 85.36503259999999
                            },
                            "html_instructions": "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePanchakanya Marga\u003c/b\u003e",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "oochDi{~gOHo@HYDOHOJSLSLQHKFEDCHAD?Pi@d@iAN_@L[DMDSBWBMPiA?K?m@Co@Mi@Mk@Sq@?CGWESEUA]Fo@Fg@H_@JW"
                            },
                            "start_location": {
                                "lat": 27.7120765,
                                "lng": 85.3600515
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.4 km",
                                "value": 393
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 60
                            },
                            "end_location": {
                                "lat": 27.7092298,
                                "lng": 85.3680437
                            },
                            "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "cichDmz_hO^OPE\`@MXIJEHGJKFKJUN_@Rm@\\\\{@LSHMRUd@g@FMBKBI@M?[Ek@A_@AYBYBODILQBC@CBABAB?"
                            },
                            "start_location": {
                                "lat": 27.711062,
                                "lng": 85.36503259999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 km",
                                "value": 239
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 59
                            },
                            "end_location": {
                                "lat": 27.7082457,
                                "lng": 85.36616160000001
                            },
                            "html_instructions": "Continue straight",
                            "maneuver": "straight",
                            "polyline": {
                                "points": "u}bhDgm\`hOBAJAPATBNFNJFNLXH\`@@LBJLd@Db@Hb@D\\\\Jp@F^DPFN"
                            },
                            "start_location": {
                                "lat": 27.7092298,
                                "lng": 85.3680437
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "1.5 km",
                                "value": 1472
                            },
                            "duration": {
                                "text": "3 mins",
                                "value": 162
                            },
                            "end_location": {
                                "lat": 27.6963294,
                                "lng": 85.36058060000001
                            },
                            "html_instructions": "Slight \u003cb\u003eleft\u003c/b\u003e",
                            "maneuver": "turn-slight-left",
                            "polyline": {
                                "points": "qwbhDoa\`hOZNd@PrAd@THPJ@?|@XJBdA^xAf@LFTHTLJLFNL\`@XfAL\\\\LPZRXJj@TxIxC@?dDlA\`A\\\\fA^bBl@B@dBl@p@TdBn@f@LD@zCI\`@EV?\\\\BVHFBjDnA|@Zv@XzAf@"
                            },
                            "start_location": {
                                "lat": 27.7082457,
                                "lng": 85.36616160000001
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.1 km",
                                "value": 104
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 26
                            },
                            "end_location": {
                                "lat": 27.6966426,
                                "lng": 85.3595835
                            },
                            "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "am\`hDs~~gO}@fE"
                            },
                            "start_location": {
                                "lat": 27.6963294,
                                "lng": 85.36058060000001
                            },
                            "travel_mode": "DRIVING"
                        }
                    ],
                    "traffic_speed_entry": [],
                    "via_waypoint": []
                }
            ],
            "overview_polyline": {
                "points": "uxhhDwoxgOcDyGmAqBu@aBo@eAEGy@{Ak@w@Oa@I[g@gAUkAE{@@_@PqAZkALe@~@oBbAgChAwCNm@BWKg@GEzAwDFOhF{K\`BeChBkBnCgBnC_BnGqDjBaAlPaJZEtHcEjBcAx@Wf@G\\\\?\`A@j@HfE|@jCl@lE|@pCf@rABhBOvBi@pFwAvBk@f@[|Bm@xGmBjA[lB[p@Dv@JjBX@CBCDAJBBBnElBJ[HOj@Yj@UXCZ@z@m@h@s@PWfAqCRi@d@k@Vc@zAwBZOUq@CUF{AHk@XcAh@kBb@gAZsATeBHg@XcATy@f@mBLMPKPIFCJkBDq@?QEK]CMCEG?eCFqEA]GM]Ka@OWUq@}@Sg@IaAAqCRgGhBRRBHo@Ni@Tc@Ze@PQNED?Pi@t@iBRi@^cC?y@Co@Mi@a@}AG[Ki@A]Fo@PgAJW^Or@Sd@OTSRa@b@mAj@oA\\\\c@l@u@FU@i@IeBFi@R[LKd@Ed@JNJFNVz@DXRhAN\`ARpAL\`@\`A\`@hBn@|Ah@bExATLJLTp@f@dBLPZRdA\`@zIxCrKxD\`GtBl@N|DOt@B^L|JlD}@fE"
            },
            "summary": "Ring Road",
            "warnings": [],
            "waypoint_order": []
        }
    ],
    "status": "OK"
}
