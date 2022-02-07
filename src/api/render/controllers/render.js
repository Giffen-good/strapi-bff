'use strict';

/**
 *  render controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::render.render');
