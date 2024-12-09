import { defineConfig } from '@pandacss/dev'
// import { sioPreset } from '@sio-it/ui-kit'
export default defineConfig({
  presets: [],
  // eject: true,
  preflight: false,
  jsxFramework: 'react',
  include: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@sio-it/ui-kit/dist/**/*.{js,jsx,ts,tsx}'],
  // eject: true,
  // importMap: "@sio-it/ui-kit",
  // outdir: 'styled-system',
})
