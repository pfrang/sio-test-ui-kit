import { defineConfig } from '@pandacss/dev'
import { sioPreset } from '@sio-it/ui-kit/theme'

// readon this https://panda-css.com/docs/customization/utilities
export default defineConfig({
  presets: [sioPreset],
  // eject: true,
  // preflight: true,

  clean: true,

  hash: { className: true, cssVar: false },
  hooks: {
    'utility:created': ({ configure }) => {
      configure({
        toHash: (paths, toHash) => {
          const concatenatedPaths = paths.reduce((acc, path) => acc + path, '');
          return toHash(concatenatedPaths)
        }
      })
    }
  },

  jsxFramework: 'react',
  include: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@sio-it/ui-kit/**/*.{js,jsx,ts,tsx}'],
  // importMap: "@sio-it/ui-kit",
  // dependencies: ['./node_modules/@sio-it/ui-kit/dist/**/*.{js,jsx,ts,tsx}'],
  // eject: true,
  // importMap: "'./node_modules/@sio-it/ui-kit/src",
  // importMap
  // outdir: 'styled-system',
})
