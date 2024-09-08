import { android } from "@/data/android";
import { marketing } from "@/data/marketing ";
import { swift } from "@/data/swift ";

export const getJob = (id: string) => {
  if (id === '1') {
    return android;
  } else if (id === '2') {
    return swift;
  } else if (id === '3') {
    return marketing;
  }
};
