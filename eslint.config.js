module.exports = [
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    
    languageOptions: {
      globals: {
        browser: 'readonly',
        node: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    
    rules: {
      // JavaScript formatting
      indent: ['error', 2],
      quotes: ['error', 'double'],
      semi: ['error', 'always'],
      eqeqeq: ['error'],
      
      // Console usage
      'no-console': ['warn'],
      
      // TypeScript specific
      '@typescript-eslint/no-explicit-any': ['error']
    },
    
    settings: {
      'import/resolver': {
        node: {
          moduleDirectory: ['node_modules', '/src']
        }
      }
    },
    
    processor: '@typescript-eslint/parser',
    plugins: {}
  }
];
