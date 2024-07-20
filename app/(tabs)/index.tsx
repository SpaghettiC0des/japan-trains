import { ExternalLink } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Anchor, H2, Paragraph, XStack, YStack } from "tamagui";

import { ToastControl } from "app/CurrentToast";
import { PrefectureList } from "features/train-station-list";

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <PrefectureList
      onItemPress={(item) => {
        router.navigate({
          pathname: "/lines",
          params: { prefectureId: item.id },
        });
      }}
    />
  );
  return (
    <YStack ai="center" f={1} gap="$8" pt="$5" px="$10">
      <H2>Tamagui + Expo</H2>

      <ToastControl />

      <XStack
        ai="center"
        b="$8"
        fw="wrap"
        gap="$1.5"
        jc="center"
        pos="absolute"
      >
        <Paragraph fos="$5">Add</Paragraph>

        <Paragraph bg="$blue5" br="$3" col="$blue10" fos="$5" px="$2" py="$1">
          tamagui.config.ts
        </Paragraph>

        <Paragraph fos="$5">to root and follow the</Paragraph>

        <XStack
          ai="center"
          bg="$purple5"
          br="$3"
          gap="$1.5"
          hoverStyle={{ bg: "$purple6" }}
          pressStyle={{ bg: "$purple4" }}
          px="$2"
          py="$1"
        >
          <Anchor
            col="$purple10"
            fos="$5"
            href="https://tamagui.dev/docs/core/configuration"
            textDecorationLine="none"
          >
            Configuration guide
          </Anchor>
          <ExternalLink col="$purple10" size="$1" />
        </XStack>

        <Paragraph fos="$5" ta="center">
          to configure your themes and tokens.
        </Paragraph>
      </XStack>
    </YStack>
  );
}
