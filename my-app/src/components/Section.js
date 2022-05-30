import React from 'react'
import styled from 'styled-components'


function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap BgImage = { backgroundImg }>
            <bottom>
                <ItemText>
                    <h1> { title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </bottom>
            <Buttons>
                <bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                { rightBtnText }
                            </RightButton>
                        }
                    </ButtonGroup>
                  </bottom> 
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    background-image: url('/images/model-s.jpg');
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; //horizontal
    background-image: ${ props => `url("/images/${props.BgImage}")` }

`


const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`


const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`


const LeftButton = styled.div`
        background-color: rgba(23, 26, 32, 0.8);
        height: 40px;
        width: 250px;
        color: white;
        display: flex;
        justify-content: center;    
        align-items: center;
        border-radius: 100px;
        opacity: 0.85;
        text-transform: uppercase;
        font-size: 12px;
        cursor: pointer;
        margin: 8px;

`


const RightButton = styled(LeftButton)`
    background: white;
    opacitiy: 0.05;
    color: black;
`


const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`


const Buttons = styled.div`
`
