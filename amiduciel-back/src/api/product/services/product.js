'use strict';

/**
 * product service
 */

module.exports = {
    async find(query) {
        try {
            let products = await strapi.documents('api::product.product').findMany(
                {
                    fields: ['id', 'name', 'price', 'cost', 'description'],
                    populate: {
                        patern: {
                            fields: ['id', 'url', 'name'],
                        },
                        images: {
                            fields: ['id', 'url'],
                        }, 
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    limit: query.limit || 10,
                    start: query.start || 0,
                }
            );

            return products;
        }catch (error) {
            console.error('Error fetching products:', error);
            throw new Error('Error del servidor al obtener los productos');
        }
    },

    async findNewProducts(query) {
        // traer los tres productos mas nuevos
        // orderBy: { createdAt: 'desc' }
        try {
            let products = await strapi.documents('api::product.product').findMany(
                {
                    fields: ['id', 'name', 'price', 'cost', 'description'],
                    populate: {
                        patern: {
                            fields: ['id', 'url', 'name'],
                        },
                        images: {
                            fields: ['id', 'url'],
                        }, 
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    limit: 3,
                }
            );

            return products;
        }catch (error) {
            console.error('Error fetching new products:', error);
            throw new Error('Error del servidor al obtener los productos nuevos');
        }
            
    }
}
