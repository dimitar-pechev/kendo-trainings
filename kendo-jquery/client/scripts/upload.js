/* globals $ */

const upload = $('#upload');
upload.show();

upload.kendoUpload({
    async: {
        saveUrl: 'saveUrl',
        removeUrl: 'removeUrl'
    },
    validation: {
        allowedExtensions: ['.js'],
        maxFileSize: 2500 // in bytes
    }
});