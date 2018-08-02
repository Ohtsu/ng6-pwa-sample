import { Component } from '@angular/core';

import * as  ChartConst from 'ng6-o2-chart';    // <= Add

@Component({
  selector: 'mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MydashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  chartType: string;
  configData: any;

  choroplethDataJson: any;


  DataSetJson: string;


  choroplethTypeName: string;


  constructor() {

    this.choroplethTypeName 	= ChartConst.CHOROPLETH_CHART_TYPE_NAME;

    this.initilizeData();
  }



  private initilizeData() {
    this.configData = {
      // tslint:disable-next-line:quotemark
      "className": {
        'axis': 'axis',
        'axisXBorder': 'axis_x',
        'axisXText': 'axis-x-text',
        'bar': 'bar',
        'barValue': 'bar-value',
        'line': 'line',
        'multiLinePrefix': 'line-',
        'grid': 'grid',
        'pie': 'pie',
        'pieInnerTitle': 'pie-inner-title',
        'pieInnerRadius': 'total',
        'histogram': 'histogram',
        'histogramBar': 'histogram-bar',
        'treemap': 'treemap',
        'treemapLabel': 'treemap-label',
        'packlayout': 'packlayout',
        'packlayoutLabel': 'packlayout-label',
      },
      'label': {
          'display': true,
      },
      'title': {
        'display': false,
        'name': 'Title',
        'className': 'chart-title',
        'height': 30,
        'leftMargin': -20,
        'bottomMargin': 10
      },
      'maxValue': {
        'auto': true,
        'x': 100,
        'y': 100,
      },
      'legend': {
        'display': true,
        'position':           'right',
        'totalWidth': 80,
        'initXPos': 5,
        'initYPos': 10,
        'rectWidth': 10,
        'rectHeight': 10,
        'xSpacing': 2,
        'ySpacing': 2
      },
      'color': {
        'auto': true, //
        'defaultColorNumber': 10,
        'opacity': 1.0,
        'userColors': [
          'blue',
          'red',
          'green',
          'yellow',
          'PaleGoldenrod',
          'Khaki',
          'DarkKhaki',
          'Gold',
          'Cornsilk',
          'BlanchedAlmond',
          'Bisque',
          'NavajoWhite',
          'Wheat',
          'BurlyWood',
          'Tan',
          'RosyBrown',
          'SandyBrown',
          'Goldenrod',
          'DarkGoldenrod',
          'Peru',
          'Chocolate'
        ],
        'focusColor': 'red',
      },
      'pie': {
        'innerRadius': {
          'percent': 20,
          'title': 'Total'
        },
        'value': {
          'display': true,
        },
        'percent':{
          'display': false,
        }
      },
      'line': {
        'legend': 'lineEnd',
        'interpolate' : 'linear',
      },
      'grid': {
        'x': {
          'display': true,
        },
        'y': {
          'display': true,
        },
      },
      'margin': {
        'top': 30,
        'left': 30,
        'right': 10,
        'bottom': 20,
        'between': 5
      },
      'axis': {
        'rotation': 0,
        'borderLineWidth': 1,
        'xLabel': {
          'leftMargin': 0,
          'bottomMargin': 5
        },
        'yLabel':{
          'leftMargin': 0,
          'bottomMargin': 0
        },
      },
      'animation': {
        'enable': true,
        'duration': 4000,
      },
    };



    this.choroplethDataJson = {
    	'map': {
        'baseGeoDataUrl': 'https://raw.githubusercontent.com/Ohtsu/data/master/o2-chart/japan.geojson',
        'scale': 900,
        'center': [137.571, 37.500],
        'startColor': 'blue',
        'endColor': 'red',
        'colorNumber': 10,
        'keyDataName': 'features',
        'targetPropertyName': 'properties.id'
    	},

    	'data':
    	[
        {
          'id':1,
          'value':7.12
        },
        {
          'id':2,
          'value':8.97
        },
        {
          'id':3,
          'value':7.07
        },
        {
          'id':4,
          'value':7.78
        },
        {
          'id':5,
          'value':6.97
        },
        {
          'id':6,
          'value':5.79
        },
        {
          'id':7,
          'value':7.14
        },
        {
          'id':8,
          'value':6.68
        },
        {
          'id':9,
          'value':6.28
        },
        {
          'id':10,
          'value':6.32
        },
        {
          'id':11,
          'value':6.29
        },
        {
          'id':12,
          'value':6.14
        },
        {
          'id':13,
          'value':5.87
        },
        {
          'id':14,
          'value':5.75
        },
        {
          'id':15,
          'value':5.50
        },
        {
          'id':16,
          'value':5.21
        },
        {
          'id':17,
          'value':5.37
        },
        {
          'id':18,
          'value':5.23
        },
        {
          'id':19,
          'value':6.18
        },
        {
          'id':20,
          'value':5.44
        },
        {
          'id':21,
          'value':5.57
        },
        {
          'id':22,
          'value':5.81
        },
        {
          'id':23,
          'value':5.09
        },
        {
          'id':24,
          'value':5.08
        },
        {
          'id':25,
          'value':5.07
        },
        {
          'id':26,
          'value':6.21
        },
        {
          'id':27,
          'value':7.97
        },
        {
          'id':28,
          'value':6.54
        },
        {
          'id':29,
          'value':7.41
        },
        {
          'id':30,
          'value':6.74
        },
        {
          'id':31,
          'value':5.90
        },
        {
          'id':32,
          'value':4.55
        },
        {
          'id':33,
          'value':7.24
        },
        {
          'id':34,
          'value':5.35
        },
        {
          'id':35,
          'value':5.93
        },
        {
          'id':36,
          'value':7.62
        },
        {
          'id':37,
          'value':6.25
        },
        {
          'id':38,
          'value':7.26
        },
        {
          'id':39,
          'value':7.70
        },
        {
          'id':40,
          'value':7.84
        },
        {
          'id':41,
          'value':6.32
        },
        {
          'id':42,
          'value':6.64
        },
        {
          'id':43,
          'value':6.67
        },
        {
          'id':44,
          'value':7.07
        },
        {
          'id':45,
          'value':7.01
        },
        {
          'id':46,
          'value':6.84
        },
        {
          'id':47,
          'value':11.0
        }
    	]
    };



  }
}
