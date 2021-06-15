module.exports = [
  {
    input: 'src/api/enterprise',
    outputEachEir: true,
    openapi: { inputFile: './src/schema/enterprise.swagger.json' },
  },
  {
    input: 'src/api/note',
    outputEachEir: true,
    openapi: { inputFile: './src/schema/note.swagger.json' },
  },
  {
    input: 'src/api/user',
    outputEachEir: true,
    openapi: { inputFile: './src/schema/user.swagger.json' },
  },
]
