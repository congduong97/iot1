let changeObject = {};
function broadcast() {
  Object.keys(changeObject).forEach(k => changeObject[k]());
}
let data = [];

const DeviceService = {
  setDevice: devices => {
    let newData = [];
    for (let index = 0; index < devices; index++) {
      newData.push(index);
    }
    data = [...newData];
    broadcast();
  },
  onChange: (key, cb) => {
    changeObject[key] = () => cb(data);
  },
};

export {DeviceService};
