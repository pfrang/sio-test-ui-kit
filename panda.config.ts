import { defineConfig } from '@pandacss/dev'
import { sioPreset } from '@sio-it/ui-kit/dist/theme/preset'


import type { PropertyTransform } from '@pandacss/types'
export const createColorMixTransform =
  (prop: string): PropertyTransform =>
    (value, args) => {
      const mix = args.utils.colorMix(value)
      if (mix.invalid) return { [prop]: value }
      const cssVar = '--mix-' + prop
      return {
        [cssVar]: mix.value,
        [prop]: `var(${cssVar}, ${mix.color})`
      }
    }

  
// readon this https://panda-css.com/docs/customization/utilities
export default defineConfig({
  presets: [sioPreset],
  // eject: true,
  // preflight: true,
  utilities: {
    extend: {
      background: {
        shorthand: "bg",
        className: "bg",
        values: "colors",
        transform: createColorMixTransform("background"),
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
