export default {
    input: "src/index.js",
    output: [
        { file: "dist/index.esm.js", name: "index", format: 'esm' },
        { file: "dist/index.cjs.js", name: "index", format: 'cjs' },
    ]
}