import React from 'react'
import styled  from 'styled-components'
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
                title="Model-S"
                description = ""
                backgroundImg ="model-s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Available Inventory"     
            />
            <Section 
               title="Model-3"
                description = "1% Company Car Tax"
                backgroundImg ="model-3.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Available Inventory"  
            />
            <Section 
                title="Model-X"
                description = ""
                backgroundImg ="model-x.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Available Inventory" 
            />
            <Section 
                title="Model-Y"
                description = "Order Online for Touchless Delivery"
                backgroundImg ="model-y.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Available Inventory" 
            />
            <Section
                title= "Solar and Powerwall"
                description = "Power Everything"
                backgroundImg = "solar-panel.jpg"
                leftBtnText = "Learn More"
            />
            <Section
                title= "Accesories"
                backgroundImg = "accessories.jpg"
                leftBtnText = "Shop Now"
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`
