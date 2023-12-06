import React from 'react'

interface MarkdownReaderProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> { content: string }

const MarkdownReader: React.FC<MarkdownReaderProps> = ({ content, ...restProps }) => {
  return (
    <div className='px-5 lg:px-20 my-10' {...restProps}>
      <div className='prose w-full max-w-full'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export { MarkdownReader }
