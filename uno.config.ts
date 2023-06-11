import {
  defineConfig,
  presetUno,
  presetTypography
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  rules: [
    ['font-serif', { 'font-family': "'BespokeSerif', serif" }]
  ]
})
