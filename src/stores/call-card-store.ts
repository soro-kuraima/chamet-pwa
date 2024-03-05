import { create } from 'zustand';

type CallCardState = {
  callCardVisibility: boolean;
  audioCall: boolean;
  discoverGoLive: boolean;
};

type CallCardActions = {
  toggleCallCardVisibility: () => void;
  toggleAudioCall: () => void;
  toggleDiscoverGoLive: () => void;
};

const useCallCardStore = create<CallCardState & CallCardActions>((set) => ({
  callCardVisibility: false,
  audioCall: false,
  discoverGoLive: false,
  toggleCallCardVisibility: () =>
    set((state) => ({ callCardVisibility: !state.callCardVisibility })),
  toggleAudioCall: () => set((state) => ({ audioCall: !state.audioCall })),
  toggleDiscoverGoLive: () =>
    set((state) => ({ discoverGoLive: !state.discoverGoLive })),
}));

export { useCallCardStore };
