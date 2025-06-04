'use strict';

/**
 * product service
 */

module.exports = {
    async find(query) {
        try {
            let products = await strapi.documents('api::product.product').findMany(
                {
                    fields: ['id', 'name', 'price', 'description'],
                    populate: {
                        images: {
                            fields: ['id', 'url'],
                        },
                        categories: {
                            fields: ['id', 'name']
                        },
                        reviews: {
                            fields: ['rating', 'comment'],
                            populate: {
                                user: {
                                    fields: ['username']
                                }
                            }
                        }
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
                        reviews: {
                            fields: ['rating', 'comment'],
                            populate: {
                                user: {
                                    fields: ['username']
                                }
                            }
                        }
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    limit: 9,
                }
            );

            return products;
        }catch (error) {
            console.error('Error fetching new products:', error);
            throw new Error('Error del servidor al obtener los productos nuevos');
        }
            
    },

    async findByIdDocument(idDocument, query) {
        try {
            let product = await strapi.documents('api::product.product').findOne(
                {
                    
                    documentId: idDocument,
                    
                    fields: ['id', 'name', 'price', 'description'],
                    populate: {
                        images: {
                            fields: ['id', 'url'],
                        },
                        categories: {
                            fields: ['id', 'name']
                        },
                        reviews: {
                            fields: ['rating', 'comment'],
                            populate: {
                                user: {
                                    fields: ['username']
                                }
                            }
                        }
                    }
                }
            );

            return product;
        } catch (error) {
            console.error('Error fetching product by ID document:', error);
            throw new Error('Error del servidor al obtener el producto por ID de documento');
        }
    }
}
