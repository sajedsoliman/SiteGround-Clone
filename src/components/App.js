import React from "react";

// components imports
import Header from "./landing-page/Header";
import ToolsAndServices from "./tools-services/ToolsAndServices";
import RecentlyLaunched from "./recently-launched/RecentlyLaunched";
import Solutions from "./in-house-solutions/Solutions";
import SupportTeam from "./support-team/SupportTeam";
import Reputation from "./reputation/Reputation";
import Footer from "./footer/Footer";

// material-ui imports
import { Container, ThemeProvider } from "@material-ui/core";

// other imports
import theme from "./theme/materialTheme";
import "../styles/dist/Main.css";
import MiniFooter from "./mini-footer-wp/MiniFooter";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<ToolsAndServices />
			<RecentlyLaunched />
			<Solutions />
			<SupportTeam />
			<Reputation />
			<MiniFooter />
			<Footer />
		</ThemeProvider>
	);
}
