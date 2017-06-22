/* globals $ */

$('#open-window').show();
$('#open-window').click(() => {
    if (kWindow) {
        kWindow.getKendoWindow().open();
    } else {
        openWindow();
    }
});

let kWindow;

function openWindow() {
    kWindow = $('#window').kendoWindow({
        actions: [
            'Pin',
            'Refresh',
            'Maximize',
            'Minimize',
            'Close'
        ],
        // animation: {
        //     open: {
        //         effects: 'expand:vertical'
        //     },
        //     close: {
        //         effects: 'expand:vertical',
        //         reverse: true
        //     }
        // },
        modal: false,
        pinned: false,
        position: {
            top: '30%',
            left: '35%'
        },
        resizable: true,
        title: 'Awesome Shit',
        width: '500px'
    });
}