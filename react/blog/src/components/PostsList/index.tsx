import { IPost } from "../../types";
import { Post } from "../Post";

import { Container, Posts, Title, Wrapper } from "./styles";

interface PostsListProps {
  posts: IPost[];
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <Wrapper>
      <Container>
        <Title>
          <h1>Posts Recentes</h1>
          <span>Por favor, faça login para continuar.</span>
        </Title>

        <Posts>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              image={post.image}
              category={post.category}
              avatar={post.avatar}
              createdAt={post.createdAt}
              author={post.author}
              description={post.description}
            />
          ))}
        </Posts>
      </Container>
    </Wrapper>
  );
}
