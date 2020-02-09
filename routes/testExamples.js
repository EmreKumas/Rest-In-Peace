module.exports = {
    example_request_1: {
        "startDate": "2017-01-31",
        "endDate": "2017-02-01",
        "minCount": 10,
        "maxCount": 3000
    },
    example_response_1: {
        "code": 0,
        "msg": "Success",
        "records": [
            {
                "key": "tb8103XIMD8zQm28",
                "createdAt": "2017-01-31T06:40:56.025Z",
                "totalCount": 10
            },
            {
                "key": "Q5hgztVvq2oz7nLh",
                "createdAt": "2017-01-31T09:12:32.948Z",
                "totalCount": 10
            },
            {
                "key": "ykB7sjfqNdPbajZf",
                "createdAt": "2017-01-31T14:21:12.090Z",
                "totalCount": 10
            },
            {
                "key": "0YqTeZWGOh7BtSd5",
                "createdAt": "2017-01-31T16:15:10.308Z",
                "totalCount": 10
            },
            {
                "key": "qsuvslYrm5UYUvBg",
                "createdAt": "2017-01-31T18:04:40.340Z",
                "totalCount": 10
            },
            {
                "key": "O6vyTsuOS5QoSVf0",
                "createdAt": "2017-01-31T20:42:01.442Z",
                "totalCount": 10
            },
            {
                "key": "zoaHGvZ2fC0lSLdM",
                "createdAt": "2017-01-31T22:26:56.675Z",
                "totalCount": 10
            },
            {
                "key": "wwDRCRTHdX5mTbBC",
                "createdAt": "2017-01-31T22:28:46.755Z",
                "totalCount": 10
            }
        ]
    },
    example_request_2: {
        "startDate": "2017-05-31",
        "endDate": "2017-02-01",
        "minCount": 10,
        "maxCount": 3000
    },
    example_response_2: {
        "code": 1,
        "msg": "Error",
        "description": "The start date should be less than or equal to the end date"
    },
    example_request_3: {
        "startDate": "2017-01-31",
        "endDate": "2017-02-01",
        "minCount": 3010,
        "maxCount": 3000
    },
    example_response_3: {
        "code": 1,
        "msg": "Error",
        "description": "The minCount should be less than or equal to the maxCount"
    },
    example_request_4: {
        "startDate": "2017-01-31",
        "endDate": "2017-02-01",
        "minCount": 15,
        "maxCount": 3000
    },
    example_response_4: {
        "code": 0,
        "msg": "Success",
        "description": "No record was found with the given attributes"
    },
    example_request_5: {
        "startDate": "2017-01-31",
        "endDate": "2018-02-01",
        "minCount": 7,
        "maxCount": 7
    },
    example_response_5: {
        "code": 0,
        "msg": "Success",
        "records": [
            {
                "key": "xnKY7wZoZ0gz3FHx",
                "createdAt": "2017-01-31T10:17:35.103Z",
                "totalCount": 7
            },
            {
                "key": "2pwjFzvLZaTAXPjm",
                "createdAt": "2017-01-31T10:25:12.108Z",
                "totalCount": 7
            },
            {
                "key": "ey4bQ9v61YjUtbtB",
                "createdAt": "2017-01-31T12:33:32.394Z",
                "totalCount": 7
            },
            {
                "key": "jc2jTtWFJq3K2OLy",
                "createdAt": "2017-01-31T13:04:30.812Z",
                "totalCount": 7
            },
            {
                "key": "odwJiqDl9EFbI0qc",
                "createdAt": "2017-01-31T15:00:39.805Z",
                "totalCount": 7
            },
            {
                "key": "njQcXNKnf4AgCX7Y",
                "createdAt": "2017-02-01T03:53:55.053Z",
                "totalCount": 7
            },
            {
                "key": "eucSWkN1s0pWJUDM",
                "createdAt": "2017-02-01T14:33:00.052Z",
                "totalCount": 7
            },
            {
                "key": "PTAlpQaj8hN5vS6y",
                "createdAt": "2017-02-01T17:19:17.258Z",
                "totalCount": 7
            },
            {
                "key": "7T2VGTjro2HSJhDe",
                "createdAt": "2017-02-01T21:57:13.270Z",
                "totalCount": 7
            },
            {
                "key": "HzsiEsrUEga7b1og",
                "createdAt": "2017-02-02T06:12:53.880Z",
                "totalCount": 7
            },
            {
                "key": "p7Soae0GP6c31lEl",
                "createdAt": "2017-02-02T08:41:45.503Z",
                "totalCount": 7
            },
            {
                "key": "BMOvtii6GR8UbmfV",
                "createdAt": "2017-02-02T09:19:49.880Z",
                "totalCount": 7
            },
            {
                "key": "RJZjowIebLtfytrV",
                "createdAt": "2017-02-02T13:15:45.128Z",
                "totalCount": 7
            },
            {
                "key": "DHAjNyEhuL2VNFew",
                "createdAt": "2017-02-02T13:31:05.928Z",
                "totalCount": 7
            },
            {
                "key": "I7p2EoLm1R6l0aQI",
                "createdAt": "2017-02-02T17:37:25.033Z",
                "totalCount": 7
            },
            {
                "key": "ZO5A4u3hYlFkjIpo",
                "createdAt": "2017-02-02T17:55:29.538Z",
                "totalCount": 7
            },
            {
                "key": "V8Mpatp0kj582ANA",
                "createdAt": "2017-02-02T20:28:45.454Z",
                "totalCount": 7
            },
            {
                "key": "bjKH0kBdbyKRRPRX",
                "createdAt": "2017-02-03T05:51:26.749Z",
                "totalCount": 7
            },
            {
                "key": "lLCdsOm8oF4Bi27x",
                "createdAt": "2017-02-03T07:25:23.160Z",
                "totalCount": 7
            },
            {
                "key": "k4xuYd14oWgtYUf6",
                "createdAt": "2017-02-03T09:29:51.431Z",
                "totalCount": 7
            },
            {
                "key": "Joy8FAAAAhyhJ4iN",
                "createdAt": "2017-02-03T13:51:55.814Z",
                "totalCount": 7
            },
            {
                "key": "DEDQitOobujdtlLl",
                "createdAt": "2017-02-03T14:13:20.182Z",
                "totalCount": 7
            },
            {
                "key": "iy8dlxfrc1oIREmX",
                "createdAt": "2017-02-04T01:00:13.602Z",
                "totalCount": 7
            },
            {
                "key": "TzSTMPaAv72AMsB6",
                "createdAt": "2017-02-04T02:08:36.383Z",
                "totalCount": 7
            },
            {
                "key": "mrc2fjafP2ILlGSY",
                "createdAt": "2017-02-04T09:46:16.123Z",
                "totalCount": 7
            },
            {
                "key": "FTRjwjZWYs1SRNeo",
                "createdAt": "2017-02-04T14:23:19.601Z",
                "totalCount": 7
            },
            {
                "key": "kNi0kzXlRQJevA9l",
                "createdAt": "2017-02-04T16:40:10.385Z",
                "totalCount": 7
            },
            {
                "key": "QmNvltwESLseYs0k",
                "createdAt": "2017-02-04T17:40:41.708Z",
                "totalCount": 7
            },
            {
                "key": "ry2mJhfUpQUjYyDo",
                "createdAt": "2017-02-04T18:25:32.078Z",
                "totalCount": 7
            },
            {
                "key": "8IyrcubVZJCsKcVa",
                "createdAt": "2017-02-04T23:15:27.876Z",
                "totalCount": 7
            },
            {
                "key": "PT5GVSqjbic1iso9",
                "createdAt": "2017-02-05T08:25:11.082Z",
                "totalCount": 7
            },
            {
                "key": "Ue7FGsPJABJ8HYDz",
                "createdAt": "2017-02-06T13:12:42.360Z",
                "totalCount": 7
            },
            {
                "key": "5wxBAO4a1IFDMqM7",
                "createdAt": "2017-02-07T02:19:07.736Z",
                "totalCount": 7
            },
            {
                "key": "FDgRU3Pvm61fbTcB",
                "createdAt": "2017-02-07T04:24:25.019Z",
                "totalCount": 7
            },
            {
                "key": "jCio7gDYZ23lafHI",
                "createdAt": "2017-02-07T10:06:38.556Z",
                "totalCount": 7
            },
            {
                "key": "8oDJX4FosoHgkUUz",
                "createdAt": "2017-02-07T13:23:38.320Z",
                "totalCount": 7
            },
            {
                "key": "KQ9tA5jEjIsnB15F",
                "createdAt": "2017-02-07T16:30:37.417Z",
                "totalCount": 7
            },
            {
                "key": "ws8R0scH0QS6AMqx",
                "createdAt": "2017-02-07T21:27:09.807Z",
                "totalCount": 7
            },
            {
                "key": "QF2SQg0AfaV1KfRM",
                "createdAt": "2017-02-08T00:00:23.735Z",
                "totalCount": 7
            },
            {
                "key": "gzquvPedbU9yBkLB",
                "createdAt": "2017-02-08T00:34:22.539Z",
                "totalCount": 7
            },
            {
                "key": "tMDRkpt2eX3CrvCl",
                "createdAt": "2017-02-08T02:25:42.373Z",
                "totalCount": 7
            },
            {
                "key": "zxjKHpbtr5beA7sA",
                "createdAt": "2017-02-08T12:42:04.014Z",
                "totalCount": 7
            },
            {
                "key": "5vrSgolo0EfCrolO",
                "createdAt": "2017-02-08T14:46:45.209Z",
                "totalCount": 7
            },
            {
                "key": "eZDpq7KBeYXwPQt4",
                "createdAt": "2017-02-08T15:39:46.331Z",
                "totalCount": 7
            },
            {
                "key": "TAHkaAPwIrKo0o7X",
                "createdAt": "2017-02-09T00:05:01.462Z",
                "totalCount": 7
            },
            {
                "key": "fH1qlzCcmxJ6TgK0",
                "createdAt": "2017-02-09T00:13:29.998Z",
                "totalCount": 7
            },
            {
                "key": "GDvUfYWd3mTRNJXP",
                "createdAt": "2017-02-09T09:04:45.336Z",
                "totalCount": 7
            },
            {
                "key": "DxI0N92tBnofOOgU",
                "createdAt": "2017-02-09T10:12:06.875Z",
                "totalCount": 7
            },
            {
                "key": "tEdmgmBH0FimUvTB",
                "createdAt": "2017-02-09T10:15:23.881Z",
                "totalCount": 7
            },
            {
                "key": "3LjCAH4rtQIcjm2c",
                "createdAt": "2017-02-09T10:46:02.717Z",
                "totalCount": 7
            },
            {
                "key": "88mvSS8m9JAeI2hu",
                "createdAt": "2017-02-09T11:28:57.574Z",
                "totalCount": 7
            },
            {
                "key": "u3klPSTz8eaLMR57",
                "createdAt": "2017-02-09T16:02:03.418Z",
                "totalCount": 7
            },
            {
                "key": "jc6UJfzKX0zZtoOF",
                "createdAt": "2017-02-10T00:18:36.159Z",
                "totalCount": 7
            },
            {
                "key": "zEqQBPBoH5jspbkp",
                "createdAt": "2017-02-10T02:50:21.691Z",
                "totalCount": 7
            },
            {
                "key": "RCZfA079YCahXda4",
                "createdAt": "2017-02-10T03:03:14.355Z",
                "totalCount": 7
            },
            {
                "key": "CMonLbJOnpx36wGS",
                "createdAt": "2017-02-10T22:40:39.626Z",
                "totalCount": 7
            },
            {
                "key": "yeMb4bdCGG5UWycM",
                "createdAt": "2017-02-11T08:47:24.632Z",
                "totalCount": 7
            },
            {
                "key": "Hsse36Dp4FYNkmqN",
                "createdAt": "2017-02-11T09:55:27.353Z",
                "totalCount": 7
            },
            {
                "key": "JTJybvBhQ2PQFYy4",
                "createdAt": "2017-02-11T11:39:22.217Z",
                "totalCount": 7
            },
            {
                "key": "uuThruM495yRXuuW",
                "createdAt": "2017-02-11T13:12:53.497Z",
                "totalCount": 7
            },
            {
                "key": "fOVNvIDUBUoDVUqh",
                "createdAt": "2017-02-11T18:39:00.394Z",
                "totalCount": 7
            },
            {
                "key": "Y26rtDCS6c1Y6FgB",
                "createdAt": "2017-02-11T20:54:12.021Z",
                "totalCount": 7
            },
            {
                "key": "P69FxZv6hNwwYhdU",
                "createdAt": "2017-02-12T07:32:33.271Z",
                "totalCount": 7
            },
            {
                "key": "jmUTzWLq3Ps9w9R5",
                "createdAt": "2017-02-12T18:00:48.676Z",
                "totalCount": 7
            },
            {
                "key": "wBnuf3mr4kyUwp0b",
                "createdAt": "2017-02-13T09:52:12.206Z",
                "totalCount": 7
            },
            {
                "key": "EY7EGCwId0MNrl39",
                "createdAt": "2017-02-13T17:23:21.396Z",
                "totalCount": 7
            },
            {
                "key": "MvhA5S4rO5yty1zx",
                "createdAt": "2017-02-13T23:31:46.745Z",
                "totalCount": 7
            },
            {
                "key": "QpBQ0B2fw9KZt9Cx",
                "createdAt": "2017-02-14T05:00:24.096Z",
                "totalCount": 7
            },
            {
                "key": "6Lm4FrrfdKTKYYj9",
                "createdAt": "2017-02-14T05:44:59.979Z",
                "totalCount": 7
            },
            {
                "key": "FGXgtmdv9JDX7eMW",
                "createdAt": "2017-02-14T22:39:08.871Z",
                "totalCount": 7
            },
            {
                "key": "AhzTb78xtXGyDvlO",
                "createdAt": "2017-02-15T04:23:31.419Z",
                "totalCount": 7
            },
            {
                "key": "K0fZ6vsLozc6sTVI",
                "createdAt": "2017-02-15T05:56:44.045Z",
                "totalCount": 7
            },
            {
                "key": "EGpGKCeDGboq2fwB",
                "createdAt": "2017-02-15T06:03:16.070Z",
                "totalCount": 7
            },
            {
                "key": "299PK315swvMZ2w3",
                "createdAt": "2017-02-15T12:32:09.474Z",
                "totalCount": 7
            },
            {
                "key": "HpjJaMKFYnfGbpu5",
                "createdAt": "2017-02-15T20:09:05.818Z",
                "totalCount": 7
            },
            {
                "key": "IAeiDvaHXMOdSEg2",
                "createdAt": "2017-02-15T21:52:32.356Z",
                "totalCount": 7
            },
            {
                "key": "zN9Pbdmsqq3rYgE9",
                "createdAt": "2017-02-15T22:43:54.918Z",
                "totalCount": 7
            },
            {
                "key": "YRggel0b7HGvcSqb",
                "createdAt": "2017-02-15T23:02:03.355Z",
                "totalCount": 7
            },
            {
                "key": "meN11OQNinqxGPjz",
                "createdAt": "2017-02-15T23:14:20.435Z",
                "totalCount": 7
            },
            {
                "key": "mxxXYDUnoEIeuZHJ",
                "createdAt": "2017-02-16T09:18:12.240Z",
                "totalCount": 7
            },
            {
                "key": "drQEslJQwc2RDEyP",
                "createdAt": "2017-02-16T16:01:43.832Z",
                "totalCount": 7
            },
            {
                "key": "iuauMpXbxw2PB9py",
                "createdAt": "2017-02-16T16:21:53.334Z",
                "totalCount": 7
            },
            {
                "key": "yhCWepwVQvt2gFbZ",
                "createdAt": "2017-02-16T23:29:42.366Z",
                "totalCount": 7
            },
            {
                "key": "VXFXcCoFTsUFZ139",
                "createdAt": "2017-02-17T03:33:16.613Z",
                "totalCount": 7
            },
            {
                "key": "0qTpPQwLrGFiLUt2",
                "createdAt": "2017-02-17T03:41:32.778Z",
                "totalCount": 7
            },
            {
                "key": "ypaRiIs0luOuwAtb",
                "createdAt": "2017-02-17T18:53:49.056Z",
                "totalCount": 7
            },
            {
                "key": "ZTkyuFDs7oqep7G7",
                "createdAt": "2017-02-17T19:15:03.350Z",
                "totalCount": 7
            },
            {
                "key": "lfdHFHoAGiz3YdMg",
                "createdAt": "2017-02-17T23:30:41.278Z",
                "totalCount": 7
            },
            {
                "key": "Ir6LStAErxXeM9bn",
                "createdAt": "2017-02-18T00:54:59.881Z",
                "totalCount": 7
            },
            {
                "key": "IL0UuhSgwgkOh5k1",
                "createdAt": "2017-02-18T06:46:44.916Z",
                "totalCount": 7
            },
            {
                "key": "zbC2l108bwfWuesb",
                "createdAt": "2017-02-18T08:04:58.297Z",
                "totalCount": 7
            },
            {
                "key": "ZFSJXxABTdgTr4yd",
                "createdAt": "2017-02-18T09:00:56.820Z",
                "totalCount": 7
            },
            {
                "key": "2AIAcTmdQdmN2lwz",
                "createdAt": "2017-02-18T12:15:12.232Z",
                "totalCount": 7
            },
            {
                "key": "Ujj50PA0kjnubUJu",
                "createdAt": "2017-02-18T15:33:12.796Z",
                "totalCount": 7
            },
            {
                "key": "r1Sk2TmBUIjEnLty",
                "createdAt": "2017-02-18T16:10:47.977Z",
                "totalCount": 7
            },
            {
                "key": "sZ7yVk74wqhWux3G",
                "createdAt": "2017-02-18T17:08:58.243Z",
                "totalCount": 7
            },
            {
                "key": "HENbKSX7QqmY9ugn",
                "createdAt": "2017-02-18T19:48:17.384Z",
                "totalCount": 7
            },
            {
                "key": "LKF5vq1v2nuHiGoF",
                "createdAt": "2017-02-18T20:32:26.256Z",
                "totalCount": 7
            },
            {
                "key": "UfsH98L53nywX5LU",
                "createdAt": "2017-02-19T02:11:07.642Z",
                "totalCount": 7
            },
            {
                "key": "gjLgqdluiJl6BGLf",
                "createdAt": "2017-02-19T04:48:08.797Z",
                "totalCount": 7
            },
            {
                "key": "tUShHSSWrOhIm5tV",
                "createdAt": "2017-02-19T07:23:07.748Z",
                "totalCount": 7
            },
            {
                "key": "K4HmyvWwbTtop7wn",
                "createdAt": "2017-02-19T12:46:25.074Z",
                "totalCount": 7
            },
            {
                "key": "VVi2U6JUn23Yoo9l",
                "createdAt": "2017-02-19T15:59:02.741Z",
                "totalCount": 7
            },
            {
                "key": "cwZF03BVy8d0hGC6",
                "createdAt": "2017-02-19T17:39:06.288Z",
                "totalCount": 7
            },
            {
                "key": "ARDiajrnNoFlfy6X",
                "createdAt": "2017-02-19T20:01:44.701Z",
                "totalCount": 7
            },
            {
                "key": "shA85mmCYXxof3fI",
                "createdAt": "2017-02-19T22:11:48.958Z",
                "totalCount": 7
            },
            {
                "key": "PKF4WNzZ41gcecZJ",
                "createdAt": "2017-02-20T00:07:11.565Z",
                "totalCount": 7
            },
            {
                "key": "47vND62QzlWpK7Hv",
                "createdAt": "2017-02-20T02:14:32.042Z",
                "totalCount": 7
            },
            {
                "key": "UXADswDRXMZPO0et",
                "createdAt": "2017-02-20T05:06:37.656Z",
                "totalCount": 7
            },
            {
                "key": "FRBtGRPvCEiXxOxc",
                "createdAt": "2017-02-20T12:51:47.107Z",
                "totalCount": 7
            },
            {
                "key": "wRovNxhBn8SITyiA",
                "createdAt": "2017-02-20T15:09:25.758Z",
                "totalCount": 7
            },
            {
                "key": "IeRqrunqJbfLNQ0W",
                "createdAt": "2017-02-20T15:54:46.078Z",
                "totalCount": 7
            },
            {
                "key": "kyKIVFxGj3S5mup1",
                "createdAt": "2017-02-20T23:20:08.257Z",
                "totalCount": 7
            },
            {
                "key": "K0ADVpUIo4KzIGc2",
                "createdAt": "2017-02-21T03:28:28.355Z",
                "totalCount": 7
            },
            {
                "key": "8IN0xmOQfEGj1p3F",
                "createdAt": "2017-02-21T09:42:08.854Z",
                "totalCount": 7
            },
            {
                "key": "czqInbvnUzeLit94",
                "createdAt": "2017-02-21T11:14:12.364Z",
                "totalCount": 7
            },
            {
                "key": "zVOCLTAZEHZ7TpSm",
                "createdAt": "2017-02-21T17:27:55.687Z",
                "totalCount": 7
            },
            {
                "key": "393TmNfAr5GnjqXu",
                "createdAt": "2017-02-21T23:44:28.453Z",
                "totalCount": 7
            },
            {
                "key": "WiYowfgyYyiCK6VE",
                "createdAt": "2017-02-22T12:51:42.612Z",
                "totalCount": 7
            },
            {
                "key": "yRClwzqsqn8T5kq2",
                "createdAt": "2017-02-22T14:28:08.382Z",
                "totalCount": 7
            }
        ]
    }
};
