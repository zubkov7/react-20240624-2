import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectRequestStatusById } from "../redux/ui/request";

export const useRequest = (thunk, ...args) => {
  const [request, setRequest] = useState();
  const dispatch = useDispatch();

  const requestStatus = useSelector((state) =>
    selectRequestStatusById(state, request?.requestId)
  );

  useEffect(() => {
    setRequest(dispatch(thunk(...args)));

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [...args, dispatch, thunk]);

  console.log(request);

  return requestStatus;
};
