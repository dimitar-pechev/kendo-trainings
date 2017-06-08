/* globals $ kendo */

const baseUrl = 'http://localhost:4200/api/';

const playersDataUrl = `${baseUrl}get-all-players`;
const createPlayerUrl = `${baseUrl}create-new-player`;
const editPlayerUrl = `${baseUrl}edit-player`;
const deletePlayerUrl = `${baseUrl}delete-player`;

const selectedRows = [];
let isChartCreated = false;

const schema = {
    total: 'total',
    data: 'data',
    model: {
        id: 'id',
        fields: {
            id: { editable: false },
            name: { validation: { required: true } },
            position: { validation: { required: { message: 'The Position field is required!' } } },
            jerseyNumber: { type: 'integer', validation: { required: true, min: 1 } },
            dateOfBirth: { type: 'date', validation: { required: { message: 'The Date of Birth field is required!' } } },
            nationality: { validation: { required: true } },
            contractUntil: { type: 'date', validation: { required: true } }
        }
    }
};

const dataSource = new kendo.data.DataSource({
    // serverPaging: true,
    // serverSorting: true,
    offlineStorage: 'players-offline',
    pageSize: 10,
    batch: true,
    transport: {
        read: playersDataUrl,
        update: {
            url: editPlayerUrl,
            method: 'PUT',
            dataType: 'json'
        }, create: {
            url: createPlayerUrl,
            method: 'POST',
            dataType: 'json'
        },
        destroy: {
            url: deletePlayerUrl,
            method: 'DELETE',
            dataType: 'json'
        }
    },
    sort: {
        field: 'jerseyNumber',
        dir: 'asc'
    },
    schema
});

$('#grid').kendoGrid({
    dataSource,
    dataBound: (ev) => {
        if (!isChartCreated) {
            isChartCreated = true;
            initChart(ev);
        }
        selectCorrespondingRows();
    },
    save: (ev) => {
        onSave(ev);
        initChart(ev);
    },
    height: 550,
    reorderable: true,
    selectable: 'multiple, row',
    scrollable: {
        virtual: true
    },
    detailInit: onRowExpanded,
    sortable: true,
    columns: [
        { template: $('#template').html(), field: 'name', title: 'Player', width: 250 },
        { field: 'position', format: '{0:n}', title: 'Position' },
        { field: 'jerseyNumber', title: 'Number' },
        { field: 'dateOfBirth', format: '{0:dd-MMM-yyyy}', title: 'Date of Birth' },
        { field: 'nationality', title: 'Nationality' },
        { command: ['edit', 'destroy'], title: '&nbsp;' },
        { command: { text: 'Log Details', click: getDetails } }
    ],
    groupable: true,
    toolbar: ['create', 'excel', 'pdf'],
    excel: {
        allPages: true
    },
    pdf: {
        allPages: true
    },
    editable: 'inline',
});

function onSave(ev) {
    const model = ev.model;
    model.jerseyNumber = Math.round(model.jerseyNumber);
    const data = dataSource.data();

    for (let i = 0; i < data.length; i += 1) {
        if (data[i].uid != model.uid && data[i].jerseyNumber == model.jerseyNumber) {
            ev.preventDefault();
            alert(`Number ${model.jerseyNumber} is already taken! Jersey numbers must be unique!`);
            return;
        }
    }
}

function getDetails(ev) {
    ev.preventDefault();
    const player = this.dataItem($(ev.currentTarget).closest('tr'));
    console.log(`${player.name} - ${player.position}`);
}

function onRowExpanded(ev) {
    $('<div/>').appendTo(ev.detailCell).kendoGrid({
        dataSource: {
            transport: {
                read: playersDataUrl
            },
            schema,
            filter: {
                field: 'id',
                operator: 'eq',
                value: ev.data.id
            }
        },
        columns: [
            { field: 'contractUntil', title: 'Contract Until', format: '{0:dd-MMMM-yyyy}' }
        ]
    });
}

function initChart() {
    $('#chart').kendoChart({
        title: {
            position: 'bottom',
            text: 'Player positions'
        },
        legend: {
            visible: false
        },
        seriesClick: (ev) => selectCorrespondingRows(ev.category),
        chartArea: {
            background: ''
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: 'green',
                template: '#= category #: \n #= value#%'
            }
        },
        series: [{
            type: 'pie',
            startAngle: 150,
            data: getChartData()
        }],
        tooltip: {
            visible: true,
            format: '{0}%'
        }
    });
}

function getChartData() {
    const data = dataSource.data();
    const total = dataSource.total();
    const positions = extractDifferentPositions(data);
    const chart = generateChartData(positions, total);

    return chart;
}

function extractDifferentPositions(data) {
    const positions = {};

    for (let player of data) {
        if (!positions[player.position]) {
            positions[player.position] = 1;
        } else {
            positions[player.position] += 1;
        }
    }

    return positions;
}

function generateChartData(positions, total) {
    const chart = [];

    let index = 0;
    for (let position in positions) {
        let value = Math.round((positions[position] / total) * 100);
        chart[index] = {
            category: position,
            value
        };
        index += 1;
    }

    return chart;
}

function selectCorrespondingRows(category) {
    if (category) {
        selectedRows.pop();
        selectedRows.push(category);
    } else if (selectedRows.length) {
        category = selectedRows[0];
    } else {
        return;
    }

    const grid = $('#grid').data('kendoGrid');
    const rows = $('td').filter(function () {
        return $(this).text() == category;
    }).closest('tr');

    grid.clearSelection();
    grid.select(rows);
}