const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definition/**/*.step.js
    `

module.exports = {
  default: `${common} features/**/*.feature`,
}
