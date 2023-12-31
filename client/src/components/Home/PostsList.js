import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { getAllPostList } from "../../service/postDetailsAPI";
import PostCard from "./PostCard";

const PostsList = (props) => {
    const {token, user} = useUserAuth();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        console.log(token, "SDFGHJK");
        if(!token)return ;
        console.log(token, "SDFGHJdcfvgbhnjmhbgK");
        const fetchData = async () => {
            const packet = {
                id: user.email,
                token:token,
            }
            console.log("POST LIST");
            const response = await getAllPostList(packet);
            setPosts(response.data);
        };
        fetchData();
    }, [token]);

    return(
        <div >
            {posts && 
                posts.map((post) => {
                    return <PostCard key={post._id} details={post}/>
                })
            }
        </div>
    );
}

export default PostsList;