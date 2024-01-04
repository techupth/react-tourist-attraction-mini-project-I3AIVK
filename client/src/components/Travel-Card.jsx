import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

function TravelCard({ title, photos, tags, description, url }) {
  return (
    <Box
      position="relative"
      marginBottom={5}
      borderWidth={0}
      maxH={{ base: "100%" }}
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={photos[0]}
          alt=""
        />
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
            <Text py="2">{description}</Text>
            <Link color="teal.500" href={url} target="_blank">
              อ่านต่อ
            </Link>
          </CardBody>
          <CardFooter>
            <div className="Footer-Card" display="flex" flex-direction="row">
              <div className="Tags">
                หมวด
                {...tags.map((i) => {
                  return <Tag marginLeft="5px">{i}</Tag>;
                })}
              </div>
              <Stack spacing={5} direction="row">
                {...photos.map((i) => {
                  return (
                    <Image
                      boxSize={100}
                      objectFit="cover"
                      maxW={{ base: "100%" }}
                      src={i}
                      alt=""
                      marginLeft="5px"
                      marginTop="5px"
                    />
                  );
                })}
              </Stack>
            </div>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}

export default TravelCard;
