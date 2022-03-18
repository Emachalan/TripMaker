/* eslint-disable react-hooks/exhaustive-deps */
import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import {
  createAccount,
  createNotification,
} from '../../../../store/reducer/profile/actions';

export const useProfileSetup = () => {
  const {profileData, isLoading, isError} = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const createAccountSetup = useCallback(item => dispatch(createAccount(item)));

  const createNotifSetup = useCallback(item =>
    dispatch(createNotification(item)),
  );

  return {
    profileData,
    isLoading,
    isError,
    createAccountSetup,
    createNotifSetup,
  };
};
