'use strict';

/**
 * alphabet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::alphabet.alphabet');
