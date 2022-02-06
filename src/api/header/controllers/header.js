'use strict';

/**
 *  header controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::header.header', ({ strapi }) => ({
  async getAllRoutes(ctx) {
    console.log(ctx)
    try {
      ctx.body = 'ok'
    } catch (err) {
      ctx.body = err
    }
  }
}));
