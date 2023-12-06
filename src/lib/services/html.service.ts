import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

export const getHtmlFromMdFile = async (fileContent: string): Promise<string> => {
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContent)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const content = processedContent.toString()

  // Return the html converted
  return content
}
