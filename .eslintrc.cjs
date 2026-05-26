module.exports = {
  // 其他配置...
    overrides: [
    {
        files: ['.eslintrc.cjs', '.stylelintrc.cjs'],
        env: {
        node: true,
        commonjs: true
        },
        rules: {
        'no-undef': 'off' // 关闭 'module' 未定义的报错
        }
    }
    ]
}