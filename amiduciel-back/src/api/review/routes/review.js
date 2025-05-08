module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/reviews',
            handler: 'review.create',
            config: {
                auth: false
            }
        },
        {
            method: 'GET',
            path: '/reviews',
            handler: 'review.find',
            config: {
                auth: false
            }
        },
        {
            method: 'PUT',
            path: '/reviews/:id',
            handler: 'review.update',
            config: {
                auth: false
            }
        }
    ]
}
