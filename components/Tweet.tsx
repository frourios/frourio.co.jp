import { Timeline } from "react-twitter-widgets";
import { Box } from "@chakra-ui/react";

const Tweets = () => {
  return (
    <Box w={{ base: "100%", md: "60%" }} m="0 auto">
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "frourio_jp",
        }}
        options={{
          chrome: "noheader",
        }}
      />
    </Box>
  );
};

export default Tweets;
