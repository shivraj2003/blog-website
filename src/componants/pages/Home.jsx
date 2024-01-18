import React from 'react'
import { Container, PostCard } from '../index'
import { useState,useEffect } from 'react'
import auth from '../../service/auth'
import dataService from '../../service/dataService'
import { useSelector } from 'react-redux'

function Home() {
     const [posts, setPosts] = useState([])
    // useEffect(() => {
    // dataService.getPosts([])
    //     .then((data) => {
    //         if(data){
    //             setPosts(data.documents)
    //         }
    //      }
    // )}, [posts])

     const [user, setUser] = useState(null);

    const userStatus= useSelector((state) => state.auth.userData);

    useEffect(() => {
        // Fetch posts when the component mounts or the user changes
        const fetchPosts = async () => {
            const userData = await auth.getCurrentUser();
            setUser(userData);
console.log("userData",userData);
            // Fetch posts only if there's a logged-in user
            if (userData) {
                const data = await dataService.getPosts([]);
                if (data) {
                    setPosts(data.documents);
                }
            }
        };

        fetchPosts();
    }, [user,posts,userStatus]);
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    else
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

export default Home
