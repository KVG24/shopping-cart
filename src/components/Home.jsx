import styled from "styled-components";
import backgroundImg from "../assets/background.jpg";

export default function Home() {
    return (
        <>
            <h1>Fake Store</h1>
            <Wrapper>
                <WelcomeCard>
                    <Heading>Welcome to our Fake Store</Heading>
                    <Text>
                        We have many fake items in our fake store in different
                        categories
                    </Text>
                    <Text>Checkout the Catalogue page</Text>
                    <Text>
                        This store is created for the purpose of testing gained
                        knowledge in different React features and technologies
                    </Text>
                </WelcomeCard>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    background-image: url(${backgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

const WelcomeCard = styled.div`
    max-width: 700px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    text-align: center;
    place-items: center;
    flex-direction: column;
    gap: 2rem;
    background-color: #616161;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: inset rgb(0, 0, 0) 3px 3px 20px 4px,
        rgba(32, 32, 32, 0.5) -2px -3px 14px 1px inset;
`;

const Heading = styled.h1`
    font-size: 3rem;

    @media (max-width: 500px) {
        font-size: 2rem;
    }
`;

const Text = styled.p`
    font-size: 1.5rem;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;
