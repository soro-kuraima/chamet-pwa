import { create } from 'zustand';

type CallCardState = {
  callCardVisibility: boolean;
};

type CallCardActions = {
  toggleCallCardVisibility: () => void;
};

const useCallCardStore = create<CallCardState & CallCardActions>((set) => ({
  callCardVisibility: false,
  toggleCallCardVisibility: () =>
    set((state) => ({ callCardVisibility: !state.callCardVisibility })),
}));

export { useCallCardStore };
