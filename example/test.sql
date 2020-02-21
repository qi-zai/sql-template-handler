select
*
from test
where month='{{ args.month }}'
{{ args.name && `and name='${args.name}'` }}
and age = {{ args.age + 10 }}
and sex = '{{ args.sex==0 ? '男士' : '女士' }}'