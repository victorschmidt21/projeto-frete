import { Toast } from "toastify-react-native";

interface ToastProps {
  title: string;
  description: string;
}

export const toastSucess = ({ title, description }: ToastProps) => {
  Toast.show({
    type: "success",
    text1: title,
    text2: description,
    position: "bottom",
    visibilityTime: 10,
  });
};
export const toastError = ({ title, description }: ToastProps) => {
  Toast.show({
    type: "error",
    text1: title,
    text2: description,
    position: "top",
    visibilityTime: 1550,
  });
};
