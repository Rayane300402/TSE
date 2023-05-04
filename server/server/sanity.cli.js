import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ipxnyxro',
    dataset: 'production',
    useCdn: true,
  }
})
