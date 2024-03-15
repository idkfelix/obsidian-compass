import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/main.js'],
  bundle: true,
  outfile: 'dist/main.js',
  external: [
    "obsidian",
  ]
})