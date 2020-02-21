import { readFileSync } from 'fs'

const handleSQL = (sql: string, args: any) => {
  const expr_list: string[] | null = sql.match(/\{\{.*?\}\}/g)

  if (expr_list && expr_list.length) {
    sql = expr_list.reduce((acc, curr) => acc.replace(
      curr,
      eval(curr.substring(2, curr.length - 2)) || ''
    ), sql)
  }
  return sql
}

export = (path: string, args: any) => {
  const data = readFileSync(path)
  return handleSQL(data.toString(), args)
}
