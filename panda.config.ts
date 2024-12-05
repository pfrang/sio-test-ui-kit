import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: false,
  jsxFramework: 'react',
  include: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@sio-it/ui-kit/src/**/*.{js,jsx,ts,tsx}'],
  // outdir: 'styled-system'w
})
