import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Terms from "./pages/termsconditions";
import Staking from "./pages/staking";
import Login from "./pages/login";
import Register from "./pages/register";
import AML from "./pages/AML";
import Profile from "./pages/profile";
import Order from "./pages/order";
import { thunk } from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, applyMiddleware } from "redux";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: translations,
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });


export const App = () => (
  
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
      <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login   />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/AML" element={<AML   />} /> 
        <Route path="/termsconditions" element={<Terms   />} />
        <Route path="/staking" element={<Staking   />} /> 
      </Routes>
    </Router>
        
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </Box>
    </ChakraProvider>
);
