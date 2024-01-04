import { useEffect, useState } from "react";
import axios from "axios";
import { Center, Input, Stack } from "@chakra-ui/react";
import TravelCard from "./Travel-Card";

function TravelCardBox() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData();
  }, [searchText]);

  const getData = async () => {
    try {
      let response = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`
      );
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center>
      <Stack spacing={5}>
        <Stack width={1200}>
          <h1>ค้าหาที่เที่ยว</h1>
          <Input
            textAlign="center"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            size="lg"
            onChange={(input) => setSearchText(input.target.value)}
            value={searchText}
          />
        </Stack>

        <div>
          {...data.map((item) => {
            return (
              <TravelCard
                title={item.title}
                description={item.description.slice(0, 100)}
                tags={item.tags}
                url={item.url}
                photos={item.photos}
              />
            );
          })}
        </div>
      </Stack>
    </Center>
  );
}
export default TravelCardBox;
