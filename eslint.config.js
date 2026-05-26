import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
  // 忽略文件
  {
    ignores: ['node_modules/**', 'dist/**', 'public/**', '*.d.ts'],
  },

  // 基础规则
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  prettierConfig,

  // 核心规则（已移除废弃规则）
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
      },
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // 视频里的基础规则
      'no-var': 'error',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unexpected-multiline': 'error',
      'no-useless-escape': 'off',

      // TS 规则
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/semi': 'off',

      // Vue 规则（已移除废弃的 script-setup-uses-vars）
      'vue/multi-word-component-names': 'off',
      'vue/no-mutating-props': 'off',
      'vue/attribute-hyphenation': 'off',

      // Prettier 集成
      'prettier/prettier': 'warn',
    },
  },
]
