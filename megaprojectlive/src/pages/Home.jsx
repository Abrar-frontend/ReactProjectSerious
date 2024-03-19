import React, {useState , useEffect} from 'react';
import appwriteServce from '../Appwrite/Config'
import {Container , PostCard} from '../component'

function Home() {
    const [Posts , setPosts] = useState([])

    useEffect( () => {

        appwriteServce.getPosts().then( (posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

    if (Posts.length === 0) {
  return (
    <div className="w-full py-8 mt-4 text-center">
        
        <Container>
            <div className='flex flex-wrap'>
                {Posts.map( (post) => (
                    <div key = {post.$id} className='p-2 w-1/4'> 
                        <PostCard {...post}/>
                    </div>
                ))

                }
            </div>
        </Container>

    </div>
  )
}

}

export default Home