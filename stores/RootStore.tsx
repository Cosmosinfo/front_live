import { MainStore } from "./main/MainStore";

export class RootStore {
  mainStore: any;

  constructor() {
    this.mainStore = new MainStore(this);
  }
}
