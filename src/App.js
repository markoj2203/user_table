import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Table
        products={[
          {
            id: 1,
            fullName: "Zilvia Dureden",
            balance: "2200",
            isActive: "Yes",
            registered: "not registered",
            state: "Illinois",
            country: "United States",
          },
          {
            id: 2,
            fullName: "Gawain Wolfenden",
            balance: "2350",
            isActive: "No",
            registered: "registered",
            state: "Utah",
            country: "United States",
          },
          {
            id: 3,
            fullName: "Harri Klaaassen",
            balance: "2700",
            isActive: "Yes",
            registered: "not registered",
            state: "Kentucky",
            country: "United States",
          },
          {
            id: 4,
            fullName: "Harriott Nelthrop",
            balance: "3100",
            isActive: "No",
            registered: "registered",
            state: "District of Columbia",
            country: "United States",
          },
          {
            id: 5,
            fullName: "Keir Calway",
            balance: "3300",
            isActive: "Yes",
            registered: "not registered",
            state: "Kentucky",
            country: "United States",
          },
          {
            id: 6,
            fullName: "Jacintha Edwin",
            balance: "3000",
            isActive: "Yes",
            registered: "not registered",
            state: "Pennsylvania",
            country: "United States",
          },
          {
            id: 7,
            fullName: "Lambert Welbrock",
            balance: "2500",
            isActive: "No",
            registered: "registered",
            state: "South Carolina",
            country: "United States",
          },
          {
            id: 8,
            fullName: "Ruddy Fowls",
            balance: "2800",
            isActive: "No",
            registered: "not registered",
            state: "New York",
            country: "United States",
          },
          {
            id: 9,
            fullName: "Eden Salkild",
            balance: "3500",
            isActive: "Yes",
            registered: "registered",
            state: "Texas",
            country: "United States",
          },
          {
            id: 10,
            fullName: "Caro Dakin",
            balance: "3600",
            isActive: "Yes",
            registered: "registered",
            state: "Georgia",
            country: "United States",
          },
        ]}
      />
      <Footer />
    </div>
  );
}

export default App;
