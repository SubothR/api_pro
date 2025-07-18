import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/home";
import About from "./Pages/about";
import Pricing from "./Pages/pricing";
import Contact from "./Pages/contact";
import ApiDoc from "./Pages/ApiDoc";
import NavBar from "./Components/NavBar";
import LoadingScreen from "./Components/LoadingScreen";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollTop";
import NotFound from "./Pages/not_found";
import { Toaster } from "react-hot-toast";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/pricing"
          element={
            <PageWrapper>
              <Pricing />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/documentations"
          element={
            <PageWrapper>
              <ApiDoc />
            </PageWrapper>
          }
        />

        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Wrap your pages in a motion.div to animate on route changes
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#2563eb",
            color: "#fff",
            fontSize: "0.875rem",
            padding: "12px 16px",
            maxWidth: "90%", 
          },
        }}
      />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
