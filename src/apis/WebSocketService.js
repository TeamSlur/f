import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

class WebSocketService {
    constructor(url) {
        this.socket = new SockJS(url);  // WebSocket 연결을 위한 SockJS 클라이언트
        this.client = Stomp.over(this.socket);  // Stomp 클라이언트 생성
    }

    // connect 메서드를 정의하여 연결을 처리
    connect() {
        return new Promise((resolve, reject) => {
            this.client.connect({}, frame => {
                console.log('Connected: ' + frame);
                // 구독 처리
                this.client.subscribe('/topic/document/212', message => {
                    console.log('Received message:', message.body);
                });
                resolve(frame);  // 연결 성공 시 resolve
            }, error => {
                console.error('Error connecting to WebSocket:', error);
                reject(error);  // 연결 실패 시 reject
            });
        });
    }

    // 메시지 보내기
    sendMessage(message) {
        this.client.send('/app/syncDocument', {}, message); // 메시지 전송
    }

    // 연결 종료
    disconnect() {
        if (this.client) {
            this.client.disconnect(() => {
                console.log('Disconnected from WebSocket');
            });
        }
    }
}

// WebSocketService 사용 예시
export default new WebSocketService('http://localhost:8080/ws');