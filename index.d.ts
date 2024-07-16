/**
 * Splits a string into an array of words based on whitespace and hyphenation rules.
 *
 * If the `includewhitespace` parameter is `true`, the whitespace is included in the resulting array elements.
 * If the `breakonhyphens` parameter is `true`, the hyphens are considered as word boundaries.
 *
 * @param {boolean} includewhitespace - A flag indicating whether to keep whitespace in the resulting array elements.
 * @param {boolean} breakonhyphens - A flag indicating whether to break on hyphens as word boundaries.
 * @return {Array<string>} The array of words, with or without whitespace and based on hyphenation rules.
 */
interface String {
  splitWords(includewhitespace?: boolean, breakonhyphens?: boolean): Array<string>;
}
