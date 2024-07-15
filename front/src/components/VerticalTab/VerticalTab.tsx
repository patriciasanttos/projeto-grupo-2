/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Style from './index.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { AutoclaveType, ThermoWasherType } from '@/types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  numMachines: number;
}

interface VerticalTabsProps {
  machines: (AutoclaveType | ThermoWasherType)[];
  numMachines: number;
}

interface BrandsMachineType {
  [brand: string]: (AutoclaveType | ThermoWasherType)[];
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, numMachines, ...other } = props;

  return (
    <div
      className={Style.panel}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Box>
            <Typography variant="h6" textAlign={'center'}>
              Quantidade Minima = {numMachines}
            </Typography>
          </Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs({ machines, numMachines }: VerticalTabsProps) {
  const [value, setValue] = React.useState(0);

  const brandsMachine = machines.reduce((acc: BrandsMachineType, machine) => {
    if (!acc[machine.brand]) {
      acc[machine.brand] = [];
    }

    acc[machine.brand].push(machine);
    return acc;
  }, {});

  const aaaaa = Object.entries(brandsMachine).map((arrayMachines, index) => {
    const bbbbb = arrayMachines.map(machines => {
      return machines;
    });
    return {
      index,
      bbbbb,
    };
  });

  console.log(aaaaa);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: '90vh',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 2, borderColor: 'divider' }}
      >
        {Object.entries(brandsMachine).map((item, index) => (
          <Tab key={index} label={item[0]} {...a11yProps(index)} />
        ))}
      </Tabs>
      {Object.entries(aaaaa).map(arrayMachines => (
        <TabPanel
          key={arrayMachines[1].index}
          value={value}
          index={arrayMachines[1].index}
          numMachines={numMachines}
        >
          {Object.entries(machines).map((machine, i) => (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id={`panel1-header-${machines[1].model}`}
              >
                {machines.indexOf(machine[1]) == arrayMachines[1].index
                  ? machine[1].brand
                  : ''}
              </AccordionSummary>
              <AccordionDetails>
                {console.log(
                  machines.indexOf(machine[1]) == arrayMachines[1].index,
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </TabPanel>
      ))}
    </Box>
  );
}

export default VerticalTabs;
