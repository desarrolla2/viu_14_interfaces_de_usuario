Highcharts.setOptions({
  colors: Highcharts.map(Highcharts.getOptions().colors, function(color) {
    return {
      radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7,
      },
      stops: [
        [0, color],
        [1, Highcharts.color(color).brighten(-0.3).get('rgb')], // darken
      ],
    };
  }),
});

Highcharts.chart('highcharts-container-1', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  title: {
    text: 'Análisis macronutrientes',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        connectorColor: 'silver',
      },
    },
  }, credits: {
    enabled: false,
  },
  series: [
    {
      name: 'Porcentaje',
      data: [
        {name: 'Proteina', y: 61.41},
        {name: 'Hidratos', y: 27.74},
        {name: 'Grasa', y: 10.85},
      ],
    }],
});
Highcharts.chart('highcharts-container-2', {
  chart: {
    type: 'packedbubble',
    height: '100%',
  }, credits: {
    enabled: false,
  },
  title: {
    text: 'Análisis micronutrientes',
  },
  tooltip: {
    useHTML: true,
    pointFormat: '<b>{point.name}:</b> {point.value}<sub>mg/kg</sub>',
  },
  plotOptions: {
    packedbubble: {
      minSize: '30%',
      maxSize: '120%',
      zMin: 0,
      zMax: 1000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.02,
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}',
        filter: {
          property: 'y',
          operator: '>',
          value: 250,
        },
        style: {
          color: 'black',
          textOutline: 'none',
          fontWeight: 'normal',
        },
      },
    },
  },
  series: [
    {
      name: 'vitaminas',
      data: [
        {
          name: 'vitamina A',
          value: 767.1,
        }, {
          name: 'vitamina E',
          value: 20.7,
        },
        {
          name: 'Vitamina C',
          value: 97.2,
        },
        {
          name: 'Vitamina D',
          value: 111.7,
        },
      ],
    }, {
      name: 'minerales',
      data: [
        {
          name: 'Hierro',
          value: 8.2,
        },
        {
          name: 'Cobre',
          value: 9.2,
        },
        {
          name: 'Magnesio',
          value: 13.1,
        },
      ],
    }, {
      name: 'oligoelementos',
      data: [
        {
          name: 'yodo',
          value: 409.4,
        },
        {
          name: 'Cobre',
          value: 34.1,
        },
        {
          name: 'Fluor',
          value: 7.1,
        }],
    }, {
      name: 'Otros',
      data: [
        {
          name: 'Polifenoles',
          value: 7.6,
        },
        {
          name: 'flavonoides',
          value: 8.4,
        },
        {
          name: 'carotenoides',
          value: 8.3,
        },
        {
          name: 'omega-3',
          value: 10.2,
        },
        {
          name: 'valina',
          value: 12,
        },
        {
          name: 'leucina',
          value: 23.4,
        },
        {
          name: 'isoleucina',
          value: 30.2,
        },
        {
          name: 'previoticos',
          value: 5334.5,
        }, {
          name: 'Manganeso',
          value: 566,
        }, {
          name: 'Molibdeno',
          value: 456.3,
        }],
    }],
});
