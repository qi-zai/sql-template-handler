# sql-template-handler

## File directory

```
example
  |__test.sql
  |__test.js
```

## test.js

```js
const sql_template_handler = require('sql-template-handler')

const sql = sql_template_handler(__dirname+ '/test.sql', {
  month: '2020-01-01',
  age: 10,
  sex: 1
})

console.log(sql)
```

## test.sql

```sql
select
*
from test
where month='{{ args.month }}'
{{ args.name && `and name='${args.name}'` }}
and age = {{ args.age + 10 }}
and sex = '{{ args.sex==0 ? '男士' : '女士' }}'
```

## RESULT

```sql
select
*
from test
where month='2020-01-01'

and age = 20
and sex = '女士'
```