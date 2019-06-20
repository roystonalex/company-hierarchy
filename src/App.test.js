
import App from '../js/App';

const data_1 =
  ['PLACE 0,0,EAST',
    'MOVE',
    'MOVE',
    'RIGHT',
    'LEFT',
    'REPORT'];

const data_2 =
  ['PLACE 0,3,EAST',
    'MOVE',
    'dbfgfnb',
    'RIGHT',
    '43654536  ',
    'MOVE',
    'RIGHT'];

const data_3 =
  ['MOVE',
    'dbfgfnb',
    'RIGHT',
    'PLACE 0,3,EAST',
    'MOVE',
    'dbfgfnb',
    'RIGHT',
    '43654536  ',
    'MOVE',
    'RIGHT'];

const data_4 =
  ['MOVE',
    'dbfgfnb',
    'RIGHT',
    'PLACE 0,3,EAST',
    'MOVE',
    'dbfgfnb',
    'PLACE 0,3',
    'RIGHT',
    '43654536  ',
    'MOVE',
    'RIGHT',
    'REPORT'];

const data_5 =
  [ 'PLACE 0,3,NORTH',
    'dbfgfnb',
    'RIGHT',
    'PLACE 0,3,EAST',
    'REPORT',
    'MOVE',
    'dbfgfnb',
    'PLACE 0,3',
    'REPORT',
    'RIGHT',
    '43654536  ',
    'MOVE',
    'RIGHT',
    'REPORT'];

    const data_6 = [];


test("Simple condition: All commands valid and in order", () => {
  expect(new App().readCommand(data_1)).toBe("2,0,EAST");
});

test("Starts with valid PLACE command follows with mix of valid and invalid commands", () => {
  expect(new App().readCommand(data_2)).toBe("1,2,WEST");
});

test("Does not start with PLACE command follows with mix of valid and invalid commands", () => {
  expect(new App().readCommand(data_3)).toBe("1,2,WEST");
});

test("Does not start with PLACE command follows with mix of valid and invalid commands", () => {
  expect(new App().readCommand(data_4)).toBe("1,2,WEST");
});

test("Has multiple valid PLACE commands", () => {
  expect(new App().readCommand(data_5)).toBe("1,2,WEST");
});

test("Empty list: (shows initial values, but Robot is not placed)", () => {
  expect(new App().readCommand(data_6)).toBe("0,0,NORTH");
});
