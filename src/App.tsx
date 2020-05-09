import React from "react"
import "./styles/App.css"
import AppRoutes from "AppRoutes"
import { Header, Footer } from "components"

function App() {
  return (
    <div id="app-root">
      <Header />
      <main id="main-content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
