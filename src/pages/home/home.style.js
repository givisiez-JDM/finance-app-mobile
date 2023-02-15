import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export const FlexCnt = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const BalanceCnt = styled.View`
    margin: -20px 10px 10px;
    padding: 10px;
    background-color: #F9F9F9;
    width: ${RFPercentage(22)};
`;

export const BalanceLabel = styled.Text`
    color: gray;
`;

export const PositiveBalance = styled.Text`
    color: lightgreen;
    font-weight: 600;
    font-size: ${RFValue(22)}px ;
`;

export const NegativeBalance = styled(PositiveBalance)`
    color: red;
`;

export const ButtonRow = styled.ScrollView`
    margin: 10px;
`;

export const ButtonCnt = styled.ScrollView`
    margin: 10px;
`;

export const RoundedButton = styled(TouchableOpacity)`
    border-radius: 75px;
    padding: 20px;
    margin: 0 5px;
    background-color: #f1f1f1;
`;

export const RoundedButtonLabel = styled.Text`
    text-align: center;
`;

export const StatementCnt = styled.View``;