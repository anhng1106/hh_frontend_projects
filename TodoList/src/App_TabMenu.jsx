import React from "react";
import "./App.css";
import AppTodo from "./components/AppTodo";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Application() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="navigation tabs"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Home" />
          <Tab label="My Todos" />
        </Tabs>
      </Box>
      {selectedTab === 0 && (
        <Typography variant="h6">Welcome to Home Page!</Typography>
      )}
      {selectedTab === 1 && <AppTodo />}
    </>
  );
}

export default Application;
