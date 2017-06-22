/* globals $ */

const dropDownOptions = [
    { value: 'small', text: 'S' },
    { value: 'medium', text: 'M' },
    { value: 'large', text: 'L' },
    { value: 'extraLarge', text: 'XL' },
];

$('#dropdownlist').kendoDropDownList({
    noDataTemplate: $('#dropdown-no-data').html(),
    value: 'medium',
    // index: 0,
    dataTextField: 'text',
    dataValueField: 'value',
    dataSource: dropDownOptions
});