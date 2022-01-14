var SEPWidgetConfig = {
  apiServerURL: 'https://api-server-dev.swiss-energypark.com/',
  colors: {
    green: '#00aa3e',
    lightGreen: '#51CC5B',
    blue: '#94c3e3',
    gray: '#a0a1a3',
    darkGray: '#6e7b8a'
  },
  lineChartConfig: {
    responsiveConfig: {
      xlBreakPoint: 900,
      mdBreakPoint: 768,
      smBreakPoint: 650
    },
    lineThickness: 3,
    pointRadius: 0.2,
    windSpeedCutValues: {
      startingValue: 8,
      cutIn: 14,
      cutOff: 90,
      lineColor: '#94c3e3',
      textColor: '#94c3e3',
      textBackgroundColor: '#ffffffa8',
      lineHeight: 1,
      labelXPadding: 20
    }
  },
  pieChartConfig: {
    green: '#53c95c',
    yellow: '#ffde05',
    blue: '#0081a0',
    darkGray: '#646566',
    legendSquareHeight: 25,
    legendSquareWidth: 25,
    legendElementsPadding: 30,
    legendFontSize: 16,
    legendFontColor: '#6e7b8a',
    percentageFontSize: 24,
    percentageFontColor: '#ffffff',
    percentageFontWeight: 500,
    limitToDisplayPercentages: 5,
    percentagePositionOffset: 10
  },
  globalLineChartConfig: {
    green: '#04a93e',
    yellow: '#ffde05',
    blue: '#81b9dd',
    darkGray: '#646566',
    greenFill: '#04a93e20',
    yellowFill: '#ffde0560',
    blueFill: '#81b9dd60',
    darkGrayFill: '#64656660',
    lineThickness: 3,
    pointRadius: 0.2,
    lineTension: 0.2,
    legendSquareHeight: 25,
    legendSquareWidth: 25,
    legendElementsPadding: 30,
    legendFontSize: 16,
    legendFontColor: '#6e7b8a',
    responsiveConfig: {
      xlBreakPoint: 900,
      mdBreakPoint: 768,
      smBreakPoint: 650
    },
  },
  productionValueWidget: {
    titleFontSize: 1.2,
    titleColor: '#646566',
    valueFontSize: 4,
    valueColor: '#000000'
  },
  consumptionValueWidget: {
    titleFontSize: 1.2,
    titleColor: '#646566',
    valueFontSize: 4,
    valueColor: '#000000'
  },
  selfCoverageValueWidget: {
    titleFontSize: 1.2,
    titleColor: '#646566',
    valueFontSize: 4,
    valueColor: '#51cb5c',
    tooltipTitlesFontSize: 1,
    tooltipTitlesColor: '#646566',
    tooltipValuesFontSize: 3,
    tooltipValuesColor: '#51cb5c'
  },
  fontSize: '1rem'
};

var consumptionFactor = {
  houseHoldFactor: 1/15.3,
  hairDryer: 1/2,
  fridge: 1/0.15,
  computer: 1/0.085,
};
