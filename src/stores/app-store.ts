import { create } from "zustand";

export type AppStore = {
  info: {
    time: {
      year: number;
      month: number;
      day: number;
    };
    highlightDates: number[];
    eventTimeInfo: string;
    targetDate: string;
    markerMap: [number, number];
    eventLocations: {
      title: string;
      date: string;
      lunarDate: string;
      time: string;
      address: string;
    }[];
  };
};

type AppStoreAction = {
  setInfo: (info: AppStore["info"]) => void;
};

export const useAppStore = create<AppStoreAction & AppStore>((set) => ({
  info: {
    time: {
      year: 0,
      month: 0,
      day: 0,
    },
    highlightDates: [],
    eventTimeInfo: "",
    targetDate: "",
    markerMap: [0, 0],
    eventLocations: [],
  },
  setInfo: (info) => set({ info }),
}));
