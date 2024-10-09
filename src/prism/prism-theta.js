import { Prism } from 'prism-react-renderer';

// Define the custom Theta language for Prism
Prism.languages.theta = {
  'comment': [
    {
      pattern: /\/\/.*/, // Single-line comments
      greedy: true,
      alias: 'comment'
    },
    {
      pattern: /\/-\s[\s\S]*?\s-\//, // Multi-line comments
      greedy: true,
      alias: 'comment'
    }
  ],
  'string': {
    pattern: /'(?:\\.|[^\\'])*'/, // Single-quoted strings
    greedy: true,
    alias: 'string'
  },
  'number': {
    pattern: /\b\d+(\.\d+)?\b/, // Numbers (integer and floating-point)
    alias: 'number'
  },
  'boolean': {
    pattern: /\b(?:true|false)\b/, // Booleans (true, false)
    alias: 'boolean'
  },
  'keyword': {
    pattern: /\b(?:if|else|return|link|match)\b/, // Control keywords
    alias: 'keyword'
  },
  'capsule': {
    // Capsule and struct declarations (e.g., capsule MathFunctions)
    pattern: /\b(capsule|struct)\s+\w+/,
    inside: {
      keyword: /\b(?:capsule|struct)\b/, // Highlights capsule/struct keyword
      'class-name': {
        // Capsule/struct name is treated as a class-name (e.g., MathFunctions)
        pattern: /\b\w+\b/,
        alias: 'capsule-name'
      }
    }
  },
  'variable-with-type': {
    // Updated pattern to handle nested types like Function<Number, Number>
    pattern: /\b([a-zA-Z_]\w*)\s*<\s*(?:[A-Za-z_][A-Za-z0-9_]*(?:\s*,\s*)?|\s*(?:<[^>]+>)?\s*)+>/,
    inside: {
      'variable': {
        pattern: /^\b[a-zA-Z_]\w*\b/, // Capture the variable part
        alias: 'variable'
      },
      'punctuation': {
        // Match < and > as punctuation, not part of the class-name
        pattern: /[<>]/,
        alias: 'punctuation'
      },
      'class-name': {
        // Match each type within the angle brackets (e.g., Function, Number)
        pattern: /\b[A-Za-z_][A-Za-z0-9_]*\b/,
        alias: 'class-name'
      }
    }
  },
  'function': {
    // Function names followed by parentheses (e.g., add(), factorial())
    pattern: /\b[a-zA-Z_]\w*(?=\s*\()/,
    alias: 'function'
  },
  'operator': {
    pattern: /==|=>|->|!=|<=|>=|<|>|!|=|\|\||&&|\*\*|\+|-|\*|\//, // Operators
    alias: 'operator'
  },
  'punctuation': {
    pattern: /[{}[\];(),.:]/, // Punctuation (e.g., braces, commas, parentheses)
    alias: 'punctuation'
  },
  'assignment': {
    pattern: /=/, // Assignment operator (=)
    alias: 'operator'
  },
  'variable': {
    // Match variables without a type (as a fallback)
    pattern: /\b[a-zA-Z_]\w*\b/,
    alias: 'variable'
  }
};
