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

interface MachinesByBrandsType {
  [brand: string]: (AutoclaveType | ThermoWasherType)[];
}

//Responsável por renderizar o conteúdo do painel que corresponde a cada aba.
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

//Retorna os props de acessibilidade para cada aba.
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

//Gerencia a lógica de estado das abas e renderiza as abas e seus respectivos painéis.
function VerticalTabs({ machines, numMachines }: VerticalTabsProps) {
  const [value, setValue] = React.useState(0);

  // Agrupa as máquinas por marca
  const machinesByBrands = machines.reduce(
    (acc: MachinesByBrandsType, machine) => {
      if (!acc[machine.brand]) {
        acc[machine.brand] = [];
      }

      acc[machine.brand].push(machine);
      return acc;
    },
    {},
  );

  // Função para lidar com a mudança de aba
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
        {Object.entries(machinesByBrands).map(([brand], index) => (
          <Tab key={index} label={brand} {...a11yProps(index)} />
        ))}
      </Tabs>
      {Object.entries(machinesByBrands).map(([brand, machines], index) => (
        <TabPanel
          key={index}
          value={value}
          index={index}
          numMachines={numMachines}
        >
          {machines.map((machine, i) => (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel1-content-${i}`}
                id={`panel1-header-${i}`}
              >
                {machine.model}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Marca:{brand}</Typography>
                {'total_vol' in machine ? (
                  // Se for uma Autoclave
                  <Typography>
                    {machine.model} (Total Volume: {machine.total_vol})
                  </Typography>
                ) : (
                  // Se for uma Thermo Washer
                  <Typography>
                    {machine.model} (Instruments Capacity:
                    {machine.instruments_capacity})
                  </Typography>
                )}
                <Typography>Preço:{machine.price}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </TabPanel>
      ))}
    </Box>
  );
}

export default VerticalTabs;
