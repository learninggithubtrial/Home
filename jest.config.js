module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.js"],
};
