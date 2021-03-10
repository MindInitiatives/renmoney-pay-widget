const fs = require('fs-extra');
const merge = require('concat');

(async function build() {
const files = [
  './dist/renmoney-pay-widget/main.js',
  './dist/renmoney-pay-widget/polyfills.js',
  './dist/renmoney-pay-widget/scripts.js',
  './dist/renmoney-pay-widget/runtime.js'
]

await  merge(files, './dist/renmoney-pay-widget/renmoney-pay-widget.js');
console.info('file generated')}) ()