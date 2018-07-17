import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {connect} from 'react-redux';

const Message =  ({message})=> (
    message ? <Snackbar
      open={true}
      message={message}
      autoHideDuration={3000}
      disableWindowBlurListener={true}
    />: null
);


export default connect((state)=> ({message: state.message}))(Message);

