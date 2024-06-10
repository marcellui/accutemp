import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/Home.js";
import Footer from "./components/footer.js";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import BuildingAutomation from "./pages/BuildingAutomation.js";
import SystemsIntegration from "./pages/SystemsIntegration";
import ResourceManagement from "./pages/ResourceManagement";
import AdvancedAnalytics from "./pages/AdvancedAnalytics";
import MonitoringAndSupport from "./pages/MonitoringAndSupport";
import EngineeringAndInstallation from "./pages/EngineeringAndInstallation";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<NavBar/>
					<Routes>
            <Route path="" element={<Home />} />
						<Route path="buildingautomation" element={<BuildingAutomation />}/>
            <Route path="systemsintegration" element={<SystemsIntegration/>}/>
            <Route path="resourcemanagement" element={<ResourceManagement/>}/>
            <Route path="engineeringandinstallation" element={<EngineeringAndInstallation/>}/>
            <Route path="advancedanalytics" element={<AdvancedAnalytics/>}/>
            <Route path="monitoringandsupport" element={<MonitoringAndSupport/>}/>
					</Routes>
          <Footer />
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;