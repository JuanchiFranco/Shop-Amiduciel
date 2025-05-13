'use strict';

/**
 * product controller
 */

module.exports = {
    async find(ctx) {
        try{
            let products = await strapi.service('api::product.product').find(ctx.query);
            ctx.body = products;
            ctx.send(products);
        }catch (error) {
            console.error('Error fetching products:', error);
            ctx.throw(500, 'Error del servidor al obtener los productos');
        }
    },

    async findNewProducts(ctx) {
        try{
            let products = await strapi.service('api::product.product').findNewProducts(ctx.query);
            ctx.body = products;
            ctx.send(products);
        }catch (error) {
            console.error('Error fetching new products:', error);
            ctx.throw(500, 'Error del servidor al obtener los productos nuevos');
        }
    }
}