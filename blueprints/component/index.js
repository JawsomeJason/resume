module.exports = {
  description() {
    return 'Generates a dumb component';
  },
  fileMapTokens() {
    return {
      __components__: (options) => {
        return options.settings.getSetting('dumbPath');
      }
    };
  }
};
