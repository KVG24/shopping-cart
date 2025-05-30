import styled from "styled-components";

export default function Home() {
    return (
        <>
            <h1>Fake Store</h1>
            <WelcomeCard>
                <h1>Welcome to our Fake Store</h1>
                <p>
                    We have many fake items in our fake store in different
                    categories
                </p>
                <p>Checkout the Catalogue page</p>
                <p>
                    This store is created for the purpose of testing gained
                    knowledge in different React features and technologies
                </p>
            </WelcomeCard>
        </>
    );
}

const WelcomeCard = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #616161;
    border-radius: 5px;
    padding: 1rem;
    h1 {
        font-size: 3rem;
        padding: 0;
    }
    p {
        font-size: 1.2rem;
    }
`;
