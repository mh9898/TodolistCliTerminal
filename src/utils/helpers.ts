// src/utils/helpers.ts
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export const generateId = (): string => {
  return Date.now().toString();
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
