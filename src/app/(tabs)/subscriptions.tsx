import { cssInterop } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

cssInterop(SafeAreaView, { className: "style" });

const subscriptions = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>subscriptions</Text>
    </SafeAreaView>
  );
};

export default subscriptions;
