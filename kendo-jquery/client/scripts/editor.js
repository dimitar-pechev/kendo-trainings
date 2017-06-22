/* globals $ */

$('#editor').kendoEditor({
    tools: [
        'formatting',
        'bold',
        'italic',
        'underline',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'insertUnorderedList',
        'insertOrderedList',
        'indent',
        'outdent',
        'createLink',
        'unlink',
        'insertImage',
        'createTable',
        'viewHtml',
        'pdf'
    ],
    pdf: {
        fileName: 'article.pdf',
        paperSize: 'a4',
        margin: {
            bottom: 40,
            left: 40,
            right: 40,
            top: 40
        }
    },
    change: console.log,
    // pasteCleanup: {
    //     all: true
    // }
});