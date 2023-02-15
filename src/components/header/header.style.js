import styled from "styled-components/native";
import { StatusBar, Platform } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export const HeaderContainer = styled.View`
    background-color: blueviolet;
    padding: ${Platform.OS === 'ios' ? 64 : StatusBar.currentHeight + 20}px;
    flex-flow: row nowrap;
    justify-content: space-between;
`;

export const UserNameText = styled.Text`
    color: white;
    font-weight: 700;
    font-size: ${RFValue(22)}px;
`;