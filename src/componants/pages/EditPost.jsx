import React from 'react'
import { Container, PostForm } from '../index'
import { useParams } from 'react-router-dom'
import dataService from '../../service/dataService'
import { useNavigate } from 'react-router-dom'
function EditPost() {
    const navigate = useNavigate()
    const [post, setPost] = React.useState(null)
    const { slug } = useParams()

    React.useEffect(() => {
        dataService.getPost(slug)
            .then((data) => {
                if (data) {
                    setPost(data)
                }
                else {
                    navigate('/')
                }
            })
    }, [slug,navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
    }
    

export default EditPost