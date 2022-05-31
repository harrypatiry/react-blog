import React, { useEffect, useState } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom';

function Home({ isAuth }) {
    const [posts, setPosts] = useState([]);
    const postsCollectionRef = collection(db, "posts")
    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id)
        await deleteDoc(postDoc)
    }
    useEffect (() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts();
    })
    let navigate = useNavigate();
    return (
        <div className='homePage'>{posts.map((post) => {
            return (
            <div className='post' key={post.id}>
                <div className='postHeader'>
                    <div className='title'>
                        <h1>{post.title}</h1>
                    </div>
                    <div className="deletePost">
                        {isAuth && post.author.id === auth.currentUser.uid && (
                        <button
                            onClick={() => {
                            deletePost(post.id);
                            }}
                        >
                            &#127367;
                        </button>
                        )}
                    </div>
                </div>
                <div className='postTextContainer'>{post.postText}</div>
                <h3>by {post.author.name}</h3>
                <button onClick={() => navigate("/post")}>read more</button>
            </div>
            )})}
        </div>
    )
}

export default Home
