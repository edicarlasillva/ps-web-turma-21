import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PostsList } from "../../components/PostsList";

import { posts } from "../../posts";

import { Container, FormWrapper } from "./styles";

export function Home() {
  return (
    <>
      <Header />

      <FormWrapper>
        <Container>
          <input type="text" placeholder="Filtrar posts por título" />
          <button>Filtrar</button>
        </Container>
      </FormWrapper>

      <main>
        <PostsList posts={posts} />
      </main>

      <Footer />
    </>
  );
}
