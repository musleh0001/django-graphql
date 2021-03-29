import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import Products from "./components/Products";

const client = new ApolloClient({
    uri: "http://127.0.0.1:8000/graphql/",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h2>My first Apollo app</h2>
                <Products />
            </div>
        </ApolloProvider>
    );
}

export default App;
