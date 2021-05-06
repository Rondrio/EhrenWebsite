import React from 'react'
import styled from 'styled-components'

const Entry = ({ name, score, setAdditionalStatisticsFlag }) => {
    function showAdditionalInfo() {
        // setAdditionalStatisticsFlag(entry.name)
    }


    return (
        <Wrapper>
            <Item onClick={showAdditionalInfo}>
                <Avatar src={`https://avatars.dicebear.com/api/gridy/${name}.svg`} alt="" />
                <FlexRow width="70%" justifyContent="space-between">
                    <FlexCol padding="0 8px">
                        <LabelText>Name</LabelText>
                        <Text>{name}</Text>
                    </FlexCol>
                    <FlexCol padding="0 8px">
                        <LabelText>Ehre</LabelText>
                        <Text>{score}</Text>
                    </FlexCol>
                </FlexRow>
            </Item>
        </Wrapper >

    )
}

export default Entry


const FlexRow = styled.div`
    display: flex;
    padding: ${props => props.padding};
    justify-content: ${props => props.justifyContent};
    width: ${props => props.width};
`
const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${props => props.padding};
    justify-content: ${props => props.justifyContent};
`

const Text = styled.p`
    font-size: 1rem;
    color: #f1f1f1;
`
const LabelText = styled(Text)`
    font-size: 0.75rem;
    color: #55576E;
`

const Avatar = styled.img`
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: 50px;
    height: 50px;
    border: 2px solid #e84545;
    border-radius: 50px;
    overflow: hidden;
    margin: 0  16px;
    background-color: #e84545;
`
const Wrapper = styled.div`
    padding: 8px;
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    &:hover {
        transform: scale(1.1);
        ${Avatar} {
            transform: scale(1.2);
        }
    }
`


const Item = styled.div`
    width: 500px;
    background-color:#2b2e4a;
    border-radius: 14px;
    padding: 8px 16px;
    /* border: 2px solid #55576E; */
    display: flex;
    align-items: center;
    /* box-shadow: 0 2px 4px 0 hsl(198deg 45% 10% / 12%); */
     @media (max-width: 768px) {
       width: 350px;
  }
`

