import styled from "styled-components";
import lightScheme from "./lightScheme";

declare module 'styled-components' {
    type ThemeType = typeof lightScheme;

    
    export interface DefaultTheme extends ThemeType { }
}