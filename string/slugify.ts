const SLUG_REGEX = [
  {
    regex: /[\xC0-\xC6]/g,
    char: "A",
  },
  {
    regex: /[\xE0-\xE6]/g,
    char: "a",
  },
  {
    regex: /[\xC8-\xCB]/g,
    char: "E",
  },
  {
    regex: /[\xE8-\xEB]/g,
    char: "e",
  },
  {
    regex: /[\xCC-\xCF]/g,
    char: "I",
  },
  {
    regex: /[\xEC-\xEF]/g,
    char: "i",
  },
  {
    regex: /[\xD2-\xD6]/g,
    char: "O",
  },
  {
    regex: /[\xF2-\xF6]/g,
    char: "o",
  },
  {
    regex: /[\xD9-\xDC]/g,
    char: "U",
  },
  {
    regex: /[\xF9-\xFC]/g,
    char: "u",
  },
  {
    regex: /[\xC7-\xE7]/g,
    char: "c",
  },
  {
    regex: /[\xD1]/g,
    char: "N",
  },
  {
    regex: /[\xF1]/g,
    char: "n",
  },
]

/**
 * Slugify
 * String to convert to slug
 *
 * Example:
 * ```typescript
 * import { slugify } from "./string/slugify";
 *
 * const str = "Some str";
 *
 * slugify(str); // "some-str"
 * ```
 *
 * @param {string} input: String to convert to slug
 * @return {string}
 */
export const slugify = (input: string): string => {
  for (let i = 0; i < SLUG_REGEX.length; i++) {
    input = input.replace(SLUG_REGEX[i].regex, SLUG_REGEX[i].char)
  }

  return input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/\-{2,}/g, "-")
    .replace(/^\-+|\-+$/g, "")
}


