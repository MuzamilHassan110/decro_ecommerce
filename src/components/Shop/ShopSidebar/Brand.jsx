import { useState } from "react";
import PropTypes from "prop-types";

import { Typography, Radio, Flex, Divider } from "antd";

const { Title } = Typography;

const Brand = ({ handleApicall, filterBrand }) => {
  const [value, setValue] = useState(1);

  return (
    <div>
      <div className="sidebar-brand">
        <Title level={4} style={{ fontWeight: "bold" }} className="title-brand">
          Brand
        </Title>
        <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
          <Flex gap={10} className="size-check">
            <Radio value={2} onClick={() => filterBrand("Apple")}>
              Apple
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={3} onClick={() => filterBrand("Samsung")}>
              Samsung
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={4} onClick={() => filterBrand("OPPO")}>
              OPPO
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={5} onClick={() => filterBrand("Huawei")}>
              Huawei
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={6} onClick={() => filterBrand("Microsoft Surface")}>
              Microsoft Surface
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={7} onClick={() => filterBrand("Infinix")}>
              Infinix
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={8} onClick={() => filterBrand("HP Pavilion")}>
              HP Pavilion
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio
              value={9}
              onClick={() => filterBrand("Impression of Acqua Di Gio")}
            >
              Impression of Acqua Di Gio
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={10} onClick={() => filterBrand("Royal_Mirage")}>
              Royal_Mirage
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={11} onClick={() => filterBrand("Fog Scent Xpressio")}>
              Fog Scent Xpressio
            </Radio>
          </Flex>

          <Flex gap={10} className="size-check">
            <Radio value={1} onClick={handleApicall}>
              All
            </Radio>
          </Flex>
        </Radio.Group>

        <Divider />
      </div>
    </div>
  );
};

Brand.propTypes = {
  handleApicall: PropTypes.func.isRequired,
  filterResult: PropTypes.func.isRequired,
  filterBrand: PropTypes.func.isRequired,
};

export default Brand;
