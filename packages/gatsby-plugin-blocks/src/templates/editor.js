import React, { useEffect, useState } from 'react'
import Editor from 'blocks-ui'
import * as Blocks from '@blocks/react'
import getQueryParam from 'get-query-param'

import useDebounce from '../use-debounce'

const PAGE = 'foo.js'

const Layout = props => {
  return <div className="layout">{props.children}</div>
}

export default ({ relativePath = PAGE }) => {
  const [code, setCode] = useState(null)
  const [page, setPage] = useState(null)
  const debouncedCode = useDebounce(code)

  useEffect(() => {
    setPage(getQueryParam('page', window.location.href))
  })

  useEffect(() => {
    const initializeCode = async () => {
      const res = await fetch('/___blocks/src', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ page })
      })
      const srcCode = await res.text()
      setCode(srcCode)
    }

    if (page) {
      initializeCode()
    }
  }, [page])

  useEffect(() => {
    if (!debouncedCode) {
      return
    }

    fetch('/___blocks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: debouncedCode,
        page: relativePath
      })
    })
  }, [debouncedCode])

  if (!code || !page) {
    return null
  }

  return (
    <Editor
      src={code}
      blocks={Blocks}
      layout={Layout}
      onChange={newCode => {
        setCode(newCode)
      }}
    />
  )
}
