'use strict';

/**
 * review service
 */

module.exports = {
    async create(productId, rating, comment, userId) {
        try {
            const review = await strapi.documents('api::review.review').create({
                data: {
                    products: productId,
                    rating,
                    comment,
                    user: userId,
                },
            });
            return {
                result: true,
                message: 'Reseña creada con éxito',
                data: review,
            }
        } catch (error) {
            console.error('Error creating review:', error);
            return {
                result: false,
                message: 'Error creando la reseña' + error.message,
                data: null,
            }
        }
    },

    async find(query) {
        try {
            let reviews = await strapi.documents('api::review.review').findMany(
                {
                    fields: ['id', 'rating', 'comment'],
                    populate: {
                        user: {
                            fields: ['id', 'username'],
                        },
                        products: {
                            fields: ['id', 'name'],
                        },
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    limit: query.limit || 10,
                    start: query.start || 0,
                }
            );

            return {
                result: true,
                message: 'Reseñas obtenidas con éxito',
                data: reviews,
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
            return {
                result: false,
                message: 'Error obteniendo las reseñas' + error.message,
                data: null,
            }
        }
    },

    async update(id, rating, comment) {
        try {
            const review = await strapi.documents('api::review.review').update({
                documentId: id,
                data: {
                    rating,
                    comment
                },
            });
            return {
                result: true,
                message: 'Reseña actualizada con éxito',
                data: review,
            }
        } catch (error) {
            console.error('Error updating review:', error);
            return {
                result: false,
                message: 'Error actualizando la reseña' + error.message,
                data: null,
            }
        }
    },
}
