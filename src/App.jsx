import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <>
            <NavigationBar />
            <h1>Home Page</h1>
            <div className="welcome-card">
                <h2>Welcome to our Fake Store</h2>
                <p>
                    We have many fake items in our fake store in different
                    categories
                </p>
                <p>Checkout the Catalogue page</p>
                <p>
                    This store is created for the purpose of testing gained
                    knowledge in different React features and technologies
                </p>
            </div>
        </>
    );
}

export default App;
