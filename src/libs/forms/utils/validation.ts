// reusable validation functions for react-final-form

// use this to create a specific minChar validation
export const minChar = (len: number) => (value: string) =>
  value && value.length < len ? `Must be at least ${len} characters long.` : undefined;

export const required = (value: string) => (!value ? 'Required' : undefined);
