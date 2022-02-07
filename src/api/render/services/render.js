'use strict';

/**
 * render service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::render.render');
