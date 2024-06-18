/** @jsxImportSource frog/jsx */
import { Box, Text } from "../ui";

const ErrorCard = ( { message }: { message: string } ) => {
  return (
    <Box
      backgroundColor="text"
      padding="48"
      display="flex"
      height={"100%"}
      alignItems="center"
      justifyContent="center"
      backgroundImage={`url("${process.env.NEXT_PUBLIC_VERCEL_URL}/home.png")`}
      backgroundSize="cover"
    >
      <Box
        backgroundColor="text"
        height={"100%"}
        display="flex"
        width="100%"
        borderRadius={"20"}
        opacity={"0.8"}
        alignContent="center"
        justifyContent="center"
      >
        <Text size="48" weight="900" color={"gray100"} align="center">
          {message}
        </Text>
      </Box>
    </Box>
  );
};

export default ErrorCard;
