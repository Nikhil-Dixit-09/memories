import React from 'react'
import { useSelector } from 'react-redux'
import './posts.css'
import Post from './Post/post'

const Posts = ({setCurrentId}) => {
    const Posts=useSelector((state)=>state.posts);
    console.log(Posts);
    return (
    <>
        <div className='Post'>
            <div className='List'>
                {
                    Posts.map((post)=>(
                        <Post key={post._id} post={post} setCurrentId={setCurrentId} className='single_post'/>
                    ))
                }
            </div>
        </div>
        
    </>
    
  )
}

export default Posts
