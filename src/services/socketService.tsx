import { SEND_ME_SOME_DATA, UNAUTHORIZED, NAVIGATE_SOMEWHERE, HI_THERE } from "@constants/socketConstants";
import NavigationService from "@services/NavigationService";

var io = require("socket.io-client");
var socket: any = null;
const socketDomain = null // 'some url or some ip example: http://192.168.0.1:3000';

let q = { token: 'some token', something: 'else' }

export default class SocketService {

  static async connect() {
    socket = io.connect(socketDomain, {
      query: { dataToSend: JSON.stringify(q) }
    });

    socket.on('connection', () => {
      socket.emit(HI_THERE, { message: `Hi server! It's me, Amir` });
    });


    socket.on(SEND_ME_SOME_DATA, (callback: Function) => {
      console.log('sending some data');
      callback({ data: 'OK, this is the data' });
    });

    socket.on(UNAUTHORIZED, () => {
      console.log('user unauthorized!!');
    });

    socket.on(NAVIGATE_SOMEWHERE, (route: string) => {
      NavigationService.navigate(route); // as you can see, there's no navigation prop needed to handle navigation.
    });
  }

  // determines if the socket is connected or not.
  static isConnected() {
    return socket?.connected;
  }

  /**
   * 
   * to emit socket from somewhere in the app
   * you can call it with this syntax
   * SocketService.emit(.....)
   */
  static emit(...events: any[]) {
    // console.log('emitting: ', { ...events })
    if (socket)
      socket.emit(...events);
    else
      console.log('socketIO emit', 'no socket has been declared yet');
  }


  /**
   * to set a socket listener from somewhere in the app
   * you can call it with this syntax
   * SocketService.on(....);
   */
  static on(...events: any[]) {
    if (socket)
      socket.on(...events);
    else
      console.log('socketIO on', 'no socket has been declared yet');
  }

  /**
   * to disconnect from socket
   * you can call it with this syntax
   * SocketService.disconnectSocket();
   */
  static async disconnectSocket() {
    if (socket)
      socket.close();
    else
      console.log('disconnectSocketID', 'no socket has been declared yet');
  };


  /**
   * to reconnect socket
   * you can call it with this syntax
   * SocketService.reconnectSocket();
   */
  static async reconnectSocket() {
    console.log('reconnecting');
    SocketService.disconnectSocket();
    setTimeout(() => {
      SocketService.connect();
    }, 100);
  };
}