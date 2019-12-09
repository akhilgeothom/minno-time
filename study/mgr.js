define(['managerAPI'], function(Manager) {
    var API = new Manager();

    API.setName('mgr');
    API.addSettings('skip',true);
    API.addSettings('skin','demo');

    var raceSet = API.shuffle(['a','b'])[0];
    var blackLabels = [];
    var whiteLabels = [];

    blackLabels.push('Scheduled Caste');
    whiteLabels.push('Forward Caste');

    API.save({
        raceSet:raceSet,
        blackLabels:blackLabels,
        whiteLabels:whiteLabels
    });

    API.addGlobal({
        raceiat:{},
        //YBYB: change when copying back to the correct folder
        // baseURL: './study/images/',
        raceSet:raceSet,
        blackLabels:blackLabels,
        whiteLabels:whiteLabels,
        posWords : API.shuffle([
            'Good', 'Joy', 'Love', 'Peace', 'Wonderful', 
            'Pleasure', 'Glorious', ' Laughter', 'Magnificent'
        ]), 
        negWords : API.shuffle([
            'Bad', 'Agony', 'Terrible', 'Horrible',
            'Nasty','Evil', 'Awful','Failure','Hurt'
        ]),
        forCaste : API.shuffle([
            'Iyer', 'Shastri', 'Sharma', 'Brahmin'
        ]),
        schCaste : API.shuffle([
            'Harijan', 'Dalit', 'Kambli', 'Paswan'
        ])
    });

    API.addTasksSet({
        instructions: [{
            type: 'message',
            buttonText: 'Continue'
        }],

        realstart: [{
            inherit: 'instructions',
            name: 'realstart',
            templateUrl: 'realstart.jst',
            title: 'Consent',
            piTemplate: true,
            header: 'Welcome'
        }],

        raceiat: [{
            type: 'pip',
            version:0.3,
            baseUrl: '//cdn.jsdelivr.net/gh/minnojs/minno-time@0.3/dist/js',
            name: 'raceiat',
            scriptUrl: 'raceiat.js'
        }],

        debriefing: [{
            type: 'quest',
            name: 'debriefing',
            scriptUrl: 'debriefing.js'
        }],

        lastpage: [{
            type: 'message',
            name: 'lastpage',
            templateUrl: 'lastpage.jst',
            title: 'End',
            piTemplate: true,
            buttonHide: true,
            last:true,
            header: 'You have completed the study'
        }]
    });

    // API.addSequence([
    //     {inherit: 'realstart'},
    //     {
    //         mixer:'random',
    //         data:[
    //             {inherit: 'explicits'},
    //             {inherit: 'demographics'},

    //             force the instructions to preceed the iat
    //             {
    //                 mixer: 'wrapper',
    //                 data: [
    //                     {inherit: 'raceiat_instructions'},
    //                     {inherit: 'raceiat'}
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         mixer:'choose',
    //         n:1,
    //         data:[
    //             { inherit: 'mrscale' },
    //             { inherit: 'rwascale' }
    //         ]
    //     },

    //     {inherit: 'debriefing'},
    //     {
    //         type:'postCsv',
    //         url:'csv.php'
    //     },
    //     {inherit: 'lastpage'}
    // ]);

    API.addSequence([
        {inherit: 'realstart'},

        {inherit: 'raceiat'},

        {inherit: 'debriefing'},
        {
            type:'postCsv',
            url:'csv.php'
        },
        {inherit: 'lastpage'}
    ]);

    return API.script;
});
