import builderData from "./data.json";
import type { ProductResponseType } from "../utils/types";

export const catalog = {
  cameras: builderData.cameraProducts as ProductResponseType[],
  plans: builderData.planProducts as ProductResponseType[],
  sensors: builderData.sensorProducts as ProductResponseType[],
  protections: builderData.protectionProducts as ProductResponseType[],
};
