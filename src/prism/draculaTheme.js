const customDraculaTheme = {
  plain: {
    color: '#f8f8f2', // Foreground color (standard text)
    backgroundColor: '#282a36', // Background color
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: '#6272a4', // Comment color (Dracula purple)
        fontStyle: 'italic', // Optional: make comments italic
      },
    },
    {
      types: ['string'],
      style: {
        color: '#f1fa8c', // Yellow for strings (updated)
      },
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: '#50fa7b', // Green for numbers and booleans
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#bd93f9', // Purple for keywords (no change)
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#8be9fd', // Cyan for class names (types)
        fontWeight: 'bold', // Optional: make class names bold
      },
    },
    {
      types: ['function'],
      style: {
        color: '#ff79c6', // Pink for function names (updated)
      },
    },
    {
      types: ['operator'],
      style: {
        color: '#ff5555', // Red for operators (no change)
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#f8f8f2', // Default foreground color for punctuation
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#ffb86c', // Orange for variables (updated)
      },
    },
    {
      types: ['capsule-name'],
      style: {
        color: '#50fa7b', // Green for capsule names
        fontWeight: 'bold',
      },
    },
  ],
};

export default customDraculaTheme;
