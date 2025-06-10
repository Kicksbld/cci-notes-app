import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const { data: session } = authClient.useSession();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await authClient.signUp.email({
        email,
        password,
        name,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await authClient.signIn.email({
        email,
        password,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        className="border border-black/50"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border border-black/50"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="border border-black/50"
      />
      <Button title="Login" onPress={handleLogin} />
      {session?.user && <Text>{session.user.name}</Text>}
    </View>
  );
}
