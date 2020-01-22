import * as React from "react";
import NextStatelessComponent from "next/client";
import Link from "next/link";
import {Layout} from "@monorepo/design/components";


interface Props {
  posts: any[];
}

const BlogIndex: NextStatelessComponent<Props> = ({ posts }) => {
  return (
    <Layout>
        <div>
        <h1>monorepo's blog</h1>
        <ul>
            {posts.map(post => (
            <li key={post.id}>
                <Link passHref href={`/${post.id}`}>
                <a>{post.title}</a>
                </Link>
            </li>
            ))}
        </ul>
        </div>
      </Layout>
    
  );
};

BlogIndex.getInitialProps = async () => {
  const posts = [
    { id: 1, title: "10 great drinking games" },
    { id: 2, title: "3 amazing hangover antidotes!" }
  ];
  return { posts };
};

export default BlogIndex;