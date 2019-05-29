import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { SetPinBase } from '../component/pin-entry';

//
// Set Pin Confirm View (Mobile)
//

const SetPinConfirmView = ({ store, auth }) => (
  <SetPinBase
    title="Re-type PIN"
    copy="Type your PIN again to make sure it's the correct one."
    pin={store.auth.pinVerify}
    pushDigit={digit => auth.pushPinDigit({ digit, param: 'pinVerify' })}
    popDigit={() => auth.popPinDigit({ param: 'pinVerify' })}
  />
);

SetPinConfirmView.propTypes = {
  store: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default observer(SetPinConfirmView);
