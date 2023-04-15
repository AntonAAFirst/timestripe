import { useState, useEffect } from "react";
import { addUserToFirebase, isLoginDataCorrect } from "../shared/http/authHttp";
import {
  AuthContainer,
  AuthForm,
  FormField,
  FormButton,
  FormFieldInput,
  FormFieldInputErrorText,
  FormHeader,
  FormLink,
} from "../shared/styles/AuthStyles";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  async function buttonHandler() {
    if (name.length >= 5 && password.length >= 8) {
      if (
        isLoginLogic &&
        (await isLoginDataCorrect(name.toLowerCase(), password.toLowerCase()))
      ) {
        navigate(navigatePath);
      } else if (isLoginLogic) {
        setInvalidLoginData(true);
      } else if (!isLoginLogic) {
        navigate(navigatePath);
        addUserToFirebase(name, password);
      }
    }
  }

  const navigatePath: string = "../calendar";
  const navigate = useNavigate();
  const [isLoginLogic, setIsLoginLogic] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [invalidLoginData, setInvalidLoginData] = useState<boolean>(false);
  useEffect(() => {
    setName("");
    setPassword("");
  }, [isLoginLogic]);

  return (
    <AuthContainer>
      <AuthForm>
        <FormHeader isLoginLogic={isLoginLogic} />

        <FormField top={100}>
          <FormFieldInput
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setInvalidLoginData(false);
            }}
          />
          <FormFieldInputErrorText
            active={(name.length < 5 && name.length > 0) || invalidLoginData}
          >
            {invalidLoginData
              ? "Invalid email or password"
              : "Длина имени минимум 5 символов"}
          </FormFieldInputErrorText>
        </FormField>

        <FormField top={165}>
          <FormFieldInput
            type="text"
            placeholder="Ваш пароль"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setInvalidLoginData(false);
            }}
          />
          <FormFieldInputErrorText
            active={password.length < 8 && password.length > 0}
          >
            Длина пароля минимум 8 символов
          </FormFieldInputErrorText>
        </FormField>

        <FormButton isLoginLogic={isLoginLogic} onClick={buttonHandler} />

        <FormLink
          isLoginLogic={isLoginLogic}
          onClick={() => setIsLoginLogic((prev) => !prev)}
        />
      </AuthForm>
    </AuthContainer>
  );
}
