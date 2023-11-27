import React from 'react'
import PostItem from './PostItem'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

const PostList = ({posts,title,remove}) =>{
  {/*умова*/}
if(posts.length === 0) {
  return( <h1 className='undefined-H1'>Post Undefined</h1> )
}
    return(
    <div> 
        <h1 style={{textAlign:'center'}}>{title}</h1>
        <TransitionGroup>
        {posts.map((post,index) =>//за допомогою методу Map ми перетворюємо об'єкт в реакт елемент(пост)
        <CSSTransition
        key={post.id}
        timeout={500}
        classNames="post">
        <PostItem remove={remove} post={post} number={index+1} /*передаємо пропсами елементи об'єкта*/></PostItem>

        </CSSTransition>
      
      )}</TransitionGroup>
      
    </div>
       
    )
}
export default PostList