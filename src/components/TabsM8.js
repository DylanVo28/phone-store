import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function TabsM8({children,items,onChangeTabs,type}) {
  const [value, setValue] = React.useState(items[0]?.id);

  const handleChange = (label, newValue) => {
    setValue(newValue)
    onChangeTabs(newValue)
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }} className="tabs-m8">
      <style jsx global>{`
      
        .tabs-m8 .tabs-m8__list{
          display:block;
        }
        .tabs-m8 .tabs-m8__tab{
          text-transform: capitalize;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.0015em;
          color: #0061AF;
        }
      `}</style>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tabs-m8__list"
          >
            {children}
          </TabList>
        </Box>
  
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
