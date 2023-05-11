module.exports = {
    preset: 'jest-playwright-preset',
    //'testEnvironment': './CustomEnvironment.js',
    'reporters': [
        //this is how we add HTML Reporter
        'default',
        ['jest-html-reporters', {
            'publicPath': './html-report',
            'fileName': 'report.html',
            'expand': true,
            "openReport": true


        }]
    ]
}
