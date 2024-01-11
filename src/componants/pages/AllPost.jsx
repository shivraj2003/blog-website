import React from 'react'
import dataService from '../../service/dataService'
import { Container, PostCard } from '../index'

function AllPost() {
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        dataService.getPosts([])
            .then((data) => {
                if(data){
                    setPosts(data.documents)
                }
    })
    }, [])
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                </Container>
        </div>
      )
    }
    
    export default AllPost