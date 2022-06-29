import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function TabsM8(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }} className="tabs-m8">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {props.items.map(item=>  <Tab label={item.label} value={item.value} />)}
          
            
          </TabList>
        </Box>
        {props.items.map(item=> <TabPanel value={item.value}>{item.label}</TabPanel>)}
      
      </TabContext>
    </Box>
  );
}

TabsM8.defaultProps={
  items:[
    {
      label:"Item One",
      value: 1
    },
    {
      label:"Item Two",
      value: 2
    }, {
      label:"Item Three",
      value: 3
    },
  ]

}