let changeObject = {};
function broadcast() {
  Object.keys(changeObject).forEach(k => changeObject[k]());
}
let data = [];

const DeviceService = {
  setDevice: newData => {
    data = [...newData];
    broadcast();
  },
  onChange: (key, cb) => {
    changeObject[key] = () => cb(data);
  },
};

export {DeviceService};
