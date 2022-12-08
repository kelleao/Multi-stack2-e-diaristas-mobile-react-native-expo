import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PageTitle from 'ui/components/inputs/Button/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/inputs/Button/data-display/UserInformation/UserInformation';
import TextInputMask from 'ui/components/inputs/TextInputMask/TextInputMask';
import { RootStackParamList } from 'ui/router/Router';

type NavigationProp = StackNavigationProp<
    RootStackParamList,
    'EncontrarDiarista'
>;

const EncontrarDiarista: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();
    const [text, setText] = useState('');

    return (
        <View>
            <Text>Encontrar Diaristas</Text>
            <PageTitle title={'titulo'} subtitle={'AB djfdjfldjfl'} />
            <TextInputMask
                value={text}
                onChangeText={setText}
                label={'Nome'}
                mask={'99.999-999'}
            />
            <UserInformation
                name={'Raquel Leão'}
                picture={'https://github.com/kelleao.png'}
                rating={4}
                description={'Belo Horizonte'}
            />
        </View>
    );
};

export default EncontrarDiarista;
