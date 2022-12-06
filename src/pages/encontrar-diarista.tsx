import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import PageTitle from 'ui/components/inputs/Button/data-display/PageTitle/PageTitle';
import { RootStackParamList } from 'ui/router/Router';

type NavigationProp = StackNavigationProp<
    RootStackParamList,
    'EncontrarDiarista'
>;

const EncontrarDiarista: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View>
            <Text>Encontrar Diaristas</Text>
            <PageTitle title={'titulo'} />
        </View>
    );
};

export default EncontrarDiarista;
