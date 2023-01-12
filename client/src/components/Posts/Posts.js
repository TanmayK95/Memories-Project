import React from "react";
import Post from "./Post/Post"
import {useSelector} from 'react-redux';
import useStyles from './styles'
import {Grid, CircularProgress} from "@material-ui/core"

export default function Posts({post , setCurrentId}) {
    const classes = useStyles();
    const posts = useSelector((state)=> state.posts );
    console.log("here",posts)
    return (
        !posts.length ? <CircularProgress/> : (
            // console.log("here")
            <Grid className = {classes.container} container alignItems="stretch" spacing = {3}>
                {posts.map((post) => {
                    // console.log("here3",post)
                    return <Grid key={post._id} item xs={12} sm={6}>
                        <Post post = {post} setCurrentId = {setCurrentId}/>
                    </Grid>
                })}
            </Grid>
        )
    )
}