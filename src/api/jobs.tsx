import { androidIntern } from "@/data/android_intern";
import { androidSenior } from "@/data/android_senior";
import { acquisitionIntern } from "@/data/acquisition_intern";
import { design } from "@/data/design";
import { acquisitionSenior } from "@/data/acquisition_senior";
import { ios } from "@/data/ios";


const jobs = {
  '1': androidIntern,
  '2': androidSenior,
  '3': acquisitionIntern,
  '4': design,
  '5': acquisitionSenior,
  '6': ios,
};

export const getJob = (id: '1' | '2' | '3' | '4' | '5' | '6') => {
  return jobs[id]
};
