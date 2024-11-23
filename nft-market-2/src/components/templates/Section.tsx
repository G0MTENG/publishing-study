import { useState } from 'react'
import styled from 'styled-components'
import { SpaceMono, WorkSans } from '../atoms'

const SectionWrapper = styled.div<{ paddingX: number }>`
  width: 100%;
  padding: 10px ${(props) => props.paddingX}px 0;
  background-color: ${(props) => props.theme.colors.text1};
  display: flex;
`

const Container = styled.div<{ select: boolean }>`
  width: 100%;
  padding: 14px 0;
  flex: 1;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => (props.select ? `1px solid ${props.theme.colors.text3}` : 'none')};
`

const Wrapper = styled.div<{ select: boolean }>`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.select ? props.theme.colors.text3 : props.theme.colors.text2};
`

const Desktop = () => {
  const [select, setSelect] = useState(true)

  const handleToggle = () => {
    setSelect(!select)
  }

  return (
    <SectionWrapper paddingX={115}>
      <Container select={select} onClick={handleToggle}>
        <WorkSans.H5>NFTs</WorkSans.H5>
        <Wrapper select={select}>
          <SpaceMono.Text>302</SpaceMono.Text>
        </Wrapper>
      </Container>
      <Container select={!select} onClick={handleToggle}>
        <WorkSans.H5>Collections</WorkSans.H5>
        <Wrapper select={!select}>
          <SpaceMono.Text>67</SpaceMono.Text>
        </Wrapper>
      </Container>
    </SectionWrapper>
  )
}

const Tablet = () => {
  const [select, setSelect] = useState(true)

  const handleToggle = () => {
    setSelect(!select)
  }

  return (
    <SectionWrapper paddingX={77}>
      <Container select={select} onClick={handleToggle}>
        <WorkSans.H5>NFTs</WorkSans.H5>
        <Wrapper select={select}>
          <SpaceMono.Text>302</SpaceMono.Text>
        </Wrapper>
      </Container>
      <Container select={!select} onClick={handleToggle}>
        <WorkSans.H5>Collections</WorkSans.H5>
        <Wrapper select={!select}>
          <SpaceMono.Text>67</SpaceMono.Text>
        </Wrapper>
      </Container>
    </SectionWrapper>
  )
}

const Mobile = () => {
  const [select, setSelect] = useState(true)

  const handleToggle = () => {
    setSelect(!select)
  }
  return (
    <SectionWrapper paddingX={30}>
      <Container select={select} onClick={handleToggle}>
        <WorkSans.H5>NFTs</WorkSans.H5>
      </Container>
      <Container select={!select} onClick={handleToggle}>
        <WorkSans.H5>Collections</WorkSans.H5>
      </Container>
    </SectionWrapper>
  )
}

export const Section = {
  Desktop,
  Tablet,
  Mobile,
}
