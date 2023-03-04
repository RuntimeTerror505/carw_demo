// here must be code which makes screenshots on test fail
// btw i cant find it at npmjs.com , so this file will be empty for some time idk how much

const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment')
    .default

class CustomEnvironment extends PlaywrightEnvironment {
    // async setup (){
    //     await super.setup()
    //     // Your setup
    // }
    //
    // async teardown (){
    //     // Your teardown
    //     await super.teardown()
    // }

    async handleTestEvent(event) {
        if (event.name === 'test_done' && event.test.errors.length > 0) {
            const parentName = event.test.parent.name.replace(/\W/g, '-')
            const specName = event.test.name.replace(/\W/g, '-')

            await this.global.page.screenshot({
                path: `screenshots/${parentName} ${specName}.png`,
                
            })
        }
    }
}
