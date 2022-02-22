import { Timeline } from "react-twitter-widgets";

const Tweets = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "frourio_jp",
        }}
        options={{
          width: "80%",
          chrome: "noheader",
        }}
      />
    </div>
  );
};

export default Tweets;
