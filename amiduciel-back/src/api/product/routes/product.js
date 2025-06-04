module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/products',
            handler: 'product.find',
            config: {
                auth: false
            }
        },
        {
            method: 'GET',
            path: '/new-products',
            handler: 'product.findNewProducts',
            config: {
                auth: false
            }
        },
        {
            method: 'GET',
            path: '/products/:idDocument',
            handler: 'product.findByIdDocument',
            config: {
                auth: false
            }
        }
    ]
}
