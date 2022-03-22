const PACKAGE_ROOT_PATH = process.cwd();
export default {
    input: `${PACKAGE_ROOT_PATH}/lib/index.js`,
    output: {
        file: 'dist/index.js',
        format: 'esm'
    }
};