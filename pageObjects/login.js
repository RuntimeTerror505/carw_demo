class login {
    async email() {
        return await page.$('input[type="email"]')
    }
    async password_fill(test) {
        return await page.type('input[type="password"]' , test)
    }
}

module.exports = login