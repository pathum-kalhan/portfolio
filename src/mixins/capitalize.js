module.exports = {
  filters: {
    capitalize(value) {
      if (!value) return '';
      return value.toUpperCase();
    },
  },
};
