import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);

  const cadastrar = () => {
    console.log("Nome: "+nome+" - Telefone: "+telefone);
    setContadorContatos(contadorContatos+1);
    setContatos((x) => ([...x, {key: contadorContatos.toString(), nome: nome, telefone: telefone}]))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar Contato</Text>
      <View>
        <View style={styles.formField}>
            <Text>Nome:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Preencha o nome"
              onChangeText={(x) => setNome(x)}
            />
        </View>
        <View style={styles.formField}>
            <Text>Telefone:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Preencha o telefone"
              onChangeText={(x) => setTelefone(x)}
            />
        </View>
        <View style={styles.cadastroBtn}>
          <Button title="Cadastrar" onPress={cadastrar} />
        </View>
      </View>
      <Text style={styles.titulo}>Lista de Contatos</Text>
      {/* Cabecalho */}
      <View style={styles.gridHeader}>
        <Text style={styles.gridColumnNome}>NOME</Text>
        <Text style={styles.gridColumnTelefone}>TELEFONE</Text>
      </View>
      {/*substuir o ScrollView e todo o seu conteúdo*/}
      <FlatList
        data={contatos}
        renderItem={
          (x) => (
            <View key={x.item.key} style={styles.gridItemNaLista}>
              <Text style={styles.gridColumnNome}>{x.item.nome}</Text>
              <Text style={styles.gridColumnTelefone}>{x.item.telefone}</Text>
            </View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B0082',
  },
  formField: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textInput: {
    width: 200,
    marginLeft: 4,
    padding: 5,
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 4,
    alignItems: 'center',
  },
  cadastroBtn: {
    marginTop: 5,
    marginBottom: 10,
  },
  gridItemNaLista: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#666',
  },
  gridHeader: {
    flexDirection: 'row',
    padding: 4,
    borderTopWidth: 3,
    borderTopColor: '#666',
    borderBottomWidth: 3,
    borderBottomColor: '#666',
  },
  gridColumnNome: {
    width: 150,
    padding: 2,
    alignItems: 'flex-end'
  },
  gridColumnTelefone: {
    width: 150,
    padding: 2,
    alignItems: 'flex-end'
  },
});
