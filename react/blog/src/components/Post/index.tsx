import { useTheme } from "styled-components";

import { Article, Avatar, Button, RoundedButton } from "./styles";
import { IPost } from "../../types";

export function Post({
  author,
  avatar,
  category,
  createdAt,
  description,
  image,
  title,
}: IPost) {
  const theme = useTheme();

  return (
    <Article>
      <img src={image} alt={title} />
      <p className="category">{category}</p>
      <h2>{title}</h2>

      <div className="post-info">
        <Avatar src={avatar} alt="" />
        <div>
          <span style={{ color: theme.colors.title }}>{author}</span>
          <span>{createdAt}</span>
        </div>
      </div>
      <p className="description">{description}</p>

      <Button $primary>Curtir</Button>
      <RoundedButton as="a">Compartilhar</RoundedButton>
    </Article>
  );
}
