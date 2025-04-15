module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/products',
            handler: 'product.find',
            config: {
                auth: false
            }
        }
    ]
}
