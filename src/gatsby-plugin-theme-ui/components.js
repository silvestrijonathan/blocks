import Prism from '@theme-ui/prism'

import { Blocks, HeaderBasic, QuoteBasic } from '@blocks/react'

console.log(QuoteBasic)
console.log(QuoteBasic.Author)

import Subscribe from '../components/subscribe'

export default {
  pre: props => props.children,
  code: Prism,
  Subscribe,
  QuoteBasic
}
