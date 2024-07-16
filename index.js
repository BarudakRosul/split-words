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
String.prototype.splitWords = function(includewhitespace = false, breakonhyphens = true) {
  const word_punct = "[\\w!\"'&.,?]";
  const letter = "[^\\d\\W]";
  const whitespace = "[\\s]";
  const nowhitespace = "[^\\s]";
  let word_sep;

  if (breakonhyphens === true) {
    word_sep = new RegExp(
      `(${whitespace}+|(?<=${word_punct})-{2,}(?=\\w)|${nowhitespace}+?(?:-(?:(?<=${letter}{2}-)|(?<=${letter}-${letter}-))(?=${letter}-?${letter})|(?=${whitespace}|\\Z)|(?<=${word_punct})(?=-{2,}\\w)))`,
      "g"
    );
  } else {
    word_sep = new RegExp(
      `(${whitespace}+)`,
      "g"
    );
  }

  const words = this.split(word_sep).filter(Boolean);

  if (includewhitespace === true) {
    return words;
  } else {
    return words.filter(token => !token.match(whitespace));
  }
}
