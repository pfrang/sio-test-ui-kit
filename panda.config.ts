import { defineConfig } from '@pandacss/dev'
import { sioPreset } from '@sio-it/ui-kit/theme'

// readon this https://panda-css.com/docs/customization/utilities
export default defineConfig({
  presets: [sioPreset],
  // eject: true,
  // preflight: true,

  clean: true,

  jsxFramework: 'react',
  include: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@sio-it/ui-kit/src/**/*.{js,jsx,ts,tsx}'],
  // importMap: "@sio-it/ui-kit",
  // dependencies: ['./node_modules/@sio-it/ui-kit/dist/**/*.{js,jsx,ts,tsx}'],
  // eject: true,
  // importMap: "'./node_modules/@sio-it/ui-kit/src",
  // importMap
  // outdir: 'styled-system',
})
