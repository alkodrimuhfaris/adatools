import React from "react";
import { useSelector } from "react-redux";
import MainPairExplorer from "../../component/PairExplorer/MainPairExplorer";

export default function PairExplorerPoly() {
  const { theme } = useSelector((state) => state.theme);

  return <MainPairExplorer theme={theme} />;
}
