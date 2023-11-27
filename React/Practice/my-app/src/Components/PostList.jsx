import React from 'react'
import MyPosts from './post'
import {CSSTransition,TransitionGroup,} from 'react-transition-group';


const PostList = function ({posts,title,remove}){
  if(!posts.length){
    return(<h1 style={{textAlign: 'center'}}>Post Undefined</h1>
)
  }
    return(
    <div>
         <h1 style={{textAlign:'center'}}>{title}</h1>
         <TransitionGroup>
          {posts.map((post,index)=>
          <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post"
        >
          <MyPosts remove={remove} number={index +1} post={post} key={post.id}/>
          </CSSTransition>   
          )}
          </TransitionGroup>
      
    </div>
    )
    
}
export default PostList