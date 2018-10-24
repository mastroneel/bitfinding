
$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'donutChart6',
            type: 'pie',
            // width: 600,
            // height: 600,
            borderRadius: 0
        },
        exporting: {
          enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
          text: 'FFF Distribution',
        },
        tooltip: {
            shared: false,
            useHTML: true,
            formatter: function () {
              return '<div style="width: 100px; font-size: 38px;" class="tooltip-text">' + this.key + '<br>' + this.y + '%' + '</div>';
            },
            positioner: function () {
                return { x: chart.plotWidth/2.65, y: chart.plotHeight/2.1 };
            },
            shadow: false,
            borderWidth: 1,
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            style: {
              color: '#21232e',
              fontWeight: 'bold',
              fontFamily: 'Roboto',
              textAlign: 'center',
            }
        },
        plotOptions: {
            pie: {
                borderWidth: 5,
                borderColor: '#fff',
                innerSize: '50%',
                size: '100%',
                dataLabels: false,
            }
        },
        colors: [
          'rgba(255, 29, 85, 1)',
          'rgba(255, 107, 134, 1)',
          'rgba(255, 177, 189, 1)',
          'rgba(255, 225, 230, 1)',
          'rgba(191, 192, 193, 1)',
          'rgba(212, 213, 213, 1)',
          'rgba(240, 140, 158, 1)',
          'rgba(250, 82, 124, 1)'
        ],
        legend: {
          align: 'center',
          layout: 'horizontal',
          floating: true,
          verticalAlign: 'top'
        },
        series: [{
            states: {
              hover: {
                enabled: false,
              }
            },
            data: [
              ['AAA', 50],
              ['BBB', 30],
              ['CCC', 10],
              ['DDD', 5],
              ['EEE', 1],
              ['FFF', 1],
              ['GGG', 1],
              ['HHH', 1]
            ]
        }]
    },
  );
});




Highcharts.chart('lineChart6', {
  chart: {
      marginBottom: 80,
  },
  exporting: {
    enabled: false
  },
  title: {
      text: 'FFF Comparison',
  },
  colors: ['#ff1d55', '#ffb1bd'],
  data: {
      // csvURL: window.location.origin + '/data/combinedtime.csv'
      csv: document.getElementById('csv').innerHTML
  },
  xAxis: {
      lineColor: '#21232e',
      lineWidth: 5,
  },
  yAxis: {
    gridLineColor: 'transparent',
    lineColor: '#21232e',
    lineWidth: 5,
    title: {
      enabled: false
    }
  },
  tooltip: {
    shared: true,
    borderColor: '#21232e',
    borderWidth: 3,
    backgroundColor: '#fff',
    style: {
      color: '#21232e',
      fontFamily: 'Roboto'
    }
  },
  plotOptions: {
    series: {
      lineWidth: 5
    },
    line: {
      marker: {
        enabled: false,
      }
    }
  },
});
