import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../api/swagger/gonext.openapi.json',
  apiFile: './src/store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/store/apiClient.ts',
  exportName: 'apiClient',
  hooks: true,
}

export default config
