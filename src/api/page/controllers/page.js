'use strict';

/**
 *  page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const sanitizer = require('strapi-sanitizer')

module.exports = createCoreController('api::page.page', ({ strapi }) => ({

  async findSlug(ctx) {
    const { slug } = ctx.params;
    console.log(slug)
    const entity = await strapi.service('api::page.page').findOne( {
      where: {
        Code:slug,
      }
    } );
    console.log(entity)
    const sanitizedData = await sanitizer(entity,  'Page');
    return sanitizedData
  },
}));
