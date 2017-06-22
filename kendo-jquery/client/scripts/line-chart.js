/* globals $ */

const lfcPointsTallies = [
    {
        points: 84,
        year: 2014
    },
    {
        points: 62,
        year: 2015
    },
    {
        points: 60,
        year: 2016
    },
    {
        points: 76,
        year: 2017
    }
];

const mufcPointsTallies = [
    {
        points: 64,
        year: 2014
    },
    {
        points: 70,
        year: 2015
    },
    {
        points: 66,
        year: 2016
    },
    {
        points: 69,
        year: 2017
    }
];

$('#chart').kendoChart({
    seriesDefaults: {
        type: 'line',
        field: 'points',
        categoryField: 'year',
        noteTextField: 'note',
        notes: {
            label: {
                position: 'outside'
            }
        },
        style: 'smooth',
        labels: {
            visible: false,
            background: '#f99',
            color: 'white'
        },
        // missingValues: 'gap'
    },
    theme: 'material',
    series: [{
        name: 'LFC Points',
        data: lfcPointsTallies
    }, {
        name: 'MUFC Points',
        data: mufcPointsTallies
    }],
    chartArea: {
        background: '#fff'
    },
    legend: {
        position: 'bottom'
    },
    valueAxis: [{
        title: {
            text: 'Points Tally'
        },
        minorGridLines: {
            visible: false
        }
    }],
    tooltip: {
        visible: true,
        // format: '{0} Points',
        template: '${value} Points'
    },
    title: {
        position: 'top',
        text: 'LFC - MUFC Points Comparison'
    }
});