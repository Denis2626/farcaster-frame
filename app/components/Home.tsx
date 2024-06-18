/** @jsxImportSource frog/jsx */
import { Box, Columns, Column, Text } from "../ui";

const Home = () => {
  return (
    <Box
      backgroundColor="text"
      padding="16"
      display="flex"
      height={"100%"}
      alignItems="center"
      justifyContent="flex-end"
      //backgroundImage={`url("${process.env.NEXT_PUBLIC_VERCEL_URL}/home.png")`}
      backgroundSize="cover"
    >
      <Box
        backgroundColor="text100"
        borderRadius="20"
        height="64"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="0px 0px 16px rgba(0, 0, 0, 0.5)"
      >
        <Columns gap="8" grow height={"64"} width={"100%"}>
          <Column
            backgroundColor="red"
            width="1/7"
            borderRadius="10"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              size="24"
              weight="200"
              wrap={true}
            >
              KRA
            </Text>
            <Text size="24" weight="200">
              MER
            </Text>
          </Column>
          <Column
            width="5/7"
            justifyContent="center"
            alignItems="center"
            padding={"4"}
          >
            <Text size="14" weight="900" color="gray100">
              WILL THERE BE OVER 10,000 KRAMER PREDICTIONS BEFORE JUNE 29TH MIDNIGHT?
            </Text>
            <Text color='gray100'>ENV {process.env.NEXT_PUBLIC_VERCEL_URL}</Text>
          </Column>
          <Column
            backgroundColor="green"
            width="1/7"
            justifyContent="center"
            alignItems="center"
            borderRadius={"10"}
          >
            <Text size="24" weight="200" color="text">
              BTC
            </Text>
          </Column>
        </Columns>
      </Box>
    </Box>
  );
};

export default Home;
