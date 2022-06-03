module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": filenames => {
    const escapedFileNames = filenames
      .map(name => name.replace(/\\/g, "\\/"))
      .join(" ");

    return [
      `eslint --fix --quiet ${escapedFileNames}`,
      `git add ${escapedFileNames}`,
    ];
  },
  "src/**/*.{js,jsx,ts,tsx,scss,css}": filenames => {
    const escapedFileNames = filenames
      .map(name => name.replace(/\\/g, "/"))
      .join(" ");

    return [
      `prettier --write ${escapedFileNames}`,
      `stylelint --fix ${escapedFileNames}`,
      `git add ${escapedFileNames}`,
    ];
  },
};
