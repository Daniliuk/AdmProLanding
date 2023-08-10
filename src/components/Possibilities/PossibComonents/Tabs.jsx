import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabsCss from "./Tabs.module.css";
import {
  BidderContent,
  SelectionPhrasesContent,
  StatisticsAnalysisContent,
  ChatGPTContent,
} from "./PossibContent";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          textColor="secondary"
          indicatorColor="secondary"
          centered
        >
          {/* <Tab label="Bidder" {...a11yProps(0)} /> */}
          <Tab label={<Bidder />} {...a11yProps(0)} />
          <Tab label={<SelectionPhrases />} {...a11yProps(1)} />
          <Tab label={<StatisticsAnalysis />} {...a11yProps(2)} />
          <Tab label={<ChatGPT />} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <BidderContent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SelectionPhrasesContent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <StatisticsAnalysisContent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ChatGPTContent />
      </CustomTabPanel>
    </Box>
  );
}

function Bidder() {
  return <div className={TabsCss.SelectButton}>Бидеер</div>;
}

function SelectionPhrases() {
  return <div className={TabsCss.SelectButton}>подбор фраз</div>;
}
function StatisticsAnalysis() {
  return <div className={TabsCss.SelectButton}>анализ статистики</div>;
}
function ChatGPT() {
  return <div className={TabsCss.SelectButton}>Запросы к ChatGpt</div>;
}
