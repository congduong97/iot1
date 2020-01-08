let changeObject = {};
let data = [];

function broadcast(type) {
  Object.keys(changeObject).forEach(k => changeObject[type]());
}

const ModalServive = {
  setVisible: type => {
    broadcast(type);
  },
  onChange: (key, cb) => {
    changeObject[key] = () => cb();
  },
};
export {ModalServive};
