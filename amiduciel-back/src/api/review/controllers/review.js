'use strict';

/**
 * review controller
 */

const { errors } = require('@strapi/utils');
const { ApplicationError, ForbiddenError } = errors;

module.exports = {
    async create(ctx) {
        try {
            const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
            const { productId, rating, comment } = ctx.request.body;

            // Check if the user is authenticated
            if (!user) {
                throw new ForbiddenError('Invalid token');
            }

            // Validate input
            if (!productId || !rating || !comment) {
                return ctx.badRequest('Missing required fields: productId, rating, comment');
            }

            let review = await strapi.service('api::review.review').create(productId, rating, comment, user.id);
            
            if (!review.result) {
                return ctx.badRequest(review.message);
            }

            return ctx.created(review);
        } catch (error) {
            console.error('Error creating review:', error);
            throw new ApplicationError(error.message);
        }
    },

    async find(ctx) {
        try {
            let reviews = await strapi.service('api::review.review').find(ctx.query);
            
            if (!reviews.result) {
                return ctx.badRequest(reviews.message);
            }

            return ctx.send(reviews);
        } catch (error) {
            console.error('Error fetching reviews:', error);
            throw new ApplicationError(error.message);
        }
    },

    async update(ctx) {
        try {
            const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
            const { id } = ctx.params;
            const { rating, comment } = ctx.request.body;

            // Check if the user is authenticated
            if (!user) {
                throw new ForbiddenError('Invalid token');
            }

            // Validate input
            if (!rating && !comment) {
                return ctx.badRequest('Missing required fields: rating or comment');
            }

            let review = await strapi.service('api::review.review').update(id, rating, comment);
            
            if (!review.result) {
                return ctx.badRequest(review.message);
            }

            return ctx.send(review);
        } catch (error) {
            console.error('Error updating review:', error);
            throw new ApplicationError(error.message);
        }
    }
}
