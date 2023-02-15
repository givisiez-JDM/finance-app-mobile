import { HeaderContainer, UserNameText } from './header.style'
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';


const Header = () => {
  return (
    <HeaderContainer>
      <UserNameText>Olá, Rafa</UserNameText>
      <TouchableOpacity>
        <FontAwesome name="user-o" size={24} color="white" />
      </TouchableOpacity>
    </HeaderContainer>
  )
}

export default Header