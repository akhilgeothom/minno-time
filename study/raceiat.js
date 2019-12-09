define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.1/IAT/iat6.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
    var global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : 'Forward caste',
            title : {
                media : {word : 'Forward caste'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.forCaste[0]},
                {word: global.forCaste[1]},
                {word: global.forCaste[2]},
                {word: global.forCaste[3]}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : 'Scheduled caste',
            title : {
                media : {word : 'Scheduled caste'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.schCaste[0]},
                {word: global.schCaste[1]},
                {word: global.schCaste[2]},
                {word: global.schCaste[3]}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Bad',
            title : {
                media : {word : 'Bad'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.negWords[0]},
                {word: global.negWords[1]},
                {word: global.negWords[2]},
                {word: global.negWords[3]},
                {word: global.negWords[4]},
                {word: global.negWords[5]},
                {word: global.negWords[6]},
                {word: global.negWords[7]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Good',
            title : {
                media : {word : 'Good'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.posWords[0]},
                {word: global.posWords[1]},
                {word: global.posWords[2]},
                {word: global.posWords[3]},
                {word: global.posWords[4]},
                {word: global.posWords[5]},
                {word: global.posWords[6]},
                {word: global.posWords[7]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.isTouch
    });
});

