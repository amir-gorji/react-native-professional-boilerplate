import { CommonActions, StackActions } from '@react-navigation/native';

interface resetObject {
  name: string;
  params?: any;
}

let _navigator: any

/**
 * 
 * Initialize the service whith giving the init function to the Navigation container ref
 * afterwards it handles everything automatically.
 */
export function init(navigatorRef: any) {
  _navigator = navigatorRef
}

export function navigate(route: String, params?: any, key?: any) {
  _navigator.navigate({ name: route, params: params, key });
}

/**
 * Push route to stack
 */
export function push(params: any) {
  let action = StackActions.push(params);
  _navigator.dispatch(action);
}

/**
 * Navigate back to previous route in history
 */
export function back() {
  _navigator.goBack();
}

/**
 * Navigate to the top route of stack
 */
export function popToTop() {
  _navigator.dispatch(StackActions.popToTop())
}

/**
 * Get the params of the current route
 */
export function getParam() {
  _navigator.getCurrentRoute().params;
}

/**
 * Determine the name of the current route
 */
export function getCurrentRouteName(): any {
  if (_navigator && _navigator.getCurrentRoute())
    return (_navigator.getCurrentRoute().name);
  else
    console.log('no navigator ref has been yet declared')
}
/**
 * Reset the stack with a determined route and a data as params
 */
export function resetStack(route: string, params?: any) {
  const resetAction = CommonActions.reset({
    routes: [{ name: route, params }]
  });
  _navigator.dispatch(resetAction);
}

/**
 * Reset the stack with more than one route: actually replacing a stack
 * this is extremely heplful when you want your app to navigate to some page
 * and goes to another specified route with back press action (also params handled)
 */
export function replaceStack(routes: resetObject[], index?: number) {
  const resetAction = CommonActions.reset({
    routes, index
  })
  _navigator.dispatch(resetAction);
}

export default {
  back,
  getCurrentRouteName,
  init,
  navigate,
  popToTop,
  push,
  getParam,
  resetStack,
  replaceStack
}