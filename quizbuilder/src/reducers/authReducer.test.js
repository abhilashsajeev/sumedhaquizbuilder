import authReducer from "./authReducer";
import * as actionTypes from "../actions/types";

describe("Auth reducer", ()=> {
  it("should return a default value", ()=> {
    expect(authReducer(undefined, {})).toEqual(false)
  });
  it("Should return payload for fetch user", ()=> {
    let action = {
      payload: {auth: 'text'},
      type:actionTypes.FETCH_USER
    }
    expect(authReducer(null, action)).toMatchObject({auth:'text'})
  });
})
