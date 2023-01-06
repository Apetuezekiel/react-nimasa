import $ from 'jquery'

let today = todayDate();
let date = '2022-11-01';
// let date = getDateXDaysAgo(22);
alert(date);
let vesselTypeBag = [];
let vesselTypes = [];
let vesselCallsUrlBase = `https://api.lloydslistintelligence.com/v1/vesselcalls?output=json&dateRange=${date}%E2%80%93${date}&vesselId=`;
// alert(vesselCallsUrlBase)
let queryString;
console.log();
let queryStringArr = [];
let basicCharUrlBase =
	'https://api.lloydslistintelligence.com/v1/vesselbasiccharacteristics?output=json&vesselId=';
let keysArrival = JSON.parse(localStorage.getItem('keys'));

//vessel Ids variables declaration
let dayVesselIds;

//vessel Calls vairiables declarations
let vesselCallsStored;
let finalVesselCallsStored = '';

//Basic char variables declarations
let basicCharStored;
let finalBasicCharStored = '';

let arrangedVesselCalls;

let basicChar;
let vesselCalls;
let vesselCallsVessels = [];

const arrangedData = {};

const settings = {
	async: true,
	crossDomain: true,
	url: `https://api.lloydslistintelligence.com/v1/placecalls?output=json&country=NGA&dateRange=${date}%E2%80%93${date}&=`,
	method: 'GET',
	headers: {
		Authorization: keysArrival.API_KEY,
	},
};

let basicCharBox = [];
let vesselCallsBox = [];

const getDate = () => {
	const date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	// This arrangement can be altered based on how we want the date's format to appear.
	let currentDate = `${day}-${month}-${year}`;
	// console.log(currentDate); // "17-6-2022"
	return currentDate;
};

const start = () => {
	new Promise(function (resolve, reject) {
		$.ajax(settings).done(function (response) {
			let data = response.Data.Places;
			console.log('Places Data', data);
			dayVesselIds = JSON.stringify(data);
			// dayVesselIdsTrimmed = JSON.stringify(data).slice(0,5000);
			localStorage.setItem('dayVesselIds', JSON.stringify(data));

			let retrieved = localStorage.getItem('dayVesselIds');
			// console.log('JSON.parse(retrieved)', JSON.parse(retrieved));

			const settingsVesselTypes = {
				async: true,
				crossDomain: true,
				url: 'http://app.conveyoo.com/nimasa/api2/crud/api/vessel_types_international/all?limit=1000&sort_order=ASC',
				method: 'GET',
				headers: {
					cookie:
						'LEGUhfoW=56cd076c17729bd9558bffacf6b8c5caed0d453c; language=english; JrGEymtU=0cf295e38885568f30c32b35bd75e081f478f76d',
					'X-Api-Key': '673E9F3F4047CEF5EBAE76F2B9043046',
					'X-Token':
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NzEwMjA5MDMsImV4cCI6MTcwMjEyNDkwM30.6yl1Uxbe66-BcmvEtOkKR9vSXm2h88SVrUq-JZdanVY',
				},
			};

			//BEGIN-------GET INTERNATIONAL VESSELS
			$.ajax(settingsVesselTypes).done(function (vesselType_res) {
				let vesselType_data = vesselType_res.data.vessel_types_international;
				vesselType_data.map((item) => {
					vesselTypes.push(
						item.vessel_type.toLowerCase().replace(/[^A-Z0-9]+/gi, '_')
					);
				});
				//END-------GET INTERNATIONAL VESSELS

				placeBag = response.Data.Places;
				// console.log('PLACEBAGGGG', placeBag);
				placeBag.map((item) => {
					let calls = item.calls;
					calls.map((item1) => {
						// console.log('vesselTypes', vesselTypes);
						vesselTypes.map((item2) => {
							if (
								item2 ===
								item1.vessel.vesselType
									.toLowerCase()
									.replace(/[^A-Z0-9]+/gi, '_')
							) {
								// console.log("Found them", item1.vessel.vesselType.toLowerCase().replace(/[^A-Z0-9]+/gi, '_'));
								vesselTypeBag.push(item1.vessel.vesselId);
								// console.log('vesselTypeBag', vesselTypeBag);
							}
						});
					});
				});
				if (vesselTypeBag.length > 1) {
					console.log(
						'vesselTypeBag.length',
						vesselTypeBag.length,
						Math.ceil(vesselTypeBag.length / 10)
					);
					resolve(fetchRecordsInBatches(vesselTypeBag));
				} else {
					reject('Issues found');
				}
			});
		});
	});
};

let makeCount = 0;
function fetchRecordsInBatches(makeArray) {
	// VESSEL CALLS
	new Promise((resolve, reject) => {
		while (makeArray.length) {
			let confirmSize = makeArray.length / 10;
			// console.log('confirmSize', Math.floor(confirmSize));
			makeCount++;
			// console.log('You have counted this times =', makeCount);
			let b = makeArray.splice(0, 10); //takes 10 of the arrays
			queryString = String(b);
			console.log('queryStringggggggggg', queryString);
			queryStringArr.push(queryString);

			const vesselCallsSettings = {
				async: true,
				crossDomain: true,
				url: vesselCallsUrlBase + queryString,
				method: 'GET',
				headers: {
					Authorization: keysArrival.API_KEY,
				},
			};

			$.ajax(vesselCallsSettings).done(function (response) {
				// let bag = [];
				vesselCalls = response.Data.Vessels;
				vesselCallsBox.push(vesselCalls);
			});

			const basicCharSettings = {
				async: true,
				crossDomain: true,
				url: basicCharUrlBase + queryString,
				method: 'GET',
				headers: {
					Authorization: keysArrival.API_KEY,
				},
			};

			$.ajax(basicCharSettings).done(function (response) {
				basicChar = response.Data.vessels;
				basicCharBox.push(basicChar);
			});
		}
	});

	setTimeout(() => {
		localStorage.setItem('vesselCalls', JSON.stringify(vesselCallsBox));
		localStorage.setItem('basicChar', JSON.stringify(basicCharBox));
		let payloadUpward = syncVesselDataForUpload(vesselCallsBox, basicCharBox);
		console.log('payloadUpward', payloadUpward);
		basicCharStored = JSON.stringify(payloadUpward.basicChar);
		// console.log('basicCharStored', basicCharStored);
		vesselCallsStored = JSON.stringify(payloadUpward.vesselCalls);
		// console.log('vesselCallsStored', vesselCallsStored);

		// postData(vesselCallsStored, basicCharStored, date, dayVesselIds)
		console.log('All done');
	}, 8000);
	// });
}

function todayDate() {
	const timeElapsed = Date.now();
	const today = new Date(timeElapsed);
	return today.toISOString().substring(0, 10);
}

function getDateXDaysAgo(numOfDays) {
	const timeElapsed = Date.now();
	const today = new Date(timeElapsed);
	let getDay = Number(today.toISOString().substring(8, 10)) - numOfDays;
	let yearMonthISO = today.toISOString().substring(0, 8);
	let xDate = yearMonthISO + String(getDay);
	return xDate;
}

const postData = (vesselCalls, basicChar, date, vesselIds) => {
	if (vesselCalls && basicChar) {
		const form = new FormData();
		form.append('date', date);
		form.append('placecalls', vesselIds);
		form.append('vesselcalls', vesselCalls);
		form.append('basicchar', basicChar);
		form.append('eta', 'wwwwww');

		const postData = {
			async: true,
			crossDomain: true,
			url: 'http://app.conveyoo.com/nimasa/api2/crud/api/vessel_records/add',
			method: 'POST',
			headers: {
				cookie:
					'LEGUhfoW=56cd076c17729bd9558bffacf6b8c5caed0d453c; language=english; JrGEymtU=f9075bdb9985ea567664907a9a61aa3d6231d1ef',
				'X-Api-Key': '673E9F3F4047CEF5EBAE76F2B9043046',
				'X-Token':
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NzEwMjA5MDMsImV4cCI6MTcwMjEyNDkwM30.6yl1Uxbe66-BcmvEtOkKR9vSXm2h88SVrUq-JZdanVY',
			},
			processData: false,
			contentType: false,
			mimeType: 'multipart/form-data',
			data: form,
		};

		$.ajax(postData).done(function (response) {
			console.log('Post to DB status', response);
		});
	} else {
		alert(
			'Nothing posted to DB, Kindly contact your developers to solve this issue for you'
		);
	}
};

const syncVesselDataForUpload = (vesselCallsData, basicCharData) => {
	let vesselCollector = [];
	let basicObjectId;
	let basicCollector = [];

	basicCharData.map((item) => {
		for (let i = 0; i <= item.length; i++) {
			basicObjectId = item[0].vesselId;
		}
		basicCollector.push({
			itemLength: item.length,
			id: basicObjectId,
		});
	});
	console.log('basicCollector', basicCollector);

	basicCollector.map((item) => {
		item.status = '';
	});
	basicCollector.map((item, index) => {
		vesselCallsData.map((item2) => {
			item2.map((item3) => {
				if (
					item.itemLength === item2.length &&
					item.id === item3.vessel.vesselId &&
					item.status !== 'checked'
				) {
					item.status = 'checked';
					// console.log('GOt 1');
					vesselCollector.push(item2);
				}
			});
		});

		// console.log('basicCollector22222', basicCollector);
	});
	console.log('VesselCollector', vesselCollector);
	arrangedData.vesselCalls = vesselCollector;
	arrangedData.basicChar = basicCharData;

	return arrangedData;
};

// start();

// const settings3 = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://api.lloydslistintelligence.com/v1/vesselcalls?output=json&vesselId=286936%2C283377%2C11230909%2C13508192%2C354717%2C354717%2C2714727%2C247057%2C348050%2C755058%2C13606067%2C12942388%2C10301113%2C355226&dateRange=2022-12-01%E2%80%932022-12-01',
// 	method: 'GET',
// 	headers: {
// 		Authorization:
// 			'eyJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJuYmYiOjE2NzEwMTg0OTgsImV4cCI6MTY3MzYxMDQ5OCwiaXNzIjoiaHR0cDovL2xsb3lkc2xpc3RpbnRlbGxpZ2VuY2UuY29tIiwiY2xpZW50X2lkIjoiQ3VzdG9tZXJBcGkiLCJzdWIiOiJzdXJ2ZWlsbGFuY2UuaHFAbmltYXNhLmdvdi5uZyIsImF1dGhfdGltZSI6MTY3MTAxODQ5OCwiaWRwIjoic2FsZXNmb3JjZSIsImFjY2Vzc1Rva2VuIjoiMDBENTgwMDAwMDBiUzlNIUFRY0FRTjRMNTJrZUVmZG9FUlVZVlJqY0lYQVpiMmxLZTdTcDlDZDFzSzFCV3o1cDRFUnBMMHlrV0FMQ3NVaHBCVDF6Z2xVbXFxa0hSSEFCbXBsYXVrMFZ0WXZHaFVQOCIsImVudGl0bGVtZW50VHlwZSI6IlN1YnNjcmliZXIiLCJyb2xlIjoiU2Vhc2VhcmNoZXJQcmVtaXVtIiwic3Vic2NyaXB0aW9uSW5mbyI6IlNlYXNlYXJjaGVyIFByZW1pdW0jU2Vhc2VhcmNoZXJQcmVtaXVtIzIwMjMtMTAtMzAjVHJ1ZSIsInNlcnZpY2VJZCI6ImE0ZDRJMDAwMDAxOHV5alFBQSIsInVzZXJuYW1lIjoic3VydmVpbGxhbmNlLmhxQG5pbWFzYS5nb3YubmciLCJ1c2VySWQiOiIwMDU1ODAwMDAwNG5wcEZBQVEiLCJjb250YWN0QWNjb3VudElkIjoiMDAxNTgwMDAwMGNHMEVmQUFLIiwidXNlclR5cGUiOiJDc3BMaXRlUG9ydGFsIiwiYWNjb3VudE5hbWUiOiJOaWdlcmlhbiBNYXJpdGltZSBBZG1pbmlzdHJhdGlvbiBhbmQgU2FmZXR5IEFnZW5jeSIsImVtYWlsIjoic3VydmVpbGxhbmNlLmhxQG5pbWFzYS5nb3YubmciLCJnaXZlbl9uYW1lIjoiQmVybmFyZCIsImZhbWlseV9uYW1lIjoiQXd1c2EiLCJzaGlwVG8iOiIiLCJqdGkiOiJFRUQwODFEMjMzNTYxRTFDMEFCNjc2QkNDNjQ3NDBGQyIsImlhdCI6MTY3MTAxODQ5OCwic2NvcGUiOlsibGxpd2ViYXBpIl0sImFtciI6WyJjdXN0b21lckFwaV9ncmFudCJdfQ.kZj9Cd03raUKlKV72IJzNOCT52x2DwaN9E8_ZT3cVmqXAQZYZDLArxxKsUEon7IDaABEo0mGRnnMJqogRkeBvC6BSWh0t43isdzpzO8F0UPsbntdF1ilhiRil0WpaVROyQEFNKZaStyqt_gK8sk6WI0kSzoy6jew_sieirg9lyt6KJLOpK_Nrl_dFAsQ4ze3clnRbsR3RGW1Y8chgzypE7WKw8fXObogdIDjVEL-RTZKnPsvwHciQiytDNWVl1tt3yS78KiaK8mR7utvkQ9rBVtedZHZu-rOe1gOS93kHbdSRRJbMgnIUhdZaiSFdug597ot_GAtVPSgKNhj8RAZeA',
// 	},
// };

// $.ajax(settings3).done(function (response) {
// 	vesselCalls = response.Data.Vessels;
// 	console.log('vesselCalls', vesselCalls);
// 	vesselCalls.map((item) => {
// 		if (typeof item.calls !== 'undefined' && item.calls.length >= 1) {
// 			responseBagCalls = item.calls;
// 			responseBagCalls.map((item3) => {
// 				console.log(item3.);
// 			});
// 		}
// 	});
// });
