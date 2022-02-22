import * as ActionTypes from '../ActionTypes';
import { RegisterUserService, LoginUserService, LogOutUserService } from '../../services/AuthService';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const usePostData = () => {

    function RegisterAction(credentials) {
        return (dispatch) => {
            dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
            dispatch({ type: ActionTypes.LOADING });
            RegisterUserService(credentials).then((res) => {
                if (res.hasOwnProperty('success') && res.success === true) {
                    dispatch({ type: ActionTypes.SIGNUP_SUCCESS, res });
                    toast.success("Registrado con exito", {
                        position: toast.POSITION.TOP_CENTER
                      });
                } else if (res.hasOwnProperty('success') && res.success === false) {
                    dispatch({ type: ActionTypes.SIGNUP_ERROR, res });
                    toast.warning("Error al registrar", {
                        position: toast.POSITION.TOP_CENTER
                      });
                }
            }, error => {
                dispatch({ type: ActionTypes.CODE_ERROR, error })
                toast.error("Error: "+error, {
                    position: toast.POSITION.TOP_CENTER
                  });
            })
        }
    }
    function LoginAction(credentials, history) {
        return (dispatch) => {
            dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
            dispatch({ type: ActionTypes.LOADING });
            LoginUserService(credentials).then((res) => {
                if (res.hasOwnProperty('success') && res.success === true) {
                    localStorage.setItem('user-token', res.token)
                    dispatch({ type: ActionTypes.LOGIN_SUCCESS });
                    toast.success("Logeado con exito", {
                        position: toast.POSITION.TOP_CENTER
                      });
                    history('/user');
                } else if (res.hasOwnProperty('success') && res.success === false) {
                    dispatch({ type: ActionTypes.LOGIN_ERROR, res });
                    toast.warning("Error al logear: "+res.message, {
                        position: toast.POSITION.TOP_CENTER
                      });
                }

            }, error => {
                dispatch({ type: ActionTypes.CODE_ERROR, error })     
                toast.error("Error: "+error, {
                    position: toast.POSITION.TOP_CENTER
                  });          
            })
        }
    }

    function LogoutAction() {
        return (dispatch) => {
            dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
            LogOutUserService().then((res) => {
                if (res.hasOwnProperty('success') && res.success === true) {
                    dispatch({ type: ActionTypes.LOGOUT_SUCCESS, res });
                } else if (res.hasOwnProperty('success') && res.success === false) {
                    dispatch({ type: ActionTypes.LOGOUT_SUCCESS, res });
                }
            }, error => {
                dispatch({ type: ActionTypes.CODE_ERROR, error })
            })
        }
    }

    return { LoginAction, RegisterAction, LogoutAction };
};

export default usePostData;