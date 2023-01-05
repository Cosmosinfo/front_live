import { makeAutoObservable, action, observable, computed, toJS } from "mobx";
import axios from "axios";
// import autoBind from 'react-autobind';

// @Autobind
export class MainStore {
  rootStore: any;

  constructor(rootStore: any) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    // autoBind(this);
  }

  @observable
  testList = 0;

  @computed
  get TestList() {
    // console.log('33333',this);
    return this.testList;
  }

  @action
  setTestList = (param: any) => {
    console.log("setting");
    this.getMainData();
    this.testList = this.testList + param;
  };

  @observable
  mainData: any;

  @computed
  get mainDataList() {
    return toJS(this.mainData);
  }

  @action
  getMainData() {
    console.log("1", this);
    axios
      .get(`http://54.215.251.144:8080/api/stage/liveList`)
      .then((res) => {
        this.setMainData(res.data.streams);
        // console.log('mainDataList1',res)
        // console.log('123123', JSON.stringify(res.data.streams))
        // console.log('mainDataList2',this.mainDataList)
      })
      .catch((err) => console.log(err));
  }

  @action
  setMainData = (param: any) => {
    this.mainData = param;
  };
}
