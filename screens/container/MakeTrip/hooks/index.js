/* eslint-disable react-hooks/exhaustive-deps */
import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import {searchPeople, makeTripNotifications} from '../../../../store/reducer/people/actions';

export const usePeopleSetup = () => {
  const {searchedPeoples, isLoading, isError} = useSelector(state => state.peoples);
  const dispatch = useDispatch();

  const searchPeopleSetup = useCallback(item => dispatch(searchPeople(item)));
  const sendMakeTripNotification = useCallback(item => dispatch(makeTripNotifications(item)));
  return {
    searchedPeoples,
    isLoading,
    isError,
    searchPeopleSetup,
    sendMakeTripNotification,
  };
};
