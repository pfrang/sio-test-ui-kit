import { defineConfig } from '@pandacss/dev'
import { sioPreset } from '@sio-it/ui-kit/preset'
export default defineConfig({
  presets: [sioPreset],
  // eject: true,
  // preflight: false,
  jsxFramework: 'react',
  include: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@sio-it/ui-kit/dist/**/*.{js,jsx,ts,tsx}'],
  // eject: true,
  // importMap: "@sio-it/ui-kit",
  // outdir: 'styled-system',
})
