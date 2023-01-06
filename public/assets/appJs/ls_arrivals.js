//DECLARATION OF VARIABLES
import $ from "jquery";
let keysArrival = JSON.parse(localStorage.getItem('keys'));
let arrayAcc = [];
let trimmedArrayAcc = [];
let trimmedVesselTypeBox = [];
let vesselTypeBox = [];
let mapCount = 0;
let fullResponseVesselsId = '';
let responseBagCalls;
let payload;
let responseBagVessels;
var bigData2;
let placeArray = [];
let finalPayLoad = [];
let placeBag;
let table;
let queryString;
let queryStringArr = [];
let vesselTrimmed = [];
let vesselTypes = [];
let uniqueIds1 = [];
let uniqueIds = [];
let vesselcallsLoad;
let basiccharLoad;
let placementUrl =
	'https://api.lloydslistintelligence.com/v1/placecalls?output=json&country=NGA';
let placeListUrlBase =
	'https://api.lloydslistintelligence.com/v1/vesselcalls?output=json&vesselId=';
let vesselTypeDropDown = document.getElementById('vesselTypeDropDown');

let cachedpayloadAdv = JSON.parse(
	window.localStorage.getItem('cachedpayloadAdv')
);
// console.log('////////////arrival cache for now', cachedpayloadAdv);
let vesselTypeBag = [];
let viewBtn = `<button class="btn btn-primary" id="viewFull" type="submit">View Full</button>`;

const plotOnDataTable = (load) => {
	if ($.fn.dataTable.isDataTable('#arrivalTable')) {
		table = $('#arrivalTable').DataTable();
		table.clear();
		table.rows.add(load).draw();
		// <!-- table.columns([1,2,3,4]).visible(false); -->
		table.bAutoWidth = 'false';
		table.autoWidth = 'false';
		// let tableInfo =
		console.log(table.page.info().pages);
		if (table.page.info().pages === 0) {
			alert('No records found');
		}
	} else {
		table = $('#arrivalTable').DataTable({
			bAutoWidth: false,
			autoWidth: false,
			data: load,
			order: [[13, 'asc']],

			columns: [
				{ data: 'vesselId', title: 'Vessel ID', defaultContent: 'N/A' },
				{ data: 'place.placeName', title: 'Place Name', defaultContent: 'N/A' },
				{
					data: 'prevPlaceName',
					title: 'Previous Place Name',
					defaultContent: 'N/A',
				},
				{ data: 'vesselImo', title: 'IMO', defaultContent: 'N/A' },
				{ data: 'vesselName', title: 'Vessel Name', defaultContent: 'N/A' },
				{ data: 'vesselMmsi', title: 'MMSI', defaultContent: 'N/A' },
				{ data: 'callSign', title: 'Call Sign', defaultContent: 'N/A' },
				{ data: 'flag', title: 'Vessel Flag', defaultContent: 'N/A' },
				{ data: 'vesselType', title: 'Vessel Type', defaultContent: 'N/A' },
				{ data: 'grossTonnage', title: 'Gross Tonnage', defaultContent: 'N/A' },
				{ data: 'place.placeId', title: 'Place ID', defaultContent: 'N/A' },
				{ data: 'place.longitude', title: 'Longitude', defaultContent: 'N/A' },
				{ data: 'place.latitude', title: 'Latitude', defaultContent: 'N/A' },
				{
					data: 'arrivalDateOnly',
					title: 'Arrival Date',
					defaultContent: 'N/A',
				},
				{ data: 'arrivalTime', title: 'Arrival Time', defaultContent: 'N/A' },
				{
					data: 'sailingDateOnly',
					title: 'Sailing Date',
					defaultContent: 'N/A',
				},
				{ data: 'sailingTime', title: 'Sailing Time', defaultContent: 'N/A' },
				// { data: 'viewBtn', title: 'More', defaultContent: 'N/A' },
			],
		});
	}
};

$('#exportArrival').click(function () {
  $("#arrivalTable").table2excel({
    // exclude CSS class
    exclude: ".noExl",
    name: "Worksheet Name",
    filename: "Nimasa-Vessel-Arrival-Records", //do not include extension
    fileext: ".xls" // file extension
  }); 
});

// const fnExcelReport = () => {
// 	let tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
// 	let textRange;
// 	let j = 0;
// 	let tab = document.getElementById('arrivalTable'); // id of table

// 	for (j = 0; j < tab.rows.length; j++) {
// 		tab_text = tab_text + tab.rows[j].innerHTML + '</tr>';
// 		//tab_text=tab_text+"</tr>";
// 	}

// 	tab_text = tab_text + '</table>';
// 	tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ''); //remove if u want links in your table
// 	tab_text = tab_text.replace(/<img[^>]*>/gi, ''); // remove if u want images in your table
// 	tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ''); // reomves input params

// 	let ua = window.navigator.userAgent;
// 	let msie = ua.indexOf('MSIE ');

// 	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
// 		// If Internet Explorer
// 		txtArea1.document.open('txt/html', 'replace');
// 		txtArea1.document.write(tab_text);
// 		txtArea1.document.close();
// 		txtArea1.focus();
// 		sa = txtArea1.document.execCommand(
// 			'SaveAs',
// 			true,
// 			'Say Thanks to Sumit.xls'
// 		);
// 	} //other browser not tested on IE 11
// 	else
// 		sa = window.open(
// 			'data:application/vnd.ms-excel,' + encodeURIComponent(tab_text)
// 		);

// 	return sa;
// };

//////////////////////////GOOGLE MAPS FUNCTIONALITY BEGINS///////////////////////////////////////
//MAP CALLBACK FUNCTION WRAPPER FOR PARAMETER PASSING
const callInitMap = (mapData) => {
	return function initMap() {
		const map = new google.maps.Map(document.getElementById('mapArrival'), {
			zoom: 4,
			center: { lat: 9.082, lng: 8.6753 },
		});

		const infoWindow = new google.maps.InfoWindow({
			content: '',
			disableAutoPan: true,
		});

		const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Create an array of alphabetical characters used to label the markers.

		let myLocations = [];
		let myLocationTags = [];
		mapData.map((item) => {
			myLocations.push({ lat: item.place.latitude, lng: item.place.longitude });
			myLocationTags.push(
				item.vesselName + ' currently in ' + item.place.placeName
			);
			// addMarker({ lat: item.place.latitude, lng: item.place.longitude }, item.vesselName + " currently in " + item.place.placeName)
		});
		mapData.map((item) => {
			// console.log('cachedpayloadAdv------item', item.vesselName);
			addMarker(item.vesselName + ' currently in ' + item.place.placeName);
		});
		// console.log('myLocationsTags', myLocationTags);
		// Add some markers to the map.
		function addMarker() {
			const markers = myLocations.map((position, i) => {
				const label = labels[i % labels.length];
				const marker = new google.maps.Marker({
					position,
					label,
					title: myLocationTags[i],
				});
				// markers can only be keyboard focusable when they have click listeners
				// open info window when marker is clicked
				marker.addListener('click', () => {
					infoWindow.setContent(label);
					infoWindow.open(map, marker);
				});
				return marker;
			});
			// Add a marker clusterer to manage the markers.
			//   new MarkerClusterer({ markers, map });
			const markerCluster = new markerClusterer.MarkerClusterer({
				map,
				markers,
			});
		}

		window.initMap = initMap;
	};
};

//CALL MAP
const callMap = (load) => {
	$('#mapArrival').show();
	loadCallMapArrivalView(keysArrival.GOOGLE_MAP_API, callInitMap(load));
};

const loadCallMapArrivalView = (src, callbackFunction) => {
	let mapScript = document.getElementById('mapScript');
	if (mapScript) {
		// document.getElementsByTagName('body')[0].removeChild('mapScript')
		let body = document.getElementsByTagName('body')[0];
		if (body) {
			var js = document.createElement('script');
			js.type = 'text/javascript';
			js.src = src;
			js.setAttribute('id', 'mapScript');
			body.appendChild(js);
		} else {
			throw 'No <head> element found.';
		}

		if (callbackFunction != null) {
			js.onload = callbackFunction;
		}
	} else {
		let body = document.getElementsByTagName('body')[0];
		if (body) {
			var js = document.createElement('script');
			js.type = 'text/javascript';
			js.src = src;
			js.setAttribute('id', 'mapScript');
			body.appendChild(js);
		} else {
			throw 'No <head> element found.';
		}

		if (callbackFunction != null) {
			js.onload = callbackFunction;
		}
	}
};
//////////////////////////GOOGLE MAPS FUNCTIONALITY ENDS///////////////////////////////////////

const getDateXDaysAgo = (numOfDays) => {
	const timeElapsed = Date.now();
	const today = new Date(timeElapsed);
	let getDay = Number(today.toISOString().substring(8, 10)) - numOfDays;
	let yearMonthISO = today.toISOString().substring(0, 8);
	let xDate = yearMonthISO + String(getDay);

	return xDate;
};

// const todayDate = () => {
// 	const timeElapsed = Date.now();
// 	const today = new Date(timeElapsed);
// 	return today.toISOString().substring(0, 10);
// };

//BUTTONS
$('#refresh').click(function () {
	location.reload();
});

const clearTable = (id) => {
	if (table) {
		let table2 = $('#' + id).DataTable();
		table2.clear().draw();
	}
};

let makeCount = 0;
const recordAndMapLoad = (record, map) => {
	record;
	map;
};

//LOCAL STORAGE FUNCTIONALITY
const storeItem = (key, data) => {
	return localStorage.setItem(key, JSON.stringify(data));
};

const getStorage = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

$('#intVesselBtn').click(function () {
	console.log('got here');
});

// METRICS BASED ON RETRIEVED DATA
let vipVesselIdBag = [];
let makeCount2 = 0;
let queryString2;
let queryStringArr2 = [];

// FUNCTIONS
const start = (startIndex, dataLimit) => {
	const settings = {
		async: true,
		crossDomain: true,
		url: `http://app.conveyoo.com/nimasa/api2/crud/api/vessel_records/all?limit=${dataLimit}&sort_order=ASC&start=${startIndex}&sort_field=date`,
		method: 'GET',
		headers: {
			cookie:
				'LEGUhfoW=56cd076c17729bd9558bffacf6b8c5caed0d453c; language=english; JrGEymtU=39c6e022bd7f44648c012d265fbc4624ddb18b8b',
			'X-Api-Key': '673E9F3F4047CEF5EBAE76F2B9043046',
			'X-Token':
				'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NzEwMjA5MDMsImV4cCI6MTcwMjEyNDkwM30.6yl1Uxbe66-BcmvEtOkKR9vSXm2h88SVrUq-JZdanVY',
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		let payload = response.data.vessel_records;
		console.log('payload', payload);
		payload.map((item, index) => {
			vesselcallsLoad = JSON.parse(item.vesselcalls);
			vesselcallsLoad.map((item, index) => {
				item.map((item2) => {
					if (typeof item2.calls !== 'undefined' && item2.calls.length >= 1) {
						responseBagCalls = item2.calls;
						responseBagVessels = item2.vessel;
						responseBagCalls.map((item, index) => {
							responseBagCalls[0].vesselName = responseBagVessels.vesselName;
							responseBagCalls[0].vesselId = responseBagVessels.vesselId;
							responseBagCalls[0].vesselMmsi = responseBagVessels.vesselMmsi;
							responseBagCalls[0].vesselImo = responseBagVessels.vesselImo;
							responseBagCalls[0].viewBtn = viewBtn;
							if (responseBagCalls.length > 1) {
								responseBagCalls[0].prevSailDate =
									responseBagCalls[1].sailingDate;
								responseBagCalls[0].prevPlaceName =
									responseBagCalls[1].place.placeName;
								responseBagCalls[0].prevCountryName =
									responseBagCalls[1].place.countryName;
								console.log(
									responseBagCalls[0].place.countryCode,
									responseBagCalls[1].place.countryCode
								);
							}
							if (responseBagCalls.length > 2) {
								responseBagCalls[0].prev2SailDate =
									responseBagCalls[2].sailingDate;
								responseBagCalls[0].prev2PlaceName =
									responseBagCalls[2].place.placeName;
								responseBagCalls[0].prev2CountryName =
									responseBagCalls[2].place.countryName;
							}
							if (responseBagCalls.length > 3) {
								responseBagCalls[0].prev3SailDate =
									responseBagCalls[3].sailingDate;
								responseBagCalls[0].prev3PlaceName =
									responseBagCalls[3].place.placeName;
								responseBagCalls[0].prev3CountryName =
									responseBagCalls[3].place.countryName;
							}
						});
					}
					if (
						responseBagCalls.length > 1 &&
						responseBagCalls[0].place.countryCode === 'NGA' &&
						responseBagCalls[1].place.countryCode !== 'NGA'
					) {
						// console.log('record added');
						placeArray.push(responseBagCalls[0]);
					}
				});
			});
			basiccharLoad = JSON.parse(item.basicchar);
			placeArray.map((item) => {
				basiccharLoad.map((item2) => {
					item2.map((item3) => {
						if (item.vesselId === item3.vesselId) {
							item.callSign = item3.callSign;
							item.grossTonnage = item3.grossTonnage;
							item.vesselType = item3.vesselType;
							item.flag = item3.flag;
						}
					});
				});
				console.log('placeArray iterations', placeArray);
			});
			finalPayLoad.push(placeArray);
		});
		console.log('placeArray final', finalPayLoad.flat());
		finalPayLoad.flat().map((item) => {
			console.log(item.vesselId, item.prevCountryName);
			item.arrivalDateOnly = item.arrivalDate.slice(0, 10);
			item.arrivalTime = item.arrivalDate.slice(11, 19);
			if (item.sailingDate !== null) {
				item.sailingDateOnly = item.sailingDate.slice(0, 10);
				item.sailingTime = item.sailingDate.slice(11, 19);
			}
		});
		plotUniqueDataOnDataTable(finalPayLoad.flat(), 'callingId');
	});

	const plotUniqueDataOnDataTable = (arr, key) => {
		trimmedArrayAcc = [
			...new Map(arr.map((item) => [item[key], item])).values(),
		];
		trimmedArrayAcc.map((item, index) => {
			vesselTypeBox.push(
				`<a class="dropdown-item vesselTypes" value="${item.vesselType}">${item.vesselType}</a>`
			);
			trimmedVesselTypeBox = [...new Set(vesselTypeBox)];
		});
		trimmedVesselTypeBox.forEach((item) => {
			vesselTypeDropDown.innerHTML += item;
		});
		let vesselTypeOptions = document.querySelectorAll('.vesselTypes');
		vesselTypeOptions.forEach((item, index) => {
			if (index === 0) {
				item.addEventListener('click', () => {
					console.log('calling all types');
					plotOnDataTable(trimmedArrayAcc);
					callMap(trimmedArrayAcc);
				});
			} else {
				item.addEventListener('click', () => {
					vesselTypeBox = [];
					let vesselTypeString = item.innerHTML;
					callFilterVesselType(vesselTypeString);
				});
			}
		});
		console.log('trimmedArrayAcc', trimmedArrayAcc);
		plotOnDataTable(trimmedArrayAcc);
		callMap(trimmedArrayAcc);
		if (trimmedArrayAcc.length < 1) {
			document.getElementById('dropdownMenuButton').disabled = true;
			document.getElementById('filterTypes').disabled = true;
			alert('No records found');
		}
	};
};

$('#fetchArrival').click(function () {
	let rangeStartDateVal = $('#rangeStartDate').val();
	let rangeEndDateVal = $('#rangeEndDate').val();
	// let rangeStartDateVal = '2022-11-01';
	// let rangeEndDateVal = '2022-11-30';
	if (rangeStartDateVal && rangeEndDateVal) {
		const settings = {
			async: true,
			crossDomain: true,
			url: 'http://app.conveyoo.com/nimasa/api2/crud/api/vessel_records/all?limit=1&sort_order=ASC&start=0&sort_field=date',
			method: 'GET',
			headers: {
				cookie:
					'LEGUhfoW=56cd076c17729bd9558bffacf6b8c5caed0d453c; language=english; JrGEymtU=39c6e022bd7f44648c012d265fbc4624ddb18b8b',
				'X-Api-Key': '673E9F3F4047CEF5EBAE76F2B9043046',
				'X-Token':
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NzEwMjA5MDMsImV4cCI6MTcwMjEyNDkwM30.6yl1Uxbe66-BcmvEtOkKR9vSXm2h88SVrUq-JZdanVY',
			},
		};

		$.ajax(settings).done(function (response) {
			let recordStartDate;
			let payload = response.data.vessel_records;
			payload.map((item) => {
				recordStartDate = item.date;
			});
			const date1 = new Date(rangeStartDateVal);
			const date2 = new Date(rangeEndDateVal);
			const recordStartDated = new Date(recordStartDate);
			const diffTime = Math.abs(date2 - date1);
			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
			const diffTimeFromStart = Math.abs(date1 - recordStartDated);
			const diffDaysFromStart = Math.ceil(
				diffTimeFromStart / (1000 * 60 * 60 * 24)
			);
			const startIndex = diffDaysFromStart;
			const dataLimit = diffDays + 1;
			// console.log(diffDays);

			// alert('startIndex = ' + startIndex + ' and ' + 'dataLimit = ' + dataLimit);
			start(startIndex, dataLimit);
		});
	} else {
		alert('Please add start and end date');
	}
});

//MULTIPLE VESSEL TYPE FILTER FUNCTION BEGINS
$('#filterRecords').click(function (e) {
	e.preventDefault();
	vesselTrimmed = [];
	var filterForm = $('#filterForm').serialize();
	let filterArr = filterForm.split('&');
	filterArr.map((item) => {
		let grabIndex = item.indexOf('=');
		let paralength = item.length;
		let realParameter = item
			.substring(grabIndex + 1, paralength)
			.replace(/%20/g, ' ')
			.replace(/%2F/g, '/')
			.toLowerCase();
		trimmedArrayAcc.map((item) => {
			if (item.vesselType.toLowerCase() === realParameter) {
				// console.log(realParameter);
				vesselTrimmed.push(item);
			}
		});
	});
	console.log('blessed', vesselTrimmed);
	plotOnDataTable(vesselTrimmed);
	callMap(vesselTrimmed);
});
//MULTIPLE VESSEL TYPE FILTER FUNCTION ENDS

//SINGLE VESSELTYPE FILTER FUNCTION BEGINS
const callFilterVesselType = (string) => {
	vesselTrimmed = [];
	let parameter = string.toLowerCase();
	console.log(parameter);
	trimmedArrayAcc.map((item) => {
		if (item.vesselType.toLowerCase() === parameter) {
			console.log('item.vesselType', item.vesselType);
			console.log('parameter', parameter);
			vesselTrimmed.push(item);
		}
	});
	console.log('blessed', vesselTrimmed);
	plotOnDataTable(vesselTrimmed);
	callMap(vesselTrimmed);
};
//SINGLE VESSELTYPE FILTER FUNCTION ENDS
