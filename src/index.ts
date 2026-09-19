import type { URI, $URI, $string, KEY_VALUE } from '@robert.tools/typings';

/**
 * 🎯 convert the number to a string
 * @param {number} value ➡️ The number to convert.
 * @returns {string} 📤 The formatted number as a string with dots if needed.
 */
export const convertNumber2String = (value: number): string => {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

/**
 * 🎯 Splits a line into a key and value based on the first occurrence of either
 * a colon or space.
 * @todo stabilize more the content for spaces/newlines
 * @param {string} input ➡️ The line to split.
 * @returns {object} 📤 An object containing the key and value.
 */
export const convert2KeyValue = (input: string): KEY_VALUE => {
    const matchesColon = input.match(/^([^\s]+)\:\s(.*)/); // KEY: value
    const matchesSpace = input.match(/^([^\s]+)\s(.*)/); // KEY value
    let key = '';
    let value = '';
    if (matchesColon && matchesColon[2]) {
        key = matchesColon[1];
        value = matchesColon[2];
    } else if (matchesSpace && matchesSpace[2]) {
        key = matchesSpace[1];
        value = matchesSpace[2];
    }
    return {
        key,
        value,
    };
};

/**
 * 🎯 transform a key to camelCase
 * @param {string} input ➡️ The key to transform.
 * @returns {string} 📤 The transformed key in camelCase.
 */
export const convert2CamelCase = (input: string): string => {
    let newKey = input.toLowerCase().trim();
    if (newKey.indexOf('-') !== -1) {
        const parts = newKey.split('-');
        let finalKey = '';
        parts.forEach((part: string, index: number) => {
            if (index === 0) {
                finalKey = part;
            } else {
                finalKey += part.charAt(0).toUpperCase() + part.slice(1);
            }
        });
        newKey = finalKey;
    }
    return newKey;
};
/**
 * 🎯 converts a key to kebap case
 * @param {string} input ➡️ The header key.
 * @returns {string} 📤 The kebap cased key.
 */
export const convert2KebapCase = (input: string): string => {
    const result = input
        .replace(/([A-Z])/g, (str) => '-' + str.toLowerCase()) // uppercase => -lowercase
        .replace(/^-/, '') // remove leading dash if present
        .replace(/_/g, '-') // underscores => dashes
        .replace(/^./, (str) => str.toLowerCase());
    return result;
};
/**
 * 🎯 converts a key to header case
 * @param {string} input ➡️ The header key.
 * @returns {string} 📤 The header cased key.
 */
export const convert2HeaderCase = (input: string): string => {
    const result = input
        .replace(/([A-Z])/g, (str) => '-' + str.toUpperCase()) // uppercase => -lowercase
        .replace(/^-/, '') // remove leading dash if present
        .replace(/_([a-z])/g, (str) => '-' + str[1].toUpperCase()) // underscores => dashes
        .replace(/--+/g, '-') // replace multiple dashes with a single dash
        .replace(/^./, (str) => str.toUpperCase());
    return result;
};

/**
 * 🎯 normalizes a text by removing diacritics and special characters
 * @param input ➡️ unnormalized text
 * @returns {string} 📤 normalized text
 */
export const normalizeText = (input: string): string => {
    return String(input || '')
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(
            /[øØæÆåÅ]/g,
            (char) =>
                ({
                    ø: 'o',
                    Ø: 'O',
                    æ: 'ae',
                    Æ: 'AE',
                    å: 'a',
                    Å: 'A',
                })[char]!
        )
        .trim()
        .toLowerCase();
};

/**
 * 🎯 cleans up extra spaces in a text. Reducing: '   ' to ' '
 * @param input ➡️ text with spaces
 * @returns {string} 📤 trimmed text
 */
export const cleanSpaces = (input: string): string => {
    return input.replace(/\s+/g, ' ').trim();
};

/**
 * 🎯 resolves a relative or absolute URL to an absolute URL
 * @param {$string} value ➡️ The relative or absolute URL.
 * @param {string} baseUrl ➡️ The base URL to resolve against.
 * @returns {string | undefined} 📤 The resolved absolute URL or undefined if invalid.
 */
export const absoluteUrl = (value: $URI, baseUrl: URI): $string => {
    if (!value) return undefined;

    try {
        return new URL(value, baseUrl).href;
    } catch {
        return undefined;
    }
};
