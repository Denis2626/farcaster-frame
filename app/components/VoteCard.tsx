/** @jsxImportSource frog/jsx */
import { Box, Column, Columns, Text, Image } from "../ui";

const VoteCard = ({ fid  }: { fid: string }) => {
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
      >
        <Columns width="100%" >
          <Column
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="1/2"
            padding={"20"}
          >
            <Image src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/qr.jpeg`} height="100%" />
          </Column>
          <Column
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="1/2"
          >
            <Text size="48" weight="900" color={"gray100"} align="center">
              I VOTED 
            </Text>
            <Text size={"32"}color={"gray100"}>FID: {fid}</Text>
          </Column>
        </Columns>
      </Box>
    </Box>
  );
};

export default VoteCard;
