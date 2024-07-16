const assert = require("assert");
require("./index");

describe("Testing splitWords() prototype", function() {
  it('should split a string into words ignoring whitespace by default', function() {
    const text = "Hello, world! This is a test.";
    const result = text.splitWords();
    assert.deepStrictEqual(result, ["Hello,", "world!", "This", "is", "a", "test."]);
  });

  it('should include whitespace when includewhitespace is true', function() {
    const text = "Hello, world! This is a test.";
    const result = text.splitWords(true);
    assert.deepStrictEqual(result, ["Hello,", " ", "world!", " ", "This", " ", "is", " ", "a", " ", "test."]);
  });

  it('should split on hyphens by default', function() {
    const text = "co-operate re-entry well-known";
    const result = text.splitWords();
    assert.deepStrictEqual(result, ["co-", "operate", "re-", "entry", "well-", "known"]);
  });

  it('should not split on single hyphens when breakonhyphens is false', function() {
    const text = "co-operate re-entry well-known";
    const result = text.splitWords(false, false);
    assert.deepStrictEqual(result, ["co-operate", "re-entry", "well-known"]);
  });

  it('should split on multiple hyphens by default', function() {
    const str = "dash--dash word--word";
    const result = str.splitWords();
    assert.deepStrictEqual(result, ["dash", "--", "dash", "word", "--", "word"]);
  });

  it('should split on multiple hyphens when breakonhyphens is false', function() {
    const text = "dash--dash word--word";
    const result = text.splitWords(false, false);
    assert.deepStrictEqual(result, ["dash--dash", "word--word"]);
  });

  it('should handle multiple spaces correctly', function() {
    const text = "This  is   a    test.";
    const result = text.splitWords();
    assert.deepStrictEqual(result, ["This", "is", "a", "test."]);
  });

  it('should include multiple spaces when includewhitespace is true', function() {
    const text = "This  is   a    test.";
    const result = text.splitWords(true);
    assert.deepStrictEqual(result, ["This", "  ", "is", "   ", "a", "    ", "test."]);
  });

  it('should handle strings with only whitespace correctly', function() {
    const text = "     ";
    const result = text.splitWords();
    assert.deepStrictEqual(result, []);
  });

  it('should return whitespace tokens when includewhitespace is true for a whitespace-only string', function() {
    const text = "     ";
    const result = text.splitWords(true);
    assert.deepStrictEqual(result, ["     "]);
  });

  it('should handle strings with hyphens at the beginning of words correctly', function() {
    const text = "-start -middle -end";
    const result = text.splitWords();
    assert.deepStrictEqual(result, ["-start", "-middle", "-end"]);
  });

  it('should handle strings with hyphens at the beginning of single letters correctly', function() {
    const text = "-a -b -c";
    const result = text.splitWords();
    assert.deepStrictEqual(result, ["-a", "-b", "-c"]);
  });
});
