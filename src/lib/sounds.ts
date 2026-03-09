// Web Audio API sound effects
type LegacyAudioWindow = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

const AudioContextClass =
  typeof window !== "undefined"
    ? window.AudioContext ?? (window as LegacyAudioWindow).webkitAudioContext
    : undefined;

const audioContext = AudioContextClass ? new AudioContextClass() : null;

const playTone = (frequency: number, duration: number, type: OscillatorType = "sine", volume: number = 0.1) => {
  if (!audioContext) return;
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  
  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
};

export const sounds = {
  pieceClick: () => {
    playTone(800, 0.1, "sine", 0.08);
    setTimeout(() => playTone(1200, 0.08, "sine", 0.05), 50);
  },
  
  pieceHover: () => {
    playTone(600, 0.05, "sine", 0.03);
  },
  
  panelOpen: () => {
    playTone(400, 0.15, "sine", 0.06);
    setTimeout(() => playTone(600, 0.12, "sine", 0.05), 80);
    setTimeout(() => playTone(800, 0.1, "sine", 0.04), 150);
  },
  
  panelClose: () => {
    playTone(800, 0.1, "sine", 0.05);
    setTimeout(() => playTone(500, 0.12, "sine", 0.04), 60);
  },
};
