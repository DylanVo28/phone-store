import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function TabsM8({children,items,onChangeTabs}) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue)
    onChangeTabs(newValue)
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }} className="tabs-m8">
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tabs-m8__list"
          >
            {items.map((item, index) => (
              <Tab
                label={item.label}
                value={item.value}
                key={index}
                className="tabs-m8__tab"
              />
            ))}
          </TabList>
        </Box>
        {/* {items.map((item, index) => (
          <TabPanel value={item.value} key={index}>
            {item.label}
          </TabPanel>
        ))} */}
      </TabContext>
    </Box>
  );
}

TabsM8.defaultProps = {
  items: [
    {
      label: "Item One",
      value: 1,
    },
    {
      label: "Item Two",
      value: 2,
    },
    {
      label: "Item Three",
      value: 3,
    },
  ],
};
