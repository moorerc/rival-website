import * as React from "react";

export default class FiftyPlates extends React.PureComponent<{}, {}> {

  componentDidMount() {
    			AmCharts.makeChart("map",{
					"type": "map",
					"pathToImages": "http://www.amcharts.com/lib/3/images/",
					"addClassNames": true,
					"fontSize": 15,
					"color": "#FFFFFF",
					"projection": "mercator",
					"backgroundAlpha": 1,
					"backgroundColor": "rgba(80,80,80,1)",
					"dataProvider": {
						"map": "usaLow",
						"getAreasFromMap": true,
						"images": [
							{
								"top": 40,
								"left": 60,
								"width": 80,
								"height": 40,
								"pixelMapperLogo": true,
								"imageURL": "http://pixelmap.amcharts.com/static/img/logo.svg",
								"url": "http://www.amcharts.com"
							}
						],
						"areas": [
							{
								"id": "US-OH",
								"title": "Ohio",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-WA",
								"title": "Washington",
								"color": "rgba(75,216,181,0.8)"
              },							
              {
								"id": "US-MN",
								"title": "Minnesota",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-MI",
								"title": "Michigan",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-FL",
								"title": "Florida",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-VA",
								"title": "Virginia",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-NH",
								"title": "New Hampshire",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-TX",
								"title": "Texas",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-PA",
								"title": "Pennsylvania",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-IL",
								"title": "Illinois",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-GA",
								"title": "Georgia",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-NJ",
								"title": "New Jersey",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-AR",
								"title": "Arkansas",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-NY",
								"title": "New York",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-SC",
								"title": "South Carolina",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-MD",
								"title": "Maryland",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-IN",
								"title": "Indiana",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-TN",
								"title": "Tennessee",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-MA",
								"title": "Massachusetts",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-AL",
								"title": "Alabama",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-WI",
								"title": "Wisconsin",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-NC",
								"title": "North Carolina",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-KY",
								"title": "Kentucky",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-MO",
								"title": "Missouri",
								"color": "rgba(75,216,181,0.8)"
              },
							{
								"id": "US-CA",
								"title": "California",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-WV",
								"title": "West Virginia",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-ME",
								"title": "Maine",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-NV",
								"title": "Nevada",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-UT",
								"title": "Utah",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-NM",
								"title": "New Mexico",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-RI",
								"title": "Rhode Island",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-IA",
								"title": "Iowa",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-CT",
								"title": "Connecticut",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-AZ",
								"title": "Arizona",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-OK",
								"title": "Oklahoma",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-KS",
								"title": "Kansas",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-HI",
								"title": "Hawaii",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-NE",
								"title": "Nebraska",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-SD",
								"title": "South Dakota",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-ND",
								"title": "North Dakota",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-AK",
								"title": "Alaska",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-CO",
								"title": "Colorado",
								"color": "rgba(75,216,181,0.8)"
              },
              {
								"id": "US-MS",
								"title": "Mississippi",
								"color": "rgba(75,216,181,0.8)"
							},

							/*
							{
								"id": "US-IA",
								"title": "Iowa",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-ID",
								"title": "Idaho",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-MT",
								"title": "Montana",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-NM",
								"title": "New Mexico",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-OR",
								"title": "Oregon",
								"color": "rgba(75,216,181,0.8)"
							},
							{
								"id": "US-RI",
								"title": "Rhode Island",
								"color": "rgba(75,216,181,0.8)"
              },
              							{
								"id": "US-VT",
								"title": "Vermont",
								"color": "rgba(75,216,181,0.8)"
              },
							*/
						]
					},
					"balloon": {
						"horizontalPadding": 15,
						"borderAlpha": 0,
						"borderThickness": 1,
						"verticalPadding": 15
					},
					"areasSettings": {
						"color": "rgba(129,129,129,1)",
						"outlineColor": "rgba(80,80,80,1)",
						"rollOverOutlineColor": "rgba(80,80,80,1)",
						"rollOverBrightness": 20,
						"selectedBrightness": 20,
						"selectable": true,
						"unlistedAreasAlpha": 0,
						"unlistedAreasOutlineAlpha": 0
					},
					"imagesSettings": {
						"alpha": 1,
						"color": "rgba(129,129,129,1)",
						"outlineAlpha": 0,
						"rollOverOutlineAlpha": 0,
						"outlineColor": "rgba(80,80,80,1)",
						"rollOverBrightness": 20,
						"selectedBrightness": 20,
						"selectable": true
					},
					"linesSettings": {
						"color": "rgba(129,129,129,1)",
						"selectable": true,
						"rollOverBrightness": 20,
						"selectedBrightness": 20
					},
					"zoomControl": {
						"zoomControlEnabled": true,
						"homeButtonEnabled": false,
						"panControlEnabled": false,
						"right": 38,
						"bottom": 30,
						"minZoomLevel": 0.25,
						"gridHeight": 100,
						"gridAlpha": 0.1,
						"gridBackgroundAlpha": 0,
						"gridColor": "#FFFFFF",
						"draggerAlpha": 1,
						"buttonCornerRadius": 2
					}
				});
  }

  render() {
    return (

		<div id="map" style={{"width": "100%", "height": "732px"}}></div>

    );
  }
};