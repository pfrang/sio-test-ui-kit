import { defineConfig } from '@pandacss/dev'
import { sioPreset } from '@sio-it/ui-kit/dist/preset'


// readon this https://panda-css.com/docs/customization/utilities
export default defineConfig({
  presets: [sioPreset],
  // eject: true,
  // preflight: true,
  theme: {
    extend: {
    }
  },

  utilities: {
    extend: {
      gridColumn: {
        property: 'gridColumn',
        group: 'Grid Layout',
        values: {
          'span': 'span',
          'start': 'start',
          'end': 'end',
        },
        transform(value, { token}) {
          return {
            gridColumn: token(value)
          }
        }
      }
    }
  },
  jsxFramework: 'react',
  include: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@sio-it/ui-kit/dist/**/*.{js,jsx,ts,tsx}'],
  // dependencies: ['./node_modules/@sio-it/ui-kit/dist/**/*.{js,jsx,ts,tsx}'],
  // eject: true,
  // importMap: "'./node_modules/@sio-it/ui-kit/src",
  // importMap
  // outdir: 'styled-system',
})
