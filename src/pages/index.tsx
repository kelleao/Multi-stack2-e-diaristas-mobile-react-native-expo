import React from 'react';
import { Text, View } from 'react-native';
import {
    MainContainer,
    RegisterContainer,
    RegisterButtonsContainer,
    TitleStyled,
    ParagraphStyled,
    LoginContainer,
    RoundedButtonStyled,
    RoundedButtonLogin,
    BackgroundStyled,
    GradientBackground,
} from '@styles/pages/index.styled';
import BackgroundImage from '@assets/img/background/cleaning.jpg';
import { useTheme } from '@emotion/react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'ui/router/Router';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Index'>;

const Index = () => {
    const { colors } = useTheme();
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={{ flex: 1 }}>
            <MainContainer>
                <RegisterContainer>
                    <View>
                        <TitleStyled>Crie uma conta</TitleStyled>
                        <ParagraphStyled>
                            Você quer encontrar profissionais ou cadastrar seus
                            serviços?
                        </ParagraphStyled>
                    </View>
                    <RegisterButtonsContainer>
                        <RoundedButtonStyled
                            mode={'contained'}
                            fullWidth
                            onPress={() =>
                                navigation.navigate('EncontrarDiarista')
                            }
                        >
                            Encontrar Diarista
                        </RoundedButtonStyled>
                        <RoundedButtonStyled mode={'contained'} fullWidth>
                            Ser Diarista
                        </RoundedButtonStyled>
                    </RegisterButtonsContainer>
                </RegisterContainer>
                <LoginContainer>
                    <RoundedButtonLogin fullWidth>
                        Já possuo um conta
                    </RoundedButtonLogin>
                </LoginContainer>
            </MainContainer>
            <BackgroundStyled source={BackgroundImage}>
                <GradientBackground
                    colors={[colors.secondary, colors.primary]}
                />
            </BackgroundStyled>
        </View>
    );
};

export default Index;
