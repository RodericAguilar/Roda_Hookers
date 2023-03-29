import React, { useState } from "react";
import { Box } from "@mui/material";

import { useNuiEvent } from './hooks/useNuiEvent';
import { useExitListener } from './hooks/useExitListener';

import Home from "./components/Home";
import Menu from "./components/Menu";
import DownButtons from "./components/DownButtons";
import { ILocale } from "./types/Locale";
import { Locale } from "./store/Locale";
import { fetchNui } from "./utils/fetchNui";

interface IData {
  label: string;
  img: string;
  age: number;
  height: number;
  weight: number;
  reviews: number;
  id: number;
  price: number;
}

interface IAnimation {
  Label: string;
  AnimId: number;
}

const App: React.FC = () => {
  const [homeVisible, setHomeVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [buttonVisible, setButtonVisible] = useState<boolean>(false);

  const [hookers, setHookers] = useState<IData[]>([]);
  const [animations, setAnimations] = useState<IAnimation[]>([]);

  useNuiEvent<{
    locales: { [key: string]: string };
  }>("init", ({ locales }) => {
    for (const name in locales) Locale[name] = locales[name];
  });
  fetchNui("init", {});


  useNuiEvent<{ visible: boolean; }>("setHomeVisible", (data) => setHomeVisible(data.visible));
  useNuiEvent<{ visible: boolean; }>("setMenuVisible", (data) => setMenuVisible(data.visible));
  useNuiEvent<{ visible: boolean; }>("setButtonVisible", (data) => setButtonVisible(data.visible));

  useNuiEvent<{ hookers: IData[]; }>("setHookers", (data) => {
    setHookers(data.hookers);
  });

  useNuiEvent<{ animations: IAnimation[]; }>("setAnimations", (data) => {
    setAnimations(data.animations);
  });

  useExitListener(() => {
    if (menuVisible) {
      setMenuVisible(false);
    } else if (homeVisible) {
      setHomeVisible(false);
    } else if (buttonVisible) {
      setButtonVisible(false);
    }
  });

  return (
    <>
      {homeVisible && <Home hookers={hookers} />}
      {menuVisible && <Menu animations={animations} />}
      {buttonVisible && <DownButtons />}
    </>
  )
};

export default App;
