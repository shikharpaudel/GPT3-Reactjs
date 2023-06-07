import React from "react";
import './Blog.css';
import { Article } from "../../component";
import {blog01,blog02,blog03,blog04,blog05} from './index.js';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id = "blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,<br/>We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupa">
          <Article imgURL={blog01} date = "Sep 26, 2021" title = "GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container-groupb">
          <Article imgURL={blog02} date = "Sep 26, 2021" title = "GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgURL={blog03} date = "Sep 26, 2021" title = "GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog04} date = "Sep 26, 2021" title = "GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog05} date = "Sep 26, 2021" title = "GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
