import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: ${({theme}) => theme.colors.secondary};
  padding: 30px 0;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 1250px;
  padding: 0 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${({theme}) => theme.colors.title};
`

export const Logo = styled.img`
  width: 100px;
`