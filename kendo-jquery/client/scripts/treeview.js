/* globals $ */

$('#tree-view').kendoTreeView({
    dataSource: [
        {
            text: 'Item 1',
            url: '#/item-1',
            expanded: true,
            items: [
                { text: 'Item 1.1' },
                {
                    text: '<b>Item 1.2</b>',
                    url: '#/item-1.2',
                    imageUrl: 'https://tmssl.akamaized.net//images/portrait/originals/148455-1417606422.jpg',
                    encoded: false, // interprets html,
                    spriteCssClass: ''
                }
            ]
        },
        { text: 'Item 2' }
    ],
    checkboxes: {
        checkChildren: true
    },
    dragAndDrop: true
});