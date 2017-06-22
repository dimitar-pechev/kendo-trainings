/* globals $ */

const upload = $('#upload');
upload.show();

upload.kendoUpload({
    async: {
        saveUrl: 'saveUrl',
        removeUrl: 'removeUrl'
    }
});