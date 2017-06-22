/* globals $ */

$('#stock-chart').kendoStockChart({
    dataSource: {
        transport: {
            read: {
                url: 'https://demos.telerik.com/kendo-ui/service/StockData',
                dataType: 'jsonp'
            }
        }
    },
    title: {
        text: 'Telerik Boeing Something Example Data'
    },
    dateField: 'Date',
    series: [{
        type: 'candlestick',
        openField: 'Open',
        highField: 'High',
        lowField: 'Low',
        closeField: 'Close'
    }],
    navigator: {
        series: {
            type: 'line',
            field: 'Close'
        },
        select: {
            from: '2009/02/05',
            to: '2010/10/07'
        }
    }
});