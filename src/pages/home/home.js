import { View } from 'react-native';
import Header from '../../components/header/header';
import { 
  BalanceCnt, 
  BalanceLabel, 
  ButtonCnt, 
  ButtonRow, 
  FlexCnt, 
  NegativeBalance, 
  PositiveBalance,
  RoundedButton,
  RoundedButtonLabel,
  StatementCnt
} from './home.style';
import { FormatMoney } from 'format-money-js';
import { 
  AntDesign, 
  MaterialCommunityIcons, 
  Ionicons 
} from '@expo/vector-icons'; 

const Home = () => {

  const fm = new FormatMoney({ symbol: 'R$', decimalPoint: ',', decimals: 2 });

  const positiveBalance = fm.from(100);
  const negativeBalance = fm.from(-100);
  
  return (
    <View>
      <Header />
      <FlexCnt>
        <BalanceCnt>
          <BalanceLabel>Saldo</BalanceLabel>
          <PositiveBalance>{positiveBalance}</PositiveBalance>
        </BalanceCnt>
        <BalanceCnt>
          <BalanceLabel>Gastos</BalanceLabel>
          <NegativeBalance>{negativeBalance}</NegativeBalance>
        </BalanceCnt>
      </FlexCnt>
      <ButtonRow horizontal>
        <ButtonCnt>
          <RoundedButton>
            <AntDesign name="arrowdown" size={24} color="black" />
          </RoundedButton>
          <RoundedButtonLabel>Transferir</RoundedButtonLabel>
        </ButtonCnt>
        <ButtonCnt>
          <RoundedButton>
            <AntDesign name="arrowup" size={24} color="black" />
          </RoundedButton>
          <RoundedButtonLabel>Depositar</RoundedButtonLabel>
        </ButtonCnt>
        <ButtonCnt>
          <RoundedButton>
            <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
          </RoundedButton>
          <RoundedButtonLabel>Compras</RoundedButtonLabel>
        </ButtonCnt>
        <ButtonCnt>
          <RoundedButton>
            <AntDesign name="creditcard" size={24} color="black" />
          </RoundedButton>
          <RoundedButtonLabel>Carteira</RoundedButtonLabel>
        </ButtonCnt>
        <ButtonCnt>
          <RoundedButton>
            <AntDesign name="barcode" size={24} color="black" />
          </RoundedButton>
          <RoundedButtonLabel>Pagar</RoundedButtonLabel>
        </ButtonCnt>
        <ButtonCnt>
          <RoundedButton>
            <Ionicons name="ios-stats-chart-sharp" size={24} color="black" />
          </RoundedButton>
          <RoundedButtonLabel>Investir</RoundedButtonLabel>
        </ButtonCnt>
      </ButtonRow>
      <StatementCnt></StatementCnt>
    </View>
  );
}

export default Home;