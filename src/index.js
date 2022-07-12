import React from "react";
import { SafeAreaView } from "react-native";
import Router from "./routers";
import { ThemeProvider } from "styled-components";
import theme from "./themes";

const Root = () => {
    return(
        <ThemeProvider theme={theme}>
        <SafeAreaView style={{flex: 1, backgroundColor:'#393e6f'}}>
            <Router />
        </SafeAreaView>
        </ThemeProvider>
    )
}

export default Root;