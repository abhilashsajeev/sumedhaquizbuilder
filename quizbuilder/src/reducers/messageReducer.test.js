import messageReducer from "./messageReducer";
import * as actionTypes from "../actions/types";

describe("Message reducer", ()=> {
  it("should return a default value", ()=> {
    expect(messageReducer(undefined , {})).toEqual("")
  })
})
