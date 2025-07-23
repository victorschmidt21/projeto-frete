import {
  View,
  Modal as RnModal,
  ModalProps,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { style } from "./style";

type Props = ModalProps & {
  isOpen: boolean;
  withInput?: boolean;
};
export function Modal({ isOpen, withInput, children, ...rest }: Props) {
  const content = withInput ? (
    <KeyboardAvoidingView
      style={style.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <View style={style.container}>{children}</View>
  );

  return (
    <RnModal
      visible={isOpen}
      transparent
      animationType="fade"
      statusBarTranslucent
      {...rest}
    >
      {content}
    </RnModal>
  );
}
