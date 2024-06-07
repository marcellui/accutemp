import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/Home.js";
import Footer from "./components/footer.js";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import BuildingAutomation from "./pages/BuildingAutomation.js";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<NavBar></NavBar>
					<Home />
					<Footer />
					<Routes>
						<Route
							path="buildingautomation"
							element={<BuildingAutomation />}
						/>
					</Routes>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
