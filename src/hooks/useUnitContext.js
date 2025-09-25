import { useContext } from "react";
import { UnitContext } from "../context/UnitContext";

export function useUnitContext() {
  const context = useContext(UnitContext);
  if (!context) {
    throw new Error("useUnitContext must be used within a UnitProvider");
  }
  return context;
}
