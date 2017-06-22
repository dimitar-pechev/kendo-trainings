/* globals $ */

$('#scheduler').kendoScheduler({
    date: new Date(),
    startTime: new Date('1999 11 11 7:00 AM'),
    eventHeight: 50,
    majorTick: 60,
    dataSource: [
        {
            id: 1,
            start: new Date('2017/6/22 08:00 AM'),
            end: new Date('2017/6/22 09:00 AM'),
            title: 'Breakfast'
        },
        {
            id: 2,
            start: new Date('2017/6/22 10:15 AM'),
            end: new Date('2017/6/22 12:30 PM'),
            title: 'Work'
        }
    ],
    height: 600,
    views: [
        'day',
        'week',
        { type: 'month', selected: true },
        'agenda',
        { type: 'timeline', eventHeight: 50 }
    ]
});