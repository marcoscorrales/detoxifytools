import React from 'react'

const Page = ({params}: {params: {categoryId: string}}) => {
  return (
    <div className='mt-50 text-center'>
        <h1>Category {params.categoryId}</h1>
        <p>This is the category page</p>
    </div>
  )
}

export default Page