import { SignInProps } from "@/lib/interfaces/form.interface";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export const SignIn = ({ onPress, output }: SignInProps) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Vous connectez</Text>
      <View style={style.inputContainer}>
        <Text style={style.label}>Identifiant</Text>
        <TextInput
          placeholder="Entrez votre adresse mail"
          placeholderTextColor="#888"
          value={output.email}
          onChangeText={output.setEmail}
          style={style.input}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.label}>Mot de passe</Text>
        <TextInput
          placeholder="Entrez votre mot de passe"
          placeholderTextColor="#888"
          value={output.password.trim()}
          onChangeText={output.setPassword}
          secureTextEntry
          style={style.input}
        />
        <Text style={style.minilabel}>Mot de passe oublié</Text>
      </View>
      <TouchableOpacity style={style.button} onPress={onPress}>
        <Text style={style.buttonChildren}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 40,
    paddingVertical: 30,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0BBAEF",
  },
  title: {
    color: "white",
    fontWeight: 600,
    fontSize: 24,
  },
  label: {
    color: "white",
    fontWeight: 600,
    fontSize: 16,
  },
  minilabel: {
    color: "white",
    fontWeight: 600,
    fontSize: 14,
    textDecorationLine: "underline",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 14,
    color: "#312682",
  },
  button: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonChildren: {
    color: "black",
    fontWeight: 600,
    fontSize: 20,
  },
});
