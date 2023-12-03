export const getLoremText = (numberOfCharacters = 10): string  => {
  const loremIpsumWords = [
    'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
    'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'
  ]

  let loremIpsumText = ''

  while (loremIpsumText.length < numberOfCharacters) {
    const randomWord = loremIpsumWords[Math.floor(Math.random() * loremIpsumWords.length)]
    loremIpsumText += randomWord + ' '
  }

  loremIpsumText = loremIpsumText.slice(0, numberOfCharacters)

  return loremIpsumText
}
