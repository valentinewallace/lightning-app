import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { SetPinBase } from '../component/pin-entry';

//
// Set Pin View (Mobile)
//

const SetPinView = ({ store, auth }) => (
  <SetPinBase
    title="Set PIN"
    copy="Type the PIN you want to use to unlock your wallet."
    pin={store.auth.newPin}
    pushDigit={digit => auth.pushPinDigit({ digit, param: 'newPin' })}
    popDigit={() => auth.popPinDigit({ param: 'newPin' })}
  />
);

SetPinView.propTypes = {
  store: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default observer(SetPinView);
