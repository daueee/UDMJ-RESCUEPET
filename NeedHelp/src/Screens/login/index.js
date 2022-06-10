import React from 'react'
import {View, Text, Button, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'


import styles from './style'

const img = './adaptive-icon.png'

export function Login({ navigation }){

    function openScreen(){
        navigation.navigate('Home')
    }

    const [email, onChangeEmail] = React.useState();
    const [senha, onChangeSenha] = React.useState();


    return (
        <ImageBackground
                source={require('../../../assets/Hi-fi/00 Splash Screen – 1.png')}
                style={styles.imageFundo}
            >
        <View style={styles.screen}>
            <View style={styles.screenSecundaria}>
                <Image
                source={require('../../../assets/Hi-fi/logoNeed.png')}
                style={styles.logoNeedHelp}
                />
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Email"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeSenha}
                        value={senha}
                        placeholder="senha"

                    />
                </View>
                <View>
                    <Text style={styles.textPassword}>Esqueceu a senha?</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.buttom}
                        onPress={openScreen}
                    >
                        <Text style={{color: "#FFF"}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.textNewAccount}>Criar nova conta</Text>
                </View>
            </View>
        </View>
        </ImageBackground>
    );
}

