import React,{useState , Component} from 'react';
import axios from 'axios';
import './index.css';

class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts : []
        };
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => {
            this.setState({posts : response.data});
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
       

    }
    render(){
        const {posts } = this.state;
        return(
            
            <div>
                    <h1>POST LIST</h1>
                    {
                        posts.map(post => (
                            <PostIn id={post.id} title={post.comment} body={post.body}/>
                        ))
                    }
                </div>
        );
    }
    
}

const PostIn = ({title,id,body}) => {
    return (
        <div className="container">
        <div key={id} className="titleList">
            <p className="title">{title}</p>
            <p className="body">{body}</p>
        </div>
        </div>
    );
}

export default PostList;