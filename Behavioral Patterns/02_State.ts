/* 
Definition:
State is a behavioral design pattern that allows an object to change the behavior when its internal state changes.
 */

/* ---------- State Interface ---------- */
interface State {
  play(): void;
  pause(): void;
}

/* ---------- Context Class ---------- */
class MediaPlayer {
  private state: State;

  constructor() {
    this.state = new StoppedState(this);
  }

  setState(state: State): void {
    this.state = state;
  }

  play(): void {
    this.state.play();
  }

  pause(): void {
    this.state.pause();
  }
}

/* ---------- Concrete States ---------- */
class PlayingState implements State {
  constructor(private player: MediaPlayer) { }

  play(): void {
    console.log("Already playing.");
  }

  pause(): void {
    console.log("Pausing playback.");
    this.player.setState(new PausedState(this.player));
  }
}

class PausedState implements State {
  constructor(private player: MediaPlayer) { }

  play(): void {
    console.log("Resuming playback.");
    this.player.setState(new PlayingState(this.player));
  }

  pause(): void {
    console.log("Already paused.");
  }
}

class StoppedState implements State {
  constructor(private player: MediaPlayer) { }

  play(): void {
    console.log("Starting playback.");
    this.player.setState(new PlayingState(this.player));
  }

  pause(): void {
    console.log("Cannot pause. Player is stopped.");
  }
}

const player = new MediaPlayer();

player.pause(); // Cannot pause. Player is stopped.
player.play();  // Starting playback.
player.pause(); // Pausing playback.
player.play();  // Resuming playback.