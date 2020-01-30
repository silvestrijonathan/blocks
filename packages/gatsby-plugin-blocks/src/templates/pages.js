import React, { useEffect, useState } from 'react'

export default () => {
  const [pages, setPages] = useState(null)

  useEffect(() => {
    const initializePages = async () => {
      const res = await fetch('/___blocks/pages')
      const allPages = await res.json()
      setPages(allPages)
    }

    initializePages()
  }, [])

  if (!pages) {
    return null
  }

  return (
    <ul>
      {pages.map(page => (
        <li key={page}>
          <a href={`/___blocks/edit?page=${page}`}>{page}</a>
        </li>
      ))}
    </ul>
  )
}
