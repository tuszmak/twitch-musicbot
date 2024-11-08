/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "tsx",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};