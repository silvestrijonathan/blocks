import React from 'react'
import { Blocks, TaglineContent } from '@blocks/react'
export default () => (
  <Blocks.Root>
    <TaglineContent
      sx={{
        pt: 4
      }}
      textAlign="left"
    >
      <TaglineContent.Container>
        <TaglineContent.Heading
          as="h1"
          sx={{
            fontSize: 6,
            mt: null,
            mb: null,
            my: -1
          }}
        >
          What is a block?
        </TaglineContent.Heading>
        <TaglineContent.Paragraph>
          A Block refers to a piece of content or a component. It's a section of
          your content while a document is a collection of blocks.
        </TaglineContent.Paragraph>
        <TaglineContent.Paragraph>
          Blocks can be simple like a paragraph of text or even a box with a
          tomato background color. Blocks can be complex like an embedded
          spreadsheet or a chart that fetches live data.
        </TaglineContent.Paragraph>
      </TaglineContent.Container>
    </TaglineContent>
  </Blocks.Root>
)
