/* globals $ kendo */

const baseUrl = 'http://localhost:4200/api/';

const playersDataUrl = `${baseUrl}get-all-players`;
const createPlayerUrl = `${baseUrl}create-new-player`;
const editPlayerUrl = `${baseUrl}edit-player`;
const deletePlayerUrl = `${baseUrl}delete-player`;

const columns = [{
    template: $('#template').html(),
    field: 'name',
    title: 'Player'
},
{
    field: 'jerseyNumber',
    title: 'Number'
},
{
    field: 'position',
    title: 'Position'
},
{
    field: 'nationality',
    title: 'Nationality'
},
{
    field: 'contractUntil',
    title: 'Contract Until',
    format: '{0:dd-MMM-yyyy}'
},
{
    command: ['edit', 'destroy']
}];

const schema = {
    data: 'data',
    total: 'total',
    model: {
        id: 'id',
        fields: {
            id: { editable: false },
            name: { validation: { required: { message: 'The Player Name field is required!' } } },
            jerseyNumber: { validation: { required: { message: 'The Player Number field is required!' } } },
            position: { validation: { required: { message: 'The Position field is required!' } } },
            nationality: { validation: { required: { message: 'The Player Nationality field is required!' } } },
            contractUntil: { type: 'date', validation: { required: { message: 'The Contract field is required!' } } }
        }
    }
};

const dataSource = new kendo.data.DataSource({
    schema,
    offlineStorage: 'players-offline',
    serverPaging: true,
    serverSorting: true,
    transport: {
        read: {
            url: playersDataUrl
        },
        destroy: {
            url: deletePlayerUrl,
            type: 'DELETE'
        },
        create: {
            url: createPlayerUrl,
            type: 'POST'
        },
        update: {
            url: editPlayerUrl,
            type: 'PUT'
        }
    },
    sort: {
        field: 'jerseyNumber',
        dir: 'asc'
    },
    page: 1,
    pageSize: 10
});

$('#grid').kendoGrid({
    dataSource,
    detailInit: console.log,
    columns,
    reorderable: true,
    editable: 'popup',
    toolbar: ['create', 'excel', 'pdf'],
    navigatable: true,
    persistSelection: true,
    // pageable: true,
    resizable: true,
    sortable: {
        mode: 'multiple'
    },
    groupable: true,
    scrollable: {
        virtual: true
    },
    selectable: 'multiple row',
    mobile: true,
    filterable: true,
    pdf: {
        allPages: true
    },
    excel: {
        allPages: true
    },
    columnMenu: {
        messages: {
            sortAscending: 'sortAscending',
            sortDescending: 'sortDescending',
            filter: 'sfiltersss',
            columns: 'columns'
        }
    }
});