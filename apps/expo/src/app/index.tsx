import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { authClient } from "~/utils/auth";

function MobileAuth() {
  const { data: session } = authClient.useSession();

  return (
    <>
      <Text className="pb-2 text-center text-xl font-semibold text-zinc-900">
        {session?.user.name ? `Hello, ${session.user.name}` : "Not logged in"}
      </Text>
      <Button
        onPress={() =>
          session
            ? authClient.signOut()
            : authClient.signIn.social({
                provider: "discord",
                callbackURL: "/",
              })
        }
        title={session ? "Sign Out" : "Sign In With Discord"}
        color={"#5B65E9"}
      />
    </>
  );
}

export default function Index() {
  return (
    <SafeAreaView className="bg-background">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View className="h-full w-full bg-background p-4">
        <Text className="pb-2 text-center text-5xl font-bold text-foreground">
          Create <Text className="text-primary">T3</Text> Turbo
        </Text>

        <MobileAuth />

        <View className="py-2">
          <Text className="font-semibold italic text-primary">
            Press on a post
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
