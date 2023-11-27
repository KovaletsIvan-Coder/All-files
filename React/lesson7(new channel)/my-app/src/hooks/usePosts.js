import {useMemo} from 'react'
export const useSortedPosts = (posts1,sort) =>{
    const sortedPosts = useMemo( () => {
        if(sort){
          return [...posts1].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts1
      }, [sort,posts1])
      return sortedPosts
}

export const usePosts = (posts,sort,query) =>{
    const sortedPosts = useSortedPosts(posts,sort)
    const sortedAndSearchedPosts = useMemo( () =>{
        return sortedPosts.filter( post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query,sortedPosts])

return sortedAndSearchedPosts
}
