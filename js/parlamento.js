/**
 * Created by pepesan on 2/3/16.
 */
function init(){
    //configuración del tema
    Highcharts.createElement('link', {
        href: '//fonts.googleapis.com/css?family=Dosis:400,600',
        rel: 'stylesheet',
        type: 'text/css'
    }, null, document.getElementsByTagName('head')[0]);

    Highcharts.theme = {
        colors: ["#7cb5ec", "#E2001A", "#54075B", "#EF7A36", "#FFB232", "#1D2261",
            "#00914A",
            "#87A925", "#DD0021", "#126AB9", "#aaeeee"],
        chart: {
            backgroundColor: null,
            style: {
                fontFamily: "Dosis, sans-serif"
            }
        },
        title: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }
        },
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'rgba(219,219,216,0.8)',
            shadow: false
        },
        legend: {
            itemStyle: {
                fontWeight: 'bold',
                fontSize: '13px'
            }
        },
        xAxis: {
            gridLineWidth: 1,
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        yAxis: {
            minorTickInterval: 'auto',
            title: {
                style: {
                    textTransform: 'uppercase'
                }
            },
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        plotOptions: {
            candlestick: {
                lineColor: '#404048'
            }
        },


        // General
        background2: '#F0F0EA'

    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);

    //configuración de la gráfica
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Elecciones<br/> Generales<br/> 2015',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b><br/>' +
            'Porcentaje: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Diputados',
            innerSize: '50%',
            data: [
                ['PP',   123],
                ['PSOE',       89],
                ['Podemos', 65],
                ['Ciudadanos',    40],
                ['ERC',     9],
                ['DL',     9],
                ['PNV',     6],
                ['Bildu',     2],
                ['IU-UP',     2],
                ['CC',     1],


                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
}
$(document).ready(init);
