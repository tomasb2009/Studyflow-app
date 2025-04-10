import { View, Text } from "react-native";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MotiView } from "moti";
import NavBar from "../components/NavBar";

const StyledView = styled(View);
const StyledText = styled(Text);
const AnimatedView = styled(MotiView);

const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
};

export default function Home() {
  return (
    <StyledView className="flex-1 bg-[#EBEBEB]">
      {/* Header animado */}
      <AnimatedView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 400 }}
        style={[
          shadowStyle,
          {
            backgroundColor: "white",
            padding: 16,
            borderRadius: 10,
            margin: 10,
          },
        ]}
      >
        <StyledText className="text-3xl font-bold">
          Hola, Estudiante!
        </StyledText>
        <StyledText className="text-gray-400 text-lg">
          ¿Listo para mejorar tus estudios?
        </StyledText>
      </AnimatedView>

      {/* Estadísticas animadas */}
      <StyledView className="mt-4 px-3">
        <StyledText className="text-xl font-bold">
          Estadísticas de hoy
        </StyledText>

        <MotiView
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 400, delay: 200 }}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 16,
            paddingHorizontal: 12,
          }}
        >
          <AnimatedView
            from={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 400, delay: 300 }}
            style={[
              shadowStyle,
              {
                backgroundColor: "white",
                padding: 16,
                borderRadius: 10,
                flex: 1,
                alignItems: "center",
                marginHorizontal: 8,
              },
            ]}
          >
            <MaterialCommunityIcons name="clock" size={34} color="#2563eb" />
            <StyledText className="text-2xl font-bold">2.5h</StyledText>
            <StyledText className="text-gray-400 text-base">Estudio</StyledText>
          </AnimatedView>

          <AnimatedView
            from={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 400, delay: 500 }}
            style={[
              shadowStyle,
              {
                backgroundColor: "white",
                padding: 16,
                borderRadius: 10,
                flex: 1,
                alignItems: "center",
                marginHorizontal: 8,
              },
            ]}
          >
            <MaterialCommunityIcons name="target" size={34} color="#dc2626" />
            <StyledText className="text-2xl font-bold">85%</StyledText>
            <StyledText className="text-gray-400 text-base">
              Progreso
            </StyledText>
          </AnimatedView>
        </MotiView>
      </StyledView>

      {/* Barra de navegación */}
      <NavBar />
    </StyledView>
  );
}
