import React from "react";
import Recipes from "../pages/recipes";
import { recipesData } from "@/public/recipes";
export default function Recipe() {
  return <>
  <Recipes recipes={ recipesData}  />
  </>
}