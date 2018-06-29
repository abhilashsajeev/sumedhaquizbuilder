import dataReducer from "./dataReducer";
import * as actionTypes from "../actions/types";

describe("Data reducer", ()=> {
  it("should return a default value", ()=> {
    expect(dataReducer(undefined, {})).toEqual("loading")
  });
})
