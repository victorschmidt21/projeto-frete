import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "@/libs/unistyles";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  props: any;
}

export function TabBar({ props }: Props) {
//   const icons = {
//     index: (props) => <FontAwesome name="truck" size={26} {...props} />,
//   };

  return (
    <View style={styles.tabbar}>
      {props.state.routes.map((route: any, index: any) => {
        const { options } = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {/* {
                icons[route.name]({
                    col
                })
            } */}
            <Text
              style={{
                color: isFocused
                  ? theme.colors.primary
                  : theme.colors.lightGray,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 12,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
