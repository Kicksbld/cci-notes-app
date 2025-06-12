export interface SignInFormFields {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

export interface SignInProps {
  onPress?: () => void;
  output: SignInFormFields;
}
