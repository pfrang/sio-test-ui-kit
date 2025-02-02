import { defineConfig } from '@pandacss/dev'
import { sioPreset } from '@sio-it/ui-kit/dist/theme/preset'


// readon this https://panda-css.com/docs/customization/utilities
export default defineConfig({
  presets: [sioPreset],
  // eject: true,
  // preflight: true,
  utilities: {
    bgOpac: {
      className: 'bg-opac',
      values: 'colors',
      transform(value, args) {

        // Convert the color to rgba with 50% opacity
        const mix = args.utils.colorMix(value)
        if (mix.invalid) return { backgroundColor: value }

        const rgbaValue = mix.value.replace('rgb', 'rgba').replace(')', ', 0.5)')
        return {
          backgroundColor: rgbaValue
        }
      }
    }
  },
  theme: {
    extend: {
      
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
