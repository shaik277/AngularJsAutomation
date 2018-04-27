exports.config={
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['../SpecFiles/TC_003.js'],
    params:
        {
            testdata : require('../ElementLocators/Elements.json')
        }

}