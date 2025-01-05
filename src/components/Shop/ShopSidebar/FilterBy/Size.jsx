import { Typography, Select, Flex, Checkbox, Divider } from "antd";

const { Title, Text } = Typography;

const Size = () => {
  const catgories = ["Accessories(11)", "Art(7)", "Clothes(2)"];
  return (
    <>
      <div className="size-container">
        <Title level={4}>FILTER BY</Title>

        <div className="size-catgories">
          <Select
            placeholder="  (no filter)"
            options={catgories.map((item) => {
              return {
                label: item,
                value: item,
              };
            })}
          />
        </div>
        <Title level={4} className="size">
       
          Size
        </Title>
       
          <Flex gap={10} className="size-check">
            <div>
              <Checkbox />
            </div>
            <Text className="size-color">S(2)</Text>
          </Flex>         
          <Flex gap={10} className="size-check">
            <div>
              <Checkbox />
            </div>
            <Text className="size-color">M(2)</Text>
          </Flex>

          <Flex gap={10} className="size-check">
            <div>
              <Checkbox />
            </div>
            <Text className="size-color">L(2)</Text>
          </Flex>

          <Flex gap={10} className="size-check">
            <div>
              <Checkbox />
            </div>
            <Text className="size-color">XL(2)</Text>
          </Flex>

          <Divider />
       
      </div>
    </>
  );
};

export default Size;
