import styled from "styled-components";
import {
  FormFieldInputErrorTextStyledProps,
  FormFieldStyledProps,
  FormUITextStyledProps,
} from "../models/props/AuthStyledProps";

export const AuthContainer = styled.div`
  display: grid;
  height: 100vh;
`;

export const AuthForm = styled.div`
  position: relative;
  width: 600px;
  height: 500px;
  margin: 40px auto;
  @media (max-width: 1000px) {
    margin: auto auto;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FormHeader = styled.div<FormUITextStyledProps>`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Inter";
  &:after {
    content: "${(props) =>
      props.isLoginLogic ? "Авторизация" : "Регистрация"}";
  }
`;
export const FormFieldInput = styled.input`
  width: 400px;
  height: 30px;
  padding: 4px;
  font-family: "Inter";
  border-top: 0;
  border-right: 0;
  border-left: 0;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;
export const FormButton = styled.div<FormUITextStyledProps>`
  position: absolute;
  top: 230px;
  transform: translate(-50%, -50%);
  left: 50%;
  font-family: "Inter";
  background-color: black;
  color: white;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  width: 400px;
  text-align: center;
  font-size: 14px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 410px) {
    width: 90%;
  }
  &:after {
    content: "${(props) =>
      props.isLoginLogic ? "Sign in" : "Get started now"}";
  }
`;

export const FormField = styled.div<FormFieldStyledProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: ${(props) => props.top}px;
  @media (max-width: 410px) {
    width: 95%;
    ${FormFieldInput} {
      width: 95%;
    }
  }
`;

export const FormFieldInputErrorText = styled.div<FormFieldInputErrorTextStyledProps>`
  font-family: "Inter";
  font-size: 10px;
  left: 100px;
  text-align: center;
  color: ${(props) => (props.active ? "red" : "transparent")};
`;

export const FormLink = styled.div<FormUITextStyledProps>`
  position: absolute;
  top: 270px;
  left: 50%;
  font-family: "Inter";
  transform: translate(-50%, -50%);
  cursor: pointer;
  &:after {
    content: "${(props) =>
      props.isLoginLogic ? "create account here" : "sign in here"}";
  }
`;
