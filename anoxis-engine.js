/** @module anoxis-engine */

import { anoxis-engine } from "./module/config.js";

/**
 * Loads all registered Handlebars partials.
 * @async
 * @returns {Array.<Function>} An array of functions to establish partials.
 */
async function preloadHandlebarsTemplates() {
  const templatePaths = [];
  return loadTemplates(templatePaths);
}

/**
 * Establish all available system-specific settings for players and GMs.
 */
function registerSystemSettings() {}

/**
 * Hook to set up config, Actor and Item sheets, and load Handlebars templates.
 */
Hooks.once("init", function() {
  console.log("anoxis-engine | Initializing the Anoxis-Engine System");

  CONFIG.anoxis-engine = anoxis-engine;

  preloadHandlebarsTemplates();

  registerSystemSettings();
});
