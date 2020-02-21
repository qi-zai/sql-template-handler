const sql_template_handler = require('../dist/sql-template-handler')

console.log(__dirname + '/test.sql')

const sql = sql_template_handler(__dirname+ '/test.sql', { month: '2020-01-01', age: 10, sex: 1 })
console.log(sql)